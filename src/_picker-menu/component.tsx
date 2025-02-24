import React, { useState, type CSSProperties, type ReactNode } from "react";
import clsx from "clsx";
import { CommonProps } from "../_core/types";

export interface PickerMenuProps extends CommonProps {
  selectedKey?: string;
  onSelectedKeyChange?: (key: string) => void;
  items: {
    key: string;
    label?: ReactNode;
  }[];
  itemClassName?: string | string[];
  itemStyle?: CSSProperties;
}

export default function PickerMenu(props: PickerMenuProps) {
  const {
    className,
    style,
    selectedKey,
    onSelectedKeyChange,
    items,
    itemClassName,
    itemStyle,
  } = props;
  const [activeKey, setActiveKey] = useState(selectedKey);
  const clsPrefix = "gio-picker-menu";
  const cls = clsx(`${clsPrefix}`, className);
  return (
    <ul className={cls} style={style}>
      {items.map(({ key, label }) => {
        const cls = clsx(
          `${clsPrefix}-item`,
          {
            [`${clsPrefix}-item-active`]: key === activeKey,
          },
          itemClassName
        );
        return (
          <li
            className={cls}
            key={key}
            style={itemStyle}
            onClick={() => {
              setActiveKey(key);
              onSelectedKeyChange?.(key);
            }}
          >
            {label}
          </li>
        );
      })}
    </ul>
  );
}
