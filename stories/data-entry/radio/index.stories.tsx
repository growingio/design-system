import { Radio, Space } from "@/src";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { action } from "storybook/actions";

const meta: Meta<typeof Radio> = {
  component: Radio,
  title: "Components/Data Entry/Radio",
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    children: "Radio",
    onChange: action("onChange"),
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const Children: Story = {
  args: {
    ...Default.args,
    children: (
      <Space>
        <img
          style={{
            width: 30,
            height: 30,
            verticalAlign: "middle",
          }}
          src="/demos/avatar.png"
        />
        Avatar
      </Space>
    ),
  },
};

const RadioGroup = Radio.Group;
type GroupStory = StoryObj<typeof RadioGroup>;

export const Group: GroupStory = {
  args: {
    options: [
      {
        label: "Beijing",
        value: "beijing",
      },
      {
        label: "Shanghai",
        value: "shanghai",
      },
      {
        label: "Guangzhou",
        value: "guangzhou",
      },
      {
        label: "Shenzhen",
        value: "shenzhen",
      },
    ],
  },
  render: (args) => <RadioGroup {...args} />,
};

export const VerticalGroup: GroupStory = {
  ...Group,
  args: {
    ...Group.args,
    direction: "vertical",
  },
};

export const ButtonGroup: GroupStory = {
  ...Group,
  args: {
    ...Group.args,
    type: "button",
  },
};

export const Sizes: GroupStory = {
  args: {
    ...Group.args,
    type: "button",
    defaultValue: "beijing",
  },
  render: (args) => (
    <Space direction="vertical" size={"medium"}>
      <RadioGroup {...args} size="mini" />
      <RadioGroup {...args} size="small" />
      <RadioGroup {...args} size="default" />
      <RadioGroup {...args} size="large" />
    </Space>
  ),
};

export const ReadOnly: Story = {
  args: {
    readOnly: true,
  },
  render: (args) => (
    <Space direction="vertical" size={"medium"}>
      <RadioGroup defaultValue={"offline"}>
        <Radio {...args} value={"offline"}>
          Offline
        </Radio>
        <Radio {...args} value={"realtime"}>
          Realtime
        </Radio>
      </RadioGroup>
      <RadioGroup type="button" defaultValue={"offline"}>
        <Radio {...args} value={"offline"}>
          Offline
        </Radio>
        <Radio {...args} value={"realtime"}>
          Realtime
        </Radio>
      </RadioGroup>
    </Space>
  ),
};
