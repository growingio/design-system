import PropsTable, { type PropsTableData } from "@/components/props-table";
import { Typography } from "@/src";
import { Canvas, Source, Unstyled } from "@storybook/blocks";
import { injectIntl, IntlShape } from "react-intl";
import * as Stories from "./index.stories";

const { Title, Paragraph } = Typography;

function DocPage({ intl }: { intl: IntlShape }) {
  const { formatMessage } = intl;

  const data: PropsTableData[] = [
    {
      name: "alignTextarea",
      description: formatMessage({ defaultMessage: "弹出框是否与输入框对齐。" }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "allowClear",
      description: formatMessage({ defaultMessage: "允许清空输入框。" }),
      type: "boolean",
    },
    {
      name: "disabled",
      description: formatMessage({ defaultMessage: "是否禁用。" }),
      type: "boolean",
    },
    {
      name: "error",
      description: formatMessage({
        defaultMessage: "是否是错误状态。",
      }),
      type: "boolean",
    },
    {
      name: "defaultValue",
      description: formatMessage({ defaultMessage: "输入框默认值。" }),
      type: "string",
    },
    {
      name: "placeholder",
      description: formatMessage({ defaultMessage: "输入框提示文字。" }),
      type: "string",
    },
    {
      name: "split",
      description: formatMessage({ defaultMessage: "选中项前后分隔符。" }),
      type: "string",
    },
    {
      name: "value",
      description: formatMessage({ defaultMessage: "输入框的值。" }),
      type: "string",
    },
    {
      name: "position",
      description: formatMessage({ defaultMessage: "下拉框的弹出位置。" }),
      type: "'top' | 'tl' | 'tr' | 'bottom' | 'bl' | 'br'",
      defaultValue: "bl",
    },
    {
      name: "clearIcon",
      description: formatMessage({ defaultMessage: "`allowClear` 时配置清除按钮的图标。" }),
      type: "ReactNode",
    },
    {
      name: "notFoundContent",
      description: formatMessage({ defaultMessage: "下拉列表没有数据时显示的内容。" }),
      type: "ReactNode",
    },
    {
      name: "autoSize",
      description: formatMessage({ defaultMessage: "是否自动调整输入框的高度。" }),
      type: "boolean | { minRows?: number; maxRows?: number }",
    },
    {
      name: "options",
      description: formatMessage({ defaultMessage: "下拉框可选项。" }),
      type: "(string| number| { label: ReactNode | string; value: string | number; disabled?: boolean })[]",
    },
    {
      name: "prefix",
      description: formatMessage({ defaultMessage: "触发关键字。" }),
      type: "string | string[]",
      defaultValue: "@",
    },
    {
      name: "triggerProps",
      description: formatMessage({
        defaultMessage:
          "可以接受所有 Trigger 组件的 [Props](/docs/components-others-trigger--docs#props)。",
      }),
      type: "Partial<TriggerProps>",
    },
    {
      name: "wrapperStyle",
      description: formatMessage({
        defaultMessage:
          "开启字数统计之后，会在 `textarea` 标签外包一层 `div`，`wrapperStyle` 用来配置这个 `div` 的样式。",
      }),
      type: "CSSProperties",
    },
    {
      name: "filterOption",
      description: formatMessage({
        defaultMessage: "是否根据输入的值筛选数据，可传入函数自定义过滤逻辑。",
      }),
      type: "false | ((inputValue: string, option) => boolean)",
    },
    {
      name: "getPopupContainer",
      description: formatMessage({ defaultMessage: "弹出框挂载的父节点。" }),
      type: "(node: HTMLElement) => HTMLElement",
    },
    {
      name: "onBlur",
      description: formatMessage({ defaultMessage: "失焦时的回调。" }),
      type: "(e) => void",
    },
    {
      name: "onChange",
      description: formatMessage({ defaultMessage: "输入改变时的回调。" }),
      type: "(value: string) => void",
    },
    {
      name: "onClear",
      description: formatMessage({ defaultMessage: "点击清除按钮的回调。" }),
      type: "() => void",
    },
    {
      name: "onFocus",
      description: formatMessage({ defaultMessage: "聚焦时的回调。" }),
      type: "(e) => void",
    },
    {
      name: "onPressEnter",
      description: formatMessage({ defaultMessage: "按下回车键的回调。" }),
      type: "(e) => void",
    },
    {
      name: "onSearch",
      description: formatMessage({ defaultMessage: "搜索时的回调。" }),
      type: "(text: string, prefix: string) => void",
    },
  ];

  return (
    <Unstyled>
      <Title>{formatMessage({ defaultMessage: "提及 Mentions" })}</Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "用于在输入中提及某人或某事，常用于发布、聊天或评论功能。",
        })}
      </Paragraph>

      <Title heading={2}>{formatMessage({ defaultMessage: "示例" })}</Title>

      <Title heading={3} id="default">
        {formatMessage({ defaultMessage: "基础用法" })}
      </Title>
      <Canvas of={Stories.Default} />

      <Title heading={3} id="prefix">
        {formatMessage({ defaultMessage: "自定义触发字符" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "指定 prefix 来自定义触发字符。默认为 @，可以自定义为任意字符。",
        })}
      </Paragraph>
      <Canvas of={Stories.Prefix} />

      <Title heading={3} id="disable">
        {formatMessage({ defaultMessage: "禁用状态" })}
      </Title>
      <Canvas of={Stories.Disabled} />

      <Title heading={3} id="error">
        {formatMessage({ defaultMessage: "错误状态" })}
      </Title>
      <Canvas of={Stories.Error} />

      <Title heading={3} id="readonly">
        {formatMessage({ defaultMessage: "只读状态" })}
      </Title>
      <Canvas of={Stories.Readonly} />

      <Title heading={3} id="allow-clear">
        {formatMessage({ defaultMessage: "允许清除" })}
      </Title>
      <Canvas of={Stories.AllowClear} />

      <Title heading={3} id="disabled-options">
        {formatMessage({ defaultMessage: "禁用选项" })}
      </Title>
      <Canvas of={Stories.DisabledOptions} />

      <Title heading={2}>{formatMessage({ defaultMessage: "用法" })}</Title>
      <Source
        code={`import { Mentions, type MentionsProps } from "@gio-design/react";`}
        language="typescript"
      />

      <Title id="props" heading={3}>
        MentionsProps
      </Title>
      <PropsTable data={data} />
    </Unstyled>
  );
}

export default injectIntl(DocPage);
