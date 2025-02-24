import { injectIntl, IntlShape } from "react-intl";
import { Canvas, Unstyled, Source } from "@storybook/blocks";
import PropsTable, { type PropsTableData } from "../../../components/props-table";
import { Typography } from "../../../src";
import * as WatermarkStories from "./index.stories";

const { Title, Paragraph } = Typography;

function DocPage({ intl }: { intl: IntlShape }) {
  const { formatMessage } = intl;

  const data: PropsTableData[] = [
    {
      name: "rotate",
      description: formatMessage({ defaultMessage: "单个水印旋转角度。" }),
      type: "number",
      defaultValue: "-30",
    },
    {
      name: "image",
      description: formatMessage({
        defaultMessage: "水印图片源，优先级比文字内容高。",
      }),
      type: "string",
    },
    {
      name: "content",
      description: formatMessage({ defaultMessage: "水印的文字内容。" }),
      type: "string | string[]",
    },
    {
      name: "fontStyle",
      description: formatMessage({ defaultMessage: "水印文字样式。" }),
      type: "{ color?: string; fontFamily?: string; fontSize?: number | string; fontWeight?: number | string; }",
      defaultValue:
        "{ color: 'rgba(2, 6, 14, 0.18)', fontFamily: 'sans-serif', fontSize: '14px', fontWeight: 'normal' }",
    },
    {
      name: "gap",
      description: formatMessage({ defaultMessage: "水印间的间距。" }),
      type: "[number, number]",
      defaultValue: "[100, 100]",
    },
    {
      name: "height",
      description: formatMessage({ defaultMessage: "单个水印的高度。" }),
      type: "number | string",
    },
    {
      name: "offset",
      description: formatMessage({
        defaultMessage: "水印相对于 `container` 容器的偏移量。",
      }),
      type: "[number, number]",
      defaultValue: "[gaps[0] / 2, gaps[1] / 2]",
    },
    {
      name: "width",
      description: formatMessage({
        defaultMessage: "单个水印的宽度。`image` 时默认为 100，content 时默认为文本宽度。",
      }),
      type: "number | string",
    },
    {
      name: "zIndex",
      description: formatMessage({ defaultMessage: "zIndex。" }),
      type: "string | number",
      defaultValue: "9999",
    },
    {
      name: "getContainer",
      description: formatMessage({
        defaultMessage:
          "添加水印的容器 `wrapper`，会把水印 `DOM` 作为 `container` 的第一个子节点展示。",
      }),
      type: "() => HTMLElement",
      defaultValue: "() => document.body",
    },
  ];

  return (
    <Unstyled>
      <Title>{formatMessage({ defaultMessage: "水印 Watermark" })}</Title>

      <Title heading={2}>{formatMessage({ defaultMessage: "示例" })}</Title>

      <Title heading={3} id="basic">
        {formatMessage({ defaultMessage: "基础用法" })}
      </Title>
      <Canvas of={WatermarkStories.Basic} />

      <Title heading={3} id="container">
        {formatMessage({ defaultMessage: "挂载节点" })}
      </Title>
      <Paragraph>{formatMessage({ defaultMessage: "通过 getContainer 设置挂载节点" })}</Paragraph>
      <Canvas of={WatermarkStories.Container} />

      <Title heading={3} id="image">
        {formatMessage({ defaultMessage: "图片水印" })}
      </Title>
      <Canvas of={WatermarkStories.Image} />

      <Title heading={3} id="content">
        {formatMessage({ defaultMessage: "多行文本" })}
      </Title>
      <Canvas of={WatermarkStories.Content} />

      <Title heading={3} id="custom">
        {formatMessage({ defaultMessage: "自定义" })}
      </Title>
      <Canvas of={WatermarkStories.Custom} />

      <Title heading={2}>{formatMessage({ defaultMessage: "用法" })}</Title>
      <Source
        code={`import { Watermark, type WatermarkProps } from "growingio-design";`}
        language="tsx"
      />

      <Title id="props" heading={3}>
        WatermarkProps
      </Title>
      <PropsTable data={data} />
    </Unstyled>
  );
}

const IntlDocPage = injectIntl(DocPage);
export default IntlDocPage;
