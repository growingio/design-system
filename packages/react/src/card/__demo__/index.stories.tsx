import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import {
  Avatar,
  Card,
  Grid,
  Link,
  Space,
  Switch,
  Typography,
  Skeleton,
  Tabs,
} from '../..';
import classes from './index.module.css';
import {
  IconArrowRight,
  IconMore,
  IconShareInternal,
  IconThumbUp,
} from '@arco-iconbox/react-growingio';

const meta: Meta<typeof Card> = {
  component: Card,
  title: 'Base/Card',
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Basic: Story = {
  args: {
    style: { width: 360 },
    title: 'GrowingIO CDP',
    extra: <Link>More</Link>,
    children:
      "To address complex business scenarios across multiple brands, systems, and permissions, GrowingIO's enterprise customer data platform connects business and IT teams to convert the value of omnichannel consumer data into business strategies, empowering companies to drive real growth with true omnichannel data.",
  },
  render: (args) => <Card {...args} />,
};

export const Size: Story = {
  args: {
    ...Basic.args,
  },
  render: (args) => (
    <Space size="large" align="start">
      <Card {...args} />
      <Card {...args} size="small" />
    </Space>
  ),
};

export const Hoverable: Story = {
  args: {
    ...Basic.args,
    hoverable: true,
  },
  render: (args) => (
    <Space size="large" align="start">
      <Card {...args} size="small" />
      <Card {...args} className={classes.cardHoverableStyle} />
    </Space>
  ),
};

export const Borderless: Story = {
  args: {
    ...Basic.args,
    bordered: false,
  },
  render: (args) => (
    <Space
      size="large"
      align="start"
      style={{
        padding: 40,
        backgroundColor: 'var(--color-fill-2)',
      }}
    >
      <Card {...args} />
      <Card {...args} size="small" />
    </Space>
  ),
};

export const OnlyChildren: Story = {
  args: { ...Basic.args, title: undefined, extra: undefined },
  render: (args) => {
    const Content = ({ children }) => {
      return (
        <Space
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Space>
            <Avatar
              style={{
                backgroundColor: '#165DFF',
              }}
              size={28}
            >
              A
            </Avatar>
            <Typography.Text>Username</Typography.Text>
          </Space>
          {children}
        </Space>
      );
    };
    return (
      <Space direction="vertical" size="large">
        <Card hoverable {...args}>
          <Content>
            <Link>More</Link>
          </Content>
        </Card>
        <Card {...args} hoverable>
          <Content>
            <span className={classes.iconHover}>
              <IconArrowRight
                style={{
                  cursor: 'pointer',
                }}
              />
            </span>
          </Content>
        </Card>
      </Space>
    );
  },
};

export const CardMeta: Story = {
  args: {
    style: { width: 360 },
    hoverable: true,
  },
  render: (args) => (
    <Card
      {...args}
      cover={
        <div style={{ height: 204, overflow: 'hidden' }}>
          <img
            style={{ width: '100%', transform: 'translateY(-20px)' }}
            alt="dessert"
            src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
          />
        </div>
      }
    >
      <Card.Meta title="Card Title" description="This is the description" />
    </Card>
  ),
};

export const CardInGrid: Story = {
  args: {
    ...Basic.args,
    style: { width: '100%' },
  },
  render: (args) => (
    <Grid.Row gutter={[20, 20]}>
      <Grid.Col span={8}>
        <Card {...args} />
      </Grid.Col>
      <Grid.Col span={8}>
        <Card {...args} />
      </Grid.Col>
      <Grid.Col span={8}>
        <Card {...args} />
      </Grid.Col>
      <Grid.Col span={16}>
        <Card {...args} />
      </Grid.Col>
      <Grid.Col span={8}>
        <Card {...args} />
      </Grid.Col>
    </Grid.Row>
  ),
};

export const CardWithSkeleton: Story = {
  args: {
    style: { width: 384 },
  },
  render: (args) => {
    const [loading, setLoading] = useState(true);
    return (
      <>
        <Switch
          style={{ display: 'block', marginBottom: 10 }}
          checked={!loading}
          onChange={(checked) => setLoading(!checked)}
        />
        <Space align="start" size="large">
          <Card
            {...args}
            cover={
              <Skeleton
                loading={loading}
                text={{ rows: 0 }}
                image={{
                  style: {
                    width: 352,
                    height: 188,
                    margin: '16px 16px 0 16px',
                  },
                }}
              >
                <div style={{ height: 204, overflow: 'hidden' }}>
                  <img
                    style={{ width: '100%', transform: 'translateY(-20px)' }}
                    alt="dessert"
                    src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
                  />
                </div>
              </Skeleton>
            }
          >
            <Card.Meta
              avatar={
                <Skeleton
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: 4,
                  }}
                  loading={loading}
                  text={{ rows: 1, width: 64 }}
                  image={{
                    shape: 'circle',
                    style: {
                      width: 24,
                      height: 24,
                    },
                  }}
                >
                  <Space>
                    <Avatar size={24}>A</Avatar>
                    <Typography.Text>Username</Typography.Text>
                  </Space>
                </Skeleton>
              }
              title={
                <Skeleton
                  loading={loading}
                  style={{ marginTop: 0 }}
                  text={{
                    rows: 1,
                    width: 72,
                  }}
                >
                  Card Title
                </Skeleton>
              }
              description={
                <Skeleton loading={loading} text={{ rows: 1, width: 150 }}>
                  This is the description.
                </Skeleton>
              }
            />
          </Card>
          <Card
            {...args}
            title={
              <Skeleton loading={loading} text={{ rows: 1, width: 72 }}>
                Card Title
              </Skeleton>
            }
            extra={
              <Skeleton
                loading={loading}
                text={{
                  rows: 1,
                  width: '100%',
                  style: {
                    width: 30,
                    float: 'right',
                  },
                }}
              >
                <Link>More</Link>
              </Skeleton>
            }
          >
            <Skeleton
              loading={loading}
              text={{ rows: 2, width: ['100%', '80%'] }}
            >
              This is the description.
            </Skeleton>

            <Card.Meta
              avatar={
                <Skeleton
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: 4,
                  }}
                  loading={loading}
                  text={{ rows: 1, width: 64 }}
                  image={{
                    shape: 'circle',
                    style: {
                      width: 24,
                      height: 24,
                    },
                  }}
                >
                  <Space>
                    <Avatar size={24}>A</Avatar>
                    <Typography.Text>Username</Typography.Text>
                  </Space>
                </Skeleton>
              }
            />
          </Card>
        </Space>
      </>
    );
  },
};

export const GridInCard: Story = {
  args: {
    style: { width: '100%' },
    bordered: false,
  },
  render: (args) => (
    <Card {...args}>
      {new Array(7).fill(null).map((_, index) => {
        const hoverable = index % 2 === 0;
        return (
          <Card.Grid
            key={index}
            hoverable={hoverable}
            style={{
              width: '25%',
            }}
          >
            <Card {...args} title="Card Title" extra={<Link>More</Link>}>
              {hoverable ? 'Card allow to hover' : 'Card content'}
            </Card>
          </Card.Grid>
        );
      })}
    </Card>
  ),
};

export const CardInCard: Story = {
  args: {
    style: { width: 500 },
  },
  render: (args) => (
    <Card {...args} title="Card Title">
      <Card
        style={{ marginBottom: 20 }}
        title="Inner Card Title"
        extra={<Link>More</Link>}
      >
        Inner Card Content
      </Card>
      <Card title="Inner Card Title" extra={<Link>More</Link>}>
        Inner Card Content
      </Card>
    </Card>
  ),
};

export const CardWithTabs: Story = {
  args: {},
  render: (args) => (
    <Card {...args} title="Card with Tab" extra={<Link>More</Link>}>
      <Tabs
        style={{
          maxWidth: 350,
          margin: -15,
        }}
      >
        {new Array(4).fill(null).map((_, index) => {
          return (
            <Tabs.TabPane destroyOnHide key={index} title={`Tab ${index}`}>
              <div
                style={{
                  margin: '0px 16px 16px 16px',
                }}
              >
                {`Content ${index}`}
                <br />
                {`Content ${index}`}
                <br />
                {`Content ${index}`}
              </div>
            </Tabs.TabPane>
          );
        })}
      </Tabs>
    </Card>
  ),
};

export const CardActions: Story = {
  args: {
    style: { width: 360 },
  },
  render: (args) => (
    <Card
      {...args}
      cover={
        <div style={{ height: 204, overflow: 'hidden' }}>
          <img
            style={{ width: '100%', transform: 'translateY(-20px)' }}
            alt="dessert"
            src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp"
          />
        </div>
      }
      actions={[
        <span className={classes.iconHover}>
          <IconThumbUp />
        </span>,
        <span className={classes.iconHover}>
          <IconShareInternal />
        </span>,
        <span className={classes.iconHover}>
          <IconMore />
        </span>,
      ]}
    >
      <Card.Meta
        avatar={
          <Space>
            <Avatar size={24}>A</Avatar>
            <Typography.Text>Username</Typography.Text>
          </Space>
        }
        title="Card Title"
        description="This is the description"
      />
    </Card>
  ),
};
