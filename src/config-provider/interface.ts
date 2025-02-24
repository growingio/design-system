import { ReactNode } from 'react';
import { Locale } from '../locale/interface';

export type ThemeConfig = Record<string, any>;

/**
 * @title ConfigProvider
 */
export interface ConfigProviderProps {
  /**
   * @zh 当按钮中是两个汉字时，自动在两个汉字中添加一个空格。
   * @en When there are two Chinese characters in the button, a space is automatically added between two Chinese characters.
   */
  autoInsertSpaceInButton?: boolean;
  /**
   * @zh 设置语言包
   * @en Language package setting
   */
  locale?: Locale;
  /**
   * @zh 主题配置
   * @en Theme Configuration
   */
  theme?: ThemeConfig;
  /**
   * @zh 配置组件的默认尺寸，只会对支持`size`属性的组件生效。
   * @en Configure the default size of the component, which will only take effect for components that support the `size` property.
   * @defaultValue default
   */
  size?: 'mini' | 'small' | 'default' | 'large';
  /**
   * @zh 全局组件类名前缀
   * @en Global ClassName prefix
   * @defaultValue arco
   */
  prefixCls?: string;
  getPrefixCls?: (componentName: string, customPrefix?: string) => string;
  /**
   * @zh 全局弹出框挂载的父级节点。
   * @en The parent node of the global popup.
   * @defaultValue () => document.body
   */
  getPopupContainer?: (node: HTMLElement) => Element;
  /**
   * @zh 全局的加载中图标，作用于所有组件。
   * @en Global loading icon.
   */
  loadingElement?: ReactNode;
  /**
   * @zh Table 全局的分页配置。
   * @en Table Global pagination configuration.
   * @version 2.6.0
   */
  // tablePagination?: PaginationProps;
  /**
   * @zh 全局配置组件内的空组件。
   * @en Empty component in component.
   * @version 2.10.0
   */
  renderEmpty?: (componentName?: string) => ReactNode;
  /**
   * @zh 全局配置弹出框的 `focusLock`，作用于 `Modal` `Drawer` 组件。
   * @en global `focusLock`, affects component `Modal` `Drawer`.
   * @defaultValue { modal: { autoFocus: true }, drawer: { autoFocus: true }}
   * @version 2.13.0
   */
  focusLock?: {
    modal?: boolean | { autoFocus?: boolean };
    drawer?: boolean | { autoFocus?: boolean };
  };
  /**
   * @zh 视图的表现形式是从右开始向左结束。
   * @en View starts from the right and ends on the left.
   * @version 2.36.0
   */
  rtl?: boolean;
  /**
   * @zh 是否全局设置所有 `Message` 和 `Notification` 的配置。如果用了 `useMessage` 的 hook 局部设置请设置为 false
   * @en Whether to update the configuration of all `Message` and `Notification` with one click. Set to false if using the hook locale of `useMessage`
   * @defaultValue true
   * @version 2.40.0
   */
  effectGlobalNotice?: boolean;
  zIndex?: number;
  children?: ReactNode;
}
