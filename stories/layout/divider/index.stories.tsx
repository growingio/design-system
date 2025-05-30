import type { Meta, StoryObj } from "@storybook/react-vite";
import { Divider, Typography } from "../../../src";

const meta: Meta<typeof Divider> = {
  component: Divider,
  title: "Components/Layout/Divider",
};

export default meta;
type Story = StoryObj<typeof Divider>;

const { Paragraph, Text } = Typography;

export const HorizontalDivider: Story = {
  args: {
    type: "horizontal",
  },
  render: (args) => (
    <Typography>
      <Paragraph>A design is a plan or specification for the construction of an object.</Paragraph>
      <Divider {...args} />
      <Paragraph>A design is a plan or specification for the construction of an object.</Paragraph>
      <Divider
        {...args}
        style={{
          borderBottomStyle: "dashed",
        }}
      />
      <Paragraph>A design is a plan or specification for the construction of an object.</Paragraph>
      <Divider
        {...args}
        style={{
          borderBottomWidth: 2,
          borderBottomStyle: "dotted",
        }}
      />
      <Paragraph>A design is a plan or specification for the construction of an object.</Paragraph>
    </Typography>
  ),
};

export const TextDivider: Story = {
  args: {
    children: "Text Divider",
  },
  render: (args) => (
    <Typography>
      <Paragraph>A design is a plan or specification for the construction of an object.</Paragraph>
      <Divider {...args} orientation="left" />
      <Paragraph>A design is a plan or specification for the construction of an object.</Paragraph>
      <Divider {...args} orientation="center" />
      <Paragraph>A design is a plan or specification for the construction of an object.</Paragraph>
      <Divider {...args} orientation="right" />
    </Typography>
  ),
};

export const VerticalDivider: Story = {
  args: {
    type: "vertical",
  },
  render: (args) => (
    <Typography>
      <Text>Item 1</Text>
      <Divider {...args} />
      <Text>Item 2</Text>
      <Divider {...args} />
      <Text>Item 3</Text>
    </Typography>
  ),
};
