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
      name: "checked",
      description: formatMessage({ defaultMessage: "是否选中（受控模式）。" }),
      type: "boolean",
    },
    {
      name: "defaultChecked",
      description: formatMessage({ defaultMessage: "初始是否选中。" }),
      type: "boolean",
    },
    {
      name: "disabled",
      description: formatMessage({ defaultMessage: "是否禁用。" }),
      type: "boolean",
    },
    {
      name: "value",
      description: formatMessage({ defaultMessage: "控件的 value。" }),
      type: "T",
    },
    {
      name: "onChange",
      description: formatMessage({ defaultMessage: "值变化的回调。" }),
      type: "(checked: boolean, event: ChangeEvent) => void",
    },
  ];
  const groupPropsData: PropsTableData[] = [
    {
      name: "disabled",
      description: formatMessage({ defaultMessage: "禁用。" }),
      type: "boolean",
    },
    {
      name: "name",
      description: formatMessage({ defaultMessage: "Radio 的 name。" }),
      type: "string",
    },
    {
      name: "direction",
      description: formatMessage({ defaultMessage: "方向。" }),
      type: "'vertical' | 'horizontal'",
      defaultValue: "horizontal",
    },
    {
      name: "size",
      description: formatMessage({
        defaultMessage: "按钮类型的单选框尺寸（只在按钮类型下生效）。",
      }),
      type: "'small' | 'default' | 'large' | 'mini'",
    },
    {
      name: "type",
      description: formatMessage({ defaultMessage: "单选的类型，是单选还是按钮。" }),
      type: "'radio' | 'button'",
      defaultValue: "radio",
    },
    {
      name: "defaultValue",
      description: formatMessage({ defaultMessage: "默认选中的值。" }),
      type: "any",
    },
    {
      name: "options",
      description: formatMessage({ defaultMessage: "以数组配置的形式来设置单选组。" }),
      type: "(string | number | { label: ReactNode; value: any; disabled?: boolean })[]",
    },
    {
      name: "value",
      description: formatMessage({ defaultMessage: "选中的值（受控模式）。" }),
      type: "any",
    },
    {
      name: "onChange",
      description: formatMessage({ defaultMessage: "点击单选的回调。" }),
      type: "(value: any, event: ChangeEvent) => void",
    },
  ];

  return (
    <Unstyled>
      <Title>{formatMessage({ defaultMessage: "单选框 Radio" })}</Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "在一组相关且互斥数据中，用户仅能选择一个选项。",
        })}
      </Paragraph>

      <Title heading={2}>{formatMessage({ defaultMessage: "示例" })}</Title>

      <Title heading={3} id="default">
        {formatMessage({ defaultMessage: "基础用法" })}
      </Title>
      <Canvas of={Stories.Default} />

      <Title heading={3} id="disable">
        {formatMessage({ defaultMessage: "禁用状态" })}
      </Title>
      <Canvas of={Stories.Disabled} />

      <Title heading={3} id="children">
        {formatMessage({ defaultMessage: "自定义节点内容" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "可以完全自定义节点内容。",
        })}
      </Paragraph>
      <Canvas of={Stories.Children} />

      <Title heading={3} id="group">
        {formatMessage({ defaultMessage: "单选组" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "单选组可通过 options 来指定选项。",
        })}
      </Paragraph>
      <Canvas of={Stories.Group} />

      <Title heading={3} id="vertical-group">
        {formatMessage({ defaultMessage: "垂直单选组" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "设置 direction='vertical' 可以展示竖直的单选组。",
        })}
      </Paragraph>
      <Canvas of={Stories.VerticalGroup} />

      <Title heading={3} id="button-group">
        {formatMessage({ defaultMessage: "按钮单选组" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "指定 type=button，单选框会展示为按钮样式。",
        })}
      </Paragraph>
      <Canvas of={Stories.ButtonGroup} />

      <Title heading={3} id="sizes">
        {formatMessage({ defaultMessage: "尺寸" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "按钮类型的单选框分为 4 个尺寸，分别为 mini, small, default, large。",
        })}
      </Paragraph>
      <Canvas of={Stories.Sizes} />

      <Title heading={2}>{formatMessage({ defaultMessage: "用法" })}</Title>
      <Source
        code={`import { Radio, type RadioProps } from "@gio-design/react";
const RadioGroup = Radio.Group;`}
        language="typescript"
      />

      <Title id="props" heading={3}>
        RadioProps
      </Title>
      <PropsTable data={data} />

      <Title id="group-props" heading={3}>
        Radio.Group Props
      </Title>
      <PropsTable data={groupPropsData} />
    </Unstyled>
  );
}

export default injectIntl(DocPage);
