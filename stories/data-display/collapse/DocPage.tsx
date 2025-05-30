import PropsTable, { type PropsTableData } from "@/components/props-table";
import { Typography } from "@/src";
import { Canvas, Source, Unstyled } from "@storybook/addon-docs/blocks";
import { IntlShape, injectIntl } from "react-intl";
import * as Stories from "./index.stories";

const { Title, Paragraph } = Typography;

function DocPage({ intl }: { intl: IntlShape }) {
  const { formatMessage } = intl;
  const data: PropsTableData[] = [
    {
      name: "accordion",
      description: formatMessage({ defaultMessage: "是否是手风琴模式。" }),
      type: "boolean",
    },
    {
      name: "bordered",
      description: formatMessage({ defaultMessage: "无边框样式。" }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "destroyOnHide",
      description: formatMessage({ defaultMessage: "是否销毁被折叠的面板。" }),
      type: "boolean",
    },
    {
      name: "lazyload",
      description: formatMessage({
        defaultMessage: "设置为 `true` 时，挂载时不会渲染被隐藏的面板。",
      }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "expandIconPosition",
      description: formatMessage({ defaultMessage: "展开图标的位置。" }),
      type: "'left' | 'right'",
      defaultValue: "left",
    },
    {
      name: "triggerRegion",
      description: formatMessage({ defaultMessage: "可触发折叠操作的区域。" }),
      type: "'header' | 'icon'",
    },
    {
      name: "expandIcon",
      description: formatMessage({ defaultMessage: "自定义展开图标。" }),
      type: "ReactNode",
    },
    {
      name: "activeKey",
      description: formatMessage({ defaultMessage: "当前面板选中值。" }),
      type: "string | string[]",
    },
    {
      name: "defaultActiveKey",
      description: formatMessage({ defaultMessage: "默认展开的面板。" }),
      type: "string | string[]",
    },
    {
      name: "onChange",
      description: formatMessage({ defaultMessage: "展开面板改变时触发。" }),
      type: "(key: string, keys: string[], e) => void",
    },
  ];
  const itemPropsData: PropsTableData[] = [
    {
      name: "destroyOnHide",
      description: formatMessage({
        defaultMessage: "面板被折叠时是否销毁节点，优先级高于 `Collapse` 的 `destroyOnHide`。",
      }),
      type: "boolean",
    },
    {
      name: "disabled",
      description: formatMessage({ defaultMessage: "是否禁用。" }),
      type: "boolean",
    },
    {
      name: "showExpandIcon",
      description: formatMessage({ defaultMessage: "是否展示展开按钮。" }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "name",
      description: formatMessage({ defaultMessage: "对应 activeKey，当前面板组件的的唯一标识。" }),
      type: "string",
      required: true,
    },
    {
      name: "expandIcon",
      description: formatMessage({ defaultMessage: "自定义展开图标。" }),
      type: "ReactNode",
    },
    {
      name: "extra",
      description: formatMessage({ defaultMessage: "额外节点。" }),
      type: "ReactNode",
    },
    {
      name: "header",
      description: formatMessage({ defaultMessage: "折叠面板头部内容，允许自定义。" }),
      type: "ReactNode",
    },
    {
      name: "contentStyle",
      description: formatMessage({ defaultMessage: "内容区域的附加样式。" }),
      type: "CSSProperties",
    },
  ];

  return (
    <Unstyled>
      <Title>{formatMessage({ defaultMessage: "折叠面板 Collapse" })}</Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "可以折叠 / 展开的内容区域。",
        })}
      </Paragraph>

      <Title heading={2}>{formatMessage({ defaultMessage: "示例" })}</Title>

      <Title heading={3} id="default">
        {formatMessage({ defaultMessage: "基础用法" })}
      </Title>
      <Canvas of={Stories.Default} />

      <Title heading={3} id="accordion">
        {formatMessage({ defaultMessage: "手风琴模式" })}
      </Title>
      <Canvas of={Stories.Accordion} />

      <Title heading={3} id="borderless">
        {formatMessage({ defaultMessage: "无边框" })}
      </Title>
      <Canvas of={Stories.Borderless} />

      <Title heading={3} id="expand-position">
        {formatMessage({ defaultMessage: "展开位置" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "可以通过expandIconPosition属性设置展开 Icon 的位置。",
        })}
      </Paragraph>
      <Canvas of={Stories.ExpandPosition} />

      <Title heading={3} id="lazy-load">
        {formatMessage({ defaultMessage: "懒加载" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "可以通过lazyLoad属性设置是否懒加载内容。",
        })}
      </Paragraph>
      <Canvas of={Stories.LazyLoad} />

      <Title heading={3} id="destroy-on-hide">
        {formatMessage({ defaultMessage: "隐藏时销毁内容" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "通过destroyOnHide属性可以设置销毁被折叠的面板。",
        })}
      </Paragraph>
      <Canvas of={Stories.DestoryOnHide} />

      <Title heading={3} id="trigger-region">
        {formatMessage({ defaultMessage: "触发区域" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "通过 triggerRegion 属性，设置面板可以触发折叠的区域。",
        })}
      </Paragraph>
      <Canvas of={Stories.TriggerRegion} />

      <Title heading={3} id="extra">
        {formatMessage({ defaultMessage: "额外节点" })}
      </Title>
      <Canvas of={Stories.Extra} />

      <Title heading={2}>{formatMessage({ defaultMessage: "用法" })}</Title>
      <Source
        code={`import { Collapse, CollapseProps } from "@gio-design/react";
const { Item } = Collapse;`}
        language="typescript"
      />

      <Title id="collapse-props" heading={3}>
        Collapse Props
      </Title>
      <PropsTable data={data} />

      <Title id="collapse-item-props" heading={3}>
        Collapse.Item Props
      </Title>
      <PropsTable data={itemPropsData} />
    </Unstyled>
  );
}

export default injectIntl(DocPage);
