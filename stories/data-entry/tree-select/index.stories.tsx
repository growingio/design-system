import { Radio, Space, TreeSelect, TreeSelectProps } from "@/src";
import { action } from "storybook/actions";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

const meta: Meta<typeof TreeSelect> = {
  component: TreeSelect,
  title: "Components/Data Entry/TreeSelect",
};

export default meta;
type Story = StoryObj<typeof TreeSelect>;

const treeData = [
  {
    title: "Trunk 0-0",
    value: "Trunk 0-0",
    key: "0-0",
    children: [
      {
        title: "Branch 0-0-1",
        value: "Branch 0-0-1",
        key: "0-0-1",
        children: [
          {
            title: "Leaf 0-0-1-1",
            value: "Leaf 0-0-1-1",
            key: "0-0-1-1",
          },
          {
            title: "Leaf 0-0-1-2",
            value: "Leaf 0-0-1-2",
            key: "0-0-1-2",
          },
        ],
      },
    ],
  },
  {
    title: "Trunk 0-1",
    value: "Trunk 0-1",
    key: "0-1",
    children: [
      {
        title: "Branch 0-1-1",
        value: "Branch 0-1-1",
        key: "0-1-1",
        children: [
          {
            title: "Leaf 0-1-1-0",
            value: "Leaf 0-1-1-0",
            key: "0-1-1-0",
          },
        ],
      },
      {
        title: "Branch 0-1-2",
        value: "Branch 0-1-2",
        key: "0-1-2",
        children: [
          {
            title: "Leaf 0-1-2-0",
            value: "Leaf 0-1-2-0",
            key: "0-1-2-0",
          },
        ],
      },
    ],
  },
];

export const Default: Story = {
  args: {
    style: { width: 300 },
    treeData,
    placeholder: "Select a node",
    onChange: action("onChange"),
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const Multiple: Story = {
  args: {
    ...Default.args,
    multiple: true,
  },
};

export const TreeCheckable: Story = {
  args: {
    ...Default.args,
    treeCheckable: true,
  },
};

export const LabelInValue: Story = {
  args: {
    ...Default.args,
    labelInValue: true,
    onChange: action("onChange with label in value"),
  },
};

export const Search: Story = {
  args: {
    ...Default.args,
    showSearch: true,
    onSearch: action("onSearch"),
    filterTreeNode: (inputText, treeNode) => {
      return treeNode.props.title.toLowerCase().indexOf(inputText.toLowerCase()) > -1;
    },
  },
  render: (args) => <TreeSelect {...args} />,
};

export const TreeCheckStrategy: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => {
    const [treeCheckedStrategy, setTreeCheckedStrategy] = useState(TreeSelect.SHOW_CHILD);
    return (
      <Space direction="vertical" size={"large"}>
        <Radio.Group
          type="button"
          value={treeCheckedStrategy}
          onChange={setTreeCheckedStrategy}
          options={[
            {
              value: TreeSelect.SHOW_ALL,
              label: "show all",
            },
            {
              value: TreeSelect.SHOW_PARENT,
              label: "show parent",
            },
            {
              value: TreeSelect.SHOW_CHILD,
              label: "show child",
            },
          ]}
        />
        <TreeSelect
          {...args}
          showSearch
          allowClear
          treeCheckable
          treeCheckedStrategy={treeCheckedStrategy}
        />
      </Space>
    );
  },
};

export const CustomizedDropdown: Story = {
  args: {
    ...Default.args,
    dropdownRender: (menu) => (
      <div>
        <div style={{ padding: "8px", color: "#1677ff" }}>Custom header</div>
        {menu}
        <div style={{ padding: "8px", borderTop: "1px solid #e8e8e8", color: "#1677ff" }}>
          Custom footer
        </div>
      </div>
    ),
  },
};

export const DragToSort: Story = {
  args: {
    ...Default.args,
    multiple: true,
    dragToSort: true,
  },
};

export const Sizes: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => {
    const [size, setSize] = useState<TreeSelectProps["size"]>("default");
    return (
      <Space direction="vertical" size={"large"}>
        <Radio.Group type="button" name="size" value={size} onChange={setSize}>
          <Radio value="mini">mini</Radio>
          <Radio value="small">small</Radio>
          <Radio value="default">default</Radio>
          <Radio value="large">large</Radio>
        </Radio.Group>
        <TreeSelect {...args} size={size} />
      </Space>
    );
  },
};
