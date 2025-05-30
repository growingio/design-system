import type { Meta, StoryObj } from "@storybook/react-vite";
import PastTimeShortcuts from "@/src/_past-time-shortcuts";

const meta: Meta<typeof PastTimeShortcuts> = {
  component: PastTimeShortcuts,
  title: "Development/Internal/PastTimeShortcuts",
};
export default meta;

type Story = StoryObj<typeof PastTimeShortcuts>;

export const PastPeriodPicker: Story = {
  name: "PastPeriodPicker",
  render: (args, { intl: { formatMessage } }) => (
    <PastTimeShortcuts
      {...args}
      options={[
        {
          label: formatMessage({ defaultMessage: "上一周期" }),
          value: "period:2,1",
        },
      ]}
    />
  ),
};
