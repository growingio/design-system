import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { IntlShape } from 'react-intl';
import { Space, Table, TableColumnProps } from '@arco-design/web-react';
import { IconExclamation } from '@arco-iconbox/react-growingio';
import Empty, { EmptyProps } from '..';
import Button from '../../button';

const meta: Meta<typeof Empty> = {
  component: Empty,
  title: 'Base/Empty',
};

export default meta;

type Story = StoryObj<typeof Empty>;

export const Basic: Story = {
  render: (args) => <Empty {...args} />,
};

export const IconDesc: Story = {
  render: (args, { intl }) => (
    <Empty
      {...args}
      icon={
        <div
          style={{
            background: '#f2994b',
            display: 'inline-flex',
            borderRadius: '50%',
            width: 50,
            height: 50,
            fontSize: 30,
            alignItems: 'center',
            color: 'white',
            justifyContent: 'center',
          }}
        >
          <IconExclamation />
        </div>
      }
      description={intl.formatMessage({
        defaultMessage: '暂无数据，请重新加载！',
      })}
    />
  ),
};

export const Image: Story = {
  render: (args) => (
    <Empty
      {...args}
      imgSrc="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a0082b7754fbdb2d98a5c18d0b0edd25.png~tplv-uwbnlip3yd-webp.webp"
      description={<Button type="primary">Refresh</Button>}
    />
  ),
};

export const Sizes: Story = {
  args: {},
  render: (args, { intl: { formatMessage } }) => (
    <Space size="large" align="end">
      <Empty
        {...args}
        size="large"
        icon={<Empty.Board />}
        description={
          <Space size="small" direction="vertical">
            {formatMessage({
              defaultMessage: '你还没有属于自己的看板，快去新建一个吧',
            })}
            <Space>
              <Button>{formatMessage({ defaultMessage: '次按钮' })}</Button>
              <Button type="primary">
                {formatMessage({ defaultMessage: '主按钮' })}
              </Button>
            </Space>
          </Space>
        }
      />
      <Empty
        {...args}
        size="small"
        icon={<Empty.Board />}
        description={
          <Space size="small" direction="vertical">
            {formatMessage({ defaultMessage: '暂无看板' })}
            <Space>
              <Button size="mini">
                {formatMessage({ defaultMessage: '次按钮' })}
              </Button>
              <Button size="mini" type="primary">
                {formatMessage({ defaultMessage: '主按钮' })}
              </Button>
            </Space>
          </Space>
        }
      />
    </Space>
  ),
};

const renderEmpty = (key: string, args?: EmptyProps) => {
  switch (key) {
    case 'forbidden':
      return <Empty {...args} icon={<Empty.Forbidden />} />;
    case 'not-found':
      return <Empty {...args} icon={<Empty.NotFound />} />;
    case 'no-content':
      return <Empty {...args} icon={<Empty.NoContent />} />;
    case 'not-searched':
      return <Empty {...args} icon={<Empty.NotSearched />} />;
    case 'board':
      return <Empty {...args} icon={<Empty.Board />} />;
    case 'no-resource':
      return <Empty {...args} icon={<Empty.NoResource />} />;
    case 'no-file':
      return <Empty {...args} icon={<Empty.NoFile />} />;
  }
};

export const Styles: Story = {
  args: {},
  render: (args, { intl }) => {
    const { formatMessage } = intl as IntlShape;
    const columns: TableColumnProps[] = [
      {
        title: formatMessage({ defaultMessage: '名称' }),
        dataIndex: 'name',
      },
      {
        title: formatMessage({ defaultMessage: '大型' }),
        dataIndex: 'key',
        render: (col, item) =>
          renderEmpty(col, {
            ...args,
            size: 'large',
            description: item.descForLarge,
          }),
      },
      {
        title: formatMessage({ defaultMessage: '小型' }),
        dataIndex: 'key',
        render: (col, item) =>
          renderEmpty(col, {
            ...args,
            size: 'small',
            description: item.descForSmall,
          }),
      },
    ];
    const data = [
      {
        name: formatMessage({ defaultMessage: '无权限' }),
        key: 'forbidden',
        descForLarge: formatMessage({ defaultMessage: '此看板已取消与你共享' }),
        descForSmall: formatMessage({ defaultMessage: '无权限' }),
      },
      {
        name: formatMessage({ defaultMessage: '不存在或已删除' }),
        key: 'not-found',
        descForLarge: formatMessage({
          defaultMessage: '当前查询条件下暂无数据',
        }),
        descForSmall: formatMessage({ defaultMessage: '暂无数据' }),
      },
      {
        name: formatMessage({ defaultMessage: '内容为空' }),
        key: 'no-content',
        descForLarge: formatMessage({ defaultMessage: '内容为空' }),
        descForSmall: formatMessage({ defaultMessage: '内容为空' }),
      },
      {
        name: formatMessage({ defaultMessage: '检索无结果+失败' }),
        key: 'not-searched',
        descForLarge: formatMessage({ defaultMessage: '没有搜索到相关结果' }),
        descForSmall: formatMessage({ defaultMessage: '没有搜索到相关结果' }),
      },
      {
        name: formatMessage({ defaultMessage: '看板' }),
        key: 'board',
        descForLarge: formatMessage({
          defaultMessage: '你还没有属于自己的看板，快去新建一个吧',
        }),
        descForSmall: formatMessage({ defaultMessage: '暂无看板' }),
      },
      {
        name: formatMessage({ defaultMessage: '资源' }),
        key: 'no-resource',
        descForLarge: formatMessage({
          defaultMessage: '你还没有创建内容，快去创建一个吧',
        }),
        descForSmall: formatMessage({ defaultMessage: '未创建相关内容' }),
      },
      {
        name: formatMessage({ defaultMessage: '文件' }),
        key: 'no-file',
        descForLarge: formatMessage({ defaultMessage: '没有文件' }),
        descForSmall: formatMessage({ defaultMessage: '没有文件' }),
      },
    ];
    return (
      <Table borderCell columns={columns} data={data} pagination={false} />
    );
  },
};
