import { injectIntl, IntlShape } from "react-intl";
import { Canvas, Unstyled, Source } from "@storybook/blocks";
import PropsTable, { type PropsTableData } from "../../../components/props-table";
import { Typography } from "../../../src";
import * as TreeStories from "./index.stories";

const { Title, Paragraph } = Typography;

function DocPage({ intl }: { intl: IntlShape }) {
  const { formatMessage } = intl;

  const data: PropsTableData[] = [
    {
      name: "autoExpandParent",
      description: formatMessage({ defaultMessage: "是否自动展开父节点。" }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "blockNode",
      description: formatMessage({ defaultMessage: "是否节点占据一行。" }),
      type: "boolean",
    },
    {
      name: "checkable",
      description: formatMessage({ defaultMessage: "是否在节点前添加选框。" }),
      type: "boolean",
    },
    {
      name: "checkStrictly",
      description: formatMessage({ defaultMessage: "是否取消父子节点关联。" }),
      type: "boolean",
    },
    {
      name: "draggable",
      description: formatMessage({ defaultMessage: "是否可拖拽。" }),
      type: "boolean",
    },
    {
      name: "multiple",
      description: formatMessage({ defaultMessage: "是否支持多选。" }),
      type: "boolean",
    },
    {
      name: "selectable",
      description: formatMessage({ defaultMessage: "是否可以选择。" }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "showLine",
      description: formatMessage({ defaultMessage: "是否展示连接线。" }),
      type: "boolean",
    },
    {
      name: "size",
      description: formatMessage({ defaultMessage: "不同尺寸。" }),
      type: "'mini' | 'small' | 'default' | 'large'",
    },
    {
      name: "actionOnClick",
      description: formatMessage({
        defaultMessage:
          "点击节点时对应的操作，可以是选中，复选选中，展开。见 [ActionOnClick](#action-on-click)。",
      }),
      type: "ActionOnClick | ActionOnClick[]",
    },
    {
      name: "allowDrop",
      description: formatMessage({
        defaultMessage: "是否允许拖拽时放置在该节点。[AllowDrop](#allow-drop)",
      }),
      type: "AllowDrop",
      defaultValue: "() => true",
    },
    {
      name: "checkedKeys",
      description: formatMessage({
        defaultMessage: "选中复选框的树节点。",
      }),
      type: "string[]",
    },
    {
      name: "checkedStrategy",
      description: formatMessage({
        defaultMessage:
          "定制回填方式：all - 返回所有选中的节点，parent - 父子节点都选中时只返回父节点，child - 只返回子节点。",
      }),
      type: "'all' | 'parent' | 'child'",
      defaultValue: "'all'",
    },
    {
      name: "defaultCheckedKeys",
      description: formatMessage({
        defaultMessage: "默认选中复选框的树节点。",
      }),
      type: "string[]",
    },
    {
      name: "defaultExpandedKeys",
      description: formatMessage({ defaultMessage: "默认展开的节点。" }),
      type: "string[]",
    },
    {
      name: "defaultSelectedKeys",
      description: formatMessage({ defaultMessage: "默认选中的树节点。" }),
      type: "string[]",
    },
    {
      name: "expandedKeys",
      description: formatMessage({ defaultMessage: "展开的节点。" }),
      type: "string[]",
    },
    {
      name: "fieldNames",
      description: formatMessage({
        defaultMessage:
          "指定 key，title，isLeaf，disabled，children 对应的字段。[FieldNamesType](#field-names-type)",
      }),
      type: "FieldNamesType",
    },
    {
      name: "halfCheckedKeys",
      description: formatMessage({
        defaultMessage: "半选状态的节点.仅在 checkable 且 checkStrictly 时生效。",
      }),
      type: "string[]",
    },
    {
      name: "loadMore",
      description: formatMessage({
        defaultMessage: "异步加载数据的回调，返回一个 `Promise`。[NodeInstance](#node-instance)",
      }),
      type: "(node: NodeInstance) => Promise<void>",
    },
    {
      name: "onDragEnd",
      description: formatMessage({
        defaultMessage: "节点结束拖拽的回调。[NodeInstance](#node-instance)",
      }),
      type: "(e: DragEvent<HTMLSpanElement>, node: NodeInstance) => void",
    },
    {
      name: "onDragLeave",
      description: formatMessage({
        defaultMessage: "节点离开可释放目标上时的回调。[NodeInstance](#node-instance)",
      }),
      type: "(e: DragEvent<HTMLSpanElement>, node: NodeInstance) => void",
    },
    {
      name: "onDragOver",
      description: formatMessage({
        defaultMessage: "节点被拖拽至可释放目标上时的回调。[NodeInstance](#node-instance)",
      }),
      type: "(e: DragEvent<HTMLSpanElement>, node: NodeInstance) => void",
    },
    {
      name: "onDragStart",
      description: formatMessage({
        defaultMessage: "节点开始拖拽的回调。[NodeInstance](#node-instance)",
      }),
      type: "(e: DragEvent<HTMLSpanElement>, node: NodeInstance) => void",
    },
    {
      name: "onDrop",
      description: formatMessage({
        defaultMessage: "节点在可释放目标上释放时的回调。[NodeInstance](#node-instance)",
      }),
      type: "(info: {e: DragEvent<HTMLSpanElement>; dragNode: NodeInstance | null; dropNode: NodeInstance | null; dropPosition: number;}) => void",
    },
    {
      name: "selectedKeys",
      description: formatMessage({ defaultMessage: "选中的树节点。（受控）" }),
      type: "string[]",
    },
    {
      name: "treeData",
      description: formatMessage({
        defaultMessage: "可以通过传入`treeData`,生成对应的树结构。[TreeDataType](#tree-data-type)",
      }),
      type: "TreeDataType[]",
    },
    {
      name: "virtualListProps",
      description: formatMessage({
        defaultMessage:
          "传递虚拟列表属性，传入此参数以开启虚拟滚动。[AvailableVirtualListProps](#available-virtual-list-props)",
      }),
      type: "AvailableVirtualListProps",
    },
    {
      name: "icons",
      description: formatMessage({ defaultMessage: "定制节点图标。" }),
      type: "| ((nodeProps: [NodeProps](tree#treenode)) => {dragIcon?: ReactNode; switcherIcon?: ReactNode; loadingIcon?: ReactNode;}) | {dragIcon?: ReactNode; switcherIcon?: ReactNode; loadingIcon?: ReactNode;}",
      defaultValue: "FieldNamesType",
    },
    {
      name: "onCheck",
      description: formatMessage({
        defaultMessage: "点击树节点复选框的回调。[NodeInstance](#node-instance)",
      }),
      type: "(checkedKeys: string[], extra: {node: NodeInstance; checkedNodes: NodeInstance[]; checked: boolean; halfCheckedKeys: string[]; halfCheckedNodes: NodeInstance[]; e: Event;}) => void",
    },
    {
      name: "onExpand",
      description: formatMessage({
        defaultMessage: "点击展开/关闭的回调。[NodeInstance](#node-instance)",
      }),
      type: "(expandedKeys: string[], extra?: { expanded: boolean; node: NodeInstance; expandedNodes: NodeInstance[] }) => void",
    },
    {
      name: "onSelect",
      description: formatMessage({
        defaultMessage: "点击树节点的回调。[NodeInstance](#node-instance)",
      }),
      type: "(selectedKeys: string[], extra: {selected: boolean; selectedNodes: NodeInstance[]; node: NodeInstance; e: Event;}) => void",
    },
    {
      name: "renderExtra",
      description: formatMessage({
        defaultMessage: "渲染额外节点。[NodeProps](#tree-node-props)",
      }),
      type: "(props: NodeProps) => ReactNode",
    },
    {
      name: "renderTitle",
      description: formatMessage({
        defaultMessage: "自定义 title 的渲染。[NodeProps](#tree-node-props)",
      }),
      type: "(props: NodeProps) => ReactNode",
    },
  ];

  const treeNodeData: PropsTableData[] = [
    {
      name: "checkable",
      description: formatMessage({ defaultMessage: "是否显示多选框。" }),
      type: "boolean",
    },
    {
      name: "disableCheckbox",
      description: formatMessage({ defaultMessage: "是否禁用复选框。" }),
      type: "boolean",
    },
    {
      name: "disabled",
      description: formatMessage({ defaultMessage: "是否禁用节点。" }),
      type: "boolean",
    },
    {
      name: "draggable",
      description: formatMessage({ defaultMessage: "当前节点是否可拖拽。" }),
      type: "boolean",
    },
    {
      name: "isLeaf",
      description: formatMessage({
        defaultMessage: "是否是叶子节点。动态加载时有效。",
      }),
      type: "boolean",
    },
    {
      name: "selectable",
      description: formatMessage({ defaultMessage: "是否允许选中。" }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "icons",
      description: formatMessage({
        defaultMessage:
          "定制节点图标，优先级高于 Tree。同时设置 [Tree](#tree-props) 上的 icons 属性时候，将会进行合并。",
      }),
      type: "TreeProps['icons']",
    },
    {
      name: "icon",
      description: formatMessage({
        defaultMessage: "该节点个性化显示的图标。",
      }),
      type: "ReactNode",
    },
    {
      name: "title",
      description: formatMessage({ defaultMessage: "该节点显示的标题。" }),
      type: "string | ReactNode",
    },
  ];

  return (
    <Unstyled>
      <Title>{formatMessage({ defaultMessage: "树 Tree" })}</Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "对于文件夹、分类目录、组织架构等层级较多的内容，树可以清楚显示他们的层级关系，并具有展开、收起、选择等交互功能。",
        })}
      </Paragraph>

      <Title heading={2}>{formatMessage({ defaultMessage: "示例" })}</Title>

      <Title heading={3} id="basic">
        {formatMessage({ defaultMessage: "基础用法" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "为每个 TreeNode 节点赋予全局唯一的 key（必填项），title 为该节点显示的内容。",
        })}
      </Paragraph>
      <Canvas of={TreeStories.Basic} />

      <Title heading={3} id="tree-data">
        {formatMessage({ defaultMessage: "使用 treeData" })}
      </Title>
      <Canvas of={TreeStories.Basic} />

      <Title heading={3} id="block-node">
        {formatMessage({ defaultMessage: "节点占据一行" })}
      </Title>
      <Canvas of={TreeStories.BlockNode} />

      <Title heading={3} id="multiple">
        {formatMessage({ defaultMessage: "多选" })}
      </Title>
      <Canvas of={TreeStories.Multiple} />

      <Title heading={3} id="checkbox">
        {formatMessage({ defaultMessage: "带复选框的树" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "为 Tree 添加 checkable 属性即可使树具有复选框功能，可以用 defaultCheckedKeys 指定复选框默认选中的节点。如果不想让节点文本可选择，将 selectable 设置成 false。",
        })}
      </Paragraph>
      <Canvas of={TreeStories.TreeWithCheckbox} />

      <Title heading={3} id="load-more">
        {formatMessage({ defaultMessage: "动态加载" })}
      </Title>
      <Canvas of={TreeStories.LoadMore} />

      <Title heading={3} id="draggable">
        {formatMessage({ defaultMessage: "拖拽" })}
      </Title>
      <Canvas of={TreeStories.Draggable} />

      <Title heading={3} id="check-strategy">
        {formatMessage({ defaultMessage: "设置回填方式" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "为 Tree 添加 checkedStrategy 可以设置选中时的回填方式。",
        })}
      </Paragraph>
      <Canvas of={TreeStories.CheckStrategy} />

      <Title heading={3} id="show-line">
        {formatMessage({ defaultMessage: "显示连接线" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "为 Tree 添加 showLine 属性即可使树具有连接线。",
        })}
      </Paragraph>
      <Canvas of={TreeStories.ShowLine} />

      <Title heading={3} id="sizes">
        {formatMessage({ defaultMessage: "不同尺寸" })}
      </Title>
      <Canvas of={TreeStories.Sizes} />

      <Title heading={3} id="tree-node-icon">
        {formatMessage({ defaultMessage: "定制节点图标" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "只需为 TreeNode 指定 icon 属性的值即可为任意节点指定任意图标。",
        })}
      </Paragraph>
      <Canvas of={TreeStories.TreeNodeIcon} />

      <Title heading={3} id="render-extra">
        {formatMessage({ defaultMessage: "定制额外节点" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "为 Tree 设置 renderExtra 可以自定义树节点的展示。",
        })}
      </Paragraph>
      <Canvas of={TreeStories.RenderExtra} />

      <Title heading={3} id="icons">
        {formatMessage({ defaultMessage: "定制组件图标" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "通过 icons 属性即可设置组件 loadingIcon，dragIcon，switcherIcon。",
        })}
      </Paragraph>
      <Canvas of={TreeStories.Icons} />

      <Title heading={3} id="virtual-list">
        {formatMessage({ defaultMessage: "虚拟列表" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "通过指定 virtualListProps 来开启虚拟列表，在大量数据时获得高性能表现。",
        })}
      </Paragraph>
      <Canvas of={TreeStories.VirtualList} />

      <Title heading={3} id="search">
        {formatMessage({ defaultMessage: "搜索树" })}
      </Title>
      <Canvas of={TreeStories.Search} />

      <Title heading={3} id="field-name">
        {formatMessage({ defaultMessage: "自定义 TreeData 的字段名称" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "通过 fieldNames 字段可以自定义 TreeData 的字段名。",
        })}
      </Paragraph>
      <Canvas of={TreeStories.FieldNames} />

      <Title heading={2}>{formatMessage({ defaultMessage: "用法" })}</Title>
      <Source
        code={`import { Tree, type TreeProps } from "growingio-design";`}
        language="typescript"
      />

      <Title id="tree-props" heading={3}>
        TreeProps
      </Title>
      <PropsTable data={data} />

      <Title id="tree-node-props" heading={3}>
        Tree.Node Props
      </Title>
      <PropsTable data={treeNodeData} />

      <Title id="action-on-click" heading={3}>
        ActionOnClick
      </Title>
      <Source
        code={`export type ActionOnClick = "select" | "check" | "expand";`}
        language="typescript"
      />

      <Title id="allow-drop" heading={3}>
        AllowDrop
      </Title>
      <Source code={`export type AllowDrop = (options) => boolean;`} language="typescript" />
      <PropsTable
        data={[
          {
            name: "dropNode",
            description: "释放的节点，见 [NodeInstance](#node-instance)。",
            type: "NodeInstance",
          },
          {
            name: "dragNode",
            description: "拖拽的节点，见 [NodeInstance](#node-instance)。",
            type: "NodeInstance",
          },
          {
            name: "dropPosition",
            description: "释放节点的位置。",
            type: "number",
          },
        ]}
        includeCommonProps={false}
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

      <Title id="available-virtual-list-props" heading={3}>
        AvailableVirtualListProps
      </Title>
      <Source
        code={`export type AvailableVirtualListProps = Pick<
  VirtualListProps<any>,
  "height" | "itemHeight" | "threshold" | "isStaticItemHeight" | "scrollOptions"
>;`}
        language="typescript"
      />

      <Title id="node-instance" heading={3}>
        NodeInstance
      </Title>
      <Source
        code={`export type NodeInstance = ReactElement<PropsWithChildren<NodeProps>, typeof TreeNode>;`}
        language="typescript"
      />

      <Title id="virtual-list-props" heading={3}>
        VirtualListProps
      </Title>
      <PropsTable
        data={[
          {
            name: "height",
            description: formatMessage({ defaultMessage: "可视区高度。" }),
            type: "number | string",
            defaultValue: "200",
          },
          {
            name: "threshold",
            description: formatMessage({
              defaultMessage: "自动开启虚拟滚动的元素数量阈值，传入 `null` 以禁用虚拟滚动。",
            }),
            type: "number | null",
            defaultValue: "100",
          },
          {
            name: "isStaticItemHeight",
            description: formatMessage({
              defaultMessage: "是否为相同高度的静态元素。",
            }),
            type: "boolean",
            defaultValue: "true",
          },
        ]}
        includeCommonProps={false}
      />
    </Unstyled>
  );
}

const IntlDocPage = injectIntl(DocPage);
export default IntlDocPage;
