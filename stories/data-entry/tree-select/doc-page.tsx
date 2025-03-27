import PropsTable, { type PropsTableData } from "@/components/props-table";
import { Typography } from "@/src";
import { Canvas, Source, Unstyled } from "@storybook/blocks";
import { injectIntl, IntlShape } from "react-intl";
import * as Stories from "./index.stories";

const { Title, Paragraph } = Typography;

function DocPage({ intl }: { intl: IntlShape }) {
  const { formatMessage } = intl;

  const data: PropsTableData[] = [
    {
      name: "allowClear",
      description: formatMessage({ defaultMessage: "允许清除值。" }),
      type: "boolean",
    },
    {
      name: "animation",
      description: formatMessage({ defaultMessage: "是否为内部标签变化添加动画。" }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "bordered",
      description: formatMessage({ defaultMessage: "是否显示边框。" }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "disabled",
      description: formatMessage({ defaultMessage: "是否为禁用状态。" }),
      type: "boolean",
    },
    {
      name: "dragToSort",
      description: formatMessage({ defaultMessage: "是否可以通过拖拽为 Tag 排序。" }),
      type: "boolean",
    },
    {
      name: "error",
      description: formatMessage({ defaultMessage: "是否是错误状态。" }),
      type: "boolean",
    },
    {
      name: "labelInValue",
      description: formatMessage({
        defaultMessage:
          "设置 value 格式。默认是 `string`，设置为 `true` 时候，value 格式为： `'{ label: string, value: string '}`。",
      }),
      type: "boolean",
    },
    {
      name: "loading",
      description: formatMessage({ defaultMessage: "是否为加载状态。" }),
      type: "boolean",
    },
    {
      name: "multiple",
      description: formatMessage({ defaultMessage: "是否多选。" }),
      type: "boolean",
    },
    {
      name: "popupVisible",
      description: formatMessage({ defaultMessage: "控制下拉框的展开收起。" }),
      type: "boolean",
    },
    {
      name: "treeCheckable",
      description: formatMessage({ defaultMessage: "是否展示复选框。" }),
      type: "boolean",
    },
    {
      name: "treeCheckStrictly",
      description: formatMessage({
        defaultMessage:
          "树选项是否严格选中。设置为`true`时候，表示严格选中，不与父节点关联；设置为`false`时候，表示非严格选中，与父节点关联变化。",
      }),
      type: "boolean",
    },
    {
      name: "unmountOnExit",
      description: formatMessage({ defaultMessage: "是否在隐藏之后销毁 DOM 结构。" }),
      type: "boolean",
    },
    {
      name: "inputValue",
      description: formatMessage({ defaultMessage: "输入框搜索文本的受控值。" }),
      type: "string",
    },
    {
      name: "placeholder",
      description: formatMessage({ defaultMessage: "选择框默认文字。" }),
      type: "string",
    },
    {
      name: "autoWidth",
      description: formatMessage({
        defaultMessage: "设置宽度自适应。minWidth 默认为 0，maxWidth 默认为 100%。",
      }),
      type: "| boolean| { minWidth?: CSSProperties['minWidth']; maxWidth?: CSSProperties['maxWidth'] }",
    },
    {
      name: "fieldNames",
      description: formatMessage({
        defaultMessage: "指定 key，title，isLeaf，disabled，children 对应的字段。",
      }),
      type: "TreeProps['fieldNames']",
      defaultValue: "DefaultFieldNames",
    },
    {
      name: "maxTagCount",
      description: formatMessage({
        defaultMessage:
          "最多显示多少个 `tag`，仅在多选或标签模式有效。设置 `responsive` 响应式显示标签数不建议在选项较多时使用，可能存在性能问题。",
      }),
      type: "| number| 'responsive'| {count: number | 'responsive';render?: (invisibleTagCount: number) => ReactNode;}",
    },
    {
      name: "size",
      description: formatMessage({
        defaultMessage: "分别不同尺寸的选择器。对应 `24px`, `28px`, `32px`, `36px`。",
      }),
      type: "'mini' | 'small' | 'default' | 'large'",
    },
    {
      name: "status",
      description: formatMessage({ defaultMessage: "状态。" }),
      type: "'error' | 'warning'",
    },
    {
      name: "treeCheckedStrategy",
      description: formatMessage({ defaultMessage: "定制回显方式。" }),
      type: "TreeProps['checkedStrategy']",
      defaultValue: "all",
    },
    {
      name: "addBefore",
      description: formatMessage({ defaultMessage: "选择框前添加元素。" }),
      type: "ReactNode",
    },
    {
      name: "clearIcon",
      description: formatMessage({ defaultMessage: "`allowClear` 时配置清除按钮的图标。" }),
      type: "ReactNode",
    },
    {
      name: "notFoundContent",
      description: formatMessage({ defaultMessage: "没有数据时显示的内容。" }),
      type: "ReactNode",
    },
    {
      name: "prefix",
      description: formatMessage({ defaultMessage: "前缀。" }),
      type: "ReactNode",
    },
    {
      name: "suffixIcon",
      description: formatMessage({ defaultMessage: "自定义选择框后缀图标。" }),
      type: "ReactNode",
    },
    {
      name: "arrowIcon",
      description: formatMessage({
        defaultMessage: "自定义箭头图标，设置为 `null` 不显示箭头图标。",
      }),
      type: "ReactNode | null",
    },
    {
      name: "defaultValue",
      description: formatMessage({ defaultMessage: "选择框的默认值。" }),
      type: "string| string[]| { label: ReactNode; value: string; disabled?: boolean }| { label: ReactNode; value: string; disabled?: boolean }[]",
    },
    {
      name: "dropdownMenuStyle",
      description: formatMessage({ defaultMessage: "设置下拉框样式。" }),
      type: "CSSProperties",
    },
    {
      name: "removeIcon",
      description: formatMessage({
        defaultMessage: "多选时配置选中项的删除图标。当传入`null`，不显示删除图标。",
      }),
      type: "ReactNode | null",
    },
    {
      name: "showSearch",
      description: formatMessage({
        defaultMessage:
          "使单选模式可搜索，传入 `'{ retainInputValue: true '}` 在搜索框聚焦时保留现有内容传入 `'{ retainInputValueWhileSelect: true '}` 在多选选择时保留输入框内容。",
      }),
      type: "boolean | { retainInputValue?: boolean; retainInputValueWhileSelect?: boolean }",
    },
    {
      name: "treeData",
      description: formatMessage({ defaultMessage: "数据。" }),
      type: "TreeSelectDataType[]",
    },
    {
      name: "treeProps",
      description: formatMessage({ defaultMessage: "可以接受所有 Tree 组件的参数。" }),
      type: "Partial<TreeProps>",
    },
    {
      name: "triggerProps",
      description: formatMessage({ defaultMessage: "可以接受所有 Trigger 组件的参数。" }),
      type: "Partial<TriggerProps>",
    },
    {
      name: "value",
      description: formatMessage({ defaultMessage: "选中值。" }),
      type: "| string| string[]| { label: ReactNode; value: string; disabled?: boolean }| { label: ReactNode; value: string; disabled?: boolean }[]",
    },
    {
      name: "dropdownRender",
      description: formatMessage({ defaultMessage: "自定义下拉框展示。" }),
      type: "(dom: ReactNode) => ReactNode",
    },
    {
      name: "filterTreeNode",
      description: formatMessage({
        defaultMessage:
          "根据输入的值筛选数据。接收 `inputText` 和 `treeNode` 两个参数，当 `option` 符合筛选条件时，返回 `true`，反之返回 `false`。treeNode 是树节点。",
      }),
      type: "(inputText, treeNode: any) => boolean | void",
    },
    {
      name: "getPopupContainer",
      description: formatMessage({ defaultMessage: "弹出框挂载的父节点。" }),
      type: "(node: HTMLElement) => Element",
    },
    {
      name: "loadMore",
      description: formatMessage({ defaultMessage: "动态加载数据。" }),
      type: "(treeNode: NodeProps, dataRef) => void",
    },
    {
      name: "onChange",
      description: formatMessage({ defaultMessage: "选中值改变的回调。" }),
      type: "(value: any,extra: {trigger?: NodeProps;checked?: boolean;selected?: boolean;}) => void",
    },
    {
      name: "onClear",
      description: formatMessage({
        defaultMessage: "点击清除时触发，参数是当前下拉框的展开状态。",
      }),
      type: "(visible: boolean) => void",
    },
    {
      name: "onClick",
      description: formatMessage({ defaultMessage: "鼠标点击下拉框时的回调。" }),
      type: "(e) => void",
    },
    {
      name: "onInputValueChange",
      description: formatMessage({ defaultMessage: "输入框搜索文本改变的回调。" }),
      type: "(value: string, reason: InputValueChangeReason) => void",
    },
    {
      name: "onKeyDown",
      description: formatMessage({ defaultMessage: "键盘输入时的回调。" }),
      type: "(e) => void",
    },
    {
      name: "onSearch",
      description: formatMessage({
        defaultMessage: "自定义搜索方法。未定义的时候将会在已经在数据中进行搜索。",
      }),
      type: "(inputValue: string) => void",
    },
    {
      name: "onVisibleChange",
      description: formatMessage({ defaultMessage: "下拉框收起展开时触发。" }),
      type: "(visible: boolean) => void",
    },
    {
      name: "renderFormat",
      description: formatMessage({
        defaultMessage:
          "定制回显内容。返回值将会显示在下拉框内。若 `value` 对应的 `Option` 不存在，则第一个参数是 null。",
      }),
      type: "(option: NodeProps | null, value: string | LabelValue) => ReactNode",
    },
    {
      name: "renderTag",
      description: formatMessage({
        defaultMessage:
          "自定义标签渲染，`props` 为当前标签属性，`index` 为当前标签的顺序，`values` 为所有标签的值。",
      }),
      type: "(props: {value: any;label: ReactNode;closable: boolean;onClose: (event) => void;},index: number,values: ObjectValueType[]) => ReactNode",
    },
    {
      name: "triggerElement",
      description: formatMessage({ defaultMessage: "自定义上方显示元素。" }),
      type: "ReactNode | ((params: { value: any }) => ReactNode)",
    },
  ];

  return (
    <Unstyled>
      <Title>{formatMessage({ defaultMessage: "树选择 TreeSelect" })}</Title>
      <Paragraph>{formatMessage({ defaultMessage: "可以对树形结构数据进行选择。" })}</Paragraph>

      <Title heading={2}>{formatMessage({ defaultMessage: "示例" })}</Title>

      <Title heading={3} id="default">
        {formatMessage({ defaultMessage: "基础用法" })}
      </Title>
      <Canvas of={Stories.Default} />

      <Title heading={3} id="disable">
        {formatMessage({ defaultMessage: "禁用状态" })}
      </Title>
      <Canvas of={Stories.Disabled} />

      <Title heading={3} id="multiple">
        {formatMessage({ defaultMessage: "多选" })}
      </Title>
      <Canvas of={Stories.Multiple} />

      <Title heading={3} id="tree-checkable">
        {formatMessage({ defaultMessage: "复选框多选" })}
      </Title>
      <Canvas of={Stories.TreeCheckable} />

      <Title heading={3} id="label-ini-value">
        {formatMessage({ defaultMessage: "值格式" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "labelInValue 为 true 时，value 格式为： '{ label: string, value: string '}。",
        })}
      </Paragraph>
      <Canvas of={Stories.LabelInValue} />

      <Title heading={3} id="search">
        {formatMessage({ defaultMessage: "搜索" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "设置 showSearch=true 启用搜索功能。动态加载时候只能在已加载数据中进行搜索。默认的关键字搜索是从 value 字段匹配。也可以传入 filterTreeNode 自定义过滤方式。",
        })}
      </Paragraph>
      <Canvas of={Stories.Search} />

      <Title heading={3} id="tree-check-strategy">
        {formatMessage({ defaultMessage: "回填方式" })}
      </Title>
      <Paragraph>
        {formatMessage({ defaultMessage: "可以通过treeCheckStrategy属性定制回填方式。" })}
      </Paragraph>
      <Canvas of={Stories.TreeCheckStrategy} />

      <Title heading={3} id="customized-dropdown">
        {formatMessage({ defaultMessage: "自定义下拉框" })}
      </Title>
      <Canvas of={Stories.CustomizedDropdown} />

      <Title heading={3} id="drag-to-sort">
        {formatMessage({ defaultMessage: "拖拽排序" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "多选时，指定 dragToSort 属性以允许对已输入的值进行拖拽排序。",
        })}
      </Paragraph>
      <Canvas of={Stories.DragToSort} />

      <Title heading={3} id="sizes">
        {formatMessage({ defaultMessage: "尺寸" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "可以使用四种尺寸：mini，small, default 和 large。",
        })}
      </Paragraph>
      <Canvas of={Stories.Sizes} />

      <Title heading={2}>{formatMessage({ defaultMessage: "用法" })}</Title>
      <Source
        code={`import { TreeSelect, type TreeSelectProps } from "@gio-design/react";`}
        language="typescript"
      />

      <Title id="props" heading={3}>
        TreeSelectProps
      </Title>
      <PropsTable data={data} />

      <Title id="label-value" heading={3}>
        LabelValue
      </Title>
      <Source
        code={`export type LabelValue = {
  label: ReactNode;
  value: string;
  disabled?: boolean;
};`}
        language="typescript"
      />

      <Title id="field-names-type" heading={3}>
        FieldNamesType
      </Title>
      <Source
        code={`export type FieldNamesType = {
  key?: string;
  title?: string;
  disabled?: string;
  children?: string;
  isLeaf?: string;
  disableCheckbox?: string;
  checkable?: string;
};`}
        language="typescript"
      />

      <Title id="tree-data-type" heading={3}>
        TreeDataType
      </Title>
      <Source
        code={`export type TreeDataType = NodeProps & {
  key?: string;
  _index?: number;
  children?: TreeDataType[];
  [key: string]: any;
};`}
        language="typescript"
      />

      <Title id="tree-select-data-type" heading={3}>
        TreeSelectDataType
      </Title>
      <Source
        code={`export type TreeSelectDataType = TreeDataType & {
  value?: string;
};`}
        language="typescript"
      />

      <Title id="input-value-change-reason" heading={3}>
        InputValueChangeReason
      </Title>
      <Source
        code={`export type InputValueChangeReason =
  | "manual"
  | "optionChecked"
  | "optionListHide";`}
        language="typescript"
      />

      <Title id="object-value-type" heading={3}>
        ObjectValueType
      </Title>
      <Source
        code={`export type ObjectValueType = {
  value?: any;
  label?: ReactNode;
  closable?: boolean;
};`}
        language="typescript"
      />
    </Unstyled>
  );
}

export default injectIntl(DocPage);
