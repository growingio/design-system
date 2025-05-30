import type { Meta, StoryObj } from "@storybook/react-vite";
import { Calendar, Space } from "@/src";

const meta: Meta<typeof Calendar> = {
  component: Calendar,
  title: "Components/Data Display/Calendar",
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Basic: Story = {
  args: {
    style: { width: 740 },
  },
  render: (args) => <Calendar {...args} />,
};

export const HeaderType: Story = {
  ...Basic,
  args: {
    ...Basic.args,
    headerType: "select",
  },
};

export const Panel: Story = {
  args: {
    panel: true,
  },
  render: (args) => (
    <Space align="start" size="large">
      <Calendar {...args} panelTodayBtn />
      <Calendar {...args} mode="year" />
    </Space>
  ),
};
