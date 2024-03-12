import type { Meta, StoryObj } from "@storybook/react";
import PastPeriodPicker from "@giod/react/src/past-peroid-picker";

const meta: Meta<typeof PastPeriodPicker> = {
  component: PastPeriodPicker,
  title: "Components/Data Entry/PastPeroidPicker",
};
export default meta;

type Story = StoryObj<typeof PastPeriodPicker>;

export const Default: Story = {
  args: {},
  render: (args, { intl: { formatMessage } }) => (
    <PastPeriodPicker
      {...args}
      timeRange="day:8,1"
      placeholder={formatMessage({ defaultMessage: "请选择过去周期" })}
      onChange={(v) => {
        console.log(v);
      }}
    />
  ),
};

export const Shortcuts: Story = {
  args: {},
  render: (args) => (
    <PastPeriodPicker {...args} timeRange="day:8,1" defaultValue="period:2,1" />
  ),
};

export const Absolute: Story = {
  args: {},
  render: (args) => (
    <PastPeriodPicker
      {...args}
      timeRange="day:8,1"
      defaultValue="abs:1708876800000,1709567999999"
    />
  ),
};
