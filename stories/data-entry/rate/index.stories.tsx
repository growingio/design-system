import { Rate, Space } from "@/src";
import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { IconHeartFill } from "@arco-iconbox/react-growingio/src";

const meta: Meta<typeof Rate> = {
  component: Rate,
  title: "Components/Data Entry/Rate",
};

export default meta;
type Story = StoryObj<typeof Rate>;

export const Default: Story = {
  args: {
    defaultValue: 3,
    onChange: action("onChange"),
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    ...Default.args,
    readonly: true,
  },
};

export const AllowHalf: Story = {
  args: {
    ...Default.args,
    allowHalf: true,
    defaultValue: 2.5,
  },
};

export const AllowClear: Story = {
  args: {
    ...Default.args,
    allowClear: true,
  },
};

export const Count: Story = {
  args: {
    ...Default.args,
    count: 10,
  },
};

export const Grading: Story = {
  args: {
    ...Default.args,
    grading: true,
  },
};

export const Tooltips: Story = {
  args: {
    ...Default.args,
    tooltips: ["😠", "🙂", "😊", "😘", "😍"],
  },
};

export const Characters: Story = {
  args: {
    ...Default.args,
    allowHalf: true,
    defaultValue: 2.5,
  },
  render: (args) => (
    <Space direction="vertical" size={"medium"}>
      <Rate {...args} character={<IconHeartFill />} />
      <Rate {...args} character="A" />
      <Rate {...args} character={(index) => `${index + 1}`} />
      <Rate {...args} character="好" />
    </Space>
  ),
};
