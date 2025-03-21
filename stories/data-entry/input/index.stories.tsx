import { Divider, Input, Radio, Select, Space, Typography } from "@/src";
import { SizeType } from "@/src/_core/types";
import {
  IconClockCircle,
  IconInfoCircle,
  IconMinus,
  IconSearch,
  IconUser,
} from "@arco-iconbox/react-growingio/src";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { useIntl } from "react-intl";

const meta: Meta<typeof Input> = {
  component: Input,
  title: "Components/Data Entry/Input",
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Basic: Story = {
  args: {
    style: { width: 350 },
    allowClear: true,
  },
  render: (args, { intl: { formatMessage } }) => (
    <Input {...args} placeholder={formatMessage({ defaultMessage: "请输入" })} />
  ),
};

export const Status: Story = {
  args: {
    ...Basic.args,
  },
  render: (args, { intl: { formatMessage } }) => (
    <Space wrap>
      <Input {...args} error placeholder={formatMessage({ defaultMessage: "错误状态" })} />
      <Input {...args} disabled placeholder={formatMessage({ defaultMessage: "禁用状态" })} />
    </Space>
  ),
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
          <Input
            {...args}
            size={size}
            prefix={<IconClockCircle />}
            placeholder={formatMessage({ defaultMessage: "请输入" })}
          />
          <Input
            {...args}
            size={size}
            suffix={<IconInfoCircle />}
            placeholder={formatMessage({ defaultMessage: "请输入" })}
          />
        </Space>
        <Space>
          <Input
            {...args}
            size={size}
            addAfter={formatMessage({
              defaultMessage: "CNY",
            })}
            placeholder={formatMessage({ defaultMessage: "请输入" })}
          />
          <Input
            {...args}
            size={size}
            addBefore={formatMessage({
              defaultMessage: "+86",
            })}
            placeholder={formatMessage({ defaultMessage: "请输入" })}
          />
        </Space>
        <Space>
          <Input
            {...args}
            size={size}
            addBefore={formatMessage({
              defaultMessage: "+86",
            })}
            addAfter={<IconSearch />}
            prefix={<IconClockCircle />}
            suffix={<IconInfoCircle />}
            placeholder={formatMessage({ defaultMessage: "请输入" })}
          />
          <Input.Search
            {...args}
            size={size}
            searchButton
            placeholder={formatMessage({ defaultMessage: "请输入" })}
          />
        </Space>
      </Space>
    );
  },
};

export const Label: Story = {
  args: {
    ...Basic.args,
  },
  render: (args, { intl: { formatMessage } }) => {
    return (
      <Space direction="vertical">
        <Space wrap>
          <Input
            {...args}
            addBefore={formatMessage({ defaultMessage: "+86" })}
            placeholder={formatMessage({ defaultMessage: "请输入" })}
          />
          <Input
            {...args}
            addAfter={formatMessage({ defaultMessage: "CNY" })}
            placeholder={formatMessage({ defaultMessage: "请输入" })}
          />
        </Space>
        <Space wrap>
          <Input
            {...args}
            addBefore="http://"
            addAfter={
              <Select defaultValue=".com" showSearch style={{ width: 80 }}>
                <Select.Option value=".com">.com</Select.Option>
                <Select.Option value=".cn">.cn</Select.Option>
                <Select.Option value=".net">.net</Select.Option>
                <Select.Option value=".org">.org</Select.Option>
              </Select>
            }
            placeholder={formatMessage({ defaultMessage: "请输入" })}
          />
          <Input
            {...args}
            addBefore={
              <Select defaultValue="www." showSearch style={{ width: 80 }}>
                <Select.Option value="www.">www.</Select.Option>
                <Select.Option value="portal.">portal.</Select.Option>
                <Select.Option value="home.">home.</Select.Option>
              </Select>
            }
            addAfter=".com"
            placeholder={formatMessage({ defaultMessage: "请输入" })}
          />
        </Space>
      </Space>
    );
  },
};

export const PrefixSuffix: Story = {
  args: {
    ...Basic.args,
  },
  render: (args, { intl: { formatMessage } }) => (
    <Space direction="vertical">
      <Space wrap>
        <Input
          {...args}
          prefix={<IconUser />}
          placeholder={formatMessage({ defaultMessage: "请输入" })}
        />
        <Input
          {...args}
          suffix={<IconInfoCircle />}
          placeholder={formatMessage({ defaultMessage: "请输入" })}
        />
      </Space>
      <Space wrap>
        <Input
          {...args}
          prefix={<IconUser />}
          suffix={<IconInfoCircle />}
          placeholder={formatMessage({ defaultMessage: "请输入" })}
        />
        <Input
          {...args}
          addBefore={formatMessage({ defaultMessage: "+86" })}
          addAfter={<IconSearch />}
          prefix={<IconUser />}
          suffix={<IconInfoCircle />}
          placeholder={formatMessage({ defaultMessage: "请输入" })}
        />
      </Space>
    </Space>
  ),
};

type SearchStory = StoryObj<typeof Input.Search>;

export const Search: SearchStory = {
  args: {
    ...Basic.args,
  },
  render: (args, { intl: { formatMessage } }) => (
    <Space wrap>
      <Input.Search {...args} placeholder={formatMessage({ defaultMessage: "请输入" })} />
      <Input.Search
        searchButton
        {...args}
        placeholder={formatMessage({ defaultMessage: "请输入" })}
      />
      <Input.Search
        searchButton={formatMessage({ defaultMessage: "搜索" })}
        {...args}
        placeholder={formatMessage({ defaultMessage: "请输入" })}
      />
    </Space>
  ),
};

export const SearchWithLoading: SearchStory = {
  ...Search,
  args: {
    ...Search.args,
    loading: true,
  },
};

export const InputGroup: Story = {
  args: {
    style: { width: 240 },
  },
  render: (args, { intl: { formatMessage } }) => (
    <Space direction="vertical" size="large">
      <Space size="large">
        <Input.Group compact>
          <Select defaultValue="Beijing" showSearch style={{ width: 100 }}>
            <Select.Option value="Beijing">Beijing</Select.Option>
            <Select.Option value="Tianjin">Tianjin</Select.Option>
            <Select.Option value="Shanghai">Shanghai</Select.Option>
          </Select>
          <Input {...args} placeholder={formatMessage({ defaultMessage: "请输入" })} />
        </Input.Group>
        <Input.Group compact>
          <Input.Search {...args} placeholder={formatMessage({ defaultMessage: "请输入" })} />
          <Select defaultValue="Beijing" showSearch style={{ width: 100 }}>
            <Select.Option value="Beijing">Beijing</Select.Option>
            <Select.Option value="Tianjin">Tianjin</Select.Option>
            <Select.Option value="Shanghai">Shanghai</Select.Option>
          </Select>
        </Input.Group>
      </Space>
      <Space size="large">
        <Input.Group>
          <Input {...args} style={{ width: 60, marginRight: 8 }} value="010" readOnly />
          <Input {...args} placeholder={formatMessage({ defaultMessage: "请输入" })} />
        </Input.Group>
        <Input.Group>
          <Input {...args} style={{ width: 60, marginRight: 8 }} value="010" readOnly />
          <IconMinus style={{ color: "var(--color-text-1)", marginRight: 8 }} />
          <Input
            {...args}
            defaultValue="8899887"
            placeholder={formatMessage({ defaultMessage: "请输入" })}
          />
        </Input.Group>
      </Space>
    </Space>
  ),
};

export const Length: Story | TextAreaStory = {
  args: {
    showWordLimit: true,
  },
  render: (args: any) => {
    const { formatMessage } = useIntl();
    return (
      <Space direction="vertical">
        <Space align="start" size={24}>
          <Input
            {...args}
            maxLength={10}
            placeholder={formatMessage(
              { defaultMessage: "请输入并不超过 {count} 个文字" },
              { count: 10 },
            )}
            style={{ width: 300 }}
          />
          <Input.TextArea
            {...args}
            maxLength={50}
            placeholder={formatMessage(
              { defaultMessage: "请输入并不超过 {count} 个文字" },
              { count: 50 },
            )}
            wrapperStyle={{ width: 300 }}
          />
        </Space>

        <Space align="start" size={24}>
          <Input
            {...args}
            maxLength={{ length: 10, errorOnly: true }}
            defaultValue={formatMessage(
              { defaultMessage: "超过 {count} 个文字将显示错误" },
              { count: 10 },
            )}
            style={{ width: 300 }}
          />
          <Input.TextArea
            {...args}
            maxLength={{ length: 50, errorOnly: true }}
            placeholder={formatMessage(
              { defaultMessage: "超过 {count} 个文字将显示错误" },
              { count: 50 },
            )}
            wrapperStyle={{ width: 300 }}
          />
        </Space>
      </Space>
    );
  },
};

type TextAreaStory = StoryObj<typeof Input.TextArea>;

export const TextArea: TextAreaStory = {
  args: {
    style: { minHeight: 64, width: 350 },
  },
  render: (args, { intl: { formatMessage } }) => (
    <Space wrap>
      <Input.TextArea {...args} placeholder={formatMessage({ defaultMessage: "请输入" })} />
      <Input.TextArea
        {...args}
        defaultValue={formatMessage({ defaultMessage: "禁用状态" })}
        disabled
      />
    </Space>
  ),
};

export const AutoSizeTextArea: TextAreaStory = {
  args: {
    style: { width: 350 },
  },
  render: (args, { intl: { formatMessage } }) => (
    <Space wrap align="start">
      <Input.TextArea
        {...args}
        defaultValue={formatMessage({ defaultMessage: "这是文本区的内容。" })}
        autoSize
      />
      <Input.TextArea
        {...args}
        autoSize={{ minRows: 2, maxRows: 6 }}
        defaultValue={formatMessage({
          defaultMessage: "这是文本区的内容。这是文本区的内容。这是文本区的内容。",
        })}
      />
    </Space>
  ),
};

type PasswordStory = StoryObj<typeof Input.Password>;

export const Password: PasswordStory = {
  args: {
    defaultValue: "password",
    style: { width: 350 },
  },
  render: (args) => (
    <Space wrap>
      <Input.Password {...args} />
      <Input.Password {...args} defaultVisibility={true} />
    </Space>
  ),
};

export const NormalizeValue: Story = {
  args: {
    ...Basic.args,
    normalize: (v) => (v ? v.trim() : v),
  },
  render: (args, { intl: { formatMessage } }) => (
    <Space size="large">
      <Space direction="vertical">
        <Typography.Paragraph>
          {formatMessage({ defaultMessage: "当失去焦点时剔除空白字符：" })}
        </Typography.Paragraph>
        <Input
          {...args}
          normalizeTrigger={["onBlur"]}
          placeholder={formatMessage({ defaultMessage: "请输入" })}
        />
      </Space>
      <Space direction="vertical">
        <Typography.Paragraph>
          {formatMessage({ defaultMessage: "当按回车键时剔除空白字符：" })}
        </Typography.Paragraph>
        <Input
          {...args}
          normalizeTrigger={["onPressEnter"]}
          placeholder={formatMessage({ defaultMessage: "请输入" })}
        />
      </Space>
    </Space>
  ),
};

export const AutoWidth: Story = {
  args: {
    autoWidth: { minWidth: 300, maxWidth: 500 },
  },
  render: (args, { intl: { formatMessage } }) => (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Divider>
        <Typography.Text code>{JSON.stringify(args.autoWidth)}</Typography.Text>
      </Divider>
      <Input {...args} placeholder={formatMessage({ defaultMessage: "请输入" })} />
      <Input {...args} prefix="Prefix" placeholder={formatMessage({ defaultMessage: "请输入" })} />
      <Input
        {...args}
        prefix="Prefix"
        addBefore="Before"
        placeholder={formatMessage({ defaultMessage: "请输入" })}
      />
    </Space>
  ),
};
