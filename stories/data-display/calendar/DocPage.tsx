import { injectIntl, IntlShape } from "react-intl";
import { Canvas, Unstyled, Source } from "@storybook/addon-docs/blocks";
import PropsTable, { type PropsTableData } from "@/components/props-table";
import { Typography } from "@/src";
import * as CalendarStories from "./index.stories";

const { Title, Paragraph } = Typography;

function DocPage({ intl }: { intl: IntlShape }) {
  const { formatMessage } = intl;

  const data: PropsTableData[] = [
    {
      name: "allowSelect",
      description: formatMessage({
        defaultMessage:
          "是否允许选中和切换日期，`panel` 模式下默认可选中切换。",
      }),
      type: "boolean",
    },
    {
      name: "isWeek",
      description: formatMessage({ defaultMessage: "周选择。" }),
      type: "boolean",
    },
    {
      name: "panel",
      description: formatMessage({
        defaultMessage: "是否放在容器中进行展示。",
      }),
      type: "boolean",
    },
    {
      name: "panelTodayBtn",
      description: formatMessage({
        defaultMessage: "是否显示跳转到今天的按钮。",
      }),
      type: "boolean",
    },
    {
      name: "defaultMode",
      description: formatMessage({
        defaultMessage: "选择日期的月日历和选择月份的年日历。",
      }),
      type: "'day' | 'week' | 'month' | 'year'",
      defaultValue: "month",
    },
    {
      name: "headerType",
      description: formatMessage({
        defaultMessage:
          "有两种头部可供选择，默认的按钮类型和下拉框类型，只在全屏日历模式下生效。",
      }),
      type: "'button' | 'select'",
      defaultValue: "button",
    },
    {
      name: "mode",
      description: formatMessage({
        defaultMessage: "选择日期的月日历和选择月份的年日历，受控模式。",
      }),
      type: "'day' | 'week' | 'month' | 'year'",
    },
    {
      name: "panelOperations",
      description: formatMessage({
        defaultMessage: "卡片模式下配置操作按钮。",
      }),
      type: "Array<'left' | 'double-left' | 'right' | 'double-right'>",
    },
    {
      name: "dayStartOfWeek",
      description: formatMessage({
        defaultMessage: "每周的第一天开始于周几，0 - 周日，1 - 周一。",
      }),
      type: "0 | 1",
      defaultValue: "0",
    },
    {
      name: "locale",
      description: formatMessage({ defaultMessage: "国际化配置。" }),
      type: "Record<string, any>",
    },
    {
      name: "panelWidth",
      description: formatMessage({ defaultMessage: "卡片模式的宽度。" }),
      type: "number | string",
      defaultValue: "265",
    },
    {
      name: "dateInnerContent",
      description: formatMessage({
        defaultMessage:
          "定制日期单元格，内容会被添加到单元格内，只在全屏日历模式下生效。",
      }),
      type: "(currentDate: Dayjs) => ReactNode",
    },
    {
      name: "dateRender",
      description: formatMessage({
        defaultMessage: "定制日期显示，会完全覆盖日期单元格。",
      }),
      type: "(currentDate: Dayjs) => ReactNode",
    },
    {
      name: "disabledDate",
      description: formatMessage({ defaultMessage: "不可选取的时间。" }),
      type: "(current: Dayjs) => boolean",
    },
    {
      name: "headerRender",
      description: formatMessage({ defaultMessage: "自定义头部渲染。" }),
      type: "(props: {value?: Dayjs; pageShowDate?: Dayjs; mode?: string; onChange; onChangePageDate; onChangeMode;}) => ReactNode",
    },
    {
      name: "monthRender",
      description: formatMessage({
        defaultMessage: "定制月份显示，会完全覆盖月份单元格。",
      }),
      type: "(currentDate: Dayjs) => ReactNode",
    },
    {
      name: "onChange",
      description: formatMessage({ defaultMessage: "日期变化触发的回调。" }),
      type: "(date: Dayjs) => void",
    },
    {
      name: "onPanelChange",
      description: formatMessage({
        defaultMessage: "面板日期发生改变触发的回调。",
      }),
      type: "(date: Dayjs) => void",
    },
  ];

  return (
    <Unstyled>
      <Title>{formatMessage({ defaultMessage: "日历 Calendar" })}</Title>

      <Title heading={2}>{formatMessage({ defaultMessage: "示例" })}</Title>

      <Title heading={3} id="basic">
        {formatMessage({ defaultMessage: "基础用法" })}
      </Title>
      <Canvas of={CalendarStories.Basic} />

      <Title heading={3} id="header-type">
        {formatMessage({ defaultMessage: "下拉选择的头部" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "除了默认的头部切换外，也支持下拉选择的头部，更快速的定位。",
        })}
      </Paragraph>
      <Canvas of={CalendarStories.HeaderType} />

      <Title heading={3} id="panel">
        {formatMessage({ defaultMessage: "卡片日历" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "设置 panel=true，可以使用卡片日历。",
        })}
      </Paragraph>
      <Canvas of={CalendarStories.Panel} />

      <Title heading={2}>{formatMessage({ defaultMessage: "用法" })}</Title>
      <Source
        code={`import { Calendar, type CalendarProps } from "growingio-design";`}
        language="tsx"
      />

      <Title id="props" heading={3}>
        CalendarProps
      </Title>
      <PropsTable data={data} />
    </Unstyled>
  );
}

const IntlDocPage = injectIntl(DocPage);
export default IntlDocPage;
