import type { Meta, StoryObj } from "@storybook/react";
import dayjs from "dayjs";
import quarterOfYear from "dayjs/plugin/quarterOfYear";
import { Select, Space } from "@giod/react/src";
import PastTimeTrigger from "@giod/react/src/_past-time-trigger";

dayjs.extend(quarterOfYear);

const meta: Meta<typeof PastTimeTrigger> = {
  component: PastTimeTrigger,
  title: "Development/Internal/PastTimeTrigger",
};
export default meta;

type Story = StoryObj<typeof PastTimeTrigger>;

export const Placeholder: Story = {
  args: {},
  render: (args, { intl: { formatMessage } }) => (
    <PastTimeTrigger
      {...args}
      placeholder={formatMessage({ defaultMessage: "请选择时间范围" })}
    />
  ),
};

export const Shortcuts: Story = {
  args: {},
  render: (args, { intl: { formatMessage } }) => (
    <Space size="large" wrap>
      <PastTimeTrigger
        {...args}
        value="day:8,1"
        shortcut={formatMessage({ defaultMessage: "过去7天" })}
        startDate={dayjs().subtract(7, "d").format("YYYY.MM.DD")}
        endDate={dayjs().subtract(1, "d").format("YYYY.MM.DD")}
      />

      <PastTimeTrigger
        {...args}
        value="day:2,1"
        shortcut={formatMessage({ defaultMessage: "今日" })}
        startDate={dayjs().format("YYYY.MM.DD")}
      />

      <PastTimeTrigger
        {...args}
        value="quarter:2,1"
        shortcut={formatMessage({ defaultMessage: "上季度" })}
        startDate={dayjs().add(-1, "Q").startOf("Q").format("YYYY.MM.DD")}
        endDate={dayjs().add(-1, "Q").endOf("Q").format("YYYY.MM.DD")}
      />

      <PastTimeTrigger.Group>
        <PastTimeTrigger
          {...args}
          value="week:1,0"
          shortcut={formatMessage({ defaultMessage: "本周" })}
          startDate={dayjs().startOf("w").format("YYYY.MM.DD")}
          endDate={dayjs().endOf("w").format("YYYY.MM.DD")}
        />
        <Select
          size="small"
          defaultValue="today"
          options={[
            {
              label: formatMessage({ defaultMessage: "至昨日" }),
              value: "yestoday",
            },
            {
              label: formatMessage({ defaultMessage: "至今日" }),
              value: "today",
            },
          ]}
        />
      </PastTimeTrigger.Group>

      <PastTimeTrigger.Group>
        <PastTimeTrigger
          {...args}
          value="week:1,0"
          shortcut={formatMessage({ defaultMessage: "本周" })}
          startDate={dayjs().startOf("w").format("YYYY.MM.DD")}
          endDate={dayjs().endOf("w").format("YYYY.MM.DD")}
        />
        <Select
          size="small"
          defaultValue="yestoday"
          options={[
            {
              label: formatMessage({ defaultMessage: "至昨日" }),
              value: "yestoday",
            },
            {
              label: formatMessage({ defaultMessage: "至今日" }),
              value: "today",
              disabled: true,
            },
          ]}
        />
      </PastTimeTrigger.Group>
    </Space>
  ),
};

export const Since: Story = {
  render: (args, { intl: { formatMessage } }) => (
    <Space size="large">
      <PastTimeTrigger
        {...args}
        value="since:2,1"
        shortcut={formatMessage({ defaultMessage: "2023.11.11-昨日" })}
        startDate="2023.11.11"
        endDate={dayjs().subtract(1, "d").format("YYYY.MM.DD")}
      />

      <PastTimeTrigger
        {...args}
        value="since:2,0"
        shortcut={formatMessage({ defaultMessage: "2023.11.11-今日" })}
        startDate="2023.11.11"
        endDate={dayjs().format("YYYY.MM.DD")}
      />
    </Space>
  ),
};

export const Dynamic: Story = {
  render: (args, { intl: { formatMessage } }) => (
    <Space size="large" wrap>
      <PastTimeTrigger
        {...args}
        value="day:17,1"
        shortcut={formatMessage({ defaultMessage: "过去16天" })}
        startDate={dayjs().subtract(16, "d").format("YYYY.MM.DD")}
        endDate={dayjs().subtract(1, "d").format("YYYY.MM.DD")}
      />

      <PastTimeTrigger
        {...args}
        value="day:6,2"
        shortcut={formatMessage({ defaultMessage: "过去5天-过去2天" })}
        startDate={dayjs().subtract(5, "d").format("YYYY.MM.DD")}
        endDate={dayjs().subtract(2, "d").format("YYYY.MM.DD")}
      />

      <PastTimeTrigger
        {...args}
        value="day:6,5"
        shortcut={formatMessage({ defaultMessage: "过去5天-过去5天" })}
        startDate={dayjs().subtract(5, "d").format("YYYY.MM.DD")}
        endDate={dayjs().subtract(5, "d").format("YYYY.MM.DD")}
      />
    </Space>
  ),
};

export const Period: Story = {
  args: {},
  render: (args, { intl: { formatMessage } }) => (
    <Space size="large">
      <PastTimeTrigger
        {...args}
        value="period:-1"
        shortcut={formatMessage({ defaultMessage: "上一周期" })}
        startDate="2023.11.14"
        endDate="2023.11.20"
      />
      <PastTimeTrigger
        {...args}
        value="period:-1"
        startDate="2023.11.23"
        endDate="2023.11.26"
      />
    </Space>
  ),
};
