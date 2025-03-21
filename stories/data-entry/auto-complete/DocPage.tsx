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
      description: formatMessage({ defaultMessage: "是否允许一键清除。" }),
      type: "boolean",
    },
    {
      name: "defaultActiveFirstOption",
      description: formatMessage({ defaultMessage: "是否默认高亮第一个选项。" }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "disabled",
      description: formatMessage({ defaultMessage: "是否禁用。" }),
      type: "boolean",
    },
    {
      name: "error",
      description: formatMessage({ defaultMessage: "是否是错误状态。" }),
      type: "boolean",
    },
    {
      name: "loading",
      description: formatMessage({ defaultMessage: "是否处于加载状态。" }),
      type: "boolean",
    },
    {
      name: "strict",
      description: formatMessage({ defaultMessage: "'strict: true' 的时候大小写敏感。" }),
      type: "boolean",
    },
    {
      name: "defaultValue",
      description: formatMessage({ defaultMessage: "自动补全组件的默认值。" }),
      type: "string",
    },
    {
      name: "placeholder",
      description: formatMessage({ defaultMessage: "输入框提示。" }),
      type: "string",
    },
    {
      name: "value",
      description: formatMessage({ defaultMessage: "自动补全组件的值。" }),
      type: "string",
    },
    // {
    //   name: "status",
    //   description: formatMessage({ defaultMessage: "状态。" }),
    //   type: "'error' | 'warning'",
    // },
    {
      name: "children",
      description: formatMessage({ defaultMessage: "自定义输入框/数据源。" }),
      type: "ReactNode",
    },
    {
      name: "data",
      description: formatMessage({ defaultMessage: "自动完成的数据源。" }),
      type: "(string | { value: string; name: string; [key: string]: any } | ReactNode)[]",
    },
    {
      name: "inputProps",
      description: formatMessage({ defaultMessage: "传递 Input 组件的属性。" }),
      type: "Partial<InputProps>",
    },
    {
      name: "triggerProps",
      description: formatMessage({ defaultMessage: "可以接受所有 `Trigger` 的 `Props`。" }),
      type: "Partial<TriggerProps>",
    },
    {
      name: "virtualListProps",
      description: formatMessage({ defaultMessage: "传递虚拟滚动属性。" }),
      type: "AvailableVirtualListProps",
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
      name: "onBlur",
      description: formatMessage({ defaultMessage: "失去焦点的回调。" }),
      type: "(event) => void",
    },
    {
      name: "onChange",
      description: formatMessage({
        defaultMessage:
          "输入或者点击补全项，value 改变时的回调（仅在点击补全项时存在第二个参数）。",
      }),
      type: "(value: string, option?: OptionInfo) => void",
    },
    {
      name: "onFocus",
      description: formatMessage({ defaultMessage: "聚焦时的回调。" }),
      type: "(event) => void",
    },
    {
      name: "onPressEnter",
      description: formatMessage({ defaultMessage: "按下回车键的回调。" }),
      type: "(event, activeOption?: OptionInfo) => void",
    },
    {
      name: "onSearch",
      description: formatMessage({ defaultMessage: "搜索补全时的回调。" }),
      type: "(value: string) => void",
    },
    {
      name: "onSelect",
      description: formatMessage({ defaultMessage: "点击补全项时的回调。" }),
      type: "(value: string, option: OptionInfo) => void",
    },
    {
      name: "triggerElement",
      description: formatMessage({ defaultMessage: "自定义触发元素。" }),
      type: "ReactElement | (({ value }) => ReactElement)",
      defaultValue: "<Input />",
    },
  ];

  return (
    <Unstyled>
      <Title>{formatMessage({ defaultMessage: "自动补全 AutoComplete" })}</Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "输入框或自定义输入控件的自动补全功能。",
        })}
      </Paragraph>

      <Title heading={2}>{formatMessage({ defaultMessage: "示例" })}</Title>

      <Title heading={3} id="default">
        {formatMessage({ defaultMessage: "基础用法" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "根据当前输入展示输入建议（下拉选择）。",
        })}
      </Paragraph>
      <Canvas of={Stories.Default} />

      <Title heading={3} id="trigger">
        {formatMessage({ defaultMessage: "自定义输入组件" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "支持自定义输入组件。",
        })}
      </Paragraph>
      <Canvas of={Stories.TriggerElement} />

      <Title heading={3} id="strict">
        {formatMessage({ defaultMessage: "严格模式" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "使用 strict=true 来指明在匹配时严格区分大小写。",
        })}
      </Paragraph>
      <Canvas of={Stories.Strict} />

      <Title heading={3} id="filter">
        {formatMessage({ defaultMessage: "过滤用法" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "通过 filterOption 属性来覆盖默认的选项过滤规则。",
        })}
      </Paragraph>
      <Canvas of={Stories.FilterOption} />

      <Title heading={3} id="complex">
        {formatMessage({ defaultMessage: "复杂用法" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "这个示例展示了：1. 添加Tooltip, 2. 自定义显示, 3. 对值进行操控。",
        })}
      </Paragraph>
      <Canvas of={Stories.Complex} />

      <Title heading={2}>{formatMessage({ defaultMessage: "用法" })}</Title>
      <Source
        code={`import { AutoComplete, type AutoCompleteProps } from "@gio-design/react";`}
        language="typescript"
      />

      <Title id="props" heading={3}>
        AutoCompleteProps
      </Title>
      <PropsTable data={data} />

      <Title id="option-info" heading={3}>
        OptionInfo
      </Title>
      <Source
        code={`export interface OptionInfo extends PropsWithChildren<OptionProps> {
  child?: ReactElement;
  _valid: boolean;
  _index: number;
  _origin: "children" | "options" | "userCreatedOptions" | "userCreatingOption";
}`}
        language="typescript"
      />
    </Unstyled>
  );
}

export default injectIntl(DocPage);
