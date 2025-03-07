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
      name: "align",
      description: formatMessage({ defaultMessage: "靠左/靠右 展示 datetime 和 actions。" }),
      type: "| 'left'| 'right'| {datetime?: 'left' | 'right';actions?: 'left' | 'right';}",
    },
    {
      name: "actions",
      description: formatMessage({ defaultMessage: "操作列表。" }),
      type: "ReactNode",
    },
    {
      name: "author",
      description: formatMessage({ defaultMessage: "作者名。" }),
      type: "ReactNode",
    },
    {
      name: "avatar",
      description: formatMessage({ defaultMessage: "头像。" }),
      type: "ReactNode",
    },
    {
      name: "content",
      description: formatMessage({ defaultMessage: "评论内容。" }),
      type: "ReactNode",
    },
    {
      name: "datetime",
      description: formatMessage({ defaultMessage: "时间描述。" }),
      type: "ReactNode",
    },
  ];

  return (
    <Unstyled>
      <Title>{formatMessage({ defaultMessage: "评论 Comment" })}</Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "展示评论信息。",
        })}
      </Paragraph>

      <Title heading={2}>{formatMessage({ defaultMessage: "示例" })}</Title>

      <Title heading={3} id="default">
        {formatMessage({ defaultMessage: "基础用法" })}
      </Title>
      <Canvas of={Stories.Default} />

      <Title heading={3} id="align">
        {formatMessage({ defaultMessage: "对齐方式" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "通过 align 属性可以设置 datetime 和 actions 的对齐方式。",
        })}
      </Paragraph>
      <Canvas of={Stories.Align} />

      <Title heading={3} id="nested">
        {formatMessage({ defaultMessage: "嵌套评论" })}
      </Title>
      <Canvas of={Stories.Nested} />

      <Title heading={3} id="comment-list">
        {formatMessage({ defaultMessage: "评论列表" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "配合 List 组件展现评论列表。",
        })}
      </Paragraph>
      <Canvas of={Stories.CommentList} />

      <Title heading={3} id="reply">
        {formatMessage({ defaultMessage: "回复框" })}
      </Title>
      <Canvas of={Stories.Reply} />

      <Title heading={2}>{formatMessage({ defaultMessage: "用法" })}</Title>
      <Source
        code={`import { Comment, CommentProps } from "@gio-design/react";`}
        language="typescript"
      />

      <Title id="comment-props" heading={3}>
        Comment Props
      </Title>
      <PropsTable data={data} />
    </Unstyled>
  );
}

export default injectIntl(DocPage);
