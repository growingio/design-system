import PropsTable, { type PropsTableData } from "@/components/props-table";
import { Typography } from "@/src";
import { Canvas, Source, Unstyled } from "@storybook/blocks";
import { IntlShape, injectIntl } from "react-intl";
import * as Stories from "./index.stories";

const { Title, Paragraph } = Typography;

function DocPage({ intl }: { intl: IntlShape }) {
  const { formatMessage } = intl;
  const data: PropsTableData[] = [
    {
      name: "miniRender",
      description: formatMessage({
        defaultMessage: "是否仅渲染满足动画效果的最少数量的 children。",
      }),
      type: "boolean",
    },
    {
      name: "currentIndex",
      description: formatMessage({ defaultMessage: "当前展示索引。" }),
      type: "number",
      defaultValue: "0",
    },
    {
      name: "moveSpeed",
      description: formatMessage({ defaultMessage: "幻灯片移动速率(ms)。" }),
      type: "number",
      defaultValue: "500",
    },
    {
      name: "timingFunc",
      description: formatMessage({
        defaultMessage:
          "过渡速度曲线, 默认匀速 [transition-timing-function](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-timing-function)。",
      }),
      type: "string",
      defaultValue: "cubic-bezier(0.34, 0.69, 0.1, 1)",
    },
    {
      name: "animation",
      description: formatMessage({ defaultMessage: "切换动画。" }),
      type: "'slide' | 'card' | 'fade'",
      defaultValue: "slide",
    },
    {
      name: "direction",
      description: formatMessage({ defaultMessage: "幻灯片移动方向。" }),
      type: "'horizontal' | 'vertical'",
      defaultValue: "horizontal",
    },
    {
      name: "indicatorPosition",
      description: formatMessage({ defaultMessage: "指示器位置。" }),
      type: "'bottom' | 'top' | 'left' | 'right' | 'outer' | 'outer-right'",
      defaultValue: "bottom",
    },
    {
      name: "indicatorType",
      description: formatMessage({ defaultMessage: "指示器类型，可为小方块和小圆点或不显示。" }),
      type: "'line' | 'dot' | 'slider' | 'never'",
      defaultValue: "dot",
    },
    {
      name: "showArrow",
      description: formatMessage({ defaultMessage: "切换箭头显示时机。" }),
      type: "'always' | 'hover' | 'never'",
      defaultValue: "always",
    },
    {
      name: "trigger",
      description: formatMessage({ defaultMessage: "幻灯片切换触发方式, click/hover 指示器。" }),
      type: "'click' | 'hover'",
      defaultValue: "click",
    },
    {
      name: "arrowClassName",
      description: formatMessage({ defaultMessage: "切换箭头样式。" }),
      type: "string | string[]",
    },
    {
      name: "autoPlay",
      description: formatMessage({
        defaultMessage:
          "是否自动循环展示，或者传入 '{ interval: 自动切换的时间间隔(默认: 3000), hoverToPause: 鼠标悬浮时是否暂停自动切换(默认: true) '} 进行高级配置。",
      }),
      type: "boolean | { interval?: number; hoverToPause?: boolean }",
    },
    {
      name: "carousel",
      description: formatMessage({ defaultMessage: "用于获得带有 API 方法的 Carousel 引用。" }),
      type: "MutableRefObject<CarouselHandle>",
    },
    {
      name: "icons",
      description: formatMessage({ defaultMessage: "自定义图标。" }),
      type: "{prev?: ReactNode;next?: ReactNode;}",
    },
    {
      name: "indicatorClassName",
      description: formatMessage({ defaultMessage: "指示器的样式。" }),
      type: "string | string[]",
    },
    {
      name: "onChange",
      description: formatMessage({ defaultMessage: "幻灯片发生切换时的回调函数。" }),
      type: "(index: number, prevIndex: number, isManual: boolean) => void",
    },
  ];

  return (
    <Unstyled>
      <Title>{formatMessage({ defaultMessage: "轮播 Carousel" })}</Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "用于展示多张图片、视频或内嵌框架等内容的循环播放，支持系统自动播放或用户手动切换。",
        })}
      </Paragraph>

      <Title heading={2}>{formatMessage({ defaultMessage: "示例" })}</Title>

      <Title heading={3} id="default">
        {formatMessage({ defaultMessage: "基础用法" })}
      </Title>
      <Canvas of={Stories.Default} />

      <Title heading={3} id="auto-play">
        {formatMessage({ defaultMessage: "自动播放" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "通过设置 autoPlay 字段，可以开启自动播放功能。",
        })}
      </Paragraph>
      <Canvas of={Stories.AutoPlay} />

      <Title heading={3} id="indicator">
        {formatMessage({ defaultMessage: "指示器" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "可以指定指示器类型：dot | line | slider 和位置 left | right | top | bottom | outer。",
        })}
      </Paragraph>
      <Canvas of={Stories.Indicator} />

      <Title heading={3} id="vertical">
        {formatMessage({ defaultMessage: "垂直模式" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "通过设置 direction 为 vertical 来使用垂直方向切换。",
        })}
      </Paragraph>
      <Canvas of={Stories.Vertical} />

      <Title heading={3} id="card">
        {formatMessage({ defaultMessage: "卡片模式" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "当页面宽度方向空间空余，但高度方向空间多余时，可指定 animation 为 card 使用卡片化风格。",
        })}
      </Paragraph>
      <Canvas of={Stories.Card} />

      <Title heading={3} id="vertical-card">
        {formatMessage({ defaultMessage: "垂直卡片模式" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "通过设置 direction 为 vertical 来使用垂直方向切换。",
        })}
      </Paragraph>
      <Canvas of={Stories.VerticalCard} />

      <Title heading={3} id="fade">
        {formatMessage({ defaultMessage: "淡入淡出模式" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "指定 animation 为 fade。",
        })}
      </Paragraph>
      <Canvas of={Stories.Fade} />

      <Title heading={2}>{formatMessage({ defaultMessage: "用法" })}</Title>
      <Source
        code={`import { Carousel, CarouselProps } from "@gio-design/react";`}
        language="typescript"
      />

      <Title id="carousel-props" heading={3}>
        Carousel Props
      </Title>
      <PropsTable data={data} />
    </Unstyled>
  );
}

export default injectIntl(DocPage);
