import { Button, Link, Popover, Space, Typography } from "@/src";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof Popover> = {
  component: Popover,
  title: "Components/Data Display/Popover",
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  args: {
    title: "Title",
    content: (
      <Space direction="vertical">
        <Typography.Text>This is the content.</Typography.Text>
        <Typography.Text>This is the content.</Typography.Text>
      </Space>
    ),
  },
  render: (args) => (
    <Popover {...args}>
      <Button type="primary">Hover me</Button>
    </Popover>
  ),
};

export const Triggers: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => (
    <Space>
      <Popover {...args} trigger="hover">
        <Button>Hover</Button>
      </Popover>
      <Popover {...args} trigger="click">
        <Button>Click</Button>
      </Popover>
      <Popover {...args} trigger="focus">
        <Button>Focus</Button>
      </Popover>
    </Space>
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
      <Popover {...args} position="tl">
        <Button style={getStyle(0, 70)}>TL</Button>
      </Popover>
      <Popover {...args} position="top">
        <Button style={getStyle(0, 180)}>Top</Button>
      </Popover>
      <Popover {...args} position="tr">
        <Button style={getStyle(0, 290)}>TR</Button>
      </Popover>
      <Popover {...args} position="lt">
        <Button style={getStyle(60, 10)}>LT</Button>
      </Popover>
      <Popover {...args} position="left">
        <Button style={getStyle(120, 10)}>Left</Button>
      </Popover>
      <Popover {...args} position="lb">
        <Button style={getStyle(180, 10)}>LB</Button>
      </Popover>
      <Popover {...args} position="rt">
        <Button style={getStyle(60, 350)}>RT</Button>
      </Popover>
      <Popover {...args} position="right">
        <Button style={getStyle(120, 350)}>Right</Button>
      </Popover>
      <Popover {...args} position="rb">
        <Button style={getStyle(180, 350)}>RB</Button>
      </Popover>
      <Popover {...args} position="bl">
        <Button style={getStyle(240, 70)}>BL</Button>
      </Popover>
      <Popover {...args} position="bottom">
        <Button style={getStyle(240, 180)}>Bottom</Button>
      </Popover>
      <Popover {...args} position="br">
        <Button style={getStyle(240, 290)}>BR</Button>
      </Popover>
    </div>
  ),
};

export const CloseInPopover: Story = {
  render: () => {
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    return (
      <Space size={40}>
        <Popover
          title="Title"
          popupVisible={visible}
          onVisibleChange={setVisible}
          content={
            <span>
              <p>Here is the text content</p>
              <p>Here is the text content</p>
              <p style={{ textAlign: "right", marginTop: 4 }}>
                <Link onClick={() => setVisible(false)}>Close</Link>
              </p>
            </span>
          }
        >
          <Button type="primary">Hover</Button>
        </Popover>
        <Popover
          title="Title"
          popupVisible={visible2}
          onVisibleChange={(visible) => {
            if (visible) {
              setVisible2(true);
            }
          }}
          content={
            <span>
              <p>Here is the text content</p>
              <p>Here is the text content</p>
              <p style={{ textAlign: "right", marginTop: 4 }}>
                <Link onClick={() => setVisible2(false)}>Close</Link>
              </p>
            </span>
          }
        >
          <Button type="primary">Will not close when moved out</Button>
        </Popover>
      </Space>
    );
  },
};
