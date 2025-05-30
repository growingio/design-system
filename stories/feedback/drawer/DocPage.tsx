import { injectIntl, IntlShape } from "react-intl";
import { Canvas, Unstyled, Source } from "@storybook/addon-docs/blocks";
import { Typography } from "@/src";
import PropsTable, { type PropsTableData } from "@/components/props-table";
import * as AlertStories from "./index.stories";

const { Title, Paragraph } = Typography;

function DocPage({ intl }: { intl: IntlShape }) {
  const { formatMessage } = intl;

  const data: PropsTableData[] = [
    {
      name: "autoFocus",
      description: formatMessage({
        defaultMessage: "是否默认聚焦第一个可聚焦元素，只在 `focusLock` 开启时生效。",
      }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "closable",
      description: formatMessage({ defaultMessage: "是否显示右上角关闭按钮。" }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "confirmLoading",
      description: formatMessage({ defaultMessage: "确认按钮是否为加载中状态。" }),
      type: "boolean",
    },
    {
      name: "escToExit",
      description: formatMessage({ defaultMessage: "按 `ESC` 键关闭。" }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "focusLock",
      description: formatMessage({ defaultMessage: "是否将焦点锁定在弹出框内。" }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "mask",
      description: formatMessage({ defaultMessage: "是否显示遮罩。" }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "maskClosable",
      description: formatMessage({ defaultMessage: "点击蒙层是否可以关闭。" }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "mountOnEnter",
      description: formatMessage({ defaultMessage: "是否在初次打开对话框时才渲染 dom。" }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "unmountOnExit",
      description: formatMessage({ defaultMessage: "是否在隐藏的时候销毁 DOM 结构。" }),
      type: "boolean",
    },
    {
      name: "visible",
      description: formatMessage({ defaultMessage: "是否显示弹出框。" }),
      type: "boolean",
    },
    {
      name: "zIndex",
      description: formatMessage({ defaultMessage: "设置抽屉的 zIndex。" }),
      type: "number",
    },
    {
      name: "placement",
      description: formatMessage({ defaultMessage: "抽屉的方向 `top` `right` `bottom` `left`。" }),
      type: "'top' | 'right' | 'bottom' | 'left'",
      defaultValue: "right",
    },
    {
      name: "cancelText",
      description: formatMessage({ defaultMessage: "取消按钮文案。" }),
      type: "ReactNode",
    },
    {
      name: "closeIcon",
      description: formatMessage({ defaultMessage: "自定义右上角关闭按钮。" }),
      type: "ReactNode",
    },
    {
      name: "footer",
      description: formatMessage({
        defaultMessage: "自定义按钮确认和取消按钮，为 null 的话没有按钮组。",
      }),
      type: "ReactNode",
    },
    {
      name: "okText",
      description: formatMessage({ defaultMessage: "确认按钮文案。" }),
      type: "ReactNode",
    },
    {
      name: "title",
      description: formatMessage({
        defaultMessage: "弹出框的标题（设置为 null 时，不显示标题栏）。",
      }),
      type: "ReactNode",
    },
    {
      name: "bodyStyle",
      description: formatMessage({ defaultMessage: "内容区域的样式。" }),
      type: "CSSProperties",
    },
    {
      name: "cancelButtonProps",
      description: formatMessage({ defaultMessage: "取消按钮的 props。" }),
      type: "ButtonProps",
    },
    {
      name: "headerStyle",
      description: formatMessage({ defaultMessage: "头部的样式。" }),
      type: "CSSProperties",
    },
    {
      name: "height",
      description: formatMessage({
        defaultMessage: "抽屉的高度，`placement`为 `top` `bottom` 时生效。",
      }),
      type: "string | number",
      defaultValue: "250",
    },
    {
      name: "maskStyle",
      description: formatMessage({ defaultMessage: "设置遮罩层的样式。" }),
      type: "CSSProperties",
    },
    {
      name: "okButtonProps",
      description: formatMessage({ defaultMessage: "确认按钮的 props。" }),
      type: "ButtonProps",
    },
    {
      name: "width",
      description: formatMessage({
        defaultMessage: "抽屉的宽度，`placement`为 `left` `right` 时生效。",
      }),
      type: "string | number",
      defaultValue: "250",
    },
    {
      name: "wrapClassName",
      description: formatMessage({ defaultMessage: "设置外层容器的类名。" }),
      type: "string | string[]",
    },
    {
      name: "afterClose",
      description: formatMessage({ defaultMessage: "抽屉关闭之后的回调。" }),
      type: "() => void",
    },
    {
      name: "afterOpen",
      description: formatMessage({ defaultMessage: "抽屉打开之后的回调。" }),
      type: "() => void",
    },
    {
      name: "getChildrenPopupContainer",
      description: formatMessage({
        defaultMessage: "抽屉里的弹出框 `Select` `Tooltip` 等挂载的容器，默认挂载在对话框内。",
      }),
      type: "(node: HTMLElement) => Element",
    },
    {
      name: "getPopupContainer",
      description: formatMessage({ defaultMessage: "指定弹出框挂载的父节点。" }),
      type: "() => Element",
      defaultValue: "() => document.body",
    },
    {
      name: "onCancel",
      description: formatMessage({ defaultMessage: "关闭弹出框的回调。" }),
      type: "(e: MouseEvent | Event) => void",
    },
    {
      name: "onOk",
      description: formatMessage({ defaultMessage: "点击确认按钮的回调。" }),
      type: "(e: Event) => void",
    },
  ];

  return (
    <Unstyled>
      <Title>{formatMessage({ defaultMessage: "抽屉 Drawer" })}</Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "触发命令后，从屏幕一侧滑出的抽屉式的面板。",
        })}
      </Paragraph>

      <Title heading={2}>{formatMessage({ defaultMessage: "示例" })}</Title>

      <Title heading={3} id="default">
        {formatMessage({ defaultMessage: "基础用法" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "点击触发按钮抽屉从右侧滑出，点击遮罩区关闭。",
        })}
      </Paragraph>
      <Canvas of={AlertStories.Default} />

      <Title heading={3} id="placement">
        {formatMessage({ defaultMessage: "自定义位置" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "自定义位置，点击触发按钮抽屉从相应的位置滑出。",
        })}
      </Paragraph>
      <Canvas of={AlertStories.Placement} />

      <Title heading={3} id="nested">
        {formatMessage({ defaultMessage: "嵌套" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "在抽屉内打开新的抽屉。",
        })}
      </Paragraph>
      <Canvas of={AlertStories.Nested} />

      <Title heading={3} id="preview">
        {formatMessage({ defaultMessage: "信息预览抽屉" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "需要快速预览对象概要时使用，点击遮罩区关闭。",
        })}
      </Paragraph>
      <Canvas of={AlertStories.Preview} />

      <Title heading={3} id="container">
        {formatMessage({ defaultMessage: "指定容器" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "可以通过 getPopupContainer 指定抽屉挂载的父级节点。",
        })}
      </Paragraph>
      <Canvas of={AlertStories.Container} />

      <Title heading={2}>{formatMessage({ defaultMessage: "用法" })}</Title>
      <Source
        code={`import { Drawer, type DrawerProps } from "@gio-design/react";`}
        language="typescript"
      />

      <Title id="props" heading={3}>
        DrawerProps
      </Title>
      <PropsTable data={data} />
    </Unstyled>
  );
}

const IntlDocPage = injectIntl(DocPage);
export default IntlDocPage;
