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
      name: "bordered",
      description: formatMessage({ defaultMessage: "是否显示边框。" }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "hoverable",
      description: formatMessage({ defaultMessage: "列表项是否可悬浮。" }),
      type: "boolean",
    },
    {
      name: "loading",
      description: formatMessage({ defaultMessage: "是否加载中。" }),
      type: "boolean",
    },
    {
      name: "split",
      description: formatMessage({ defaultMessage: "是否显示分割线。" }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "defaultCurrent",
      description: formatMessage({ defaultMessage: "滚动加载数据当前页码。" }),
      type: "number",
      defaultValue: "1",
    },
    {
      name: "offsetBottom",
      description: formatMessage({ defaultMessage: "触发底部函数的距离阙值。" }),
      type: "number",
      defaultValue: "0",
    },
    {
      name: "throttleDelay",
      description: formatMessage({ defaultMessage: "节流延时。" }),
      type: "number",
      defaultValue: "500",
    },
    {
      name: "size",
      description: formatMessage({ defaultMessage: "列表的尺寸。" }),
      type: "'small' | 'default' | 'large'",
    },
    {
      name: "children",
      description: formatMessage({
        defaultMessage: "当 dataSource 和 render 存在时，可不传此参数。",
      }),
      type: "ReactNode",
    },
    {
      name: "footer",
      description: formatMessage({ defaultMessage: "列表底部。" }),
      type: "ReactNode",
    },
    {
      name: "header",
      description: formatMessage({ defaultMessage: "列表头部。" }),
      type: "ReactNode",
    },
    {
      name: "noDataElement",
      description: formatMessage({ defaultMessage: "没有数据的时候显示的元素。" }),
      type: "ReactNode",
    },
    {
      name: "scrollLoading",
      description: formatMessage({ defaultMessage: "滚动加载状态时，滚动到底部的提示。" }),
      type: "string | ReactNode",
    },
    {
      name: "dataSource",
      description: formatMessage({
        defaultMessage: "列表渲染数据源，当children存在时，可不传此参数 (dataSource优先级更高）。",
      }),
      type: "T[]",
    },
    {
      name: "grid",
      description: formatMessage({ defaultMessage: "列表栅格配置。" }),
      type: "[ListGridProps](#listgridprops)",
    },
    {
      name: "listRef",
      description: formatMessage({ defaultMessage: "当前列表的引用。" }),
      type: "MutableRefObject<[ListHandle](#listhandle)>",
    },
    {
      name: "pagination",
      description: formatMessage({
        defaultMessage:
          "是否使用翻页，也可传入 [Pagination](/docs/components-navigation-pagination--docs#pagination-props) 的配置。",
      }),
      type: "boolean | PaginationProps",
    },
    {
      name: "virtualListProps",
      description: formatMessage({
        defaultMessage: "传递虚拟列表属性，传入此参数以开启虚拟滚动。",
      }),
      type: "AvailableVirtualListProps",
    },
    {
      name: "wrapperClassName",
      description: formatMessage({ defaultMessage: "指定最外层包裹元素的类名。" }),
      type: "string | string[]",
    },
    {
      name: "wrapperStyle",
      description: formatMessage({ defaultMessage: "指定最外层包裹元素的样式。" }),
      type: "CSSProperties",
    },
    {
      name: "onListScroll",
      description: formatMessage({
        defaultMessage:
          "列表滚动回调函数，参数为列表滚动元素，当onReachBottom无法满足需求，可自定义滚动监听函数。",
      }),
      type: "(elem: Element) => void",
    },
    {
      name: "onReachBottom",
      description: formatMessage({ defaultMessage: "滚动至底部触发函数。" }),
      type: "(currentPage: number) => void",
    },
    {
      name: "render",
      description: formatMessage({
        defaultMessage: "单个列表渲染函数，当 children 存在时，可不传此参数。",
      }),
      type: "(item: T, index: number) => ReactNode",
    },
  ];
  const itemPropsData: PropsTableData[] = [
    {
      name: "actionLayout",
      description: formatMessage({
        defaultMessage: "列表操作组的位置，默认horizontal，出现在右侧；vertical出现在下方。",
      }),
      type: "'horizontal' | 'vertical'",
      defaultValue: "horizontal",
    },
    {
      name: "extra",
      description: formatMessage({ defaultMessage: "列表最右侧内容，额外内容。" }),
      type: "ReactNode",
    },
    {
      name: "actions",
      description: formatMessage({ defaultMessage: "列表项下方内容（列表操作组）。" }),
      type: "ReactNode[]",
    },
  ];
  const itemMetaPropsData: PropsTableData[] = [
    {
      name: "avatar",
      description: formatMessage({ defaultMessage: "列表元素的图标。" }),
      type: "ReactNode",
    },
    {
      name: "description",
      description: formatMessage({ defaultMessage: "列表元素描述内容。" }),
      type: "ReactNode",
    },
    {
      name: "title",
      description: formatMessage({ defaultMessage: "列表元素标题。" }),
      type: "ReactNode",
    },
  ];

  return (
    <Unstyled>
      <Title>{formatMessage({ defaultMessage: "列表 List" })}</Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "最基础的列表展示，可承载文字、列表、图片、段落，常用于后台数据展示页面。",
        })}
      </Paragraph>

      <Title heading={2}>{formatMessage({ defaultMessage: "示例" })}</Title>

      <Title heading={3} id="default">
        {formatMessage({ defaultMessage: "基础用法" })}
      </Title>
      <Canvas of={Stories.Default} />

      <Title heading={3} id="item-meta">
        {formatMessage({ defaultMessage: "元信息" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "使用 List.Item.Meta 可快速指定头像、标题、描述。",
        })}
      </Paragraph>
      <Canvas of={Stories.ItemMeta} />

      <Title heading={3} id="item-actions">
        {formatMessage({ defaultMessage: "操作项" })}
      </Title>
      <Canvas of={Stories.ItemActions} />

      <Title heading={3} id="item-action-layout">
        {formatMessage({ defaultMessage: "竖排列表样式" })}
      </Title>
      <Canvas of={Stories.ItemActionLayout} />

      <Title heading={3} id="grid">
        {formatMessage({ defaultMessage: "栅格列表" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "通过 grid.span 设置期望每行展示的列数。",
        })}
      </Paragraph>
      <Canvas of={Stories.Grid} />

      <Title heading={3} id="scroll-loading">
        {formatMessage({ defaultMessage: "滚动加载" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "可设置 onReachBottom 来动态滚动加载列表。当 onReachBottom 无法满足需求，可通过 onListScroll 来自定义列表滚动监听函数，此时默认的滚动监听函数将失效。",
        })}
      </Paragraph>
      <Canvas of={Stories.ScrollLoading} />

      <Title heading={3} id="virtual-list">
        {formatMessage({ defaultMessage: "长列表" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "通过指定 virtualListProps 来开启虚拟列表，在大量数据时获得高性能表现。",
        })}
      </Paragraph>
      <Canvas of={Stories.VirtualList} />

      <Title heading={2}>{formatMessage({ defaultMessage: "用法" })}</Title>
      <Source code={`import { List, ListProps } from "@gio-design/react";`} language="typescript" />

      <Title id="list-props" heading={3}>
        List Props
      </Title>
      <PropsTable data={data} />

      <Title id="list-item-props" heading={3}>
        List.Item Props
      </Title>
      <PropsTable data={itemPropsData} />

      <Title id="list-item-meta-props" heading={3}>
        List.Item.Meta Props
      </Title>
      <PropsTable data={itemMetaPropsData} />
    </Unstyled>
  );
}

export default injectIntl(DocPage);
