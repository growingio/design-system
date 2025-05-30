import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { BackTop, Button, InputNumber, Select, Space, Typography } from "@/src";
import BrowserWindow from "@/components/browser-window";
import { IconCaretUp } from "@arco-iconbox/react-growingio/src";
import classes from "./index.module.css";

const { Paragraph, Text, Title } = Typography;
const easingTypes = [
  "linear",
  "quadIn",
  "quadOut",
  "quadInOut",
  "cubicIn",
  "cubicOut",
  "cubicInOut",
  "quartIn",
  "quartOut",
  "quartInOut",
  "quintIn",
  "quintOut",
  "quintInOut",
  "sineIn",
  "sineOut",
  "sineInOut",
  "bounceIn",
  "bounceOut",
  "bounceInOut",
];

const meta: Meta<typeof BackTop> = {
  component: BackTop,
  parameters: {
    layout: null,
  },
  title: "Components/Navigation/BackTop",
};

export default meta;
type Story = StoryObj<typeof BackTop>;

export const Basic: Story = {
  args: {
    visibleHeight: 30,
    target: () => document.getElementById("custom_backtop0") as HTMLElement,
    style: { position: "absolute" },
  },
  render: (args) => (
    <BrowserWindow bodyStyle={{ position: "relative" }}>
      <BackTop {...args} />
      <Title heading={3} style={{ padding: "0 20px" }}>
        The button will appear in the bottom corner of the scrolling area
      </Title>
      <div id="custom_backtop0" style={{ height: 300, overflow: "auto", padding: 20 }}>
        <Paragraph>This is the content</Paragraph>
        <Paragraph>This is the content</Paragraph>
        <Paragraph>This is the content</Paragraph>
        <Paragraph>This is the content</Paragraph>
        <Paragraph>This is the content</Paragraph>
        <Paragraph>This is the content</Paragraph>
        <Paragraph>This is the content</Paragraph>
        <Paragraph>This is the content</Paragraph>
        <Paragraph>This is the content</Paragraph>
        <Paragraph>This is the content</Paragraph>
        <Paragraph>This is the content</Paragraph>
        <Paragraph>This is the content</Paragraph>
        <Paragraph>This is the content</Paragraph>
        <Paragraph>This is the content</Paragraph>
        <Paragraph>This is the content</Paragraph>
        <Paragraph>This is the content</Paragraph>
        <Paragraph>This is the content</Paragraph>
        <Paragraph>This is the content</Paragraph>
        <Paragraph>This is the content</Paragraph>
        <Paragraph>This is the content</Paragraph>
      </div>
    </BrowserWindow>
  ),
};

export const Children: Story = {
  ...Basic,
  args: {
    ...Basic.args,
    target: () => document.getElementById("custom_backtop1") as HTMLElement,
    children: (
      <Button type="primary" iconOnly style={{ width: 40, height: 40 }}>
        UP
      </Button>
    ),
  },
  render: (args) => (
    <BrowserWindow bodyStyle={{ position: "relative" }}>
      <BackTop {...args} />
      <Title heading={3} style={{ padding: "0 20px" }}>
        The button will appear in the bottom corner of the scrolling area
      </Title>
      <div id="custom_backtop1" style={{ height: 300, overflow: "auto", padding: 20 }}>
        <Paragraph>This is the content</Paragraph>
        <Paragraph>This is the content</Paragraph>
        <Paragraph>This is the content</Paragraph>
        <Paragraph>This is the content</Paragraph>
        <Paragraph>This is the content</Paragraph>
        <Paragraph>This is the content</Paragraph>
        <Paragraph>This is the content</Paragraph>
        <Paragraph>This is the content</Paragraph>
        <Paragraph>This is the content</Paragraph>
        <Paragraph>This is the content</Paragraph>
        <Paragraph>This is the content</Paragraph>
        <Paragraph>This is the content</Paragraph>
        <Paragraph>This is the content</Paragraph>
        <Paragraph>This is the content</Paragraph>
        <Paragraph>This is the content</Paragraph>
        <Paragraph>This is the content</Paragraph>
        <Paragraph>This is the content</Paragraph>
        <Paragraph>This is the content</Paragraph>
        <Paragraph>This is the content</Paragraph>
        <Paragraph>This is the content</Paragraph>
      </div>
    </BrowserWindow>
  ),
};

export const EasingDuration: Story = {
  name: "Easing & Duration",
  render: () => {
    const [easing, setEasing] = useState("linear");
    const [duration, setDuration] = useState(200);
    return (
      <BrowserWindow>
        <Space size={10} style={{ margin: 12 }}>
          <Text>Easing</Text>
          <Select onChange={setEasing} defaultValue={easing} style={{ width: 200 }}>
            {easingTypes.map((easing) => (
              <Select.Option key={easing} value={easing}>
                {easing}
              </Select.Option>
            ))}
          </Select>
          <Text>Time</Text>
          <InputNumber
            onChange={setDuration}
            style={{ width: 200 }}
            value={duration}
            placeholder="Please enter the easing time"
          />
        </Space>
        <div style={{ position: "relative" }}>
          <BackTop
            easing={easing}
            duration={duration}
            style={{
              position: "absolute",
              right: 60,
              bottom: 60,
            }}
            visibleHeight={30}
            target={() => document.getElementById("custom_backtop2") as HTMLElement}
          >
            <div
              className={classes.customBacktop}
              tabIndex={0}
              role="button"
              aria-label="scroll to top"
            >
              <IconCaretUp />
              <br />
              TOP
            </div>
          </BackTop>
          <div
            id="custom_backtop2"
            style={{
              height: 300,
              overflow: "auto",
              padding: "8px 12px",
            }}
          >
            <Paragraph>This is the content</Paragraph>
            <Paragraph>This is the content</Paragraph>
            <Paragraph>This is the content</Paragraph>
            <Paragraph>This is the content</Paragraph>
            <Paragraph>This is the content</Paragraph>
            <Paragraph>This is the content</Paragraph>
            <Paragraph>This is the content</Paragraph>
            <Paragraph>This is the content</Paragraph>
            <Paragraph>This is the content</Paragraph>
            <Paragraph>This is the content</Paragraph>
            <Paragraph>This is the content</Paragraph>
            <Paragraph>This is the content</Paragraph>
            <Paragraph>This is the content</Paragraph>
            <Paragraph>This is the content</Paragraph>
            <Paragraph>This is the content</Paragraph>
            <Paragraph>This is the content</Paragraph>
            <Paragraph>This is the content</Paragraph>
            <Paragraph>This is the content</Paragraph>
          </div>
        </div>
      </BrowserWindow>
    );
  },
};
