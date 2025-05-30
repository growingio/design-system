import { FormattedMessage, injectIntl, IntlShape } from "react-intl";
import { Canvas, Unstyled, Source } from "@storybook/addon-docs/blocks";
import PropsTable, { type PropsTableData } from "@/components/props-table";
import { Typography } from "@/src";
import * as Stories from "./index.stories";

const { Title, Paragraph } = Typography;

function DocPage({ intl }: { intl: IntlShape }) {
  const { formatMessage } = intl;
  const data = [
    {
      name: "accordion",
      description: formatMessage({ defaultMessage: "开启手风琴效果。" }),
      type: "boolean",
    },
    {
      name: "autoOpen",
      description: formatMessage({ defaultMessage: "默认展开所有多级菜单。" }),
      type: "boolean",
    },
    {
      name: "autoScrollIntoView",
      description: formatMessage({ defaultMessage: "是否自动滚动选中项目到可见区域。" }),
      type: "boolean",
    },
    {
      name: "collapse",
      description: formatMessage({ defaultMessage: "是否水平折叠收起菜单。" }),
      type: "boolean",
    },
    {
      name: "hasCollapseButton",
      description: formatMessage({ defaultMessage: "是否内置折叠按钮。" }),
      type: "boolean",
    },
    {
      name: "selectable",
      description: formatMessage({ defaultMessage: "菜单选项是否可选。" }),
      type: "boolean",
      defaultValue: "`true`",
    },
    {
      name: "levelIndent",
      description: formatMessage({ defaultMessage: "层级之间的缩进量。" }),
      type: "number",
    },
    {
      name: "mode",
      description: formatMessage({
        defaultMessage: "菜单类型，目前支持垂直（vertical）、水平菜单（horizontal）、弹出（pop）。",
      }),
      type: "'vertical' | 'horizontal' | 'pop' | 'popButton'",
      defaultValue: "`vertical`",
    },
    {
      name: "theme",
      description: formatMessage({ defaultMessage: "菜单风格。" }),
      type: "'light' | 'dark'",
      defaultValue: "`light`",
    },
    {
      name: "defaultOpenKeys",
      description: formatMessage({ defaultMessage: "初始展开的子菜单 key 数组。" }),
      type: "string[]",
    },
    {
      name: "defaultSelectedKeys",
      description: formatMessage({ defaultMessage: "初始选中的菜单项 key 数组。" }),
      type: "string[]",
    },
    {
      name: "ellipsis",
      description: formatMessage({ defaultMessage: "水平菜单是否自动溢出省略。" }),
      type: "boolean| {text?: ReactNode;}",
      defaultValue: "`true`",
    },
    {
      name: "icons",
      description: formatMessage({ defaultMessage: "用于定制图标。" }),
      type: "{horizontalArrowDown?: ReactNode | null;popArrowRight?: ReactNode | null;collapseDefault?: ReactNode | null;collapseActive?: ReactNode | null;}",
    },
    {
      name: "openKeys",
      description: formatMessage({ defaultMessage: "展开的子菜单 key 数组（受控模式）。" }),
      type: "string[]",
    },
    {
      name: "scrollConfig",
      description: formatMessage({
        defaultMessage:
          "滚动到可见区域的配置项，接收所有[scroll-into-view-if-needed](https://github.com/stipsan/scroll-into-view-if-needed)的参数。",
      }),
      type: "{ [key: string]: any }",
    },
    {
      name: "selectedKeys",
      description: formatMessage({ defaultMessage: "选中的菜单项 key 数组（受控模式）。" }),
      type: "string[]",
    },
    {
      name: "tooltipProps",
      description: formatMessage({ defaultMessage: "弹出模式下可接受所有 `ToolTip` 的 `Props`。" }),
      type: "Partial<TooltipProps>",
    },
    {
      name: "triggerProps",
      description: formatMessage({ defaultMessage: "弹出模式下可接受所有 `Trigger` 的 `Props`。" }),
      type: "Partial<TriggerProps>",
    },
    {
      name: "onClickMenuItem",
      description: formatMessage({ defaultMessage: "点击菜单项的回调。" }),
      type: "(key: string, event, keyPath: string[]) => any",
    },
    {
      name: "onClickSubMenu",
      description: formatMessage({ defaultMessage: "点击子菜单标题的回调。" }),
      type: "(key: string, openKeys: string[], keyPath: string[]) => void",
    },
    {
      name: "onCollapseChange",
      description: formatMessage({ defaultMessage: "折叠状态改变时的回调。" }),
      type: "(collapse: boolean) => void",
    },
    {
      name: "onEllipsisChange",
      description: formatMessage({ defaultMessage: "水平菜单自动超出省略发生变化时的回调。" }),
      type: "(status: { lastVisibleIndex: number; overflowNodes: ReactNode[] }) => void",
    },
  ];
  const subMenuPropsData: PropsTableData[] = [
    {
      name: "selectable",
      description: formatMessage({
        defaultMessage: "是否将多级菜单头也作为一个菜单项，支持点击选中等状态。",
      }),
      type: "boolean",
    },
    {
      name: "key",
      description: formatMessage({ defaultMessage: "唯一标志。" }),
      type: "string",
      required: true,
    },
    {
      name: "title",
      description: formatMessage({ defaultMessage: "子菜单的标题。" }),
      type: "string | ReactNode",
    },
    {
      name: "triggerProps",
      description: formatMessage({ defaultMessage: "弹出模式下可接受所有 `Trigger` 的 `Props`。" }),
      type: "Partial<TriggerProps>",
    },
    {
      name: "popup",
      description: formatMessage({
        defaultMessage: "是否强制使用弹出模式，`level` 表示当前子菜单的层级。",
      }),
      type: "boolean | ((level: number) => boolean)",
    },
  ];
  const menuItemPropsData: PropsTableData[] = [
    {
      name: "disabled",
      description: formatMessage({ defaultMessage: "菜单项禁止选中。" }),
      type: "boolean",
    },
    {
      name: "key",
      description: formatMessage({ defaultMessage: "唯一标志。" }),
      type: "string",
      required: true,
    },
    {
      name: "wrapper",
      description: formatMessage({ defaultMessage: "配置最外层标签，可以是 html 标签或是组件。" }),
      type: "string | React.FC<any> | React.ComponentClass<any>",
      defaultValue: "`div`",
    },
    {
      name: "renderItemInTooltip",
      description: formatMessage({
        defaultMessage: "菜单折叠时，指定在 Tooltip 中展示的菜单项节点。",
      }),
      type: "() => ReactNode",
    },
  ];

  return (
    <Unstyled>
      <Title>
        <FormattedMessage defaultMessage="菜单 Menu" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="收纳、排列并展示一系列选项的列表。" />
      </Paragraph>

      <Title heading={2}>
        <FormattedMessage defaultMessage="示例" />
      </Title>

      <Title heading={3} id="nav-menu">
        <FormattedMessage defaultMessage="顶部导航" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="设置 mode 为 horizontal 时，使用水平菜单。" />
      </Paragraph>
      <Canvas of={Stories.NavMenu} />

      <Title heading={3} id="collapse">
        <FormattedMessage defaultMessage="侧边栏导航" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="通过 collapse 来指定菜单收起。通过 renderItemInTooltip 指定菜单收起时，Tooltip 中展示的菜单项内容。" />
      </Paragraph>
      <Canvas of={Stories.Collapse} />

      <Title heading={3} id="pop">
        <FormattedMessage defaultMessage="悬浮菜单" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="指定 mode 为 pop 可以使用悬浮菜单。" />
      </Paragraph>
      <Canvas of={Stories.Pop} />

      <Title heading={3} id="pop-button">
        <FormattedMessage defaultMessage="按钮悬浮菜单" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="指定 mode 为 popButton 可以使用按钮悬浮菜单。" />
      </Paragraph>
      <Canvas of={Stories.PopButton} />

      <Title heading={2}>{formatMessage({ defaultMessage: "用法" })}</Title>
      <Source
        code={`import { Menu, type MenuProps } from "@giod/react";\nconst { Item, SubMenu } = Menu;`}
        language="tsx"
      />

      <Title id="menu-props" heading={3}>
        MenuProps
      </Title>
      <PropsTable data={data} />

      <Title id="submenu-props" heading={3}>
        Menu.SubMenu Props
      </Title>
      <PropsTable data={subMenuPropsData} />

      <Title id="menu-item-props" heading={3}>
        Menu.Item Props
      </Title>
      <PropsTable data={menuItemPropsData} />
    </Unstyled>
  );
}

const IntlDocPage = injectIntl(DocPage);
export default IntlDocPage;
