import type { CSSProperties } from "react";

export type SizeType = "mini" | "small" | "default" | "large";
export type ColorType =
  | "red"
  | "orangered"
  | "orange"
  | "gold"
  | "lime"
  | "green"
  | "cyan"
  | "arcoblue"
  | "purple"
  | "pinkpurple"
  | "magenta"
  | "gray"
  | string;

export interface InputCommonProps {
  /**
   * @zh_CN 是否是错误状态。
   * @en_US Whether the textarea is error.
   */
  error?: boolean;
  /**
   * @zh_CN 只读状态。
   * @en_US Whether read only.
   */
  readOnly?: boolean;
}

export type DropdownPositionType = "bl" | "bottom" | "br" | "tl" | "top" | "tr";

export interface CommonProps {
  className?: string | string[];
  style?: CSSProperties;
}
