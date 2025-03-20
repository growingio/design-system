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
      name: "animation",
      description: formatMessage({ defaultMessage: "动画效果，仅在 type=line 时可用。" }),
      type: "boolean",
    },
    {
      name: "buffer",
      description: formatMessage({
        defaultMessage: "加载中的进度条是否显示缓冲区。仅对 type=line 且加载中的进度条有效。",
      }),
      type: "boolean",
    },
    {
      name: "showText",
      description: formatMessage({ defaultMessage: "是否展示文本。" }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "percent",
      description: formatMessage({ defaultMessage: "百分比。" }),
      type: "number",
      defaultValue: "0",
      required: true,
    },
    {
      name: "steps",
      description: formatMessage({ defaultMessage: "显示步骤进度条。" }),
      type: "number",
    },
    {
      name: "strokeWidth",
      description: formatMessage({ defaultMessage: "进度条线的宽度。" }),
      type: "number",
    },
    {
      name: "trailColor",
      description: formatMessage({ defaultMessage: "剩余进度条颜色。" }),
      type: "string",
    },
    {
      name: "size",
      description: formatMessage({ defaultMessage: "不同尺寸的进度条。" }),
      type: "'small' | 'default' | 'mini' | 'large'",
      defaultValue: "default",
    },
    {
      name: "status",
      description: formatMessage({ defaultMessage: "进度条状态。" }),
      type: "'success' | 'error' | 'normal' | 'warning'",
    },
    {
      name: "type",
      description: formatMessage({ defaultMessage: "进度条类型。" }),
      type: "'line' | 'circle'",
      defaultValue: "line",
    },
    {
      name: "bufferColor",
      description: formatMessage({ defaultMessage: "缓冲区的颜色。" }),
      type: "string | object",
    },
    {
      name: "color",
      description: formatMessage({
        defaultMessage: "进度条颜色，优先级高于 status。传入对象时，会显示渐变色进度条。",
      }),
      type: "string | { [key: string]: string }",
    },
    {
      name: "width",
      description: formatMessage({
        defaultMessage: "进度条的宽度。circle 类型的进度条仅支持数字类型的width。",
      }),
      type: "string | number",
    },
    {
      name: "formatText",
      description: formatMessage({ defaultMessage: "进度条文本函数。" }),
      type: "(percent: number) => ReactNode",
    },
  ];

  return (
    <Unstyled>
      <Title>{formatMessage({ defaultMessage: "进度条 Progress" })}</Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "给予用户当前系统执行中任务运行状态的反馈，多用于运行一段时间的场景，有效减轻用户在等待中产生的焦虑感。",
        })}
      </Paragraph>

      <Title heading={2}>{formatMessage({ defaultMessage: "示例" })}</Title>

      <Title heading={3} id="default">
        {formatMessage({ defaultMessage: "基础用法" })}
      </Title>
      <Canvas of={Stories.Default} />

      <Title heading={3} id="status">
        {formatMessage({ defaultMessage: "进度条状态" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "可以通过设置 status 使进度条显示内置的状态样式。",
        })}
      </Paragraph>
      <Canvas of={Stories.Status} />

      <Title heading={3} id="circle-status">
        {formatMessage({ defaultMessage: "环形进度条" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "type = circle 时候，将会展示环形进度条。",
        })}
      </Paragraph>
      <Canvas of={Stories.CircleStatus} />

      <Title heading={3} id="mini">
        {formatMessage({ defaultMessage: "迷你进度条" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "size = mini 时，将会展示微型进度条。",
        })}
      </Paragraph>
      <Canvas of={Stories.Mini} />

      <Title heading={3} id="size">
        {formatMessage({ defaultMessage: "不同尺寸" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "设置size为 small、default、large，可设置小、中、大三种尺寸。",
        })}
      </Paragraph>
      <Canvas of={Stories.Size} />

      <Title heading={3} id="animation">
        {formatMessage({ defaultMessage: "动画效果" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "设置 animation 为 true 时，将会显示动画效果，仅当 type = line 时生效。",
        })}
      </Paragraph>
      <Canvas of={Stories.Animation} />

      <Title heading={3} id="color">
        {formatMessage({ defaultMessage: "进度条颜色" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "color传入对象时， 会作为 linear-gradient 的属性值设置渐变色。",
        })}
      </Paragraph>
      <Canvas of={Stories.Color} />

      <Title heading={3} id="trail-color">
        {formatMessage({ defaultMessage: "剩余进度条颜色" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "可以通过 trailColor 设置剩余进度条的颜色。",
        })}
      </Paragraph>
      <Canvas of={Stories.TrailColor} />

      <Title heading={3} id="steps">
        {formatMessage({ defaultMessage: "步骤进度条" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "可以通过设置 steps 展示步骤进度条。",
        })}
      </Paragraph>
      <Canvas of={Stories.Steps} />

      <Title heading={2}>{formatMessage({ defaultMessage: "用法" })}</Title>
      <Source
        code={`import { Progress, ProgressProps } from "@gio-design/react";`}
        language="typescript"
      />

      <Title id="props" heading={3}>
        Progress Props
      </Title>
      <PropsTable data={data} />
    </Unstyled>
  );
}

export default injectIntl(DocPage);
