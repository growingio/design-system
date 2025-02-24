import type { Meta, StoryObj } from "@storybook/react";
import PickerMenu from "@/src/_picker-menu";

const meta: Meta<typeof PickerMenu> = {
  component: PickerMenu,
  title: "Development/Internal/PickerMenu",
};
export default meta;

type Story = StoryObj<typeof PickerMenu>;

export const PastPeriodPicker: Story = {
  render: (args, { intl: { formatMessage } }) => (
    <PickerMenu
      {...args}
      items={[
        {
          key: "shortcuts",
          label: formatMessage({ defaultMessage: "常用时间" }),
        },
        {
          key: "custom",
          label: formatMessage({ defaultMessage: "自定义" }),
        },
      ]}
    />
  ),
};
