import PropsTable, { type PropsTableData } from "@/components/props-table";
import { Typography } from "@/src";
import { Canvas, Source, Unstyled } from "@storybook/blocks";
import { IntlShape, injectIntl } from "react-intl";
import * as Stories from "./index.stories";

const { Title, Paragraph } = Typography;

function DocPage({ intl }: { intl: IntlShape }) {
  const { formatMessage } = intl;
  const data: PropsTableData[] = [
    {
      name: "reverse",
      description: formatMessage({ defaultMessage: "是否倒序。" }),
      type: "boolean",
    },
    {
      name: "direction",
      description: formatMessage({ defaultMessage: "时间轴方向。" }),
      type: "'horizontal' | 'vertical'",
      defaultValue: "vertical",
    },
    {
      name: "labelPosition",
      description: formatMessage({ defaultMessage: "设置标签文本的位置。" }),
      type: "'relative' | 'same'",
      defaultValue: "same",
    },
    {
      name: "mode",
      description: formatMessage({
        defaultMessage:
          "时间轴的展示类型：时间轴在左侧/右侧(垂直方向)、上方/下方（水平方向），或交替出现。",
      }),
      type: "'left' | 'right' | 'top' | 'bottom' | 'alternate'",
      defaultValue: "left(vertical) | top(horizontal)",
    },
    {
      name: "pending",
      description: formatMessage({
        defaultMessage:
          "是否展示幽灵节点，设置为 true 时候只展示幽灵节点。传入ReactNode时，会作为节点内容展示。",
      }),
      type: "boolean | ReactNode",
    },
    {
      name: "pendingDot",
      description: formatMessage({ defaultMessage: "可以传入 ReactNode 定制幽灵节点。" }),
      type: "ReactNode",
      defaultValue: "<Spin size={12} />",
    },
  ];
  const itemPropsData: PropsTableData[] = [
    {
      name: "autoFixDotSize",
      description: formatMessage({ defaultMessage: "是否自动适配自定义节点尺寸到 16px。" }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "dotColor",
      description: formatMessage({ defaultMessage: "节点颜色。" }),
      type: "string",
    },
    {
      name: "lineColor",
      description: formatMessage({ defaultMessage: "时间轴颜色。" }),
      type: "string",
    },
    {
      name: "dotType",
      description: formatMessage({ defaultMessage: "节点类型：空心圆/实心圆。" }),
      type: "'hollow' | 'solid'",
      defaultValue: "solid",
    },
    {
      name: "labelPosition",
      description: formatMessage({
        defaultMessage: "时间轴节点的位置。在时间轴组件 `mode=alternate` 时候生效。",
      }),
      type: "'relative' | 'same'",
    },
    {
      name: "lineType",
      description: formatMessage({ defaultMessage: "时间轴类型：实线/虚线/点状线。" }),
      type: "'solid' | 'dashed' | 'dotted'",
      defaultValue: "solid",
    },
    {
      name: "dot",
      description: formatMessage({ defaultMessage: "自定义节点。" }),
      type: "string | ReactNode",
    },
    {
      name: "label",
      description: formatMessage({ defaultMessage: "标签文本。" }),
      type: "string | ReactNode",
    },
  ];

  return (
    <Unstyled>
      <Title>{formatMessage({ defaultMessage: "时间轴 Timeline" })}</Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "按照时间顺序或倒序规则的展示信息内容。",
        })}
      </Paragraph>

      <Title heading={2}>{formatMessage({ defaultMessage: "示例" })}</Title>

      <Title heading={3} id="default">
        {formatMessage({ defaultMessage: "基础用法" })}
      </Title>
      <Canvas of={Stories.Default} />

      <Title heading={3} id="reverse">
        {formatMessage({ defaultMessage: "倒序用法" })}
      </Title>
      <Canvas of={Stories.Reverse} />

      <Title heading={3} id="pending">
        {formatMessage({ defaultMessage: "待定节点" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "当任务状态正在发生，还在记录过程中，可用待定节点来表示当前的时间节点，通过pendingDot定制其轴点。",
        })}
      </Paragraph>
      <Canvas of={Stories.Pending} />

      <Title heading={3} id="label-position">
        {formatMessage({ defaultMessage: "标签位置" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "通过 labelPosition 可以设置标签文本的位置。",
        })}
      </Paragraph>
      <Canvas of={Stories.LabelPosition} />

      <Title heading={3} id="vertical-mode">
        {formatMessage({ defaultMessage: "纵向时间轴" })}
      </Title>
      <Canvas of={Stories.VerticalMode} />

      <Title heading={3} id="horizontal-mode">
        {formatMessage({ defaultMessage: "横向时间轴" })}
      </Title>
      <Canvas of={Stories.HorizontalMode} />

      <Title heading={3} id="item-dot-color">
        {formatMessage({ defaultMessage: "节点颜色" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "通过 dotColor 可以设置节点的颜色。",
        })}
      </Paragraph>
      <Canvas of={Stories.ItemDotColor} />

      <Title heading={3} id="item-line-type">
        {formatMessage({ defaultMessage: "节点线条类型" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "通过 lineType 可以设置节点线条的类型。",
        })}
      </Paragraph>
      <Canvas of={Stories.ItemLineType} />

      <Title heading={3} id="custom-item">
        {formatMessage({ defaultMessage: "自定义节点" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "可以完全自定义节点的图标、颜色和类型。",
        })}
      </Paragraph>
      <Canvas of={Stories.CustomItem} />

      <Title heading={2}>{formatMessage({ defaultMessage: "用法" })}</Title>
      <Source
        code={`import { Timeline, TimelineProps } from "@gio-design/react";
const { Item } = Timeline;`}
        language="typescript"
      />

      <Title id="timeline-props" heading={3}>
        Timeline Props
      </Title>
      <PropsTable data={data} />

      <Title id="timeline-item-props" heading={3}>
        Timeline.Item Props
      </Title>
      <PropsTable data={itemPropsData} />
    </Unstyled>
  );
}

export default injectIntl(DocPage);
