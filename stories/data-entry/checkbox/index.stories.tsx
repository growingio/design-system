import { Button, Checkbox, Space, Tag } from "@/src";
import { IconAt } from "@arco-iconbox/react-growingio/src";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: "Components/Data Entry/Checkbox",
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    children: "Checkbox",
  },
  render: (args) => <Checkbox {...args} />,
};

export const Disabled: Story = {
  ...Default,
  args: {
    children: "Disabled Checkbox",
    disabled: true,
  },
};

export const Icon: Story = {
  ...Default,
  args: {
    ...Default.args,
    icon: <IconAt />,
    defaultChecked: true,
  },
};

export const Indeterminate: Story = {
  ...Default,
  args: {
    ...Default.args,
    defaultChecked: true,
    indeterminate: true,
  },
};

const { useCheckbox } = Checkbox;
export const Hooks: Story = {
  render: () => {
    const options = [...Array(6)].map((_, i) => ({
      label: `Option ${i}`,
      value: i,
    }));
    const {
      selected,
      selectAll,
      setSelected,
      unSelectAll,
      isAllSelected,
      isPartialSelected,
      toggle,
    } = useCheckbox(
      options.map((o) => o.value),
      [1, 2],
    );

    return (
      <Space direction="vertical" size={"large"}>
        <Space size={"medium"}>
          <Checkbox
            onChange={(checked) => {
              if (checked) {
                selectAll();
              } else {
                unSelectAll();
              }
            }}
            checked={isAllSelected()}
            indeterminate={isPartialSelected()}
          >
            Check All
          </Checkbox>
          <Button
            size="small"
            type="primary"
            onClick={() => {
              toggle();
            }}
          >
            Inverse Check
          </Button>
        </Space>
        <Checkbox.Group options={options} value={selected} onChange={setSelected} />
      </Space>
    );
  },
};

type GroupStory = StoryObj<typeof Checkbox.Group>;
export const Group: GroupStory = {
  args: {
    options: [
      { emoji: "🍎", label: "Apple", value: "Apple" },
      { emoji: "🍐", label: "Pear", value: "Pear", disabled: true },
      { emoji: "🍊", label: "Orange", value: "Orange" },
    ],
  },
  render: (args) => (
    <Space direction="vertical" size={"large"}>
      <Checkbox.Group {...args} />
      <Checkbox.Group direction="vertical" {...args} />
    </Space>
  ),
};

export const Children: GroupStory = {
  args: {
    ...Group.args,
  },
  render: (args) => (
    <Checkbox.Group>
      {args.options?.map((option) => (
        <Checkbox key={option.value} value={option.value}>
          {({ checked }) => (
            <Tag color="blue" checkable checked={checked}>
              {option.emoji} {option.label}
            </Tag>
          )}
        </Checkbox>
      ))}
    </Checkbox.Group>
  ),
};
