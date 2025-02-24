import React from "react";
import { injectIntl, IntlShape } from "react-intl";
import { Canvas, Unstyled, Source } from "@storybook/blocks";
import PropsTable, { type PropsTableData } from "@repo/ui/src/props-table";
import { Typography } from "../..";
import * as FormStories from "./index.stories";

const { Title, Paragraph } = Typography;

function DocPage({ intl }: { intl: IntlShape }) {
  const { formatMessage } = intl;

  const data: PropsTableData[] = [
    {
      name: "disabled",
      description: formatMessage({
        defaultMessage: "统一配置表单控件是否可用。",
      }),
      type: "boolean",
    },
    {
      name: "id",
      description: formatMessage({
        defaultMessage: "设置后，会作为表单控件 `id`的前缀。",
      }),
      type: "string",
    },
    {
      name: "labelAlign",
      description: formatMessage({ defaultMessage: "标签的文本对齐方式。" }),
      type: "'left' | 'right'",
      defaultValue: "right",
    },
    {
      name: "layout",
      description: formatMessage({
        defaultMessage: "表单的布局。",
      }),
      type: "'horizontal' | 'vertical' | 'inline'",
      defaultValue: "horizontal",
    },
    {
      name: "requiredSymbol",
      description: formatMessage({
        defaultMessage:
          "是否在 required 的时候显示加重的红色星号，设置 position 可选择将星号置于 label 前/后。",
      }),
      type: "boolean | { position: 'start' | 'end' }",
      defaultValue: "true",
    },
    {
      name: "size",
      description: formatMessage({ defaultMessage: "不同尺寸。" }),
      type: "'mini' | 'small' | 'default' | 'large'",
    },
    {
      name: "colon",
      description: formatMessage({
        defaultMessage:
          "是否显示标签后的一个冒号，优先级小于 `Form.Item` 中 `colon` 的优先级。",
      }),
      type: "boolean | ReactNode",
    },
    {
      name: "form",
      description: formatMessage({
        defaultMessage: "[FormInstance](#form-instance)",
      }),
      type: "FormInstance<FormData, FieldValue, FieldKey>",
    },
    {
      name: "initialValues",
      description: formatMessage({ defaultMessage: "设置表单初始值。" }),
      type: "Partial<FormData>",
    },
    {
      name: "labelCol",
      description: formatMessage({
        defaultMessage:
          "'label' 标签布局，同[Grid.Col](/react/components/grid)组件接收的参数相同，可以配置`span`和`offset`值，会覆盖全局的`labelCol`设置。",
      }),
      type: "[ColProps](grid#col)",
      defaultValue: "{ span: 5, offset: 0 }",
    },
    {
      name: "onChange",
      description: formatMessage({
        defaultMessage:
          "表单项值改变时候触发。和 onValuesChange 不同的是只会在用户操作表单项时触发。",
      }),
      type: "(value: Partial<FormData>, values: Partial<FormData>) => void",
    },
    {
      name: "onValuesChange",
      description: formatMessage({
        defaultMessage:
          "任意表单项值改变时候触发。第一个参数是被改变表单项的值，第二个参数是所有的表单项值。",
      }),
      type: "(value: Partial<FormData>, values: Partial<FormData>) => void",
    },
    {
      name: "scrollToFirstError",
      description: formatMessage({
        defaultMessage: "验证失败后滚动到第一个错误字段。",
      }),
      type: "boolean | ScrollIntoViewOptions",
    },
    {
      name: "validateMessages",
      description: formatMessage({
        defaultMessage: "校验提示信息模板。",
      }),
      type: "Partial<{[key in keyof ValidateMessagesTemplateType]: ValidateMessagesTemplateType[key] extends string? ValidateMessagesTemplateType[key] | ((data, { label }) => any): Partial<Record<keyof ValidateMessagesTemplateType[key], string | ((data, { label }) => any)>;}>",
    },
    {
      name: "validateTrigger",
      description: formatMessage({ defaultMessage: "触发验证的时机。" }),
      type: "string | string[]",
      defaultValue: "onChange",
    },
    {
      name: "wrapper",
      description: formatMessage({
        defaultMessage: "配置最外层标签，可以是 html 标签或是组件。",
      }),
      type: "[ComponentType](#componenttype)",
      defaultValue: "form",
    },
    {
      name: "wrapperCol",
      description: formatMessage({
        defaultMessage:
          "控件布局，同`labelCol`的设置方法一致，会覆盖全局的`wrapperCol`设置，[ColProps](/react/components/grid)。",
      }),
      type: "[ColProps](grid#col)",
      defaultValue: "{ span: 19, offset: 0 }",
    },
    {
      name: "wrapperProps",
      description: formatMessage({
        defaultMessage: "配置 `wrapper` 之后，可以传一些参数到 wrapper 上。",
      }),
      type: "[IndexedObject](#indexedobject)",
    },
    {
      name: "onSubmit",
      description: formatMessage({
        defaultMessage: "数据验证成功后回调事件。",
      }),
      type: "(values: FormData) => void",
    },
    {
      name: "onSubmitFailed",
      description: formatMessage({
        defaultMessage: "数据验证失败后回调事件。",
      }),
      type: "(errors: { [key: string]: [FieldError](#fielderror) }) => void",
    },
  ];

  const formItemData = [
    {
      name: "disabled",
      description: formatMessage({
        defaultMessage: "是否禁用,优先级高于 `Form` 的 `disabled` 属性",
      }),
      type: "boolean",
    },
    {
      name: "hasFeedback",
      description: formatMessage({
        defaultMessage: "是否显示校验图标,配置 validateStatus 使用。",
      }),
      type: "boolean",
    },
    {
      name: "hidden",
      description: formatMessage({
        defaultMessage: "隐藏表单项. 表单字段值仍然会被获取",
      }),
      type: "boolean",
    },
    {
      name: "required",
      description: formatMessage({
        defaultMessage:
          "是否必选,会在 `label` 标签前显示加重红色符号,如果这里不设置,会从 rules 中寻找是否是 required",
      }),
      type: "boolean",
    },
    {
      name: "trigger",
      description: formatMessage({
        defaultMessage: "接管子节点,搜集子节点值的时机。",
      }),
      type: "string",
      defaultValue: "onChange",
    },
    {
      name: "triggerPropName",
      description: formatMessage({
        defaultMessage:
          "子节点被接管的值的属性名,默认是 `value`,比如 `'<Checkbox'>` 为 `checked`。",
      }),
      type: "string",
      defaultValue: "value",
    },
    {
      name: "labelAlign",
      description: formatMessage({
        defaultMessage: "标签的文本对齐方式,优先级高于 `Form`",
      }),
      type: `'left' | 'right'`,
      defaultValue: "right",
    },
    {
      name: "requiredSymbol",
      description: formatMessage({
        defaultMessage:
          "是否在 required 的时候显示加重的红色星号,设置 position 可选择将星号置于 label 前/后",
      }),
      type: `boolean | { position: 'start' | 'end' }`,
      defaultValue: "true",
    },
    {
      name: "validateStatus",
      description: formatMessage({ defaultMessage: "校验状态" }),
      type: `'success' | 'warning' | 'error' | 'validating'`,
    },
    {
      name: "colon",
      description: formatMessage({
        defaultMessage:
          "是否显示标签后的一个冒号,优先级小于 `Form.Item` 中 `colon` 的优先级。",
      }),
      type: "boolean | ReactNode",
    },
    {
      name: "extra",
      description: formatMessage({ defaultMessage: "额外的提示内容。" }),
      type: "ReactNode",
    },
    {
      name: "help",
      description: formatMessage({ defaultMessage: "自定义校验文案" }),
      type: "ReactNode",
    },
    {
      name: "label",
      description: formatMessage({ defaultMessage: "标签的文本" }),
      type: "ReactNode",
    },
    {
      name: "dependencies",
      description: formatMessage({
        defaultMessage:
          "设置依赖字段。当依赖的字段值改变时,触发自身的校验。如果是想动态渲染某个表单控件/表单区域,使用 shouldUpdate",
      }),
      type: "string[]",
    },
    {
      name: "field",
      description: formatMessage({ defaultMessage: "受控组件的唯一标示" }),
      type: "FieldKey",
    },
    {
      name: "initialValue",
      description: formatMessage({
        defaultMessage:
          "设置控件初始值.(初始值,请不要使用受控组件的defaultValue了)",
      }),
      type: "FieldValue",
    },
    {
      name: "labelCol",
      description: formatMessage({
        defaultMessage:
          "`label`标签布局,同[Grid.Col](/react/components/grid)组件接收的参数相同,可以配置`span`和`offset`值,会覆盖全局的`labelCol`设置",
      }),
      type: "[ColProps](grid#col)",
    },
    {
      name: "normalize",
      description: formatMessage({
        defaultMessage: "将控件的 `value` 进行一定的转换再保存到form中。",
      }),
      type: `(value: FieldValue | undefined,prevValue: FieldValue | undefined,allValues: Partial<FormData>) => any`,
    },
    {
      name: "noStyle",
      description: formatMessage({
        defaultMessage:
          "不渲染任何外部标签/样式,只进行字段绑定。**注意**: 设置该属性为true时,该字段若未通过校验,错误信息将不会显示出来。可以传入对象,并设置 showErrorTip 为true,错误信息将会展示在上层 formItem 节点下。",
      }),
      type: "boolean | { showErrorTip: boolean }",
    },
    {
      name: "rules",
      description: formatMessage({
        defaultMessage: "受控模式下的验证规则,[RulesProps](#rules)",
      }),
      type: "RulesProps<FieldValue>[]",
    },
    {
      name: "shouldUpdate",
      description: formatMessage({
        defaultMessage:
          "是否在其他控件值改变时候重新渲染当前区域。设置为true时候,表单的任意改变都会重新渲染该区域。",
      }),
      type: `| boolean | ((prevValues: Partial<FormData>,currentValues: Partial<FormData>,info: {isFormList?: boolean;field?: FieldKey | FieldKey[];isInner?: boolean;}) => boolean)`,
    },
    {
      name: "tooltip",
      description: formatMessage({ defaultMessage: "提示文本" }),
      type: "ReactNode | ([TooltipProps](tooltip#tooltip) & { icon?: ReactElement })",
    },
    {
      name: "validateTrigger",
      description: formatMessage({
        defaultMessage:
          "触发验证的时机。取值和跟包裹的控件有关系,控件支持的触发事件,都可以作为值。例如`Input`支持的 `onFocus`、 `onBlur`、 `onChange` 都可以作为 `validateTrigger` 的值。传递为 `[]` 时,仅会在调用表单 `validate` 方法时执行校验规则。",
      }),
      type: "string | string[]",
      defaultValue: "onChange",
    },
    {
      name: "wrapperCol",
      description: formatMessage({
        defaultMessage:
          "控件布局,同`labelCol`的设置方法一致,会覆盖全局的`wrapperCol`设置,[ColProps](/react/components/grid)",
      }),
      type: "[ColProps](grid#col)",
    },
    {
      name: "formatter",
      description: formatMessage({
        defaultMessage:
          "将Form内保存的当前控件对应的值进行一定的转换,再传递给控件。",
      }),
      type: "(value: FieldValue | undefined) => any",
    },
    {
      name: "getValueFromEvent",
      description: formatMessage({
        defaultMessage:
          "指定在子节点触发`onChange`事件时如何处理值。(如果自定义了`trigger`属性,那么这里的参数就是对应的事件回调函数的参数类型)",
      }),
      type: "(...args) => FieldValue",
    },
  ];

  const formListData: PropsTableData[] = [
    {
      name: "noStyle",
      description: formatMessage({
        defaultMessage:
          "FormItemProps['noStyle'].`rules` 存在时默认为 `false`(需要渲染校验信息),否则默认为 `true`",
      }),
      type: "[FormItemProps](form#formitem)['noStyle']",
      defaultValue: "-",
    },
    {
      name: "field",
      description: formatMessage({ defaultMessage: "字段名" }),
      type: "FieldKey",
      required: true,
    },
    {
      name: "initialValue",
      description: formatMessage({ defaultMessage: "初始值" }),
      type: "SubFieldValue[]",
      defaultValue: "-",
    },
    {
      name: "rules",
      description: formatMessage({
        defaultMessage: "受控模式下的验证规则,[RulesProps](#rules)",
      }),
      type: "RulesProps<SubFieldValue[]>[]",
      defaultValue: "-",
    },
    {
      name: "children",
      description: formatMessage({ defaultMessage: "函数类型的 children" }),
      type: `(fields: { key: number; field: SubFieldKey }[],operation: {add: (defaultValue?: SubFieldValue, index?: number) => void;remove: (index: number) => void;move: (fromIndex: number, toIndex: number) => void;}) => React.ReactNode`,
      defaultValue: "-",
    },
  ];

  return (
    <Unstyled>
      <Title>{formatMessage({ defaultMessage: "表单 Form" })}</Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "具有数据收集、校验和提交功能的表单，包含复选框、单选框、输入框、下拉选择框等元素。",
        })}
      </Paragraph>

      <Title heading={2}>{formatMessage({ defaultMessage: "示例" })}</Title>

      <Title heading={3} id="basic">
        {formatMessage({ defaultMessage: "基础用法" })}
      </Title>
      <Paragraph>{formatMessage({ defaultMessage: "基础用法" })}</Paragraph>
      <Canvas of={FormStories.Basic} />

      <Title heading={3} id="use-form-hook">
        {formatMessage({ defaultMessage: "表单方法调用" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "通过 Form.useForm 对表单数据域进行交互。",
        })}
      </Paragraph>
      <Canvas of={FormStories.useFormHook} />

      <Title heading={3} id="layout">
        {formatMessage({ defaultMessage: "表单布局" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "Form 支持三种排列方式：水平排列 (默认)、垂直排列、行内排列。",
        })}
      </Paragraph>
      <Canvas of={FormStories.Layout} />

      <Title heading={3} id="scroll-to-field">
        {formatMessage({ defaultMessage: "滚动到指定表单字段" })}
      </Title>
      <Canvas of={FormStories.ScrollToField} />

      <Title heading={3} id="disabled">
        {formatMessage({ defaultMessage: "禁用状态" })}
      </Title>
      <Canvas of={FormStories.Disabled} />

      <Title heading={3} id="sizes">
        {formatMessage({ defaultMessage: "不同尺寸" })}
      </Title>
      <Canvas of={FormStories.Sizes} />

      <Title heading={3} id="status">
        {formatMessage({ defaultMessage: "表单校验状态" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "Form.Item 支持通过 hasFeedback、validateStatus 和 help 属性自定义表单校验状态及校验文案。",
        })}
      </Paragraph>
      <Canvas of={FormStories.Status} />

      <Title heading={2}>{formatMessage({ defaultMessage: "用法" })}</Title>
      <Source
        code={`import { Form, type FormProps } from "growingio-design";`}
        language="tsx"
      />

      <Title id="form-props" heading={3}>
        FormProps
      </Title>
      <PropsTable data={data} />

      <Title id="form-item-props" heading={3}>
        Form.Item Props
      </Title>
      <PropsTable data={formItemData} />

      <Title id="form-list-props" heading={3}>
        Form.List Props
      </Title>
      <PropsTable data={formListData} includeCommonProps={false} />
    </Unstyled>
  );
}

export default injectIntl(DocPage);
