import PropsTable, { type PropsTableData } from "@/components/props-table";
import { Typography } from "@/src";
import { Canvas, Source, Unstyled } from "@storybook/addon-docs/blocks";
import { IntlShape, injectIntl } from "react-intl";
import * as Stories from "./index.stories";

const { Title, Paragraph } = Typography;

function DocPage({ intl }: { intl: IntlShape }) {
  const { formatMessage } = intl;
  const data: PropsTableData[] = [
    {
      name: "block",
      description: formatMessage({ defaultMessage: "是否为块级元素。" }),
      type: "boolean",
    },
    {
      name: "dot",
      description: formatMessage({ defaultMessage: "是否使用点类型的动画。" }),
      type: "boolean",
    },
    {
      name: "loading",
      description: formatMessage({
        defaultMessage: "是否为加载状态（仅在 'Spin' 有子节点时生效）。",
      }),
      type: "boolean",
    },
    {
      name: "delay",
      description: formatMessage({ defaultMessage: "延迟显示加载的时间 (ms)。" }),
      type: "number",
    },
    {
      name: "size",
      description: formatMessage({ defaultMessage: "加载动画的尺寸。" }),
      type: "number",
    },
    {
      name: "element",
      description: formatMessage({
        defaultMessage: "自定义元素，非图标，不附带旋转效果。可用于设置为 gif 图片等。",
      }),
      type: "ReactNode",
    },
    {
      name: "icon",
      description: formatMessage({ defaultMessage: "自定义图标，会自动旋转。" }),
      type: "ReactNode",
    },
    {
      name: "tip",
      description: formatMessage({ defaultMessage: "加载的文案。" }),
      type: "string | ReactNode",
    },
  ];

  return (
    <Unstyled>
      <Title>{formatMessage({ defaultMessage: "加载中 Spin" })}</Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "用于页面和区块的加载中状态 - 页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。",
        })}
      </Paragraph>

      <Title heading={2}>{formatMessage({ defaultMessage: "示例" })}</Title>

      <Title heading={3} id="default">
        {formatMessage({ defaultMessage: "基础用法" })}
      </Title>
      <Canvas of={Stories.Default} />

      <Title heading={3} id="dot">
        {formatMessage({ defaultMessage: "点状加载" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "通过 dot属性，可以展示点类型的指示符。",
        })}
      </Paragraph>
      <Canvas of={Stories.Dot} />

      <Title heading={3} id="size">
        {formatMessage({ defaultMessage: "不同尺寸" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "设置 size 可以得到不同尺寸的加载图标。",
        })}
      </Paragraph>
      <Canvas of={Stories.Size} />

      <Title heading={3} id="tip">
        {formatMessage({ defaultMessage: "加载文案" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "通过 tip 字段自定义加载时的文案。",
        })}
      </Paragraph>
      <Canvas of={Stories.Tip} />

      <Title heading={3} id="icon">
        {formatMessage({ defaultMessage: "加载图标" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "通过 icon 属性自定义加载时的图标。",
        })}
      </Paragraph>
      <Canvas of={Stories.Icon} />

      <Title heading={3} id="delay">
        {formatMessage({ defaultMessage: "延迟加载" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "通过 delay 属性设置加载延迟时间。",
        })}
      </Paragraph>
      <Canvas of={Stories.Delay} />

      <Title heading={3} id="container">
        {formatMessage({ defaultMessage: "作为容器" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "可以给任意元素添加加载状态。容器默认是 inline-block 布局，当你需要撑满父级容器时，可以设置 block=true。",
        })}
      </Paragraph>
      <Canvas of={Stories.Container} />

      <Title heading={2}>{formatMessage({ defaultMessage: "用法" })}</Title>
      <Source code={`import { Spin, SpinProps } from "@gio-design/react";`} language="typescript" />

      <Title id="props" heading={3}>
        Spin Props
      </Title>
      <PropsTable data={data} />
    </Unstyled>
  );
}

export default injectIntl(DocPage);
