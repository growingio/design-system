import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import dayjs from "dayjs";
import { Button, DatePicker, Radio, Select, Space, Typography } from "../../../src";
import { IconInfoCircle } from "@arco-iconbox/react-growingio";
import { SizeType } from "../../../src/_core/types";
import { Alert } from "@arco-design/web-react";

const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
  title: "Components/Data Entry/DatePicker",
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Basic: Story = {
  args: {
    style: { width: 200 },
  },
  render: (args) => <DatePicker {...args} />,
};

export const Status: Story = {
  args: {
    ...Basic.args,
  },
  render: (args, { intl: { formatMessage } }) => (
    <Space>
      <DatePicker {...args} disabled placeholder={formatMessage({ defaultMessage: "禁用状态" })} />
      <DatePicker {...args} error placeholder={formatMessage({ defaultMessage: "错误状态" })} />
    </Space>
  ),
};

export const Prefix: Story = {
  ...Basic,
  args: {
    ...Basic.args,
    prefix: <IconInfoCircle />,
  },
};

export const ShowTime: Story = {
  args: {
    ...Basic.args,
    showTime: true,
  },
  render: (args) => (
    <Space>
      <DatePicker {...args} format="YYYY-MM-DD HH:mm:ss" />
      <DatePicker {...args} format="YYYY-MM-DD hh:mm A" />
    </Space>
  ),
};

export const DefaultAndFormat: Story = {
  name: "Default & Format",
  args: {
    ...Basic.args,
  },
  render: (args, { intl: { formatMessage } }) => (
    <Space>
      <DatePicker {...args} defaultValue="2023-10-24" />
      <DatePicker {...args} defaultValue="2023-10-24 10:24" format="YYYY-MM-DD HH:mm" showTime />
      <DatePicker
        {...args}
        defaultValue="2023-10-24"
        format={(v) =>
          `${formatMessage(
            {
              defaultMessage: "自定义：{date}",
            },
            { date: v.format("YYYY-MM-DD") },
          )}`
        }
      />
    </Space>
  ),
};

export const DisabledDate: Story = {
  args: {
    ...Basic.args,
    disabledDate: (current) => current.date() > 15,
  },
  render: (args) => (
    <Space>
      <DatePicker {...args} />
      <DatePicker
        {...args}
        showTime
        disabledTime={() => {
          return {
            disabledHours: () => [1, 2, 3, 4],
            disabledMinutes: () => [5, 10, 15, 20],
            disabledSeconds: () => [25, 30, 35, 40],
          };
        }}
      />
    </Space>
  ),
};

export const Shortcuts: Story = {
  args: {
    ...Basic.args,
  },
  render: (args, { intl: { formatMessage } }) => {
    const shortcuts = [
      {
        text: formatMessage({ defaultMessage: "昨天" }),
        value: () => dayjs().subtract(1, "day"),
      },
      {
        text: formatMessage({ defaultMessage: "一周后" }),
        value: () => dayjs().add(1, "week"),
      },
      {
        text: formatMessage({ defaultMessage: "一个月前" }),
        value: () => dayjs().subtract(1, "month"),
      },
    ];
    return (
      <Space>
        <DatePicker {...args} shortcuts={shortcuts} />
        <DatePicker {...args} shortcuts={shortcuts} shortcutsPlacementLeft />
      </Space>
    );
  },
};

export const Size: Story = {
  args: {
    ...Basic.args,
  },
  render: (args, { intl: { formatMessage } }) => {
    const [size, setSize] = useState<SizeType>("default");
    return (
      <Space size="large" direction="vertical">
        <Radio.Group type="button" name="size" value={size} onChange={setSize}>
          <Radio value="mini">{formatMessage({ defaultMessage: "迷你" })}</Radio>
          <Radio value="small">{formatMessage({ defaultMessage: "小" })}</Radio>
          <Radio value="default">{formatMessage({ defaultMessage: "中" })}</Radio>
          <Radio value="large">{formatMessage({ defaultMessage: "大" })}</Radio>
        </Radio.Group>
        <DatePicker {...args} size={size} />
      </Space>
    );
  },
};

export const Extra: Story = {
  ...Basic,
  args: {
    ...Basic.args,
    extra: "Extra footer",
  },
};

export const DateRender: Story = {
  ...Basic,
  args: {
    ...Basic.args,
    dateRender: (current) => {
      const date = current.date();
      const highlightDates = [6, 14, 22];
      return (
        <div className="arco-picker-date">
          <div
            className="arco-picker-date-value"
            style={
              highlightDates.indexOf(date) > -1 ? { border: "1px solid rgb(var(--primary-6))" } : {}
            }
          >
            {current.date()}
          </div>
        </div>
      );
    },
  },
};

export const TriggerElement: Story = {
  args: {
    ...Basic.args,
  },
  render: (args, { intl: { formatMessage } }) => {
    const [value, setValue] = useState<string>();
    return (
      <DatePicker
        {...args}
        triggerElement={<Button>{value || formatMessage({ defaultMessage: "请选择日期" })}</Button>}
        value={value}
        onChange={(v) => setValue(v)}
      />
    );
  },
};

export const OnlyPanel: Story = {
  ...Basic,
  args: {
    style: { width: 300 },
    triggerElement: null,
  },
};

export const UtcOffset: Story = {
  name: "UTC Offset",
  args: {
    ...Basic.args,
    format: "YYYY-MM-DD HH:mm:ss",
    showTime: true,
  },
  render: (args) => {
    const [utcOffset, setUtcOffset] = useState(0);
    const [value, setValue] = useState(new Date("2023-10-24 10:24:00"));

    const utcList = [];
    let uo = -12;

    for (let i = 0; i < 25; i++) {
      utcList[i] = {
        label: `UTC ${uo ? (uo > 0 ? `+${uo}` : uo) : ""}`,
        value: uo++,
      };
    }

    return (
      <Space direction="vertical">
        <Space>
          <Select
            defaultValue={utcOffset}
            options={utcList}
            onChange={(offset) => setUtcOffset(offset)}
            triggerProps={{
              autoAlignPopupWidth: false,
              position: "bl",
            }}
          />
          <DatePicker
            {...args}
            utcOffset={utcOffset}
            value={value}
            onChange={(_, vd) => setValue(vd && vd.toDate())}
          />
        </Space>
        <Alert
          showIcon={false}
          content={
            <Space direction="vertical">
              <div>
                <Typography.Text bold>Locale String:</Typography.Text>{" "}
                {value.toLocaleString("en-US")}
              </div>
              <div>
                <Typography.Text bold>ISO String:</Typography.Text> {value.toISOString()}
              </div>
              <div>
                <Typography.Text bold>Timestamp:</Typography.Text> {value.valueOf()}
              </div>
            </Space>
          }
        />
      </Space>
    );
  },
};

export const Timezone: Story = {
  args: {
    ...Basic.args,
    format: "YYYY-MM-DD HH:mm:ss",
    showTime: true,
  },
  render: (args) => {
    const zoneList = ["America/Los_Angeles", "Europe/London", "Africa/Cairo", "Asia/Shanghai"];
    const defaultValue = new Date("2023-10-24 10:24:00");
    const [timezone, setTimezone] = useState("Asia/Shanghai");
    const [value, setValue] = useState(defaultValue);
    return (
      <Space direction="vertical">
        <Space>
          <Select
            defaultValue={timezone}
            options={zoneList}
            onChange={(tz) => setTimezone(tz)}
            triggerProps={{
              autoAlignPopupWidth: false,
              position: "bl",
            }}
          />
          <DatePicker
            {...args}
            timezone={timezone}
            defaultValue={defaultValue}
            onChange={(_, vd) => setValue(vd && vd.toDate())}
          />
        </Space>
        <Alert
          showIcon={false}
          content={
            <Space direction="vertical">
              <div>
                <Typography.Text bold>Locale String:</Typography.Text>{" "}
                {value.toLocaleString("en-US")}
              </div>
              <div>
                <Typography.Text bold>ISO String:</Typography.Text> {value.toISOString()}
              </div>
              <div>
                <Typography.Text bold>Timestamp:</Typography.Text> {value.valueOf()}
              </div>
            </Space>
          }
        />
      </Space>
    );
  },
};

const { RangePicker, WeekPicker, MonthPicker, QuarterPicker, YearPicker } = DatePicker;

type RangePickerStory = StoryObj<typeof RangePicker>;

export const DateRangePicker: RangePickerStory = {
  name: "RangePicker",
  args: {
    style: { width: 300 },
  },
  render: (args, { intl: { formatMessage } }) => (
    <Space direction="vertical" size="large">
      <Space>
        <RangePicker {...args} />
      </Space>
      <Space>
        <RangePicker
          {...args}
          disabled
          placeholder={[
            formatMessage({ defaultMessage: "禁用状态" }),
            formatMessage({ defaultMessage: "禁用状态" }),
          ]}
        />
        <RangePicker
          {...args}
          error
          placeholder={[
            formatMessage({ defaultMessage: "错误状态" }),
            formatMessage({ defaultMessage: "错误状态" }),
          ]}
        />
      </Space>
      <Space>
        <RangePicker {...args} prefix={<IconInfoCircle />} />
      </Space>
      <Space>
        <RangePicker {...args} showTime style={{ width: 360 }} />
      </Space>
      <Space wrap>
        <RangePicker {...args} mode="month" />
        <RangePicker {...args} mode="quarter" />
        <RangePicker {...args} mode="year" />
        <RangePicker {...args} mode="week" />
      </Space>
      <Space wrap align="start">
        <RangePicker {...args} size="mini" />
        <RangePicker {...args} size="small" />
        <RangePicker {...args} size="default" />
        <RangePicker {...args} size="large" />
      </Space>
      <Space>
        <RangePicker {...args} triggerElement={null} style={{ width: 500 }} />
      </Space>
    </Space>
  ),
};

type WeekPickerStory = StoryObj<typeof WeekPicker>;

export const DateWeekPicker: WeekPickerStory = {
  name: "WeekPicker",
  args: {
    style: { width: 200 },
  },
  render: (args, { intl: { formatMessage } }) => (
    <Space direction="vertical" size="large">
      <Space>
        <WeekPicker {...args} />
      </Space>
      <Space>
        <WeekPicker
          {...args}
          disabled
          placeholder={[
            formatMessage({ defaultMessage: "禁用状态" }),
            formatMessage({ defaultMessage: "禁用状态" }),
          ]}
        />
        <WeekPicker
          {...args}
          error
          placeholder={[
            formatMessage({ defaultMessage: "错误状态" }),
            formatMessage({ defaultMessage: "错误状态" }),
          ]}
        />
      </Space>
      <Space>
        <WeekPicker {...args} prefix={<IconInfoCircle />} />
      </Space>

      <Space wrap align="start">
        <WeekPicker {...args} size="mini" />
        <WeekPicker {...args} size="small" />
        <WeekPicker {...args} size="default" />
        <WeekPicker {...args} size="large" />
      </Space>
      <Space>
        <WeekPicker {...args} triggerElement={null} style={{ width: 300 }} />
      </Space>
    </Space>
  ),
};

type MonthPickerStory = StoryObj<typeof MonthPicker>;

export const DateMonthPicker: MonthPickerStory = {
  name: "MonthPicker",
  args: {
    style: { width: 200 },
  },
  render: (args, { intl: { formatMessage } }) => (
    <Space direction="vertical" size="large">
      <Space>
        <MonthPicker {...args} />
      </Space>
      <Space>
        <MonthPicker
          {...args}
          disabled
          placeholder={[
            formatMessage({ defaultMessage: "禁用状态" }),
            formatMessage({ defaultMessage: "禁用状态" }),
          ]}
        />
        <MonthPicker
          {...args}
          error
          placeholder={[
            formatMessage({ defaultMessage: "错误状态" }),
            formatMessage({ defaultMessage: "错误状态" }),
          ]}
        />
      </Space>
      <Space>
        <MonthPicker {...args} prefix={<IconInfoCircle />} />
      </Space>

      <Space wrap align="start">
        <MonthPicker {...args} size="mini" />
        <MonthPicker {...args} size="small" />
        <MonthPicker {...args} size="default" />
        <MonthPicker {...args} size="large" />
      </Space>
      <Space>
        <MonthPicker {...args} triggerElement={null} style={{}} />
      </Space>
    </Space>
  ),
};

type QuarterPickerStory = StoryObj<typeof QuarterPicker>;

export const DateQuarterPicker: QuarterPickerStory = {
  name: "QuarterPicker",
  args: {
    style: { width: 200 },
  },
  render: (args, { intl: { formatMessage } }) => (
    <Space direction="vertical" size="large">
      <Space>
        <QuarterPicker {...args} />
      </Space>
      <Space>
        <QuarterPicker
          {...args}
          disabled
          placeholder={[
            formatMessage({ defaultMessage: "禁用状态" }),
            formatMessage({ defaultMessage: "禁用状态" }),
          ]}
        />
        <QuarterPicker
          {...args}
          error
          placeholder={[
            formatMessage({ defaultMessage: "错误状态" }),
            formatMessage({ defaultMessage: "错误状态" }),
          ]}
        />
      </Space>
      <Space>
        <QuarterPicker {...args} prefix={<IconInfoCircle />} />
      </Space>

      <Space wrap align="start">
        <QuarterPicker {...args} size="mini" />
        <QuarterPicker {...args} size="small" />
        <QuarterPicker {...args} size="default" />
        <QuarterPicker {...args} size="large" />
      </Space>
      <Space>
        <QuarterPicker {...args} triggerElement={null} style={{}} />
      </Space>
    </Space>
  ),
};

type YearPickerStory = StoryObj<typeof YearPicker>;

export const DateYearPicker: YearPickerStory = {
  name: "YearPicker",
  args: {
    style: { width: 200 },
  },
  render: (args, { intl: { formatMessage } }) => (
    <Space direction="vertical" size="large">
      <Space>
        <YearPicker {...args} />
      </Space>
      <Space>
        <YearPicker
          {...args}
          disabled
          placeholder={[
            formatMessage({ defaultMessage: "禁用状态" }),
            formatMessage({ defaultMessage: "禁用状态" }),
          ]}
        />
        <YearPicker
          {...args}
          error
          placeholder={[
            formatMessage({ defaultMessage: "错误状态" }),
            formatMessage({ defaultMessage: "错误状态" }),
          ]}
        />
      </Space>
      <Space>
        <YearPicker {...args} prefix={<IconInfoCircle />} />
      </Space>

      <Space wrap align="start">
        <YearPicker {...args} size="mini" />
        <YearPicker {...args} size="small" />
        <YearPicker {...args} size="default" />
        <YearPicker {...args} size="large" />
      </Space>
      <Space>
        <YearPicker {...args} triggerElement={null} style={{}} />
      </Space>
    </Space>
  ),
};
