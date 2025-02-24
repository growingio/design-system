import { IntlShape, injectIntl } from "react-intl";
import { Canvas, Unstyled, Source } from "@storybook/blocks";
import PropsTable, { type PropsTableData } from "../../../components/props-table";
import { Typography } from "../../../src";
import * as TooltipStories from "./index.stories";

const { Title, Paragraph } = Typography;

function DocPage({ intl }: { intl: IntlShape }) {
  const { formatMessage } = intl;
  const data: PropsTableData[] = [
    {
      name: "blurToHide",
      description: formatMessage({
        defaultMessage: "是否在失去焦点的时候关闭弹出框。",
      }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "defaultPopupVisible",
      description: formatMessage({ defaultMessage: "默认的弹出框状态。" }),
      type: "boolean",
    },
    {
      name: "disabled",
      description: formatMessage({ defaultMessage: "是否禁用弹出。" }),
      type: "boolean",
    },
    {
      name: "mini",
      description: formatMessage({ defaultMessage: "迷你尺寸。" }),
      type: "boolean",
    },
    {
      name: "popupHoverStay",
      description: formatMessage({
        defaultMessage: "鼠标移入弹出框的话，弹出框会保留而不销毁。",
      }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "popupVisible",
      description: formatMessage({
        defaultMessage: "弹出框是打开还是关闭状态。",
      }),
      type: "boolean",
    },
    {
      name: "unmountOnExit",
      description: formatMessage({
        defaultMessage: "是否在隐藏的时候销毁 DOM 结构。",
      }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "childrenPrefix",
      description: formatMessage({
        defaultMessage: "会在打开状态给元素加上一个类，格式为 `${childrenPrefix}-open`。",
      }),
      type: "string",
    },
    {
      name: "color",
      description: formatMessage({ defaultMessage: "弹出层背景色。" }),
      type: "string",
    },
    {
      name: "position",
      description: formatMessage({
        defaultMessage: "弹出框的方位，有 12 个方位可供选择。",
      }),
      type: "'top' | 'tl' | 'tr' | 'bottom' | 'bl' | 'br' | 'left' | 'lt' | 'lb' | 'right' | 'rt' | 'rb'",
      defaultValue: "top",
    },
    {
      name: "trigger",
      description: formatMessage({ defaultMessage: "触发方式。" }),
      type: "[TriggerProps](/?path=/docs/base-trigger--docs#trigger)['trigger']",
      defaultValue: "hover",
    },
    {
      name: "content",
      description: formatMessage({ defaultMessage: "弹出的内容。" }),
      type: "ReactNode",
    },
    {
      name: "triggerProps",
      description: formatMessage({
        defaultMessage: "可以接受所有 `Trigger` 组件的参数。",
      }),
      type: "Partial<[TriggerProps](/?path=/docs/base-trigger--docs#trigger)>",
    },
    {
      name: "getPopupContainer",
      description: formatMessage({ defaultMessage: "弹出框挂载的节点。" }),
      type: "(node: HTMLElement) => Element",
    },
    {
      name: "onVisibleChange",
      description: formatMessage({
        defaultMessage: "显示或隐藏时触发的回调。",
      }),
      type: "(visible: boolean) => void",
    },
  ];

  return (
    <Unstyled>
      <Title>{formatMessage({ defaultMessage: "文字气泡 Tooltip" })}</Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "鼠标悬停、聚焦或点击在某个组件时，弹出的文字提示。",
        })}
      </Paragraph>
      <Title heading={2}>{formatMessage({ defaultMessage: "示例" })}</Title>
      ## Stories
      <Title heading={3} id="basic">
        {formatMessage({ defaultMessage: "基础用法" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "鼠标移入，气泡出现，鼠标移出，气泡消失。",
        })}
      </Paragraph>
      <Canvas of={TooltipStories.Basic} />
      <Title heading={3} id="mini">
        {formatMessage({ defaultMessage: "迷你尺寸" })}
      </Title>
      <Paragraph>{formatMessage({ defaultMessage: "适用于小场景或数字气泡样式。" })}</Paragraph>
      <Canvas of={TooltipStories.Mini} />
      <Title heading={3} id="position">
        {formatMessage({ defaultMessage: "位置" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "Tooltip 支持 12 个不同的方位。分别为：上左、上、上右、下左、下、下右、左上、左、左下、右上、右、右下。",
        })}
      </Paragraph>
      <Canvas of={TooltipStories.Position} />
      <Title heading={3} id="color">
        {formatMessage({ defaultMessage: "不同颜色" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "通过 color 属性设置不同背景色的 tooltip。",
        })}
      </Paragraph>
      <Canvas of={TooltipStories.Color} />
      <Title heading={3} id="with-link">
        {formatMessage({ defaultMessage: "是否带link" })}
      </Title>
      <Canvas of={TooltipStories.WithLink} />
      <Title heading={2}>{formatMessage({ defaultMessage: "用法" })}</Title>
      <Source code={`import { Tooltip } from 'growingio-design';`} language="tsx" />
      <Title id="tooltip-props" heading={3}>
        Tooltip Props
      </Title>
      <PropsTable data={data} />
    </Unstyled>
  );
}

export default injectIntl(DocPage);
