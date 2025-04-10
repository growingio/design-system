import {
  default as ArcoDatePicker,
  RangePickerProps as ArcoRangePickerProps,
} from "@arco-design/web-react/es/DatePicker";
import {
  DatePickerProps as ArcoDatePickerProps,
  MonthPickerProps as ArcoMonthPickerProps,
  QuarterPickerProps as ArcoQuarterPickerProps,
  WeekPickerProps as ArcoWeekPickerProps,
  YearPickerProps as ArcoYearPickerProps,
  DatePickerDecorator,
  ModeType,
  RangePickerHandle,
} from "@arco-design/web-react/es/DatePicker/interface";
import DatePickerPanel from "@arco-design/web-react/es/DatePicker/panels/date";
import MonthPickerPanel from "@arco-design/web-react/es/DatePicker/panels/month";
import QuarterPickerPanel from "@arco-design/web-react/es/DatePicker/panels/quarter";
import WeekPickerPanel from "@arco-design/web-react/es/DatePicker/panels/week";
import YearPickerPanel from "@arco-design/web-react/es/DatePicker/panels/year";
import Picker from "@arco-design/web-react/es/DatePicker/picker";
import React, { ReactElement, Ref } from "react";
import { InputCommonProps } from "../_core/types";
import clsx from "clsx";

function wrapper<P = any>(
  picker: ReactElement<P>,
  options: { displayName: string; mode: ModeType },
) {
  return class PickerWrapper extends React.Component<P> {
    static displayName = options.displayName;

    render() {
      const { readOnly, className, disabled, ...rest } = this.props as any;
      const classPrefix = clsx(
        {
          "gio-picker-readonly": readOnly,
        },
        className,
      );
      return (
        <Picker
          className={classPrefix}
          disabled={disabled || readOnly}
          {...rest}
          picker={picker}
          mode={options.mode}
        />
      );
    }
  };
}

export type DatePickerProps = Omit<ArcoDatePickerProps, "error" | "status"> & InputCommonProps;
export type DateRangePickerProps = Omit<ArcoRangePickerProps, "error" | "status"> &
  InputCommonProps;
export type WeekPickerProps = Omit<ArcoWeekPickerProps, "error" | "status"> & InputCommonProps;
export type MonthPickerProps = Omit<ArcoMonthPickerProps, "error" | "status"> & InputCommonProps;
export type QuarterPickerProps = Omit<ArcoQuarterPickerProps, "error" | "status"> &
  InputCommonProps;
export type YearPickerProps = Omit<ArcoYearPickerProps, "error" | "status"> & InputCommonProps;

const DatePicker = wrapper<DatePickerProps>(<DatePickerPanel />, {
  displayName: "DatePicker",
  mode: "date",
});
const WeekPicker = wrapper<WeekPickerProps>(<WeekPickerPanel />, {
  displayName: "WeekPicker",
  mode: "week",
});
const MonthPicker = wrapper<MonthPickerProps>(<MonthPickerPanel />, {
  displayName: "MonthPicker",
  mode: "month",
});
const YearPicker = wrapper<YearPickerProps>(<YearPickerPanel />, {
  displayName: "YearPicker",
  mode: "year",
});
const QuarterPicker = wrapper<QuarterPickerProps>(<QuarterPickerPanel />, {
  displayName: "QuarterPicker",
  mode: "quarter",
});

const RangePickerFunction = (props: DateRangePickerProps, ref: Ref<RangePickerHandle>) => {
  const { className, disabled, readOnly, ...rest } = props;
  const classPrefix = clsx(
    {
      "gio-picker-readonly": readOnly,
    },
    className,
  );
  return (
    <ArcoDatePicker.RangePicker
      ref={ref}
      className={classPrefix}
      disabled={disabled || readOnly}
      {...rest}
    />
  );
};

const RangePicker = React.forwardRef<RangePickerHandle, DateRangePickerProps>(RangePickerFunction);

Object.assign(DatePicker, {
  RangePicker,
  WeekPicker,
  MonthPicker,
  QuarterPicker,
  YearPicker,
});

export default DatePicker as DatePickerDecorator;
