import clsx from "clsx";
import { ReactElement, useContext, useMemo, useState } from "react";
import { Checkbox, ConfigContext, Divider, Select } from "../";
import { Locale } from "../locale/interface";
import { MultipleSelectProps } from "./interface";

type ValueType = string[] | number[];
const CLASS_NAME = "gio-multiple-select";

function filter(query: string, option: { label?: string; value: string | number }) {
  const lowerCaseQuery = query.trim().toLowerCase();
  const { label, value } = option;
  if (
    label?.toLowerCase().includes(lowerCaseQuery) ||
    `${value}`.toLowerCase().includes(lowerCaseQuery)
  ) {
    return true;
  }
  return false;
}

export default function MultipleSelect(props: MultipleSelectProps) {
  const { className, defaultValue, value, onChange, options, ...rest } = props;
  const realOptions = useMemo<MultipleSelectProps["options"]>(
    () => (options ?? []).filter((o) => !o.disabled),
    [options],
  );
  const memoAllValue = useMemo(() => realOptions.map((o) => o.value), [realOptions]);
  const [controlledValue, setControlledValue] = useState<ValueType>(value ?? defaultValue ?? []);
  const [allValue, setAllValue] = useState<ValueType>([]);
  const { locale } = useContext(ConfigContext);

  const selectLocale = (locale as Locale)?.MultipleSelect;

  const selectPart =
    !!realOptions &&
    !!controlledValue &&
    controlledValue.length > 0 &&
    realOptions.length > controlledValue.length;
  const selectAll =
    !!realOptions &&
    realOptions.length > 0 &&
    !!controlledValue &&
    realOptions.length === controlledValue.length;
  const classPrefix = clsx(CLASS_NAME, className);

  return (
    <Select
      {...rest}
      allowClear
      dropdownMenuClassName={`${CLASS_NAME}-popup-inner`}
      mode={"multiple"}
      className={classPrefix}
      value={controlledValue}
      onChange={(value, option) => {
        setControlledValue(value);
        onChange?.(value, option);
      }}
      options={options}
      onSearch={(value: string) => {
        if (value.length === 0) {
          setAllValue(realOptions.map((o) => o.value) as ValueType);
        } else {
          setAllValue(
            realOptions
              .filter((o) => !controlledValue.includes(o.value as never) && filter(value, o))
              .map((o) => o.value) as ValueType,
          );
        }
      }}
      filterOption={(inputValue: string, option: ReactElement) => {
        const {
          props: { value, children },
        } = option as { props: { value: string | number; children: string } };
        if (controlledValue.includes(value as never)) {
          return false;
        }
        return filter(inputValue, { value, label: children });
      }}
      dropdownRender={(dropdown) => (
        <>
          {dropdown}
          <div className={`${CLASS_NAME}-popup-actions`}>
            <Checkbox
              indeterminate={selectPart}
              checked={selectAll}
              onChange={(checked) => {
                if (checked) {
                  const value = Array.from(
                    new Set([
                      ...controlledValue,
                      ...(allValue.length === 0 ? memoAllValue : allValue),
                    ]),
                  ) as ValueType;
                  setControlledValue(value);
                  onChange?.(value, []);
                } else {
                  setControlledValue([]);
                  onChange?.([], []);
                }
              }}
            >
              {selectLocale.selectAll}
            </Checkbox>
            <Divider type="vertical" />
            <span className={`${CLASS_NAME}-popup-selected-label`}>{selectLocale.selected}</span>
            <span className={`${CLASS_NAME}-popup-selected-text`}>
              {controlledValue?.length ?? 0}
            </span>
          </div>
        </>
      )}
    />
  );
}
