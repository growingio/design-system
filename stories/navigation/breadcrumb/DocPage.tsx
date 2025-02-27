import { FormattedMessage, injectIntl, IntlShape } from "react-intl";
import { Canvas, Unstyled, Source } from "@storybook/blocks";
import PropsTable, { type PropsTableData } from "../../../components/props-table";
import { Typography } from "../../../src";
import * as DropdownStories from "./index.stories";

const { Title, Paragraph } = Typography;

function DocPage({ intl }: { intl: IntlShape }) {
  const { formatMessage } = intl;
  const data = [
    {
      name: "maxCount",
      description: formatMessage({ defaultMessage: "最多渲染的面包屑数量。" }),
      type: "number",
    },
    {
      name: "separator",
      description: formatMessage({ defaultMessage: "指定分割符。" }),
      type: "string | ReactNode",
      defaultValue: "<IconObliqueLine />",
    },
    {
      name: "routes",
      description: formatMessage({ defaultMessage: "直接设置面包屑。[RouteProps](#route-props)" }),
      type: "RouteProps[]",
    },
    {
      name: "itemRender",
      description: formatMessage({ defaultMessage: "routes 时生效，自定义渲染面包屑。" }),
      type: "(route: RouteProps, routes: RouteProps[], paths: string[]) => ReactNode",
    },
  ];
  const itemPropsData = [
    {
      name: "href",
      description: formatMessage({ defaultMessage: "超链接地址。" }),
      type: "string",
    },
    {
      name: "dropdownProps",
      description: formatMessage({
        defaultMessage:
          "下拉菜单的属性 [DropdownProps](/docs/components-navigation-dropdown--docs#dropdown-props)。",
      }),
      type: "DropdownProps",
    },
    {
      name: "droplist",
      description: formatMessage({
        defaultMessage: "下拉菜单的内容，等同于下拉菜单组件的 droplist 属性。",
      }),
      type: "DropdownProps['droplist']",
    },
    {
      name: "tagName",
      description: formatMessage({ defaultMessage: "标签名，可以是 html 标签或是组件。" }),
      type: "string | React.FC<any> | React.ComponentClass<any>",
      defaultValue: "div",
    },
    {
      name: "onClick",
      description: formatMessage({ defaultMessage: "点击回调。" }),
      type: "(e: any) => void",
    },
  ];
  const routePropsData = [
    {
      name: "path",
      description: formatMessage({ defaultMessage: "路径。" }),
      type: "string",
    },
    {
      name: "breadcrumbName",
      description: formatMessage({ defaultMessage: "面包屑名称。" }),
      type: "string",
    },
    {
      name: "children",
      description: formatMessage({ defaultMessage: "子路径。" }),
      type: "{path:string; breadcrumbName:string}[]",
    },
  ];

  return (
    <Unstyled>
      <Title>
        <FormattedMessage defaultMessage="面包屑 Breadcrumb" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="面包屑是辅助导航模式，用于识别页面在层次结构内的位置，并根据需要向上返回。" />
      </Paragraph>

      <Title heading={2}>
        <FormattedMessage defaultMessage="示例" />
      </Title>

      <Title heading={3} id="basic">
        <FormattedMessage defaultMessage="基础用法" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="适用于广泛基本用法。分隔方式分为图标分隔及斜线分隔两种方式，可根据不同场景使用。" />
      </Paragraph>
      <Canvas of={DropdownStories.Basic} />

      <Title heading={3} id="separator">
        <FormattedMessage defaultMessage="自定义分隔符" />
      </Title>
      <Canvas of={DropdownStories.Separator} />

      <Title heading={3} id="icon">
        <FormattedMessage defaultMessage="自定义图标" />
      </Title>
      <Canvas of={DropdownStories.Icon} />

      <Title heading={3} id="dropdown">
        <FormattedMessage defaultMessage="下拉菜单" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="通过 droplist 或者 routes 来指定下拉菜单。" />
      </Paragraph>
      <Canvas of={DropdownStories.Dropdown} />

      <Title heading={3} id="max-count">
        <FormattedMessage defaultMessage="显示省略" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="通过 maxCount 来指定最多渲染的面包屑数量，超出的部分将显示为省略号。" />
      </Paragraph>
      <Canvas of={DropdownStories.MaxCount} />

      <Title heading={2}>{formatMessage({ defaultMessage: "用法" })}</Title>
      <Source
        code={`import { Breadcrumb, type BreadcrumbProps } from "@giod/react";\nconst { Item } = Breadcrumb;`}
        language="tsx"
      />

      <Title id="breadcrumb-props" heading={3}>
        BreadcrumbProps
      </Title>
      <PropsTable data={data} />

      <Title id="breadcrumb-item-props" heading={3}>
        Breadcrumb.Item Props
      </Title>
      <PropsTable data={itemPropsData} />

      <Title id="route-props" heading={3}>
        RouteProps
      </Title>
      <PropsTable data={routePropsData} includeCommonProps={false} />
    </Unstyled>
  );
}

const IntlDocPage = injectIntl(DocPage);
export default IntlDocPage;
