import type { CheckboxProps as ArcoCheckboxProps } from "@arco-design/web-react/es/Checkbox";
import ArcoCheckbox from "@arco-design/web-react/es/Checkbox";
import clsx from "clsx";
import { Ref, forwardRef } from "react";

export type CheckboxProps = ArcoCheckboxProps & { readOnly?: boolean };

const CheckboxFunction = (props: CheckboxProps, ref: Ref<unknown>) => {
  const { className, disabled, readOnly, ...rest } = props;
  const classPrefix = clsx(
    {
      "gio-checkbox-readonly": readOnly,
    },
    className,
  );
  return (
    <ArcoCheckbox ref={ref} {...rest} disabled={disabled || readOnly} className={classPrefix} />
  );
};

const ForwardRefCheckbox = forwardRef<unknown, CheckboxProps>(CheckboxFunction);

const Checkbox = ForwardRefCheckbox as typeof ForwardRefCheckbox & {
  Group: typeof ArcoCheckbox.Group;
  useCheckbox: typeof ArcoCheckbox.useCheckbox;
};
Checkbox.displayName = "Checkbox";
Checkbox.Group = ArcoCheckbox.Group;
Checkbox.useCheckbox = ArcoCheckbox.useCheckbox;

export default Checkbox;
