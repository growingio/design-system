import type { RadioProps as ArcoRadioProps } from "@arco-design/web-react/es/Radio";
import ArcoRadio from "@arco-design/web-react/es/Radio";
import clsx from "clsx";

export type RadioProps = ArcoRadioProps & { readOnly?: boolean };

const Radio = (props: RadioProps) => {
  const { className, disabled, readOnly, ...rest } = props;
  const classPrefix = clsx(
    {
      "gio-radio-readonly": readOnly,
    },
    className,
  );
  return <ArcoRadio {...rest} disabled={disabled || readOnly} className={classPrefix} />;
};

Radio.displayName = "Radio";
Radio.Group = ArcoRadio.Group;
Radio.GroupContext = ArcoRadio.GroupContext;

export default Radio;
