import { FormattedMessage, injectIntl, IntlShape } from "react-intl";
import { Canvas, Unstyled, Source } from "@storybook/addon-docs/blocks";
import { Typography } from "@/src";
import PropsTable, { type PropsTableData } from "../../../components/props-table";
import * as Stories from "./index.stories";

const { Title, Paragraph } = Typography;

function DocPage({ intl }: { intl: IntlShape }) {
  const { formatMessage } = intl;

  const data: PropsTableData[] = [
    {
      name: "orientation",
      description: formatMessage({ defaultMessage: "分割线文字的位置。" }),
      type: "'left' | 'right' | 'center'",
      defaultValue: "center",
    },
    {
      name: "type",
      description: formatMessage({
        defaultMessage: "分割线的类型，是水平还是竖直，分别对应 `horizontal` 和 `vertical`。",
      }),
      type: "'horizontal' | 'vertical'",
      defaultValue: "horizontal",
    },
  ];

  return (
    <Unstyled>
      <Title>
        <FormattedMessage defaultMessage="分割线 Divider" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="划分内容区域，对模块做分隔。" />
      </Paragraph>

      <Title heading={2}>
        <FormattedMessage defaultMessage="示例" />
      </Title>

      <Title heading={3} id="horizontal-divider">
        <FormattedMessage defaultMessage="水平分割" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="对不同章节的文本段落进行分割。" />
      </Paragraph>
      <Canvas of={Stories.HorizontalDivider} />

      <Title heading={3} id="text-divider">
        <FormattedMessage defaultMessage="文字分割" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="通过 orientation 指定分割线文字的位置。" />
      </Paragraph>
      <Canvas of={Stories.TextDivider} />

      <Title heading={3} id="vertical-divider">
        <FormattedMessage defaultMessage="垂直分割" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="指定 type 为 vertical 即可使用竖直分割线。竖直分割线不能带文字。" />
      </Paragraph>
      <Canvas of={Stories.VerticalDivider} />

      <Title heading={2}>
        <FormattedMessage defaultMessage="用法" />
      </Title>
      <Source code={`import { Divider, type DividerProps } from "@giod/react";`} language="tsx" />

      <Title id="divider-props" heading={3}>
        DividerProps
      </Title>
      <PropsTable data={data} />
    </Unstyled>
  );
}

const IntlDocPage = injectIntl(DocPage);
export default IntlDocPage;
