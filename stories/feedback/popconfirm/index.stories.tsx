import { Button, Popconfirm } from "@/src";
import { IconFaceSmileFill } from "@arco-iconbox/react-growingio/src";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Popconfirm> = {
  component: Popconfirm,
  title: "Components/Feedback/Popconfirm",
};

export default meta;
type Story = StoryObj<typeof Popconfirm>;

export const Default: Story = {
  args: {
    title: "Confirm",
    content: "Are you sure you want to delete?",
    okText: "OK",
    cancelText: "Cancel",
  },
  render: (args) => (
    <Popconfirm {...args}>
      <Button>Delete</Button>
    </Popconfirm>
  ),
};

function getStyle(top: number, left: number) {
  return {
    position: "absolute",
    width: 80,
    top,
    left,
  } as React.CSSProperties;
}

export const Positions: Story = {
  args: {
    ...Default.args,
    trigger: "click",
  },
  render: (args) => (
    <div
      style={{
        position: "relative",
        width: 440,
        height: 280,
      }}
    >
      <Popconfirm {...args} position="tl">
        <Button style={getStyle(0, 70)}>TL</Button>
      </Popconfirm>
      <Popconfirm {...args} position="top">
        <Button style={getStyle(0, 180)}>Top</Button>
      </Popconfirm>
      <Popconfirm {...args} position="tr">
        <Button style={getStyle(0, 290)}>TR</Button>
      </Popconfirm>
      <Popconfirm {...args} position="lt">
        <Button style={getStyle(60, 10)}>LT</Button>
      </Popconfirm>
      <Popconfirm {...args} position="left">
        <Button style={getStyle(120, 10)}>Left</Button>
      </Popconfirm>
      <Popconfirm {...args} position="lb">
        <Button style={getStyle(180, 10)}>LB</Button>
      </Popconfirm>
      <Popconfirm {...args} position="rt">
        <Button style={getStyle(60, 350)}>RT</Button>
      </Popconfirm>
      <Popconfirm {...args} position="right">
        <Button style={getStyle(120, 350)}>Right</Button>
      </Popconfirm>
      <Popconfirm {...args} position="rb">
        <Button style={getStyle(180, 350)}>RB</Button>
      </Popconfirm>
      <Popconfirm {...args} position="bl">
        <Button style={getStyle(240, 70)}>BL</Button>
      </Popconfirm>
      <Popconfirm {...args} position="bottom">
        <Button style={getStyle(240, 180)}>Bottom</Button>
      </Popconfirm>
      <Popconfirm {...args} position="br">
        <Button style={getStyle(240, 290)}>BR</Button>
      </Popconfirm>
    </div>
  ),
};

export const Icon: Story = {
  ...Default,
  args: {
    ...Default.args,
    icon: <IconFaceSmileFill style={{ color: "#0057fe" }} />,
  },
};

export const AsyncClose: Story = {
  ...Default,
  args: {
    ...Default.args,
    onOk: () => new Promise((resolve) => setTimeout(resolve, 2000)),
  },
};
