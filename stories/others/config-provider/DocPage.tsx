import { injectIntl, IntlShape } from "react-intl";
import { Canvas, Unstyled, Source } from "@storybook/blocks";
import PropsTable, { type PropsTableData } from "../../../components/props-table";
import { Typography } from "../../../src";
import * as ConfigProviderStories from "./index.stories";

const { Title, Paragraph } = Typography;

function DocPage({ intl }: { intl: IntlShape }) {
  const { formatMessage } = intl;

  const data: PropsTableData[] = [];

  return (
    <Unstyled>
      <Title>{formatMessage({ defaultMessage: "全局配置 ConfigProvider" })}</Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "在应用的最外层进行配置，一次设置，全局生效。一般用于设置国际化语言等功能。",
        })}
      </Paragraph>

      <Title heading={2}>{formatMessage({ defaultMessage: "示例" })}</Title>

      <Title heading={3} id="basic">
        {formatMessage({ defaultMessage: "基础用法" })}
      </Title>
      <Paragraph>{formatMessage({ defaultMessage: "基础用法" })}</Paragraph>
      <Canvas of={ConfigProviderStories.Basic} />

      <Title heading={2}>{formatMessage({ defaultMessage: "用法" })}</Title>
      <Source
        code={`import { ConfigProvider, type ConfigProviderProps } from "growingio-design";`}
        language="tsx"
      />

      <Title id="props" heading={3}>
        ConfigProviderProps
      </Title>
      <PropsTable data={data} />
    </Unstyled>
  );
}

const IntlDocPage = injectIntl(DocPage);
export default IntlDocPage;
