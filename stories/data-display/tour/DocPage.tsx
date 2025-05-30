import PropsTable, { type PropsTableData } from "@/components/props-table";
import { Typography } from "@/src";
import { Canvas, Source, Unstyled } from "@storybook/addon-docs/blocks";
import { injectIntl, IntlShape } from "react-intl";
import * as TourStories from "./index.stories";

const { Title, Paragraph } = Typography;

function DocPage({ intl }: { intl: IntlShape }) {
  const { formatMessage } = intl;

  const data: PropsTableData[] = [
    {
      name: "arrow",
      description: formatMessage({
        defaultMessage: "是否显示箭头，包含是否指向元素中心的配置。",
      }),
      type: "boolean | { pointAtCenter: boolean}",
      defaultValue: "true",
    },
    {
      name: "closeIcon",
      description: formatMessage({ defaultMessage: "自定义关闭按钮。" }),
      type: "React.ReactNode",
      defaultValue: "true",
    },
    {
      name: "disabledInteraction",
      description: formatMessage({ defaultMessage: "禁用高亮区域交互。" }),
      type: "boolean",
      defaultValue: "false",
    },
    {
      name: "placement",
      description: formatMessage({
        defaultMessage: "引导卡片相对于目标元素的位置。",
      }),
      type: "'center' | 'left' | 'leftTop' | 'leftBottom' | 'right' | 'rightTop' | 'rightBottom' | 'top' | 'topLeft' | 'topRight' | 'bottom' | 'bottomLeft' | 'bottomRight' | 'bottom'",
      defaultValue: "'bottom'",
    },
    {
      name: "onClose",
      description: formatMessage({ defaultMessage: "关闭引导时的回调函数。" }),
      type: "Function",
    },
    {
      name: "onFinish",
      description: formatMessage({ defaultMessage: "引导完成时的回调。" }),
      type: "Function",
    },
    {
      name: "mask",
      description: formatMessage({
        defaultMessage: "是否启用蒙层，也可传入配置改变蒙层样式和填充色。",
      }),
      type: "boolean | { style?: React.CSSProperties; color?: string; }",
      defaultValue: "true",
    },
    {
      name: "type",
      description: formatMessage({
        defaultMessage: "类型，影响底色与文字颜色。",
      }),
      type: "'default' | 'primary'",
      defaultValue: "'default'",
    },
    {
      name: "open",
      description: formatMessage({ defaultMessage: "打开引导。" }),
      type: "boolean",
    },
    {
      name: "onChange",
      description: formatMessage({
        defaultMessage: "步骤改变时的回调，current 为当前的步骤。",
      }),
      type: "(current: number) => void",
    },
    {
      name: "current",
      description: formatMessage({ defaultMessage: "当前处于哪一步。" }),
      type: "number",
    },
    {
      name: "scrollIntoViewOptions",
      description: formatMessage({
        defaultMessage: "是否支持当前元素滚动到视窗内，也可传入配置指定滚动视窗的相关参数。",
      }),
      type: "boolean | ScrollIntoViewOptions",
      defaultValue: "true",
    },
    {
      name: "indicatorsRender",
      description: formatMessage({ defaultMessage: "自定义指示器。" }),
      type: "(current: number, total: number) => ReactNode",
    },
    {
      name: "zIndex",
      description: formatMessage({ defaultMessage: "Tour 的层级。" }),
      type: "number",
      defaultValue: "1001",
    },
    {
      name: "getPopupContainer",
      description: formatMessage({
        defaultMessage: "设置 Tour 浮层的渲染节点，默认是 body。",
      }),
      type: "(node: HTMLElement) => HTMLElement",
      defaultValue: "body",
    },
  ];
  const tourStepPropsData: PropsTableData[] = [
    {
      name: "target",
      description: formatMessage({
        defaultMessage: "获取引导卡片指向的元素，为空时居中于屏幕。",
      }),
      type: "(node: HTMLElement) => HTMLElement | HTMLElement",
    },
    {
      name: "arrow",
      description: formatMessage({
        defaultMessage: "是否显示箭头，包含是否指向元素中心的配置。",
      }),
      type: "boolean | { pointAtCenter: boolean }",
      defaultValue: "true",
    },
    {
      name: "closeIcon",
      description: formatMessage({ defaultMessage: "自定义关闭按钮。" }),
      type: "React.ReactNode",
      defaultValue: "true",
    },
    {
      name: "cover",
      description: formatMessage({ defaultMessage: "展示的图片或者视频。" }),
      type: "ReactNode",
    },
    {
      name: "title",
      description: formatMessage({ defaultMessage: "标题。" }),
      type: "ReactNode",
    },
    {
      name: "description",
      description: formatMessage({ defaultMessage: "主要描述部分。" }),
      type: "React.ReactNode",
    },
    {
      name: "placement",
      description: formatMessage({
        defaultMessage: "引导卡片相对于目标元素的位置。",
      }),
      type: "'center' | 'left' | 'leftTop' | 'leftBottom' | 'right' | 'rightTop' | 'rightBottom' | 'top' | 'topLeft' | 'topRight' | 'bottom' | 'bottomLeft' | 'bottomRight' | 'bottom'",
    },
    {
      name: "onClose",
      description: formatMessage({ defaultMessage: "关闭引导时的回调函数。" }),
      type: "Function",
    },
    {
      name: "mask",
      description: formatMessage({
        defaultMessage:
          "是否启用蒙层，也可传入配置改变蒙层样式和填充色，默认跟随 Tour 的 `mask` 属性。",
      }),
      type: "boolean | { style?: React.CSSProperties; color?: string; }",
      defaultValue: "true",
    },
    {
      name: "type",
      description: formatMessage({
        defaultMessage: "类型，影响底色与文字颜色。",
      }),
      type: "'default' | | 'primary'",
      defaultValue: "default",
    },
    {
      name: "nextButtonProps",
      description: formatMessage({ defaultMessage: "下一步按钮的属性。" }),
      type: "{ children: ReactNode; onClick: Function }",
    },
    {
      name: "prevButtonProps",
      description: formatMessage({ defaultMessage: "上一步按钮的属性。" }),
      type: "{ children: ReactNode; onClick: Function }",
    },
    {
      name: "scrollIntoViewOptions",
      description: formatMessage({
        defaultMessage:
          "是否支持当前元素滚动到视窗内，也可传入配置指定滚动视窗的相关参数，默认跟随 Tour 的 `scrollIntoViewOptions` 属性。",
      }),
      type: "boolean | ScrollIntoViewOptions",
      defaultValue: "true",
    },
  ];

  return (
    <Unstyled>
      <Title>{formatMessage({ defaultMessage: "漫游式引导 Tour" })}</Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "用于分步引导用户了解产品功能的气泡组件。",
        })}
      </Paragraph>

      <Title heading={2}>{formatMessage({ defaultMessage: "示例" })}</Title>

      <Title heading={3} id="basic">
        {formatMessage({ defaultMessage: "基础用法" })}
      </Title>
      <Paragraph>{formatMessage({ defaultMessage: "基础用法" })}</Paragraph>
      <Canvas of={TourStories.Basic} />

      <Title heading={3} id="no-mask">
        {formatMessage({ defaultMessage: "非模态" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            '使用 mask=false 可以将引导变为非模态，同时为了强调引导本身，建议与 type="primary" 组合使用。',
        })}
      </Paragraph>
      <Canvas of={TourStories.NoMask} />

      <Title heading={3} id="position">
        {formatMessage({ defaultMessage: "位置" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "改变引导相对于目标的位置，共有 12 种位置可供选择。",
        })}
      </Paragraph>
      <Canvas of={TourStories.Postion} />

      <Title heading={3} id="step-with-image">
        {formatMessage({ defaultMessage: "自定义图片" })}
      </Title>
      <Canvas of={TourStories.StepWithImage} />

      <Title heading={3} id="indicator-type">
        {formatMessage({ defaultMessage: "指示器类型" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            '指示器默认是数字样式（indicatorType="number"），可以改成点状（indicatorType="dot"）。',
        })}
      </Paragraph>
      <Canvas of={TourStories.IndicatorType} />

      <Title heading={3} id="modal">
        {formatMessage({ defaultMessage: "弹窗形式" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "设置 target=null，引导将以弹窗形出现。",
        })}
      </Paragraph>
      <Canvas of={TourStories.Modal} />

      <Title heading={2}>{formatMessage({ defaultMessage: "用法" })}</Title>
      <Source
        code={`import { Tour, type TourProps, type TourStepProps } from "@gio-design/react";`}
        language="tsx"
      />

      <Title id="tour-props" heading={3}>
        TourProps
      </Title>
      <PropsTable data={data} />
      <Title id="tour-step-props" heading={3}>
        TourStepProps
      </Title>
      <PropsTable data={tourStepPropsData} />
    </Unstyled>
  );
}

const IntlDocPage = injectIntl(DocPage);
export default IntlDocPage;
