import React from 'react';
import {
  default as ArcoInputTag,
  InputTagProps as ArcoInputTagProps,
} from '@arco-design/web-react/es/InputTag';
import { InputCommonProps } from '../_core/types';

export type InputTagProps = Omit<ArcoInputTagProps, 'error' | 'status'> &
  InputCommonProps;

type InputTagHandle = {
  focus: () => void;
  blur: () => void;
};

const InputTagFunction = (
  props: InputTagProps,
  ref: React.Ref<InputTagHandle>,
) => {
  return <ArcoInputTag ref={ref} {...props} />;
};

const ForwardRefInputTag = React.forwardRef<HTMLDivElement, InputTagProps>(
  InputTagFunction,
);

const InputTag = ForwardRefInputTag as typeof ForwardRefInputTag;
InputTag.displayName = 'InputTag';

export default InputTag;
