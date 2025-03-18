import type { Meta, StoryObj } from "@storybook/react";
import { Drawer, DrawerProps, Button, Radio, Space, Divider, Descriptions, Link } from "@/src";
import { useRef, useState } from "react";

const meta: Meta<typeof Drawer> = {
  component: Drawer,
  title: "Components/Feedback/Drawer",
};

export default meta;
type Story = StoryObj<typeof Drawer>;

const { Group: RadioGroup } = Radio;

export const Default: Story = {
  args: {
    title: "Drawer Title",
  },
  render: (args) => {
    const [visible, setVisible] = useState(false);
    return (
      <>
        <Button
          onClick={() => {
            setVisible(true);
          }}
          type="primary"
        >
          Open Drawer
        </Button>
        <Drawer
          {...args}
          visible={visible}
          onOk={() => {
            setVisible(false);
          }}
          onCancel={() => {
            setVisible(false);
          }}
        />
      </>
    );
  },
};

export const Placement: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => {
    const [visible, setVisible] = useState(false);
    const [placement, setPlacement] = useState<DrawerProps["placement"]>("right");

    return (
      <Space direction="vertical">
        <RadioGroup name="placement" defaultValue={placement} onChange={setPlacement}>
          <Radio value="top">Top</Radio>
          <Radio value="bottom">Bottom</Radio>
          <Radio value="left">Left</Radio>
          <Radio value="right">Right</Radio>
        </RadioGroup>
        <Button
          onClick={() => {
            setVisible(true);
          }}
          type="primary"
          style={{ marginTop: 20 }}
        >
          Open Drawer
        </Button>
        <Drawer
          {...args}
          visible={visible}
          placement={placement}
          onOk={() => {
            setVisible(false);
          }}
          onCancel={() => {
            setVisible(false);
          }}
        >
          <div>Here is an example text. </div>
          <div>Here is an example text.</div>
        </Drawer>
      </Space>
    );
  },
};

export const Nested: Story = {
  render: () => {
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    return (
      <>
        <Button
          onClick={() => {
            setVisible(true);
          }}
          type="primary"
        >
          Open Drawer
        </Button>
        <Drawer
          width={500}
          title={<span>First Drawer </span>}
          visible={visible}
          onOk={() => {
            setVisible(false);
          }}
          onCancel={() => {
            setVisible(false);
          }}
        >
          <Button
            onClick={() => {
              setVisible2(true);
            }}
            type="primary"
            style={{ marginTop: 20 }}
          >
            Open Drawer
          </Button>
        </Drawer>
        <Drawer
          width={332}
          title={<span>Second Drawer </span>}
          visible={visible2}
          onOk={() => {
            setVisible2(false);
          }}
          onCancel={() => {
            setVisible2(false);
          }}
        >
          <div>Here is an example text.</div>
          <div>Here is an example text.</div>
        </Drawer>
      </>
    );
  },
};

export const Preview: Story = {
  ...Default,
  args: {
    title: <span>User Information </span>,
    footer: null,
    width: 350,
    children: (
      <>
        <Descriptions
          colon=""
          title="Personal Information"
          column={1}
          labelStyle={{ width: 100 }}
          data={[
            {
              label: "Name",
              value: "Orwell",
            },
            {
              label: "Date of birth",
              value: "1995.01.01",
            },
            {
              label: "City",
              value: "Beijing",
            },
            {
              label: "To work",
              value: "2017.07",
            },
          ]}
        />
        <Divider />
        <Descriptions
          colon=""
          title="Contact Information"
          column={1}
          labelStyle={{ width: 100 }}
          data={[
            {
              label: "Telephone",
              value: "+86 136-6333-2888",
            },
            {
              label: "Email",
              value: "123456789@163.com",
            },
            {
              label: "Website",
              value: <Link href="/">https://growingio.design/123456789</Link>,
            },
          ]}
        />
      </>
    ),
  },
};

export const Container: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => {
    const [visible, setVisible] = useState(false);
    const ref = useRef(null);

    return (
      <div
        ref={ref}
        style={{
          width: 600,
          height: 300,
          backgroundColor: "var(--color-fill-2)",
          position: "relative",
          overflow: "hidden",
          lineHeight: "300px",
          textAlign: "center",
        }}
      >
        <Button
          onClick={() => {
            setVisible(true);
          }}
          type="primary"
        >
          Open Drawer
        </Button>
        <Drawer
          {...args}
          visible={visible}
          onOk={() => {
            setVisible(false);
          }}
          onCancel={() => {
            setVisible(false);
          }}
          getPopupContainer={() => (ref?.current ? (ref.current as Element) : document.body)}
        />
      </div>
    );
  },
};
