import PropsTable, { type PropsTableData } from "@/components/props-table";
import { Typography } from "@/src";
import { Canvas, Source, Unstyled } from "@storybook/addon-docs/blocks";
import { IntlShape, injectIntl } from "react-intl";
import * as Stories from "./index.stories";

const { Title, Paragraph } = Typography;

function DocPage({ intl }: { intl: IntlShape }) {
  const { formatMessage } = intl;
  const data: PropsTableData[] = [
    {
      name: "blurToHide",
      description: formatMessage({ defaultMessage: "是否在失去焦点的时候关闭弹出框。" }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "defaultPopupVisible",
      description: formatMessage({ defaultMessage: "默认的弹出框状态。" }),
      type: "boolean",
      defaultValue: "-",
    },
    {
      name: "disabled",
      description: formatMessage({ defaultMessage: "是否禁用。" }),
      type: "boolean",
      defaultValue: "-",
    },
    {
      name: "popupHoverStay",
      description: formatMessage({ defaultMessage: "鼠标移入弹出框的话，弹出框会保留而不销毁。" }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "popupVisible",
      description: formatMessage({ defaultMessage: "弹出框是打开还是关闭状态。" }),
      type: "boolean",
      defaultValue: "-",
    },
    {
      name: "unmountOnExit",
      description: formatMessage({ defaultMessage: "是否在隐藏的时候销毁 DOM 结构。" }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "childrenPrefix",
      description: formatMessage({
        defaultMessage: "会在打开状态给元素加上一个类，格式为 `${childrenPrefix}-open`。",
      }),
      type: "string",
      defaultValue: "-",
    },
    {
      name: "color",
      description: formatMessage({ defaultMessage: "弹出层背景色。" }),
      type: "string",
      defaultValue: "-",
    },
    {
      name: "position",
      description: formatMessage({ defaultMessage: "弹出框的方位，有 12 个方位可供选择。" }),
      type: "| 'top'| 'tl'| 'tr'| 'bottom'| 'bl'| 'br'| 'left'| 'lt'| 'lb'| 'right'| 'rt'| 'rb'",
      defaultValue: "top",
    },
    {
      name: "trigger",
      description: formatMessage({ defaultMessage: "触发方式。" }),
      type: "[TriggerProps](trigger#trigger)['trigger']",
      defaultValue: "hover",
    },
    {
      name: "content",
      description: formatMessage({ defaultMessage: "弹出的内容。" }),
      type: "ReactNode",
      defaultValue: "-",
    },
    {
      name: "triggerProps",
      description: formatMessage({
        defaultMessage:
          "可以接受所有 [Trigger](/docs/components-others-trigger--docs#props) 组件的参数。",
      }),
      type: "Partial<TriggerProps>",
      defaultValue: "-",
    },
    {
      name: "getPopupContainer",
      description: formatMessage({ defaultMessage: "弹出框挂载的节点。" }),
      type: "(node: HTMLElement) => Element",
      defaultValue: "-",
    },
    {
      name: "onVisibleChange",
      description: formatMessage({ defaultMessage: "显示或隐藏时触发的回调。" }),
      type: "(visible: boolean) => void",
      defaultValue: "-",
    },
    {
      name: "title",
      description: formatMessage({ defaultMessage: "标题。" }),
      type: "ReactNode | (() => ReactNode)",
      defaultValue: "-",
    },
  ];

  return (
    <Unstyled>
      <Title>{formatMessage({ defaultMessage: "气泡卡片 Popover" })}</Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "鼠标悬停、聚焦或点击在某个组件时，弹出的气泡式的卡片浮层。可以对卡片上的元素进行操作。",
        })}
      </Paragraph>

      <Title heading={2}>{formatMessage({ defaultMessage: "示例" })}</Title>

      <Title heading={3} id="default">
        {formatMessage({ defaultMessage: "基础用法" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "鼠标移入或点击，弹出气泡，可对浮层上元素进行操作，承载复杂内容和操作。",
        })}
      </Paragraph>
      <Canvas of={Stories.Default} />

      <Title heading={3} id="triggers">
        {formatMessage({ defaultMessage: "触发方式" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "通过设置 trigger，可以指定不同的触发方式。",
        })}
      </Paragraph>
      <Canvas of={Stories.Triggers} />

      <Title heading={3} id="positions">
        {formatMessage({ defaultMessage: "位置" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "Popover 支持 12 个不同的方位。分别为：上左 上 上右 下左 下 下右 左上 左 左下 右上 右 右下。",
        })}
      </Paragraph>
      <Canvas of={Stories.Positions} />

      <Title heading={3} id="close-in-popover">
        {formatMessage({ defaultMessage: "浮层内关闭" })}
      </Title>
      <Canvas of={Stories.CloseInPopover} />

      <Title heading={2}>{formatMessage({ defaultMessage: "用法" })}</Title>
      <Source
        code={`import { Popover, PopoverProps } from "@gio-design/react";`}
        language="typescript"
      />

      <Title id="popover-props" heading={3}>
        Popover Props
      </Title>
      <PropsTable data={data} />
    </Unstyled>
  );
}

export default injectIntl(DocPage);
