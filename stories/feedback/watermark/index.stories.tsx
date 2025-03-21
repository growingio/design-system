import { Form, Grid, Input, InputNumber, Radio, Slider, Space, Typography, Watermark } from "@/src";
import type { Meta, StoryObj } from "@storybook/react";
import React, { useMemo, useState } from "react";
import { FormattedMessage } from "react-intl";

const meta: Meta<typeof Watermark> = {
  component: Watermark,
  title: "Components/Feedback/Watermark",
  parameters: {
    layout: "padded",
  },
  tags: ["new"],
};

export default meta;
type Story = StoryObj<typeof Watermark>;

export const Basic: Story = {
  args: {
    content: "GrowingIO Design",
    children: <div style={{ width: "100%", height: 300 }}></div>,
  },
  render: (args) => <Watermark {...args} />,
};

export const Container: Story = {
  render: () => {
    const [current, setCurrent] = React.useState("#demo-watermark-1");

    return (
      <Grid.Row justify="space-between">
        <div
          id="demo-watermark-1"
          style={{
            width: "49%",
            height: 300,
            lineHeight: "300px",
            textAlign: "center",
            background: "var(--color-primary-light-1)",
          }}
          onClick={() => {
            setCurrent("#demo-watermark-1");
          }}
        >
          Click to mount the watermark here
        </div>
        <div
          id="demo-watermark-2"
          style={{
            width: "49%",
            height: 300,
            lineHeight: "300px",
            textAlign: "center",
            background: "var(--color-warning-light-1)",
          }}
          onClick={() => {
            setCurrent("#demo-watermark-2");
          }}
        >
          Click to mount the watermark here
        </div>

        <Watermark
          // @ts-expect-error document
          getContainer={() => document.querySelector(current)}
          content="GrowingIO Design"
        ></Watermark>
      </Grid.Row>
    );
  },
};

export const Image: Story = {
  ...Basic,
  args: {
    image: "/demos/logo-watermark.svg",
    children: Basic?.args?.children,
  },
};

export const Content: Story = {
  ...Basic,
  args: {
    children: Basic?.args?.children,
    content: ["GrowingIO", "StartDT"],
  },
};

export const Custom: Story = {
  parameters: {
    layout: "fullscreen",
  },
  render: () => {
    const defaultValue = {
      content: "GrowingIO Design",
      gapsX: 100,
      gapsY: 100,
      offsetX: 0,
      offsetY: 0,
      fontSize: 14,
      fontWeight: "normal",
      fontFamily: "sans-serif",
      color: "rgba(2,6,14,0.15)",
      rotate: -30,
      zIndex: 100,
    };

    const [form] = Form.useForm();

    const [config, setConfig] = useState(defaultValue);

    const wmProps = useMemo(() => {
      const {
        content,
        gapsX,
        gapsY,
        offsetX,
        offsetY,
        rotate,
        fontSize,
        fontWeight,
        fontFamily,
        color,
        zIndex,
      } = config;
      return {
        content,
        rotate,
        gap: [gapsX, gapsY] as [number, number],
        offset: [offsetX, offsetY] as [number, number],
        fontStyle: {
          color,
          fontSize: fontSize + "px",
          fontFamily,
          fontWeight,
        },
        zIndex,
      };
    }, [config]);

    return (
      <Grid.Row
        style={{
          padding: "0 20px",
          color: "var(--color-text-2)",
          flexWrap: "nowrap",
        }}
      >
        <Watermark {...wmProps} content="Secret!">
          <div>
            <Typography.Title heading={1}>Lorem ipsum</Typography.Title>
            <Typography.Paragraph>
              <FormattedMessage
                defaultMessage={
                  "在出版和平面设计中，随机文本(Lorem ipsum，/ˌlɔː.rəmˈɪp.səm/)是一种常用的占位文字，用于展示文档或字体的视觉形式，而不依赖有意义的内容。随机文本可以在最终文字稿还不可用时用作占位符。它也用于暂时替换文本的一个过程，称为乱码处理，这允许设计师考虑网页或出版物的版式，而不会受文字意义的影响。"
                }
              />
            </Typography.Paragraph>
            <Typography.Paragraph>
              <FormattedMessage
                defaultMessage={
                  "随机文本通常是善恶终极（De finibus bonorum et malorum）的错误版本，这是公元前1世纪罗马政治家和哲学家西塞罗的一篇文字，其中的词语经过更改、添加和删除，使其变得无意义和语法错误。头两个词本身就是痛苦本身（dolorem ipsum）的缩写。"
                }
              />
            </Typography.Paragraph>
            <Typography.Paragraph>
              <FormattedMessage
                defaultMessage={
                  "自 20 世纪 60 年代以来，随机文本至少已经在排版领域使用了，当时它因 Letraset 转印纸的广告而流行。在 20 世纪 80 年代中期，当 Aldus 公司在其桌面排版程序 PageMaker 的图形和文字处理模板中采用随机文本时，它被引入了数字世界。其他流行的文字处理程序，包括 Pages 和 Microsoft Word，此后也采用了随机文本，许多 LaTeX 包、像 Joomla! 和 WordPress 这样的网络内容管理器以及 GrowingIO Design 等设计系统也是如此。"
                }
              />
            </Typography.Paragraph>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Lorem_ipsum_design.svg/1280px-Lorem_ipsum_design.svg.png"
              width="600"
              style={{ zIndex: 50, position: "relative" }}
            />
            <Typography.Title heading={2}>示例文本</Typography.Title>
            <Typography.Paragraph>
              <FormattedMessage defaultMessage={"随机文本的一个常见形式是："} />
            </Typography.Paragraph>
            <Typography.Paragraph blockquote>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Typography.Paragraph>
          </div>
        </Watermark>
        <Form
          form={form}
          layout="vertical"
          style={{
            width: "264px",
            flexShrink: 0,
            borderLeft: "1px solid var(--color-border-2)",
            paddingLeft: 24,
            marginLeft: 24,
          }}
          onValuesChange={() => {
            // @ts-expect-error form
            setConfig(form.getFieldsValue());
          }}
        >
          <Form.Item label="内容" field="content" initialValue={defaultValue.content}>
            <Input />
          </Form.Item>
          <Form.Item label="字重" field="fontWeight" initialValue={defaultValue.fontWeight}>
            <Radio.Group options={["lighter", "normal", "bold"]} />
          </Form.Item>
          <Form.Item label="字族" field="fontFamily" initialValue={defaultValue.fontFamily}>
            <Radio.Group options={["sans-serif", "serif"]} />
          </Form.Item>
          <Form.Item label="颜色" field="color" initialValue={defaultValue.color}>
            <Radio.Group>
              <Radio value="rgba(2,6,14,0.04)">极浅</Radio>
              <Radio value="rgba(2,6,14,0.08)">浅</Radio>
              <Radio value="rgba(2,6,14,0.15)">正常</Radio>
              <Radio value="rgba(2,6,14,0.23)">深</Radio>
              <Radio value="rgba(2,6,14,0.32)">极深</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="字体大小" field="fontSize" initialValue={defaultValue.fontSize}>
            <Slider min={12} max={64} />
          </Form.Item>
          <Form.Item label="旋转角度" field="rotate" initialValue={defaultValue.rotate}>
            <Slider min={-180} max={180} />
          </Form.Item>
          <Form.Item label="zIndex" field="zIndex" initialValue={defaultValue.zIndex}>
            <Slider min={-1} max={100} />
          </Form.Item>
          <Form.Item label="间距">
            <Space>
              <Form.Item noStyle field="gapsX" initialValue={defaultValue.gapsX}>
                <InputNumber placeholder="水平间距" />
              </Form.Item>
              <Form.Item noStyle field="gapsY" initialValue={defaultValue.gapsY}>
                <InputNumber placeholder="竖直间距" />
              </Form.Item>
            </Space>
          </Form.Item>
          <Form.Item label="偏移">
            <Space>
              <Form.Item noStyle field="offsetX" initialValue={defaultValue.offsetX}>
                <InputNumber placeholder="水平偏移" />
              </Form.Item>

              <Form.Item noStyle field="offsetY" initialValue={defaultValue.offsetY}>
                <InputNumber placeholder="垂直偏移" />
              </Form.Item>
            </Space>
          </Form.Item>
        </Form>
      </Grid.Row>
    );
  },
};
