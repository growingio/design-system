import { Button, Popover, Steps } from "@/src";
import {
  IconHome,
  IconLeft,
  IconLoading,
  IconRight,
  IconThumbUp,
} from "@arco-iconbox/react-growingio/src";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ReactNode, useState } from "react";

const meta: Meta<typeof Steps> = {
  component: Steps,
  title: "Components/Navigation/Steps",
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof Steps>;

const { Step } = Steps;

export const Default: Story = {
  args: {
    current: 2,
  },
  render: (args) => (
    <Steps {...args}>
      <Step title="Succeeded" description="This is a description" />
      <Step title="Processing" description="This is a description" />
      <Step title="Pending" description="This is a description" />
    </Steps>
  ),
};

export const Size: Story = {
  ...Default,
  args: {
    ...Default.args,
    size: "small",
  },
};

export const LabelPlacement: Story = {
  ...Default,
  args: {
    ...Default.args,
    labelPlacement: "vertical",
  },
};

export const Status: Story = {
  ...Default,
  args: {
    ...Default.args,
    status: "error",
  },
};

export const Lineless: Story = {
  ...Default,
  args: {
    ...Default.args,
    lineless: true,
  },
};

export const Direction: Story = {
  ...Default,
  args: {
    ...Default.args,
    direction: "vertical",
  },
};

export const Arrow: Story = {
  ...Default,
  args: {
    ...Default.args,
    type: "arrow",
  },
};

export const Dot: Story = {
  ...Default,
  args: {
    ...Default.args,
    type: "dot",
  },
};

export const Navigation: Story = {
  ...Default,
  args: {
    ...Default.args,
    type: "navigation",
  },
};

export const Mini: Story = {
  ...Default,
  args: {
    ...Default.args,
    type: "arrow",
    size: "small",
  },
};

export const CustomDot: Story = {
  render: () => {
    const [current, setCurrent] = useState(2);

    const customDot = (dot: ReactNode, { index }: { index: number }) => {
      const visible = index === current;
      return (
        <Popover popupVisible={visible} content={<span>Step: {index}</span>}>
          {dot}
        </Popover>
      );
      return dot;
    };

    return (
      <div style={{ paddingTop: 60, overflow: "hidden", textAlign: "center" }}>
        <Steps type="dot" current={current} customDot={customDot} style={{ marginTop: 20 }}>
          <Step title="Succeeded" description="This is a description" />
          <Step title="Processing" description="This is a description" />
          <Step title="Pending" description="This is a description" />
        </Steps>
        <div style={{ marginTop: 40 }}>
          <Button
            disabled={current <= 1}
            onClick={() => setCurrent(current - 1)}
            style={{ paddingLeft: 8 }}
          >
            <IconLeft />
            Back
          </Button>
          <Button
            disabled={current >= 3}
            onClick={() => setCurrent(current + 1)}
            style={{ marginLeft: 20, paddingRight: 8 }}
            type="primary"
          >
            Next
            <IconRight />
          </Button>
        </div>
      </div>
    );
  },
};

export const Icon: Story = {
  render: () => (
    <Steps current={2}>
      <Step icon={<IconHome />} title="Succeeded" description="This is a description" />
      <Step icon={<IconLoading />} title="Processing" description="This is a description" />
      <Step icon={<IconThumbUp />} title="Pending" description="This is a description" />
    </Steps>
  ),
};
