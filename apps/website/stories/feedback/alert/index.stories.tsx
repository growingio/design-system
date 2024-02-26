import type { Meta, StoryObj } from "@storybook/react";
import { Alert, Button, Grid, Space } from "@giod/react/src";
import { IconCheck } from "@arco-iconbox/react-growingio";
import BrowserWindow from "@/components/browser-window";

const meta: Meta<typeof Alert> = {
  component: Alert,
  title: "Components/Feedback/Alert",
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Basic: Story = {
  args: {
    content: "Here is an example text.",
  },
  render: (args) => <Alert {...args} />,
};

export const Types: Story = {
  render: (args) => (
    <Grid.Row gutter={[40, 20]}>
      <Grid.Col span={12}>
        <Alert {...args} type="info" content="Heare is an info text." />
      </Grid.Col>
      <Grid.Col span={12}>
        <Alert {...args} type="success" content="Heare is an success text." />
      </Grid.Col>
      <Grid.Col span={12}>
        <Alert {...args} type="warning" content="Heare is an warning text." />
      </Grid.Col>
      <Grid.Col span={12}>
        <Alert {...args} type="error" content="Heare is an error text." />
      </Grid.Col>
    </Grid.Row>
  ),
};

export const Closable: Story = {
  args: {
    closable: true,
  },
  render: (args) => (
    <Grid.Row gutter={[40, 20]}>
      <Grid.Col span={12}>
        <Alert {...args} type="info" content="Heare is an info text." />
      </Grid.Col>
      <Grid.Col span={12}>
        <Alert {...args} type="success" content="Heare is an success text." />
      </Grid.Col>
      <Grid.Col span={12}>
        <Alert
          {...args}
          type="warning"
          title="Warning"
          content="Heare is an warning text."
        />
      </Grid.Col>
      <Grid.Col span={12}>
        <Alert
          {...args}
          type="error"
          title="Error"
          content="Heare is an error text."
        />
      </Grid.Col>
    </Grid.Row>
  ),
};

export const CloseElement: Story = {
  args: {
    closable: true,
    type: "success",
    content: "Heare is an success text.",
  },
  render: (args) => (
    <Space size="large">
      <Alert {...args} closeElement={<IconCheck />} />
      <Alert {...args} closeElement="Close" />
    </Space>
  ),
};

export const Title: Story = {
  render: (args) => (
    <Grid.Row gutter={[40, 20]}>
      <Grid.Col span={12}>
        <Alert
          {...args}
          type="info"
          title="Info"
          content="Heare is an info text."
        />
      </Grid.Col>
      <Grid.Col span={12}>
        <Alert
          {...args}
          type="success"
          title="Success"
          content="Heare is an success text."
        />
      </Grid.Col>
      <Grid.Col span={12}>
        <Alert
          {...args}
          type="warning"
          title="Warning"
          content="Heare is an warning text."
        />
      </Grid.Col>
      <Grid.Col span={12}>
        <Alert
          {...args}
          type="error"
          title="Error"
          content="Heare is an error text."
        />
      </Grid.Col>
    </Grid.Row>
  ),
};

export const HiddenIcon: Story = {
  ...Closable,
  args: {
    showIcon: false,
  },
};

export const Banner: Story = {
  args: {
    banner: true,
    content: "Here is an example text.",
    style: { marginBottom: 20 },
  },
  parameters: {
    layout: null,
  },
  render: (args) => (
    <BrowserWindow>
      <div>
        <Alert {...args} />
        <Alert {...args} closable type="success" />
        <Alert {...args} title="General Text" type="warning" />
        <Alert {...args} title="Error Text" content={undefined} type="error" />
      </div>
    </BrowserWindow>
  ),
};

export const Actions: Story = {
  args: {
    ...Basic.args,
    style: { marginTop: 10 },
  },
  render: (args) => (
    <div>
      <Alert
        {...args}
        action={
          <Button size="mini" type="primary">
            Detail
          </Button>
        }
        closable
      />
      <Alert
        {...args}
        closeable
        title="Example"
        action={
          <Button size="mini" type="primary">
            Detail
          </Button>
        }
        closable
      />
      <Alert
        {...args}
        title="Example"
        action={
          <Space direction="vertical">
            <Button size="mini" type="primary">
              Detail
            </Button>
            <Button size="mini" type="primary" status="danger">
              Close
            </Button>
          </Space>
        }
      />
    </div>
  ),
};
