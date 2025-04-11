import type { RadioProps as ArcoRadioProps } from "@arco-design/web-react/es/Radio";
import ArcoRadio from "@arco-design/web-react/es/Radio";
import clsx from "clsx";
import { forwardRef } from "react";

export type RadioProps = ArcoRadioProps & { readOnly?: boolean };

const RadioFunction = (props: RadioProps) => {
  const { className, disabled, readOnly, ...rest } = props;
  const classPrefix = clsx(
    {
      "gio-radio-readonly": readOnly,
    },
    className,
  );
  return <ArcoRadio {...rest} disabled={disabled || readOnly} className={classPrefix} />;
};

const ForwardRefRadio = forwardRef<unknown, RadioProps>(RadioFunction);

const Radio = ForwardRefRadio as typeof ForwardRefRadio & {
  Group: typeof ArcoRadio.Group;
  GroupContext: typeof ArcoRadio.GroupContext;
};
Radio.displayName = "Radio";
Radio.Group = ArcoRadio.Group;
Radio.GroupContext = ArcoRadio.GroupContext;

export default Radio;
