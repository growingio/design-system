import { FormattedMessage, injectIntl, IntlShape } from "react-intl";
import { Canvas, Unstyled, Source } from "@storybook/blocks";
import { Typography } from "@/src";
import PropsTable from "../../../components/props-table";
import * as Stories from "./index.stories";

const { Title, Paragraph } = Typography;

function DocPage({ intl }: { intl: IntlShape }) {
  const { formatMessage } = intl;
  const data = [
    {
      name: "height",
      description: formatMessage({ defaultMessage: "高度，受控属性。" }),
      type: "number",
    },
    {
      name: "width",
      description: formatMessage({ defaultMessage: "宽度，受控属性。" }),
      type: "number",
    },
    {
      name: "component",
      description: formatMessage({ defaultMessage: "伸缩框的 html 标签。" }),
      type: "string",
      defaultValue: "div",
    },
    {
      name: "directions",
      description: formatMessage({
        defaultMessage: "可以进行伸缩的边，有上、下、左、右可以使用，默认是右方向。",
      }),
      type: "Array<'left' | 'right' | 'top' | 'bottom'>",
      defaultValue: "['right']",
    },
    {
      name: "resizeIcons",
      description: formatMessage({ defaultMessage: "定制伸缩杆的图标，四个方向都支持定制。" }),
      type: "{top?: ReactNode;bottom?: ReactNode;left?: ReactNode;right?: ReactNode;}",
      defaultValue: "{}",
    },
    {
      name: "resizeTriggers",
      description: formatMessage({ defaultMessage: "定制伸缩杆的内容，四个方向都支持定制。" }),
      type: "{top?: ReactNode;bottom?: ReactNode;left?: ReactNode;right?: ReactNode;}",
      defaultValue: "{}",
    },
    {
      name: "onMoving",
      description: formatMessage({ defaultMessage: "拖拽中的回调。" }),
      type: "(e: MouseEvent, size: { width: number; height: number }) => void",
    },
    {
      name: "onMovingEnd",
      description: formatMessage({ defaultMessage: "拖拽结束之后的回调。" }),
      type: "() => void",
    },
    {
      name: "onMovingStart",
      description: formatMessage({ defaultMessage: "开始拖拽之前的回调。" }),
      type: "() => void",
    },
  ];
  const splitPropsData = [
    {
      name: "disabled",
      description: formatMessage({ defaultMessage: "禁用。" }),
      type: "boolean",
    },
    {
      name: "component",
      description: formatMessage({ defaultMessage: "分割框的 html 标签。" }),
      type: "string",
      defaultValue: "div",
    },
    {
      name: "direction",
      description: formatMessage({
        defaultMessage: "分割方向分为水平 `horizontal` 和垂直 `vertical`，默认是水平分割。",
      }),
      type: "'horizontal' | 'vertical' | 'horizontal-reverse' | 'vertical-reverse'",
      defaultValue: "horizontal",
    },
    {
      name: "icon",
      description: formatMessage({ defaultMessage: "定制伸缩杆的图标。" }),
      type: "ReactNode",
    },
    {
      name: "trigger",
      description: formatMessage({ defaultMessage: "定制伸缩杆的内容。" }),
      type: "ReactNode",
    },
    {
      name: "max",
      description: formatMessage({ defaultMessage: "最大阈值。" }),
      type: "number | string",
    },
    {
      name: "min",
      description: formatMessage({ defaultMessage: "最小阈值。" }),
      type: "number | string",
    },
    {
      name: "panes",
      description: formatMessage({ defaultMessage: "面板，[firstPane, secondPane]。" }),
      type: "ReactNode[]",
      required: true,
    },
    {
      name: "size",
      description: formatMessage({
        defaultMessage: "分割的大小，可以是 0~1 代表百分比，或具体数值的像素，如 300px。",
      }),
      type: "number | string",
      defaultValue: "0.5",
    },
    {
      name: "onMoving",
      description: formatMessage({ defaultMessage: "拖拽中的回调。" }),
      type: "(e: MouseEvent, size: number | string) => void",
    },
    {
      name: "onMovingEnd",
      description: formatMessage({ defaultMessage: "拖拽结束之后的回调。" }),
      type: "() => void",
    },
    {
      name: "onMovingStart",
      description: formatMessage({ defaultMessage: "开始拖拽之前的回调。" }),
      type: "() => void",
    },
    {
      name: "onPaneResize",
      description: formatMessage({ defaultMessage: "面板大小变化的回调。" }),
      type: "(paneContainers: HTMLElement[]) => void",
    },
  ];

  return (
    <Unstyled>
      <Title>
        <FormattedMessage defaultMessage="伸缩框 ResizeBox" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="自由拖拽调整各区域大小，自由切分指定区域。" />
      </Paragraph>

      <Title heading={2}>
        <FormattedMessage defaultMessage="示例" />
      </Title>

      <Title heading={3} id="direction">
        <FormattedMessage defaultMessage="伸缩方向" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="通过设置 directions，可以指定四条边中的哪几条边可以进行伸缩。" />
      </Paragraph>
      <Canvas of={Stories.Directions} />

      <Title heading={3} id="triggers">
        <FormattedMessage defaultMessage="定制伸缩杆内容" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="可通过属性 resizeTriggers 定制各个方向的伸缩杆的内容。" />
      </Paragraph>
      <Canvas of={Stories.Triggers} />

      <Title heading={3} id="split">
        <FormattedMessage defaultMessage="面板分割" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="将一个面板分割成两个可以调整宽度或高度的两部分，同时支持嵌套。" />
      </Paragraph>
      <Canvas of={Stories.Split} />

      <Title heading={2}>
        <FormattedMessage defaultMessage="用法" />
      </Title>
      <Source
        code={`import { ResizeBox, type ResizeBoxProps } from "@giod/react";
const { Split } = ResizeBox;`}
        language="tsx"
      />

      <Title id="resize-box-props" heading={3}>
        ResizeBoxProps
      </Title>
      <PropsTable data={data} />

      <Title id="resize-box-split-props" heading={3}>
        ResizeBox.Split Props
      </Title>
      <PropsTable data={splitPropsData} />
    </Unstyled>
  );
}

const IntlDocPage = injectIntl(DocPage);
export default IntlDocPage;
