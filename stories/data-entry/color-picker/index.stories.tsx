import { Button, ColorPicker, Space } from "@/src";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

const meta: Meta<typeof ColorPicker> = {
  component: ColorPicker,
  title: "Components/Data Entry/ColorPicker",
  tags: ["new"],
};

export default meta;
type Story = StoryObj<typeof ColorPicker>;

export const Default: Story = {
  args: {
    defaultValue: "rgb(31, 97, 232)",
  },
  render: (args) => <ColorPicker {...args} />,
};

export const ShowText: Story = {
  ...Default,
  args: {
    ...Default.args,
    showText: true,
  },
};

export const Sizes: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => (
    <Space size={"medium"} align="start">
      <ColorPicker {...args} size="mini" />
      <ColorPicker {...args} size="small" />
      <ColorPicker {...args} size="default" />
      <ColorPicker {...args} size="large" />
    </Space>
  ),
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
  render: (args) => (
    <Space size={"large"}>
      <ColorPicker {...args} />
      <ColorPicker showText {...args} />
    </Space>
  ),
};

export const DisabledAlpha: Story = {
  ...Disabled,
  args: {
    disabledAlpha: true,
    defaultValue: "#1F61E880",
  },
};

export const Format: Story = {
  ...Default,
  args: {
    ...Default.args,
    showText: true,
    format: "rgb",
  },
};

export const ShowPreset: Story = {
  ...Default,
  args: {
    ...Default.args,
    showPreset: true,
  },
};

export const ShowHistory: Story = {
  render: () => {
    const [history, setHistory] = useState<string[]>([]);

    function addHistory(value: string) {
      setHistory([...history.slice(-10), value]);
    }

    return (
      <ColorPicker
        defaultValue="rgb(31, 97, 232)"
        showPreset
        showHistory
        historyColors={history}
        onChange={addHistory}
      />
    );
  },
};

export const Trigger: Story = {
  ...Default,
  args: {
    ...Default.args,
    triggerElement: ({ value }) => <Button>{value}</Button>,
  },
};
