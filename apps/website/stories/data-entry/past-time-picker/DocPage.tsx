import { injectIntl, IntlShape } from "react-intl";
import { Canvas, Source, Unstyled } from "@storybook/blocks";
import { Typography } from "@giod/react/src";
import PropsTable, { type PropsTableData } from "@/components/props-table";
import * as Stories from "./index.stories";

const { Title } = Typography;

function DocPage({ intl }: { intl: IntlShape }) {
  const { formatMessage } = intl;
  const data: PropsTableData[] = [];

  return (
    <Unstyled>
      <Title>
        {formatMessage({ defaultMessage: "过去周期选择器 PastPeriodPicker" })}
      </Title>

      <Title heading={2}>{formatMessage({ defaultMessage: "示例" })}</Title>

      <Title heading={3} id="default">
        {formatMessage({ defaultMessage: "基础用法" })}
      </Title>
      <Canvas of={Stories.Default} />

      <Title heading={3} id="Shortcuts">
        {formatMessage({ defaultMessage: "常用时间" })}
      </Title>
      <Canvas of={Stories.Shortcuts} />

      <Title heading={3} id="absolute">
        {formatMessage({ defaultMessage: "自定义" })}
      </Title>
      <Canvas of={Stories.Absolute} />

      <Title heading={2}>{formatMessage({ defaultMessage: "用法" })}</Title>
      <Source
        code={`import { PastPeriodPicker, type PastPeriodPickerProps } from "@giod/react";`}
        language="tsx"
      />

      <Title id="button-props" heading={3}>
        PastPeriodPickerProps
      </Title>
      <PropsTable data={data} />
    </Unstyled>
  );
}

const IntlDocPage = injectIntl(DocPage);

export default IntlDocPage;
