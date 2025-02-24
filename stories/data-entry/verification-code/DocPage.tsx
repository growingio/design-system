import { injectIntl, IntlShape } from "react-intl";
import { Canvas, Unstyled, Source } from "@storybook/blocks";
import PropsTable, { type PropsTableData } from "../../../components/props-table";
import { Typography } from "@/src";
import * as VerificationCodeStories from "./index.stories";

const { Title, Paragraph } = Typography;

function DocPage({ intl }: { intl: IntlShape }) {
  const { formatMessage } = intl;

  const data: PropsTableData[] = [
    {
      name: "disabled",
      description: formatMessage({ defaultMessage: "禁用状态。" }),
      type: "boolean",
    },
    {
      name: "masked",
      description: formatMessage({ defaultMessage: "是否是密码模式。" }),
      type: "boolean",
    },
    {
      name: "readOnly",
      description: formatMessage({ defaultMessage: "只读状态。" }),
      type: "boolean",
    },
    {
      name: "length",
      description: formatMessage({
        defaultMessage: "验证码的长度，根据长度渲染对应个数的输入框。",
      }),
      type: "number",
      defaultValue: "6",
    },
    {
      name: "defaultValue",
      description: formatMessage({ defaultMessage: "默认值。" }),
      type: "string",
    },
    {
      name: "value",
      description: formatMessage({
        defaultMessage: "验证码输入框的值，受控模式。",
      }),
      type: "string",
    },
    {
      name: "size",
      description: formatMessage({ defaultMessage: "尺寸。" }),
      type: "[InputProps](input#input)['size']",
    },
    {
      name: "status",
      description: formatMessage({ defaultMessage: "错误状态。" }),
      type: "'error'",
    },
    {
      name: "onChange",
      description: formatMessage({
        defaultMessage: "输入值改变时触发的回调。",
      }),
      type: "(value: string) => void",
    },
    {
      name: "onFinish",
      description: formatMessage({
        defaultMessage: "输入框都被填充后触发的回调。",
      }),
      type: "(value: string) => void",
    },
    {
      name: "separator",
      description: formatMessage({
        defaultMessage: "分隔符。可在不同索引的输入框后自定义渲染分隔符。",
      }),
      type: "(data: { index: number; character: string }) => ReactNode",
    },
    {
      name: "validate",
      description: formatMessage({
        defaultMessage: "校验函数，用户输入值改变时触发。",
      }),
      type: "(data: { inputValue: string; value: string; index: number }) => boolean | string",
    },
  ];

  return (
    <Unstyled>
      <Title>{formatMessage({ defaultMessage: "验证码输入框 VerificationCode" })}</Title>
      <Paragraph>{formatMessage({ defaultMessage: "验证码输入组件。" })}</Paragraph>

      <Title heading={2}>{formatMessage({ defaultMessage: "示例" })}</Title>

      <Title heading={3} id="basic">
        {formatMessage({ defaultMessage: "基础用法" })}
      </Title>
      <Paragraph>{formatMessage({ defaultMessage: "基础用法" })}</Paragraph>
      <Canvas of={VerificationCodeStories.Basic} />

      <Title heading={3} id="status">
        {formatMessage({ defaultMessage: "不同状态" })}
      </Title>
      <Paragraph>{formatMessage({ defaultMessage: "禁用、只读和错误状态" })}</Paragraph>
      <Canvas of={VerificationCodeStories.Status} />

      <Title heading={3} id="sizes">
        {formatMessage({ defaultMessage: "不同尺寸" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "定义了四种默认尺寸（mini、small、default 和 large），分别为 24px、28px、32px、36px。",
        })}
      </Paragraph>
      <Canvas of={VerificationCodeStories.Sizes} />

      <Title heading={3} id="masked">
        {formatMessage({ defaultMessage: "密码模式" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "指定 masked = true，可开启密码模式。",
        })}
      </Paragraph>
      <Canvas of={VerificationCodeStories.Masked} />

      <Title heading={3} id="separator">
        {formatMessage({ defaultMessage: "自定义分隔符" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "指定 separator 可以自定义渲染分隔符。",
        })}
      </Paragraph>
      <Canvas of={VerificationCodeStories.Separator} />

      <Title heading={3} id="verification">
        {formatMessage({ defaultMessage: "配合表单使用" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "配合表单使用实现校验。",
        })}
      </Paragraph>
      <Canvas of={VerificationCodeStories.Verification} />

      <Title heading={3} id="validation">
        {formatMessage({ defaultMessage: "校验与格式化输入" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "通过 validate 校验输入。此外，可以返回非布尔类型来将用户输入的字符串为特定的格式。",
        })}
      </Paragraph>
      <Canvas of={VerificationCodeStories.Validation} />

      <Title heading={3} id="hooks">
        {formatMessage({ defaultMessage: "Hooks" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "通过 useVerificationCode 自定义验证码组件。",
        })}
      </Paragraph>
      <Canvas of={VerificationCodeStories.Hooks} />

      <Title heading={2}>{formatMessage({ defaultMessage: "用法" })}</Title>
      <Source
        code={`import { VerificationCode, type VerificationCodeProps, useVerificationCode } from "growingio-design";`}
        language="tsx"
      />

      <Title id="props" heading={3}>
        VerificationCodeProps
      </Title>
      <PropsTable data={data} />

      <Title id="useVerificationCode" heading={3}>
        useVerificationCode
      </Title>
      <Source
        code={`function useVerificationCode(props: VerificationCodeOptions): VerificationCodeReturnType`}
        language="typescript"
      />
      <Title heading={4}>VerificationCodeOptions</Title>
      <PropsTable
        data={[
          {
            name: "length",
            description: formatMessage({ defaultMessage: "长度。" }),
            type: "number",
          },
          {
            name: "defaultValue",
            description: formatMessage({ defaultMessage: "默认值。" }),
            type: "string",
          },
          {
            name: "value",
            description: formatMessage({ defaultMessage: "value。" }),
            type: "string",
          },
          {
            name: "getInputRefList",
            description: formatMessage({ defaultMessage: "input list。" }),
            type: "() => (HTMLInputElement | HTMLTextAreaElement)[]",
          },
          {
            name: "onChange",
            description: formatMessage({ defaultMessage: "onChange。" }),
            type: "(value: string) => void",
          },
          {
            name: "onFinish",
            description: formatMessage({ defaultMessage: "onFinish。" }),
            type: "(value: string) => void",
          },
        ]}
        includeCommonProps={false}
      />
      <Title heading={4}>VerificationCodeReturnType</Title>
      <PropsTable
        includeCommonProps={false}
        data={[
          {
            name: "filledValue",
            description: formatMessage({ defaultMessage: "填入的值。" }),
            type: "VerificationCodeOptions['value'][]",
            required: true,
          },
          {
            name: "setValue",
            description: formatMessage({ defaultMessage: "更新内部的值。" }),
            type: "(v: VerificationCodeOptions['value']) => void",
            required: true,
          },
          {
            name: "getInputProps",
            description: formatMessage({
              defaultMessage: "获取 input 属性，附加到 input。",
            }),
            type: "(index: number) => {key: string | number; value: string; onClick: (e: MouseEvent) => void; onKeyDown: (e: KeyboardEvent) => void; onChange: (v: string) => void; onPaste: (e: ClipboardEvent) => void;}",
            required: true,
          },
        ]}
      />
    </Unstyled>
  );
}

const IntlDocPage = injectIntl(DocPage);
export default IntlDocPage;
