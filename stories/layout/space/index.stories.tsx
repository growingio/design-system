import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import {
  Space,
  Typography,
  Tag,
  Button,
  Switch,
  Radio,
  SpaceSize,
  SpaceProps,
  Card,
  Divider,
  Link,
} from "../../../src";

const meta: Meta<typeof Space> = {
  component: Space,
  title: "Components/Layout/Space",
};

export default meta;
type Story = StoryObj<typeof Space>;

const { Text } = Typography;

export const Horizontal: Story = {
  args: {
    direction: "horizontal",
  },
  render: (args) => (
    <Space {...args}>
      <Text>Space:</Text>
      <Tag color="arcoblue">Tag</Tag>
      <Button type="primary">Item1</Button>
      <Button type="primary">Item2</Button>
      <Switch defaultChecked />
    </Space>
  ),
};

export const Vertical: Story = {
  args: {
    direction: "vertical",
  },
  render: (args) => (
    <Space {...args}>
      <Button type="primary">Item1</Button>
      <Button type="primary">Item2</Button>
      <Button type="primary">Item3</Button>
    </Space>
  ),
};

export const Sizes: Story = {
  render: () => {
    const [size, setSize] = useState<SpaceSize>("small");
    return (
      <div>
        <div style={{ marginBottom: 20 }}>
          <Radio.Group
            options={["mini", "small", "medium", "large"]}
            value={size}
            onChange={(value) => setSize(value)}
            type="button"
          />
        </div>
        <Space size={size}>
          <Button type="primary">Item1</Button>
          <Button type="primary">Item2</Button>
          <Button type="primary">Item3</Button>
        </Space>
      </div>
    );
  },
};

export const Align: Story = {
  render: () => {
    const [align, setAlign] = useState<SpaceProps["align"]>("center");
    return (
      <div>
        <div style={{ marginBottom: 20 }}>
          <Radio.Group
            options={["start", "center", "end", "baseline"]}
            value={align}
            onChange={(value) => setAlign(value)}
            type="button"
          />
        </div>
        <Space align={align}>
          <Text>Space:</Text>
          <Button type="primary">Item2</Button>
          <Card title="Card">Card content</Card>
        </Space>
      </div>
    );
  },
};

export const Wrap: Story = {
  args: {
    wrap: true,
    size: [12, 18],
  },
  render: (args) => (
    <Space {...args}>
      <Button type="primary">Item1</Button>
      <Button type="primary">Item2</Button>
      <Button type="primary">Item3</Button>
      <Button type="primary">Item4</Button>
      <Button type="primary">Item5</Button>
      <Button type="primary">Item6</Button>
      <Button type="primary">Item7</Button>
      <Button type="primary">Item8</Button>
      <Button type="primary">Item9</Button>
      <Button type="primary">Item10</Button>
      <Button type="primary">Item11</Button>
      <Button type="primary">Item12</Button>
      <Button type="primary">Item13</Button>
      <Button type="primary">Item14</Button>
      <Button type="primary">Item15</Button>
      <Button type="primary">Item16</Button>
      <Button type="primary">Item17</Button>
      <Button type="primary">Item18</Button>
      <Button type="primary">Item19</Button>
      <Button type="primary">Item20</Button>
    </Space>
  ),
};

export const Split: Story = {
  render: () => (
    <Space split={<Divider type="vertical" />}>
      <Link>Link 1</Link>
      <Link>Link 2</Link>
      <Link>Link 3</Link>
    </Space>
  ),
};
