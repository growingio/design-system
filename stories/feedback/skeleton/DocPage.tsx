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
      description: formatMessage({ defaultMessage: "是否显示动画效果。" }),
      type: "boolean",
    },
    {
      name: "loading",
      description: formatMessage({ defaultMessage: "是否显示子组件。为 true 时候显示占位符。" }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "image",
      description: formatMessage({ defaultMessage: "是否显示图片占位。" }),
      type: "SkeletonImageProps | boolean",
    },
    {
      name: "text",
      description: formatMessage({ defaultMessage: "是否显示文本占位。" }),
      type: "SkeletonTextProps | boolean",
      defaultValue: "true",
    },
  ];
  const imagePropsData: PropsTableData[] = [
    {
      name: "shape",
      description: formatMessage({ defaultMessage: "图片形状。" }),
      type: "'circle' | 'square'",
    },
    {
      name: "size",
      description: formatMessage({ defaultMessage: "图片尺寸。" }),
      type: "'small' | 'default' | 'large'",
    },
    {
      name: "position",
      description: formatMessage({ defaultMessage: "图片位置。" }),
      type: "'left' | 'right'",
    },
    {
      name: "prefixCls",
      description: formatMessage({ defaultMessage: "节点样式类名前缀。" }),
      type: "string",
    },
  ];
  const textPropsData: PropsTableData[] = [
    {
      name: "rows",
      description: formatMessage({ defaultMessage: "文本行数。" }),
      type: "'circle' | 'square'",
    },
    {
      name: "width",
      description: formatMessage({ defaultMessage: "文本行宽。" }),
      type: "number | string | (string | number)[]",
    },
    {
      name: "prefixCls",
      description: formatMessage({ defaultMessage: "节点样式类名前缀。" }),
      type: "string",
    },
  ];

  return (
    <Unstyled>
      <Title>{formatMessage({ defaultMessage: "进度条 Skeleton" })}</Title>
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

      <Title heading={3} id="animation">
        {formatMessage({ defaultMessage: "动画" })}
      </Title>
      <Canvas of={Stories.Animation} />

      <Title heading={3} id="text">
        {formatMessage({ defaultMessage: "文本" })}
      </Title>
      <Canvas of={Stories.Text} />

      <Title heading={3} id="image">
        {formatMessage({ defaultMessage: "图片" })}
      </Title>
      <Canvas of={Stories.Image} />

      <Title heading={2}>{formatMessage({ defaultMessage: "用法" })}</Title>
      <Source
        code={`import { Skeleton, SkeletonProps } from "@gio-design/react";`}
        language="typescript"
      />

      <Title id="props" heading={3}>
        Skeleton Props
      </Title>
      <PropsTable data={data} />

      <Title id="image-props" heading={3}>
        SkeletonImageProps
      </Title>
      <PropsTable data={imagePropsData} />

      <Title id="text-props" heading={3}>
        SkeletonTextProps
      </Title>
      <PropsTable data={textPropsData} />
    </Unstyled>
  );
}

export default injectIntl(DocPage);
