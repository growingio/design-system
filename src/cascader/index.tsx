import {
  default as ArcoCascader,
  CascaderProps as ArcoCascaderProps,
} from "@arco-design/web-react/es/Cascader";
import { SelectViewHandle } from "@arco-design/web-react/es/_class/select-view";
import clsx from "clsx";
import React from "react";
import { InputCommonProps } from "../_core/types";

export type CascaderProps = Omit<ArcoCascaderProps, "error" | "status"> & InputCommonProps;

const CascaderFunction = (props: CascaderProps, ref: React.Ref<SelectViewHandle>) => {
  const { className, disabled, readOnly, ...rest } = props;
  const classPrefix = clsx(
    {
      "gio-cascader-readonly": readOnly,
    },
    className,
  );
  return (
    <ArcoCascader ref={ref} {...rest} className={classPrefix} disabled={disabled || readOnly} />
  );
};

const ForwardRefCascader = React.forwardRef<SelectViewHandle, CascaderProps>(CascaderFunction);

const Cascader = ForwardRefCascader as typeof ForwardRefCascader;
Cascader.displayName = "Cascader";

export default Cascader;
