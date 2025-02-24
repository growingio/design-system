import * as React from 'react';
import clsx from 'clsx';
import { SizeType } from '../_core/types';

export interface AvatarTagProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'className'> {
  className?: string | string[];
  imageSrc: string;
  size?: SizeType;
  label: React.ReactNode;
  mode?: 'light' | 'dark';
}

const AvatarTagFunction = (
  props: AvatarTagProps,
  ref: React.Ref<HTMLSpanElement>,
) => {
  const prefixCls = 'arco-avatar-tag';
  const {
    className,
    size = 'small',
    imageSrc,
    label,
    mode = 'light',
    ...restProps
  } = props;
  const cls = clsx(
    prefixCls,
    {
      [`${prefixCls}-${size}`]: !!size,
      [`${prefixCls}-${mode}`]: !!mode,
    },
    className,
  );

  return (
    <span ref={ref} {...restProps} className={cls}>
      <img className={`${prefixCls}-avatar`} src={imageSrc} />
      <span className={`${prefixCls}-label`}>{label}</span>
    </span>
  );
};

const ForwardRefAvatarTag = React.forwardRef<HTMLSpanElement, AvatarTagProps>(
  AvatarTagFunction,
);

const AvatarTag = ForwardRefAvatarTag as typeof ForwardRefAvatarTag;
AvatarTag.displayName = 'AvatarTag';

export default AvatarTag;
