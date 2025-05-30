import { FormattedMessage, injectIntl, IntlShape } from "react-intl";
import { Canvas, Unstyled, Source } from "@storybook/addon-docs/blocks";
import PropsTable, { type PropsTableData } from "../../../components/props-table";
import { Typography } from "../../../src";
import * as EmptyStories from "./index.stories";

const { Title, Paragraph } = Typography;

function DocPage({ intl: { formatMessage } }: { intl: IntlShape }) {
  const data: PropsTableData[] = [
    {
      name: "imgSrc",
      description: formatMessage({ defaultMessage: "将图标替换为图片。" }),
      type: "string",
    },
    {
      name: "description",
      description: formatMessage({ defaultMessage: "显示文案。" }),
      type: "ReactNode",
    },
    {
      name: "icon",
      description: formatMessage({ defaultMessage: "自定义显示图案。" }),
      type: "ReactNode",
    },
    {
      name: "size",
      description: formatMessage({ defaultMessage: "组件尺寸。" }),
      type: "'small' | 'large'",
    },
  ];

  return (
    <Unstyled>
      <Title>{formatMessage({ defaultMessage: "空状态 Empty" })}</Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "指当前场景没有对应的数据内容，呈现出的一种状态。",
        })}
      </Paragraph>

      <Title heading={2}>{formatMessage({ defaultMessage: "示例" })}</Title>
      <Title id="basic" heading={3}>
        {formatMessage({ defaultMessage: "基本用法" })}
      </Title>
      <Paragraph>{formatMessage({ defaultMessage: "Empty 空状态组件的基础用法。" })}</Paragraph>
      <Canvas of={EmptyStories.Basic} />

      <Title id="icon-desc" heading={3}>
        {formatMessage({ defaultMessage: "图标和文案" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "可以通过 icon 参数传入自定义图标，description 修改显示文案。",
        })}
      </Paragraph>
      <Canvas of={EmptyStories.IconDesc} />

      <Title id="image" heading={3}>
        {formatMessage({ defaultMessage: "图片" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "可以通过 imgSrc 参数传入图片 Url。",
        })}
      </Paragraph>
      <Canvas of={EmptyStories.Image} />

      <Title id="sizes" heading={3}>
        {formatMessage({ defaultMessage: "空状态尺寸" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "空状态分为：大型、小型2种尺寸。可在不同场景及不同业务需求选择适合尺寸。可控制按钮不显示及显示几个。",
        })}
      </Paragraph>
      <Canvas of={EmptyStories.Sizes} />

      <Title id="styles" heading={3}>
        {formatMessage({ defaultMessage: "空状态样式" })}
      </Title>
      <Canvas of={EmptyStories.Styles} />

      <Title heading={2}>
        <FormattedMessage defaultMessage="用法" />
      </Title>
      <Source code={`import { Empty, type EmptyProps } from "growingio-design";`} language="tsx" />

      <Title id="button-props" heading={3}>
        EmptyProps
      </Title>
      <PropsTable data={data} />
    </Unstyled>
  );
}

export default injectIntl(DocPage);
