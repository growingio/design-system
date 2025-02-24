import React from "react";
import { injectIntl, IntlShape } from "react-intl";
import { Canvas, Unstyled, Source } from "@storybook/blocks";
import PropsTable, { type PropsTableData } from "@repo/ui/src/props-table";
import { Typography } from "../..";
import * as InputTagStories from "./index.stories";

const { Title, Paragraph } = Typography;

function DocPage({ intl }: { intl: IntlShape }) {
  const { formatMessage } = intl;

  const data: PropsTableData[] = [
    {
      name: "allowClear",
      description: formatMessage({ defaultMessage: "是否允许清除。" }),
      type: "boolean",
    },
    {
      name: "animation",
      description: formatMessage({
        defaultMessage: "是否为内部标签变化添加动画。",
      }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "autoFocus",
      description: formatMessage({ defaultMessage: "自动聚焦。" }),
      type: "boolean",
    },
    {
      name: "disabled",
      description: formatMessage({ defaultMessage: "是否禁用。" }),
      type: "boolean",
    },
    {
      name: "dragToSort",
      description: formatMessage({
        defaultMessage: "是否可以通过拖拽为 Tag 排序。",
      }),
      type: "boolean",
    },
    {
      name: "error",
      description: formatMessage({
        defaultMessage:
          "是否是错误状态。(废弃，下个大版本移除，使用 status='error' 替代)",
      }),
      type: "boolean",
    },
    {
      name: "labelInValue",
      description: formatMessage({
        defaultMessage: "设置传入和回调出的值均包含 label 和 value。",
      }),
      type: "boolean",
    },
    {
      name: "readOnly",
      description: formatMessage({ defaultMessage: "是否只读。" }),
      type: "boolean",
    },
    {
      name: "saveOnBlur",
      description: formatMessage({
        defaultMessage: "是否在失焦时自动存储正在输入的文本。",
      }),
      type: "boolean",
    },
    {
      name: "inputValue",
      description: formatMessage({ defaultMessage: "控件的输入框内的值。" }),
      type: "string",
    },
    {
      name: "placeholder",
      description: formatMessage({ defaultMessage: "预设文案。" }),
      type: "string",
    },
    {
      name: "size",
      description: formatMessage({ defaultMessage: "不同尺寸。" }),
      type: "'mini' | 'small' | 'default' | 'large'",
    },
    {
      name: "status",
      description: formatMessage({ defaultMessage: "状态。" }),
      type: "'error' | 'warning'",
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
      name: "prefix",
      description: formatMessage({ defaultMessage: "添加前缀文字或者图标。" }),
      type: "ReactNode",
    },
    {
      name: "suffix",
      description: formatMessage({ defaultMessage: "后缀。" }),
      type: "ReactNode",
    },
    {
      name: "defaultValue",
      description: formatMessage({ defaultMessage: "默认值。" }),
      type: "T[]",
    },
    {
      name: "icon",
      description: formatMessage({ defaultMessage: "自定义图标。" }),
      type: "{ removeIcon?: ReactNode; clearIcon?: ReactNode }",
    },
    {
      name: "tokenSeparators",
      description: formatMessage({ defaultMessage: "触发自动分词的分隔符。" }),
      type: "string[]",
    },
    {
      name: "validate",
      description: formatMessage({
        defaultMessage: "校验函数，默认在按下enter时候触发。",
      }),
      type: "(inputValue: string, values: T[]) => boolean | Promise<boolean> | T | Promise<T>",
      defaultValue:
        "(inputValue, values) => inputValue && values.every((item) => item !== inputValue)",
    },
    {
      name: "value",
      description: formatMessage({ defaultMessage: "控件值。" }),
      type: "T[]",
    },
    {
      name: "onBlur",
      description: formatMessage({ defaultMessage: "失去焦点时候触发。" }),
      type: "(e) => void",
    },
    {
      name: "onChange",
      description: formatMessage({ defaultMessage: "控件值改变时触发。" }),
      type: "(value: T[], reason: ValueChangeReason) => void",
    },
    {
      name: "onClear",
      description: formatMessage({ defaultMessage: "点击清除按钮的回调。" }),
      type: "() => void",
    },
    {
      name: "onClick",
      description: formatMessage({ defaultMessage: "单击组件的回调。" }),
      type: "(e) => void",
    },
    {
      name: "onFocus",
      description: formatMessage({ defaultMessage: "聚焦时触发。" }),
      type: "(e) => void",
    },
    {
      name: "onInputChange",
      description: formatMessage({ defaultMessage: "输入框文本改变的回调。" }),
      type: "(inputValue: string, event?) => void",
    },
    {
      name: "onKeyDown",
      description: formatMessage({ defaultMessage: "键盘事件回调。" }),
      type: "(e) => void",
    },
    {
      name: "onPaste",
      description: formatMessage({ defaultMessage: "输入框文本粘贴的回调。" }),
      type: "(e) => void",
    },
    {
      name: "onPressEnter",
      description: formatMessage({ defaultMessage: "按 enter 键触发。" }),
      type: "(e) => void",
    },
    {
      name: "onRemove",
      description: formatMessage({
        defaultMessage: "移除某一个标签时改变时触发。",
      }),
      type: "(value: T, index: number, event) => void",
    },
    {
      name: "renderTag",
      description: formatMessage({
        defaultMessage:
          "自定义标签渲染，`props` 为当前标签属性，`index` 为当前标签的顺序，`values` 为所有标签的值。",
      }),
      type: "(props: {value: any; label: ReactNode; closable: boolean; onClose: (event) => void;}, index: number, values: ObjectValueType[]) => ReactNode",
    },
  ];

  return (
    <Unstyled>
      <Title>{formatMessage({ defaultMessage: "标签输入框 InputTag" })}</Title>
      <Paragraph>{formatMessage({ defaultMessage: "标签输入。" })}</Paragraph>

      <Title heading={2}>{formatMessage({ defaultMessage: "示例" })}</Title>

      <Title heading={3} id="basic">
        {formatMessage({ defaultMessage: "基础用法" })}
      </Title>
      <Paragraph>{formatMessage({ defaultMessage: "基础用法" })}</Paragraph>
      <Canvas of={InputTagStories.Basic} />

      <Title heading={3} id="prefix-suffix">
        {formatMessage({ defaultMessage: "前/后缀和前/后置标签" })}
      </Title>
      <Paragraph>{formatMessage({ defaultMessage: "基础用法" })}</Paragraph>
      <Canvas of={InputTagStories.PrefixAndSuffix} />

      <Title heading={3} id="size">
        {formatMessage({ defaultMessage: "不同尺寸" })}
      </Title>
      <Paragraph>
        {formatMessage({ defaultMessage: "通过设置 size 来指定大小。" })}
      </Paragraph>
      <Canvas of={InputTagStories.Size} />

      <Title heading={3} id="size">
        {formatMessage({ defaultMessage: "获取选项的文本" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "可以通过设置 labelInValue，获取选项的 label 值。",
        })}
      </Paragraph>
      <Canvas of={InputTagStories.LabelInValue} />

      <Title heading={3} id="validate">
        {formatMessage({ defaultMessage: "校验与格式化输入" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "通过 validate 校验输入。此外，可以返回非布尔类型来将用户输入的字符串为特定的 value 格式。",
        })}
      </Paragraph>
      <Canvas of={InputTagStories.Validate} />

      <Title heading={3} id="save-on-blur">
        {formatMessage({ defaultMessage: "失焦时保存" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "设置 saveOnBlur 在失焦时自动将正在输入的文本保存为标签。",
        })}
      </Paragraph>
      <Canvas of={InputTagStories.SaveOnBlur} />

      <Title heading={3} id="render-tag">
        {formatMessage({ defaultMessage: "自定义标签" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "指定 renderTag 来自定义标签样式。",
        })}
      </Paragraph>
      <Canvas of={InputTagStories.RenderTag} />

      <Title heading={3} id="sort">
        {formatMessage({ defaultMessage: "拖拽排序" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "指定 dragToSort 属性以允许对已输入的值进行拖拽排序。",
        })}
      </Paragraph>
      <Canvas of={InputTagStories.Sort} />

      <Title heading={3} id="token-separator">
        {formatMessage({ defaultMessage: "自动分词" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "设置 tokenSeparators 可以使用自动分词功能。",
        })}
      </Paragraph>
      <Canvas of={InputTagStories.TokenSeparator} />

      <Title heading={2}>{formatMessage({ defaultMessage: "用法" })}</Title>
      <Source
        code={`import { InputTag, type InputTagProps } from "growingio-design";`}
        language="tsx"
      />

      <Title id="props" heading={3}>
        InputTagProps
      </Title>
      <PropsTable data={data} />

      <Title id="object-value-type" heading={3}>
        ObjectValueType
      </Title>
      <Source
        code={`export type ObjectValueType = {\n  value?: any;\n  label?: ReactNode;\n  closable?: boolean;\n};`}
      />

      <Title id="value-change-reason" heading={3}>
        ValueChangeReason
      </Title>
      <Source
        code={`export type ValueChangeReason = "add" | "remove" | "clear" | "sort";`}
      />
    </Unstyled>
  );
}

export default injectIntl(DocPage);
