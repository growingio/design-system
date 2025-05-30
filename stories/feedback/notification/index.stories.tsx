import { Button, Notification, NotificationProps, Space } from "@/src";
import { IconInfoCircle } from "@arco-iconbox/react-growingio/src";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<NotificationProps> = {
  component: Notification,
  title: "Components/Feedback/Notification",
};

export default meta;
type Story = StoryObj<NotificationProps>;

export const Default: Story = {
  args: {
    title: "Default Notification",
    content: "This is a default notification message.",
  },
  render: (args) => (
    <Button
      type="primary"
      onClick={() => {
        Notification.info(args);
      }}
    >
      Click
    </Button>
  ),
};

export const Types: Story = {
  render: () => (
    <Space size="large">
      <Button
        onClick={() =>
          Notification.info({
            title: "Info",
            content: "This is an info Notification!",
          })
        }
        type="primary"
      >
        Info
      </Button>
      <Button
        onClick={() =>
          Notification.success({
            title: "Success",
            content: "This is a success Notification!",
          })
        }
        type="primary"
        status="success"
      >
        Success
      </Button>
      <Button
        onClick={() =>
          Notification.warning({
            title: "Warning",
            content: "This is a warning Notification!",
          })
        }
        type="primary"
        status="warning"
      >
        Warning
      </Button>
      <Button
        onClick={() =>
          Notification.error({
            title: "Error",
            content: "This is an error Notification!",
          })
        }
        type="primary"
        status="danger"
      >
        Error
      </Button>
      <Button
        onClick={() =>
          Notification.normal({
            title: "Normal",
            content: "This is an normal  Notification!",
          })
        }
      >
        Normal
      </Button>
    </Space>
  ),
};

export const Update: Story = {
  render: () => (
    <Button
      onClick={() => {
        Notification.warning({
          id: "need_update",
          title: "Ready to update",
          content: "Will update after 2 seconds...",
        });
        setTimeout(() => {
          Notification.success({
            id: "need_update",
            title: "Success",
            content: "Update success!",
          });
        }, 2000);
      }}
      type="primary"
    >
      Update Notification
    </Button>
  ),
};

const id = `${Date.now()}`;
export const Buttons: Story = {
  ...Default,
  args: {
    ...Default.args,
    id,
    btn: (
      <Space>
        <Button size="small" onClick={() => Notification.remove(id)}>
          Cancel
        </Button>
        <Button type="primary" size="small" onClick={() => Notification.remove(id)}>
          OK
        </Button>
      </Space>
    ),
  },
};

export const Icon: Story = {
  ...Default,
  args: {
    ...Default.args,
    icon: <IconInfoCircle />,
  },
};

export const Positions: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => (
    <Space size="large">
      <Button
        onClick={() =>
          Notification.success({
            ...args,
            position: "topLeft",
          })
        }
        type="primary"
      >
        Top Left
      </Button>
      <Button
        onClick={() =>
          Notification.success({
            ...args,
            position: "topRight",
          })
        }
        type="primary"
      >
        Top Right
      </Button>
      <Button
        onClick={() =>
          Notification.success({
            ...args,
            position: "bottomLeft",
          })
        }
        type="primary"
      >
        Bottom Left
      </Button>
      <Button
        onClick={() =>
          Notification.success({
            ...args,
            position: "bottomRight",
          })
        }
        type="primary"
      >
        Bottom Right
      </Button>
    </Space>
  ),
};

export const Hooks: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => {
    const [api, contextHolder] = Notification.useNotification();
    return (
      <>
        {contextHolder}
        <Button onClick={() => api.success?.(args)} type="primary">
          Click
        </Button>
      </>
    );
  },
};
