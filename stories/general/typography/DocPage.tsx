import { FormattedMessage, injectIntl, IntlShape } from "react-intl";
import { Canvas, Unstyled, Source } from "@storybook/blocks";
import { Typography } from "@/src";
import PropsTable, { type PropsTableData } from "../../../components/props-table";
import * as Stories from "./index.stories";

const { Title, Paragraph } = Typography;

function DocPage({ intl }: { intl: IntlShape }) {
  const { formatMessage } = intl;

  const data: PropsTableData[] = [
    {
      name: "className",
      description: formatMessage({ defaultMessage: "节点类名" }),
      type: "string | string[]",
      defaultValue: "-",
    },
    {
      name: "style",
      description: formatMessage({ defaultMessage: "节点样式" }),
      type: "CSSProperties",
      defaultValue: "-",
    },
  ];
  const titlePropsData: PropsTableData[] = [
    {
      name: "bold",
      description: formatMessage({ defaultMessage: "粗体" }),
      type: "boolean",
      defaultValue: "-",
    },
    {
      name: "code",
      description: formatMessage({ defaultMessage: "代码块样式" }),
      type: "boolean",
      defaultValue: "-",
    },
    {
      name: "delete",
      description: formatMessage({ defaultMessage: "删除线样式" }),
      type: "boolean",
      defaultValue: "-",
    },
    {
      name: "disabled",
      description: formatMessage({ defaultMessage: "禁用状态" }),
      type: "boolean",
      defaultValue: "-",
    },
    {
      name: "underline",
      description: formatMessage({ defaultMessage: "下划线样式" }),
      type: "boolean",
      defaultValue: "-",
    },
    {
      name: "type",
      description: formatMessage({ defaultMessage: "文本类型" }),
      type: "'primary' | 'secondary' | 'success' | 'error' | 'warning'",
      defaultValue: "-",
    },
    {
      name: "className",
      description: formatMessage({ defaultMessage: "节点类名" }),
      type: "string | string[]",
      defaultValue: "-",
    },
    {
      name: "ellipsis",
      description: formatMessage({
        defaultMessage:
          "自动溢出省略（只支持字符串），具体参数配置看 [EllipsisConfig](#ellipsisconfig)。不推荐使用，建议 `Typography.Ellipsis` 替代",
      }),
      type: "boolean | EllipsisConfig",
      defaultValue: "-",
    },
    {
      name: "heading",
      description: formatMessage({
        defaultMessage: "标题级别，相当于 `h1` `h2` `h3` `h4` `h5` `h6`",
      }),
      type: "1 | 2 | 3 | 4 | 5 | 6",
      defaultValue: "1",
    },
    {
      name: "mark",
      description: formatMessage({ defaultMessage: "标记样式" }),
      type: "boolean | { color: string }",
      defaultValue: "-",
    },
    {
      name: "style",
      description: formatMessage({ defaultMessage: "节点样式" }),
      type: "CSSProperties",
      defaultValue: "-",
    },
    {
      name: "copyable",
      description: formatMessage({ defaultMessage: "开启复制功能" }),
      type: "boolean | { text?: string; onCopy?: (text: string, e) => void; icon?: ReactNode; tooltips?: [ReactNode, ReactNode]; tooltipProps?: TooltipProps }",
      defaultValue: "-",
    },
    {
      name: "editable",
      description: formatMessage({ defaultMessage: "开启可编辑功能" }),
      type: "boolean | { editing?: boolean; tooltipProps?: TooltipProps; onStart?: (text, e) => void; onChange?: (text) => void; onEnd?: (text) => void }",
      defaultValue: "-",
    },
  ];

  const paragraphPropsData: PropsTableData[] = [
    {
      name: "blockquote",
      description: formatMessage({ defaultMessage: "长引用" }),
      type: "boolean",
      defaultValue: "-",
    },
    {
      name: "bold",
      description: formatMessage({ defaultMessage: "粗体" }),
      type: "boolean",
      defaultValue: "-",
    },
    {
      name: "code",
      description: formatMessage({ defaultMessage: "代码块样式" }),
      type: "boolean",
      defaultValue: "-",
    },
    {
      name: "delete",
      description: formatMessage({ defaultMessage: "删除线样式" }),
      type: "boolean",
      defaultValue: "-",
    },
    {
      name: "disabled",
      description: formatMessage({ defaultMessage: "禁用状态" }),
      type: "boolean",
      defaultValue: "-",
    },
    {
      name: "underline",
      description: formatMessage({ defaultMessage: "下划线样式" }),
      type: "boolean",
      defaultValue: "-",
    },
    {
      name: "spacing",
      description: formatMessage({
        defaultMessage:
          "段落的的行高，长文本(大于5行)的时候推荐使用默认行高，短文本(小于等于3行)推荐使用 `close` 紧密的行高",
      }),
      type: "'default' | 'close'",
      defaultValue: "default",
    },
    {
      name: "type",
      description: formatMessage({ defaultMessage: "文本类型" }),
      type: "'primary' | 'secondary' | 'success' | 'error' | 'warning'",
      defaultValue: "-",
    },
    {
      name: "className",
      description: formatMessage({ defaultMessage: "节点类名" }),
      type: "string | string[]",
      defaultValue: "-",
    },
    {
      name: "ellipsis",
      description: formatMessage({
        defaultMessage:
          "自动溢出省略（只支持字符串），具体参数配置看 [EllipsisConfig](#ellipsisconfig)。不推荐使用，建议 `Typography.Ellipsis` 替代",
      }),
      type: "boolean | EllipsisConfig",
      defaultValue: "-",
    },
    {
      name: "mark",
      description: formatMessage({ defaultMessage: "标记样式" }),
      type: "boolean | { color: string }",
      defaultValue: "-",
    },
    {
      name: "style",
      description: formatMessage({ defaultMessage: "节点样式" }),
      type: "CSSProperties",
      defaultValue: "-",
    },
    {
      name: "copyable",
      description: formatMessage({ defaultMessage: "开启复制功能" }),
      type: "boolean | { text?: string; onCopy?: (text: string, e) => void; icon?: ReactNode; tooltips?: [ReactNode, ReactNode]; tooltipProps?: TooltipProps }",
      defaultValue: "-",
    },
    {
      name: "editable",
      description: formatMessage({ defaultMessage: "开启可编辑功能" }),
      type: "boolean | { editing?: boolean; tooltipProps?: TooltipProps; onStart?: (text, e) => void; onChange?: (text) => void; onEnd?: (text) => void }",
      defaultValue: "-",
    },
  ];

  const textPropsData: PropsTableData[] = [
    {
      name: "bold",
      description: formatMessage({ defaultMessage: "粗体" }),
      type: "boolean",
      defaultValue: "-",
    },
    {
      name: "code",
      description: formatMessage({ defaultMessage: "代码块样式" }),
      type: "boolean",
      defaultValue: "-",
    },
    {
      name: "delete",
      description: formatMessage({ defaultMessage: "删除线样式" }),
      type: "boolean",
      defaultValue: "-",
    },
    {
      name: "disabled",
      description: formatMessage({ defaultMessage: "禁用状态" }),
      type: "boolean",
      defaultValue: "-",
    },
    {
      name: "underline",
      description: formatMessage({ defaultMessage: "下划线样式" }),
      type: "boolean",
      defaultValue: "-",
    },
    {
      name: "type",
      description: formatMessage({ defaultMessage: "文本类型" }),
      type: "'primary' | 'secondary' | 'success' | 'error' | 'warning'",
      defaultValue: "-",
    },
    {
      name: "className",
      description: formatMessage({ defaultMessage: "节点类名" }),
      type: "string | string[]",
      defaultValue: "-",
    },
    {
      name: "ellipsis",
      description: formatMessage({
        defaultMessage:
          "自动溢出省略（只支持字符串），具体参数配置看 [EllipsisConfig](#ellipsisconfig)。不推荐使用，建议 `Typography.Ellipsis` 替代",
      }),
      type: "boolean | EllipsisConfig",
      defaultValue: "-",
    },
    {
      name: "mark",
      description: formatMessage({ defaultMessage: "标记样式" }),
      type: "boolean | { color: string }",
      defaultValue: "-",
    },
    {
      name: "style",
      description: formatMessage({ defaultMessage: "节点样式" }),
      type: "CSSProperties",
      defaultValue: "-",
    },
    {
      name: "copyable",
      description: formatMessage({ defaultMessage: "开启复制功能" }),
      type: "boolean | { text?: string; onCopy?: (text: string, e) => void; icon?: ReactNode; tooltips?: [ReactNode, ReactNode]; tooltipProps?: TooltipProps }",
      defaultValue: "-",
    },
    {
      name: "editable",
      description: formatMessage({ defaultMessage: "开启可编辑功能" }),
      type: "boolean | { editing?: boolean; tooltipProps?: TooltipProps; onStart?: (text, e) => void; onChange?: (text) => void; onEnd?: (text) => void }",
      defaultValue: "-",
    },
  ];

  const ellipsisConfigData: PropsTableData[] = [
    {
      name: "cssEllipsis",
      description: formatMessage({
        defaultMessage: "自动溢出省略（只支持字符串），在大量使用情况下建议开启提高性能",
      }),
      type: "boolean",
      defaultValue: "-",
    },
    {
      name: "defaultExpanded",
      description: formatMessage({ defaultMessage: "默认展开" }),
      type: "boolean",
      defaultValue: "-",
    },
    {
      name: "expandable",
      description: formatMessage({ defaultMessage: "显示展开/折叠按钮" }),
      type: "boolean",
      defaultValue: "-",
    },
    {
      name: "expanded",
      description: formatMessage({ defaultMessage: "是否展开" }),
      type: "boolean",
      defaultValue: "-",
    },
    {
      name: "rows",
      description: formatMessage({ defaultMessage: "显示省略的行数" }),
      type: "number",
      defaultValue: "1",
    },
    {
      name: "ellipsisStr",
      description: formatMessage({ defaultMessage: "省略号" }),
      type: "string",
      defaultValue: "...",
    },
    {
      name: "suffix",
      description: formatMessage({ defaultMessage: "后缀" }),
      type: "string",
      defaultValue: "-",
    },
    {
      name: "showTooltip",
      description: formatMessage({ defaultMessage: "配置省略时的弹出框" }),
      type: "boolean | { type?: 'tooltip' | 'popover'; props?: Record<string, any> }",
      defaultValue: "-",
    },
    {
      name: "expandNodes",
      description: formatMessage({ defaultMessage: "配置 折叠 / 展开 的元素" }),
      type: "ReactNode[]",
      defaultValue: "-",
    },
    {
      name: "onEllipsis",
      description: formatMessage({
        defaultMessage: "在省略发生改变的时候触发，通常是窗口resize情况会触发",
      }),
      type: "(isEllipsis: boolean) => void",
      defaultValue: "-",
    },
    {
      name: "onExpand",
      description: formatMessage({
        defaultMessage: "在折叠/展开状态发生改变的时候触发，通常是点击折叠/展开按钮触发",
      }),
      type: "(isExpand: boolean, e) => void",
      defaultValue: "-",
    },
  ];

  const ellipsisPropsData: PropsTableData[] = [
    {
      name: "defaultExpanded",
      description: formatMessage({ defaultMessage: "默认展开" }),
      type: "boolean",
      defaultValue: "-",
    },
    {
      name: "disabled",
      description: formatMessage({ defaultMessage: "是否禁用省略功能" }),
      type: "boolean",
      defaultValue: "-",
    },
    {
      name: "expanded",
      description: formatMessage({ defaultMessage: "是否展开" }),
      type: "boolean",
      defaultValue: "-",
    },
    {
      name: "rows",
      description: formatMessage({ defaultMessage: "显示省略的行数" }),
      type: "number",
      defaultValue: "1",
    },
    {
      name: "className",
      description: formatMessage({ defaultMessage: "节点类名" }),
      type: "string | string[]",
      defaultValue: "-",
    },
    {
      name: "expandable",
      description: formatMessage({
        defaultMessage: "是否显示操控按钮。`2.61.0` 版本支持 `single` 属性",
      }),
      type: "boolean | { single?: boolean }",
      defaultValue: "true",
    },
    {
      name: "showTooltip",
      description: formatMessage({ defaultMessage: "是否显示弹出提示" }),
      type: "boolean | TooltipProps",
      defaultValue: "-",
    },
    {
      name: "style",
      description: formatMessage({ defaultMessage: "节点样式" }),
      type: "CSSProperties",
      defaultValue: "-",
    },
    {
      name: "expandRender",
      description: formatMessage({ defaultMessage: "自定义渲染操控按钮" }),
      type: "(expanded: boolean) => ReactNode",
      defaultValue: "-",
    },
    {
      name: "onEllipsis",
      description: formatMessage({
        defaultMessage: "当省略状态发生改变时触发，首次省略时也会触发",
      }),
      type: "(isEllipsis: boolean) => void",
      defaultValue: "-",
    },
    {
      name: "onExpand",
      description: formatMessage({ defaultMessage: "点击展开、折叠时触发" }),
      type: "(isExpand: boolean, ev: Event) => void",
      defaultValue: "-",
    },
  ];

  return (
    <Unstyled>
      <Title>
        <FormattedMessage defaultMessage="排版 Typography" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="用于展示标题、段落、文本内容。" />
      </Paragraph>

      <Title heading={2}>
        <FormattedMessage defaultMessage="示例" />
      </Title>

      <Title heading={3} id="basic">
        <FormattedMessage defaultMessage="基础用法" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="这里展示了排版的组合使用。" />
      </Paragraph>
      <Canvas of={Stories.Basic} />

      <Title heading={3} id="typography-title">
        <FormattedMessage defaultMessage="标题" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="展示不同级别的标题。" />
      </Paragraph>
      <Canvas of={Stories.TypographyTitle} />

      <Title heading={3} id="typography-text">
        <FormattedMessage defaultMessage="文本" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="不同样式的文本以及超链接组件。" />
      </Paragraph>
      <Canvas of={Stories.TypographyText} />

      <Title heading={3} id="typography-">
        <FormattedMessage defaultMessage="段落" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="文本段落样式。" />
      </Paragraph>
      <Canvas of={Stories.TypographyParagraph} />

      <Title heading={3} id="typography-ellipsis">
        <FormattedMessage defaultMessage="文本省略" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="文本省略默认样式。" />
      </Paragraph>
      <Canvas of={Stories.TypographyEllipsis} />

      <Title heading={2}>
        <FormattedMessage defaultMessage="用法" />
      </Title>
      <Source
        code={`import { Typography, type TypographyProps } from "@giod/react";`}
        language="tsx"
      />

      <Title id="typography-props" heading={3}>
        TypographyProps
      </Title>
      <PropsTable data={data} />

      <Title id="title-props" heading={3}>
        TitleProps
      </Title>
      <PropsTable data={titlePropsData} />

      <Title id="paragraph-props" heading={3}>
        ParagraphProps
      </Title>
      <PropsTable data={paragraphPropsData} />

      <Title id="text-props" heading={3}>
        TextProps
      </Title>
      <PropsTable data={textPropsData} />

      <Title id="ellipsis-config" heading={3}>
        EllipsisConfig
      </Title>
      <PropsTable data={ellipsisConfigData} />

      <Title id="ellipsis-props" heading={3}>
        EllipsisProps
      </Title>
      <PropsTable data={ellipsisPropsData} />
    </Unstyled>
  );
}

const IntlDocPage = injectIntl(DocPage);
export default IntlDocPage;
