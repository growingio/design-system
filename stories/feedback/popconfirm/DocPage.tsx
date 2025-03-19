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
      name: "autoFocus",
      description: formatMessage({ defaultMessage: "是否自动聚焦弹出框内的可聚焦元素。" }),
      type: "boolean",
    },
    {
      name: "defaultPopupVisible",
      description: formatMessage({ defaultMessage: "默认弹出框是打开还是关闭。" }),
      type: "boolean",
    },
    {
      name: "disabled",
      description: formatMessage({ defaultMessage: "是否禁用。" }),
      type: "boolean",
    },
    {
      name: "focusLock",
      description: formatMessage({ defaultMessage: "是否将焦点锁定在弹出框内。" }),
      type: "boolean",
    },
    {
      name: "popupVisible",
      description: formatMessage({ defaultMessage: "弹出框是打开还是关闭。(受控)" }),
      type: "boolean",
    },
    {
      name: "unmountOnExit",
      description: formatMessage({ defaultMessage: "是否在隐藏的时候销毁 DOM 节点。" }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "okType",
      description: formatMessage({ defaultMessage: "确认按钮的类型。" }),
      type: "ButtonProps['type']",
      defaultValue: "primary",
    },
    {
      name: "position",
      description: formatMessage({ defaultMessage: "弹出框的方位，有 12 个方位可供选择。" }),
      type: "'top'| 'tl'| 'tr'| 'bottom'| 'bl'| 'br'| 'left'| 'lt'| 'lb'| 'right'| 'rt'| 'rb'",
      defaultValue: "top",
    },
    {
      name: "trigger",
      description: formatMessage({ defaultMessage: "触发方式。" }),
      type: "[TriggerProps](trigger#trigger)['trigger']",
      defaultValue: "click",
    },
    {
      name: "cancelText",
      description: formatMessage({ defaultMessage: "取消按钮文字。" }),
      type: "ReactNode",
    },
    {
      name: "icon",
      description: formatMessage({ defaultMessage: "标题前的图标。" }),
      type: "ReactNode",
      defaultValue: "<IconExclamationCircleFill />",
    },
    {
      name: "okText",
      description: formatMessage({ defaultMessage: "确认按钮文字。" }),
      type: "ReactNode",
    },
    {
      name: "cancelButtonProps",
      description: formatMessage({
        defaultMessage: "取消按钮的参数，可接受 `Button` 组件的所有参数。",
      }),
      type: "ButtonProps",
    },
    {
      name: "okButtonProps",
      description: formatMessage({
        defaultMessage: "确定按钮的参数，可接受 `Button` 组件的所有参数。",
      }),
      type: "ButtonProps",
    },
    {
      name: "onOk",
      description: formatMessage({
        defaultMessage: "点击确认按钮的回调函数。",
      }),
      type: "(e: React.MouseEvent) => Promise<any> | void",
    },
    {
      name: "triggerProps",
      description: formatMessage({ defaultMessage: "可以接受所有 Trigger 的参数。" }),
      type: "Partial<[TriggerProps](trigger#trigger)>",
    },
    {
      name: "content",
      description: formatMessage({ defaultMessage: "内容。" }),
      type: "ReactNode | (() => ReactNode)",
    },
    {
      name: "getPopupContainer",
      description: formatMessage({ defaultMessage: "弹出挂载的节点。" }),
      type: "(node: HTMLElement) => Element",
    },
    {
      name: "onCancel",
      description: formatMessage({
        defaultMessage: "点击取消按钮的回调函数。",
      }),
      type: "(e: React.MouseEvent) => void",
    },
    {
      name: "onVisibleChange",
      description: formatMessage({ defaultMessage: "弹出打开和关闭触发的回调。" }),
      type: "(visible: boolean) => void",
    },
    {
      name: "title",
      description: formatMessage({ defaultMessage: "标题。" }),
      type: "ReactNode | (() => ReactNode)",
    },
  ];

  return (
    <Unstyled>
      <Title>{formatMessage({ defaultMessage: "气泡确认框 Popconfirm" })}</Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "点击元素，弹出气泡式的确认框。",
        })}
      </Paragraph>

      <Title heading={2}>{formatMessage({ defaultMessage: "示例" })}</Title>

      <Title heading={3} id="default">
        {formatMessage({ defaultMessage: "基础用法" })}
      </Title>
      <Canvas of={Stories.Default} />

      <Title heading={3} id="positions">
        {formatMessage({ defaultMessage: "位置" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "Popconfirm 支持 12 个不同的方位。分别为：上左 上 上右 下左 下 下右 左上 左 左下 右上 右 右下。",
        })}
      </Paragraph>
      <Canvas of={Stories.Positions} />

      <Title heading={3} id="icon">
        {formatMessage({ defaultMessage: "自定义图标" })}
      </Title>
      <Canvas of={Stories.Icon} />

      <Title heading={3} id="asyncClose">
        {formatMessage({ defaultMessage: "异步关闭" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "用于异步执行某些操作，等操作完成再关闭弹出框。返回一个 Promise 用于异步关闭。",
        })}
      </Paragraph>
      <Canvas of={Stories.AsyncClose} />

      <Title heading={2}>{formatMessage({ defaultMessage: "用法" })}</Title>
      <Source
        code={`import { Popconfirm, PopconfirmProps } from "@gio-design/react";`}
        language="typescript"
      />

      <Title id="props" heading={3}>
        Popconfirm Props
      </Title>
      <PropsTable data={data} />
    </Unstyled>
  );
}

export default injectIntl(DocPage);
