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
      name: "disabled",
      description: formatMessage({ defaultMessage: "是否禁用。" }),
      type: "boolean",
    },
    {
      name: "onlyMarkValue",
      description: formatMessage({ defaultMessage: "只能选择标签值，此时step将会被忽略。" }),
      type: "boolean",
    },
    {
      name: "reverse",
      description: formatMessage({ defaultMessage: "反向坐标轴, rtl 场景默认为 true。" }),
      type: "boolean",
    },
    {
      name: "showTicks",
      description: formatMessage({ defaultMessage: "是否显示步长刻度线。" }),
      type: "boolean",
    },
    {
      name: "tooltipVisible",
      description: formatMessage({
        defaultMessage:
          "控制 tooltip 的展示。设置为 true 时，将一直展示 tooltip。设置为 false 时，将一直隐藏 tooltip。",
      }),
      type: "boolean",
    },
    {
      name: "vertical",
      description: formatMessage({ defaultMessage: "是否竖直方向。" }),
      type: "boolean",
    },
    {
      name: "max",
      description: formatMessage({ defaultMessage: "滑动范围最大值。" }),
      type: "number",
      defaultValue: "100",
    },
    {
      name: "min",
      description: formatMessage({ defaultMessage: "滑动范围最小值。" }),
      type: "number",
      defaultValue: "0",
    },
    {
      name: "step",
      description: formatMessage({ defaultMessage: "步长。" }),
      type: "number",
      defaultValue: "1",
    },
    {
      name: "tooltipPosition",
      description: formatMessage({ defaultMessage: "tooltip 的位置。" }),
      type: "'top' | 'tl' | 'tr' | 'bottom' | 'bl' | 'br' | 'left' | 'lt' | 'lb' | 'right' | 'rt' | 'rb'",
    },
    {
      name: "formatTooltip",
      description: formatMessage({ defaultMessage: "格式化 tooltip 内容。" }),
      type: "(value: number) => string | ReactNode",
    },
    {
      name: "defaultValue",
      description: formatMessage({ defaultMessage: "默认值。" }),
      type: "number | number[]",
    },
    {
      name: "marks",
      description: formatMessage({
        defaultMessage: "标签。是一个对象。key 为在[min, max]内的整数。",
      }),
      type: "Record<number, ReactNode>",
    },
    {
      name: "range",
      description: formatMessage({ defaultMessage: "是否是范围选择。" }),
      type: "boolean | { draggableBar: boolean }",
    },
    {
      name: "showInput",
      description: formatMessage({
        defaultMessage:
          "是否展示输入框，onlyMarkValue 为 true 或范围内多点选择时输入框始终隐藏。可接受 InputNumber 的 props。",
      }),
      type: "boolean | InputNumberProps | InputNumberProps[]",
    },
    {
      name: "value",
      description: formatMessage({ defaultMessage: "值。" }),
      type: "number | number[]",
    },
    {
      name: "getIntervalConfig",
      description: formatMessage({
        defaultMessage:
          '针对区间配置，返回区间步长和相对于整个滑动轴的宽度比例(如 0.5 或 "50%")。只在marks场景下生效。',
      }),
      type: "(range: number[], index: number) => { step?: number; width?: number | string }",
    },
    {
      name: "getTooltipContainer",
      description: formatMessage({ defaultMessage: "设置 tooltip 所插入的父元素。" }),
      type: "() => Element",
    },
    {
      name: "onAfterChange",
      description: formatMessage({ defaultMessage: "触发时机在 mouseup，参数是当前值。" }),
      type: "(val: number | number[]) => void",
    },
    {
      name: "onChange",
      description: formatMessage({ defaultMessage: "选择值变化时触发。" }),
      type: "(val: number | number[]) => void",
    },
  ];

  return (
    <Unstyled>
      <Title>{formatMessage({ defaultMessage: "滑动输入条 Slider" })}</Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "滑动型输入器，展示当前值和可选范围。",
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

      <Title heading={3} id="step">
        {formatMessage({ defaultMessage: "设置步长" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "传入 step 设置步长。 默认步长为 1。建议设置值能够被 max-min 整除，否则会出现可选最大值小于 max 的情况。",
        })}
      </Paragraph>
      <Paragraph>
        {formatMessage({
          defaultMessage: "当设置 showTicks 为 true 的时候，可显示 step 的刻度线。",
        })}
      </Paragraph>
      <Canvas of={Stories.Step} />

      <Title heading={3} id="range">
        {formatMessage({ defaultMessage: "选择范围" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "设置 range = true 即可开启范围选择，此时 value 为数组。",
        })}
      </Paragraph>
      <Canvas of={Stories.Range} />

      <Title heading={3} id="multiple-dots">
        {formatMessage({ defaultMessage: "多点选择" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "通过 value 来控制是单点还是多点选择。",
        })}
      </Paragraph>
      <Canvas of={Stories.MultipleDots} />

      <Title heading={3} id="show-input">
        {formatMessage({ defaultMessage: "显示输入框" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "当 showInput 为 true 时，将显示输入框。当设置 onlyMarkValue 为 true 或者范围内多点选择时，输入框始终不会显示。",
        })}
      </Paragraph>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "当 showInput 传入 InputNumberProps 时，min、max、step 属性会以 SliderProps 为先。",
        })}
      </Paragraph>
      <Canvas of={Stories.ShowInput} />

      <Title heading={3} id="marks">
        {formatMessage({ defaultMessage: "显示标记" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "通过 marks 指定标记。当设置 onlyMarkValue 的时候，只可以选择标记值。此时step会被忽略。",
        })}
      </Paragraph>
      <Canvas of={Stories.Marks} />

      <Title heading={3} id="vertical">
        {formatMessage({ defaultMessage: "纵向滑动条" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "设置 vertical 为 true，将会显示竖直的滑动条",
        })}
      </Paragraph>
      <Canvas of={Stories.Vertical} />

      <Title heading={3} id="tooltip">
        {formatMessage({ defaultMessage: "显示提示" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "设置 tooltipVisible 为 true，将会显示提示，使用 formatterTooltip 可以格式化 Tooltip 的内容。",
        })}
      </Paragraph>
      <Canvas of={Stories.Tooltip} />

      <Title heading={3} id="draggable">
        {formatMessage({ defaultMessage: "拖拽滑动条" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "设置 range.draggableBar 为 true，可以拖拽滑动条。",
        })}
      </Paragraph>
      <Canvas of={Stories.Draggable} />

      <Title heading={3} id="interval">
        {formatMessage({ defaultMessage: "区间滑动条" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "在设置了 marks 后，实际上将 Slider 分成了多个区间，可以传入 getIntervalConfig 对每个区间的宽度和步长进行设置。",
        })}
      </Paragraph>
      <Canvas of={Stories.Interval} />

      <Title heading={2}>{formatMessage({ defaultMessage: "用法" })}</Title>
      <Source
        code={`import { Slider, type SliderProps } from "@gio-design/react";`}
        language="typescript"
      />

      <Title id="props" heading={3}>
        SliderProps
      </Title>
      <PropsTable data={data} />
    </Unstyled>
  );
}

export default injectIntl(DocPage);
