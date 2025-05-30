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
      name: "border",
      description: formatMessage({ defaultMessage: "是否显示边框。" }),
      type: "boolean",
    },
    {
      name: "layout",
      description: formatMessage({ defaultMessage: "排列方式。" }),
      type: "'horizontal' | 'vertical' | 'inline-horizontal' | 'inline-vertical'",
      defaultValue: "horizontal",
    },
    {
      name: "size",
      description: formatMessage({ defaultMessage: "描述列表的尺寸，如不指定默认为 `default`。" }),
      type: "'mini' | 'small' | 'medium' | 'default' | 'large'",
    },
    {
      name: "tableLayout",
      description: formatMessage({
        defaultMessage: "描述中表格样式的 `layout-fixed`，当设置成 `fixed` 时，宽度会均分。",
      }),
      type: "'auto' | 'fixed'",
      defaultValue: "auto",
    },
    {
      name: "colon",
      description: formatMessage({ defaultMessage: "标签文字后显示的内容，一般配置为 ` :`。" }),
      type: "ReactNode",
    },
    {
      name: "title",
      description: formatMessage({ defaultMessage: "标题。" }),
      type: "ReactNode",
    },
    {
      name: "column",
      description: formatMessage({
        defaultMessage:
          "一行放置几列数据，一个数据为一列。支持配置 `column` 为数字或者对象，配置对象格式时，支持配置为 `'{ xs: 1, md: 2, lg: 3 '}` 这种形式来支持响应式排列。",
      }),
      type: "number| {xs?: number;sm?: number;md?: number;lg?: number;xl?: number;xxl?: number;xxxl?: number;}",
      defaultValue: "3",
    },
    {
      name: "data",
      description: formatMessage({ defaultMessage: "描述列表的数据。" }),
      type: "{ key?: React.Key; label?: ReactNode; value?: ReactNode; span?: number; }[]",
    },
    {
      name: "labelStyle",
      description: formatMessage({ defaultMessage: "显示标签的单元格的样式。" }),
      type: "CSSProperties",
    },
    {
      name: "valueStyle",
      description: formatMessage({ defaultMessage: "显示值的单元格的样式。" }),
      type: "CSSProperties",
    },
  ];

  return (
    <Unstyled>
      <Title>{formatMessage({ defaultMessage: "描述列表 Descriptions" })}</Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "一般用于详情页的信息展示。",
        })}
      </Paragraph>

      <Title heading={2}>{formatMessage({ defaultMessage: "示例" })}</Title>

      <Title heading={3} id="default">
        {formatMessage({ defaultMessage: "基础用法" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "简单地成组展示多个只读字段，一般用于详情页的信息。",
        })}
      </Paragraph>
      <Canvas of={Stories.Default} />

      <Title heading={3} id="column">
        {formatMessage({ defaultMessage: "单列样式" })}
      </Title>
      <Canvas of={Stories.Column} />

      <Title heading={3} id="responsive-column">
        {formatMessage({ defaultMessage: "响应式样式" })}
      </Title>
      <Canvas of={Stories.ResponsiveColumn} />

      <Title heading={3} id="border">
        {formatMessage({ defaultMessage: "带边框展示" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "带边框和背景颜色的列表。",
        })}
      </Paragraph>
      <Canvas of={Stories.Border} />

      <Title heading={3} id="colon">
        {formatMessage({ defaultMessage: "带冒号展示" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "通过 colon 可以将冒号换成其他符号。",
        })}
      </Paragraph>
      <Canvas of={Stories.Colon} />

      <Title heading={3} id="layout">
        {formatMessage({ defaultMessage: "布局展示" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "有水平排列、行内水平排列、垂直排列、行内垂直排列四种排列模式。",
        })}
      </Paragraph>
      <Canvas of={Stories.Layout} />

      <Title heading={3} id="size">
        {formatMessage({ defaultMessage: "尺寸展示" })}
      </Title>
      <Canvas of={Stories.Size} />

      <Title heading={2}>{formatMessage({ defaultMessage: "用法" })}</Title>
      <Source
        code={`import { Descriptions, DescriptionsProps } from "@gio-design/react";`}
        language="typescript"
      />

      <Title id="descriptions-props" heading={3}>
        Descriptions Props
      </Title>
      <PropsTable data={data} />
    </Unstyled>
  );
}

export default injectIntl(DocPage);
