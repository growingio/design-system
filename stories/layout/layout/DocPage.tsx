import { FormattedMessage, injectIntl, IntlShape } from "react-intl";
import { Canvas, Unstyled, Source } from "@storybook/addon-docs/blocks";
import { Typography } from "@/src";
import PropsTable from "../../../components/props-table";
import * as Stories from "./index.stories";

const { Title, Paragraph } = Typography;

function DocPage({ intl }: { intl: IntlShape }) {
  const { formatMessage } = intl;
  const data = [
    {
      name: "hasSider",
      description: formatMessage({
        defaultMessage: "表示子元素里有 Sider，一般不用指定。可用于服务端渲染时避免样式闪动。",
      }),
      type: "boolean",
    },
  ];
  const siderPropsData = [
    {
      name: "collapsed",
      description: formatMessage({ defaultMessage: "当前收起状态。" }),
      type: "boolean",
    },
    {
      name: "collapsible",
      description: formatMessage({ defaultMessage: "是否可收起。" }),
      type: "boolean",
    },
    {
      name: "defaultCollapsed",
      description: formatMessage({ defaultMessage: "是否默认收起。" }),
      type: "boolean",
    },
    {
      name: "reverseArrow",
      description: formatMessage({
        defaultMessage: "翻转折叠提示箭头的方向，当 Sider 在右边时可以使用。",
      }),
      type: "boolean",
    },
    {
      name: "collapsedWidth",
      description: formatMessage({ defaultMessage: "收缩宽度。" }),
      type: "number",
      defaultValue: "48",
    },
    {
      name: "onCollapse",
      description: formatMessage({
        defaultMessage: "展开-收起时的回调函数，有点击 trigger 以及响应式反馈两种方式可以触发。",
      }),
      type: "(collapse: boolean, type: 'clickTrigger' | 'responsive') => void",
    },
    {
      name: "theme",
      description: formatMessage({ defaultMessage: "主题颜色。" }),
      type: "'dark' | 'light'",
      defaultValue: "light",
    },
    {
      name: "trigger",
      description: formatMessage({
        defaultMessage: "自定义底部折叠触发器，设置为 null 时隐藏 trigger。",
      }),
      type: "string | ReactNode",
    },
    {
      name: "breakpoint",
      description: formatMessage({
        defaultMessage:
          "触发响应式布局的断点, 详见[响应式栅格](/docs/components-layout-grid--docs#responsive-value)。",
      }),
      type: "GridResponsiveBreakpoint",
    },
    {
      name: "resizeBoxProps",
      description: formatMessage({
        defaultMessage:
          "可以接受 `ResizeBox` 所有参数，在伸缩开启时，可以通过 `resizeBoxProps` 对菜单栏的 `width` 进行受控展示或者与 `collapsed` 联动。",
      }),
      type: "ResizeBoxProps",
    },
    {
      name: "resizeDirections",
      description: formatMessage({
        defaultMessage:
          "可以用 ResizeBox 替换原生的 `aside` 标签，这个参数即 ResizeBox的 `directions` 参数。详情请看 [ResizeBox](/react/components/resize-box)。",
      }),
      type: "string[]",
    },
    {
      name: "width",
      description: formatMessage({ defaultMessage: "宽度。" }),
      type: "number | string",
      defaultValue: "200",
    },
    {
      name: "onBreakpoint",
      description: formatMessage({ defaultMessage: "触发响应式布局断点时的回调。" }),
      type: "(broken: boolean) => void",
    },
  ];

  return (
    <Unstyled>
      <Title>
        <FormattedMessage defaultMessage="Layout 布局" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="协助进行页面级整体布局。" />
      </Paragraph>

      <Title heading={2}>
        <FormattedMessage defaultMessage="示例" />
      </Title>

      <Title heading={3} id="classic">
        <FormattedMessage defaultMessage="经典布局" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="典型的页面布局。" />
      </Paragraph>
      <Canvas of={Stories.Classic} />

      <Title heading={3} id="sider-trigger">
        <FormattedMessage defaultMessage="侧边栏触发器" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="通过设置 Menu.Sider 的 trigger 属性，实现自定义收起按钮的图标。" />
      </Paragraph>
      <Canvas of={Stories.SiderTrigger} />

      <Title heading={3} id="custom-trigger">
        <FormattedMessage defaultMessage="自定义收起按钮" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="设置 Menu.Sider 的 trigger 属性为 null 后，Sider 内置的缩起按钮不会显示。此时可自定义收起按钮。" />
      </Paragraph>
      <Canvas of={Stories.CustomTrigger} />

      <Title heading={3} id="resize-box">
        <FormattedMessage defaultMessage="伸缩侧边栏" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="通过 resizeBoxProps.onMoving方法， 配置 width 和 collapsed 可以实现即可以拖拽伸缩杆也可以点击收缩的侧边栏。这时侧边栏的宽度完全受控于 width 的值。" />
      </Paragraph>
      <Canvas of={Stories.ResizeBox} />

      <Title heading={2}>
        <FormattedMessage defaultMessage="用法" />
      </Title>
      <Source
        code={`import { Layout } from "@giod/react";\nconst { Header, Footer, Content, Sider } = Layout;`}
        language="tsx"
      />

      <Title id="layout-props" heading={3}>
        LayoutProps
      </Title>
      <PropsTable data={data} />

      <Title id="header-props" heading={3}>
        Layout.Header Props
      </Title>
      <PropsTable data={[]} />

      <Title id="footer-props" heading={3}>
        Layout.Footer Props
      </Title>
      <PropsTable data={[]} />

      <Title id="content-props" heading={3}>
        Layout.Content Props
      </Title>
      <PropsTable data={[]} />

      <Title id="sider-props" heading={3}>
        Layout.Sider Props
      </Title>
      <PropsTable data={siderPropsData} />
    </Unstyled>
  );
}

const IntlDocPage = injectIntl(DocPage);
export default IntlDocPage;
