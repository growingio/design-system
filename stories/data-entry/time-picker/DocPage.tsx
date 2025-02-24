import { injectIntl, IntlShape } from "react-intl";
import { Canvas, Unstyled, Source } from "@storybook/blocks";
import PropsTable, { type PropsTableData } from "../../../components/props-table";
import { Typography } from "../../../src";
import * as TimePickerStories from "./index.stories";

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
      name: "disableConfirm",
      description: formatMessage({
        defaultMessage: "禁用确认步骤，开启后直接点选时间不需要点击确认按钮。",
      }),
      type: "boolean",
    },
    {
      name: "disabled",
      description: formatMessage({ defaultMessage: "是否禁用。" }),
      type: "boolean",
    },
    {
      name: "editable",
      description: formatMessage({ defaultMessage: "是否可手动输入。" }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "error",
      description: formatMessage({ defaultMessage: "是否是错误状态。" }),
      type: "boolean",
    },
    {
      name: "hideDisabledOptions",
      description: formatMessage({ defaultMessage: "隐藏禁止选择的选项。" }),
      type: "boolean",
    },
    {
      name: "popupVisible",
      description: formatMessage({
        defaultMessage: "控制弹出框打开或者关闭。",
      }),
      type: "boolean",
    },
    {
      name: "scrollSticky",
      description: formatMessage({
        defaultMessage: "时间列在滚动的时候自动吸附和选中。",
      }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "unmountOnExit",
      description: formatMessage({
        defaultMessage: "是否在关闭后销毁 dom 结构。",
      }),
      type: "boolean",
    },
    {
      name: "use12Hours",
      description: formatMessage({ defaultMessage: "12 小时制。" }),
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
      name: "format",
      description: formatMessage({
        defaultMessage: "展示日期的格式，参考 [dayjs](https://github.com/iamkun/dayjs)。",
      }),
      type: "string",
      defaultValue: "HH:mm:ss",
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
      defaultValue: "bl",
    },
    {
      name: "size",
      description: formatMessage({ defaultMessage: "输入框尺寸。" }),
      type: "'mini' | 'small' | 'default' | 'large'",
    },
    {
      name: "extra",
      description: formatMessage({ defaultMessage: "底部附加内容。" }),
      type: "ReactNode",
    },
    {
      name: "prefix",
      description: formatMessage({ defaultMessage: "前缀。" }),
      type: "ReactNode",
    },
    {
      name: "triggerElement",
      description: formatMessage({ defaultMessage: "触发元素。" }),
      type: "ReactNode",
    },
    {
      name: "icons",
      description: formatMessage({ defaultMessage: "用于配置图标。" }),
      type: "{ inputSuffix?: ReactNode }",
    },
    {
      name: "placeholder",
      description: formatMessage({ defaultMessage: "提示文案。" }),
      type: "string | string[]",
    },
    {
      name: "step",
      description: formatMessage({
        defaultMessage: "设置时/分/秒的选择间隔。",
      }),
      type: "{ hour?: number; minute?: number; second?: number }",
    },
    {
      name: "triggerProps",
      description: formatMessage({
        defaultMessage: "可以传入 `Trigger` 组件的参数。",
      }),
      type: "Partial<TriggerProps>",
    },
    {
      name: "disabledHours",
      description: formatMessage({ defaultMessage: "禁用的部分小时选项。" }),
      type: "() => number[]",
    },
    {
      name: "disabledMinutes",
      description: formatMessage({ defaultMessage: "禁用的部分分钟选项。" }),
      type: "(selectedHour) => number[]",
    },
    {
      name: "disabledSeconds",
      description: formatMessage({ defaultMessage: "禁用的部分秒数选项。" }),
      type: "(selectedHour, selectedMinute) => number[]",
    },
    {
      name: "getPopupContainer",
      description: formatMessage({ defaultMessage: "弹出框挂载的父节点。" }),
      type: "(node: HTMLElement) => Element",
    },
    {
      name: "onClear",
      description: formatMessage({ defaultMessage: "点击清除按钮的回调。" }),
      type: "() => void",
    },
  ];
  const timePickerData: PropsTableData[] = [
    {
      name: "showNowBtn",
      description: formatMessage({
        defaultMessage: "是否显示选择当前时间的按钮。",
      }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "defaultValue",
      description: formatMessage({ defaultMessage: "默认时间。" }),
      type: "CalendarValue",
    },
    {
      name: "value",
      description: formatMessage({ defaultMessage: "组件的值，受控模式。" }),
      type: "CalendarValue",
    },
    {
      name: "onChange",
      description: formatMessage({ defaultMessage: "选择时间时的回调。" }),
      type: "(valueString: string, value: Dayjs) => void",
    },
    {
      name: "onSelect",
      description: formatMessage({
        defaultMessage: "组件值发生改变时的回调。",
      }),
      type: "(valueString: string, value: Dayjs) => void",
    },
  ];
  const rangePickerData: PropsTableData[] = [
    {
      name: "order",
      description: formatMessage({ defaultMessage: "起止时间是否自动排序。" }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "defaultValue",
      description: formatMessage({ defaultMessage: "默认时间。" }),
      type: "CalendarValue[]",
    },
    {
      name: "placeholder",
      description: formatMessage({ defaultMessage: "提示文案。" }),
      type: "string[]",
    },
    {
      name: "value",
      description: formatMessage({ defaultMessage: "日历组件的值。" }),
      type: "CalendarValue[]",
    },
    {
      name: "onChange",
      description: formatMessage({
        defaultMessage: "日历组件值发生改变时的回调。",
      }),
      type: "(valueString: string[], value: Dayjs[]) => void",
    },
    {
      name: "onSelect",
      description: formatMessage({ defaultMessage: "选择日期时的回调。" }),
      type: "(valueString: string[], value: Dayjs[]) => void",
    },
  ];

  return (
    <Unstyled>
      <Title>{formatMessage({ defaultMessage: "时间选择器 TimePicker" })}</Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "在弹出面板上选择时间，以便捷完成时间输入的控件。",
        })}
      </Paragraph>

      <Title heading={2}>{formatMessage({ defaultMessage: "示例" })}</Title>

      <Title heading={3} id="basic">
        {formatMessage({ defaultMessage: "基础用法" })}
      </Title>
      <Canvas of={TimePickerStories.Basic} />

      <Title heading={3} id="status">
        {formatMessage({ defaultMessage: "不同状态" })}
      </Title>
      <Canvas of={TimePickerStories.Status} />

      <Title heading={3} id="prefix">
        {formatMessage({ defaultMessage: "前缀" })}
      </Title>
      <Paragraph>{formatMessage({ defaultMessage: "通过 prefix 属性设置前缀。" })}</Paragraph>
      <Canvas of={TimePickerStories.Prefix} />

      <Title heading={3} id="size">
        {formatMessage({ defaultMessage: "尺寸" })}
      </Title>
      <Paragraph>{formatMessage({ defaultMessage: "有四种尺寸可供选择。" })}</Paragraph>
      <Canvas of={TimePickerStories.Size} />

      <Title heading={3} id="format">
        {formatMessage({ defaultMessage: "定制时分" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "通过设置 format，可以定制需要显示的时、分、秒。",
        })}
      </Paragraph>
      <Canvas of={TimePickerStories.Format} />

      <Title heading={3} id="step">
        {formatMessage({ defaultMessage: "定制步长" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "通过设置 step，可以定制需要显示的时、分、秒的步长。",
        })}
      </Paragraph>
      <Canvas of={TimePickerStories.Step} />

      <Title heading={3} id="extra">
        {formatMessage({ defaultMessage: "附加内容" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "选择框底部显示自定义的内容。",
        })}
      </Paragraph>
      <Canvas of={TimePickerStories.Extra} />

      <Title heading={3} id="disabled-time">
        {formatMessage({ defaultMessage: "禁用部分时间选项" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "通过设置 disabledHours disabledMinutes disabledSeconds，可以禁用时/分/秒的部分选项。",
        })}
      </Paragraph>
      <Canvas of={TimePickerStories.DisabledTime} />

      <Title heading={3} id="use-12-hours">
        {formatMessage({ defaultMessage: "十二小时制" })}
      </Title>
      <Canvas of={TimePickerStories.Use12Hours} />

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
      <Canvas of={TimePickerStories.UtcOffset} />

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
      <Canvas of={TimePickerStories.Timezone} />

      <Title heading={3} id="time-range-picker">
        {formatMessage({ defaultMessage: "范围选择器" })}
      </Title>
      <Canvas of={TimePickerStories.TimeRangePicker} />

      <Title heading={2}>{formatMessage({ defaultMessage: "用法" })}</Title>
      <Source
        code={`import { TimePicker, type TimePickerProps } from "growingio-design";`}
        language="tsx"
      />

      <Title id="props" heading={3}>
        PickerProps
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "TimePicker 和 RangePicker 的通用属性。",
        })}
      </Paragraph>
      <PropsTable data={data} />

      <Title id="time-picker-props" heading={3}>
        TimePickerProps
      </Title>
      <PropsTable data={timePickerData} />

      <Title id="range-picker-props" heading={3}>
        TimePicker.RangePicker Props
      </Title>
      <PropsTable data={rangePickerData} />

      <Title id="calendar-value" heading={3}>
        CalendarValue
      </Title>
      <Source code={`export type CalendarValue = Dayjs | Date | string | number;`} language="ts" />
    </Unstyled>
  );
}

export default injectIntl(DocPage);
