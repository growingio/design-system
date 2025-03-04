import PropsTable, { type PropsTableData } from "@/components/props-table";
import { Typography } from "@/src";
import { Canvas, Source, Unstyled } from "@storybook/blocks";
import { IntlShape, injectIntl } from "react-intl";
import * as Stories from "./index.stories";

const { Title, Paragraph } = Typography;

function DocPage({ intl }: { intl: IntlShape }) {
  const { formatMessage } = intl;
  const data: PropsTableData[] = [
    {
      name: "destroyOnHide",
      description: formatMessage({
        defaultMessage: "是否销毁隐藏标签页的节点, `TabPane` 的该属性优先级高于 `Tabs`。",
      }),
      type: "boolean",
    },
    {
      name: "editable",
      description: formatMessage({
        defaultMessage: "是否允许增减标签。只在 `type` 为 `card` 或 `card-gutter` 时候生效。",
      }),
      type: "boolean",
    },
    {
      name: "headerPadding",
      description: formatMessage({
        defaultMessage:
          "选项卡头部是否存在水平边距。仅对 `type`等于 `line`、`text`类型的选项卡生效。",
      }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "justify",
      description: formatMessage({
        defaultMessage: "高度撑满容器，只在水平模式下生效。（默认的高度是又撑起的。）",
      }),
      type: "boolean",
    },
    {
      name: "lazyload",
      description: formatMessage({
        defaultMessage: "设置为 `true` 时，将不会在组件挂载的时候渲染被隐藏的标签页。",
      }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "showAddButton",
      description: formatMessage({
        defaultMessage: "是否显示新增按钮（仅在`editable`为`true`时生效）。",
      }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "activeTab",
      description: formatMessage({ defaultMessage: "当前选中的 tab 的 key。" }),
      type: "string",
    },
    {
      name: "defaultActiveTab",
      description: formatMessage({
        defaultMessage: "默认选中的标签选项卡，如不指定默认选择第一个。",
      }),
      type: "string",
    },
    {
      name: "direction",
      description: formatMessage({
        defaultMessage:
          "标签选项卡的方向是水平还是竖直，分别对应 `horizontal `和 `vertical`。** 注意： 已废弃，使用 tabPosition 替代。**",
      }),
      type: "'horizontal' | 'vertical'",
    },
    {
      name: "inkBarSize",
      description: formatMessage({ defaultMessage: "定制下划线尺寸。" }),
      type: "{ width?: CSSProperties['width']; height?: CSSProperties['height'] }",
    },
    {
      name: "overflow",
      description: formatMessage({
        defaultMessage: "标签页较多时候，选择滚动/下拉菜单形式展示 tab。",
      }),
      type: "'scroll' | 'dropdown'",
      defaultValue: "scroll",
    },
    {
      name: "scrollPosition",
      description: formatMessage({
        defaultMessage:
          "被选中 tab 的滚动位置，默认 auto 即会将 activeTab 滚动到可见区域，但不会特意做位置调整。",
      }),
      type: "'start' | 'end' | 'center' | 'auto' | number",
      defaultValue: "auto",
    },
    {
      name: "size",
      description: formatMessage({
        defaultMessage: "有四个尺寸供选择，分别为`mini`, `small`, `default`, `large`。",
      }),
      type: "'mini' | 'small' | 'default' | 'large'",
    },
    {
      name: "tabPosition",
      description: formatMessage({ defaultMessage: "选项卡位置。" }),
      type: "'left' | 'right' | 'top' | 'bottom'",
      defaultValue: "top",
    },
    {
      name: "type",
      description: formatMessage({ defaultMessage: "标签选项卡的类型。" }),
      type: "'line' | 'card' | 'card-gutter' | 'text' | 'rounded' | 'capsule'",
      defaultValue: "line",
    },
    {
      name: "addButton",
      description: formatMessage({ defaultMessage: "自定义新增按钮。" }),
      type: "ReactNode",
    },
    {
      name: "deleteButton",
      description: formatMessage({ defaultMessage: "自定义删除按钮。" }),
      type: "ReactNode",
    },
    {
      name: "extra",
      description: formatMessage({ defaultMessage: "显示在标签页右侧的附加。" }),
      type: "ReactNode",
    },
    {
      name: "animation",
      description: formatMessage({ defaultMessage: "是否开启过渡效果。" }),
      type: "boolean | { tabPane?: boolean; inkBar?: boolean }",
    },
    {
      name: "icons",
      description: formatMessage({
        defaultMessage:
          "标签页头部 编辑/滚动/下拉 图标配置。对于不想展示的图标可以将其设置为`null`。",
      }),
      type: "{add?: ReactNode;delete?: ReactNode;prev?: ReactNode;next?: ReactNode;dropdown?: ReactNode;}",
    },
    {
      name: "scrollAfterEdit",
      description: formatMessage({
        defaultMessage: "是否在标签增减后，自动进行滚动调整(`editable`为`true`时生效）。",
      }),
      type: "{delete?: boolean;add?: boolean;}",
      defaultValue: "{ add: true, delete: true }",
    },
    {
      name: "onAddTab",
      description: formatMessage({ defaultMessage: "点击新增 tab 按钮的回调。" }),
      type: "() => void",
    },
    {
      name: "onChange",
      description: formatMessage({ defaultMessage: "`activeTab` 改变的回调。" }),
      type: "(key: string) => void",
    },
    {
      name: "onClickTab",
      description: formatMessage({ defaultMessage: "点击选项卡的回调。" }),
      type: "(key: string) => void",
    },
    {
      name: "onDeleteTab",
      description: formatMessage({ defaultMessage: "点击删除按钮的回调。" }),
      type: "(key: string) => void",
    },
    {
      name: "renderTabHeader",
      description: formatMessage({ defaultMessage: "自定义选项卡头部。" }),
      type: "(tabProps: [TabsProps](tabs#tabs), DefaultTabHeader: typeof TabHeader) => ReactElement",
    },
    {
      name: "renderTabTitle",
      description: formatMessage({ defaultMessage: "自定义单个选项卡头部。" }),
      type: "(tabTitle: ReactNode,info: {key: string | number;isActive: boolean;disabled: boolean;editable: boolean;}) => ReactNode",
    },
  ];
  const tabPanePropsData: PropsTableData[] = [
    {
      name: "closable",
      description: formatMessage({ defaultMessage: "动态增减标签页时是否允许关闭当前标签页。" }),
      type: "boolean",
    },
    {
      name: "destroyOnHide",
      description: formatMessage({
        defaultMessage:
          "选项卡隐藏的时候是否销毁标签页内的DOM结构，优先级高于 `Tabs` 的 `destroyOnHide` 属性。",
      }),
      type: "boolean",
    },
    {
      name: "disabled",
      description: formatMessage({ defaultMessage: "是否禁用。" }),
      type: "boolean",
    },
    {
      name: "title",
      description: formatMessage({ defaultMessage: "选项卡的标题显示。" }),
      type: "string | ReactNode",
      required: true,
    },
  ];

  return (
    <Unstyled>
      <Title>{formatMessage({ defaultMessage: "标签页 Tabs" })}</Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "将内容组织同一视图中，一次可查看一个视图内容。查看其他内容可切换选项卡查看。",
        })}
      </Paragraph>

      <Title heading={2}>{formatMessage({ defaultMessage: "示例" })}</Title>

      <Title heading={3} id="default">
        {formatMessage({ defaultMessage: "基础用法" })}
      </Title>
      <Paragraph>{formatMessage({ defaultMessage: "标签的基础用法。" })}</Paragraph>
      <Canvas of={Stories.Default} />

      <Title heading={3} id="icon">
        {formatMessage({ defaultMessage: "图标用法" })}
      </Title>
      <Paragraph>
        {formatMessage({ defaultMessage: "通过自定义的 title, 可以给页签加 icon。" })}
      </Paragraph>
      <Canvas of={Stories.Icon} />

      <Title heading={3} id="tab-position">
        {formatMessage({ defaultMessage: "标签位置" })}
      </Title>
      <Paragraph>{formatMessage({ defaultMessage: "通过 tabPosition 设置位置。" })}</Paragraph>
      <Canvas of={Stories.TabPosition} />

      <Title heading={3} id="tabs-type">
        {formatMessage({ defaultMessage: "不同类型" })}
      </Title>
      <Paragraph>{formatMessage({ defaultMessage: "通过 type 设置类型。" })}</Paragraph>
      <Canvas of={Stories.TabsType} />

      <Title heading={3} id="extra">
        {formatMessage({ defaultMessage: "额外内容" })}
      </Title>
      <Paragraph>{formatMessage({ defaultMessage: "通过 extra 设置额外内容。" })}</Paragraph>
      <Canvas of={Stories.Extra} />

      <Title heading={3} id="editable">
        {formatMessage({ defaultMessage: "动态增减页签" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "动态增减页签。仅在 type=card | card-gutter的时候生效。",
        })}
      </Paragraph>
      <Canvas of={Stories.Editable} />

      <Title heading={3} id="nested">
        {formatMessage({ defaultMessage: "嵌套标签页" })}
      </Title>
      <Canvas of={Stories.Nested} />

      <Title heading={3} id="size">
        {formatMessage({ defaultMessage: "不同尺寸" })}
      </Title>
      <Canvas of={Stories.Size} />

      <Title heading={3} id="scroll">
        {formatMessage({ defaultMessage: "滚动标签页" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "支持通过滚轮或者触摸板进行滚动操作。",
        })}
      </Paragraph>
      <Canvas of={Stories.Scroll} />

      <Title heading={3} id="scroll-position">
        {formatMessage({ defaultMessage: "滚动偏移位置" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "支持设置 scrollPosition 来改变选中的选项卡的滚动位置。",
        })}
      </Paragraph>
      <Canvas of={Stories.ScrollPosition} />

      <Title heading={2}>{formatMessage({ defaultMessage: "用法" })}</Title>
      <Source
        code={`import { Tabs, TabsProps } from "@gio-design/react";
const { TabPane } = Tabs;`}
        language="typescript"
      />

      <Title id="tabs-props" heading={3}>
        Tabs Props
      </Title>
      <PropsTable data={data} />

      <Title id="tabs-tabpane-props" heading={3}>
        Tabs.TabPane Props
      </Title>
      <PropsTable data={tabPanePropsData} />
    </Unstyled>
  );
}

export default injectIntl(DocPage);
