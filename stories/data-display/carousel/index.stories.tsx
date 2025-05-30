import { Carousel, CarouselProps, Radio, Space } from "@/src";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

const meta: Meta<typeof Carousel> = {
  component: Carousel,
  title: "Components/Data Display/Carousel",
};

export default meta;
type Story = StoryObj<typeof Carousel>;

const { Group: RadioGroup } = Radio;
const imageSrc = [
  "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp",
  "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp",
  "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp",
  "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp",
];

export const Default: Story = {
  args: {
    style: { width: 600, height: 240 },
  },
  render: (args) => (
    <Carousel {...args}>
      {imageSrc.map((src, index) => (
        <div key={index}>
          <img src={src} style={{ width: "100%" }} />
        </div>
      ))}
    </Carousel>
  ),
};

export const AutoPlay: Story = {
  ...Default,
  args: {
    ...Default.args,
    autoPlay: true,
    showArrow: "hover",
  },
};

export const Indicator: Story = {
  render: () => {
    const [indicatorType, setIndicatorType] = useState<CarouselProps["indicatorType"]>("dot");
    const [indicatorPosition, setIndicatorPosition] =
      useState<CarouselProps["indicatorPosition"]>("bottom");
    return (
      <Space direction="vertical" size={"medium"}>
        <RadioGroup
          type="button"
          name="type"
          value={indicatorType}
          onChange={(value) => {
            setIndicatorType(value);
          }}
        >
          <Radio value="dot">dot</Radio>
          <Radio value="line">line</Radio>
          <Radio value="slider">slider</Radio>
        </RadioGroup>
        <RadioGroup
          type="button"
          name="position"
          value={indicatorPosition}
          onChange={(value) => {
            setIndicatorPosition(value);
          }}
        >
          <Radio value="left">left</Radio>
          <Radio value="right">right</Radio>
          <Radio value="top">top</Radio>
          <Radio value="bottom">bottom</Radio>
          <Radio value="outer">outer</Radio>
        </RadioGroup>
        <Carousel
          indicatorType={indicatorType}
          indicatorPosition={indicatorPosition}
          showArrow="never"
          style={{ width: 600, height: 240 }}
        >
          {imageSrc.map((src, index) => (
            <div key={index}>
              <img src={src} style={{ width: "100%" }} />
            </div>
          ))}
        </Carousel>
      </Space>
    );
  },
};

export const Vertical: Story = {
  ...Default,
  args: {
    ...Default.args,
    direction: "vertical",
    indicatorPosition: "right",
    showArrow: "never",
  },
};

export const Card: Story = {
  args: {
    autoPlay: true,
    animation: "card",
    showArrow: "never",
    indicatorPosition: "outer",
    style: { width: "100%", height: 240 },
  },
  render: (args) => (
    <Carousel {...args}>
      {imageSrc.map((src, index) => (
        <div key={index} style={{ width: "60%" }}>
          <img src={src} style={{ width: "100%" }} />
        </div>
      ))}
    </Carousel>
  ),
};

export const VerticalCard: Story = {
  args: {
    autoPlay: true,
    animation: "card",
    showArrow: "never",
    indicatorType: "line",
    indicatorPosition: "outer-right",
    direction: "vertical",
    style: { height: 300, width: 600 },
  },
  render: (args) => (
    <Carousel {...args}>
      {imageSrc.map((src, index) => (
        <div key={index} style={{ height: 200 }}>
          <img src={src} style={{ height: "100%" }} />
        </div>
      ))}
    </Carousel>
  ),
};

export const Fade: Story = {
  ...Default,
  args: {
    ...Default.args,
    autoPlay: true,
    animation: "fade",
    showArrow: "never",
  },
};
