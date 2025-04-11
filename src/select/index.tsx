import {
  default as ArcoSelect,
  SelectProps as ArcoSelectProps,
} from "@arco-design/web-react/es/Select";
import type { SelectHandle } from "@arco-design/web-react/es/Select/interface";
import clsx from "clsx";
import { Ref, forwardRef } from "react";
import { InputCommonProps } from "../_core/types";

export type SelectProps = Omit<ArcoSelectProps, "error" | "status"> & InputCommonProps;

const SelectFunction = (props: SelectProps, ref: Ref<SelectHandle>) => {
  const { className, disabled, readOnly, ...rest } = props;
  const classPrefix = clsx(
    {
      "gio-select-readonly": readOnly,
    },
    className,
  );
  return <ArcoSelect ref={ref} {...rest} className={classPrefix} disabled={disabled || readOnly} />;
};

const ForwardRefSelect = forwardRef<SelectHandle, SelectProps>(SelectFunction);

const Select = ForwardRefSelect as typeof ForwardRefSelect & {
  Option: typeof ArcoSelect.Option;
  OptGroup: typeof ArcoSelect.OptGroup;
};
Select.displayName = "Select";
Select.Option = ArcoSelect.Option;
Select.OptGroup = ArcoSelect.OptGroup;

export default Select;
