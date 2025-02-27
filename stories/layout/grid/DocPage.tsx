import { FormattedMessage, injectIntl, IntlShape } from "react-intl";
import { Canvas, Unstyled, Source } from "@storybook/blocks";
import { Typography } from "@/src";
import PropsTable, { type PropsTableData } from "../../../components/props-table";
import * as Stories from "./index.stories";

const { Title, Paragraph } = Typography;

function DocPage({ intl }: { intl: IntlShape }) {
  const { formatMessage } = intl;

  const rowPropsData: PropsTableData[] = [
    {
      name: "div",
      description: formatMessage({
        defaultMessage:
          "开启这个选项 Row 和 Col 都会被当作 div 而不会附带任何 Grid 相关的类和样式。",
      }),
      type: "boolean",
    },
    {
      name: "align",
      description: formatMessage({ defaultMessage: "竖直对齐方式 (align-items)。" }),
      type: "'start' | 'center' | 'end' | 'stretch'",
      defaultValue: "start",
    },
    {
      name: "justify",
      description: formatMessage({ defaultMessage: "水平对齐方式 (justify-content)。" }),
      type: "'start' | 'center' | 'end' | 'space-around' | 'space-between'",
      defaultValue: "start",
    },
    {
      name: "gutter",
      description: formatMessage({
        defaultMessage:
          "栅格间隔，单位是px。栅格间隔。可传入响应式对象写法 '{ xs: 4, sm: 6, md: 12}'，传入数组 [ 水平间距， 垂直间距 ] 来设置两个方向。",
      }),
      type: "GridRowGutter | Array<GridRowGutter>",
      defaultValue: "0",
    },
  ];
  const colPropsData: PropsTableData[] = [
    {
      name: "offset",
      description: formatMessage({ defaultMessage: "栅格左侧的间隔格数，间隔内不可以有栅格。" }),
      type: "number",
    },
    {
      name: "order",
      description: formatMessage({ defaultMessage: "栅格顺序。" }),
      type: "number",
    },
    {
      name: "pull",
      description: formatMessage({ defaultMessage: "栅格向左移动格数。" }),
      type: "number",
    },
    {
      name: "push",
      description: formatMessage({ defaultMessage: "栅格向右移动格数。" }),
      type: "number",
    },
    {
      name: "span",
      description: formatMessage({ defaultMessage: "栅格占位格数。" }),
      type: "number",
      defaultValue: "24",
    },
    {
      name: "flex",
      description: formatMessage({ defaultMessage: "设置 flex 布局属性。" }),
      type: "FlexType",
    },
    {
      name: "xxxl",
      description: formatMessage({ defaultMessage: "≥ 2000px 响应式栅格。" }),
      type: "number | { [key: string]: any }",
    },
    {
      name: "xxl",
      description: formatMessage({ defaultMessage: "≥ 1600px 响应式栅格。" }),
      type: "number | { [key: string]: any }",
    },
    {
      name: "xl",
      description: formatMessage({ defaultMessage: "≥ 1200px 响应式栅格。" }),
      type: "number | { [key: string]: any }",
    },
    {
      name: "lg",
      description: formatMessage({ defaultMessage: "≥ 992px 响应式栅格。" }),
      type: "number | { [key: string]: any }",
    },
    {
      name: "md",
      description: formatMessage({ defaultMessage: "≥ 768px 响应式栅格。" }),
      type: "number | { [key: string]: any }",
    },
    {
      name: "sm",
      description: formatMessage({ defaultMessage: "≥ 576px 响应式栅格。" }),
      type: "number | { [key: string]: any }",
    },
    {
      name: "xs",
      description: formatMessage({ defaultMessage: "< 576px 响应式栅格。" }),
      type: "number | { [key: string]: any }",
    },
  ];
  const gridPropsData: PropsTableData[] = [
    {
      name: "collapsed",
      description: formatMessage({ defaultMessage: "是否折叠。" }),
      type: "boolean",
      defaultValue: "false",
    },
    {
      name: "collapsedRows",
      description: formatMessage({ defaultMessage: "折叠时显示的行数。" }),
      type: "number",
      defaultValue: "1",
    },
    {
      name: "colGap",
      description: formatMessage({ defaultMessage: "列与列之间的间距。" }),
      type: "number | ResponsiveValue",
      defaultValue: "0",
    },
    {
      name: "cols",
      description: formatMessage({ defaultMessage: "每一行展示的列数。" }),
      type: "number | ResponsiveValue",
      defaultValue: "24",
    },
    {
      name: "rowGap",
      description: formatMessage({ defaultMessage: "行与行之间的间距。" }),
      type: "number | ResponsiveValue",
      defaultValue: "0",
    },
  ];
  const gridItemPropsData: PropsTableData[] = [
    {
      name: "suffix",
      description: formatMessage({ defaultMessage: "是否是后缀元素。" }),
      type: "boolean",
      defaultValue: "false",
    },
    {
      name: "offset",
      description: formatMessage({ defaultMessage: "左侧的间隔格数。" }),
      type: "number | ResponsiveValue",
      defaultValue: "0",
    },
    {
      name: "span",
      description: formatMessage({ defaultMessage: "跨越的格数。" }),
      type: "number | ResponsiveValue",
      defaultValue: "1",
    },
  ];
  const responsivePropsData: PropsTableData[] = [
    {
      name: "xxxl",
      description: formatMessage({ defaultMessage: "≥ 2000px 响应式栅格。" }),
      type: "number",
    },
    {
      name: "xxl",
      description: formatMessage({ defaultMessage: "≥ 1600px 响应式配置。" }),
      type: "number",
    },
    {
      name: "xl",
      description: formatMessage({ defaultMessage: "≥ 1200px 响应式配置。" }),
      type: "number",
    },
    {
      name: "lg",
      description: formatMessage({ defaultMessage: "≥ 992px 响应式配置。" }),
      type: "number",
    },
    {
      name: "md",
      description: formatMessage({ defaultMessage: "≥ 768px 响应式配置。" }),
      type: "number",
    },
    {
      name: "sm",
      description: formatMessage({ defaultMessage: "≥ 576px 响应式配置。" }),
      type: "number",
    },

    {
      name: "xs",
      description: formatMessage({ defaultMessage: "< 576px 响应式配置。" }),
      type: "number",
    },
  ];

  return (
    <Unstyled>
      <Title>
        <FormattedMessage defaultMessage="栅格 Grid" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="24 栅格系统。" />
      </Paragraph>

      <Title heading={2}>
        <FormattedMessage defaultMessage="示例" />
      </Title>

      <Title heading={3} id="basic">
        <FormattedMessage defaultMessage="基础栅格" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="从堆叠到水平排列。使用单一的一组 Row 和 Col 栅格组件，就可以创建一个基本的栅格系统，所有列（Col）必须放在 Row 内。" />
      </Paragraph>
      <Canvas of={Stories.Basic} />

      <Title heading={3} id="offset">
        <FormattedMessage defaultMessage="栅格平移" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="指定 offset 可以对栅格进行平移操作。" />
      </Paragraph>
      <Canvas of={Stories.Offset} />

      <Title heading={3} id="pull-push">
        <FormattedMessage defaultMessage="左右移动" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="指定 pull 和 push 可以对栅格进行拉伸和收缩操作。" />
      </Paragraph>
      <Canvas of={Stories.PullPush} />

      <Title heading={3} id="gutter">
        <FormattedMessage defaultMessage="间距" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="指定 gutter 可以对栅格进行间距操作。" />
      </Paragraph>
      <Canvas of={Stories.Gutter} />

      <Title heading={3} id="justify">
        <FormattedMessage defaultMessage="水平对齐" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="指定 justify 可以对栅格进行水平对齐。" />
      </Paragraph>
      <Canvas of={Stories.Justify} />

      <Title heading={3} id="align">
        <FormattedMessage defaultMessage="垂直对齐" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="指定 align 可以对栅格进行垂直对齐。" />
      </Paragraph>
      <Canvas of={Stories.Align} />

      <Title heading={3} id="order">
        <FormattedMessage defaultMessage="顺序" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="指定 order 可以对栅格指定顺序。" />
      </Paragraph>
      <Canvas of={Stories.Order} />

      <Title heading={3} id="responsive">
        <FormattedMessage defaultMessage="响应式" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="预置六种响应尺寸, 分别为 xs, sm, md, lg, xl, xxl。" />
      </Paragraph>
      <Canvas of={Stories.Responsive} />

      <Title heading={3} id="flex">
        <FormattedMessage defaultMessage="Flex 布局" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="通过设置 Col 组件的 flex 属性，可以任意配置 flex 布局。" />
      </Paragraph>
      <Canvas of={Stories.Flex} />

      <Title heading={3} id="collapsed-grid">
        <FormattedMessage defaultMessage="折叠栅格" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="基于 CSS 的 Grid 布局实现的布局组件，支持折叠，并且可以设置后缀节点，后缀节点会显示在一行的结尾。" />
      </Paragraph>
      <Canvas of={Stories.CollapsedGrid} />

      <Title heading={2}>
        <FormattedMessage defaultMessage="用法" />
      </Title>
      <Source code={`import { Grid } from "@giod/react";`} language="tsx" />

      <Title id="row-props" heading={3}>
        RowProps
      </Title>
      <PropsTable data={rowPropsData} />

      <Title id="col-props" heading={3}>
        ColProps
      </Title>
      <PropsTable data={colPropsData} />

      <Title id="grid-props" heading={3}>
        GridProps
      </Title>
      <PropsTable data={gridPropsData} />

      <Title id="grid-item-props" heading={3}>
        GridItemProps
      </Title>
      <PropsTable data={gridItemPropsData} />

      <Title id="responsive-value" heading={3}>
        ResponsiveValue
      </Title>
      <PropsTable data={responsivePropsData} includeCommonProps={false} />
    </Unstyled>
  );
}

const IntlDocPage = injectIntl(DocPage);
export default IntlDocPage;
