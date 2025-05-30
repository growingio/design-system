import { FormattedMessage, injectIntl, IntlShape } from "react-intl";
import { Canvas, Unstyled, Source } from "@storybook/addon-docs/blocks";
import PropsTable, { type PropsTableData } from "@/components/props-table";
import { Typography } from "@/src";
import * as Stories from "./index.stories";

const { Title, Paragraph } = Typography;

function DocPage({ intl }: { intl: IntlShape }) {
  const { formatMessage } = intl;
  const data: PropsTableData[] = [
    {
      name: "extra",
      description: formatMessage({ defaultMessage: "展示额外内容。" }),
      type: "ReactNode",
    },
    {
      name: "footer",
      description: formatMessage({ defaultMessage: "底部内容。" }),
      type: "ReactNode",
    },
    {
      name: "subTitle",
      description: formatMessage({ defaultMessage: "次级标题。" }),
      type: "ReactNode",
    },
    {
      name: "title",
      description: formatMessage({ defaultMessage: "主标题。" }),
      type: "ReactNode",
    },
    {
      name: "backIcon",
      description: formatMessage({ defaultMessage: "返回图标，设置为 `false` 时会隐藏图标。" }),
      type: "ReactNode | boolean",
    },
    {
      name: "breadcrumb",
      description: formatMessage({
        defaultMessage:
          "面包屑，接受面包屑的所有属性, [BreadcrumbProps](/react/components/breadcrumb)。",
      }),
      type: "BreadcrumbProps",
    },
    {
      name: "onBack",
      description: formatMessage({ defaultMessage: "点击返回图标的回调。" }),
      type: "(e: MouseEvent) => void",
    },
  ];

  return (
    <Unstyled>
      <Title>
        <FormattedMessage defaultMessage="页头 PageHeader" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="页头位于页容器中，页容器顶部，起到了内容概览和引导页级操作的作用。包括由面包屑、标题等内容" />
      </Paragraph>

      <Title heading={2}>
        <FormattedMessage defaultMessage="示例" />
      </Title>

      <Title heading={3} id="transparent">
        <FormattedMessage defaultMessage="默认样式" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="默认是没有底色的，如果有需要可以通过style或类名设置不同底色。" />
      </Paragraph>
      <Canvas of={Stories.Transparent} />

      <Title heading={3} id="all">
        <FormattedMessage defaultMessage="组合展示" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="展示组件提供的完整能力。" />
      </Paragraph>
      <Canvas of={Stories.All} />

      <Title heading={2}>{formatMessage({ defaultMessage: "用法" })}</Title>
      <Source
        code={`import { PageHeader, type PageHeaderProps } from "@giod/react";`}
        language="tsx"
      />

      <Title id="page-header-props" heading={3}>
        PageHeaderProps
      </Title>
      <PropsTable data={data} />
    </Unstyled>
  );
}

const IntlDocPage = injectIntl(DocPage);
export default IntlDocPage;
