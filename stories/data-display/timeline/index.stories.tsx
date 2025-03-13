import { Radio, Timeline, TimelineProps, Space, Typography } from "@/src";
import {
  IconCheck,
  IconClockCircle,
  IconExclamationCircleFill,
} from "@arco-iconbox/react-growingio/src";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof Timeline> = {
  component: Timeline,
  title: "Components/Data Display/Timeline",
};

export default meta;
const { Item: TimelineItem } = Timeline;
type Story = StoryObj<typeof Timeline>;
type ItemStory = StoryObj<typeof TimelineItem>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <>
      <Typography.Title>GrowingIO Memorabilia</Typography.Title>
      <Timeline {...args}>
        <TimelineItem label="2017">Shanghai and Shenzhen branches were established.</TimelineItem>
        <TimelineItem label="2018">Completed Series B financing of ¥30 million.</TimelineItem>
        <TimelineItem label="2019">The number of customers exceeded 1,000.</TimelineItem>
        <TimelineItem label="2020">The number of customers exceeded 1,500.</TimelineItem>
      </Timeline>
    </>
  ),
};

export const Reverse: Story = {
  ...Default,
  args: {
    reverse: true,
  },
};

export const Pending: Story = {
  ...Default,
  args: {
    pending: true,
  },
};

export const LabelPosition: Story = {
  ...Default,
  args: {
    labelPosition: "relative",
  },
};

export const VerticalMode: Story = {
  render: () => {
    const [mode, setMode] = useState<TimelineProps["mode"]>("left");
    return (
      <Space direction="vertical" size={"large"}>
        <Radio.Group
          value={mode}
          onChange={setMode}
          options={[
            {
              label: "left",
              value: "left",
            },
            {
              label: "right",
              value: "right",
            },
            {
              label: "alternate",
              value: "alternate",
            },
          ]}
        />
        <Timeline mode={mode}>
          <TimelineItem label="2017">Shanghai and Shenzhen branches were established.</TimelineItem>
          <TimelineItem label="2018">Completed Series B financing of $30 million.</TimelineItem>
          <TimelineItem label="2019">The number of customers exceeded 1,000.</TimelineItem>
          <TimelineItem label="2020">The number of customers exceeded 1,500.</TimelineItem>
        </Timeline>
      </Space>
    );
  },
};

export const HorizontalMode: Story = {
  render: () => {
    const [mode, setMode] = useState<TimelineProps["mode"]>("top");
    return (
      <Space direction="vertical" size={"large"}>
        <Radio.Group
          value={mode}
          onChange={setMode}
          options={[
            {
              label: "top",
              value: "top",
            },
            {
              label: "bottom",
              value: "bottom",
            },
            {
              label: "alternate",
              value: "alternate",
            },
          ]}
        />
        <Timeline direction="horizontal" mode={mode}>
          <TimelineItem label="2017">Shanghai and Shenzhen branches were established.</TimelineItem>
          <TimelineItem label="2018">Completed Series B financing of $30 million.</TimelineItem>
          <TimelineItem label="2019">The number of customers exceeded 1,000.</TimelineItem>
          <TimelineItem label="2020">The number of customers exceeded 1,500.</TimelineItem>
        </Timeline>
      </Space>
    );
  },
};

export const ItemDotColor: ItemStory = {
  args: {
    dotColor: "#00B42A",
  },
  render: (args) => (
    <>
      <Typography.Title>GrowingIO Memorabilia</Typography.Title>
      <Timeline>
        <TimelineItem {...args} label="2017">
          Shanghai and Shenzhen branches were established.
        </TimelineItem>
        <TimelineItem {...args} label="2018">
          Completed Series B financing of ¥30 million.
        </TimelineItem>
        <TimelineItem {...args} label="2019" dotColor="#F53F3F">
          The number of customers exceeded 1,000.
          <IconExclamationCircleFill
            style={{
              color: "F53F3F",
              fontSize: 12,
              marginLeft: 4,
            }}
          />
        </TimelineItem>
        <TimelineItem {...args} label="2020">
          The number of customers exceeded 1,500.
        </TimelineItem>
      </Timeline>
    </>
  ),
};

export const ItemLineType: ItemStory = {
  ...ItemDotColor,
  args: {
    lineType: "dashed",
  },
};

export const CustomItem: Story = {
  render: () => (
    <Space size={40}>
      <Timeline>
        <TimelineItem label="2020-04-12" dotColor="#00B42A">
          The first milestone
        </TimelineItem>
        <TimelineItem label="2020-05-17" dotType="hollow">
          The second milestone
        </TimelineItem>
        <TimelineItem
          label="2020-06-22"
          dot={<IconClockCircle style={{ fontSize: 12, color: "#F53F3F" }} />}
        >
          The third milestone
        </TimelineItem>
        <TimelineItem label="2020-06-22" dotColor="var(--color-fill-4)">
          The third milestone
        </TimelineItem>
      </Timeline>

      <Timeline>
        <TimelineItem
          label="2020-04-12"
          dot={
            <IconCheck
              style={{
                fontSize: 12,
                padding: 2,
                boxSizing: "border-box",
                borderRadius: "50%",
                backgroundColor: "var(--color-primary-light-1)",
              }}
            />
          }
        >
          The first milestone
        </TimelineItem>
        <TimelineItem
          label="2020-05-17"
          dot={
            <IconCheck
              style={{
                fontSize: 12,
                padding: 2,
                boxSizing: "border-box",
                borderRadius: "50%",
                backgroundColor: "var(--color-primary-light-1)",
              }}
            />
          }
        >
          The second milestone
        </TimelineItem>
        <TimelineItem label="2020-06-22">The third milestone</TimelineItem>
        <TimelineItem label="2020-06-22" dotColor="var(--color-fill-4)">
          The third milestone
        </TimelineItem>
      </Timeline>

      <Timeline>
        <TimelineItem label="2020-04-12">The first milestone</TimelineItem>
        <TimelineItem label="2020-05-17" dotColor="var(--color-fill-4)">
          The second milestone
        </TimelineItem>
        <TimelineItem label="2020-06-22" dotColor="var(--color-fill-4)" dotType="hollow">
          The third milestone
        </TimelineItem>
      </Timeline>
    </Space>
  ),
};
