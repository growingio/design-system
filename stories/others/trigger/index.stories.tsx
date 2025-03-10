// @ts-nocheck
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Trigger } from "@arco-design/web-react";
import { Button, TriggerProps, Tooltip, Typography, Skeleton, Space, Input, Radio } from "@/src";
import "./index.css";

const meta: Meta<typeof Trigger> = {
  component: Trigger,
  title: "Components/Others/Trigger",
};

export default meta;
type Story = StoryObj<typeof Trigger>;

function Popup() {
  return (
    <div className="demo-trigger-popup" style={{ width: 300 }}>
      <Tooltip content="123" defaultPopupVisible>
        <span>123123</span>
      </Tooltip>
      <Skeleton />
    </div>
  );
}

export const Default: Story = {
  args: {
    popup: () => <Popup />,
    position: "top",
  },
  render: (args) => (
    <Trigger {...args}>
      <Typography.Text style={{ marginRight: 20 }}>Hover me</Typography.Text>
    </Trigger>
  ),
};

export const Nested: Story = {
  render: () => (
    <Trigger
      popup={() => (
        <div className="demo-trigger-popup">
          <Trigger
            trigger="click"
            position="right"
            popup={() => (
              <div className="demo-trigger-popup" style={{ width: 300 }}>
                <Skeleton />
                <Typography.Text>Two</Typography.Text>

                <Trigger
                  trigger="focus"
                  blurToHide={false}
                  position="right"
                  popup={() => (
                    <div className="demo-trigger-popup">
                      <Typography.Text>Three</Typography.Text>
                      <Skeleton />
                    </div>
                  )}
                >
                  <Input placeholder="Focus Me" />
                </Trigger>
              </div>
            )}
          >
            <Button>Click Me</Button>
          </Trigger>
        </div>
      )}
    >
      <Button>Hover Me</Button>
    </Trigger>
  ),
};

export const Triggers: Story = {
  render: () => (
    <Space size={40}>
      <Trigger
        popup={() => <Popup />}
        trigger={["click", "hover"]}
        clickToClose={false}
        classNames="zoomInTop"
      >
        <Button>Click/Hover Me</Button>
      </Trigger>
      <Trigger
        popup={() => (
          <Typography.Paragraph className="demo-trigger-popup">
            This popup will be hidden when Input triggers the blur or click. If you don't want to
            hide it when blur, you can set blurToHide=false. If you don't want to hide when you
            click, you can set clickToClose=false.
          </Typography.Paragraph>
        )}
        trigger={["hover", "click", "focus"]}
      >
        <Input style={{ width: 200 }} placeholder="Click/Hover/Focus Me" />
      </Trigger>
      <Trigger popup={() => <Popup />} trigger={["hover", "focus"]} blurToHide={false}>
        <Input style={{ width: 200 }} placeholder="Hover/Focus Me" />
      </Trigger>
    </Space>
  ),
};

export const AlignPoint: Story = {
  render: () => {
    const [trigger, setTrigger] = useState("click");

    return (
      <Space direction="vertical" size={"large"}>
        <Radio.Group
          type="button"
          options={["click", "hover", "contextMenu"]}
          value={trigger}
          onChange={setTrigger}
        />
        <Trigger
          popup={() => <Popup />}
          alignPoint
          position="bl"
          popupAlign={{
            bottom: 8,
            left: 8,
          }}
          trigger={[trigger]}
        >
          <div className="demo-trigger-manual">
            <Typography.Text>Click</Typography.Text>
          </div>
        </Trigger>
      </Space>
    );
  },
};

export const Arrow: Story = {
  render: () => (
    <div style={{ background: "var(--color-fill-2)", padding: 40 }}>
      <Space size={40}>
        <Trigger
          showArrow
          trigger="click"
          position="bl"
          popup={() => (
            <div className="demo-trigger-popup" style={{ width: 300 }}>
              <Skeleton />
            </div>
          )}
        >
          <Button type="primary">Click Me</Button>
        </Trigger>
        <Trigger
          showArrow
          arrowProps={{
            style: {
              background: "red",
            },
          }}
          trigger="click"
          position="bl"
          popup={() => (
            <div className="demo-trigger-popup">
              <Skeleton />
            </div>
          )}
        >
          <Button type="primary">Click Me（arrowProps）</Button>
        </Trigger>
      </Space>
    </div>
  ),
};

export const PopupAlign: Story = {
  render: () => (
    <Trigger
      trigger="click"
      position="top"
      popupAlign={{
        top: [100, 20],
      }}
      popup={() => <Popup />}
    >
      <Button type="primary">Top offset [100, 20]</Button>
    </Trigger>
  ),
};

export const UpdateOnScroll: Story = {
  render: () => (
    <div
      style={{
        background: "var(--color-fill-2)",
        padding: 40,
        width: 400,
        height: 100,
        overflow: "auto",
      }}
    >
      <div style={{ height: 200 }}>
        <Trigger trigger="click" position="bottom" popup={() => <Popup />} updateOnScroll>
          <Button type="primary" style={{ marginTop: 80 }}>
            Button
          </Button>
        </Trigger>
      </div>
    </div>
  ),
};

export const BoundaryDistance: Story = {
  render: () => (
    <div>
      <Typography>
        滚动当前 demo 到视口顶部距离大于 200px 的位置，点击 button ，弹出层将会在 button
        上方出现。隐藏弹出层后再向上滚动页面，直到 button 距离视口小于 200px 的位置，再次点击
        button。 弹出层将会出现在 button 下方。
      </Typography>
      <Trigger
        trigger="click"
        position="top"
        popup={() => <Popup />}
        boundaryDistance={{ top: 200 }}
      >
        <Button type="primary" style={{ marginTop: 80 }}>
          Button (boundaryDistance: `top: 200`)
        </Button>
      </Trigger>
    </div>
  ),
};
