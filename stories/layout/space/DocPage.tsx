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
      name: "wrap",
      description: formatMessage({ defaultMessage: "环绕类型的间距，用于折行的场景。" }),
      type: "boolean",
    },
    {
      name: "align",
      description: formatMessage({ defaultMessage: "对齐方式。" }),
      type: "'start' | 'end' | 'center' | 'baseline'",
    },
    {
      name: "direction",
      description: formatMessage({ defaultMessage: "间距方向。" }),
      type: "'vertical' | 'horizontal'",
      defaultValue: "horizontal",
    },
    {
      name: "split",
      description: formatMessage({ defaultMessage: "设置分隔符。" }),
      type: "ReactNode",
    },
    {
      name: "size",
      description: formatMessage({
        defaultMessage: "预置尺寸或者自定义尺寸，数组类型时，分别代表横向间隔和纵向间隔。",
      }),
      type: "SpaceSize | SpaceSize[]",
      defaultValue: "small",
    },
  ];

  const spaceSizeData = [
    {
      name: "mini",
      description: formatMessage({ defaultMessage: "迷你尺寸：4px。" }),
      type: "-",
    },
    {
      name: "small",
      description: formatMessage({ defaultMessage: "小尺寸：8px。" }),
      type: "-",
    },
    {
      name: "medium",
      description: formatMessage({ defaultMessage: "中尺寸：16px。" }),
      type: "-",
    },
    {
      name: "large",
      description: formatMessage({ defaultMessage: "大尺寸：24px。" }),
      type: "-",
    },
    {
      name: "number",
      description: formatMessage({ defaultMessage: "自定义尺寸。" }),
      type: "-",
    },
  ];

  return (
    <Unstyled>
      <Title>
        <FormattedMessage defaultMessage="间距 Space" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="设置组件之间的间距。" />
      </Paragraph>

      <Title heading={2}>
        <FormattedMessage defaultMessage="示例" />
      </Title>

      <Title heading={3} id="horizontal">
        <FormattedMessage defaultMessage="水平间隔" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="默认是水平方向的间隔。" />
      </Paragraph>
      <Canvas of={Stories.Horizontal} />

      <Title heading={3} id="vertical">
        <FormattedMessage defaultMessage="垂直间隔" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="可以设置为垂直方向。" />
      </Paragraph>
      <Canvas of={Stories.Vertical} />

      <Title heading={3} id="sizes">
        <FormattedMessage defaultMessage="不同尺寸" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="内置 4 个尺寸，也支持传数字来自定义尺寸。" />
      </Paragraph>
      <Canvas of={Stories.Sizes} />

      <Title heading={3} id="align">
        <FormattedMessage defaultMessage="对齐方式" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="内置 4 种对齐方式，分别为 start center end baseline，在水平模式下默认为 center。" />
      </Paragraph>
      <Canvas of={Stories.Align} />

      <Title heading={3} id="wrap">
        <FormattedMessage defaultMessage="环绕" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="环绕类型的间距，四周都有间距，一般用于换行的场景。" />
      </Paragraph>
      <Canvas of={Stories.Wrap} />

      <Title heading={3} id="split">
        <FormattedMessage defaultMessage="分隔符" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="为相邻子元素设置分隔符。" />
      </Paragraph>
      <Canvas of={Stories.Split} />

      <Title heading={2}>
        <FormattedMessage defaultMessage="用法" />
      </Title>
      <Source code={`import { Space, type SpaceProps } from "@giod/react";`} language="tsx" />

      <Title id="space-props" heading={3}>
        SpaceProps
      </Title>
      <PropsTable data={data} />

      <Title id="space-size" heading={3}>
        SpaceSize
      </Title>
      <PropsTable data={spaceSizeData} includeCommonProps={false} />
    </Unstyled>
  );
}

const IntlDocPage = injectIntl(DocPage);
export default IntlDocPage;
