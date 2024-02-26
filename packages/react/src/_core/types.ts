export type SizeType = 'mini' | 'small' | 'default' | 'large';
export type ColorType =
  | 'red'
  | 'orangered'
  | 'orange'
  | 'gold'
  | 'lime'
  | 'green'
  | 'cyan'
  | 'arcoblue'
  | 'purple'
  | 'pinkpurple'
  | 'magenta'
  | 'gray'
  | string;

export interface InputCommonProps {
  /**
   * @zh_CN 是否是错误状态。
   * @en_US Whether the textarea is error.
   */
  error?: boolean;
}

export type DropdownPositionType = 'bl' | 'bottom' | 'br' | 'tl' | 'top' | 'tr';
