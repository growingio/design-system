import * as React from 'react';
import { ColorType, SizeType } from '../_core/types';
import clsx from 'clsx';
import COLORS from '../_core/colors';

export interface BadgeTagProps
  extends Omit<
    React.HTMLAttributes<HTMLSpanElement>,
    'className' | 'title' | 'content'
  > {
  className?: string | string[];
  size?: SizeType;
  icon?: React.ReactNode;
  title: React.ReactNode;
  content: React.ReactNode;
  contentColor?: ColorType;
}

const BadgeTagFunction = (
  props: BadgeTagProps,
  ref: React.Ref<HTMLSpanElement>,
) => {
  const prefixCls = 'arco-badge-tag';
  const {
    className,
    size = 'small',
    icon,
    title,
    content,
    contentColor,
    ...restProps
  } = props;
  const cls = clsx(
    prefixCls,
    {
      [`${prefixCls}-${size}`]: !!size,
    },
    className,
  );
  const contentCls = clsx(`${prefixCls}-content`, {
    [`${prefixCls}-content-color-${contentColor}`]: !!contentColor,
  });
  const contentStyle =
    !contentColor || COLORS.indexOf(contentColor) > -1
      ? {}
      : { backgroundColor: contentColor };
  return (
    <span ref={ref} {...restProps} className={cls}>
      <span className={`${prefixCls}-title`}>
        {icon && <span>{icon}</span>}
        <span>{title}</span>
      </span>
      <span className={contentCls} style={contentStyle}>
        {content}
      </span>
    </span>
  );
};

const ForwardRefBadgeTag = React.forwardRef<HTMLSpanElement, BadgeTagProps>(
  BadgeTagFunction,
);

const BadgeTag = ForwardRefBadgeTag as typeof ForwardRefBadgeTag;
BadgeTag.displayName = 'BadgeTag';

export default BadgeTag;
