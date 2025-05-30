import { Space, Switch } from "@/src";
import { IconCheck, IconClose } from "@arco-iconbox/react-growingio/src";
import { action } from "storybook/actions";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Switch> = {
  component: Switch,
  title: "Components/Data Entry/Switch",
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    defaultValue: 1,
    onChange: action("onChange"),
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const Icon: Story = {
  args: {
    ...Default.args,
    checkedIcon: <IconCheck />,
    uncheckedIcon: <IconClose />,
  },
};

export const Text: Story = {
  args: {
    ...Default.args,
    checkedText: "ON",
    uncheckedText: "OFF",
  },
};

export const Types: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => (
    <Space size={"medium"}>
      <Switch {...args} type="circle" />
      <Switch {...args} type="round" />
      <Switch {...args} type="line" />
    </Space>
  ),
};

export const Sizes: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => (
    <Space size={"medium"} align="start">
      <Switch {...args} type="circle" />
      <Switch {...args} size="small" type="circle" />
      <Switch {...args} type="round" />
      <Switch {...args} size="small" type="round" />
      <Switch {...args} type="line" />
      <Switch {...args} size="small" type="line" />
    </Space>
  ),
};

export const Loading: Story = {
  ...Sizes,
  args: {
    ...Sizes.args,
    defaultChecked: true,
    loading: true,
  },
};
