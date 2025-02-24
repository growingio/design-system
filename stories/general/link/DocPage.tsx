import { FormattedMessage, injectIntl, IntlShape } from "react-intl";
import { Canvas, Unstyled, Source } from "@storybook/blocks";
import { Typography } from "@/src";
import PropsTable, { type PropsTableData } from "../../../components/props-table";
import * as Stories from "./index.stories";

const { Title, Paragraph } = Typography;

function DocPage({ intl }: { intl: IntlShape }) {
  const { formatMessage } = intl;

  const data: PropsTableData[] = [
    {
      name: "disabled",
      description: formatMessage({ defaultMessage: "是否禁用" }),
      type: "boolean",
      defaultValue: "-",
    },
    {
      name: "hoverable",
      description: formatMessage({ defaultMessage: "悬浮状态是否有底色" }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "status",
      description: formatMessage({ defaultMessage: "不同状态" }),
      type: "'error' | 'success' | 'warning'",
      defaultValue: "-",
    },
    {
      name: "className",
      description: formatMessage({ defaultMessage: "节点类名" }),
      type: "string | string[]",
      defaultValue: "-",
    },
    {
      name: "icon",
      description: formatMessage({ defaultMessage: "显示图标，设置为 `true` 时展示默认图标" }),
      type: "ReactNode | boolean",
      defaultValue: "-",
    },
    {
      name: "style",
      description: formatMessage({ defaultMessage: "节点样式" }),
      type: "CSSProperties",
      defaultValue: "-",
    },
  ];

  return (
    <Unstyled>
      <Title>
        <FormattedMessage defaultMessage="链接 Link" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="与按钮相比，链接不太突出，因此通常将其用作可选操作。" />
      </Paragraph>

      <Title heading={2}>
        <FormattedMessage defaultMessage="示例" />
      </Title>

      <Title heading={3} id="basic-links">
        <FormattedMessage defaultMessage="基础用法" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="链接的基本样式。" />
      </Paragraph>
      <Canvas of={Stories.BasicLinks} />

      <Title heading={3} id="link-status">
        <FormattedMessage defaultMessage="链接状态" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="失败、警告、成功等其他状态下操作，可出现不同样式的链接。" />
      </Paragraph>
      <Canvas of={Stories.LinkStatus} />

      <Title heading={3} id="icon-links">
        <FormattedMessage defaultMessage="图标" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="通过 Icon 属性设置带图标的链接，设置为 true 时候显示默认图标。" />
      </Paragraph>
      <Canvas of={Stories.IconLinks} />

      <Title heading={3} id="hoverable">
        <FormattedMessage defaultMessage="悬浮状态" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="可以通过 hoverable 属性设置是否在悬浮状态时隐藏底色。" />
      </Paragraph>
      <Canvas of={Stories.Hoverable} />

      <Title heading={3} id="with-dropdown">
        <FormattedMessage defaultMessage="配合下拉菜单使用" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="配合下拉菜单实现带下拉选择的链接。" />
      </Paragraph>
      <Canvas of={Stories.WithDropdown} />

      <Title heading={2}>
        <FormattedMessage defaultMessage="用法" />
      </Title>
      <Source code={`import { Link, type LinkProps } from "@giod/react";`} language="tsx" />

      <Title id="link-props" heading={3}>
        LinkProps
      </Title>
      <PropsTable data={data} />
    </Unstyled>
  );
}

const IntlDocPage = injectIntl(DocPage);
export default IntlDocPage;
