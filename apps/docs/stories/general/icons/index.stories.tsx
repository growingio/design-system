import type { Meta, StoryObj } from "@storybook/react";
import { Space } from "@giod/react/src";
import { IconProps, IconStar, IconSync } from "@arco-iconbox/react-growingio";

const meta: Meta<IconProps> = {
  title: "Components/General/Icon",
};
type Story = StoryObj<IconProps>;

export default meta;

export const Basic: Story = {
  args: {
    style: { fontSize: 24 },
  },
  render: (args) => (
    <Space>
      <IconStar {...args} />
      <IconStar {...args} style={{ color: "#ffcd00", fontSize: 24 }} />
    </Space>
  ),
};

export const Spin: Story = {
  args: {
    style: { fontSize: 40 },
  },
  render: (args) => <IconSync {...args} spin />,
};
