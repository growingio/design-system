import { IntlShape, injectIntl } from "react-intl";
import { Canvas, Unstyled, Source } from "@storybook/blocks";
import PropsTable, { type PropsTableData } from "../../../components/props-table";
import { Typography } from "../../../src";
import * as InputNumberStories from "./index.stories";

const { Title, Paragraph } = Typography;

function DocPage({ intl }: { intl: IntlShape }) {
  const { formatMessage } = intl;
  const data: PropsTableData[] = [
    {
      name: "disabled",
      description: formatMessage({ defaultMessage: "是否禁用。" }),
      type: "boolean",
    },
    {
      name: "error",
      description: formatMessage({ defaultMessage: "错误状态。" }),
      type: "boolean",
    },
    {
      name: "hideControl",
      description: formatMessage({ defaultMessage: "隐藏右侧按钮。" }),
      type: "boolean",
    },
    {
      name: "readOnly",
      description: formatMessage({ defaultMessage: "是否只读。" }),
      type: "boolean",
    },
    {
      name: "strictMode",
      description: formatMessage({
        defaultMessage: "严格模式下，`onChange` 回调将返回字符串类型。",
      }),
      type: "boolean",
    },
    {
      name: "max",
      description: formatMessage({ defaultMessage: "最大值。" }),
      type: "number",
      defaultValue: "Infinity",
    },
    {
      name: "min",
      description: formatMessage({ defaultMessage: "最小值。" }),
      type: "number",
      defaultValue: "-Infinity",
    },
    {
      name: "precision",
      description: formatMessage({
        defaultMessage: "数字精度。设置精度小于`step`的小数位时，取`step`的小数个数。",
      }),
      type: "number",
    },
    {
      name: "step",
      description: formatMessage({ defaultMessage: "数字变化步长。" }),
      type: "number",
      defaultValue: "1",
    },
    {
      name: "placeholder",
      description: formatMessage({ defaultMessage: "默认显示文案。" }),
      type: "string",
    },
    {
      name: "mode",
      description: formatMessage({
        defaultMessage: "`embed` - 按钮内嵌模式，`button` - 左右按钮模式。",
      }),
      type: "'embed' | 'button'",
      defaultValue: "embed",
    },
    {
      name: "size",
      description: formatMessage({ defaultMessage: "不同尺寸的数字输入框。" }),
      type: "'mini' | 'small' | 'default' | 'large'",
    },
    {
      name: "prefix",
      description: formatMessage({ defaultMessage: "显示前缀。" }),
      type: "ReactNode",
    },
    {
      name: "suffix",
      description: formatMessage({ defaultMessage: "显示后缀。" }),
      type: "ReactNode",
    },
    {
      name: "className",
      description: formatMessage({ defaultMessage: "节点类名。" }),
      type: "string | string[]",
    },
    {
      name: "defaultValue",
      description: formatMessage({ defaultMessage: "初始值。" }),
      type: "number | string",
    },
    {
      name: "icons",
      description: formatMessage({ defaultMessage: "配置图标。" }),
      type: "object",
    },
    {
      name: "style",
      description: formatMessage({ defaultMessage: "节点样式。" }),
      type: "CSSProperties",
    },
    {
      name: "value",
      description: formatMessage({ defaultMessage: "当前值。" }),
      type: "undefined | number | string",
    },
    {
      name: "formatter",
      description: formatMessage({ defaultMessage: "定义输入框展示值。" }),
      type: "(value: number | string, info: object) => string",
    },
    {
      name: "onBlur",
      description: formatMessage({
        defaultMessage: "输入框失去聚焦事件的回调。",
      }),
      type: "(e) => void",
    },
    {
      name: "onChange",
      description: formatMessage({ defaultMessage: "变化回调。" }),
      type: "(value: number) => void",
    },
    {
      name: "onFocus",
      description: formatMessage({ defaultMessage: "输入框聚焦事件的回调。" }),
      type: "(e) => void",
    },
    {
      name: "onKeyDown",
      description: formatMessage({ defaultMessage: "键盘事件回调。" }),
      type: "(e: Event) => void",
    },
    {
      name: "parser",
      description: formatMessage({
        defaultMessage: "从 formatter 转换为数字，和 formatter 搭配使用。",
      }),
      type: "(value: string) => number | string",
      defaultValue: "(input) => input.replace(/[^w.-]+/g, '')",
    },
  ];

  return (
    <Unstyled>
      <Title>{formatMessage({ defaultMessage: "数字输入框 InputNumber" })}</Title>
      <Paragraph>{formatMessage({ defaultMessage: "仅允许输入数字格式的输入框。" })}</Paragraph>

      <Title heading={2}>{formatMessage({ defaultMessage: "示例" })}</Title>

      <Title heading={3} id="basic">
        {formatMessage({ defaultMessage: "基础用法" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "通过鼠标或者键盘输入范围内的标准数值。",
        })}
      </Paragraph>
      <Canvas of={InputNumberStories.Basic} />

      <Title heading={3} id="button">
        {formatMessage({ defaultMessage: "按钮模式" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "指定 mode 为 button 来使用带按钮的数字输入框。",
        })}
      </Paragraph>
      <Canvas of={InputNumberStories.Button} />

      <Title heading={3} id="size">
        {formatMessage({ defaultMessage: "四种尺寸" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "设置 size 可以使用四种尺寸（mini, small, default, large）的数字输入框。高度分别对应24px、28px、32px、36px。",
        })}
      </Paragraph>
      <Canvas of={InputNumberStories.Size} />

      <Title heading={3} id="precision-step">
        {formatMessage({ defaultMessage: "精度和步长" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "通过 precision 来设置数字精度。当 precision 小于 step 的小数位时，精度取 step 的小数个数。",
        })}
      </Paragraph>
      <Canvas of={InputNumberStories.PrecisionAndStep} />

      <Title heading={3} id="formatter">
        {formatMessage({ defaultMessage: "格式化展示值" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "通过 formatter、 parser 配合使用可以定义输入框展示值。\n通过 formatter 中的 userTyping 参数，判断是否正在输入，可以延迟显示 formatter 后的值。",
        })}
      </Paragraph>
      <Canvas of={InputNumberStories.Formatter} />

      <Title heading={3} id="prefix-suffix">
        {formatMessage({ defaultMessage: "前缀及后缀" })}
      </Title>
      <Paragraph>{formatMessage({ defaultMessage: "可以添加前缀和后缀。" })}</Paragraph>
      <Canvas of={InputNumberStories.PrefixAndSuffix} />

      <Title heading={3} id="strict-mode">
        {formatMessage({ defaultMessage: "严格模式" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "通过 strictMode 开启严格模式以支持更高精度，onChange 此时将会返回字符串。",
        })}
      </Paragraph>
      <Canvas of={InputNumberStories.StrictMode} />

      <Title heading={2}>{formatMessage({ defaultMessage: "用法" })}</Title>
      <Source code={`import { InputNumber } from 'growingio-design';`} language="tsx" />

      <Title id="dropdown-props" heading={3}>
        InputNumber Props
      </Title>
      <PropsTable data={data} />
    </Unstyled>
  );
}

export default injectIntl(DocPage);
