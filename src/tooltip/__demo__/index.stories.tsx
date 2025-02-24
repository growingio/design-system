import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { Typography } from '@arco-design/web-react';
import { Tooltip, Button, Link, Space } from '../..';

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  title: 'Base/Tooltip',
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Basic: Story = {
  args: {
    children: (
      <Typography.Text>
        <FormattedMessage defaultMessage="鼠标移到上面显示文字气泡" />
      </Typography.Text>
    ),
    content: <FormattedMessage defaultMessage="这是文字气泡内容" />,
  },
  render: (args) => (
    <Space size="large">
      <Tooltip {...args} />
      <Tooltip
        {...args}
        content={
          <FormattedMessage defaultMessage="这是两行的文字气泡内容。这是两行的文字气泡内容。这是两行的文字气泡内容。" />
        }
      />
    </Space>
  ),
};

export const Mini: Story = {
  args: {
    ...Basic.args,
  },
  render: (args) => <Tooltip {...args} mini content="123456789" />,
};

function getStyle(top, left) {
  return {
    position: 'absolute',
    width: 80,
    top,
    left,
  } as React.CSSProperties;
}
export const Position: Story = {
  args: {
    ...Basic.args,
  },
  render: (args) => (
    <div
      style={{
        position: 'relative',
        width: 600,
        height: 280,
      }}
    >
      <Tooltip {...args} position="tl">
        <Button style={getStyle(0, 140)}>TL</Button>
      </Tooltip>
      <Tooltip {...args} position="top">
        <Button style={getStyle(0, 250)}>Top</Button>
      </Tooltip>
      <Tooltip {...args} position="tr">
        <Button style={getStyle(0, 360)}>TR</Button>
      </Tooltip>
      <Tooltip {...args} position="lt">
        <Button style={getStyle(60, 80)}>LT</Button>
      </Tooltip>
      <Tooltip {...args} position="left">
        <Button style={getStyle(120, 80)}>Left</Button>
      </Tooltip>
      <Tooltip {...args} position="lb">
        <Button style={getStyle(180, 80)}>LB</Button>
      </Tooltip>
      <Tooltip {...args} position="rt">
        <Button style={getStyle(60, 420)}>RT</Button>
      </Tooltip>
      <Tooltip {...args} position="right">
        <Button style={getStyle(120, 420)}>Right</Button>
      </Tooltip>
      <Tooltip {...args} position="rb">
        <Button style={getStyle(180, 420)}>RB</Button>
      </Tooltip>
      <Tooltip {...args} position="bl">
        <Button style={getStyle(240, 140)}>BL</Button>
      </Tooltip>
      <Tooltip {...args} position="bottom">
        <Button style={getStyle(240, 250)}>Bottom</Button>
      </Tooltip>
      <Tooltip {...args} position="br">
        <Button style={getStyle(240, 360)}>BR</Button>
      </Tooltip>
    </div>
  ),
};

export const Color: Story = {
  args: {
    ...Basic.args,
  },
  render: (args) => {
    const colors = ['#3491FA', '#165DFF', '#722ED1'];
    return (
      <Space size="large">
        {colors.map((color) => (
          <Tooltip {...args} key={color} color={color}>
            <Button style={{ backgroundColor: color, color: '#fff' }}>
              {color}
            </Button>
          </Tooltip>
        ))}
      </Space>
    );
  },
};

export const WithLink: Story = {
  args: {
    ...Basic.args,
  },
  render: (args) => (
    <Space size="large" wrap>
      <Tooltip
        {...args}
        content={
          <Space>
            <span>Tooltip</span>
            <Link>Link</Link>
          </Space>
        }
      />
      <Tooltip
        {...args}
        content={
          <>
            <span style={{ wordWrap: 'break-word', marginRight: 8 }}>
              TooltipTooltipTooltipTooltipTooltipTooltipTooltipTooltipTooltipTooltipTooltipTooltip
            </span>
            <Link>Link</Link>
          </>
        }
      />
    </Space>
  ),
};
