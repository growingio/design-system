import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconDown, IconEdit } from "@arco-iconbox/react-growingio/src";
import { Link, Space, Dropdown, Menu } from "../../../src";

const meta: Meta<typeof Link> = {
  component: Link,
  title: "Components/General/Link",
};

export default meta;
type Story = StoryObj<typeof Link>;

export const BasicLinks: Story = {
  args: {
    children: "Link",
  },
  render: (args) => (
    <Space size="large">
      <Link {...args} />
      <Link {...args} disabled />
    </Space>
  ),
};

export const LinkStatus: Story = {
  args: {
    ...BasicLinks.args,
  },
  render: (args) => (
    <Space size="large" direction="vertical">
      <Space size="large">
        <Link {...args} status="error" />
        <Link {...args} status="error" disabled />
      </Space>
      <Space size="large">
        <Link {...args} status="success" />
        <Link {...args} status="success" disabled />
      </Space>
      <Space size="large">
        <Link {...args} status="warning" />
        <Link {...args} status="warning" disabled />
      </Space>
    </Space>
  ),
};

export const IconLinks: Story = {
  args: {
    children: "Hyper links",
  },
  render: (args) => (
    <Space size="large" direction="vertical">
      <Space size="large">
        <Link {...args} icon />
        <Link {...args} icon disabled />
      </Space>
      <Space size="large">
        <Link {...args} icon={<IconEdit />} />
        <Link {...args} icon={<IconEdit />} disabled />
      </Space>
    </Space>
  ),
};

export const Hoverable: Story = {
  ...BasicLinks,
  args: {
    ...BasicLinks.args,
    hoverable: false,
  },
};

export const WithDropdown: Story = {
  render: () => (
    <Dropdown
      droplist={
        <Menu>
          <Menu.Item key="1">Option 1</Menu.Item>
          <Menu.Item key="2">Option 2</Menu.Item>
          <Menu.Item key="3">Option 3</Menu.Item>
        </Menu>
      }
      position="bl"
    >
      <Link>
        Action
        <IconDown style={{ marginLeft: 12 }} />
      </Link>
    </Dropdown>
  ),
};
