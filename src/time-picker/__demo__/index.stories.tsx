import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Alert, Radio, Select, Space, TimePicker, Typography } from '../..';
import { IconInfoCircle } from '@arco-iconbox/react-growingio';
import { SizeType } from '../../_core/types';

const meta: Meta<typeof TimePicker> = {
  component: TimePicker,
  title: 'Base/TimePicker',
};

export default meta;
type Story = StoryObj<typeof TimePicker>;

export const Basic: Story = {
  args: {
    style: { width: 180 },
  },
  render: (args) => <TimePicker {...args} />,
};

export const Status: Story = {
  args: {
    ...Basic.args,
  },
  render: (args, { intl: { formatMessage } }) => (
    <Space>
      <TimePicker
        {...args}
        placeholder={formatMessage({ defaultMessage: '禁用状态' })}
        disabled
      />
      <TimePicker
        {...args}
        placeholder={formatMessage({ defaultMessage: '错误状态' })}
        error
      />
    </Space>
  ),
};

export const Prefix: Story = {
  ...Basic,
  args: {
    ...Basic.args,
    prefix: <IconInfoCircle />,
  },
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
        <TimePicker
          {...args}
          size={size}
          placeholder={formatMessage({ defaultMessage: '请选择时间' })}
        />
      </Space>
    );
  },
};

export const Format: Story = {
  ...Basic,
  args: {
    ...Basic.args,
    format: 'HH:mm',
    defaultValue: '10:24',
  },
};

export const Step: Story = {
  ...Basic,
  args: {
    ...Basic.args,
    defaultValue: '10:25:00',
    step: { hour: 2, minute: 5, second: 10 },
  },
};

export const Extra: Story = {
  ...Basic,
  args: {
    ...Basic.args,
    extra: 'Extra Footer',
  },
};

export const DisabledTime: Story = {
  ...Basic,
  args: {
    ...Basic.args,
    disabledHours: () => [1, 2, 4, 14],
    disabledMinutes: () => [1, 2, 3, 4, 14, 15, 16, 20, 50],
    disabledSeconds: () => [1, 2, 3, 4, 5, 6, 7, 10, 14, 60],
  },
};

export const Use12Hours: Story = {
  args: {
    ...Basic.args,
    use12Hours: true,
    format: 'hh:mm:ss A',
    defaultValue: '10:24:00 AM',
  },
  render: (args) => (
    <Space>
      <TimePicker {...args} />
      <TimePicker {...args} defaultValue={'12:12:00 PM'} />
      <TimePicker {...args} defaultValue={'12:12:00 AM'} format="hh:mm:ss a" />
    </Space>
  ),
};

export const DisableConfirm: Story = {
  ...Basic,
  args: {
    ...Basic.args,
    disableConfirm: true,
  },
};

export const UtcOffset: Story = {
  name: 'UTC Offset',
  args: {
    ...Basic.args,
  },
  render: (args, { intl: { formatMessage } }) => {
    const [utcOffset, setUtcOffset] = useState(0);
    const [value, setValue] = useState(new Date('2023-10-24 10:24:00'));

    const utcList = [];
    let uo = -12;

    for (let i = 0; i < 25; i++) {
      utcList[i] = {
        label: `UTC ${uo ? (uo > 0 ? `+${uo}` : uo) : ''}`,
        value: uo++,
      };
    }

    return (
      <Space direction="vertical">
        <Space>
          <Select
            defaultValue={utcOffset}
            options={utcList}
            onChange={(offset) => setUtcOffset(offset)}
            triggerProps={{
              autoAlignPopupWidth: false,
              position: 'bl',
            }}
          />
          <TimePicker
            {...args}
            placeholder={formatMessage({ defaultMessage: '请选择时间' })}
            utcOffset={utcOffset}
            value={value}
            onChange={(_, vd) => setValue(vd && vd.toDate())}
          />
        </Space>
        <Alert
          showIcon={false}
          content={
            <Space direction="vertical">
              <div>
                <Typography.Text bold>Locale String:</Typography.Text>{' '}
                {value.toLocaleString('en-US')}
              </div>
              <div>
                <Typography.Text bold>ISO String:</Typography.Text>{' '}
                {value.toISOString()}
              </div>
              <div>
                <Typography.Text bold>Timestamp:</Typography.Text>{' '}
                {value.valueOf()}
              </div>
            </Space>
          }
        />
      </Space>
    );
  },
};

export const Timezone: Story = {
  args: {
    ...Basic.args,
  },
  render: (args, { intl: { formatMessage } }) => {
    const zoneList = [
      'America/Los_Angeles',
      'Europe/London',
      'Africa/Cairo',
      'Asia/Shanghai',
    ];
    const defaultValue = new Date('2023-10-24 10:24:00');
    const [timezone, setTimezone] = useState('Asia/Shanghai');
    const [value, setValue] = useState(defaultValue);
    return (
      <Space direction="vertical">
        <Space>
          <Select
            defaultValue={timezone}
            options={zoneList}
            onChange={(tz) => setTimezone(tz)}
            triggerProps={{
              autoAlignPopupWidth: false,
              position: 'bl',
            }}
          />
          <TimePicker
            {...args}
            placeholder={formatMessage({ defaultMessage: '请选择时间' })}
            timezone={timezone}
            defaultValue={defaultValue}
            onChange={(_, vd) => setValue(vd && vd.toDate())}
          />
        </Space>
        <Alert
          showIcon={false}
          content={
            <Space direction="vertical">
              <div>
                <Typography.Text bold>Locale String:</Typography.Text>{' '}
                {value.toLocaleString('en-US')}
              </div>
              <div>
                <Typography.Text bold>ISO String:</Typography.Text>{' '}
                {value.toISOString()}
              </div>
              <div>
                <Typography.Text bold>Timestamp:</Typography.Text>{' '}
                {value.valueOf()}
              </div>
            </Space>
          }
        />
      </Space>
    );
  },
};

const { RangePicker } = TimePicker;
type RangePickerStory = StoryObj<typeof RangePicker>;

export const TimeRangePicker: RangePickerStory = {
  args: {
    style: { width: 252 },
  },
  render: (args, { intl: { formatMessage } }) => (
    <Space direction="vertical" size="large">
      <RangePicker
        {...args}
        placeholder={[
          formatMessage({ defaultMessage: '开始时间' }),
          formatMessage({ defaultMessage: '结束时间' }),
        ]}
      />
      <RangePicker
        {...args}
        placeholder={[
          formatMessage({ defaultMessage: '禁用状态' }),
          formatMessage({ defaultMessage: '禁用状态' }),
        ]}
        disabled
      />
      <RangePicker
        {...args}
        placeholder={[
          formatMessage({ defaultMessage: '错误状态' }),
          formatMessage({ defaultMessage: '错误状态' }),
        ]}
        error
      />
    </Space>
  ),
};
