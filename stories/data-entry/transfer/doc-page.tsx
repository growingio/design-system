import PropsTable, { type PropsTableData } from "@/components/props-table";
import { Typography } from "@/src";
import { Canvas, Source, Unstyled } from "@storybook/addon-docs/blocks";
import { injectIntl, IntlShape } from "react-intl";
import * as Stories from "./index.stories";

const { Title, Paragraph } = Typography;

function DocPage({ intl }: { intl: IntlShape }) {
  const { formatMessage } = intl;

  const data: PropsTableData[] = [
    {
      name: "disabled",
      description: formatMessage({ defaultMessage: "禁用穿梭框。" }),
      type: "boolean",
    },
    {
      name: "draggable",
      description: formatMessage({ defaultMessage: "列表内条目是否可拖拽。" }),
      type: "boolean",
    },
    {
      name: "oneWay",
      description: formatMessage({ defaultMessage: "单向。" }),
      type: "boolean",
    },
    {
      name: "onChange",
      description: formatMessage({ defaultMessage: "选中项在两栏之间转移时的回调。" }),
      type: "(newTargetKeys: string[], direction: 'source' | 'target', moveKeys: string[]) => void",
    },
    {
      name: "onSearch",
      description: formatMessage({ defaultMessage: "搜索框输入进行搜索时回调函数。" }),
      type: "(value: string, type?: 'source' | 'target') => void",
    },
    {
      name: "dataSource",
      description: formatMessage({
        defaultMessage: "穿梭框数据源，其中一部分会被渲染到左边一栏，targetKeys 中指定的除外。",
      }),
      type: "TransferItem[]",
    },
    {
      name: "defaultSelectedKeys",
      description: formatMessage({ defaultMessage: "默认的 `selectKeys`。" }),
      type: "string[]",
      defaultValue: "[]",
    },
    {
      name: "defaultTargetKeys",
      description: formatMessage({ defaultMessage: "默认的 `targetKeys`。" }),
      type: "string[]",
      defaultValue: "[]",
    },
    {
      name: "listStyle",
      description: formatMessage({
        defaultMessage: "左右两栏框的样式，通过数组为左右列表传入不同属性。",
      }),
      type: "CSSProperties | CSSProperties[]",
    },
    {
      name: "onDragEnd",
      description: formatMessage({ defaultMessage: "节点结束拖拽的回调。" }),
      type: "(e: DragEvent<HTMLSpanElement>, item: TransferItem) => void",
    },
    {
      name: "onDragLeave",
      description: formatMessage({ defaultMessage: "节点离开可释放目标上时的回调。" }),
      type: "(e: DragEvent<HTMLSpanElement>, item: TransferItem) => void",
    },
    {
      name: "onDragOver",
      description: formatMessage({ defaultMessage: "节点被拖拽至可释放目标上时的回调。" }),
      type: "(e: DragEvent<HTMLSpanElement>, item: TransferItem) => void",
    },
    {
      name: "onDragStart",
      description: formatMessage({ defaultMessage: "节点开始拖拽的回调。" }),
      type: "(e: DragEvent<HTMLSpanElement>, item: TransferItem) => void",
    },
    {
      name: "onDrop",
      description: formatMessage({ defaultMessage: "节点在可释放目标上释放时的回调。" }),
      type: "(info: {e: DragEvent<HTMLSpanElement>;dragItem: TransferItem;dropItem: TransferItem;dropPosition: number;}) => void",
    },
    {
      name: "operationStyle",
      description: formatMessage({ defaultMessage: "穿梭中间操作部分的样式。" }),
      type: "CSSProperties",
    },
    {
      name: "operationTexts",
      description: formatMessage({ defaultMessage: "穿梭按钮的文案数组，顺序从上至下。" }),
      type: "string[] | ReactNode[]",
    },
    {
      name: "pagination",
      description: formatMessage({
        defaultMessage:
          "是否使用翻页，也可传入 `Pagination` 的配置，通过数组为左右列表传入不同属性。",
      }),
      type: "boolean | PaginationProps | Array<boolean | PaginationProps>",
    },
    {
      name: "searchPlaceholder",
      description: formatMessage({
        defaultMessage: "搜索框默认提示文字，通过数组为左右列表传入不同属性。",
      }),
      type: "string | string[]",
    },
    {
      name: "selectedKeys",
      description: formatMessage({ defaultMessage: "当前应该有哪些项被选中。" }),
      type: "string[]",
    },
    {
      name: "showFooter",
      description: formatMessage({
        defaultMessage: "左右两栏是否显示底部重置按钮，通过数组为左右列表传入不同属性。",
      }),
      type: "boolean | ReactNode | Array<boolean | ReactNode>",
    },
    {
      name: "showSearch",
      description: formatMessage({
        defaultMessage: "左右两栏是否显示搜索框，通过数组为左右列表传入不同属性。",
      }),
      type: "boolean | InputProps | Array<boolean | InputProps>",
    },
    {
      name: "simple",
      description: formatMessage({ defaultMessage: "简单模式。" }),
      type: "| boolean| {retainSelectedItems?: boolean;}",
    },
    {
      name: "targetKeys",
      description: formatMessage({ defaultMessage: "渲染到右边一栏数据的 key 集合。" }),
      type: "string[]",
    },
    {
      name: "titleTexts",
      description: formatMessage({
        defaultMessage: "穿梭框左右栏标题数组。(函数写法 `2.18.0` 开始支持)",
      }),
      type: "Array<TransferListTitle>",
      defaultValue: "['Source', 'Target']",
    },
    {
      name: "virtualListProps",
      description: formatMessage({ defaultMessage: "传递虚拟滚动属性。" }),
      type: "AvailableVirtualListProps",
    },
    {
      name: "children",
      description: formatMessage({ defaultMessage: "自定义列表渲染函数。" }),
      type: "(props: TransferCustomListProps) => ReactNode",
    },
    {
      name: "filterOption",
      description: formatMessage({ defaultMessage: "搜索框筛选算法。" }),
      type: "(inputValue: string, item: TransferItem) => boolean",
      defaultValue: "(inputValue, item) => item.value.indexOf(inputValue) !== -1",
    },
    {
      name: "onResetData",
      description: formatMessage({ defaultMessage: "点击重置按钮后的回调。" }),
      type: "() => void",
    },
    {
      name: "onSelectChange",
      description: formatMessage({ defaultMessage: "数据项选中状态发生改变的回调。" }),
      type: "(leftSelectedKeys: string[], rightSelectedKeys: string[]) => void",
    },
    {
      name: "render",
      description: formatMessage({ defaultMessage: "每行数据渲染函数。" }),
      type: "(item: TransferItem) => any",
    },
  ];
  const itemPropsData: PropsTableData[] = [
    {
      name: "key",
      description: formatMessage({ defaultMessage: "选项的键值（唯一标识符）。" }),
      type: "string",
      required: true,
    },
    {
      name: "value",
      description: formatMessage({ defaultMessage: "选项对应的值。" }),
      type: "string",
      required: true,
    },
    {
      name: "disabled",
      description: formatMessage({ defaultMessage: "是否禁用此选项。" }),
      type: "boolean",
    },
  ];

  return (
    <Unstyled>
      <Title>{formatMessage({ defaultMessage: "数据穿梭框 Transfer" })}</Title>
      <Paragraph>
        {formatMessage({ defaultMessage: "两栏布局的多选组件，将元素从一栏即时移到另一栏。" })}
      </Paragraph>

      <Title heading={2}>{formatMessage({ defaultMessage: "示例" })}</Title>

      <Title heading={3} id="default">
        {formatMessage({ defaultMessage: "基础用法" })}
      </Title>
      <Canvas of={Stories.Default} />

      <Title heading={3} id="disable">
        {formatMessage({ defaultMessage: "禁用状态" })}
      </Title>
      <Canvas of={Stories.Disabled} />

      <Title heading={3} id="title">
        {formatMessage({ defaultMessage: "标题" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "自定义标题栏。",
        })}
      </Paragraph>
      <Canvas of={Stories.Titles} />

      <Title heading={3} id="show-search">
        {formatMessage({ defaultMessage: "搜索" })}
      </Title>
      <Canvas of={Stories.ShowSearch} />

      <Title heading={3} id="one-way">
        {formatMessage({ defaultMessage: "单向" })}
      </Title>
      <Canvas of={Stories.OneWay} />

      <Title heading={3} id="pagination">
        {formatMessage({ defaultMessage: "分页" })}
      </Title>
      <Paragraph>
        {formatMessage({ defaultMessage: "数据量大时，指定 pagination 来使用分页。" })}
      </Paragraph>
      <Canvas of={Stories.Pagination} />

      <Title heading={3} id="simple">
        {formatMessage({ defaultMessage: "简单模式" })}
      </Title>
      <Canvas of={Stories.Simple} />

      <Title heading={3} id="draggable">
        {formatMessage({ defaultMessage: "拖拽" })}
      </Title>
      <Paragraph>
        {formatMessage({ defaultMessage: "指定 draggable 属性为 true，可拖拽排序左右面板。" })}
      </Paragraph>
      <Canvas of={Stories.Draggable} />

      <Title heading={3} id="custom-render">
        {formatMessage({ defaultMessage: "自定义渲染" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "通过 render 自定义渲染每一个项目，可用于渲染复杂数据。",
        })}
      </Paragraph>
      <Canvas of={Stories.CustomRender} />

      <Title heading={2}>{formatMessage({ defaultMessage: "用法" })}</Title>
      <Source
        code={`import { Transfer, type TransferProps } from "@gio-design/react";`}
        language="typescript"
      />

      <Title id="props" heading={3}>
        TransferProps
      </Title>
      <PropsTable data={data} />

      <Title id="item-props" heading={3}>
        Transfer.Item Props
      </Title>
      <PropsTable data={itemPropsData} includeCommonProps={false} />

      <Title id="transfer-item" heading={3}>
        TransferItem
      </Title>
      <Source
        code={`export type TransferItem = {
  key: string;
  value: string;
  disabled?: boolean;
};`}
        language="typescript"
      />

      <Title id="transfer-list-title" heading={3}>
        TransferListTitle
      </Title>
      <Source
        code={`type TransferListTitle =
  | string
  | ((params: {
      countTotal: number;
      countSelected: number;
      clear: () => void;
      checkbox: ReactNode;
      searchInput: ReactNode;
    }) => ReactNode);`}
        language="typescript"
      />

      <Title id="available-virtual-list-props" heading={3}>
        AvailableVirtualListProps
      </Title>
      <Source
        code={`export type AvailableVirtualListProps = Pick<
  VirtualListProps<any>,
  | "height"
  | "itemHeight"
  | "threshold"
  | "isStaticItemHeight"
  | "scrollOptions"
  | "onScroll"
  | "wrapperChild"
>;`}
        language="typescript"
      />

      <Title id="transfer-custom-list-props" heading={3}>
        TransferCustomListProps
      </Title>
      <Source
        code={`export interface TransferCustomListProps
  extends Pick<
    TransferListProps,
    | "disabled"
    | "listType"
    | "selectedKeys"
    | "validKeys"
    | "selectedDisabledKeys"
  > {
  filteredItems: TransferItem[];
  onItemSelect: (key: string, selected: boolean) => void;
  onItemRemove: (key: string) => void;
  onItemSelectAll: (keys: string[], selected: boolean) => void;
}`}
        language="typescript"
      />
    </Unstyled>
  );
}

export default injectIntl(DocPage);
