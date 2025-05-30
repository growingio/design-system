import { FormattedMessage, injectIntl, IntlShape } from "react-intl";
import { Canvas, Unstyled, Source } from "@storybook/addon-docs/blocks";
import { Typography } from "@/src";
import PropsTable, { type PropsTableData } from "../../../components/props-table";
import * as ButtonStories from "./index.stories";

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
      name: "iconOnly",
      description: formatMessage({
        defaultMessage:
          "只有图标，按钮宽高相等。如果指定 `icon` 且没有 children，`iconOnly` 默认为 true。",
      }),
      type: "boolean",
    },
    {
      name: "loading",
      description: formatMessage({ defaultMessage: "按钮是否是加载状态。" }),
      type: "boolean",
    },
    {
      name: "loadingFixedWidth",
      description: formatMessage({
        defaultMessage: "当 loading 的时候，不改变按钮的宽度。",
      }),
      type: "boolean",
    },
    {
      name: "long",
      description: formatMessage({ defaultMessage: "按钮宽度随容器自适应。" }),
      type: "boolean",
    },
    {
      name: "href",
      description: formatMessage({
        defaultMessage: "添加跳转链接，设置此属性，button 表现跟 a 标签一致。",
      }),
      type: "string",
    },
    {
      name: "target",
      description: formatMessage({
        defaultMessage: "a 链接的 target 属性，href 存在时生效。",
      }),
      type: "string",
    },
    {
      name: "htmlType",
      description: formatMessage({
        defaultMessage: "按钮原生的 html type 类型。",
      }),
      type: "'button' | 'submit' | 'reset'",
      defaultValue: "button",
    },
    {
      name: "shape",
      description: formatMessage({
        defaultMessage: "按钮形状，`circle` - 圆形， `round` - 全圆角， `square` - 长方形。",
      }),
      type: "'circle' | 'round' | 'square'",
      defaultValue: "square",
    },
    {
      name: "size",
      description: formatMessage({ defaultMessage: "按钮的尺寸。" }),
      type: "'mini' | 'small' | 'medium' | 'large'",
      defaultValue: "medium",
    },
    {
      name: "status",
      description: formatMessage({ defaultMessage: "按钮状态。" }),
      type: "'primay' | 'default' | 'warning' | 'danger' | 'success'",
    },
    {
      name: "type",
      description: formatMessage({
        defaultMessage:
          "按钮主要分为五种按钮类型：主要按钮、默认按钮、虚框按钮、文字按钮、线性按钮。",
      }),
      type: "'primary' | 'default' | 'dashed' | 'text' | 'outline'",
      defaultValue: "default",
    },
    {
      name: "icon",
      description: formatMessage({ defaultMessage: "设置按钮的图标。" }),
      type: "ReactNode",
    },
    {
      name: "anchorProps",
      description: formatMessage({
        defaultMessage: "a 链接的原生属性，href 存在时生效。",
      }),
      type: "HTMLProps<HTMLAnchorElement>",
    },
    {
      name: "onClick",
      description: formatMessage({ defaultMessage: "点击按钮的回调。" }),
      type: "(e: Event) => void",
    },
  ];

  return (
    <Unstyled>
      <Title>
        <FormattedMessage defaultMessage="按钮 Button" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="按钮是一种命令组件，可发起一个即时操作。" />
      </Paragraph>

      <Title heading={2}>
        <FormattedMessage defaultMessage="示例" />
      </Title>

      <Title heading={3} id="basic-buttons">
        <FormattedMessage defaultMessage="基础用法" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="按钮分为主要按钮、默认按钮、虚线按钮、线形按钮和文本按钮五种。" />
      </Paragraph>
      <Canvas of={ButtonStories.BasicButtons} />

      <Title heading={3} id="icon-buttons">
        <FormattedMessage defaultMessage="图标按钮" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="按钮可以嵌入图标，在只设置图标而没有 children 时，按钮的高宽相等。" />
      </Paragraph>
      <Canvas of={ButtonStories.IconButtons} />

      <Title heading={3} id="button-shapes">
        <FormattedMessage defaultMessage="按钮形状" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="按钮有多种形状，square - 长方形 (默认)，circle - 圆形，round - 全圆角。" />
      </Paragraph>
      <Canvas of={ButtonStories.ButtonShapes} />

      <Title heading={3} id="button-sizes">
        <FormattedMessage defaultMessage="按钮尺寸" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="按钮分为：迷你、小、中、大，四种尺寸。高度分别为：24px/28px/32px/36px。推荐及默认为尺寸「中」。可在不同场景及不同业务需求选择适合尺寸。" />
      </Paragraph>
      <Canvas of={ButtonStories.ButtonSizes} />

      <Title heading={3} id="button-status">
        <FormattedMessage defaultMessage="按钮状态" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="按钮状态分为主要、默认、警告、危险和成功五种，可以与按钮类型同时生效，优先级高于按钮类型。" />
      </Paragraph>
      <Canvas of={ButtonStories.ButtonStatus} />

      <Title heading={3} id="disabled">
        <FormattedMessage defaultMessage="禁用状态" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="按钮的禁用状态。" />
      </Paragraph>
      <Canvas of={ButtonStories.DisabledButtons} />

      <Title heading={3} id="loading-buttons">
        <FormattedMessage defaultMessage="加载中" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="通过设置 loading 可以让一个按钮处于加载中状态。处于加载中状态的按钮不会触发点击事件。" />
      </Paragraph>
      <Canvas of={ButtonStories.LoadingButtons} />

      <Title heading={3} id="button-groups">
        <FormattedMessage defaultMessage="组合按钮" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="可用在同级多项操作，以按钮组合方式出现。" />
      </Paragraph>
      <Canvas of={ButtonStories.ButtonGroups} />

      <Title heading={3} id="long-buttons">
        <FormattedMessage defaultMessage="长按钮" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="按钮宽度随着容器宽度进行适配。" />
      </Paragraph>
      <Canvas of={ButtonStories.LongButtons} />

      <Title heading={2}>
        <FormattedMessage defaultMessage="用法" />
      </Title>
      <Source code={`import { Button, type ButtonProps } from "@giod/react";`} language="tsx" />

      <Title id="button-props" heading={3}>
        ButtonProps
      </Title>
      <PropsTable data={data} />
    </Unstyled>
  );
}

const IntlDocPage = injectIntl(DocPage);
export default IntlDocPage;
