import React from 'react';
import {
  default as ArcoSelect,
  SelectProps as ArcoSelectProps,
} from '@arco-design/web-react/es/Select';
import type { SelectHandle } from '@arco-design/web-react/es/Select/interface';
import { InputCommonProps } from '../_core/types';

export type SelectProps = Omit<ArcoSelectProps, 'error' | 'status'> &
  InputCommonProps;

const SelectFunction = (props: SelectProps, ref: React.Ref<SelectHandle>) => {
  return <ArcoSelect ref={ref} {...props} />;
};

const ForwardRefSelect = React.forwardRef<SelectHandle, SelectProps>(
  SelectFunction,
);

const Select = ForwardRefSelect as typeof ForwardRefSelect & {
  Option: typeof ArcoSelect.Option;
  OptGroup: typeof ArcoSelect.OptGroup;
};
Select.displayName = 'Select';
Select.Option = ArcoSelect.Option;
Select.OptGroup = ArcoSelect.OptGroup;

export default Select;
