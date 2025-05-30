import { injectIntl, IntlShape } from "react-intl";
import { Canvas, Unstyled, Source } from "@storybook/addon-docs/blocks";
import PropsTable, { type PropsTableData } from "../../../components/props-table";
import { Typography } from "../../../src";
import * as DatePickerStories from "./index.stories";

const { Title, Paragraph } = Typography;

function DocPage({ intl }: { intl: IntlShape }) {
  const { formatMessage } = intl;

  const data: PropsTableData[] = [
    {
      name: "allowClear",
      description: formatMessage({ defaultMessage: "允许清除。" }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "editable",
      description: formatMessage({ defaultMessage: "是否可输入。" }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "error",
      description: formatMessage({
        defaultMessage: "是否是错误状态。",
      }),
      type: "boolean",
    },
    {
      name: "hideNotInViewDates",
      description: formatMessage({
        defaultMessage: "面板隐藏不在当前时间范围的灰色日期。",
      }),
      type: "boolean",
    },
    {
      name: "popupVisible",
      description: formatMessage({
        defaultMessage: "指定弹框打开或者关闭状态。",
      }),
      type: "boolean",
    },
    {
      name: "shortcutsPlacementLeft",
      description: formatMessage({
        defaultMessage: "预设范围选择放在面板左侧，用于大量预设时间的场景。",
      }),
      type: "boolean",
    },
    {
      name: "unmountOnExit",
      description: formatMessage({
        defaultMessage: "是否在隐藏的时候销毁 DOM 结构。",
      }),
      type: "boolean",
    },
    {
      name: "utcOffset",
      description: formatMessage({
        defaultMessage: "设置时区偏移，如果需要 utc 时间则设置为 0。",
      }),
      type: "number",
    },
    {
      name: "timezone",
      description: formatMessage({
        defaultMessage: "设置时区, 如果设置了 `utcOffset`，则以 `utcOffset` 为准。",
      }),
      type: "string",
    },
    {
      name: "position",
      description: formatMessage({ defaultMessage: "弹出的框的位置。" }),
      type: "'top' | 'tl' | 'tr' | 'bottom' | 'bl' | 'br'",
    },
    {
      name: "size",
      description: formatMessage({ defaultMessage: "日期选择器的尺寸。" }),
      type: "'mini' | 'small' | 'default' | 'large'",
      defaultValue: "'default'",
    },
    {
      name: "extra",
      description: formatMessage({ defaultMessage: "额外的页脚。" }),
      type: "ReactNode",
    },
    {
      name: "prefix",
      description: formatMessage({ defaultMessage: "前缀。" }),
      type: "ReactNode",
    },
    {
      name: "separator",
      description: formatMessage({
        defaultMessage: "范围选择器输入框内的分割符号。",
      }),
      type: "ReactNode",
    },
    {
      name: "triggerElement",
      description: formatMessage({ defaultMessage: "触发元素。" }),
      type: "ReactNode",
    },
    {
      name: "dayStartOfWeek",
      description: formatMessage({
        defaultMessage: "每周的第一天开始于周几，0 - 周日，1 - 周一，以此类推。",
      }),
      type: "0 | 1 | 2 | 3 | 4 | 5 | 6",
    },
    {
      name: "defaultPickerValue",
      description: formatMessage({ defaultMessage: "默认面板显示的日期。" }),
      type: "[CalendarValue](#calendarvalue)",
    },
    {
      name: "disabled",
      description: formatMessage({ defaultMessage: "是否禁用。" }),
      type: "boolean | boolean[]",
    },
    {
      name: "icons",
      description: formatMessage({ defaultMessage: "日历翻页的图标配置。" }),
      type: "{ prev?: ReactNode; prevDouble?: ReactNode; next?: ReactNode; nextDouble?: ReactNode; inputSuffix?: ReactNode; }",
    },
    {
      name: "locale",
      description: formatMessage({ defaultMessage: "国际化配置。" }),
      type: "Record<string, any>",
    },
    {
      name: "pickerValue",
      description: formatMessage({ defaultMessage: "面板显示的日期。" }),
      type: "[CalendarValue](#calendarvalue)",
    },
    {
      name: "placeholder",
      description: formatMessage({ defaultMessage: "提示文案。" }),
      type: "string | string[]",
    },
    {
      name: "shortcuts",
      description: formatMessage({ defaultMessage: "预设时间范围快捷选择。" }),
      type: "[ShortcutType](#shortcuttype)[]",
    },
    {
      name: "triggerProps",
      description: formatMessage({
        defaultMessage: "可以传入 `Trigger` 组件的参数。",
      }),
      type: "Partial<[TriggerProps](trigger#trigger)>",
    },
    {
      name: "dateRender",
      description: formatMessage({
        defaultMessage: "自定义日期单元格的内容。",
      }),
      type: "(currentDate: Dayjs) => ReactNode",
    },
    {
      name: "disabledDate",
      description: formatMessage({ defaultMessage: "不可选取的日期。" }),
      type: "(current: Dayjs) => boolean",
    },
    {
      name: "getPopupContainer",
      description: formatMessage({ defaultMessage: "弹出框挂载的父节点。" }),
      type: "(node: HTMLElement) => Element",
    },
    {
      name: "onChange",
      description: formatMessage({
        defaultMessage: "日历组件值发生改变时的回调。",
      }),
      type: "(dateString: string, date: Dayjs) => void",
    },
    {
      name: "onClear",
      description: formatMessage({ defaultMessage: "点击清除按钮后的回调。" }),
      type: "() => void",
    },
    {
      name: "onOk",
      description: formatMessage({ defaultMessage: "点击确认按钮的回调。" }),
      type: "(dateString: string, date: Dayjs) => void",
    },
    {
      name: "onPickerValueChange",
      description: formatMessage({ defaultMessage: "面板日期改变的回调。" }),
      type: "(dateString: string, value: Dayjs) => void",
    },
    {
      name: "onSelect",
      description: formatMessage({
        defaultMessage: "选中日期发生改变但组件值未改变时的回调。",
      }),
      type: "(dateString: string, date: Dayjs) => void",
    },
    {
      name: "onSelectShortcut",
      description: formatMessage({ defaultMessage: "点击快捷选择时的回调。" }),
      type: "(shortcut: [ShortcutType](#shortcuttype)) => void",
    },
    {
      name: "onVisibleChange",
      description: formatMessage({ defaultMessage: "打开或关闭时的回调。" }),
      type: "(visible?: boolean) => void",
    },
    {
      name: "panelRender",
      description: formatMessage({ defaultMessage: "自定义渲染面板。" }),
      type: "(panelNode: ReactNode) => ReactNode",
    },
  ];

  const datePickerPropsData: PropsTableData[] = [
    {
      name: "showNowBtn",
      description: formatMessage({
        defaultMessage: "是否显示 `showTime` 时，选择当前时间的按钮。",
      }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "defaultValue",
      description: formatMessage({ defaultMessage: "默认日期。" }),
      type: "[CalendarValue](#calendarvalue)",
    },
    {
      name: "showTime",
      description: formatMessage({ defaultMessage: "是否增加时间选择。" }),
      type: "boolean | [TimePickerProps](#timepickerprops)",
    },
    {
      name: "timepickerProps",
      description: formatMessage({
        defaultMessage:
          "时间显示的参数，参考 [TimePickerProps](/docs/base-timepicker--docs#time-picker-props)，作用同 `showTime`。",
      }),
      type: "[TimePickerProps](#timepickerprops)",
    },
    {
      name: "value",
      description: formatMessage({ defaultMessage: "日历组件的值。" }),
      type: "[CalendarValue](#calendarvalue)",
    },
    {
      name: "disabledTime",
      description: formatMessage({ defaultMessage: "不可选取的时间。" }),
      type: "(current?: Dayjs) => [DisabledTimeProps](#disabledtimeprops)",
    },
    {
      name: "format",
      description: formatMessage({
        defaultMessage:
          "展示日期的格式，参考[dayjs](https://github.com/iamkun/dayjs)。使用 `string` 时，可以手动键入和编辑日期。使用 `(value: Dayjs) => string` 时，只能在 Picker 中选取日期。",
      }),
      type: "string | ((value: Dayjs) => string)",
      defaultValue: "`YYYY-MM-DD`",
    },
  ];

  const rangePickerPropsData: PropsTableData[] = [
    {
      name: "clearRangeOnReselect",
      description: formatMessage({
        defaultMessage: "当重新选择范围的时候，会清空之前的范围重新进行选择。",
      }),
      type: "boolean",
    },
    {
      name: "disabledTime",
      description: formatMessage({ defaultMessage: "不可选取的时间。" }),
      type: "(current: Dayjs, type: 'start' | 'end') => [DisabledTimeProps](#disabledtimeprops)",
    },
    {
      name: "mode",
      description: formatMessage({
        defaultMessage: "范围选择器的类型，可以是日期、月份。",
      }),
      type: "'date' | 'month' | 'week' | 'year' | 'quarter'",
      defaultValue: "'date'",
    },
    {
      name: "onSelect",
      description: formatMessage({
        defaultMessage: "选中日期发生改变但组件值未改变时的回调。",
      }),
      type: "(dateString: string[], value: Dayjs[], extra: { type: 'start' | 'end' }) => void",
    },
    {
      name: "triggerElement",
      description: formatMessage({ defaultMessage: "触发元素。" }),
      type: "ReactNode",
    },
    {
      name: "defaultPickerValue",
      description: formatMessage({ defaultMessage: "默认面板显示的日期。" }),
      type: "[CalendarValue](#calendarvalue)[]",
    },
    {
      name: "defaultValue",
      description: formatMessage({ defaultMessage: "默认日期。" }),
      type: "[CalendarValue](#calendarvalue)[]",
    },
    {
      name: "disabled",
      description: formatMessage({ defaultMessage: "是否禁用。" }),
      type: "boolean | boolean[]",
    },
    {
      name: "format",
      description: formatMessage({
        defaultMessage: "展示日期的格式，参考[dayjs](https://github.com/iamkun/dayjs)",
      }),
      type: "string | string[]",
      defaultValue: "'YYYY-MM-DD'",
    },
    {
      name: "pickerValue",
      description: formatMessage({ defaultMessage: "面板显示的日期。" }),
      type: "[CalendarValue](#calendarvalue)[]",
    },
    {
      name: "placeholder",
      description: formatMessage({ defaultMessage: "提示文案。" }),
      type: "string[]",
    },
    {
      name: "showTime",
      description: formatMessage({
        defaultMessage: "是否增加时间选择，如果传入的是个对象，会把参数传给内置的 TimePicker。",
      }),
      type: "boolean | [TimePickerRangeProps](#timepickerrangeprops)",
    },
    {
      name: "timepickerProps",
      description: formatMessage({
        defaultMessage:
          "时间显示的参数，参考 [TimePickerProps](/react/components/time-picker)，作用同 `showTime`。",
      }),
      type: "[TimePickerProps](#timepickerprops)",
    },
    {
      name: "value",
      description: formatMessage({ defaultMessage: "日历组件的值。" }),
      type: "[CalendarValue](#calendarvalue)[]",
    },
    {
      name: "onChange",
      description: formatMessage({
        defaultMessage: "日历组件值发生改变时的回调。",
      }),
      type: "(dateString: string[], date: Dayjs[]) => void",
    },
    {
      name: "onOk",
      description: formatMessage({ defaultMessage: "点击确认按钮的回调。" }),
      type: "(dateString: string[], date: Dayjs[]) => void",
    },
    {
      name: "onPickerValueChange",
      description: formatMessage({ defaultMessage: "面板日期改变的回调。" }),
      type: "(dateString: string[], value: Dayjs[]) => void",
    },
  ];

  const weekPickerPropsData: PropsTableData[] = [
    {
      name: "format",
      description: formatMessage({
        defaultMessage: "展示日期的格式，参考[dayjs](https://github.com/iamkun/dayjs)。",
      }),
      type: "string",
      defaultValue: "`gggg-wo`",
    },
    {
      name: "defaultValue",
      description: formatMessage({ defaultMessage: "默认日期。" }),
      type: "[CalendarValue](#calendarvalue)",
    },
    {
      name: "value",
      description: formatMessage({ defaultMessage: "日历组件的值。" }),
      type: "[CalendarValue](#calendarvalue)",
    },
  ];

  const monthPickerPropsData: PropsTableData[] = [
    {
      name: "format",
      description: formatMessage({
        defaultMessage: "展示日期的格式，参考[dayjs](https://github.com/iamkun/dayjs)。",
      }),
      type: "string",
      defaultValue: "`YYYY-MM`",
    },
    {
      name: "defaultValue",
      description: formatMessage({ defaultMessage: "默认日期。" }),
      type: "[CalendarValue](#calendarvalue)",
    },
    {
      name: "value",
      description: formatMessage({ defaultMessage: "日历组件的值。" }),
      type: "[CalendarValue](#calendarvalue)",
    },
  ];

  const quarterPickerPropsData: PropsTableData[] = [
    {
      name: "format",
      description: formatMessage({
        defaultMessage: "展示日期的格式，参考[dayjs](https://github.com/iamkun/dayjs)。",
      }),
      type: "string",
      defaultValue: "`YYYY-[Q]Q`",
    },
    {
      name: "defaultValue",
      description: formatMessage({ defaultMessage: "默认日期。" }),
      type: "[CalendarValue](#calendarvalue)",
    },
    {
      name: "value",
      description: formatMessage({ defaultMessage: "日历组件的值。" }),
      type: "[CalendarValue](#calendarvalue)",
    },
  ];

  const yearPickerPropsData: PropsTableData[] = [
    {
      name: "format",
      description: formatMessage({
        defaultMessage: "展示日期的格式，参考[dayjs](https://github.com/iamkun/dayjs)。",
      }),
      type: "string",
      defaultValue: "`YYYY`",
    },
    {
      name: "defaultValue",
      description: formatMessage({ defaultMessage: "默认日期。" }),
      type: "[CalendarValue](#calendarvalue)",
    },
    {
      name: "value",
      description: formatMessage({ defaultMessage: "日历组件的值。" }),
      type: "[CalendarValue](#calendarvalue)",
    },
  ];

  return (
    <Unstyled>
      <Title>{formatMessage({ defaultMessage: "日期选择器 DatePicker" })}</Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "选择日期。支持年、月、周、日类型，支持范围选择等。",
        })}
      </Paragraph>

      <Title heading={2}>{formatMessage({ defaultMessage: "示例" })}</Title>

      <Title heading={3} id="basic">
        {formatMessage({ defaultMessage: "基础用法" })}
      </Title>
      <Canvas of={DatePickerStories.Basic} />

      <Title heading={3} id="status">
        {formatMessage({ defaultMessage: "不同状态" })}
      </Title>
      <Canvas of={DatePickerStories.Status} />

      <Title heading={3} id="prefix">
        {formatMessage({ defaultMessage: "带有前缀" })}
      </Title>
      <Paragraph>{formatMessage({ defaultMessage: "通过 prefix 属性设置前缀。" })}</Paragraph>
      <Canvas of={DatePickerStories.Prefix} />

      <Title heading={3} id="show-time">
        {formatMessage({ defaultMessage: "带时间的日期选择" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "使用 showTime 可以使用带时间的日期选择。",
        })}
      </Paragraph>
      <Canvas of={DatePickerStories.ShowTime} />

      <Title heading={3} id="default-format">
        {formatMessage({ defaultMessage: "默认值和自定义格式" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "使用 defaultValue 和 format 来控制默认值和展示格式。",
        })}
      </Paragraph>
      <Canvas of={DatePickerStories.DefaultAndFormat} />

      <Title heading={3} id="disabled-date">
        {formatMessage({ defaultMessage: "不可选取的时间" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "使用 disabledDate 可以禁用某些日期，disabledTime 禁用时间，需要配合 showTime 使用。",
        })}
      </Paragraph>
      <Canvas of={DatePickerStories.DisabledDate} />

      <Title heading={3} id="shortcuts">
        {formatMessage({ defaultMessage: "预设时间快捷选择" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "使用 shortcuts 可以预设时间快捷选择。",
        })}
      </Paragraph>
      <Canvas of={DatePickerStories.Shortcuts} />

      <Title heading={3} id="size">
        {formatMessage({ defaultMessage: "尺寸" })}
      </Title>
      <Paragraph>{formatMessage({ defaultMessage: "有四种尺寸可供选择。" })}</Paragraph>
      <Canvas of={DatePickerStories.Size} />

      <Title heading={3} id="extra">
        {formatMessage({ defaultMessage: "额外的页脚" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "在浮层中加入额外的页脚，以满足某些定制信息的需求。",
        })}
      </Paragraph>
      <Canvas of={DatePickerStories.Extra} />

      <Title heading={3} id="date-render">
        {formatMessage({ defaultMessage: "定制日期单元格" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "利用 dateRender 可以定制日期单元格。",
        })}
      </Paragraph>
      <Canvas of={DatePickerStories.DateRender} />

      <Title heading={3} id="trigger-element">
        {formatMessage({ defaultMessage: "自定义触发元素" })}
      </Title>
      <Canvas of={DatePickerStories.TriggerElement} />

      <Title heading={3} id="only-panel">
        {formatMessage({ defaultMessage: "只使用面板" })}
      </Title>
      <Canvas of={DatePickerStories.OnlyPanel} />

      <Title heading={3} id="utc-offset">
        {formatMessage({ defaultMessage: "UTC" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "通过 utcOffset 字段设置相对 UTC 的时间。",
        })}
      </Paragraph>
      <Paragraph bold>
        {formatMessage({
          defaultMessage:
            "使用 UTC 或者时区时间，传值的时候要用 timestamp 或者 Date 对象，使用字符串不能表示唯一时间，会造成困扰。",
        })}
      </Paragraph>
      <Canvas of={DatePickerStories.UtcOffset} />

      <Title heading={3} id="timezone">
        {formatMessage({ defaultMessage: "时区" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "通过 utcOffset 字段设置相对 UTC 的时间。",
        })}
      </Paragraph>
      <Paragraph bold>
        {formatMessage({
          defaultMessage:
            "使用 UTC 或者时区时间，传值的时候要用 timestamp 或者 Date 对象，使用字符串不能表示唯一时间，会造成困扰。",
        })}
      </Paragraph>
      <Canvas of={DatePickerStories.Timezone} />

      <Title heading={3} id="date-range-picker">
        {formatMessage({ defaultMessage: "日期范围选择器" })}
      </Title>
      <Canvas of={DatePickerStories.DateRangePicker} />

      <Title heading={3} id="date-week-picker">
        {formatMessage({ defaultMessage: "周选择器" })}
      </Title>
      <Canvas of={DatePickerStories.DateWeekPicker} />

      <Title heading={3} id="date-month-picker">
        {formatMessage({ defaultMessage: "月选择器" })}
      </Title>
      <Canvas of={DatePickerStories.DateMonthPicker} />

      <Title heading={3} id="date-querter-picker">
        {formatMessage({ defaultMessage: "季度选择器" })}
      </Title>
      <Canvas of={DatePickerStories.DateQuarterPicker} />

      <Title heading={3} id="date-year-picker">
        {formatMessage({ defaultMessage: "年选择器" })}
      </Title>
      <Canvas of={DatePickerStories.DateYearPicker} />

      <Title heading={3} id="readonly">
        {formatMessage({ defaultMessage: "只读模式" })}
      </Title>
      <Canvas of={DatePickerStories.ReadOnly} />

      <Title heading={2}>{formatMessage({ defaultMessage: "用法" })}</Title>
      <Source
        code={`import { DatePicker, type DatePickerProps } from "@gio-design/react";`}
        language="tsx"
      />

      <Title id="picker-props" heading={3}>
        PickerProps
      </Title>
      <PropsTable data={data} />

      <Title id="date-picker-props" heading={3}>
        DatePickerProps
      </Title>
      <PropsTable data={datePickerPropsData} includeCommonProps={false} />

      <Title id="range-picker-props" heading={3}>
        RangePickerProps
      </Title>
      <PropsTable data={rangePickerPropsData} includeCommonProps={false} />

      <Title id="week-picker-props" heading={3}>
        WeekPickerProps
      </Title>
      <PropsTable data={weekPickerPropsData} includeCommonProps={false} />

      <Title id="month-picker-props" heading={3}>
        MonthPickerProps
      </Title>
      <PropsTable data={monthPickerPropsData} includeCommonProps={false} />

      <Title id="quarter-picker-props" heading={3}>
        QuarterPickerProps
      </Title>
      <PropsTable data={quarterPickerPropsData} includeCommonProps={false} />

      <Title id="year-picker-props" heading={3}>
        YearPickerProps
      </Title>
      <PropsTable data={yearPickerPropsData} includeCommonProps={false} />
    </Unstyled>
  );
}

export default injectIntl(DocPage);
