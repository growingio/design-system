import { injectIntl, IntlShape } from "react-intl";
import { Canvas, Unstyled, Source } from "@storybook/blocks";
import PropsTable, { type PropsTableData } from "../../../components/props-table";
import { Typography } from "../../../src";
import * as CardStories from "./index.stories";

const { Title, Paragraph } = Typography;

function DocPage({ intl }: { intl: IntlShape }) {
  const { formatMessage } = intl;

  const data: PropsTableData[] = [
    {
      name: "bordered",
      description: formatMessage({ defaultMessage: "是否有边框。" }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "hoverable",
      description: formatMessage({ defaultMessage: "是否可悬浮。" }),
      type: "boolean",
    },
    {
      name: "loading",
      description: formatMessage({ defaultMessage: "是否为加载中。" }),
      type: "boolean",
    },
    {
      name: "size",
      description: formatMessage({ defaultMessage: "卡片尺寸。" }),
      type: "'default' | 'small'",
      defaultValue: "default",
    },
    {
      name: "cover",
      description: formatMessage({ defaultMessage: "卡片封面。" }),
      type: "ReactNode",
    },
    {
      name: "extra",
      description: formatMessage({ defaultMessage: "卡片右上角的操作区域。" }),
      type: "string | ReactNode",
    },
    {
      name: "title",
      description: formatMessage({ defaultMessage: "卡片标题。" }),
      type: "string | ReactNode",
    },
    {
      name: "actions",
      description: formatMessage({ defaultMessage: "卡片底部的操作组。" }),
      type: "ReactNode[]",
    },
    {
      name: "bodyStyle",
      description: formatMessage({ defaultMessage: "内容区域自定义样式。" }),
      type: "CSSProperties",
    },
    {
      name: "headerStyle",
      description: formatMessage({ defaultMessage: "自定义标题区域样式。" }),
      type: "CSSProperties",
    },
  ];
  const cardMetaData: PropsTableData[] = [
    {
      name: "avatar",
      description: formatMessage({ defaultMessage: "头像。" }),
      type: "ReactNode",
    },
    {
      name: "description",
      description: formatMessage({ defaultMessage: "描述。" }),
      type: "string | ReactNode",
    },
    {
      name: "title",
      description: formatMessage({ defaultMessage: "标题。" }),
      type: "string | ReactNode",
    },
  ];
  const cardGridData: PropsTableData[] = [
    {
      name: "hoverable",
      description: formatMessage({ defaultMessage: "是否可以悬浮。" }),
      type: "boolean",
    },
  ];

  return (
    <Unstyled>
      <Title>{formatMessage({ defaultMessage: "卡片 Card" })}</Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "将信息分类后分标题、详情等区域聚合展现，一般作为简洁介绍或者信息的大盘和入口。",
        })}
      </Paragraph>

      <Title heading={2}>{formatMessage({ defaultMessage: "示例" })}</Title>

      <Title heading={3} id="basic">
        {formatMessage({ defaultMessage: "基础用法" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "常规的内容容器，可承载文字、列表、图片、段落，常用于模块划分和内容概览。",
        })}
      </Paragraph>
      <Canvas of={CardStories.Basic} />

      <Title heading={3} id="size">
        {formatMessage({ defaultMessage: "卡片尺寸" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "卡片分为：常规、小型 2 种尺寸。可在不同场景及不同业务需求选择适合尺寸。",
        })}
      </Paragraph>
      <Canvas of={CardStories.Size} />

      <Title heading={3} id="hoverable">
        {formatMessage({ defaultMessage: "鼠标悬浮样式" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "指定 hoverable 来为卡片添加鼠标悬浮样式，同时你可以通过样式覆盖来自定义悬浮样式。",
        })}
      </Paragraph>
      <Canvas of={CardStories.Hoverable} />

      <Title heading={3} id="borderless">
        {formatMessage({ defaultMessage: "无边框卡片" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "设置 bordered 为 false 来使用无边框卡片。",
        })}
      </Paragraph>
      <Canvas of={CardStories.Borderless} />

      <Title heading={3} id="only-children">
        {formatMessage({ defaultMessage: "简洁卡片" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "卡片可以只有内容区域。",
        })}
      </Paragraph>
      <Canvas of={CardStories.OnlyChildren} />

      <Title heading={3} id="card-meta">
        {formatMessage({ defaultMessage: "更灵活的内容展示" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "使用 Card.Meta 支持更加灵活的内容（封面、头像、 标题、描述信息）",
        })}
      </Paragraph>
      <Canvas of={CardStories.CardMeta} />

      <Title heading={3} id="card-in-grid">
        {formatMessage({ defaultMessage: "栅格卡片" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "在系统概览页面常常和栅格进行配合。",
        })}
      </Paragraph>
      <Canvas of={CardStories.CardInGrid} />

      <Title heading={3} id="card-with-skeleton">
        {formatMessage({ defaultMessage: "预加载的卡片" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "结合 Skeleton 来在数据读入前显示文本骨架。",
        })}
      </Paragraph>
      <Canvas of={CardStories.CardWithSkeleton} />

      <Title heading={3} id="grid-in-card">
        {formatMessage({ defaultMessage: "网络型内嵌卡片" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "通过 Card.Grid 来使用卡片内容区隔模式。",
        })}
      </Paragraph>
      <Canvas of={CardStories.GridInCard} />

      <Title heading={3} id="card-in-card">
        {formatMessage({ defaultMessage: "内部卡片" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "卡片中可以嵌套其他卡片组件。",
        })}
      </Paragraph>
      <Canvas of={CardStories.CardInCard} />

      <Title heading={3} id="card-with-tabs">
        {formatMessage({ defaultMessage: "带页签的卡片" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "可以在卡片组件里面使用 Tabs 标签页组件。",
        })}
      </Paragraph>
      <Canvas of={CardStories.CardWithTabs} />

      <Title heading={3} id="card-actions">
        {formatMessage({ defaultMessage: "支持更多内容配置" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "actions 字段接收一个 ReactNode 数组，用于展示底部按钮组。",
        })}
      </Paragraph>
      <Canvas of={CardStories.CardActions} />

      <Title heading={2}>{formatMessage({ defaultMessage: "用法" })}</Title>
      <Source code={`import { Card, type CardProps } from "growingio-design";`} language="tsx" />

      <Title id="props" heading={3}>
        CardProps
      </Title>
      <PropsTable data={data} />

      <Title id="card-meta-props" heading={3}>
        Card.Meta Props
      </Title>
      <PropsTable data={cardMetaData} />

      <Title id="card-grid-props" heading={3}>
        Card.Grid Props
      </Title>
      <PropsTable data={cardGridData} />
    </Unstyled>
  );
}

export default injectIntl(DocPage);
