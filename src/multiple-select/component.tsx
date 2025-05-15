import clsx from "clsx";
import { useState, useContext, useMemo } from "react";
import { Checkbox, ConfigContext, Divider, Select } from "../";
import { Locale } from "../locale/interface";
import { MultipleSelectProps } from "./interface";

type ValueType = MultipleSelectProps["value"];
const CLASS_NAME = "gio-multiple-select";

export default function MultipleSelect(props: MultipleSelectProps) {
  const { className, defaultValue, value, onChange, options, ...rest } = props;
  const [controlledValue, setControlledValue] = useState<ValueType>(value ?? defaultValue ?? []);

  const { locale } = useContext(ConfigContext);
  const selectLocale = (locale as Locale)?.MultipleSelect;
  const realOptions = useMemo<MultipleSelectProps["options"]>(
    () => (options ?? []).filter((o: any) => !Object.hasOwn(o, "disable")),
    [options],
  );
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
      dropdownMenuClassName={`${CLASS_NAME}-popup-inner`}
      mode={"multiple"}
      className={classPrefix}
      value={controlledValue}
      onChange={(value, option) => {
        setControlledValue(value);
        onChange?.(value, option);
      }}
      options={options}
      dropdownRender={(dropdown) => (
        <>
          {dropdown}
          <div className={`${CLASS_NAME}-popup-actions`}>
            <Checkbox
              indeterminate={selectPart}
              checked={selectAll}
              onChange={(checked) => {
                if (checked) {
                  const value = options?.map((o: any) => (Object.hasOwn(o, "value") ? o.value : o));
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
