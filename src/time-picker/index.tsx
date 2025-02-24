import React, { Component, Ref } from 'react';
import {
  default as ArcoTimePicker,
  TimePickerProps as ArcoTimePickerProps,
  TimeRangePickerProps as ArcoTimeRangePickerProps,
} from '@arco-design/web-react/es/TimePicker';
import { InputCommonProps } from '../_core/types';

export type TimePickerProps = Omit<ArcoTimePickerProps, 'error' | 'status'> &
  InputCommonProps;
export type TimeRangePickerProps = Omit<
  ArcoTimeRangePickerProps,
  'error' | 'status'
> &
  InputCommonProps;

const TimePickerFunction = (
  props: TimePickerProps,
  ref: Ref<Component<TimePickerProps, 'TimePicker', 'single'>>,
) => {
  return <ArcoTimePicker ref={ref} {...props} />;
};

const RangePickerFunction = (
  props: TimeRangePickerProps,
  ref: Ref<Component<TimeRangePickerProps, 'TimePicker.RangePicker', 'range'>>,
) => {
  return <ArcoTimePicker.RangePicker ref={ref} {...props} />;
};

const ForwardRefTimePicker = React.forwardRef<
  Component<TimePickerProps, 'TimePicker', 'single'>,
  TimePickerProps
>(TimePickerFunction);

const ForwardRefRangePicker = React.forwardRef<
  Component<TimeRangePickerProps, 'TimePicker.RangePicker', 'range'>,
  TimeRangePickerProps
>(RangePickerFunction);

const TimePicker = ForwardRefTimePicker as typeof ForwardRefTimePicker & {
  RangePicker: typeof ForwardRefRangePicker;
};
TimePicker.displayName = 'TimePicker';
TimePicker.RangePicker = ForwardRefRangePicker;

export default TimePicker;
