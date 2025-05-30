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
      name: "defaultPopupVisible",
      description: formatMessage({ defaultMessage: "默认弹出框是打开还是关闭。" }),
      type: "boolean",
    },
    {
      name: "disabled",
      description: formatMessage({ defaultMessage: "禁用。" }),
      type: "boolean",
    },
    {
      name: "disabledAlpha",
      description: formatMessage({ defaultMessage: "禁用透明通道。" }),
      type: "boolean",
    },
    {
      name: "popupVisible",
      description: formatMessage({ defaultMessage: "弹出框是打开还是关闭。(受控)" }),
      type: "boolean",
    },
    {
      name: "showHistory",
      description: formatMessage({ defaultMessage: "显示历史颜色。" }),
      type: "boolean",
    },
    {
      name: "showPreset",
      description: formatMessage({ defaultMessage: "显示预设颜色。" }),
      type: "boolean",
    },
    {
      name: "showText",
      description: formatMessage({ defaultMessage: "显示颜色值。" }),
      type: "boolean",
    },
    {
      name: "unmountOnExit",
      description: formatMessage({ defaultMessage: "隐藏后是否销毁 DOM 结构。" }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "format",
      description: formatMessage({ defaultMessage: "颜色值的格式。" }),
      type: "'hex' | 'rgb'",
    },
    {
      name: "size",
      description: formatMessage({ defaultMessage: "输入框的尺寸。" }),
      type: "[InputProps](input#input)['size']",
      defaultValue: "default",
    },
    {
      name: "defaultValue",
      description: formatMessage({ defaultMessage: "默认值。" }),
      type: "string",
    },
    {
      name: "historyColors",
      description: formatMessage({ defaultMessage: "历史颜色的颜色数组。" }),
      type: "string[]",
    },
    {
      name: "presetColors",
      description: formatMessage({ defaultMessage: "预设颜色的颜色数组。" }),
      type: "string[]",
    },
    {
      name: "triggerProps",
      description: formatMessage({
        defaultMessage:
          "可以接受所有 Trigger 组件的 [Props](/docs/components-others-trigger--docs#props)。",
      }),
      type: "Partial<TriggerProps>",
    },
    {
      name: "value",
      description: formatMessage({ defaultMessage: "颜色值，受控模式。" }),
      type: "string",
    },
    {
      name: "onChange",
      description: formatMessage({ defaultMessage: "颜色值改变时触发。" }),
      type: "(value: string) => void",
    },
    {
      name: "onVisibleChange",
      description: formatMessage({ defaultMessage: "下拉框收起展开时触发。" }),
      type: "(visible: boolean) => void",
    },
    {
      name: "renderFooter",
      description: formatMessage({ defaultMessage: "自定义面板底部内容。" }),
      type: "() => ReactNode",
    },
    {
      name: "triggerElement",
      description: formatMessage({ defaultMessage: "自定义触发元素。" }),
      type: "ReactNode | ((params: { value: string }) => ReactNode)",
    },
  ];

  return (
    <Unstyled>
      <Title>{formatMessage({ defaultMessage: "颜色选择器 ColorPicker" })}</Title>
      <Paragraph>{formatMessage({ defaultMessage: "用于选择和展示颜色。" })}</Paragraph>

      <Title heading={2}>{formatMessage({ defaultMessage: "示例" })}</Title>

      <Title heading={3} id="default">
        {formatMessage({ defaultMessage: "基础用法" })}
      </Title>
      <Canvas of={Stories.Default} />

      <Title heading={3} id="show-text">
        {formatMessage({ defaultMessage: "显示色值文本" })}
      </Title>
      <Paragraph>
        {formatMessage({ defaultMessage: "默认不显示色值文本，通过 showText 打开。" })}
      </Paragraph>
      <Canvas of={Stories.ShowText} />

      <Title heading={3} id="sizes">
        {formatMessage({ defaultMessage: "尺寸" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "颜色选择器定义了四种尺寸（mini,small, default, large）。",
        })}
      </Paragraph>
      <Canvas of={Stories.Sizes} />

      <Title heading={3} id="disabled">
        {formatMessage({ defaultMessage: "禁用" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "设置 disabled 以禁用颜色选择器。",
        })}
      </Paragraph>
      <Canvas of={Stories.Disabled} />

      <Title heading={3} id="disabled-alpha">
        {formatMessage({ defaultMessage: "禁用透明通道" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "设置 disabledAlpha 以隐藏 Alpha 值滑条和数值显示。",
        })}
      </Paragraph>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "如果 defaultValue 传入的初始色值包含 Alpha，那么初次显示时，色块会保留传入的 Alpha。当用户在取色版上取色时，Alpha 将被重置并锁定为100。",
        })}
      </Paragraph>
      <Canvas of={Stories.DisabledAlpha} />

      <Title heading={3} id="format">
        {formatMessage({ defaultMessage: "格式" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "通过 format 设置颜色值的格式，支持 hex 和 rgb。",
        })}
      </Paragraph>
      <Canvas of={Stories.Format} />

      <Title heading={3} id="show-preset">
        {formatMessage({ defaultMessage: "显示预置颜色" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "可以通过 showPreset 开启预设颜色区域。",
        })}
      </Paragraph>
      <Canvas of={Stories.ShowPreset} />

      <Title heading={3} id="show-history">
        {formatMessage({ defaultMessage: "显示历史" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "可以通过 showHistory 开启历史颜色区域。",
        })}
      </Paragraph>
      <Canvas of={Stories.ShowHistory} />

      <Title heading={3} id="trigger">
        {formatMessage({ defaultMessage: "自定义触发器" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "可以自定义颜色选择器的触发元素。",
        })}
      </Paragraph>
      <Canvas of={Stories.Trigger} />

      <Title heading={2}>{formatMessage({ defaultMessage: "用法" })}</Title>
      <Source
        code={`import { ColorPikcer, type ColorPikcerProps } from "@gio-design/react";`}
        language="typescript"
      />

      <Title id="props" heading={3}>
        ColorPikcerProps
      </Title>
      <PropsTable data={data} />
    </Unstyled>
  );
}

export default injectIntl(DocPage);
