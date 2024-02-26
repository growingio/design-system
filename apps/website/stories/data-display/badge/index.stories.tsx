import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Avatar, Badge, Button, Link, Space, Switch } from "@giod/react/src";
import {
  IconClockCircle,
  IconMinus,
  IconNotification,
  IconPlus,
  IconUser,
} from "@arco-iconbox/react-growingio";
import colors from "@giod/react/src/_core/colors";

const meta: Meta<typeof Badge> = {
  component: Badge,
  title: "Components/Data Display/Badge",
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Basic: Story = {
  args: {
    children: <Avatar shape="square" />,
  },
  render: (args) => (
    <Space size={40}>
      <Badge {...args} count={9} />
      <Badge {...args} count={9} dot dotStyle={{ width: 10, height: 10 }} />
      <Badge
        {...args}
        count={
          <IconClockCircle
            style={{ verticalAlign: "middle", color: "var(--color-text-2)" }}
          />
        }
        dotStyle={{
          height: 16,
          width: 16,
          fontSize: 14,
        }}
      />
    </Space>
  ),
};

export const NoChildren: Story = {
  args: {},
  render: (args) => (
    <Space size={40}>
      <Badge {...args} count={2} />
      <Badge
        {...args}
        count={2}
        dotStyle={{
          background: "var(--color-fill-2)",
          color: "var(--color-text-4)",
        }}
      />
      <Badge {...args} count={16} />
      <Badge {...args} maxCount={99} count={1000} />
    </Space>
  ),
};

export const Dot: Story = {
  args: {
    count: 9,
    dot: true,
  },
  render: (args) => (
    <Space size={40}>
      <Badge {...args} offset={[6, -2]}>
        <Link href="#">Link</Link>
      </Badge>
      <Badge {...args} offset={[2, -2]}>
        <IconNotification
          style={{
            color: "#888",
            fontSize: 18,
            verticalAlign: -3,
          }}
        />
      </Badge>
    </Space>
  ),
};

export const Text: Story = {
  args: {
    children: (
      <Avatar shape="square">
        <IconUser />
      </Avatar>
    ),
  },
  render: (args) => (
    <Space size={40}>
      <Badge {...args} text="NEW" />
      <Badge {...args} text="HOT" />
    </Space>
  ),
};

export const MaxCount: Story = {
  args: {
    ...Text.args,
  },
  render: (args) => (
    <Space size={40}>
      <Badge {...args} count={100} />
      <Badge {...args} count={100} maxCount={10} />
      <Badge {...args} count={1000} maxCount={999} />
    </Space>
  ),
};

export const Status: Story = {
  args: {},
  render: (args) => (
    <Space size="large" direction="vertical">
      <Space size="large">
        <Badge {...args} status="default" />
        <Badge {...args} status="processing" />
        <Badge {...args} status="success" />
        <Badge {...args} status="warning" />
        <Badge {...args} status="error" />
      </Space>
      <Space size="large">
        <Badge {...args} status="default" text="Default" />
        <Badge {...args} status="processing" text="Processing" />
        <Badge {...args} status="success" text="Success" />
        <Badge {...args} status="warning" text="Warning" />
        <Badge {...args} status="error" text="Error" />
      </Space>
    </Space>
  ),
};

export const Color: Story = {
  args: {},
  render: (args) => {
    const mapColorToBadge = (c: string) => (
      <Badge {...args} key={c} color={c} text={c} />
    );
    const customColors = [
      "#F53F3F",
      "#7816FF",
      "#00B42A",
      "#165DFF",
      "#FF7D00",
      "#EB0AA4",
      "#7BC616",
      "#86909C",
      "#B71DE8",
      "#0FC6C2",
      "#FFB400",
      "#168CFF",
      "#FF5722",
    ];
    return (
      <Space direction="vertical" size="large">
        <Space wrap>{colors.map(mapColorToBadge)}</Space>
        <Space wrap>{customColors.map(mapColorToBadge)}</Space>
      </Space>
    );
  },
};

export const Animation: Story = {
  args: {
    children: <Avatar shape="square" />,
  },
  render: (args) => {
    const [count, setCount] = React.useState<number>(12);
    const [dot, setDot] = React.useState<boolean>(true);

    return (
      <Space direction="vertical" size="large">
        <Space size="large">
          <Badge {...args} dot={dot} count={dot ? count : 0}></Badge>
          <Switch checked={dot} onChange={setDot}></Switch>
        </Space>
        <Space size="large">
          <Badge {...args} count={count}></Badge>
          <Button.Group>
            <Button
              icon={<IconPlus />}
              onClick={() => setCount((c) => c + 1)}
            />
            <Button
              icon={<IconMinus />}
              onClick={() => setCount((c) => Math.max(c - 1, 0))}
            />
          </Button.Group>
        </Space>
      </Space>
    );
  },
};
