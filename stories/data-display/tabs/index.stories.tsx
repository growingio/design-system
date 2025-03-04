import { Radio, Tabs, Typography, Space, TabsProps, Button } from "@/src";
import { IconCalendar, IconClockCircle, IconUser } from "@arco-iconbox/react-growingio/src";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  title: "Components/Data Display/Tabs",
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

const { TabPane } = Tabs;
export const Default: Story = {
  render: (args) => (
    <Tabs {...args}>
      <TabPane key="1" title="Tab 1">
        <Typography.Paragraph>Content of Tab Panel 1</Typography.Paragraph>
      </TabPane>
      <TabPane key="2" title="Tab 2" disabled>
        <Typography.Paragraph>Content of Tab Panel 2</Typography.Paragraph>
      </TabPane>
      <TabPane key="3" title="Tab 3">
        <Typography.Paragraph>Content of Tab Panel 3</Typography.Paragraph>
      </TabPane>
    </Tabs>
  ),
};

export const Icon: Story = {
  render: () => (
    <Tabs>
      <TabPane key="1" title={<IconCalendar />}>
        <Typography.Paragraph>Content of Tab Panel 1</Typography.Paragraph>
      </TabPane>
      <TabPane key="2" title={<IconClockCircle />}>
        <Typography.Paragraph>Content of Tab Panel 2</Typography.Paragraph>
      </TabPane>
      <TabPane key="3" title={<IconUser />}>
        <Typography.Paragraph>Content of Tab Panel 3</Typography.Paragraph>
      </TabPane>
    </Tabs>
  ),
};

export const TabPosition: Story = {
  render: () => {
    const [position, setPosition] = useState<TabsProps["tabPosition"]>("top");
    return (
      <Space direction="vertical" size={"large"} style={{ width: "100%" }}>
        <Radio.Group
          name="position"
          value={position}
          onChange={setPosition}
          options={["left", "top", "bottom", "right"]}
        />
        <Tabs key="card" tabPosition={position}>
          <TabPane key="1" title="Tab 1">
            <Typography.Paragraph>Content of Tab Panel 1</Typography.Paragraph>
          </TabPane>
          <TabPane key="2" title="Tab 2">
            <Typography.Paragraph>Content of Tab Panel 2</Typography.Paragraph>
          </TabPane>
          <TabPane key="3" title="Tab 3">
            <Typography.Paragraph>Content of Tab Panel 3</Typography.Paragraph>
          </TabPane>
        </Tabs>
      </Space>
    );
  },
};

export const TabsType: Story = {
  render: () => {
    const [type, setType] = useState<TabsProps["type"]>("line");
    return (
      <div>
        <Radio.Group name="type" value={type} onChange={setType} style={{ marginBottom: 40 }}>
          <Radio value="line">line</Radio>
          <Radio value="card">card</Radio>
          <Radio value="card-gutter">card-gutter</Radio>
          <Radio value="text">text</Radio>
          <Radio value="rounded">rounded</Radio>
          <Radio value="capsule">capsule</Radio>
        </Radio.Group>

        <Tabs type={type}>
          <TabPane key="1" title="Tab 1">
            <Typography.Paragraph>Content of Tab Panel 1</Typography.Paragraph>
          </TabPane>
          <TabPane key="2" title="Tab 2" disabled>
            <Typography.Paragraph>Content of Tab Panel 2</Typography.Paragraph>
          </TabPane>
          <TabPane key="3" title="Tab 3">
            <Typography.Paragraph>Content of Tab Panel 3</Typography.Paragraph>
          </TabPane>
          <TabPane key="4" title="Tab 4">
            <Typography.Paragraph>Content of Tab Panel 4</Typography.Paragraph>
          </TabPane>
        </Tabs>
      </div>
    );
  },
};

export const Extra: Story = {
  ...Default,
  args: {
    extra: <Button>Action</Button>,
  },
};

export const Editable: Story = {
  render: () => {
    let count = 5;
    const initTabs = [...new Array(count)].map((_, i) => ({
      title: `Tab ${i + 1}`,
      key: `key${i + 1}`,
      content: `${i + 1}`,
    }));
    const [tabs, setTabs] = useState(initTabs);
    const [activeTab, setActiveTab] = useState("key2");

    const handleAddTab = () => {
      const newTab = {
        title: `New Tab${++count}`,
        key: `new key${count}`,
        content: `${count}`,
      };
      setTabs([...tabs, newTab]);
      setActiveTab(newTab.key);
    };

    const handleDeleteTab = (key: string) => {
      const index = tabs.findIndex((x) => x.key === key);
      const newTabs = tabs.slice(0, index).concat(tabs.slice(index + 1));

      if (key === activeTab && index > -1 && newTabs.length) {
        setActiveTab(newTabs[index] ? newTabs[index].key : newTabs[index - 1].key);
      }

      if (index > -1) {
        setTabs(newTabs);
      }
    };

    return (
      <Tabs
        editable
        type="card-gutter"
        activeTab={activeTab}
        onAddTab={handleAddTab}
        onDeleteTab={handleDeleteTab}
        onChange={setActiveTab}
      >
        {tabs.map((x) => (
          <TabPane destroyOnHide key={x.key} title={x.title}>
            <Typography.Paragraph>{`Content of Tab Panel ${x.content}`}</Typography.Paragraph>
          </TabPane>
        ))}
      </Tabs>
    );
  },
};

export const Nested: Story = {
  render: () => (
    <Tabs tabPosition="left">
      <TabPane key="tab1" title="Tab 1">
        <div>
          <Tabs>
            <TabPane key="tab1" title="Tab 1">
              <Typography.Paragraph>Content of Tab Panel 1</Typography.Paragraph>
            </TabPane>
            <TabPane key="tab2" title="Tab 2">
              <Typography.Paragraph>Content of Tab Panel 2</Typography.Paragraph>
            </TabPane>
            <TabPane key="tab3" title="Tab 3">
              <Typography.Paragraph>Content of Tab Panel 3</Typography.Paragraph>
            </TabPane>
          </Tabs>
        </div>
      </TabPane>
      <TabPane key="tab2" title="Tab 2">
        <Typography.Paragraph>Content of Tab Panel 2</Typography.Paragraph>
      </TabPane>
      <TabPane key="tab3" title="Tab 3">
        <Typography.Paragraph>Content of Tab Panel 3</Typography.Paragraph>
      </TabPane>
    </Tabs>
  ),
};

export const Size: Story = {
  render: () => {
    const [type, setType] = useState<TabsProps["type"]>("line");
    const [size, setSize] = useState<TabsProps["size"]>("default");
    return (
      <div>
        <span style={{ marginRight: 20 }}>Size:</span>
        <Radio.Group name="size" value={size} onChange={setSize} style={{ marginBottom: 24 }}>
          <Radio value="mini">mini</Radio>
          <Radio value="small">small</Radio>
          <Radio value="default">default</Radio>
          <Radio value="large">large</Radio>
        </Radio.Group>
        <br />
        <span style={{ marginRight: 20 }}>Type:</span>
        <Radio.Group name="type" value={type} onChange={setType} style={{ marginBottom: 40 }}>
          <Radio value="line">line</Radio>
          <Radio value="card">card</Radio>
          <Radio value="card-gutter">card-gutter</Radio>
          <Radio value="text">text</Radio>
          <Radio value="rounded">rounded</Radio>
          <Radio value="capsule">capsule</Radio>
        </Radio.Group>

        <Tabs type={type} size={size}>
          <TabPane key="1" title="Tab 1">
            <Typography.Paragraph>Content of Tab Panel 1</Typography.Paragraph>
          </TabPane>
          <TabPane key="2" title="Tab 2" disabled>
            <Typography.Paragraph>Content of Tab Panel 2</Typography.Paragraph>
          </TabPane>
          <TabPane key="3" title="Tab 3">
            <Typography.Paragraph>Content of Tab Panel 3</Typography.Paragraph>
          </TabPane>
          <TabPane key="4" title="Tab 4">
            <Typography.Paragraph>Content of Tab Panel 4</Typography.Paragraph>
          </TabPane>
        </Tabs>
      </div>
    );
  },
};

export const Scroll: Story = {
  render: () => {
    const paneStyle = {
      width: "100%",
      height: 50,
      padding: "24px 0",
      color: "#939aa3",
    };
    const tabs = [...new Array(30)].map((_, i) => ({
      title: `Tab ${i + 1}`,
      key: `key${i + 1}`,
      content: `Tab ${i + 1} Content`,
    }));
    const [direction, setDirection] = useState<TabsProps["direction"]>("horizontal");
    return (
      <div style={{ width: 600 }}>
        <Space direction="vertical" style={{ marginBottom: 40 }}>
          <Radio.Group
            type="button"
            name="direction"
            value={direction}
            onChange={setDirection}
            options={["horizontal", "vertical"]}
          ></Radio.Group>
        </Space>

        <Tabs defaultActiveTab="key7" direction={direction} style={{ height: 200 }}>
          {tabs.map((x) => (
            <TabPane destroyOnHide key={x.key} title={x.title}>
              <div style={paneStyle}>{`This is ${x.content}`}</div>
            </TabPane>
          ))}
        </Tabs>
      </div>
    );
  },
};

export const ScrollPosition: Story = {
  render: () => {
    const paneStyle = {
      width: "100%",
      height: 50,
      padding: "24px 0",
      color: "#939aa3",
    };
    const tabs = [...new Array(30)].map((_, i) => ({
      title: `Tab ${i + 1}`,
      key: `key${i + 1}`,
      content: `Tab ${i + 1} Content`,
    }));
    const [direction, setDirection] = useState<TabsProps["direction"]>("horizontal");
    const [position, setPosition] = useState<TabsProps["scrollPosition"]>("auto");
    return (
      <div style={{ width: 600 }}>
        <Space direction="vertical" style={{ marginBottom: 40 }}>
          <Radio.Group
            type="button"
            name="direction"
            value={direction}
            onChange={setDirection}
            options={["horizontal", "vertical"]}
          ></Radio.Group>
          <Radio.Group
            type="button"
            name="direction"
            value={position}
            onChange={setPosition}
            options={["auto", "start", "end", "center"]}
          ></Radio.Group>
        </Space>

        <Tabs
          defaultActiveTab="key9"
          direction={direction}
          style={{ height: 200 }}
          scrollPosition={position}
        >
          {tabs.map((x) => (
            <TabPane destroyOnHide key={x.key} title={x.title}>
              <div style={paneStyle}>{`This is ${x.content}`}</div>
            </TabPane>
          ))}
        </Tabs>
      </div>
    );
  },
};
