import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { InputTag, Message, Radio, Space, Tag, Typography } from '../..';
import { IconSearch } from '@arco-iconbox/react-growingio';
import { SizeType } from '../../_core/types';
import colors from '../../_core/colors';

const meta: Meta<typeof InputTag> = {
  component: InputTag,
  title: 'Base/InputTag',
};

export default meta;
type Story = StoryObj<typeof InputTag>;

export const Basic: Story = {
  args: {
    allowClear: true,
    style: { width: 350 },
  },
  render: (args, { intl: { formatMessage } }) => (
    <Space size="large" direction="vertical">
      <Space>
        <InputTag
          {...args}
          placeholder={formatMessage({
            defaultMessage: '请输入，然后按回车键',
          })}
        />
        <InputTag
          {...args}
          placeholder={formatMessage({ defaultMessage: '只读状态' })}
          readOnly
        />
      </Space>
      <Space>
        <InputTag
          {...args}
          placeholder={formatMessage({ defaultMessage: '禁用状态' })}
          disabled
        />
        <InputTag
          {...args}
          placeholder={formatMessage({ defaultMessage: '错误状态' })}
          error
        />
      </Space>
    </Space>
  ),
};

export const PrefixAndSuffix: Story = {
  args: {
    ...Basic.args,
  },
  render: (args) => (
    <Space size="large" direction="vertical">
      <Space>
        <InputTag
          {...args}
          addBefore="https://"
          placeholder="GrowingIO.Design"
        />
        <InputTag
          {...args}
          addAfter={<IconSearch />}
          placeholder="GrowingIO Design"
        />
      </Space>
      <Space>
        <InputTag
          {...args}
          addBefore="https://"
          prefix="www."
          suffix=".design"
          addAfter="↩︎"
          placeholder="GrowingIO"
        />
      </Space>
    </Space>
  ),
};

export const Size: Story = {
  args: {
    ...Basic.args,
  },
  render: (args, { intl: { formatMessage } }) => {
    const [size, setSize] = useState<SizeType>('default');
    return (
      <Space size="large" direction="vertical">
        <Radio.Group type="button" name="size" value={size} onChange={setSize}>
          <Radio value="mini">
            {formatMessage({ defaultMessage: '迷你' })}
          </Radio>
          <Radio value="small">{formatMessage({ defaultMessage: '小' })}</Radio>
          <Radio value="default">
            {formatMessage({ defaultMessage: '中' })}
          </Radio>
          <Radio value="large">{formatMessage({ defaultMessage: '大' })}</Radio>
        </Radio.Group>
        <InputTag
          {...args}
          allowClear
          size={size}
          defaultValue={['Beijing', 'Shanghai']}
          placeholder={formatMessage({ defaultMessage: '请输入' })}
        />
      </Space>
    );
  },
};

export const LabelInValue: Story = {
  args: {
    ...Basic.args,
  },
  render: (args, { intl: { formatMessage } }) => (
    <InputTag
      {...args}
      labelInValue
      defaultValue={[{ label: 'a', value: '1' }]}
      onChange={(v) => {
        console.info('[*]  label in value: ', v);
      }}
      placeholder={formatMessage({ defaultMessage: '请输入' })}
    />
  ),
};

export const Validate: Story = {
  args: {
    ...Basic.args,
  },
  render: (args, { intl: { formatMessage } }) => {
    const [error, setError] = useState<boolean>(false);

    return (
      <Space>
        <InputTag
          {...args}
          error={error}
          placeholder={formatMessage({ defaultMessage: '请输入' })}
          validate={(v) => {
            if (v && v.length > 3) {
              setError(false);
              return true;
            }
            setError(true);
            Message.error(formatMessage({ defaultMessage: '长度必须大于 3' }));
            return false;
          }}
        />
        <InputTag
          {...args}
          placeholder={formatMessage({ defaultMessage: '格式化输入' })}
          validate={(v) => {
            return { word: v };
          }}
          onChange={(v) => {
            Message.info(JSON.stringify(v));
          }}
        />
      </Space>
    );
  },
};

export const SaveOnBlur: Story = {
  args: {
    ...Basic.args,
    saveOnBlur: true,
  },
  render: (args, { intl: { formatMessage } }) => (
    <InputTag
      {...args}
      placeholder={formatMessage({ defaultMessage: '输入然后直接失焦' })}
    />
  ),
};

export const RenderTag: Story = {
  args: {
    ...Basic.args,
  },
  render: (args, { intl: { formatMessage } }) => {
    function tagRender(props) {
      const { label, value, closable, onClose } = props;
      return (
        <Tag
          color={colors.indexOf(value) > -1 ? value : 'gray'}
          closable={closable}
          onClose={onClose}
          style={{ margin: '2px 6px 2px 0' }}
        >
          {label}
        </Tag>
      );
    }
    return (
      <InputTag
        {...args}
        defaultValue={colors.slice(0, 3)}
        renderTag={tagRender}
        placeholder={formatMessage({ defaultMessage: '请输入' })}
      />
    );
  },
};

export const Sort: Story = {
  args: {
    ...Basic.args,
    dragToSort: true,
  },
  render: (args, { intl: { formatMessage } }) => (
    <InputTag
      {...args}
      placeholder={formatMessage({ defaultMessage: '请输入' })}
      defaultValue={['a', 'b', 'c', 'd']}
    />
  ),
};

export const TokenSeparator: Story = {
  args: {
    ...Basic.args,
    tokenSeparators: [',', '|', '/'],
  },
  render: (args, { intl: { formatMessage } }) => (
    <Space direction="vertical">
      <Typography.Paragraph copyable>
        Beijing,Shenzhen|Nanjing/Xi'an
      </Typography.Paragraph>
      <InputTag
        {...args}
        placeholder={formatMessage({ defaultMessage: '粘贴文本到此处' })}
      />
    </Space>
  ),
};
