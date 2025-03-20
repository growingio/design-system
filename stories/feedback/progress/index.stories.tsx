import { Radio, Progress, ProgressProps, Space } from "@/src";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof Progress> = {
  component: Progress,
  title: "Components/Feedback/Progress",
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    percent: 30,
    width: 200,
  },
  render: (args) => <Progress {...args} />,
};

export const Status: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => (
    <Space direction="vertical" size={"large"}>
      <Progress {...args} status="success" />
      <Progress {...args} status="error" />
      <Progress {...args} status="warning" />
      <Progress {...args} status="normal" />
    </Space>
  ),
};

export const CircleStatus: Story = {
  args: {
    type: "circle",
    percent: 30,
  },
  render: (args) => (
    <Space size={"large"}>
      <Progress {...args} status="success" />
      <Progress {...args} status="error" />
      <Progress {...args} status="warning" />
      <Progress {...args} status="normal" />
    </Space>
  ),
};

export const Mini: Story = {
  args: {
    size: "mini",
    percent: 40,
  },
  render: (args) => (
    <Space direction="vertical">
      <Space size={"large"}>
        <Progress {...args} status="success" />
        <Progress {...args} status="error" />
        <Progress {...args} status="warning" />
        <Progress {...args} status="normal" />
      </Space>
      <Space size={"large"}>
        <Progress {...args} type="circle" status="success" />
        <Progress {...args} type="circle" status="error" />
        <Progress {...args} type="circle" status="warning" />
        <Progress {...args} type="circle" status="normal" />
      </Space>
    </Space>
  ),
};

export const Size: Story = {
  args: {
    percent: 50,
  },
  render: (args) => {
    const [size, setSize] = useState<ProgressProps["size"]>("default");
    return (
      <Space direction="vertical" size={"large"}>
        <Radio.Group options={["small", "default", "large"]} value={size} onChange={setSize} />
        <Space size={"large"}>
          <Progress {...args} size={size} width={100} status="success" />
          <Progress {...args} size={size} width={100} status="error" />
          <Progress {...args} size={size} width={100} status="warning" />
          <Progress {...args} size={size} width={100} status="normal" />
        </Space>
        <Space size={"large"}>
          <Progress {...args} size={size} type="circle" status="success" />
          <Progress {...args} size={size} type="circle" status="error" />
          <Progress {...args} size={size} type="circle" status="warning" />
          <Progress {...args} size={size} type="circle" status="normal" />
        </Space>
      </Space>
    );
  },
};

export const Animation: Story = {
  ...Status,
  args: {
    ...Status.args,
    animation: true,
    percent: 60,
  },
};

export const Color: Story = {
  args: {
    width: 200,
  },
  render: (args) => (
    <Space direction="vertical">
      <Progress {...args} percent={90} color={"rgb(var(--gio-orange-6))"} />
      <Progress
        {...args}
        percent={30}
        color={{
          "0%": "rgb(var(--gio-orange-1))",
          "25%": "rgb(var(--gio-orange-2))",
          "50%": "rgb(var(--gio-orange-3))",
          "75%": "rgb(var(--gio-orange-5))",
          "100%": "rgb(var(--gio-orange-6))",
        }}
      />
      <Progress
        {...args}
        percent={60}
        color={{
          "0%": "rgb(var(--gio-orange-1))",
          "25%": "rgb(var(--gio-orange-2))",
          "50%": "rgb(var(--gio-orange-3))",
          "75%": "rgb(var(--gio-orange-5))",
          "100%": "rgb(var(--gio-orange-6))",
        }}
      />
      <Progress
        {...args}
        percent={80}
        color={{
          "0%": "rgb(var(--gio-orange-1))",
          "25%": "rgb(var(--gio-orange-2))",
          "50%": "rgb(var(--gio-orange-3))",
          "75%": "rgb(var(--gio-orange-5))",
          "100%": "rgb(var(--gio-orange-6))",
        }}
      />
    </Space>
  ),
};

export const TrailColor: Story = {
  args: {
    percent: 60,
    trailColor: "rgb(var(--primary-2))",
  },
  render: (args) => (
    <Space size={"large"}>
      <Progress {...args} width={200} />
      <Progress {...args} type="circle" />
    </Space>
  ),
};

export const Steps: Story = {
  render: () => (
    <Space direction="vertical" size={"large"}>
      <Progress steps={3} percent={30} width={200} />
      <Progress steps={5} percent={100} status="warning" width={200} />
      <Progress steps={5} size="small" percent={50} status="success" />
    </Space>
  ),
};
