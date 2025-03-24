import { injectIntl, IntlShape } from "react-intl";
import { Canvas, Unstyled, Source } from "@storybook/blocks";
import PropsTable, { type PropsTableData } from "@/components/props-table";
import { Typography } from "@/src";
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
      description: formatMessage({
        defaultMessage: "是否为内部标签变化添加动画。",
      }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "bordered",
      description: formatMessage({ defaultMessage: "是否需要边框。" }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "changeOnSelect",
      description: formatMessage({
        defaultMessage:
          "每当选择的时候，值都会发生改变。多选时如果设置为`true`，会取消父子关系的关联。(默认只有在选择完成的时候，值才会更新)",
      }),
      type: "boolean",
    },
    {
      name: "defaultActiveFirstOption",
      description: formatMessage({
        defaultMessage: "是否默认高亮搜索结果第一个选项。",
      }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "defaultPopupVisible",
      description: formatMessage({
        defaultMessage: "默认下拉框的展开收起状态。",
      }),
      type: "boolean",
    },
    {
      name: "disabled",
      description: formatMessage({ defaultMessage: "是否为禁用状态。" }),
      type: "boolean",
    },
    {
      name: "dragToSort",
      description: formatMessage({
        defaultMessage: "是否可以通过拖拽为 Tag 排序。",
      }),
      type: "boolean",
    },
    {
      name: "error",
      description: formatMessage({ defaultMessage: "是否是错误状态。" }),
      type: "boolean",
    },
    {
      name: "loading",
      description: formatMessage({ defaultMessage: "是否为加载状态。" }),
      type: "boolean",
    },
    {
      name: "popupVisible",
      description: formatMessage({ defaultMessage: "控制下拉框的展开收起。" }),
      type: "boolean",
    },
    {
      name: "showEmptyChildren",
      description: formatMessage({
        defaultMessage: "是否在非动态加载时，选中项children为[]的时候渲染下一级节点。",
      }),
      type: "boolean",
    },
    {
      name: "unmountOnExit",
      description: formatMessage({
        defaultMessage:
          "是否在隐藏之后销毁DOM结构，默认为 `true`。如果是动态加载时，默认为`false`。",
      }),
      type: "boolean",
    },
    {
      name: "inputValue",
      description: formatMessage({ defaultMessage: "输入框的值。" }),
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
      type: "boolean | { minWidth?: CSSProperties['minWidth']; maxWidth?: CSSProperties['maxWidth'] }",
    },
    {
      name: "checkedStrategy",
      description: formatMessage({
        defaultMessage:
          "定制回填方式 <br/> parent: 子节点都被选中时候返回父节点 <br/> child: 返回子节点。",
      }),
      type: "'parent' | 'child'",
      defaultValue: "'child'",
    },
    {
      name: "expandTrigger",
      description: formatMessage({ defaultMessage: "展开下一级方式。" }),
      type: "'click' | 'hover'",
      defaultValue: "'click'",
    },
    {
      name: "mode",
      description: formatMessage({ defaultMessage: "是否开启多选。" }),
      type: "'multiple'",
    },
    {
      name: "showSearch",
      description: formatMessage({
        defaultMessage:
          "使单选模式可搜索，传入 `'{ retainInputValue: true '}` 在搜索框聚焦时保留现有内容传入 `'{ retainInputValueWhileSelect: true '}` 在多选选择时保留输入框内容。传入 `'{ panelMode: 'select' '}` 以搜索面板形式展示可选项，`renderOption` 自定义渲染搜索项。",
      }),
      type: "boolean | { panelMode?: 'cascader' | 'select'; renderOption?: (inputValue: string, option: NodeProps<T>, options: [extraOptions](#extraoptions)) => ReactNode; retainInputValue?: boolean; retainInputValueWhileSelect?: boolean; }",
    },
    {
      name: "size",
      description: formatMessage({ defaultMessage: "分别不同尺寸的选择器。" }),
      type: "'mini' | 'small' | 'default' | 'large'",
    },
    {
      name: "virtualListProps",
      description: formatMessage({
        defaultMessage:
          "传递虚拟滚动属性。开启虚拟滚动后，每列级联菜单的会存在默认宽度，可通过 `dropdownMenuColumnStyle` 进行样式调整。",
      }),
      type: "Pick<VirtualListProps<any>, 'threshold' | 'isStaticItemHeight'>",
    },
    {
      name: "addBefore",
      description: formatMessage({ defaultMessage: "选择框前添加元素。" }),
      type: "ReactNode",
    },
    {
      name: "clearIcon",
      description: formatMessage({
        defaultMessage: "`allowClear` 时配置清除按钮的图标。",
      }),
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
      name: "className",
      description: formatMessage({ defaultMessage: "节点类名。" }),
      type: "string | string[]",
    },
    {
      name: "defaultValue",
      description: formatMessage({ defaultMessage: "选择框的默认值。" }),
      type: "(string | string[])[]",
    },
    {
      name: "dropdownMenuClassName",
      description: formatMessage({ defaultMessage: "自定义下拉列表类名。" }),
      type: "string | string[]",
    },
    {
      name: "dropdownMenuColumnStyle",
      description: formatMessage({ defaultMessage: "菜单列样式。" }),
      type: "CSSProperties",
    },
    {
      name: "fieldNames",
      description: formatMessage({
        defaultMessage: "指定label，value，isLeaf，disabled，children 对应的字段。",
      }),
      type: "[FieldNamesType](#fieldnamestype)",
      defaultValue: "`DefaultFieldNames`",
    },
    {
      name: "filterOption",
      description: formatMessage({
        defaultMessage: "默认搜索从 `label` 属性中进行关键字搜索。通过该方法可以自定义搜索逻辑。",
      }),
      type: "(inputValue: string, option: NodeProps<T>) => boolean",
    },
    {
      name: "icons",
      description: formatMessage({ defaultMessage: "图标配置。" }),
      type: "{ loading?: ReactNode; checked?: ReactNode; next?: ReactNode; }",
    },
    {
      name: "loadMore",
      description: formatMessage({
        defaultMessage: "动态加载数据。pathValue: 当前选中项的路径 value； level: 选中项层级。",
      }),
      type: "(pathValue: string[], level: number) => Promise<T[]>",
    },
    {
      name: "options",
      description: formatMessage({ defaultMessage: "级联数据。" }),
      type: "T[]",
      defaultValue: "[]",
    },
    {
      name: "removeIcon",
      description: formatMessage({
        defaultMessage: "多选时配置选中项的删除图标。当传入`null`，不显示删除图标。",
      }),
      type: "ReactNode | null",
    },
    {
      name: "renderFooter",
      description: formatMessage({
        defaultMessage:
          "定义每一层级的 `footer`。参数：level: 当前层级, activeOption: 当前点击的节点。返回 `null` 不展示。",
      }),
      type: "(level: number, activeOption: NodeProps<T> | null) => ReactNode",
    },
    {
      name: "renderOption",
      description: formatMessage({ defaultMessage: "自定义展示 `option`。" }),
      type: "(option: NodeProps<T>, level: number) => ReactNode",
    },
    {
      name: "style",
      description: formatMessage({ defaultMessage: "节点样式。" }),
      type: "CSSProperties",
    },
    {
      name: "triggerProps",
      description: formatMessage({
        defaultMessage: "可以接受所有 Trigger 组件的 Props。",
      }),
      type: "Partial<[TriggerProps](trigger#trigger)>",
    },
    {
      name: "value",
      description: formatMessage({ defaultMessage: "选中值。" }),
      type: "(string | string[])[]",
    },
    {
      name: "dropdownColumnRender",
      description: formatMessage({
        defaultMessage: "自定义下拉菜单每一列的展示。",
      }),
      type: "(menu: ReactNode, level: number) => ReactNode",
    },
    {
      name: "dropdownRender",
      description: formatMessage({ defaultMessage: "自定义下拉菜单的展示。" }),
      type: "(menu: ReactNode) => ReactNode",
    },
    {
      name: "getPopupContainer",
      description: formatMessage({ defaultMessage: "弹出框挂在的父节点。" }),
      type: "(node: HTMLElement) => Element",
    },
    {
      name: "maxTagCount",
      description: formatMessage({
        defaultMessage: "最多显示多少个 `tag`，仅在多选或标签模式有效。",
      }),
      type: "number | { count: number; render?: (invisibleTagCount: number) => ReactNode; }",
    },
    {
      name: "onChange",
      description: formatMessage({ defaultMessage: "点击选择框的回调。" }),
      type: "(value: (string | string[])[], selectedOptions, extra: { dropdownVisible?: boolean }) => void",
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
      description: formatMessage({
        defaultMessage: "鼠标点击下拉框时的回调。",
      }),
      type: "(e) => void",
    },
    {
      name: "onInputValueChange",
      description: formatMessage({
        defaultMessage: "inputValue改变时的回调。",
      }),
      type: "(inputValue: string, reason: [InputValueChangeReason](#inputvaluechangereason)) => void",
    },
    {
      name: "onKeyDown",
      description: formatMessage({ defaultMessage: "键盘输入时的回调。" }),
      type: "(e) => void",
    },
    {
      name: "onSearch",
      description: formatMessage({ defaultMessage: "搜索时的回调。" }),
      type: "(inputValue: string, reason: [InputValueChangeReason](#inputvaluechangereason)) => void",
    },
    {
      name: "onVisibleChange",
      description: formatMessage({ defaultMessage: "下拉框收起展开时触发。" }),
      type: "(visible: boolean) => void",
    },
    {
      name: "renderFormat",
      description: formatMessage({ defaultMessage: "格式化显示内容。" }),
      type: "(valueShow: any[]) => ReactNode",
    },
    {
      name: "renderTag",
      description: formatMessage({
        defaultMessage:
          "自定义标签渲染，`props` 为当前标签属性，`index` 为当前标签的顺序，`values` 为所有标签的值。",
      }),
      type: "(props: { value: any; label: ReactNode; closable: boolean; onClose: (event) => void; }, index: number, values: [ObjectValueType](#objectvaluetype)[]) => ReactNode",
    },
  ];

  return (
    <Unstyled>
      <Title>{formatMessage({ defaultMessage: "级联选择 Cascader" })}</Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "指在选择器选项数量较多时，采用多级分类的方式将选项进行分隔。",
        })}
      </Paragraph>

      <Title heading={2}>{formatMessage({ defaultMessage: "示例" })}</Title>

      <Title heading={3} id="basic">
        {formatMessage({ defaultMessage: "基础用法" })}
      </Title>
      <Paragraph>{formatMessage({ defaultMessage: "基础用法" })}</Paragraph>
      <Canvas of={Stories.Basic} />

      <Title heading={3} id="status">
        {formatMessage({ defaultMessage: "不同状态" })}
      </Title>
      <Canvas of={Stories.Status} />

      <Title heading={3} id="expand-trigger">
        {formatMessage({ defaultMessage: "悬浮展开" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "通过 addBefore 可以设置 expandTrigger='hover' 来控制 hover 展开下一级。",
        })}
      </Paragraph>
      <Canvas of={Stories.ExpandTrigger} />

      <Title heading={3} id="add-before">
        {formatMessage({ defaultMessage: "前置标签" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "通过 addBefore 设置前置标签。",
        })}
      </Paragraph>
      <Canvas of={Stories.AddBefore} />

      <Title heading={3} id="render-format">
        {formatMessage({ defaultMessage: "格式化展示选中值" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "利用 renderFormat 对显示的内容进行自定义处理。",
        })}
      </Paragraph>
      <Canvas of={Stories.RenderFormat} />

      <Title heading={3} id="children">
        {formatMessage({ defaultMessage: "自定义选择框" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "children 会覆盖默认的选择框。",
        })}
      </Paragraph>
      <Canvas of={Stories.Children} />

      <Title heading={3} id="change-on-select">
        {formatMessage({ defaultMessage: "选择即改变" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "设置属性 changeOnSelect，点击任何一级都可以选择。多选时将会解除父子节点的关联。",
        })}
      </Paragraph>
      <Canvas of={Stories.ChangeOnSelect} />

      <Title heading={3} id="show-search">
        {formatMessage({ defaultMessage: "允许搜索" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "指定 showSearch=true，可以输入文本对选项进行搜索。",
        })}
      </Paragraph>
      <Canvas of={Stories.ShowSearch} />

      <Title heading={3} id="filter-option">
        {formatMessage({ defaultMessage: "自定义搜索" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "通过 filterOption 自定义搜索逻辑。",
        })}
      </Paragraph>
      <Canvas of={Stories.FilterOption} />

      <Title heading={3} id="load-more">
        {formatMessage({ defaultMessage: "动态加载" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "利用 loadMore 可以进行动态加载数据。",
        })}
      </Paragraph>
      <Canvas of={Stories.LoadMore} />

      <Title heading={3} id="disabled-option">
        {formatMessage({ defaultMessage: "选项禁用" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "指定 option 的 disabled 为 true，可以禁用该选项。",
        })}
      </Paragraph>
      <Canvas of={Stories.DisabledOption} />

      <Title heading={3} id="size">
        {formatMessage({ defaultMessage: "不同尺寸" })}
      </Title>
      <Canvas of={Stories.Size} />

      <Title heading={3} id="render-option">
        {formatMessage({ defaultMessage: "自定义 Option" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "使用 renderOption，可以自定义渲染选项。",
        })}
      </Paragraph>
      <Canvas of={Stories.RenderOption} />

      <Title heading={3} id="render-footer">
        {formatMessage({ defaultMessage: "自定义 Footer" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "通过 renderFooter 可以自定义每一层级的 footer。",
        })}
      </Paragraph>
      <Canvas of={Stories.RenderFooter} />

      <Title heading={3} id="show-empty-children">
        {formatMessage({ defaultMessage: "展示空数据" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "showEmptyChildren=true 时，当 children 为 [] 也会展示下一级空菜单。",
        })}
      </Paragraph>
      <Canvas of={Stories.ShowEmptyChildren} />

      <Title heading={3} id="drag-to-sort">
        {formatMessage({ defaultMessage: "拖拽排序" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "多选时，指定 dragToSort 属性以允许对已输入的值进行拖拽排序。",
        })}
      </Paragraph>
      <Canvas of={Stories.DragToSort} />

      <Title heading={2}>{formatMessage({ defaultMessage: "用法" })}</Title>
      <Source
        code={`import { Cascader, type CascaderProps } from "growingio-design";`}
        language="tsx"
      />

      <Title id="props" heading={3}>
        CascaderProps
      </Title>
      <PropsTable data={data} />
    </Unstyled>
  );
}

export default injectIntl(DocPage);
