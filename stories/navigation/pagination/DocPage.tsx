import { FormattedMessage, injectIntl, IntlShape } from "react-intl";
import { Canvas, Unstyled, Source } from "@storybook/blocks";
import PropsTable, { type PropsTableData } from "@/components/props-table";
import { Typography } from "@/src";
import * as Stories from "./index.stories";
import "./index.css";

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
      name: "hideOnSinglePage",
      description: formatMessage({ defaultMessage: "是否在只有一页的情况下隐藏。" }),
      type: "boolean",
    },
    {
      name: "pageSizeChangeResetCurrent",
      description: formatMessage({ defaultMessage: "`pageSize` 改变的时候重置当前页码为 `1`。" }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "showJumper",
      description: formatMessage({
        defaultMessage: "是否显示快速跳转到某页，在 `simple` 模式下默认为 true。",
      }),
      type: "boolean",
    },
    {
      name: "showMore",
      description: formatMessage({
        defaultMessage: "是否显示更多页码提示（当尚无法计算数据总数时可以使用）。",
      }),
      type: "boolean",
    },
    {
      name: "simple",
      description: formatMessage({ defaultMessage: "是否应用精简分页模式。" }),
      type: "boolean",
    },
    {
      name: "sizeCanChange",
      description: formatMessage({ defaultMessage: "是否可以改变每页条数。" }),
      type: "boolean",
    },
    {
      name: "bufferSize",
      description: formatMessage({ defaultMessage: "`current` 页与 `...` 之间的页码个数。" }),
      type: "number",
      defaultValue: "2",
    },
    {
      name: "current",
      description: formatMessage({ defaultMessage: "当前页。" }),
      type: "number",
    },
    {
      name: "defaultCurrent",
      description: formatMessage({ defaultMessage: "当前页默认值。" }),
      type: "number",
    },
    {
      name: "defaultPageSize",
      description: formatMessage({ defaultMessage: "默认每页数据条数。" }),
      type: "number",
    },
    {
      name: "pageSize",
      description: formatMessage({ defaultMessage: "每页数据条数。" }),
      type: "number",
    },
    {
      name: "total",
      description: formatMessage({ defaultMessage: "数据总数。" }),
      type: "number",
    },
    {
      name: "itemRender",
      description: formatMessage({ defaultMessage: "定制分页按钮的结构。" }),
      type: "(page: number,type: 'page' \\| 'more' \\| 'prev' \\| 'next',originElement: ReactNode) => ReactNode",
    },
    {
      name: "size",
      description: formatMessage({ defaultMessage: "分页器尺寸。" }),
      type: "'mini' \\| 'small' \\| 'default' \\| 'large'",
    },
    {
      name: "activePageItemStyle",
      description: formatMessage({ defaultMessage: "被选中的分页按钮样式。" }),
      type: "CSSProperties",
    },
    {
      name: "icons",
      description: formatMessage({ defaultMessage: "设置分页器的图标。" }),
      type: "{prev?: ReactNode;next?: ReactNode;more?: ReactNode;}",
    },
    {
      name: "pageItemStyle",
      description: formatMessage({ defaultMessage: "分页按钮样式。" }),
      type: "CSSProperties",
    },
    {
      name: "selectProps",
      description: formatMessage({ defaultMessage: "用于配置弹出框的属性。" }),
      type: "Partial<SelectProps>",
    },
    {
      name: "sizeOptions",
      description: formatMessage({ defaultMessage: "每页可以显示数据条数。" }),
      type: "number[]",
    },
    {
      name: "onChange",
      description: formatMessage({ defaultMessage: "变化时的回调。" }),
      type: "(pageNumber: number, pageSize: number) => void",
    },
    {
      name: "onPageSizeChange",
      description: formatMessage({ defaultMessage: "pageSize 变化时的回调。" }),
      type: "(size: number, current: number) => void",
    },
    {
      name: "showTotal",
      description: formatMessage({ defaultMessage: "是否显示数据总数。" }),
      type: "boolean \\| ((total: number, range: number[]) => ReactNode)",
    },
  ];
  return (
    <Unstyled>
      <Typography className="pagination-demo">
        <Title>
          <FormattedMessage defaultMessage="分页 Pagination" />
        </Title>
        <Paragraph>
          <FormattedMessage defaultMessage="采用分页控制单页内的信息数量，也可进行页面跳转。" />
        </Paragraph>

        <Title heading={2}>
          <FormattedMessage defaultMessage="示例" />
        </Title>

        <Title heading={3} id="default">
          <FormattedMessage defaultMessage="默认样式" />
        </Title>
        <Canvas of={Stories.Default} />

        <Title heading={3} id="size-change">
          <FormattedMessage defaultMessage="改变每页条目数量" />
        </Title>
        <Canvas of={Stories.SizeChange} />

        <Title heading={3} id="jumper">
          <FormattedMessage defaultMessage="跳转页码" />
        </Title>
        <Paragraph>
          <FormattedMessage defaultMessage="输入页码，可快速跳转到指定页。" />
        </Paragraph>
        <Canvas of={Stories.Jumper} />

        <Title heading={3} id="simple">
          <FormattedMessage defaultMessage="简洁模式" />
        </Title>
        <Paragraph>
          <FormattedMessage defaultMessage="在空间有限的场景下，可以将 simple 设置为 true，使用较为简单的文本分页方式。" />
        </Paragraph>
        <Canvas of={Stories.Simple} />

        <Title heading={3} id="total">
          <FormattedMessage defaultMessage="显示总数" />
        </Title>
        <Paragraph>
          <FormattedMessage defaultMessage="通过设置 showTotal 来显示数据总数。" />
        </Paragraph>
        <Canvas of={Stories.Total} />

        <Title heading={3} id="all">
          <FormattedMessage defaultMessage="全部展示" />
        </Title>
        <Paragraph>
          <FormattedMessage defaultMessage="展示全部配置项。" />
        </Paragraph>
        <Canvas of={Stories.All} />

        <Title heading={3} id="size">
          <FormattedMessage defaultMessage="组件尺寸" />
        </Title>
        <Paragraph>
          <FormattedMessage defaultMessage="通过指定 size 字段，可以使用不同尺寸的分页器。" />
        </Paragraph>
        <Canvas of={Stories.Size} />

        <Title heading={3} id="buffer-size">
          <FormattedMessage defaultMessage="省略页面长度" />
        </Title>
        <Paragraph>
          <FormattedMessage defaultMessage="通过 bufferSize 可以设置 current 页与 ... 之间的页码个数。" />
        </Paragraph>
        <Canvas of={Stories.BufferSize} />

        <Title heading={2}>{formatMessage({ defaultMessage: "用法" })}</Title>
        <Source
          code={`import { Pagination, type PaginationProps } from "@gio-design/react";`}
          language="tsx"
        />

        <Title id="pagination-props" heading={3}>
          PaginationProps
        </Title>
        <PropsTable data={data} />
      </Typography>
    </Unstyled>
  );
}

const IntlDocPage = injectIntl(DocPage);
export default IntlDocPage;
