import { Descriptions, DescriptionsProps, Radio, Space } from "@/src";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const { Group: RadioGroup } = Radio;

const meta: Meta<typeof Descriptions> = {
  component: Descriptions,
  title: "Components/Data Display/Descriptions",
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof Descriptions>;

export const Default: Story = {
  args: {
    data: [
      {
        label: "Name",
        value: "Socrates",
      },
      {
        label: "Mobile",
        value: "123-1234-1234",
      },
      {
        label: "Residence",
        value: "Beijing",
      },
      {
        label: "Hometown",
        value: "Haidian",
      },
      {
        label: "Address",
        value: "Zhongjia Building, Dazhongsi East Road",
      },
    ],
    title: "User Info",
  },
  render: (args) => <Descriptions {...args} />,
};

export const Column: Story = {
  ...Default,
  args: {
    ...Default.args,
    column: 1,
  },
};

export const ResponsiveColumn: Story = {
  ...Default,
  args: {
    ...Default.args,
    column: {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4,
      xl: 5,
      xxl: 6,
    },
  },
};

export const Border: Story = {
  ...Default,
  args: {
    ...Default.args,
    border: true,
  },
};

export const Colon: Story = {
  ...Default,
  args: {
    ...Default.args,
    colon: ": ",
  },
};

export const Layout: Story = {
  args: {
    ...Default.args,
    column: 1,
  },
  render: (args) => {
    const [layout, setLayout] = useState<DescriptionsProps["layout"]>("horizontal");
    return (
      <Space direction="vertical" size={"large"}>
        <RadioGroup
          value={layout}
          options={["horizontal", "inline-horizontal", "vertical", "inline-vertical"]}
          onChange={setLayout}
          type="button"
        />
        <Descriptions {...args} layout={layout} />
      </Space>
    );
  },
};

export const Size: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => {
    const [size, setSize] = useState<DescriptionsProps["size"]>("default");
    return (
      <Space direction="vertical" size={"large"}>
        <RadioGroup
          value={size}
          options={["mini", "small", "medium", "default", "large"]}
          onChange={setSize}
          type="button"
        />
        <Descriptions {...args} size={size} />
      </Space>
    );
  },
};
