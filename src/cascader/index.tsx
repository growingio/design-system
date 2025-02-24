import React from 'react';
import {
  default as ArcoCascader,
  CascaderProps as ArcoCascaderProps,
} from '@arco-design/web-react/es/Cascader';
import { SelectViewHandle } from '@arco-design/web-react/es/_class/select-view';
import { InputCommonProps } from '../_core/types';

export type CascaderProps = Omit<ArcoCascaderProps, 'error' | 'status'> &
  InputCommonProps;

const CascaderFunction = (
  props: CascaderProps,
  ref: React.Ref<SelectViewHandle>,
) => {
  return <ArcoCascader ref={ref} {...props} />;
};

const ForwardRefCascader = React.forwardRef<SelectViewHandle, CascaderProps>(
  CascaderFunction,
);

const Cascader = ForwardRefCascader as typeof ForwardRefCascader;
Cascader.displayName = 'Cascader';

export default Cascader;
