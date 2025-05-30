import { Space, Transfer } from "@/src";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { action } from "storybook/actions";
import { IconStar } from "@arco-iconbox/react-growingio/src";
import { useState } from "react";

// Sample data for stories
const mockData = Array.from({ length: 20 }).map((_, i) => ({
  key: i.toString(),
  value: `Option ${i + 1}`,
  disabled: i % 5 === 0,
}));

const meta: Meta<typeof Transfer> = {
  component: Transfer,
  title: "Components/Data Entry/Transfer",
  argTypes: {
    onChange: { control: false },
    onSelectChange: { control: false },
    onSearch: { control: false },
    onResetData: { control: false },
    onDragStart: { control: false },
    onDragEnd: { control: false },
    onDragLeave: { control: false },
    onDragOver: { control: false },
    onDrop: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Transfer>;

export const Default: Story = {
  args: {
    dataSource: mockData,
    defaultTargetKeys: ["3", "5"],
    defaultSelectedKeys: ["4", "6"],
    onChange: action("onChange"),
    onSelectChange: action("onSelectChange"),
  },
};

export const Titles: Story = {
  args: {
    ...Default.args,
    titleTexts: ["To-do", "Done"],
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const ShowSearch: Story = {
  args: {
    ...Default.args,
    showSearch: true,
  },
};

export const OneWay: Story = {
  args: {
    ...Default.args,
    oneWay: true,
  },
};

export const Pagination: Story = {
  args: {
    ...Default.args,
    pagination: {
      pageSize: 5,
    },
  },
};

export const Simple: Story = {
  args: {
    ...Default.args,
    simple: true,
  },
};

export const Draggable: Story = {
  args: {
    ...Default.args,
    draggable: true,
  },
  render: (args) => {
    const swapArrayItem = (arr: any[], index1: number, index2: number) => {
      arr = [...arr];
      arr.splice(index1, 1, ...arr.splice(index2, 1, arr[index1]));
      return arr;
    };
    const [dataSource, setDataSource] = useState(
      new Array(8).fill(null).map((_, index) => ({
        key: `${index + 1}`,
        value: `Option ${index + 1}`,
      })),
    );
    return (
      <Transfer
        {...args}
        dataSource={dataSource}
        onDrop={({ dragItem, dropItem }) => {
          const indexDragItem = dataSource.indexOf(dragItem);
          const indexDropItem = dataSource.indexOf(dropItem);
          setDataSource(swapArrayItem(dataSource, indexDragItem, indexDropItem));
        }}
      />
    );
  },
};

export const CustomRender: Story = {
  args: {
    ...Default.args,
    render: (item) => (
      <Space>
        {item.value}
        <IconStar />
      </Space>
    ),
  },
};
