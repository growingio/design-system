import { Button, Form, Space, Typography, VerificationCode, useVerificationCode } from "@/src";
import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import classes from "./index.module.css";

const meta: Meta<typeof VerificationCode> = {
  component: VerificationCode,
  title: "Components/Data Entry/VerificationCode",
  tags: ["new"],
};

export default meta;
type Story = StoryObj<typeof VerificationCode>;

export const Basic: Story = {
  args: {},
  render: (args) => <VerificationCode {...args} />,
};

export const Status: Story = {
  args: {
    defaultValue: "123456",
  },
  render: (args) => (
    <Space direction="vertical">
      <Space>
        <Typography.Text style={{ width: 80, display: "inline-block" }}>Disabled</Typography.Text>
        <VerificationCode {...args} disabled />
      </Space>
      <Space>
        <Typography.Text style={{ width: 80, display: "inline-block" }}>ReadOnly</Typography.Text>
        <VerificationCode {...args} readOnly />
      </Space>
      <Space>
        <Typography.Text style={{ width: 80, display: "inline-block" }}>Error</Typography.Text>
        <VerificationCode {...args} status="error" />
      </Space>
    </Space>
  ),
};

export const Sizes: Story = {
  args: {
    defaultValue: "111111",
  },
  render: (args) => (
    <Space direction="vertical">
      <VerificationCode {...args} size="mini" />
      <VerificationCode {...args} size="small" />
      <VerificationCode {...args} size="default" />
      <VerificationCode {...args} size="large" />
    </Space>
  ),
};

export const Masked: Story = {
  ...Basic,
  args: {
    defaultValue: "111",
    masked: true,
  },
};

export const Separator: Story = {
  args: {
    length: 9,
    separator: ({ index }) => ((index + 1) % 3 || index > 7 ? null : "-"),
  },
};

export const Verification: Story = {
  args: {
    size: "large",
  },
  render: (args, { intl: { formatMessage } }) => (
    <div className={classes.verification}>
      <Typography.Title heading={5}>{formatMessage({ defaultMessage: "验证码" })}</Typography.Title>
      <Form wrapperCol={{ span: 24 }}>
        <Form.Item
          field="code"
          rules={[
            {
              validator: (v, cb) => {
                return v !== "123456" ? cb("must be 123456") : cb();
              },
            },
          ]}
          validateTrigger={["onFinish"]}
        >
          <VerificationCode {...args} validate={({ inputValue }) => /\d/.test(inputValue)} />
        </Form.Item>
        <Button type="primary" size="large" htmlType="submit" style={{ marginTop: 20 }}>
          {formatMessage({ defaultMessage: "提交" })}
        </Button>
      </Form>
    </div>
  ),
};

export const Validation: Story = {
  render: (args, { intl: { formatMessage } }) => (
    <Space direction="vertical" size="large">
      <Space direction="vertical">
        <Typography.Text>{formatMessage({ defaultMessage: "只能输入数字：" })}</Typography.Text>
        <VerificationCode
          {...args}
          defaultValue="123456"
          validate={({ inputValue }) => /\d/.test(inputValue)}
        />
      </Space>
      <Space direction="vertical">
        <Typography.Text>{formatMessage({ defaultMessage: "只能输入 a-z：" })}</Typography.Text>
        <VerificationCode
          {...args}
          defaultValue="abc"
          validate={({ inputValue }) => /^[a-zA-Z]*$/.test(inputValue)}
        />
      </Space>
    </Space>
  ),
};

export const Hooks: Story = {
  render: () => {
    const inputRefList = React.useRef([]);

    const { filledValue, getInputProps } = useVerificationCode({
      getInputRefList: () => inputRefList.current || [],
      onFinish: (value) => {
        console.log(value);
      },
      onChange: (value) => {
        console.log(value);
      },
    });

    return (
      <Space size="large">
        {filledValue.map((_, index) => {
          const inputProps = { ...getInputProps(index) };
          return (
            <input
              className={classes.codeInput}
              ref={(node) => {
                // @ts-expect-error ref
                inputRefList.current[index] = node;
              }}
              {...inputProps}
              onChange={(e) => {
                inputProps.onChange?.(e.target?.value);
              }}
            />
          );
        })}
      </Space>
    );
  },
};
