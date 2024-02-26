import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import {
  IconDelete,
  IconPlus,
  IconLeft,
  IconRight,
  IconStar,
  IconSettings,
  IconDown,
  IconMore,
  IconMessage,
} from "@arco-iconbox/react-growingio";
import { Button, Divider, Space, Grid } from "@giod/react/src";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Components/General/Button",
};

export default meta;
type Story = StoryObj<typeof Button>;

export const BasicButtons: Story = {
  args: {
    children: "Button",
  },
  render: (args) => (
    <Space size="large">
      <Button {...args} type="primary" />
      <Button {...args} type="default" />
      <Button {...args} type="dashed" />
      <Button {...args} type="outline" />
      <Button {...args} type="text" />
    </Space>
  ),
};

export const IconButtons: Story = {
  args: {
    type: "primary",
  },
  render: (args) => (
    <Space size="large">
      <Button {...args} icon={<IconDelete />}>
        Delete
      </Button>
      <Button {...args} icon={<IconPlus />} />
      <Button {...args}>
        Delete
        <IconDelete />
      </Button>
    </Space>
  ),
};

export const ButtonShapes: Story = {
  render: (args) => (
    <Space size="large">
      <Button {...args} type="primary" icon={<IconPlus />} />
      <Button {...args} shape="circle" type="primary" icon={<IconPlus />} />
      <Button {...args} shape="round" type="primary">
        Round
      </Button>
      <Button {...args} shape="square" type="primary">
        Square
      </Button>
    </Space>
  ),
};

export const ButtonSizes: Story = {
  args: {
    type: "primary",
  },
  render: (args) => (
    <Space size="large" align="start">
      <Button {...args} size="large">
        Large
      </Button>
      <Button {...args} size="default">
        Medium
      </Button>
      <Button {...args} size="small">
        Small
      </Button>
      <Button {...args} size="mini">
        Mini
      </Button>
    </Space>
  ),
};

export const ButtonStatus: Story = {
  args: {
    children: "Button",
  },
  render: (args) => (
    <Space size="large" direction="vertical">
      <Space size="large">
        <Button {...args} type="primary" status="primary" />
        <Button {...args} type="dashed" status="primary" />
        <Button {...args} type="outline" status="primary" />
        <Button {...args} type="text" status="primary" />
      </Space>
      <Space size="large">
        <Button {...args} type="primary" status="default" />
        <Button {...args} type="dashed" status="default" />
        <Button {...args} type="outline" status="default" />
        <Button {...args} type="text" status="default" />
      </Space>
      <Space size="large">
        <Button {...args} type="primary" status="warning" />
        <Button {...args} type="dashed" status="warning" />
        <Button {...args} type="outline" status="warning" />
        <Button {...args} type="text" status="warning" />
      </Space>
      <Space size="large">
        <Button {...args} type="primary" status="danger" />
        <Button {...args} type="dashed" status="danger" />
        <Button {...args} type="outline" status="danger" />
        <Button {...args} type="text" status="danger" />
      </Space>
      <Space size="large">
        <Button {...args} type="primary" status="success" />
        <Button {...args} type="dashed" status="success" />
        <Button {...args} type="outline" status="success" />
        <Button {...args} type="text" status="success" />
      </Space>
    </Space>
  ),
};

export const DisabledButtons: Story = {
  ...ButtonStatus,
  args: {
    ...ButtonStatus.args,
    disabled: true,
  },
};

export const LoadingButtons: Story = {
  render: (args) => {
    const [buttonLoading, setButtonLoading] = React.useState(false);
    const [iconButtonLoading, setIconButtonLoading] = React.useState(false);
    const [fixedWidthLoading, setFixedWidthLoading] = React.useState(false);

    function onClickButton() {
      setButtonLoading(true);
      setTimeout(() => {
        setButtonLoading(false);
      }, 4000);
    }

    function onClickIconButton() {
      setIconButtonLoading(true);
      setTimeout(() => {
        setIconButtonLoading(false);
      }, 4000);
    }

    function onClickFixedWith() {
      setFixedWidthLoading(true);
      setTimeout(() => {
        setFixedWidthLoading(false);
      }, 4000);
    }

    return (
      <>
        <Grid.Row gutter={[24, 12]}>
          <Grid.Col span={8}>
            <Button {...args} type="primary" loading>
              Loading
            </Button>
          </Grid.Col>
          <Grid.Col span={8}>
            <Button {...args} type="default" loading>
              Loading
            </Button>
          </Grid.Col>
          <Grid.Col span={8}>
            <Button {...args} type="dashed" loading>
              Loading
            </Button>
          </Grid.Col>
          <Grid.Col span={8}>
            <Button {...args} type="primary" shape="circle" loading />
          </Grid.Col>
          <Grid.Col span={8}>
            <Button {...args} type="default" shape="circle" loading />
          </Grid.Col>
          <Grid.Col span={8}>
            <Button {...args} type="dashed" shape="circle" loading />
          </Grid.Col>
          <Grid.Col span={8}>
            <Button
              {...args}
              type="primary"
              loading={buttonLoading}
              onClick={onClickButton}
            >
              Click Me
            </Button>
          </Grid.Col>
          <Grid.Col span={8}>
            <Button
              {...args}
              type="primary"
              loading={iconButtonLoading}
              onClick={onClickIconButton}
            >
              {!iconButtonLoading && <IconPlus />}
              Click Me
            </Button>
          </Grid.Col>
        </Grid.Row>

        <Divider style={{ width: 440, minWidth: 440 }}>
          When loading, fix the width of button
        </Divider>

        <Grid.Row gutter={[24, 12]}>
          <Grid.Col span={8}>
            <Button
              {...args}
              type="primary"
              loadingFixedWidth
              loading={fixedWidthLoading}
              onClick={onClickFixedWith}
            >
              Click Me
            </Button>
          </Grid.Col>
        </Grid.Row>
      </>
    );
  },
};

export const ButtonGroups: Story = {
  render: (args) => (
    <Space size="large" direction="vertical">
      <Space size="large">
        <Button.Group>
          <Button {...args}>Publish</Button>
          <Button icon={<IconDown />} />
        </Button.Group>
        <Button.Group>
          <Button {...args} type="default">
            Publish
          </Button>
          <Button {...args} type="default" icon={<IconMore />} />
        </Button.Group>
      </Space>
      <Button.Group>
        <Button {...args} type="primary">
          Publish
        </Button>
        <Button {...args} type="primary" icon={<IconDown />} />
      </Button.Group>
      <Space size="large">
        <Button.Group>
          <Button {...args} type="primary" icon={<IconLeft />} shape="round">
            Previous
          </Button>
          <Button {...args} type="primary" shape="round">
            Next
            <IconRight />
          </Button>
        </Button.Group>
        <Button.Group>
          <Button {...args} type="primary" icon={<IconStar />} />
          <Button {...args} type="primary" icon={<IconMessage />} />
          <Button {...args} type="primary" icon={<IconSettings />} />
        </Button.Group>
        <Button.Group>
          <Button {...args} type="primary" icon={<IconStar />}>
            Like
          </Button>
          <Button {...args} type="primary" icon={<IconSettings />}>
            Setting
          </Button>
        </Button.Group>
      </Space>
    </Space>
  ),
};

export const LongButtons: Story = {
  args: {
    children: "Long Button",
  },
  render: (args) => (
    <Space
      style={{
        width: 360,
        border: "1px solid var(--color-border)",
        borderRadius: 4,
        padding: 20,
      }}
      direction="vertical"
      size="large"
    >
      <Button {...args} type="primary" long />
      <Button {...args} type="default" long />
      <Button {...args} type="dashed" long />
      <Button {...args} type="outline" long />
      <Button {...args} type="text" long />
    </Space>
  ),
};
