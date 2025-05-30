import { Pagination, type PaginationProps, Radio, Space } from "@/src";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

const meta: Meta<typeof Pagination> = {
  component: Pagination,
  title: "Components/Navigation/Pagination",
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    total: 100,
  },
  render: (args) => <Pagination {...args} />,
};

export const SizeChange: Story = {
  ...Default,
  args: {
    ...Default.args,
    sizeCanChange: true,
  },
};

export const Jumper: Story = {
  ...Default,
  args: {
    ...Default.args,
    showJumper: true,
  },
};

export const Simple: Story = {
  ...Default,
  args: {
    ...Default.args,
    simple: true,
  },
};

export const Total: Story = {
  ...Default,
  args: {
    ...Default.args,
    showTotal: true,
  },
};

export const All: Story = {
  ...Default,
  args: {
    total: 100,
    showJumper: true,
    showTotal: true,
    sizeCanChange: true,
  },
};

const { Group: RadioGroup } = Radio;
export const Size: Story = {
  ...Default,
  args: {
    ...Default.args,
    sizeCanChange: true,
  },
  render: () => {
    const [size, setSize] = useState<PaginationProps["size"]>("default");
    return (
      <Space direction="vertical">
        <RadioGroup
          value={size}
          options={["large", "default", "small", "mini"]}
          onChange={(value) => setSize(value)}
          type="button"
          style={{
            marginBottom: 20,
          }}
        />
        <Pagination size={size} total={50} showTotal showJumper sizeCanChange />
      </Space>
    );
  },
};

export const BufferSize: Story = {
  args: {
    total: 200,
    defaultCurrent: 10,
  },
  render: (args) => (
    <Space direction="vertical" size="large">
      <Pagination {...args} bufferSize={0} />
      <Pagination {...args} bufferSize={1} />
      <Pagination {...args} bufferSize={2} />
    </Space>
  ),
};
