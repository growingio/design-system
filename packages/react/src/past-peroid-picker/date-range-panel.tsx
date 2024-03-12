import React, { ReactNode } from "react";
import dayjs, { isDayjs } from "dayjs";
import { Button, DatePicker, DateRangePickerProps } from "..";
import {
  IconArrowRight,
  IconInfoCircleFill,
} from "@arco-iconbox/react-growingio";

interface DateRangePanelProps
  extends Pick<
    DateRangePickerProps,
    | "disabledDate"
    | "value"
    | "onSelect"
    | "format"
    | "defaultPickerValue"
    | "pickerValue"
    | "defaultValue"
  > {
  infoText: ReactNode;
  okText: ReactNode;
  cancelText: ReactNode;
  onOk?: () => void;
  onCancel?: () => void;
}

export default function DateRangePanel(props: DateRangePanelProps) {
  const {
    infoText,
    okText,
    cancelText,
    onOk,
    onCancel,
    format = "YYYY.MM.DD",
    value,
    ...restProps
  } = props;
  const clsPrefix = "gio-date-range-panel";

  const [startDate, endDate] = value ?? [];
  const [startFormat, endFormat] = Array.isArray(format)
    ? format
    : [format as string, format as string];
  return (
    <div className={clsPrefix}>
      <div className={`${clsPrefix}-header`}>
        <div className={`${clsPrefix}-header-info`}>
          <IconInfoCircleFill width="12" height="12" />
          <span>{infoText}</span>
        </div>
        <div className={`${clsPrefix}-header-date-range`}>
          <span>
            {(isDayjs(startDate) ? startDate : dayjs(startDate)).format(
              startFormat
            )}
          </span>
          <IconArrowRight width="16" height="16" />
          <span>
            {(isDayjs(endDate) ? endDate : dayjs(endDate)).format(endFormat)}
          </span>
        </div>
      </div>
      <DatePicker.RangePicker
        triggerElement={null}
        value={value}
        {...restProps}
      />
      <div className={`${clsPrefix}-footer`}>
        <Button type="primary" onClick={onOk}>
          {okText}
        </Button>
        <Button onClick={onCancel}>{cancelText}</Button>
      </div>
    </div>
  );
}
