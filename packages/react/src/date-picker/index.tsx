import React, { Component, ReactElement, Ref } from 'react';
import {
  default as ArcoDatePicker,
  RangePickerProps as ArcoRangePickerProps,
} from '@arco-design/web-react/es/DatePicker';
import Picker from '@arco-design/web-react/es/DatePicker/picker';
import DatePickerPanel from '@arco-design/web-react/es/DatePicker/panels/date';
import WeekPickerPanel from '@arco-design/web-react/es/DatePicker/panels/week';
import MonthPickerPanel from '@arco-design/web-react/es/DatePicker/panels/month';
import YearPickerPanel from '@arco-design/web-react/es/DatePicker/panels/year';
import QuarterPickerPanel from '@arco-design/web-react/es/DatePicker/panels/quarter';
import {
  DatePickerDecorator,
  DatePickerProps as ArcoDatePickerProps,
  WeekPickerProps as ArcoWeekPickerProps,
  MonthPickerProps as ArcoMonthPickerProps,
  YearPickerProps as ArcoYearPickerProps,
  QuarterPickerProps as ArcoQuarterPickerProps,
  ModeType,
} from '@arco-design/web-react/es/DatePicker/interface';
import { InputCommonProps } from '../_core/types';

function wrapper<P = any>(
  picker: ReactElement<P>,
  options: { displayName: string; mode: ModeType },
) {
  return class PickerWrapper extends React.Component<P> {
    static displayName = options.displayName;

    render() {
      return <Picker {...this.props} picker={picker} mode={options.mode} />;
    }
  };
}

export type DatePickerProps = Omit<ArcoDatePickerProps, 'error' | 'status'> &
  InputCommonProps;
export type DateRangePickerProps = Omit<
  ArcoRangePickerProps,
  'error' | 'status'
> &
  InputCommonProps;
export type WeekPickerProps = Omit<ArcoWeekPickerProps, 'error' | 'status'> &
  InputCommonProps;
export type MonthPickerProps = Omit<ArcoMonthPickerProps, 'error' | 'status'> &
  InputCommonProps;
export type QuarterPickerProps = Omit<
  ArcoQuarterPickerProps,
  'error' | 'status'
> &
  InputCommonProps;
export type YearPickerProps = Omit<ArcoYearPickerProps, 'error' | 'status'> &
  InputCommonProps;

const DatePicker = wrapper<DatePickerProps>(<DatePickerPanel />, {
  displayName: 'DatePicker',
  mode: 'date',
});
const WeekPicker = wrapper<WeekPickerProps>(<WeekPickerPanel />, {
  displayName: 'WeekPicker',
  mode: 'week',
});
const MonthPicker = wrapper<MonthPickerProps>(<MonthPickerPanel />, {
  displayName: 'MonthPicker',
  mode: 'month',
});
const YearPicker = wrapper<YearPickerProps>(<YearPickerPanel />, {
  displayName: 'YearPicker',
  mode: 'year',
});
const QuarterPicker = wrapper<QuarterPickerProps>(<QuarterPickerPanel />, {
  displayName: 'QuarterPicker',
  mode: 'quarter',
});

type RangePcikerRef = Component<
  DateRangePickerProps,
  'DatePicker.RangePicker',
  'range'
>;

const RangePickerFunction = (
  props: DateRangePickerProps,
  ref: Ref<RangePcikerRef>,
) => {
  return <ArcoDatePicker.RangePicker ref={ref} {...props} />;
};

const RangePicker = React.forwardRef<RangePcikerRef, DateRangePickerProps>(
  RangePickerFunction,
);

Object.assign(DatePicker, {
  RangePicker,
  WeekPicker,
  MonthPicker,
  QuarterPicker,
  YearPicker,
});

export default DatePicker as DatePickerDecorator;
