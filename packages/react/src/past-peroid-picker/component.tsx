import React, { useContext, useState } from "react";
import PastTimeShortcuts from "../_past-time-shortcuts";
import PastTimeTrigger from "../_past-time-trigger/component";
import PickerMenu from "../_picker-menu";
import { Trigger } from "..";
import { ConfigContext } from "../config-provider/context";
import DateRangePanel from "./date-range-panel";
import dayjs, { Dayjs } from "dayjs";
import { parsePeriodRange } from "../utils/time-range";
import { PastTimeTriggerProps } from "../_past-time-trigger/interface";

export interface PastPeriodPickerProps
  extends Pick<PastTimeTriggerProps, "placeholder"> {
  timeRange: string;
  defaultValue?: string;
  value?: string;
  /**
   * @zh-CN 选择器的值发生变化时回调。
   * @en-US Callback when the value changed.
   *
   * @param value changed value
   * @returns void
   */
  onChange?: (value: string) => void;
}

type PanelMode = "shortcuts" | "custom";

function parseMode(value?: string): PanelMode {
  if (!value || value.startsWith("period:")) {
    return "shortcuts";
  }
  return "custom";
}

function parseTimeRange(timeRange: string): [Dayjs, Dayjs] {
  const now = dayjs().startOf("day");
  if (!timeRange) return [now, now];

  const parts = timeRange.trim().split(":");
  if (parts.length < 2) {
    throw new Error("invalid time range");
  }
  const [type, range] = parts;
  const [startString, endString] = range.split(",");
  const [start, end] = [parseInt(startString), parseInt(endString)];

  switch (type) {
    case "abs":
      return [dayjs(start), dayjs(end)];
    case "day":
      return [now.subtract(start, "day"), now.subtract(end, "day")];
  }
}

export default function PastPeroidPicker(props: PastPeriodPickerProps) {
  const { timeRange, defaultValue, value, onChange, placeholder } = props;
  const [periodStart, periodEnd] = parseTimeRange(timeRange);

  const [controlledVisible, setControlledVisible] = useState(false);
  const [controlledValue, setControlledValue] = useState(value ?? defaultValue);
  const [mode, setMode] = useState<string>(parseMode(controlledValue));
  const [comparisonPeriod, setComparisonPeriod] = useState(
    parsePeriodRange(controlledValue, timeRange)
  );

  const { locale } = useContext(ConfigContext);
  const LOCALE = locale.PastPeriodPicker;
  const clsPrefix = "gio-past-period-picker";

  function disabledDate(current: Dayjs) {
    return current.isAfter(dayjs());
  }

  function handleValueChange(value: string) {
    setControlledValue(value);
    setComparisonPeriod(parsePeriodRange(value, timeRange));
    setControlledVisible(false);
    onChange?.(value);
  }

  function handleStartDateSelected(_: string[], date: Dayjs[]) {
    const duration = periodEnd.diff(periodStart, "day");
    const [endDate] = date;
    const startDate = endDate.subtract(duration - 1, "day");
    setComparisonPeriod([startDate, endDate]);
  }

  function handleOnOk() {
    const [start, end] = comparisonPeriod;
    const currentValue = `abs:${start.valueOf()},${end.endOf("day").valueOf()}`;

    setControlledValue(currentValue);
    setControlledVisible(false);
    onChange?.(currentValue);
  }

  function handleOnCancel() {
    setControlledVisible(false);
  }

  const popup = () => {
    return (
      <div className={`${clsPrefix}-panel`}>
        <PickerMenu
          items={[
            {
              key: "shortcuts",
              label: LOCALE.shortcuts,
            },
            {
              key: "custom",
              label: LOCALE.custom,
            },
          ]}
          selectedKey={mode}
          onSelectedKeyChange={setMode}
        />
        <div className={`${clsPrefix}-content`}>
          {mode === "custom" ? (
            <DateRangePanel
              infoText={LOCALE.infoText}
              okText={LOCALE.okText}
              cancelText={LOCALE.cancelText}
              value={comparisonPeriod}
              onSelect={handleStartDateSelected}
              disabledDate={disabledDate}
              onOk={handleOnOk}
              onCancel={handleOnCancel}
              defaultPickerValue={[periodStart, periodEnd]}
            />
          ) : (
            <PastTimeShortcuts
              value={controlledValue}
              onChange={handleValueChange}
              options={[
                {
                  value: "period:2,1",
                  label: LOCALE.lastPeriod,
                },
              ]}
            />
          )}
        </div>
      </div>
    );
  };
  return (
    <Trigger
      trigger="click"
      position="bl"
      popup={popup}
      popupAlign={{ bottom: 4 }}
      popupVisible={controlledVisible}
      onVisibleChange={setControlledVisible}
    >
      <div className={`${clsPrefix}-trigger`}>
        <PastTimeTrigger
          placeholder={placeholder}
          value={controlledValue}
          shortcut={controlledValue === "period:2,1" && LOCALE.lastPeriod}
          startDate={comparisonPeriod[0].format("YYYY.MM.DD")}
          endDate={comparisonPeriod[1].format("YYYY.MM.DD")}
        />
      </div>
    </Trigger>
  );
}
