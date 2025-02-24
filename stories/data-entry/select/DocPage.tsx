import { injectIntl, IntlShape } from "react-intl";
import { Canvas, Unstyled, Source } from "@storybook/blocks";
import PropsTable, { type PropsTableData } from "../../../components/props-table";
import { Typography } from "../../../src";
import * as SelectStories from "./index.stories";

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
      name: "defaultActiveFirstOption",
      description: formatMessage({
        defaultMessage: "是否默认高亮第一个选项。",
      }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "defaultPopupVisible",
      description: formatMessage({ defaultMessage: "下拉框是否默认打开。" }),
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
      name: "labelInValue",
      description: formatMessage({
        defaultMessage:
          "设置 `onChange` 回调中 `value` 的格式。默认是string，设置为true时候，value格式为： '{ label: string, value: string '}",
      }),
      type: "boolean",
    },
    {
      name: "loading",
      description: formatMessage({ defaultMessage: "是否为加载状态。" }),
      type: "boolean",
    },
    {
      name: "popupVisible",
      description: formatMessage({ defaultMessage: "控制下拉框是否打开。" }),
      type: "boolean",
    },
    {
      name: "unmountOnExit",
      description: formatMessage({
        defaultMessage: "是否在隐藏的时候销毁 DOM 结构。",
      }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "inputValue",
      description: formatMessage({
        defaultMessage: "输入框的值（受控模式）。",
      }),
      type: "string",
    },
    {
      name: "placeholder",
      description: formatMessage({ defaultMessage: "选择框默认文字。" }),
      type: "string",
    },
    {
      name: "allowCreate",
      description: formatMessage({
        defaultMessage: "是否允许通过输入创建新的选项。",
      }),
      type: "boolean | '{ formatter: (inputValue: string, creating: boolean) => SelectProps['options'][number]; '}",
    },
    {
      name: "autoWidth",
      description: formatMessage({
        defaultMessage: "设置宽度自适应。minWidth 默认为 0，maxWidth 默认为 100%。",
      }),
      type: "boolean | { minWidth?: CSSProperties['minWidth']; maxWidth?: CSSProperties['maxWidth'] }",
    },
    {
      name: "mode",
      description: formatMessage({ defaultMessage: "是否开启多选模式。" }),
      type: "'multiple'",
    },
    {
      name: "size",
      description: formatMessage({ defaultMessage: "分别不同尺寸的选择器。" }),
      type: "'mini' | 'small' | 'default' | 'large'",
    },
    {
      name: "trigger",
      description: formatMessage({ defaultMessage: "触发方式。" }),
      type: "TriggerProps['trigger']",
      defaultValue: "click",
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
      name: "defaultValue",
      description: formatMessage({ defaultMessage: "选择框的默认值。" }),
      type: "string | string[] | number | number[] | [LabeledValue](#labeledvalue) | [LabeledValue](#labeledvalue)[]",
    },
    {
      name: "dropdownMenuClassName",
      description: formatMessage({ defaultMessage: "下拉列表的类。" }),
      type: "string | string[]",
    },
    {
      name: "dropdownMenuStyle",
      description: formatMessage({ defaultMessage: "下拉列表的样式。" }),
      type: "CSSProperties",
    },
    {
      name: "options",
      description: formatMessage({ defaultMessage: "指定可选项。" }),
      type: "(string | number | { label: ReactNode | string; value: string | number; disabled?: boolean; extra?: any })[]",
      version: "`extra` in 2.2.0",
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
          "使单选模式可搜索，传入 '{ retainInputValue: true '} 在搜索框聚焦时保留现有内容传入 '{ retainInputValueWhileSelect: true '} 在多选选择时保留输入框内容。",
      }),
      type: "boolean | { retainInputValue?: boolean; retainInputValueWhileSelect?: boolean }",
    },
    {
      name: "tokenSeparators",
      description: formatMessage({
        defaultMessage: "在多选模式下自动分词的分隔符。",
      }),
      type: "string[]",
    },
    {
      name: "triggerProps",
      description: formatMessage({
        defaultMessage: "可以接受所有 `Trigger` 的 `Props`。",
      }),
      type: "Partial<[TriggerProps](trigger#trigger)>",
    },
    {
      name: "value",
      description: formatMessage({
        defaultMessage: "选择器的值（受控模式）。",
      }),
      type: "string | string[] | number | number[] | [LabeledValue](#labeledvalue) | [LabeledValue](#labeledvalue)[]",
    },
    {
      name: "virtualListProps",
      description: formatMessage({ defaultMessage: "传递虚拟滚动属性。" }),
      type: "[AvailableVirtualListProps](#availablevirtuallistprops)",
      version: "2.1.0",
    },
    {
      name: "dropdownRender",
      description: formatMessage({ defaultMessage: "自定义弹出内容。" }),
      type: "(menu: ReactNode) => ReactNode",
    },
    {
      name: "filterOption",
      description: formatMessage({
        defaultMessage:
          "是否根据输入的值筛选数据。如果传入函数的话，接收 `inputValue` 和 `option` 两个参数，当option符合筛选条件时，返回 `true`，反之返回 `false`。",
      }),
      type: "boolean | ((inputValue: string, option: ReactElement) => boolean)",
      defaultValue: "true",
    },
    {
      name: "getPopupContainer",
      description: formatMessage({ defaultMessage: "弹出框挂载的父节点。" }),
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
      name: "onBlur",
      description: formatMessage({ defaultMessage: "失去焦点时的回调。" }),
      type: "(e) => void",
    },
    {
      name: "onChange",
      description: formatMessage({ defaultMessage: "点击选择框的回调。" }),
      type: "(value, option: OptionInfo | OptionInfo[]) => void",
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
      name: "onDeselect",
      description: formatMessage({
        defaultMessage: "取消选中的时候触发的回调，(只在 `multiple` 模式下触发)。",
      }),
      type: "(value: string | number | LabeledValue, option: OptionInfo) => void",
    },
    {
      name: "onFocus",
      description: formatMessage({ defaultMessage: "获得焦点时的回调。" }),
      type: "(e) => void",
    },
    {
      name: "onInputValueChange",
      description: formatMessage({ defaultMessage: "输入框文本改变的回调。" }),
      type: "(value: string, reason: InputValueChangeReason) => void",
    },
    {
      name: "onKeyDown",
      description: formatMessage({ defaultMessage: "键盘输入时的回调。" }),
      type: "(e) => void",
    },
    {
      name: "onPaste",
      description: formatMessage({ defaultMessage: "输入框文本粘贴的回调。" }),
      type: "(e) => void",
    },
    {
      name: "onPopupScroll",
      description: formatMessage({
        defaultMessage: "下拉框的滚动监听函数，参数为滚动元素。",
      }),
      type: "(elem) => void",
    },
    {
      name: "onSearch",
      description: formatMessage({ defaultMessage: "搜索时的回调。" }),
      type: "(value: string, reason: InputValueChangeReason) => void",
    },
    {
      name: "onSelect",
      description: formatMessage({
        defaultMessage: "选中选项时触发的回调，(只在 `multiple` 模式下触发)。",
      }),
      type: "(value: string | number | LabeledValue, option: OptionInfo) => void",
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
      type: "(option: OptionInfo | null, value: string | number | LabeledValue) => ReactNode",
    },
    {
      name: "renderTag",
      description: formatMessage({
        defaultMessage:
          "自定义标签渲染，`props` 为当前标签属性，`index` 为当前标签的顺序，`values` 为所有标签的值。",
      }),
      type: "(props: { value: any; label: ReactNode; closable: boolean; onClose: (event) => void; }, index: number, values: [ObjectValueType](#objectvaluetype)[]) => ReactNode",
    },
    {
      name: "triggerElement",
      description: formatMessage({ defaultMessage: "自定义触发元素。" }),
      type: "ReactNode | ((params: { value: any; option: [OptionInfo](#optioninfo) | [OptionInfo](#optioninfo)[] }) => ReactNode)",
    },
  ];

  const optionData: PropsTableData[] = [
    {
      name: "disabled",
      description: formatMessage({ defaultMessage: "是否禁用。" }),
      type: "boolean",
    },
    {
      name: "extra",
      description: formatMessage({ defaultMessage: "携带任意自定义数据。" }),
      type: "any",
    },
    {
      name: "value",
      description: formatMessage({
        defaultMessage: "默认根据此属性值进行筛选。",
      }),
      type: "string | number",
      required: true,
    },
  ];

  const groupData: PropsTableData[] = [
    {
      name: "label",
      description: formatMessage({ defaultMessage: "组名。" }),
      type: "ReactNode",
    },
  ];

  const referenceTypedata: PropsTableData[] = [
    {
      name: "activeOptionValue",
      description: formatMessage({ defaultMessage: "处于悬浮态的选项的值。" }),
      type: "OptionProps['value']",
      required: true,
    },
    {
      name: "getOptionInfoByValue",
      description: formatMessage({
        defaultMessage: "根据选项值获得对应的选项信息。",
      }),
      type: "(value: OptionProps['value']) => OptionInfo",
      required: true,
    },
    {
      name: "scrollIntoView",
      description: formatMessage({
        defaultMessage: "将下拉列表滚动至指定选项。",
      }),
      type: "(value: OptionProps['value'], options?: ScrollIntoViewOptions) => void",
      required: true,
    },
    {
      name: "dom",
      description: formatMessage({ defaultMessage: "DOM 节点。" }),
      type: "HTMLDivElement",
      required: true,
    },
    {
      name: "blur",
      description: formatMessage({ defaultMessage: "使选择框失焦。" }),
      type: "() => void",
      required: true,
    },
    {
      name: "focus",
      description: formatMessage({ defaultMessage: "使选择框聚焦。" }),
      type: "() => void",
      required: true,
    },
    {
      name: "getOptionInfoList",
      description: formatMessage({ defaultMessage: "获得选项信息的列表。" }),
      type: "() => OptionInfo[]",
      required: true,
    },
    {
      name: "hotkeyHandler",
      description: formatMessage({
        defaultMessage: "鼠标快捷操作的处理函数。",
      }),
      type: "(event: KeyboardEvent) => void",
      required: true,
    },
  ];

  const virtualListData: PropsTableData[] = [
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
  ];

  return (
    <Unstyled>
      <Title>{formatMessage({ defaultMessage: "选择器 Select" })}</Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "当用户需要从一组同类数据中选择一个或多个时，可以使用下拉选择器，点击后选择对应项。",
        })}
      </Paragraph>

      <Title heading={2}>{formatMessage({ defaultMessage: "示例" })}</Title>

      <Title heading={3} id="basic">
        {formatMessage({ defaultMessage: "基础用法" })}
      </Title>
      <Canvas of={SelectStories.Basic} />

      <Title heading={3} id="multiple">
        {formatMessage({ defaultMessage: "多选模式" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "指定 mode=multiple，即可使用多选。通过 maxTagCount 设置最多显示的标签个数，通过 renderTag 属性自定义标签的渲染方式，实现更复杂的定制。",
        })}
      </Paragraph>
      <Canvas of={SelectStories.Multiple} />

      <Title heading={3} id="add-before">
        {formatMessage({ defaultMessage: "前置标签" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "通过 addBefore 设置前置标签。",
        })}
      </Paragraph>
      <Canvas of={SelectStories.AddBefore} />

      <Title heading={3} id="prefix">
        {formatMessage({ defaultMessage: "前缀" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "通过 prefix 设置前缀。",
        })}
      </Paragraph>
      <Canvas of={SelectStories.Prefix} />

      <Title heading={3} id="allow-create">
        {formatMessage({ defaultMessage: "允许创建" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "指定 allowCreate 为 true，即可创建选项中不存在的条目。通过 allowCreate.formatter 格式化用户创建的选项。",
        })}
      </Paragraph>
      <Canvas of={SelectStories.AllowCreate} />

      <Title heading={3} id="search">
        {formatMessage({ defaultMessage: "搜索" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "指定showSearch=true，可以对展开的选项进行搜索，配合 filterOption 可以自定义搜索。搜索框聚焦时默认会清空已输入的内容，通过指定 showSearch='{ retainInputValue: true '} 来保留内容。",
        })}
      </Paragraph>
      <Canvas of={SelectStories.Search} />

      <Title heading={3} id="remote-search">
        {formatMessage({ defaultMessage: "远程搜索" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "指定 showSearch，并且结合 filterOption 和 onSearch，可以使用远程搜索功能。",
        })}
      </Paragraph>
      <Canvas of={SelectStories.RemoteSearch} />

      <Title heading={3} id="popup-width">
        {formatMessage({ defaultMessage: "自定义弹出框宽度" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "弹出框可以根据内容自动调节宽度，最小宽度为输入框的宽度。",
        })}
      </Paragraph>
      <Canvas of={SelectStories.PopupWidth} />

      <Title heading={3} id="size">
        {formatMessage({ defaultMessage: "不同尺寸" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "通过 size 选择 Select 的尺寸（mini, small, default, large），高度分别对应24px、28px、32px、36px。",
        })}
      </Paragraph>
      <Canvas of={SelectStories.Size} />

      <Title heading={3} id="render-format">
        {formatMessage({ defaultMessage: "定制回显内容" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "使用 renderFormat 可以定制回显内容。",
        })}
      </Paragraph>
      <Paragraph bold>
        {formatMessage({
          defaultMessage:
            "在远程加载选项数据的场景下，value 中对应的选项可能在某些时刻并不存在，需要判断若 option 不存在则返回 value 作为显示的内容。",
        })}
      </Paragraph>
      <Canvas of={SelectStories.RenderFormat} />

      <Title heading={3} id="group">
        {formatMessage({ defaultMessage: "分组" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "使用 Select.OptGroup 对下拉菜单选项进行编组。",
        })}
      </Paragraph>
      <Canvas of={SelectStories.Group} />

      <Title heading={3} id="options">
        {formatMessage({ defaultMessage: "指定可选项" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "通过传入 options 指定可选项。",
        })}
      </Paragraph>
      <Canvas of={SelectStories.Options} />

      <Title heading={3} id="on-popup-scroll">
        {formatMessage({ defaultMessage: "滚动加载选项" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "可通过 onPopupScroll 来监听滚动事件，来实现滚动到底部时加载新选项。",
        })}
      </Paragraph>
      <Canvas of={SelectStories.OnPopupScroll} />

      <Title heading={3} id="token-separator">
        {formatMessage({ defaultMessage: "自动分词" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "设置 tokenSeparators 可以使用自动分词功能。只在 multiple 模式下可用。",
        })}
      </Paragraph>
      <Canvas of={SelectStories.TokenSeparator} />

      <Title heading={3} id="dropdown-render">
        {formatMessage({ defaultMessage: "扩展菜单" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "使用 dropdownRender 对下拉菜单进行自由扩展。",
        })}
      </Paragraph>
      <Canvas of={SelectStories.DropdownRener} />

      <Title heading={3} id="borderless">
        {formatMessage({ defaultMessage: "无边框" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "使用 bordered = false，可以使用无边框的选择器。",
        })}
      </Paragraph>
      <Canvas of={SelectStories.Borderless} />

      <Title heading={3} id="render-tag">
        {formatMessage({ defaultMessage: "自定义标签" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "指定 renderTag 来自定义标签样式。",
        })}
      </Paragraph>
      <Canvas of={SelectStories.RenderTag} />

      <Title heading={3} id="cascader">
        {formatMessage({ defaultMessage: "联动" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "省市联动示例。",
        })}
      </Paragraph>
      <Canvas of={SelectStories.Cascader} />

      <Title heading={3} id="large-data">
        {formatMessage({ defaultMessage: "大数据" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "Select 使用了虚拟滚动技术，在大量数据的情况也能保证性能。",
        })}
      </Paragraph>
      <Paragraph bold>
        {formatMessage({
          defaultMessage:
            "当指定了 triggerProps.autoAlignPopupWidth = false 且 Option.label 为非文本类型时，由于无法在选项列表首次渲染时获取选项的最大宽度，虚拟滚动会被自动关闭。",
        })}
      </Paragraph>
      <Canvas of={SelectStories.LargeData} />

      <Title heading={3} id="sort">
        {formatMessage({ defaultMessage: "拖拽排序" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "多选时，指定 dragToSort 属性以允许对已输入的值进行拖拽排序。",
        })}
      </Paragraph>
      <Canvas of={SelectStories.Sort} />

      <Title heading={3} id="auto-width">
        {formatMessage({ defaultMessage: "宽度自适应" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "通过 autoWidth 属性可以设置 Select 的宽度自适应。",
        })}
      </Paragraph>
      <Canvas of={SelectStories.AutoWidth} />

      <Title heading={2}>{formatMessage({ defaultMessage: "用法" })}</Title>
      <Source
        code={`import { Select, type SelectProps } from "growingio-design";`}
        language="tsx"
      />

      <Title id="props" heading={3}>
        Select Props
      </Title>
      <PropsTable data={data} />

      <Title id="option-props" heading={3}>
        Select.Option Props
      </Title>
      <PropsTable data={optionData} />

      <Title id="group-props" heading={3}>
        Select.OptGroup Props
      </Title>
      <PropsTable data={groupData} />

      <Title id="reference-type" heading={3}>
        Select Reference Type
      </Title>
      <PropsTable data={referenceTypedata} />

      <Title id="virtual-list-props" heading={3}>
        VirtualListProps
      </Title>
      <PropsTable data={virtualListData} />
    </Unstyled>
  );
}

export default injectIntl(DocPage);
