import { Button, Card, Link, Space, Spin } from "@/src";
import { IconLoop } from "@arco-iconbox/react-growingio/src";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

const meta: Meta<typeof Spin> = {
  component: Spin,
  title: "Components/Feedback/Spin",
};

export default meta;
type Story = StoryObj<typeof Spin>;

export const Default: Story = {
  args: {},
  render: (args) => <Spin {...args} />,
};

export const Dot: Story = {
  ...Default,
  args: {
    dot: true,
  },
};

export const Size: Story = {
  args: {},
  render: (args) => (
    <Space size={40}>
      <Spin {...args} size={20} />
      <Spin {...args} size={30} />
      <Spin {...args} size={40} />
    </Space>
  ),
};

export const Tip: Story = {
  args: {
    loading: true,
    tip: "This may take a while...",
  },
  render: (args) => (
    <Spin {...args}>
      <Card style={{ width: 360 }} title="GrowingIO Design" extra={<Link> More </Link>}>
        The GrowingIO Design component library defines a set of default particle variables, and a
        custom theme is to customize and overwrite this variable list.
      </Card>
    </Spin>
  ),
};

export const Icon: Story = {
  ...Tip,
  args: {
    loading: true,
    size: 30,
    icon: <IconLoop />,
  },
};

export const Delay: Story = {
  args: {
    delay: 500,
  },
  render: (args) => {
    const [loading, setLoading] = useState(true);
    return (
      <Space direction="vertical">
        <Button onClick={() => setLoading(!loading)}>{`Loading: ${loading}`}</Button>
        <Spin {...args} loading={loading}>
          <Card
            style={{ width: 360 }}
            title="Delay 500ms"
            extra={
              <a href="#" style={{ color: "#165DFF", textDecoration: "none" }}>
                More
              </a>
            }
          >
            A design is a plan or specification for the construction of an object or system or for
            the implementation of an activity or process, or the result of that plan or
            specification in the form of a prototype, product or process. The verb to design
            expresses the process of developing a design.
          </Card>
        </Spin>
      </Space>
    );
  },
};

export const Container: Story = {
  args: {
    loading: true,
  },
  render: (args) => (
    <Space direction="vertical">
      <Space>
        <Spin {...args}>
          <Card style={{ width: "100%" }} title="GrowingIO Design" extra={<Link> More </Link>}>
            The GrowingIO Design component library defines a set of default particle variables, and
            a custom theme is to customize and overwrite this variable list.
          </Card>
        </Spin>
        <Spin {...args}>
          <Card style={{ width: "100%" }} title="GrowingIO Design" extra={<Link> More </Link>}>
            The GrowingIO Design component library defines a set of default particle variables, and
            a custom theme is to customize and overwrite this variable list.
          </Card>
        </Spin>
      </Space>
      <Spin {...args} block>
        <Card title="GrowingIO Design" extra={<Link> More </Link>}>
          A design is a plan or specification for the construction of an object or system or for the
          implementation of an activity or process, or the result of that plan or specification in
          the form of a prototype, product or process. The verb to design expresses the process of
          developing a design.
        </Card>
      </Spin>
    </Space>
  ),
};
