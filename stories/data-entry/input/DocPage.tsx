import { FormattedMessage, injectIntl, IntlShape } from "react-intl";
import { Canvas, Unstyled, Source } from "@storybook/addon-docs/blocks";
import PropsTable, { type PropsTableData } from "../../../components/props-table";
import { Typography } from "../../../src";
import * as InputStories from "./index.stories";

const { Title, Paragraph } = Typography;

function DocPage({ intl: { formatMessage } }: { intl: IntlShape }) {
  const data: PropsTableData[] = [
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
      description: formatMessage({ defaultMessage: "是否是错误状态。" }),
      type: "boolean",
    },
    {
      name: "readOnly",
      description: formatMessage({ defaultMessage: "是否只读。" }),
      type: "boolean",
    },
    {
      name: "showWordLimit",
      description: formatMessage({
        defaultMessage: "配合 `maxLength`，显示字数统计。",
      }),
      type: "boolean",
    },
    {
      name: "defaultValue",
      description: formatMessage({ defaultMessage: "默认值。" }),
      type: "string",
    },
    {
      name: "placeholder",
      description: formatMessage({ defaultMessage: "输入框提示文字。" }),
      type: "string",
    },
    {
      name: "value",
      description: formatMessage({ defaultMessage: "输入框的值，受控模式。" }),
      type: "string",
    },
    {
      name: "autoWidth",
      description: formatMessage({ defaultMessage: "设置宽度自适应。" }),
      type: "boolean | object",
    },
    {
      name: "normalizeTrigger",
      description: formatMessage({
        defaultMessage: "指定 normalize 执行的时机。",
      }),
      type: "'onBlur' | 'onPressEnter'[]",
      defaultValue: "`['onBlur']`",
    },
    {
      name: "size",
      description: formatMessage({ defaultMessage: "输入框的尺寸。" }),
      type: "'mini' | 'small' | 'default' | 'large'",
      defaultValue: "'default'",
    },
    {
      name: "addAfter",
      description: formatMessage({ defaultMessage: "输入框后添加元素。" }),
      type: "ReactNode",
    },
    {
      name: "addBefore",
      description: formatMessage({ defaultMessage: "输入框前添加元素。" }),
      type: "ReactNode",
    },
    {
      name: "clearIcon",
      description: formatMessage({
        defaultMessage: "`allowClear` 时配置清除按钮的图标。",
      }),
      type: "ReactNode",
    },
    {
      name: "prefix",
      description: formatMessage({ defaultMessage: "添加前缀文字或者图标。" }),
      type: "ReactNode",
    },
    {
      name: "suffix",
      description: formatMessage({ defaultMessage: "添加后缀文字或者图标。" }),
      type: "ReactNode",
    },
    {
      name: "afterStyle",
      description: formatMessage({
        defaultMessage: "输入框后添加元素的样式。",
      }),
      type: "object",
    },
    {
      name: "beforeStyle",
      description: formatMessage({
        defaultMessage: "输入框前添加元素的样式。",
      }),
      type: "object",
    },
    {
      name: "height",
      description: formatMessage({ defaultMessage: "自定义输入框高度。" }),
      type: "number | string",
    },
    {
      name: "maxLength",
      description: formatMessage({ defaultMessage: "输入框最大输入的长度。" }),
      type: "number | object",
    },
    {
      name: "normalize",
      description: formatMessage({
        defaultMessage: "在指定时机对用户输入的值进行格式化处理。前后值不一致时，会触发 onChange。",
      }),
      type: "(value: string) => string",
    },
    {
      name: "onChange",
      description: formatMessage({ defaultMessage: "输入时的回调。" }),
      type: "(value: string, e) => void",
    },
    {
      name: "onClear",
      description: formatMessage({ defaultMessage: "点击清除按钮的回调。" }),
      type: "() => void",
    },
    {
      name: "onPressEnter",
      description: formatMessage({ defaultMessage: "按下回车键的回调。" }),
      type: "(e) => void",
    },
  ];

  return (
    <Unstyled>
      <Title>{formatMessage({ defaultMessage: "输入框 Input" })}</Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "基本表单组件，并在原生控件基础上进行了功能扩展，可以组合使用。",
        })}
      </Paragraph>

      <Title heading={2}>{formatMessage({ defaultMessage: "示例" })}</Title>
      <Title heading={3} id="basic">
        {formatMessage({ defaultMessage: "基本用法" })}
      </Title>
      <Paragraph>{formatMessage({ defaultMessage: "通过鼠标或键盘输入内容。" })}</Paragraph>
      <Canvas of={InputStories.Basic} />
      <Title heading={3} id="status">
        {formatMessage({ defaultMessage: "输入框状态" })}
      </Title>
      <Paragraph>{formatMessage({ defaultMessage: "不同的输入框状态。" })}</Paragraph>
      <Canvas of={InputStories.Status} />
      <Title heading={3} id="size">
        {formatMessage({ defaultMessage: "尺寸" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "输入框定义了四种默认尺寸，分别为：mini - 24px、small - 28px、 default - 32px、 large - 36px。",
        })}
      </Paragraph>
      <Canvas of={InputStories.Size} />
      <Title heading={3} id="label">
        {formatMessage({ defaultMessage: "前/后标签" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "指定 addBefore 和 addAfter 在输入框前后添加元素。",
        })}
      </Paragraph>
      <Canvas of={InputStories.Label} />
      <Title heading={3} id="prefix-suffix">
        {formatMessage({ defaultMessage: "前/后缀" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "通过指定 prefix 和 suffix 来在输入框内添加前缀和后缀。",
        })}
      </Paragraph>
      <Canvas of={InputStories.PrefixSuffix} />
      <Title heading={3} id="search">
        {formatMessage({ defaultMessage: "搜索框" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "带有搜索按钮的输入框，用于内容检索。",
        })}
      </Paragraph>
      <Canvas of={InputStories.Search} />
      <Title heading={3} id="search-with-loading">
        {formatMessage({ defaultMessage: "加载中的搜索框" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "通过 loading 属性可以设置搜索框在 onSearch 的时候展示 loading。",
        })}
      </Paragraph>
      <Canvas of={InputStories.SearchWithLoading} />
      <Title heading={3} id="input-group">
        {formatMessage({ defaultMessage: "输入框组" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "通过输入框组可以将多个输入框或者输入框与其他组件（比如选择框）一起使用。",
        })}
      </Paragraph>
      <Canvas of={InputStories.InputGroup} />
      <Title heading={3} id="length">
        {formatMessage({ defaultMessage: "字数统计" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "设置 maxLength 可以限制最大字数，配合 showWordLimit 可以显示字数统计。设置 maxLength.errorOnly 后不会限制用户输入字数，但是超过最大字数会展示错误状态。值得注意的是，如果配置了 showWordLimit，那么你将不能使用 suffix。",
        })}
      </Paragraph>
      <Canvas of={InputStories.Length} />
      <Title heading={3} id="text-area">
        {formatMessage({ defaultMessage: "文本区" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "一个多行纯文本编辑控件，当你希望用户输入一段相当长的、不限格式的文本，例如评论或反馈表单中的一段意见时，这很有用。",
        })}
      </Paragraph>
      <Canvas of={InputStories.TextArea} />
      <Title heading={3} id="auto-size-text-area">
        {formatMessage({ defaultMessage: "适应文本高度文本区" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "指定 autoSize，文本区会自动根据输入的文本调整文本区的高度。如果指定autoSize='{ minRows, maxRows '}，也能指定最小行数和最大行数。",
        })}
      </Paragraph>
      <Canvas of={InputStories.AutoSizeTextArea} />
      <Title heading={3} id="password">
        {formatMessage({ defaultMessage: "密码框" })}
      </Title>
      <Paragraph>{formatMessage({ defaultMessage: "用于密码的输入。" })}</Paragraph>
      <Canvas of={InputStories.Password} />
      <Title heading={3} id="normalize-value">
        {formatMessage({ defaultMessage: "格式化输入值" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "在指定时机对用户输入的值进行格式化处理，前后值不一致时，会触发 onChange。",
        })}
      </Paragraph>
      <Canvas of={InputStories.NormalizeValue} />

      <Title heading={3} id="auto-width">
        {formatMessage({ defaultMessage: "宽度自适应" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "通过 autoWidth 属性可以设置 Input 的宽度跟随文字自适应。",
        })}
      </Paragraph>
      <Canvas of={InputStories.AutoWidth} />

      <Title heading={3} id="readonly">
        {formatMessage({ defaultMessage: "只读" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "只读状态主要应用于详情展示场景。",
        })}
      </Paragraph>
      <Canvas of={InputStories.ReadOnly} />

      <Title heading={2}>
        <FormattedMessage defaultMessage="用法" />
      </Title>
      <Source
        code={`import { Input } from '@gio-design/react';
const { Search, TextArea, Password } = Input;`}
        language="tsx"
      />

      <Title id="input-props" heading={3}>
        InputProps
      </Title>
      <PropsTable data={data} />
    </Unstyled>
  );
}

export default injectIntl(DocPage);
