import type { Meta, StoryObj } from "@storybook/react";
import { useRef, useState } from "react";
import { FormattedMessage } from "react-intl";
import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  FormInstance,
  Input,
  InputNumber,
  InputTag,
  Radio,
  Select,
  Space,
  Switch,
  Rate,
  Slider,
  TreeSelect,
  Upload,
  TimePicker,
} from "../../../src";
import { options as cascaderOptions } from "../cascader/index.stories";
import { options as selectOptions } from "../select/index.stories";
import { SizeType } from "../../../src/_core/types";

const meta: Meta<typeof Form> = {
  component: Form,
  title: "Components/Data Entry/Form",
};

export default meta;
type Story = StoryObj<typeof Form>;

const FormItem = Form.Item;

export const Basic: Story = {
  args: {
    style: { minWidth: 500 },
    autoComplete: "off",
  },
  render: (args, { intl: { formatMessage } }) => (
    <Form {...args}>
      <FormItem label={formatMessage({ defaultMessage: "用户名" })}>
        <Input placeholder={formatMessage({ defaultMessage: "请输入用户名" })} />
      </FormItem>
      <FormItem label={formatMessage({ defaultMessage: "简介" })}>
        <Input placeholder={formatMessage({ defaultMessage: "请输入简介" })} />
      </FormItem>
      <FormItem wrapperCol={{ offset: 5 }}>
        <Checkbox>{formatMessage({ defaultMessage: "我已经阅读过手册" })}</Checkbox>
      </FormItem>
      <FormItem wrapperCol={{ offset: 5 }}>
        <Button type="primary">{formatMessage({ defaultMessage: "提交" })}</Button>
      </FormItem>
    </Form>
  ),
};

export const useFormHook: Story = {
  name: "useForm",
  render: () => {
    const [form] = Form.useForm();
    function onFill() {
      form.setFieldsValue({
        username: "GrowingIO",
        read: "checked",
      });
    }
    return (
      <Form style={{ width: 400 }} form={form}>
        <FormItem field="username" label={<FormattedMessage defaultMessage="用户名" />}>
          <Input placeholder="please enter your name" />
        </FormItem>
        <FormItem field="profile" label={<FormattedMessage defaultMessage="简介" />}>
          <Input placeholder="please enter your profile" />
        </FormItem>
        <FormItem
          field="read"
          triggerPropName="checked"
          wrapperCol={{ offset: 5 }}
          rules={[{ type: "boolean", true: true }]}
        >
          <Checkbox>
            <FormattedMessage defaultMessage="我已经阅读过手册" />
          </Checkbox>
        </FormItem>
        <FormItem wrapperCol={{ offset: 5 }}>
          <Space>
            <Button type="primary" htmlType="submit">
              <FormattedMessage defaultMessage="提交" />
            </Button>
            <Button htmlType="reset">
              <FormattedMessage defaultMessage="重置" />
            </Button>
            <Button type="text" onClick={onFill}>
              <FormattedMessage defaultMessage="自动填入" />
            </Button>
          </Space>
        </FormItem>
      </Form>
    );
  },
};

export const Layout: Story = {
  render: () => {
    const [layout, setLayout] = useState<"horizontal" | "vertical" | "inline">("horizontal");
    return (
      <Form
        style={
          layout === "inline"
            ? {
                width: "100%",
              }
            : {
                width: 600,
              }
        }
        autoComplete="off"
        layout={layout}
      >
        <FormItem label={<FormattedMessage defaultMessage="布局" />}>
          <Radio.Group onChange={setLayout} type="button" name="layout" value={layout}>
            <Radio value="horizontal">
              <FormattedMessage defaultMessage="水平排列" />
            </Radio>
            <Radio value="vertical">
              <FormattedMessage defaultMessage="垂直排列" />
            </Radio>
            <Radio value="inline">
              <FormattedMessage defaultMessage="行内排列" />
            </Radio>
          </Radio.Group>
        </FormItem>
        <FormItem
          label={<FormattedMessage defaultMessage="用户名" />}
          field="username"
          tooltip={<FormattedMessage defaultMessage="用户名是必填项" />}
          rules={[{ required: true }]}
        >
          <Input style={{ width: 270 }} placeholder="please enter your name" />
        </FormItem>
        <FormItem label={<FormattedMessage defaultMessage="简介" />}>
          <Input style={{ width: 270 }} placeholder="please enter your profile" />
        </FormItem>
        <FormItem
          wrapperCol={
            layout === "horizontal"
              ? {
                  offset: 5,
                }
              : {}
          }
        >
          <Checkbox>
            <FormattedMessage defaultMessage="我已经阅读过手册" />
          </Checkbox>
        </FormItem>
        <FormItem
          wrapperCol={
            layout === "horizontal"
              ? {
                  offset: 5,
                }
              : {}
          }
        >
          <Button type="primary" htmlType="submit">
            <FormattedMessage defaultMessage="提交" />
          </Button>
        </FormItem>
      </Form>
    );
  },
};

export const ScrollToField: Story = {
  render: () => {
    const formRef = useRef<FormInstance>();

    return (
      <Space direction="vertical">
        <Button
          type="primary"
          onClick={() => {
            formRef.current && formRef.current.scrollToField("users[9]");
          }}
        >
          Scroll to the last field
        </Button>
        <Form
          ref={formRef}
          style={{
            maxWidth: 500,
            marginTop: 20,
            paddingRight: 16,
            height: 300,
            overflow: "auto",
          }}
          autoComplete="off"
          initialValues={{
            users: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
          }}
        >
          <Form.List field="users">
            {(fields) => {
              return fields.map((field, index) => {
                return (
                  <Form.Item label={"user" + index} key={field.key} field={field.field}>
                    <Input placeholder="user" />
                  </Form.Item>
                );
              });
            }}
          </Form.List>
        </Form>
      </Space>
    );
  },
};

const commonRender = (args) => (
  <Form {...args}>
    <FormItem wrapperCol={{ offset: 5 }}>
      <Checkbox>Checkbox</Checkbox>
    </FormItem>
    <FormItem label="Cascader">
      <Cascader options={cascaderOptions} />
    </FormItem>
    <FormItem label="DatePicker">
      <DatePicker />
    </FormItem>
    <FormItem label="Input">
      <Input />
    </FormItem>
    <FormItem label="TextArea">
      <Input.TextArea />
    </FormItem>
    <FormItem label="InputNumber">
      <InputNumber />
    </FormItem>
    <FormItem label="InputTag">
      <InputTag />
    </FormItem>
    <FormItem label="Radio">
      <Radio.Group>
        <Radio>A</Radio>
        <Radio>B</Radio>
        <Radio>C</Radio>
      </Radio.Group>
    </FormItem>
    <FormItem label="Rate">
      <Rate />
    </FormItem>
    <FormItem label="Select">
      <Select options={selectOptions} />
    </FormItem>
    <FormItem label="Slider">
      <Slider />
    </FormItem>
    <FormItem label="Switch">
      <Switch />
    </FormItem>
    <FormItem label="TimePicker">
      <TimePicker />
    </FormItem>
    {/* <FormItem label="TreeSelect">
      <TreeSelect />
    </FormItem> */}
    <FormItem label="Upload">
      <Upload />
    </FormItem>
  </Form>
);

export const Disabled: Story = {
  args: {
    ...Basic.args,
    disabled: true,
  },
  render: commonRender,
};

export const Sizes: Story = {
  args: {
    ...Basic.args,
  },
  render: (args) => {
    const [size, setSize] = useState<SizeType>("default");
    return (
      <Space direction="vertical" size="large">
        <Radio.Group type="button" value={size} onChange={setSize}>
          <Radio value="mini">
            <FormattedMessage defaultMessage="迷你" />
          </Radio>
          <Radio value="small">
            <FormattedMessage defaultMessage="小" />
          </Radio>
          <Radio value="default">
            <FormattedMessage defaultMessage="中" />
          </Radio>
          <Radio value="large">
            <FormattedMessage defaultMessage="大" />
          </Radio>
        </Radio.Group>
        {commonRender({ ...args, size })}
      </Space>
    );
  },
};

export const Status: Story = {
  render: () => {
    const [status, setStatus] = useState<"validating" | "success" | "error" | "warning">("error");
    return (
      <Space direction="vertical" size="large" style={{ maxWidth: 650 }}>
        <Radio.Group
          value={status}
          type="button"
          onChange={setStatus}
          options={["validating", "success", "error", "warning"]}
        />
        <Form labelCol={{ span: 8 }} autoComplete="off" wrapperCol={{ span: 16 }}>
          <FormItem validateStatus={status} help="This has not feedback and extra" extra="">
            <Input placeholder="Input..." />
          </FormItem>
          <FormItem
            hasFeedback
            validateStatus={status}
            help="This has feedback and extra"
            extra="This is extra"
          >
            <Input placeholder="Input... " />
          </FormItem>
          <FormItem hasFeedback validateStatus={status}>
            <DatePicker.RangePicker
              style={{ width: "100%" }}
              showTime
              onChange={(a) => {
                console.log(a);
              }}
              placeholder={["Start Time", "End Time"]}
            />
          </FormItem>
          <FormItem help="Please select date" validateStatus={status} hasFeedback>
            <Input.Group>
              <DatePicker style={{ width: "48%" }} placeholder="Select date" />
              <span
                style={{
                  width: "4%",
                  display: "inline-block",
                  textAlign: "center",
                }}
              >
                -
              </span>
              <TimePicker placeholder="Select time" style={{ width: "48%" }} />
            </Input.Group>
          </FormItem>
          <FormItem hasFeedback validateStatus={status} help="Choose at least one">
            <Cascader placeholder="Cascader..." allowClear options={[]} />
          </FormItem>
          <FormItem hasFeedback validateStatus={status}>
            <Select
              mode="multiple"
              allowCreate
              placeholder="Select..."
              options={["a", "b", "c", "d", "e"]}
            />
          </FormItem>
          <FormItem hasFeedback validateStatus={status} help="This is InputNumber">
            <InputNumber placeholder="InputNumber..." />
          </FormItem>
          <FormItem help="Select tree node" hasFeedback validateStatus={status}>
            <TreeSelect placeholder="TreeSelect...">
              <TreeSelect.Node key="node1" title="Node 1">
                <TreeSelect.Node key="node2" title="Node 2" />
              </TreeSelect.Node>
            </TreeSelect>
          </FormItem>
        </Form>
      </Space>
    );
  },
};
