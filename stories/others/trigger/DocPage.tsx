import { injectIntl, IntlShape } from "react-intl";
import { Canvas, Unstyled, Source } from "@storybook/blocks";
import PropsTable, { type PropsTableData } from "../../../components/props-table";
import { Typography } from "../../../src";
import * as Stories from "./index.stories";

const { Title, Paragraph } = Typography;

function DocPage({ intl }: { intl: IntlShape }) {
  const { formatMessage } = intl;

  const data: PropsTableData[] = [
    {
      name: "alignPoint",
      description: formatMessage({ defaultMessage: "弹出层跟随鼠标位置。" }),
      type: "boolean",
    },
    {
      name: "autoAlignPopupMinWidth",
      description: formatMessage({ defaultMessage: "自动对齐子元素的宽度设置弹出框的最小宽度。" }),
      type: "boolean",
    },
    {
      name: "autoAlignPopupWidth",
      description: formatMessage({ defaultMessage: "自动对齐子元素的宽度设置弹出框的宽度。" }),
      type: "boolean",
    },
    {
      name: "autoFitPosition",
      description: formatMessage({ defaultMessage: "是否根据空间自动调整弹出框的位置。" }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "autoFixPosition",
      description: formatMessage({
        defaultMessage: "当内容发生变化导致内容区域尺寸发生变化，自动进行重新定位。",
      }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "blurToHide",
      description: formatMessage({
        defaultMessage:
          "是否在触发节点失去焦点的时候关闭弹出框，仅在 `trigger` 中含有 `focus` 时生效。",
      }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "clickToClose",
      description: formatMessage({
        defaultMessage:
          "是否能通过点击触发节点来关闭弹出框。trigger 包含 click, contextMenu 时，默认为 true。否则为 false。",
      }),
      type: "boolean",
    },
    {
      name: "containerScrollToClose",
      description: formatMessage({ defaultMessage: "是否在容器滚动时关闭弹出框。" }),
      type: "boolean",
    },
    {
      name: "defaultPopupVisible",
      description: formatMessage({ defaultMessage: "默认弹出框开启或关闭。" }),
      type: "boolean",
    },
    {
      name: "disabled",
      description: formatMessage({ defaultMessage: "是否禁用。" }),
      type: "boolean",
    },
    {
      name: "escToClose",
      description: formatMessage({ defaultMessage: "是否允许按 `ESC` 键关闭弹出框。" }),
      type: "boolean",
    },
    {
      name: "mouseLeaveToClose",
      description: formatMessage({
        defaultMessage: "是否在鼠标移出触发节点和弹出层的时候关闭弹出层。",
      }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "popupHoverStay",
      description: formatMessage({
        defaultMessage: "是否在鼠标移出触发节点，移入弹出框时保留弹出框。",
      }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "popupVisible",
      description: formatMessage({ defaultMessage: "设置弹出框开启或关闭。" }),
      type: "boolean",
    },
    {
      name: "showArrow",
      description: formatMessage({ defaultMessage: "是否展示箭头元素。" }),
      type: "boolean",
    },
    {
      name: "unmountOnExit",
      description: formatMessage({ defaultMessage: "隐藏后是否销毁 DOM 结构。" }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "updateOnScroll",
      description: formatMessage({ defaultMessage: "是否在容器滚动时更新弹出框的位置。" }),
      type: "boolean",
    },
    {
      name: "focusDelay",
      description: formatMessage({ defaultMessage: "focus 触发延时的毫秒数。" }),
      type: "number",
    },
    {
      name: "mouseEnterDelay",
      description: formatMessage({ defaultMessage: "mouseenter 触发延时的毫秒数。" }),
      type: "number",
      defaultValue: "100",
    },
    {
      name: "mouseLeaveDelay",
      description: formatMessage({ defaultMessage: "mouseleave 触发延时的毫秒数。" }),
      type: "number",
      defaultValue: "100",
    },
    {
      name: "childrenPrefix",
      description: formatMessage({
        defaultMessage:
          "设置这个参数后，打开弹出后，children 上会添加一个名为 `${childrenPrefix}-open` 的类。",
      }),
      type: "string",
    },
    {
      name: "classNames",
      description: formatMessage({ defaultMessage: "动画类名。" }),
      type: "string",
      defaultValue: "fadeIn",
    },
    {
      name: "position",
      description: formatMessage({ defaultMessage: "弹出位置，一共有 12 个方位可供选择。" }),
      type: "| 'top'| 'tl'| 'tr'| 'bottom'| 'bl'| 'br'| 'left'| 'lt'| 'lb'| 'right'| 'rt'| 'rb'",
      defaultValue: "bottom",
    },
    {
      name: "trigger",
      description: formatMessage({ defaultMessage: "触发方式。" }),
      type: "| 'hover'| 'click'| 'focus'| 'contextMenu'| Array<'hover' | 'click' | 'focus' | 'contextMenu'>",
      defaultValue: "hover",
    },
    {
      name: "arrowProps",
      description: formatMessage({ defaultMessage: "箭头元素的所有 html 参数。" }),
      type: "HTMLAttributes<HTMLDivElement>",
    },
    {
      name: "boundaryDistance",
      description: formatMessage({
        defaultMessage:
          "默认弹出层位置会根据视口边界进行定位及微调，此参数可以设置到视口边界一定距离时即进行定位调整。仅在 autoFitPosition=true 且 alignPoint=false 生效。",
      }),
      type: "| { left?: number; bottom?: number }| { left?: number; top?: number }| { right?: number; bottom?: number }| { right?: number; top?: number }",
    },
    {
      name: "clickOutsideToClose",
      description: formatMessage({
        defaultMessage:
          "是否在点击空白处（触发节点和弹出框以外的区域）时关闭弹出层。 关闭时会触发 `onVisibleChange`。默认是在冒泡阶段触发该逻辑，可设置 `'{ capture: true '}` 指定捕获阶段触发。",
      }),
      type: "boolean | { capture: boolean }",
      defaultValue: "true",
    },
    {
      name: "duration",
      description: formatMessage({ defaultMessage: "动画过渡时间。" }),
      type: "number | { exit?: number; enter?: number; appear?: number }",
      defaultValue: "200",
    },
    {
      name: "onClickOutside",
      description: formatMessage({ defaultMessage: "点击触发节点和弹出框以外的区域的回调。" }),
      type: "Function",
    },
    {
      name: "popupAlign",
      description: formatMessage({
        defaultMessage:
          "调整弹出框的位置，有四个属性值，`left`, `right`, `top`, `bottom`，分别表示向该方向移动几个像素。具体可查看 [示例](/react/components/trigger#设置弹窗位置偏移量)。",
      }),
      type: "{left?: number | [number, number];right?: number | [number, number];top?: number | [number, number];bottom?: number | [number, number];}",
      defaultValue: "{}",
    },
    {
      name: "popupStyle",
      description: formatMessage({ defaultMessage: "弹出框（内部）的样式。" }),
      type: "CSSProperties",
    },
    {
      name: "getDocument",
      description: formatMessage({
        defaultMessage: "在该元素上执行 clickOutside，触发弹出框关闭。",
      }),
      type: "() => Element",
      defaultValue: "() => window.document",
    },
    {
      name: "getPopupContainer",
      description: formatMessage({ defaultMessage: "设置弹出内容所插入的父元素。" }),
      type: "(node: HTMLElement) => Element",
    },
    {
      name: "onClick",
      description: formatMessage({
        defaultMessage: "按钮点击事件（`trigger` 包含 `click` 时生效）。",
      }),
      type: "(e) => void",
    },
    {
      name: "onVisibleChange",
      description: formatMessage({ defaultMessage: "显示或隐藏时触发的回调。" }),
      type: "(visible: boolean) => void",
    },
    {
      name: "popup",
      description: formatMessage({ defaultMessage: "弹出框的内容。" }),
      type: "() => ReactNode",
    },
  ];

  return (
    <Unstyled>
      <Title>{formatMessage({ defaultMessage: "触发器 Trigger" })}</Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "用于对元素添加 hover, click, focus 等事件，并且弹出下拉框。",
        })}
      </Paragraph>

      <Title heading={2}>{formatMessage({ defaultMessage: "示例" })}</Title>

      <Title heading={3} id="basic">
        {formatMessage({ defaultMessage: "基础用法" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "Trigger 组件默认是没有弹出框的样式的。以下示例均为 Demo 样式。",
        })}
      </Paragraph>
      <Canvas of={Stories.Default} />

      <Title heading={3} id="nested">
        {formatMessage({ defaultMessage: "嵌套用法" })}
      </Title>
      <Canvas of={Stories.Nested} />

      <Title heading={3} id="triggers">
        {formatMessage({ defaultMessage: "多种触发方式" })}
      </Title>
      <Paragraph>
        {formatMessage({ defaultMessage: "通过trigger传入数组，可以设置多个触发方式。" })}
      </Paragraph>
      <Canvas of={Stories.Triggers} />

      <Title heading={3} id="align-point">
        {formatMessage({ defaultMessage: "跟随鼠标显示弹出层" })}
      </Title>
      <Paragraph>
        {formatMessage({ defaultMessage: "设置 alignPoint 属性，可以使弹出层出现在鼠标位置。" })}
      </Paragraph>
      <Canvas of={Stories.AlignPoint} />

      <Title heading={3} id="arrow">
        {formatMessage({ defaultMessage: "箭头" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "通过 showArrow 属性，可以展示默认的箭头元素。也可以通过 arrowProps 进行定制。",
        })}
      </Paragraph>
      <Canvas of={Stories.Arrow} />

      <Title heading={3} id="popup-align">
        {formatMessage({ defaultMessage: "弹窗位置偏移量" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "通过 popupAlign 属性，可以设置弹窗在原本位置的基础上进行额外的位置调整。",
        })}
      </Paragraph>
      <Canvas of={Stories.PopupAlign} />

      <Title heading={3} id="update-on-scroll">
        {formatMessage({ defaultMessage: "监听滚动" })}
      </Title>
      <Paragraph>
        {formatMessage({ defaultMessage: "先触发弹框，再滚动容器，弹框位置会随着滚动而改变。" })}
      </Paragraph>
      <Canvas of={Stories.UpdateOnScroll} />

      <Title heading={3} id="boundary">
        {formatMessage({ defaultMessage: "边界距离" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "默认弹出层位置会根据视口边界进行定位及微调，boundaryDistance 参数可以设置到视口边界一定距离时即进行定位调整。仅在 autoFitPosition=true 且 alignPoint=false 生效。",
        })}
      </Paragraph>
      <Canvas of={Stories.BoundaryDistance} />

      <Title heading={2}>{formatMessage({ defaultMessage: "用法" })}</Title>
      <Source
        code={`import { Trigger, type TriggerProps } from "@gio-design/react";`}
        language="tsx"
      />

      <Title id="props" heading={3}>
        TriggerProps
      </Title>
      <PropsTable data={data} />
    </Unstyled>
  );
}

const IntlDocPage = injectIntl(DocPage);
export default IntlDocPage;
