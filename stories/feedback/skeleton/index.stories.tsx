import { Skeleton } from "@/src";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Skeleton> = {
  component: Skeleton,
  title: "Components/Feedback/Skeleton",
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {},
  render: (args) => <Skeleton {...args} />,
};

export const Animation: Story = {
  ...Default,
  args: {
    animation: true,
  },
};

export const Text: Story = {
  ...Default,
  args: {
    text: {
      rows: 4,
      width: ["100%", 600, 400, 400],
    },
  },
};

export const Image: Story = {
  ...Default,
  args: {
    image: {
      shape: "circle",
      size: "large",
      position: "right",
    },
  },
};
