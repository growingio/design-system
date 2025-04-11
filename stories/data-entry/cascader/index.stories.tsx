import { Button, Cascader, Radio, Space } from "@/src";
import { SizeType } from "@/src/_core/types";
import { IconCursor } from "@arco-iconbox/react-growingio/src";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof Cascader> = {
  component: Cascader,
  title: "Components/Data Entry/Cascader",
};

export default meta;
type Story = StoryObj<typeof Cascader>;

const options = [
  {
    value: "beijing",
    label: "Beijing",
    children: [
      {
        value: "beijing",
        label: "Beijing",
        children: [
          {
            value: "chaoyang",
            label: "Chaoyang",
            children: [
              {
                value: "datunli",
                label: "Datunli",
              },
            ],
          },
          {
            value: "dongcheng",
            label: "Dongcheng",
          },
          {
            value: "xicheng",
            label: "Xicheng",
          },
          {
            value: "haidian",
            label: "Haidian",
          },
          {
            value: "fengtai",
            label: "fengtai",
          },
          {
            value: "shijingshan",
            label: "Shijingshan",
          },
          {
            value: "mentougou",
            label: "Mentougou",
          },
          {
            value: "fangshan",
            label: "Fangshan",
          },
          {
            value: "tongzhou",
            label: "Tongzhou",
          },
          {
            value: "shunyi",
            label: "Shunyi",
          },
        ],
      },
    ],
  },
  {
    value: "shanghai",
    label: "Shanghai",
    children: [
      {
        value: "shanghai",
        label: "Shanghai",
        children: [
          {
            value: "huangpu",
            label: "Huangpu",
          },
        ],
      },
    ],
  },
];

export const Basic: Story = {
  args: {
    allowClear: true,
    options,
    style: { width: 300 },
  },
  render: (args, { intl: { formatMessage } }) => (
    <Cascader {...args} placeholder={formatMessage({ defaultMessage: "请选择" })} />
  ),
};

export const Status: Story = {
  args: {
    ...Basic.args,
  },
  render: (args, { intl: { formatMessage } }) => (
    <Space>
      <Cascader {...args} disabled placeholder={formatMessage({ defaultMessage: "禁用状态" })} />
      <Cascader {...args} error placeholder={formatMessage({ defaultMessage: "错误状态" })} />
    </Space>
  ),
};

export const ExpandTrigger: Story = {
  ...Basic,
  args: {
    ...Basic.args,
    expandTrigger: "hover",
  },
};

export const AddBefore: Story = {
  args: {
    ...Basic.args,
  },
  render: (args, { intl: { formatMessage } }) => (
    <Space>
      <Cascader
        {...args}
        addBefore={formatMessage({ defaultMessage: "选择地点" })}
        placeholder={formatMessage({ defaultMessage: "请选择" })}
      />
      <Cascader
        {...args}
        mode="multiple"
        addBefore={formatMessage({ defaultMessage: "选择地点" })}
        placeholder={formatMessage({ defaultMessage: "请选择" })}
      />
    </Space>
  ),
};

export const RenderFormat: Story = {
  ...Basic,
  args: {
    ...Basic.args,
    renderFormat: (values) => `${values.join(" > ")}`,
    defaultValue: ["shanghai", "shanghai", "huangpu"],
  },
};

export const Children: Story = {
  args: {
    ...Basic.args,
  },
  render: (args) => {
    const [value, setValue] = useState<string[]>(["shanghai", "shanghai", "huangpu"]);

    return (
      <Cascader {...args} defaultValue={value} onChange={(v) => setValue(v as string[])}>
        <Button>{value.join(" > ")}</Button>
      </Cascader>
    );
  },
};

export const ChangeOnSelect: Story = {
  args: {
    ...Basic.args,
    changeOnSelect: true,
  },
  render: (args, { intl: { formatMessage } }) => (
    <Space>
      <Cascader {...args} placeholder={formatMessage({ defaultMessage: "请选择" })} />
      <Cascader
        {...args}
        placeholder={formatMessage({ defaultMessage: "请选择" })}
        mode="multiple"
      />
    </Space>
  ),
};

export const ShowSearch: Story = {
  ...ChangeOnSelect,
  args: {
    ...Basic.args,
    showSearch: true,
  },
};

export const FilterOption: Story = {
  ...ShowSearch,
  args: {
    ...Basic.args,
    showSearch: true,
    filterOption: (input, { value, label }) => value.includes(input) || label.includes(input),
  },
};

export const LoadMore: Story = {
  ...ChangeOnSelect,
  args: {
    ...Basic.args,
    options: [
      {
        value: "beijing",
        label: "Beijing",
      },
      {
        value: "shanghai",
        label: "Shanghai",
      },
    ],
    loadMore: (pathValue, level) =>
      new Promise((resolve) => {
        setTimeout(() => {
          const nodes = pathValue.map((_, i) => ({
            label: `Option ${i + 1}`,
            value: i,
            isLeaf: level >= 2,
          }));
          resolve(nodes);
        }, 500);
      }),
  },
};

export const DisabledOption: Story = {
  ...ChangeOnSelect,
  args: {
    ...Basic.args,
    options: [
      {
        value: "beijing",
        label: "Beijing",
        children: [
          {
            value: "chaoyang",
            label: "Chaoyang",
            children: [
              {
                value: "datunli",
                label: "Datunli",
              },
            ],
          },
          {
            value: "dongcheng",
            label: "Dongcheng",
            disabled: true,
            children: [
              {
                value: "chaoyangmen",
                label: "Chaoyangmen",
              },
              {
                value: "jianguo",
                label: "Jianguomen",
              },
            ],
          },
          {
            value: "xicheng",
            label: "Xicheng",
          },
          {
            value: "haidian",
            label: "Haidian",
          },
        ],
      },
    ],
  },
};

export const Size: Story = {
  args: {
    ...Basic.args,
  },
  render: (args, { intl: { formatMessage } }) => {
    const [size, setSize] = useState<SizeType>("default");
    const sizeOptions = [
      {
        name: formatMessage({ defaultMessage: "迷你" }),
        value: "mini",
      },
      {
        name: formatMessage({ defaultMessage: "小" }),
        value: "small",
      },
      {
        name: formatMessage({ defaultMessage: "中" }),
        value: "default",
      },
      {
        name: formatMessage({ defaultMessage: "大" }),
        value: "large",
      },
    ];
    return (
      <Space direction="vertical" size="large">
        <Radio.Group type="button" mode="fill" name="size" value={size} onChange={setSize}>
          {sizeOptions.map(({ name, value }) => {
            return (
              <Radio key={value} value={value}>
                {name}
              </Radio>
            );
          })}
        </Radio.Group>
        <Space direction="vertical" size="large">
          <Cascader
            {...args}
            size={size}
            placeholder={formatMessage({ defaultMessage: "请选择" })}
          />
          <Cascader
            {...args}
            size={size}
            placeholder={formatMessage({ defaultMessage: "请选择" })}
            mode="multiple"
          />
        </Space>
      </Space>
    );
  },
};

export const RenderOption: Story = {
  ...Basic,
  args: {
    ...Basic.args,
    renderOption: ({ label, value }) => `${label}(${value})`,
  },
};

export const RenderFooter: Story = {
  ...Basic,
  args: {
    ...Basic.args,
    renderFooter: (level) => {
      if (level < 2) {
        return (
          <Button type="text" status="primary" size="mini">
            Click
          </Button>
        );
      }
      return null;
    },
  },
};

export const ShowEmptyChildren: Story = {
  ...Basic,
  args: {
    ...Basic.args,
    showEmptyChildren: true,
    options: [
      {
        value: "shanghai",
        label: "Shanghai",
        children: [
          {
            value: "huangpu",
            label: "Huangpu",
            children: [],
          },
          {
            value: "jingan",
            label: "Jingan",
          },
        ],
      },
      {
        value: "beijing",
        label: "Beijing",
        children: [],
      },
    ],
  },
};

export const DragToSort: Story = {
  ...Basic,
  args: {
    ...Basic.args,
    style: { width: 600 },
    mode: "multiple",
    defaultValue: [
      ["beijing", "beijing", "chaoyang", "datunli"],
      ["shanghai", "shanghai", "huangpu"],
    ],
    dragToSort: true,
  },
};

export const ReadOnly: Story = {
  args: {
    readOnly: true,
    options,
    defaultValue: ["shanghai", "shanghai", "huangpu"],
  },
  render: (args) => (
    <Space direction="vertical" size={"medium"}>
      <Cascader {...args} />
      <Cascader {...args} prefix={<IconCursor />} />
      <Cascader {...args} addBefore="Select city" />
    </Space>
  ),
};
