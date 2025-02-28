import { FormattedMessage, injectIntl, IntlShape } from "react-intl";
import { Canvas, Unstyled, Source } from "@storybook/blocks";
import PropsTable, { type PropsTableData } from "../../../components/props-table";
import { Typography } from "../../../src";
import * as Stories from "./index.stories";
import { Link } from "storybook/internal/components";

const { Title, Paragraph } = Typography;

function DocPage({ intl }: { intl: IntlShape }) {
  const { formatMessage } = intl;
  const data: PropsTableData[] = [
    {
      name: "affix",
      description: formatMessage({
        defaultMessage: "是否固定。当设置为 `true`时，锚点组件将会嵌套在固钉组件内",
      }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "animation",
      description: formatMessage({ defaultMessage: "是否平滑滚动。" }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "hash",
      description: formatMessage({
        defaultMessage: "是否改变 hash，设置为 `false` 点击锚点不会改变页面 hash。",
      }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "lineless",
      description: formatMessage({ defaultMessage: "没有左侧轴线的样式。" }),
      type: "boolean",
    },
    {
      name: "offsetBottom",
      description: formatMessage({
        defaultMessage: "距离窗口底部达到指定偏移量后触发。 `Affix` 固钉组件的 `offsetBottom` 属性",
      }),
      type: "number",
    },
    {
      name: "offsetTop",
      description: formatMessage({
        defaultMessage: "距离窗口顶部达到指定偏移量后触发。即 `Affix` 固钉组件的 `offsetTop` 属性",
      }),
      type: "number",
    },
    {
      name: "targetOffset",
      description: formatMessage({
        defaultMessage:
          "容器中基准线的位置相对容器顶部的偏移量，在没有设置的时候，取值为滚动容器高度的一半。当锚点到达或离开基准线的时候会更新锚点的状态。",
      }),
      type: "number",
    },
    {
      name: "boundary",
      description: formatMessage({
        defaultMessage:
          "滚动边界值，设置该值为数字后，将会在距离滚动容器 boundary 距离时停止滚动。设置为 end, start, center，目标元素将会对应滚动到底部，顶部，中间位置。",
      }),
      type: "number | 'end' | 'start' | 'center' | 'nearest'",
      defaultValue: "`start`",
    },
    {
      name: "direction",
      description: formatMessage({ defaultMessage: "方向。" }),
      type: "'vertical' | 'horizontal'",
      defaultValue: "`vertical`",
    },
    {
      name: "affixStyle",
      description: formatMessage({ defaultMessage: "通过该属性可以设置 `Affix` 组件的样式。" }),
      type: "CSSProperties",
    },
    {
      name: "scrollContainer",
      description: formatMessage({ defaultMessage: "滚动容器。传入选择器或者dom元素。" }),
      type: "string | HTMLElement | Window",
    },
    {
      name: "onChange",
      description: formatMessage({ defaultMessage: "滚动时锚点改变或点击锚点时触发。" }),
      type: "(newLink: string, oldLink: string) => void",
    },
    {
      name: "onSelect",
      description: formatMessage({ defaultMessage: "点击锚点时候触发。" }),
      type: "(newLink: string, oldLink: string) => void",
    },
  ];
  const linkPropsData: PropsTableData[] = [
    {
      name: "href",
      description: formatMessage({ defaultMessage: "锚点链接。" }),
      type: "string",
      defaultValue: "`#`",
    },
    {
      name: "title",
      description: formatMessage({ defaultMessage: "文本内容。可以是字符串或者自定义节点。" }),
      type: "string | ReactNode",
    },
  ];

  return (
    <Unstyled>
      <Title>
        <FormattedMessage defaultMessage="锚点 Anchor" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="通过锚点可快速找到信息内容在当前页面的位置。" />
      </Paragraph>

      <Title heading={2}>
        <FormattedMessage defaultMessage="示例" />
      </Title>

      <Title heading={3} id="basic">
        <FormattedMessage defaultMessage="基础用法" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="基本用法，随着页面滚动，锚点浮动在页面固定位置。" />
      </Paragraph>
      <Canvas of={Stories.Basic} />

      <Title heading={3} id="affix">
        <FormattedMessage defaultMessage="固定位置" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="不随着页面滚动，锚点在固定位置。" />
      </Paragraph>
      <Canvas of={Stories.Affix} />

      <Title heading={3} id="lineless">
        <FormattedMessage defaultMessage="无左侧轴线" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="可以使用无左侧轴线的锚点样式。" />
      </Paragraph>
      <Canvas of={Stories.Lineless} />

      <Title heading={3} id="boundary">
        <FormattedMessage defaultMessage="偏移量" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="可以设置 boundary 来定制锚点滚动偏移量。" />
      </Paragraph>
      <Canvas of={Stories.Boundary} />

      <Title heading={3} id="hash">
        <FormattedMessage defaultMessage="无浏览历史" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="可以设置点击锚点而不改变浏览器历史。" />
      </Paragraph>
      <Canvas of={Stories.Hash} />

      <Title heading={3} id="horizontal">
        <FormattedMessage defaultMessage="水平布局" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="不支持嵌套。" />
      </Paragraph>
      <Canvas of={Stories.Horizontal} />

      <Title heading={2}>{formatMessage({ defaultMessage: "用法" })}</Title>
      <Source
        code={`import { Anchor, type AnchorProps } from "@giod/react";\nconst { Link } = Anchor;`}
        language="tsx"
      />

      <Title id="anchor-props" heading={3}>
        AnchorProps
      </Title>
      <PropsTable data={data} />

      <Title id="anchor-link-props" heading={3}>
        Anchor.Link Props
      </Title>
      <PropsTable data={linkPropsData} />
    </Unstyled>
  );
}

const IntlDocPage = injectIntl(DocPage);
export default IntlDocPage;
