import { Avatar, Space } from "@/src";
import { IconCamera, IconEdit, IconUser } from "@arco-iconbox/react-growingio/src";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  title: "Components/Data Display/Avatar",
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  render: () => (
    <Space size={"large"}>
      <Avatar>G</Avatar>
      <Avatar style={{ backgroundColor: "rgb(var(--gio-orange-6))" }}>GIO</Avatar>
      <Avatar>Design</Avatar>
      <Avatar style={{ backgroundColor: "rgb(var(--primary-6))" }}>
        <IconUser />
      </Avatar>
      <Avatar>
        <img src="/demos/avatar.png" alt="avatar" />
      </Avatar>
    </Space>
  ),
};

export const SizeShape: Story = {
  render: () => (
    <Space size="large" direction="vertical">
      <Space size="large">
        <Avatar size={64}>G</Avatar>
        <Avatar size={40}>G</Avatar>
        <Avatar size={32}>G</Avatar>
        <Avatar size={24}>G</Avatar>
      </Space>
      <Space size="large">
        <Avatar size={64} shape="square">
          G
        </Avatar>
        <Avatar size={40} shape="square">
          G
        </Avatar>
        <Avatar size={32} shape="square">
          G
        </Avatar>
        <Avatar size={24} shape="square">
          G
        </Avatar>
      </Space>
    </Space>
  ),
};

export const Group: Story = {
  render: () => (
    <Space size="large">
      <Avatar.Group size={40}>
        <Avatar style={{ backgroundColor: "rgb(var(--gio-orange-6))" }}>O</Avatar>
        <Avatar style={{ backgroundColor: "rgb(var(--primary-6))" }}>P</Avatar>
        <Avatar style={{ backgroundColor: "rgb(var(--blue-6))" }}>B</Avatar>
        <Avatar style={{ backgroundColor: "rgb(var(--green-6))" }}>G</Avatar>
        <Avatar style={{ backgroundColor: "rgb(var(--sky-blue-6))" }}>S</Avatar>
      </Avatar.Group>
      <Avatar.Group shape="square">
        <Avatar style={{ backgroundColor: "rgb(var(--gio-orange-6))" }}>O</Avatar>
        <Avatar style={{ backgroundColor: "rgb(var(--primary-6))" }}>P</Avatar>
        <Avatar style={{ backgroundColor: "rgb(var(--blue-6))" }}>B</Avatar>
        <Avatar style={{ backgroundColor: "rgb(var(--green-6))" }}>G</Avatar>
        <Avatar style={{ backgroundColor: "rgb(var(--sky-blue-6))" }}>S</Avatar>
      </Avatar.Group>
      <Avatar.Group maxCount={3}>
        <Avatar style={{ backgroundColor: "rgb(var(--gio-orange-6))" }}>O</Avatar>
        <Avatar style={{ backgroundColor: "rgb(var(--primary-6))" }}>P</Avatar>
        <Avatar style={{ backgroundColor: "rgb(var(--blue-6))" }}>B</Avatar>
        <Avatar style={{ backgroundColor: "rgb(var(--green-6))" }}>G</Avatar>
        <Avatar style={{ backgroundColor: "rgb(var(--sky-blue-6))" }}>S</Avatar>
      </Avatar.Group>
    </Space>
  ),
};

export const Trigger: Story = {
  render: () => (
    <Space size={"large"}>
      <Avatar style={{ backgroundColor: "rgb(var(--gio-orange-6))" }} triggerIcon={<IconEdit />}>
        G
      </Avatar>
      <Avatar style={{ backgroundColor: "rgb(var(--primary-6))" }} triggerIcon={<IconCamera />}>
        <IconUser />
      </Avatar>
      <Avatar triggerIcon={<IconEdit />} triggerType="mask" shape="square">
        G
      </Avatar>
      <Avatar triggerIcon={<IconCamera />} triggerType="mask">
        <img src="/demos/avatar.png" alt="avatar" />
      </Avatar>
    </Space>
  ),
};
