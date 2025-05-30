import { IntlShape, injectIntl } from "react-intl";
import { Canvas, Unstyled, Source } from "@storybook/addon-docs/blocks";
import PropsTable, { type PropsTableData } from "../../../components/props-table";
import { Typography } from "../../../src";
import * as DropdownStories from "./index.stories";

const { Title, Paragraph } = Typography;

function DocPage({ intl }: { intl: IntlShape }) {
  const { formatMessage } = intl;

  const dropdownData: PropsTableData[] = [
    {
      name: "defaultPopupVisible",
      description: formatMessage({
        defaultMessage: "控制下拉框是否默认打开。",
      }),
      type: "boolean",
    },
    {
      name: "disabled",
      description: formatMessage({ defaultMessage: "是否禁用弹出。" }),
      type: "boolean",
    },
    {
      name: "popupVisible",
      description: formatMessage({
        defaultMessage: "控制下拉框是否打开（受控模式）。",
      }),
      type: "boolean",
    },
    {
      name: "unmountOnExit",
      description: formatMessage({
        defaultMessage: "隐藏后是否销毁 DOM 结构。",
      }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "position",
      description: formatMessage({ defaultMessage: "下拉框的弹出位置。" }),
      type: "'top' | 'tl' | 'tr' | 'bottom' | 'bl' | 'br'",
      defaultValue: "bl",
    },
    {
      name: "trigger",
      description: formatMessage({ defaultMessage: "触发下拉框弹出的方式。" }),
      type: "[TriggerProps](trigger#trigger)['trigger']",
      defaultValue: "hover",
    },
    {
      name: "droplist",
      description: formatMessage({ defaultMessage: "下拉框的内容。" }),
      type: "ReactNode",
    },
    {
      name: "triggerProps",
      description: formatMessage({
        defaultMessage: "弹出框下可接受所有 `Trigger` 组件的 `Props`。",
      }),
      type: "Partial<[TriggerProps](trigger#trigger)>",
    },
    {
      name: "getPopupContainer",
      description: formatMessage({ defaultMessage: "弹出框挂在的父级节点。" }),
      type: "(node: HTMLElement) => Element",
    },
    {
      name: "onVisibleChange",
      description: formatMessage({
        defaultMessage: "弹出框打开/关闭时会触发。",
      }),
      type: "(visible: boolean) => void",
    },
  ];
  const dropdownButtonData: PropsTableData[] = [
    {
      name: "defaultPopupVisible",
      description: formatMessage({
        defaultMessage: "控制下拉框是否默认打开。",
      }),
      type: "boolean",
    },
    {
      name: "disabled",
      description: formatMessage({ defaultMessage: "是否禁用弹出。" }),
      type: "boolean",
    },
    {
      name: "popupVisible",
      description: formatMessage({
        defaultMessage: "控制下拉框是否打开（受控模式）。",
      }),
      type: "boolean",
    },
    {
      name: "unmountOnExit",
      description: formatMessage({
        defaultMessage: "隐藏后是否销毁 DOM 结构。",
      }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "position",
      description: formatMessage({ defaultMessage: "下拉框的弹出位置。" }),
      type: "'top' | 'tl' | 'tr' | 'bottom' | 'bl' | 'br'",
      defaultValue: "br",
    },
    {
      name: "size",
      description: formatMessage({
        defaultMessage: "等同于 `Button` 的 size。",
      }),
      type: "'mini' | 'small' | 'default' | 'large'",
    },
    {
      name: "trigger",
      description: formatMessage({ defaultMessage: "触发下拉框弹出的方式。" }),
      type: "[TriggerProps](trigger#trigger)['trigger']",
      defaultValue: "hover",
    },
    {
      name: "type",
      description: formatMessage({
        defaultMessage: "等同于 `Button` 的 type。",
      }),
      type: "'default' | 'primary' | 'secondary' | 'dashed' | 'outline' | 'text'",
      defaultValue: "default",
    },
    {
      name: "droplist",
      description: formatMessage({ defaultMessage: "下拉框的内容。" }),
      type: "ReactNode",
    },
    {
      name: "icon",
      description: formatMessage({
        defaultMessage: "右侧显示内容，可以是 icon 或者任意 dom 元素。",
      }),
      type: "ReactNode",
      defaultValue: "<IconMore />",
    },
    {
      name: "buttonProps",
      description: formatMessage({
        defaultMessage: "接收 button 按钮的所有 Props，应用于左侧按钮。",
      }),
      type: "ButtonProps",
    },
    {
      name: "triggerProps",
      description: formatMessage({
        defaultMessage: "弹出框下可接受所有 `Trigger` 组件的 `Props`。",
      }),
      type: "Partial<[TriggerProps](trigger#trigger)>",
    },
    {
      name: "buttonsRender",
      description: formatMessage({ defaultMessage: "自定义两个按钮的渲染。" }),
      type: "(buttons: ReactNode[]) => ReactNode[]",
    },
    {
      name: "getPopupContainer",
      description: formatMessage({ defaultMessage: "弹出框挂在的父级节点。" }),
      type: "(node: HTMLElement) => Element",
    },
    {
      name: "onClick",
      description: formatMessage({ defaultMessage: "左侧按钮的点击事件。" }),
      type: "(e: Event) => void",
    },
    {
      name: "onVisibleChange",
      description: formatMessage({
        defaultMessage: "弹出框打开/关闭时会触发。",
      }),
      type: "(visible: boolean) => void",
    },
  ];

  return (
    <Unstyled>
      <Title>{formatMessage({ defaultMessage: "下拉菜单 Dropdown" })}</Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "页面上的命令过多时，可将备选命令收纳到向下展开的浮层容器中。",
        })}
      </Paragraph>

      <Title heading={2}>{formatMessage({ defaultMessage: "示例" })}</Title>

      <Title id="basic" heading={3}>
        {formatMessage({ defaultMessage: "基础用法" })}
      </Title>
      <Paragraph>{formatMessage({ defaultMessage: "基础下拉菜单，已经禁用状态。" })}</Paragraph>
      <Canvas of={DropdownStories.Basic} />
      <Title id="position" heading={3}>
        {formatMessage({ defaultMessage: "弹出方向" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "通过 position 支持指定 6 种弹出方位，分别是：左上 - tl、正上 - top、右上 - tr、 左下（默认） - bl、正下 - bottom、右下 - br。",
        })}
      </Paragraph>
      <Canvas of={DropdownStories.Position} />
      <Title id="extra" heading={3}>
        {formatMessage({ defaultMessage: "其他元素" })}
      </Title>
      <Paragraph>{formatMessage({ defaultMessage: "设置 Menu 禁用项和插入分割线。" })}</Paragraph>
      <Canvas of={DropdownStories.Extra} />
      <Title id="trigger" heading={3}>
        {formatMessage({ defaultMessage: "触发方式" })}
      </Title>
      <Paragraph>{formatMessage({ defaultMessage: "通过 trigger 指定触发方式。" })}</Paragraph>
      <Canvas of={DropdownStories.Trigger} />
      <Title id="button" heading={3}>
        {formatMessage({ defaultMessage: "按钮下拉菜单" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "使用 Dropdown.Button 可以使用右边是额外的相关功能菜单的按钮。",
        })}
      </Paragraph>
      <Canvas of={DropdownStories.DropdownButton} />
      <Title id="sub-menu" heading={3}>
        {formatMessage({ defaultMessage: "多级菜单" })}
      </Title>
      <Paragraph>{formatMessage({ defaultMessage: "带有多级菜单的下拉框。" })}</Paragraph>
      <Canvas of={DropdownStories.SubMenu} />
      <Title id="group-menu" heading={3}>
        {formatMessage({ defaultMessage: "分组菜单" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "通过 Menu.ItemGroup 对菜单进行分组。",
        })}
      </Paragraph>
      <Canvas of={DropdownStories.GroupMenu} />
      <Title id="right-click-menu" heading={3}>
        {formatMessage({
          defaultMessage: "右键菜单",
        })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "移入区域后，可点击鼠标右键触发。",
        })}
      </Paragraph>
      <Canvas of={DropdownStories.RightClickMenu} />
      <Title id="controlled-visible" heading={3}>
        {formatMessage({
          defaultMessage: "隐藏菜单",
        })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "通过 popupVisible 和 onVisibleChange 控制下拉框的展开和收起。",
        })}
      </Paragraph>
      <Canvas of={DropdownStories.ControlledVisible} />

      <Title heading={2}>{formatMessage({ defaultMessage: "用法" })}</Title>
      <Source
        code={`import { Button, type ButtonProps } from "growingio-design";`}
        language="tsx"
      />

      <Title id="dropdown-props" heading={3}>
        Dropdown Props
      </Title>
      <PropsTable data={dropdownData} />

      <Title id="dropdown-button-props" heading={3}>
        Dropdown.Button Props
      </Title>
      <PropsTable data={dropdownButtonData} />
    </Unstyled>
  );
}

export default injectIntl(DocPage);
