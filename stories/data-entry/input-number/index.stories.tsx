import { InputNumber, Radio, Space } from "@/src";
import { SizeType } from "@/src/_core/types";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

const meta: Meta<typeof InputNumber> = {
  component: InputNumber,
  title: "Components/Data Entry/InputNumber",
};

export default meta;
type Story = StoryObj<typeof InputNumber>;

export const Basic: Story = {
  args: {
    defaultValue: 500,
    style: { width: 160 },
  },
  render: (args, { intl: { formatMessage } }) => (
    <Space size="large">
      <InputNumber {...args} placeholder={formatMessage({ defaultMessage: "请输入" })} />
      <InputNumber {...args} disabled />
    </Space>
  ),
};

export const Button: Story = {
  ...Basic,
  args: {
    ...Basic.args,
    mode: "button",
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
        <Space>
          <InputNumber
            {...args}
            size={size}
            placeholder={formatMessage({ defaultMessage: "请输入" })}
          />
          <InputNumber
            {...args}
            size={size}
            mode="button"
            placeholder={formatMessage({ defaultMessage: "请输入" })}
          />
        </Space>
      </Space>
    );
  },
};

export const PrecisionAndStep: Story = {
  args: {
    ...Basic.args,
    min: 0,
    max: 10,
    defaultValue: 3.5,
    step: 0.1,
    precision: 1,
  },
  render: (args, { intl: { formatMessage } }) => {
    return <InputNumber {...args} placeholder={formatMessage({ defaultMessage: "请输入" })} />;
  },
};

export const Formatter: Story = {
  args: {
    ...Basic.args,
    min: 0,
    max: 100_000_000,
    step: 1_000,
    parser: (value) => value.replace(/,/g, ""),
  },
  render: (args, { intl: { formatMessage } }) => {
    const [value, setValue] = useState(12000);
    const [delayValue, setDelayValue] = useState(12000);
    return (
      <Space size="large">
        <InputNumber
          {...args}
          prefix={formatMessage({ defaultMessage: "CNY" })}
          value={value}
          onChange={setValue}
          formatter={(value) => `${value}`.replace(/B(?=(d{3})+(?!d))/g, ",")}
          placeholder={formatMessage({ defaultMessage: "请输入" })}
        />
        <InputNumber
          {...args}
          prefix={formatMessage({ defaultMessage: "CNY" })}
          value={delayValue}
          onChange={setDelayValue}
          formatter={(value, { userTyping, input }) =>
            userTyping ? input : `${value}`.replace(/B(?=(d{3})+(?!d))/g, ",")
          }
          placeholder={formatMessage({ defaultMessage: "请输入" })}
        />
      </Space>
    );
  },
};

export const PrefixAndSuffix: Story = {
  args: {
    ...Basic.args,
    min: 0,
  },
  render: (args, { intl: { formatMessage } }) => (
    <Space wrap size="large">
      <InputNumber
        {...args}
        prefix={formatMessage({ defaultMessage: "CNY" })}
        placeholder={formatMessage({ defaultMessage: "请输入" })}
      />
      <InputNumber
        {...args}
        suffix={formatMessage({ defaultMessage: "CNY" })}
        placeholder={formatMessage({ defaultMessage: "请输入" })}
      />
      <InputNumber
        {...args}
        mode="button"
        prefix={formatMessage({ defaultMessage: "CNY" })}
        placeholder={formatMessage({ defaultMessage: "请输入" })}
      />
      <InputNumber
        {...args}
        mode="button"
        suffix={formatMessage({ defaultMessage: "CNY" })}
        placeholder={formatMessage({ defaultMessage: "请输入" })}
      />
    </Space>
  ),
};

export const StrictMode: Story = {
  ...PrecisionAndStep,
  args: {
    strictMode: true,
    style: { width: 480 },
    mode: "button",
    defaultValue: 1e20,
    step: 1e19,
    min: 0,
  },
};

export const ReadOnly: Story = {
  args: {
    defaultValue: 50,
    readOnly: true,
  },
  render: (args) => (
    <Space direction="vertical" size={"medium"}>
      <InputNumber {...args} />
      <InputNumber {...args} mode="button" />
      <InputNumber {...args} prefix="Prefix" suffix="Suffix" />
      <InputNumber {...args} mode="button" prefix="Prefix" suffix="Suffix" />
    </Space>
  ),
};
