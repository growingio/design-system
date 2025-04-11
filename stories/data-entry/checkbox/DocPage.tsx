import { injectIntl, IntlShape } from "react-intl";
import { Canvas, Unstyled, Source } from "@storybook/blocks";
import PropsTable, { type PropsTableData } from "@/components/props-table";
import { Typography } from "@/src";
import * as Stories from "./index.stories";

const { Title, Paragraph } = Typography;

function DocPage({ intl }: { intl: IntlShape }) {
  const { formatMessage } = intl;

  const data: PropsTableData[] = [
    {
      name: "checked",
      description: formatMessage({ defaultMessage: "是否选中。" }),
      type: "boolean",
    },
    {
      name: "defaultChecked",
      description: formatMessage({ defaultMessage: "默认是否选中。" }),
      type: "boolean",
    },
    {
      name: "disabled",
      description: formatMessage({ defaultMessage: "是否禁用。" }),
      type: "boolean",
    },
    {
      name: "error",
      description: formatMessage({ defaultMessage: "错误样式。" }),
      type: "boolean",
    },
    {
      name: "indeterminate",
      description: formatMessage({ defaultMessage: "半选状态。" }),
      type: "boolean",
    },
    {
      name: "icon",
      description: formatMessage({ defaultMessage: "自定义 IconCheck。" }),
      type: "ReactNode",
    },
    {
      name: "value",
      description: formatMessage({ defaultMessage: "复选框的 value 属性。" }),
      type: "T",
    },
    {
      name: "onChange",
      description: formatMessage({ defaultMessage: "点击复选框的回调。" }),
      type: "(checked: boolean, e: Event) => void",
    },
  ];
  const groupPropsData: PropsTableData[] = [
    {
      name: "disabled",
      description: formatMessage({ defaultMessage: "整组失效。" }),
      type: "boolean",
    },
    {
      name: "direction",
      description: formatMessage({ defaultMessage: "方向。" }),
      type: "'horizontal' | 'vertical'",
      defaultValue: "horizontal",
    },
    {
      name: "defaultValue",
      description: formatMessage({ defaultMessage: "默认选中的选项。" }),
      type: "T[]",
    },
    {
      name: "options",
      description: formatMessage({ defaultMessage: "可选项。" }),
      type: "(T | { label: ReactNode; value: T; disabled?: boolean; icon?: ReactNode })[]",
    },
    {
      name: "value",
      description: formatMessage({ defaultMessage: "选中的选项（受控模式）。" }),
      type: "T[]",
    },
    {
      name: "onChange",
      description: formatMessage({ defaultMessage: "变化时的回调函数。" }),
      type: "(value: T[], e: Event) => void",
    },
  ];
  const resultTypeData: PropsTableData[] = [
    {
      name: "selected",
      description: formatMessage({ defaultMessage: "当前选中项。" }),
      type: "T[]",
    },
    {
      name: "setSelected",
      description: formatMessage({ defaultMessage: "只选中传入参数的选项。" }),
      type: "(value: T[]) => void",
    },
    {
      name: "setValueSelected",
      description: formatMessage({
        defaultMessage: "设置选项的选中状态，第二个参数为要设置的选中状态。",
      }),
      type: "(value: T | T[], selected?: boolean) => void",
    },
    {
      name: "selectAll",
      description: formatMessage({ defaultMessage: "选中全部。" }),
      type: "() => void",
    },
    {
      name: "unSelectAll",
      description: formatMessage({ defaultMessage: "取消全部选中。" }),
      type: "() => void",
    },
    {
      name: "isSelected",
      description: formatMessage({ defaultMessage: "是否选项被选中。" }),
      type: "(value: T) => boolean",
    },
    {
      name: "toggle",
      description: formatMessage({
        defaultMessage: "切换选项选中状态。不传参数时，会切换所有选项的选中状态。",
      }),
      type: "(value?: T | T[]) => void",
    },
    {
      name: "isAllSelected",
      description: formatMessage({ defaultMessage: "是否全部选项被选中。" }),
      type: "() => boolean",
    },
    {
      name: "isPartialSelected",
      description: formatMessage({ defaultMessage: "是否只有部分选项选中。" }),
      type: "() => boolean",
    },
  ];

  return (
    <Unstyled>
      <Title>{formatMessage({ defaultMessage: "复选框 Checkbox" })}</Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "在一组数据中，用户可通过复选框选择一个或多个数据。",
        })}
      </Paragraph>

      <Title heading={2}>{formatMessage({ defaultMessage: "示例" })}</Title>

      <Title heading={3} id="default">
        {formatMessage({ defaultMessage: "基础用法" })}
      </Title>
      <Canvas of={Stories.Default} />

      <Title heading={3} id="disabled">
        {formatMessage({ defaultMessage: "禁用" })}
      </Title>
      <Canvas of={Stories.Disabled} />

      <Title heading={3} id="icon">
        {formatMessage({ defaultMessage: "图标" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "通过 icon 属性自定义选中态图标。",
        })}
      </Paragraph>
      <Canvas of={Stories.Icon} />

      <Title heading={3} id="indeterminate">
        {formatMessage({ defaultMessage: "半选" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "通过 indeterminate 属性自定义半选态。",
        })}
      </Paragraph>
      <Canvas of={Stories.Indeterminate} />

      <Title heading={3} id="hooks">
        {formatMessage({ defaultMessage: "Hooks" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "使用 useCheckbox 快捷管理复选框数据。",
        })}
      </Paragraph>
      <Canvas of={Stories.Hooks} />

      <Title heading={3} id="group">
        {formatMessage({ defaultMessage: "复选框组" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "生成复选框组。设置 direction='vertical' 可以展示竖向的复选框组。",
        })}
      </Paragraph>
      <Canvas of={Stories.Group} />

      <Title heading={3} id="children">
        {formatMessage({ defaultMessage: "自定义节点内容" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "可以通过传入函数类型的 children 来自定义渲染节点内容。",
        })}
      </Paragraph>
      <Canvas of={Stories.Children} />

      <Title heading={3} id="readonly">
        {formatMessage({ defaultMessage: "只读" })}
      </Title>
      <Canvas of={Stories.ReadOnly} />

      <Title heading={2}>{formatMessage({ defaultMessage: "用法" })}</Title>
      <Source
        code={`import { Checkbox, type CheckboxProps } from "@gio-design/react";
const CheckboxGroup = Checkbox.Group;`}
        language="tsx"
      />

      <Title id="props" heading={3}>
        CheckboxProps
      </Title>
      <Source code={`type T = string | number;`} language="typescript" />
      <PropsTable data={data} />

      <Title id="group-props" heading={3}>
        Checkbox.Group Props
      </Title>
      <PropsTable data={groupPropsData} />

      <Title id="useCheckbox" heading={3}>
        useCheckbox
      </Title>
      <Source
        code={`const result: ResultType = Checkbox.useCheckbox<T>(values: T[], defaultSelected?: T[]);`}
        language="typescript"
      />

      <Title id="result-type" heading={3}>
        ResultType
      </Title>
      <PropsTable data={resultTypeData} />
    </Unstyled>
  );
}

export default injectIntl(DocPage);
