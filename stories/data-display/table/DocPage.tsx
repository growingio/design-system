import { injectIntl, IntlShape } from "react-intl";
import { Canvas, Unstyled, Source } from "@storybook/blocks";
import PropsTable, { type PropsTableData } from "../../../components/props-table";
import { Typography } from "../../../src";
import * as TableStories from "./index.stories";

const { Title, Paragraph } = Typography;

function DocPage({ intl }: { intl: IntlShape }) {
  const { formatMessage } = intl;

  const data: PropsTableData[] = [
    {
      name: "borderCell",
      description: formatMessage({
        defaultMessage: "是否显示单元格边框，作用等同于 `border: '{ cell: true '}`。",
      }),
      type: "boolean",
    },
    {
      name: "defaultExpandAllRows",
      description: formatMessage({
        defaultMessage: "默认展开所有可展开的行。",
      }),
      type: "boolean",
    },
    {
      name: "hover",
      description: formatMessage({ defaultMessage: "是否开启鼠标悬浮效果。" }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "showHeader",
      description: formatMessage({ defaultMessage: "是否显示表头。" }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "stripe",
      description: formatMessage({ defaultMessage: "是否开启斑马纹。" }),
      type: "boolean",
    },
    {
      name: "tableLayoutFixed",
      description: formatMessage({
        defaultMessage:
          "表格的 `table-layout` 属性设置为 `fixed`，设置为 `fixed` 后，表格的宽度不会被内容撑开超出 100%。",
      }),
      type: "boolean",
    },
    {
      name: "virtualized",
      description: formatMessage({
        defaultMessage:
          "表格开启虚拟滚动，用于处理大数据场景。( 注意：虚拟滚动会自动关闭对树形数据的支持 )。",
      }),
      type: "boolean",
    },
    {
      name: "indentSize",
      description: formatMessage({
        defaultMessage: "树形数据每个层级向左偏移的像素。",
      }),
      type: "number",
      defaultValue: "15",
    },
    {
      name: "childrenColumnName",
      description: formatMessage({
        defaultMessage: "树形数据在 `data` 中的字段名，默认是 `children`。",
      }),
      type: "string",
      defaultValue: "children",
    },
    {
      name: "onChange",
      description: formatMessage({
        defaultMessage:
          "分页、排序、筛选时的回调。[PaginationProps](pagination#pagination) [SorterInfo](#sorter-info)",
      }),
      type: "(pagination: PaginationProps, sorter: SorterInfo | SorterInfo[], filters: Partial<Record<keyof T, string[]>>, extra: { currentData: T[]; currentAllData: T[]; action: 'paginate' | 'sort' | 'filter' }) => void",
    },
    {
      name: "pagePosition",
      description: formatMessage({
        defaultMessage: "设置分页器的位置，有六个方位 `右下` `左下` `右上` `左上` `上中` `下中`。",
      }),
      type: "'br' | 'bl' | 'tr' | 'tl' | 'topCenter' | 'bottomCenter'",
      defaultValue: "br",
    },
    {
      name: "size",
      description: formatMessage({
        defaultMessage: "表格尺寸，分为 默认，`默认` `中` `小` `迷你` 四个尺寸。",
      }),
      type: "'default' | 'middle' | 'small' | 'mini'",
    },
    {
      name: "noDataElement",
      description: formatMessage({
        defaultMessage: "没有数据的时候显示的元素。",
      }),
      type: "string | ReactNode",
    },
    {
      name: "placeholder",
      description: formatMessage({
        defaultMessage: "当单元格内容为空时，显示占位符，优先级低于 `column.placeholder`。",
      }),
      type: "ReactNode",
    },
    {
      name: "border",
      description: formatMessage({ defaultMessage: "边框设置。" }),
      type: "boolean | { wrapper?: boolean; headerCell?: boolean; bodyCell?: boolean; cell?: boolean }",
      defaultValue: "true",
    },
    {
      name: "columns",
      description: formatMessage({
        defaultMessage: "列描述数据对象的数组。[ColumnProps](#column-props)",
      }),
      type: "ColumnProps<T>[]",
    },
    {
      name: "components",
      description: formatMessage({
        defaultMessage: "覆盖原生表格标签。[ComponentsProps](#components-props)",
      }),
      type: "ComponentsProps",
    },
    {
      name: "data",
      description: formatMessage({ defaultMessage: "表格数据。" }),
      type: "T[]",
    },
    {
      name: "defaultExpandedRowKeys",
      description: formatMessage({ defaultMessage: "默认展开的行。" }),
      type: "(string | number)[]",
    },
    {
      name: "expandedRowKeys",
      description: formatMessage({ defaultMessage: "展开的行（受控）。" }),
      type: "(string | number)[]",
    },
    {
      name: "expandProps",
      description: formatMessage({
        defaultMessage:
          "自定义展开/关闭列的图标，宽度，标题，具体用法看[这个例子](/react/components/table#定制展开参数)。",
      }),
      type: "[ExpandProps](table#expandprops)<T>",
    },
    {
      name: "loading",
      description: formatMessage({ defaultMessage: "表格是否在加载中。" }),
      type: "boolean | [SpinProps](spin#spin)",
    },
    {
      name: "onHeaderRow",
      description: formatMessage({
        defaultMessage: "设置表头行单元格的各项事件回调。",
      }),
      type: "(columns: [ColumnProps](table#column)<T>[], index: number) => [RowCallbackProps](#rowcallbackprops)",
    },
    {
      name: "pagination",
      description: formatMessage({
        defaultMessage:
          "分页器设置，参考[Pagination组件](/react/components/pagination)，设置 `false` 不展示分页。",
      }),
      type: "[PaginationProps](pagination#pagination) | boolean",
    },
    {
      name: "rowSelection",
      description: formatMessage({
        defaultMessage: "设置表格行是否可选，选中事件等。[配置项](#rowselection)。",
      }),
      type: "[RowSelectionProps](table#rowselection)<T>",
    },
    {
      name: "scroll",
      description: formatMessage({
        defaultMessage:
          "设置x轴或y轴的滚动。`x` 设置为 `true`，会给 table 添加 `table-layout: fixed` 以及给父元素添加 `overflow: auto`。`y` 设置为 `true`，表头和表身会分离，放在两个 table 中。",
      }),
      type: "{ x?: number | string | boolean; y?: number | string | boolean }",
    },
    {
      name: "showSorterTooltip",
      description: formatMessage({
        defaultMessage:
          "表头是否显示下一次排序的 tooltip 提示。可以设置对象，可以传 `Tooltip` 组件的所有参数。",
      }),
      type: "boolean | [TooltipProps](tooltip#tooltip)",
      defaultValue: "true",
    },
    {
      name: "virtualListProps",
      description: formatMessage({ defaultMessage: "用于配置虚拟滚动。" }),
      type: "[AvailableVirtualListProps](#availablevirtuallistprops)",
    },
    {
      name: "expandedRowRender",
      description: formatMessage({
        defaultMessage: "点击展开额外的行，渲染函数。返回值为 `null` 时，不会渲染展开按钮。",
      }),
      type: "(record: T, index: number) => ReactNode",
    },
    {
      name: "footer",
      description: formatMessage({ defaultMessage: "表格尾部。" }),
      type: "(currentPageData) => ReactNode",
    },
    {
      name: "onExpand",
      description: formatMessage({ defaultMessage: "点击展开的回调。" }),
      type: "(record: T, expanded: boolean) => void",
    },
    {
      name: "onExpandedRowsChange",
      description: formatMessage({
        defaultMessage: "点击展开时触发，参数为展开行数组。",
      }),
      type: "(expandedRows: (string | number)[]) => void",
    },
    {
      name: "onRow",
      description: formatMessage({
        defaultMessage: "设置表格行的各项事件回调。",
      }),
      type: "(record: T, index: number) => [RowCallbackProps](#rowcallbackprops)",
    },
    {
      name: "renderPagination",
      description: formatMessage({ defaultMessage: "自定义分页渲染。" }),
      type: "(paginationNode?: ReactNode) => ReactNode",
    },
    {
      name: "rowClassName",
      description: formatMessage({ defaultMessage: "表格行的类名。" }),
      type: "(record: T, index: number) => string",
    },
    {
      name: "rowKey",
      description: formatMessage({ defaultMessage: "表格行 key 的取值字段。" }),
      type: "React.Key | ((record: T) => React.Key)",
      defaultValue: "key",
    },
    {
      name: "summary",
      description: formatMessage({ defaultMessage: "总结栏。" }),
      type: "(currentData?: T[]) => ReactNode",
    },
  ];
  const rowSelectionData: PropsTableData[] = [
    {
      name: "checkAll",
      description: formatMessage({
        defaultMessage: "多选模式下是否开启全选功能。",
      }),
      type: "boolean",
    },
    {
      name: "checkCrossPage",
      description: formatMessage({
        defaultMessage:
          "多选模式下的复选框是否跨分页，只在非受控模式下生效。配合 preserveSelectedRowKeys: true 使用，可在受控模式下生效。",
      }),
      type: "boolean",
    },
    {
      name: "checkStrictly",
      description: formatMessage({
        defaultMessage: "设置为 `false` 的时候父子选择会自动关联。",
      }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "fixed",
      description: formatMessage({ defaultMessage: "是否固定选择列到左边。" }),
      type: "boolean",
    },
    {
      name: "preserveSelectedRowKeys",
      description: formatMessage({
        defaultMessage: "在数据项被删除时仍然保留选项的 `key`。",
      }),
      type: "boolean",
    },
    {
      name: "columnWidth",
      description: formatMessage({ defaultMessage: "选择框列的宽度。" }),
      type: "number",
    },
    {
      name: "type",
      description: formatMessage({ defaultMessage: "多选或者单选。" }),
      type: "'checkbox' | 'radio'",
    },
    {
      name: "columnTitle",
      description: formatMessage({ defaultMessage: "自定义列表选择的标题。" }),
      type: "string | ReactNode",
    },
    {
      name: "selectedRowKeys",
      description: formatMessage({
        defaultMessage: "Table选中的项，（受控模式，需要跟 `onChange` 配合使用）。",
      }),
      type: "(string | number)[]",
    },
    {
      name: "checkboxProps",
      description: formatMessage({ defaultMessage: "选择框的属性配置。" }),
      type: "(record: T) => { [key: string]: any }",
    },
    {
      name: "onChange",
      description: formatMessage({
        defaultMessage: "单选或多选的选中项发生改变时的回调。",
      }),
      type: "(selectedRowKeys: (string | number)[], selectedRows: T[]) => void",
    },
    {
      name: "onSelect",
      description: formatMessage({
        defaultMessage: "用户手动选择/取消选择的回调。",
      }),
      type: "(selected: boolean, record: T, selectedRows: T[]) => void",
    },
    {
      name: "onSelectAll",
      description: formatMessage({
        defaultMessage: "用户手动选择/取消选择所有行的回调。",
      }),
      type: "(selected: boolean, selectedRows) => void",
    },
    {
      name: "renderCell",
      description: formatMessage({
        defaultMessage: "定制复选框，用法与 `column.render` 相同。",
      }),
      type: "(originNode, checked: boolean, record: T) => ReactNode",
    },
  ];

  const expandPropsData: PropsTableData[] = [
    {
      name: "expandRowByClick",
      description: formatMessage({ defaultMessage: "支持通过点击行来展开。" }),
      type: "boolean",
    },
    {
      name: "strictTreeData",
      description: formatMessage({
        defaultMessage: "树形数据时，只有 `children` 是数组且长度大于 1 才显示展开图标。",
      }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "width",
      description: formatMessage({ defaultMessage: "展开按钮列的宽度。" }),
      type: "number",
    },
    {
      name: "columnTitle",
      description: formatMessage({ defaultMessage: "展开按钮列的表头标题。" }),
      type: "ReactNode",
    },
    {
      name: "icon",
      description: formatMessage({ defaultMessage: "定制展开按钮的图标。" }),
      type: "(props: { expanded: boolean; record: Record<string, any> }) => ReactNode",
    },
    {
      name: "rowExpandable",
      description: formatMessage({
        defaultMessage:
          "是否允许行展开。如果不指定该参数，会以 expandedRowRender 是否有返回值决定。当出现性能问题时，建议使用 rowExpandable。",
      }),
      type: "(record: T) => boolean",
    },
  ];
  const columnPropsData: PropsTableData[] = [
    {
      name: "ellipsis",
      description: formatMessage({
        defaultMessage:
          "单元格内容超出长度后，是否自动省略，显示 `...`。设置这个属性后，table 的 `table-layout` 将自动变成 `fixed`。",
      }),
      type: "boolean",
    },
    {
      name: "filterMultiple",
      description: formatMessage({ defaultMessage: "是否可以筛选多项。" }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "dataIndex",
      description: formatMessage({
        defaultMessage:
          "列数据在数据项中对应的 `key`，用于取值显示，支持 `a[0].b.c[1]` 的嵌套写法，详情看 [lodash.get](https://www.npmjs.com/package/lodash.get)。",
      }),
      type: "string",
    },
    {
      name: "align",
      description: formatMessage({ defaultMessage: "设置列的对齐方式。" }),
      type: "'left' | 'center' | 'right'",
      defaultValue: "left",
    },
    {
      name: "defaultSortOrder",
      description: formatMessage({ defaultMessage: "默认排序方式。" }),
      type: "'ascend' | 'descend'",
    },
    {
      name: "fixed",
      description: formatMessage({
        defaultMessage: "固定头和列到左边或者右边。",
      }),
      type: "'left' | 'right'",
    },
    {
      name: "sortDirections",
      description: formatMessage({ defaultMessage: "支持的排序方式。" }),
      type: "Array<'ascend' | 'descend'>",
      defaultValue: "['ascend','descend']",
    },
    {
      name: "sortOrder",
      description: formatMessage({
        defaultMessage: "排序的受控属性，可以控制列的排序，可设置为 `ascend` `descend`。",
      }),
      type: "'ascend' | 'descend'",
    },
    {
      name: "filterIcon",
      description: formatMessage({ defaultMessage: "自定义筛选图标。" }),
      type: "ReactNode",
    },
    {
      name: "placeholder",
      description: formatMessage({
        defaultMessage: "当单元格内容为空时，显示占位符，优先级低于 `render`。",
      }),
      type: "ReactNode",
    },
    {
      name: "title",
      description: formatMessage({ defaultMessage: "列标题。" }),
      type: "React.ReactNode",
      required: true,
    },
    {
      name: "bodyCellStyle",
      description: formatMessage({ defaultMessage: "表身单元格自定义样式。" }),
      type: "CSSProperties",
    },
    {
      name: "defaultFilters",
      description: formatMessage({ defaultMessage: "默认筛选条件。" }),
      type: "string[]",
    },
    {
      name: "filterDropdownProps",
      description: formatMessage({
        defaultMessage: "配置筛选弹出框的一些属性。",
      }),
      type: "{ triggerProps?: [TriggerProps](trigger#trigger) }",
    },
    {
      name: "filteredValue",
      description: formatMessage({
        defaultMessage: "筛选的受控属性，值为筛选的 value 数组。",
      }),
      type: "string[]",
    },
    {
      name: "filters",
      description: formatMessage({
        defaultMessage: "筛选项，需要配合 `onFilter` 或者 `onChange` 使用。",
      }),
      type: "{text?: ReactNode; value?: any; [key: string]: any;}[]",
      defaultValue: "[]",
    },
    {
      name: "headerCellStyle",
      description: formatMessage({ defaultMessage: "表头单元格自定义样式。" }),
      type: "CSSProperties",
    },
    {
      name: "key",
      description: formatMessage({
        defaultMessage: "React的 key值，如果不指定，默认取 `dataIndex` 的值。",
      }),
      type: "string | number",
    },
    {
      name: "sorter",
      description: formatMessage({
        defaultMessage:
          "排序函数，如果想要服务端排序或者添加更多自定义操作，设置为true，利用`onChange`函数进行自定义排序。",
      }),
      type: "[SorterFn](#sorterfn) | boolean | { compare?: [SorterFn](#sorterfn); multiple?: number }",
    },
    {
      name: "width",
      description: formatMessage({ defaultMessage: "列宽度。" }),
      type: "number | string",
    },
    {
      name: "filterDropdown",
      description: formatMessage({ defaultMessage: "自定义筛选框。" }),
      type: "(props: {filterKeys?: string[]; setFilterKeys?: (filterKeys: string[], callback?: Function) => void; confirm?: Function;}) => ReactNode",
    },
    {
      name: "onCell",
      description: formatMessage({
        defaultMessage: "设置表身单元格的各项事件回调。",
      }),
      type: "(record, index) => [RowCallbackProps](#rowcallbackprops)",
    },
    {
      name: "onFilter",
      description: formatMessage({
        defaultMessage: "筛选函数，配合`filters`。",
      }),
      type: "(value, row) => any",
    },
    {
      name: "onFilterDropdownVisibleChange",
      description: formatMessage({ defaultMessage: "筛选框打开关闭的回调。" }),
      type: "(visible: boolean) => void",
    },
    {
      name: "onHeaderCell",
      description: formatMessage({
        defaultMessage: "设置头部单元格的各项事件回调。",
      }),
      type: "(column, index) => [RowCallbackProps](#rowcallbackprops)",
    },
    {
      name: "render",
      description: formatMessage({
        defaultMessage: "自定义单元格显示的内容。",
      }),
      type: "(col, item: T, index: number) => any",
    },
  ];

  return (
    <Unstyled>
      <Title>{formatMessage({ defaultMessage: "表格 Table" })}</Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "用于数据收集展示、分析整理、操作处理。",
        })}
      </Paragraph>

      <Title heading={2}>{formatMessage({ defaultMessage: "示例" })}</Title>

      <Title heading={3} id="basic">
        {formatMessage({ defaultMessage: "基础用法" })}
      </Title>
      <Paragraph>{formatMessage({ defaultMessage: "基础用法" })}</Paragraph>
      <Canvas of={TableStories.Basic} />

      <Title heading={3} id="row-selection">
        {formatMessage({ defaultMessage: "选择行" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "表格开启选择，可以设置 rowSelection.type 来使用复选框和单选框。",
        })}
      </Paragraph>
      <Canvas of={TableStories.RowSelection} />

      <Title heading={3} id="expanded-row">
        {formatMessage({ defaultMessage: "展开行" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "当内容过长，可以通过expandedRowRender设置展开行。如果返回值是 null，不会渲染展开按钮。",
        })}
      </Paragraph>
      <Canvas of={TableStories.ExpandedRow} />

      <Title heading={3} id="expand-props">
        {formatMessage({ defaultMessage: "展开参数" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "可以通过 expandProps 定制展开列的图标，宽度，标题，是否展开等。",
        })}
      </Paragraph>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "Tip: 正常情况下，是否展开是由 expandedRowRender 返回值决定的，如果过多的 expandedRowRender 计算导致卡顿，建议使用 expandProps.rowExpandable。",
        })}
      </Paragraph>
      <Canvas of={TableStories.ExpandProps} />

      <Title heading={3} id="expanded-row-render">
        {formatMessage({ defaultMessage: "嵌套子表格" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "嵌套子表格的例子，点击展开按钮可以在展开区域展示子表格。",
        })}
      </Paragraph>
      <Canvas of={TableStories.ExpandedRowRender} />

      <Title heading={3} id="tree-table">
        {formatMessage({ defaultMessage: "树形数据展示" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "树形数据展示的例子，data 里有 children 字段, 或者通过 childrenColumnName 设置成自定义字段。",
        })}
      </Paragraph>
      <Canvas of={TableStories.TreeTable} />

      <Title heading={3} id="props">
        {formatMessage({ defaultMessage: "表格属性" })}
      </Title>
      <Canvas of={TableStories.Props} />

      <Title heading={3} id="sorter-filter">
        {formatMessage({ defaultMessage: "排序和筛选" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "配置 Column 的 sorter 可以对表格进行排序，配置 filters 可以对表格进行筛选。",
        })}
      </Paragraph>
      <Canvas of={TableStories.SorterFilter} />

      <Title heading={3} id="custom-filter">
        {formatMessage({ defaultMessage: "自定义筛选菜单" })}
      </Title>
      <Canvas of={TableStories.CustomFilter} />

      <Title heading={3} id="multiple-sorters">
        {formatMessage({ defaultMessage: "多列排序" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "column.sorter 支持传入一个对象，指定该对象的 multiple 属性可以实现多列排序的效果。multiple 为 number 类型，数字越大代表排序优先级越高。",
        })}
      </Paragraph>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "注意：多列排序配合 sortOrder 使用时，为保持状态一致性，所有指定了sorter的列都需要同时指定sortOrder（可为undefined），同时需要注意列之间的互斥关系。",
        })}
      </Paragraph>
      <Canvas of={TableStories.MultipleSorters} />

      <Title heading={3} id="render-pagination">
        {formatMessage({ defaultMessage: "自定义分页" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "通过设置 total，pageSize，通过 onChange 来动态更新表格数据。当分页设置 simple 为 true 时，会应用简单分页样式。通过 renderPagination 可以自定义分页渲染部分。",
        })}
      </Paragraph>
      <Canvas of={TableStories.RenderPagination} />

      <Title heading={3} id="render-cell">
        {formatMessage({ defaultMessage: "自定义单元格内容" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "通过 columns 中的 render 字段，可以自定义单元格的内容。",
        })}
      </Paragraph>
      <Canvas of={TableStories.RenderCell} />

      <Title heading={3} id="fixed-column">
        {formatMessage({ defaultMessage: "固定列" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            '在 column 中指定 fixed: "left" 或 fixed: "right"，可将列固定到左侧或右侧，设置 fixed 的列，也需要设置 width。',
        })}
      </Paragraph>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "注意： 要配合 scroll: '{ x: number '} 使用，columns 中需要有一列不设置宽度自适应，不然会有样式问题。",
        })}
      </Paragraph>
      <Canvas of={TableStories.FixedColumn} />

      <Title heading={3} id="custom-style">
        {formatMessage({ defaultMessage: "自定义样式" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "有多种方式定制行列样式，rowClassName 可以对每一行进行样式定制，Column.className 可以对列进行样式定制。此外，还有 headerCellStyle, bodyCellStyle， 对表头和表格主体的列进行样式定制。",
        })}
      </Paragraph>
      <Canvas of={TableStories.CustomStyle} />

      <Title heading={3} id="column-group">
        {formatMessage({ defaultMessage: "表头分组" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "columns 内可以嵌套 children，用于表头分组。",
        })}
      </Paragraph>
      <Canvas of={TableStories.ColumnGroup} />

      <Title heading={3} id="merge-cell">
        {formatMessage({ defaultMessage: "单元格合并" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "用于单元格合并，表头只能进行列合并。",
        })}
      </Paragraph>
      <Canvas of={TableStories.MergeCell} />

      <Title heading={3} id="resizable-column">
        {formatMessage({ defaultMessage: "可伸缩列" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "配合 react-resizable@3.0.0 可以实现可伸缩列的效果。",
        })}
      </Paragraph>
      <Canvas of={TableStories.ResizableColumn} />

      <Title heading={3} id="header-sticky">
        {formatMessage({ defaultMessage: "表头吸顶" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "配合 react-sticky@6.0.3 可以实现表头吸顶的效果。",
        })}
      </Paragraph>
      <Canvas of={TableStories.HeaderSticky} />

      <Title heading={3} id="custom-column">
        {formatMessage({ defaultMessage: "定制前置操作列" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "可以通过 components 来定制前置操作列，包括新增列、调整列的顺序等。",
        })}
      </Paragraph>
      <Canvas of={TableStories.CustomColumn} />

      <Title heading={3} id="large-data">
        {formatMessage({ defaultMessage: "大数据" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "内置虚拟滚动逻辑，设置 virtualized=true 开启。",
        })}
      </Paragraph>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "注意：开启虚拟滚动之后，不要给每一列都设置宽度，要保证有一列自适应，不然可能出现表头表身对不齐的情况。",
        })}
      </Paragraph>
      <Canvas of={TableStories.LargeData} />

      <Title heading={3} id="summary">
        {formatMessage({ defaultMessage: "总结栏" })}
      </Title>
      <Canvas of={TableStories.Summary} />

      <Title heading={2}>{formatMessage({ defaultMessage: "用法" })}</Title>
      <Source code={`import { Table, type TableProps } from "growingio-design";`} language="tsx" />

      <Title id="table-props" heading={3}>
        TableProps
      </Title>
      <PropsTable data={data} />

      <Title id="row-selection-props" heading={3}>
        RowSelectionProps
      </Title>
      <PropsTable data={rowSelectionData} includeCommonProps={false} />

      <Title id="expand-props" heading={3}>
        ExpandProps
      </Title>
      <PropsTable data={expandPropsData} />

      <Title id="column-props" heading={3}>
        ColumnProps
      </Title>
      <PropsTable data={columnPropsData} />
    </Unstyled>
  );
}

export default injectIntl(DocPage);
