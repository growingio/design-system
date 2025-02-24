import { FormattedMessage, injectIntl, IntlShape } from "react-intl";
import { Canvas, Unstyled, Source } from "@storybook/blocks";
import PropsTable, { type PropsTableData } from "@/components/props-table";
import { Typography } from "@/src";
import * as IconStories from "./index.stories";
import IconPanel from "./IconPanel";

const { Title, Paragraph } = Typography;

function DocPage({ intl: { formatMessage } }: { intl: IntlShape }) {
  const data: PropsTableData[] = [
    {
      name: "spin",
      description: formatMessage({ defaultMessage: "是否旋转。" }),
      type: "boolean",
      defaultValue: "false",
    },
  ];

  return (
    <Unstyled>
      <Title>{formatMessage({ defaultMessage: "图标 Icon" })}</Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "这里有 GrowingIO Design 内置的大量图标。",
        })}
      </Paragraph>

      <IconPanel />

      <Title heading={2}>{formatMessage({ defaultMessage: "示例" })}</Title>

      <Title heading={3} id="basic">
        {formatMessage({ defaultMessage: "基础用法" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "通过 <IconXxx /> 的形式即可使用Icon。",
        })}
      </Paragraph>
      <Canvas of={IconStories.Basic} />

      <Title heading={3} id="spin">
        {formatMessage({ defaultMessage: "加载中" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "通过指定 spin 字段，可以将图标设置为旋转状态。",
        })}
      </Paragraph>
      <Canvas of={IconStories.Spin} />

      <Title heading={2}>
        <FormattedMessage defaultMessage="用法" />
      </Title>
      <Source
        code={`import { IconXxx } from "@arco-iconbox/react-growingio";`}
        language="tsx"
      />
      <Title id="result-props" heading={3}>
        IconProps
      </Title>
      <PropsTable data={data} />
    </Unstyled>
  );
}

const IntlDocPage = injectIntl(DocPage);
export default IntlDocPage;
