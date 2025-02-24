import React from 'react';
import {
  default as ArcoInput,
  InputProps as ArcoInputProps,
  RefInputType,
} from '@arco-design/web-react/es/Input';
import { InputCommonProps } from '../_core/types';

export type InputProps = Omit<ArcoInputProps, 'error' | 'status'> &
  InputCommonProps;

const InputFunction = (props: InputProps, ref: React.Ref<RefInputType>) => {
  return <ArcoInput ref={ref} {...props} />;
};

const ForwardRefInput = React.forwardRef<RefInputType, InputProps>(
  InputFunction,
);

const Input = ForwardRefInput as typeof ForwardRefInput & {
  Group: typeof ArcoInput.Group;
  Search: typeof ArcoInput.Search;
  TextArea: typeof ArcoInput.TextArea;
  Password: typeof ArcoInput.Password;
};
Input.displayName = 'Input';
Input.Group = ArcoInput.Group;
Input.Search = ArcoInput.Search;
Input.TextArea = ArcoInput.TextArea;
Input.Password = ArcoInput.Password;

export default Input;
