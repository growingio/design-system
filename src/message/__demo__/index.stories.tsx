import type { Meta, StoryObj } from '@storybook/react';
import React, { createContext } from 'react';
import { Button, Message, MessageProps, Space } from '../..';
import {
  IconCheck,
  IconClose,
  IconExclamation,
  IconFaceSmileFill,
  IconInfo,
} from '@arco-iconbox/react-growingio';
import './index.css';

const meta: Meta<MessageProps> = {
  component: Message,
  title: 'Base/Message',
};

export default meta;
type Story = StoryObj<MessageProps>;

export const Basic: Story = {
  render: () => (
    <Button
      type="primary"
      onClick={() => {
        Message.info('This is an info message.');
      }}
    >
      Click
    </Button>
  ),
};

export const Types: Story = {
  render: () => (
    <Space size="large">
      <Button
        onClick={() => Message.info('This is an info message!')}
        type="primary"
      >
        Info
      </Button>
      <Button
        onClick={() => Message.success('This is a success message!')}
        type="primary"
        status="success"
      >
        Success
      </Button>
      <Button
        onClick={() => Message.warning('This is a warning message!')}
        type="primary"
        status="warning"
      >
        Warning
      </Button>
      <Button
        onClick={() => Message.error('This is an error message!')}
        type="primary"
        status="danger"
      >
        Error
      </Button>
      <Button onClick={() => Message.normal('This is a message!')}>
        Normal
      </Button>
    </Space>
  ),
};

export const Icon: Story = {
  render: () => (
    <Space size="large">
      <Button
        onClick={() =>
          Message.info({
            icon: <IconInfo />,
            content: 'This is an info message!',
          })
        }
        type="primary"
      >
        Info
      </Button>
      <Button
        onClick={() =>
          Message.success({
            icon: <IconCheck />,
            content: 'This is a primary message!',
          })
        }
        type="primary"
        status="success"
      >
        Success
      </Button>
      <Button
        onClick={() =>
          Message.warning({
            icon: <IconExclamation />,
            content: 'This is a warning message!',
          })
        }
        type="primary"
        status="warning"
      >
        Warning
      </Button>
      <Button
        onClick={() =>
          Message.error({
            icon: <IconClose />,
            content: 'This is an error message!',
          })
        }
        type="primary"
        status="danger"
      >
        Error
      </Button>
      <Button
        onClick={() =>
          Message.info({
            icon: <IconFaceSmileFill />,
            content: 'This is a message!',
          })
        }
      >
        Smile
      </Button>
    </Space>
  ),
};

export const UpdateMessage: Story = {
  render: () => {
    function updateMessage() {
      Message.loading({
        id: 'need_update',
        content: 'Will update after 2 seconds...',
      });
      setTimeout(() => {
        Message.success({
          id: 'need_update',
          content: 'Update success!',
        });
      }, 2000);
    }
    return (
      <Button onClick={updateMessage} type="primary">
        Click
      </Button>
    );
  },
};

export const Position: Story = {
  args: {
    content: 'This is a message!',
    showIcon: true,
  },
  render: (args) => (
    <Space size="large">
      <Button
        onClick={() =>
          Message.info({
            ...args,
            position: 'top',
          })
        }
        type="primary"
      >
        Top
      </Button>
      <Button
        onClick={() =>
          Message.info({
            ...args,
            position: 'bottom',
          })
        }
        type="primary"
      >
        Bottom
      </Button>
    </Space>
  ),
};

export const Duration: Story = {
  render: () => {
    function updateMessage() {
      Message.loading({
        id: 'need_update',
        content: 'Will update after 2 seconds...',
      });
      setTimeout(() => {
        Message.success({
          id: 'need_update',
          content: 'Will close after 2 seconds!',
          duration: 2000,
        });
      }, 2000);
    }
    return (
      <Button onClick={updateMessage} type="primary">
        Click
      </Button>
    );
  },
};

export const CloseFunction: Story = {
  render: () => {
    function updateMessage() {
      const close = Message.info({
        content: 'Will close after 2 seconds...',
        duration: 0,
      });
      setTimeout(() => {
        close();
      }, 2000);
    }
    return (
      <Button onClick={updateMessage} type="primary">
        Click
      </Button>
    );
  },
};

export const Closable: Story = {
  args: {
    content: 'This is a message!',
    closable: true,
  },
  render: (args) => (
    <Button
      onClick={() => {
        Message.info({
          ...args,
        });
      }}
      type="primary"
    >
      Click
    </Button>
  ),
};

export const MultiLines: Story = {
  args: {
    content:
      'This is a message! This is a message! This is a message! This is a message!',
    style: { maxWidth: 474 },
    duration: 10_000,
  },
  render: (args) => (
    <Space size="large">
      <Button
        onClick={() => {
          Message.info({
            ...args,
            closable: true,
          });
        }}
        type="primary"
      >
        Click
      </Button>
      <Button
        onClick={() => {
          Message.info({
            ...args,
          });
        }}
        type="primary"
      >
        Click
      </Button>
    </Space>
  ),
};

export const Hooks: Story = {
  render: () => {
    const [message, contextHolder] = Message.useMessage();
    const ConfigContext = createContext({});

    const config = {
      content: (
        <ConfigContext.Consumer>
          {(name) => `Current user: ${name}`}
        </ConfigContext.Consumer>
      ),
    };

    return (
      <ConfigContext.Provider value="GrowingIO">
        <div className="demo-holder-wrapper">{contextHolder}</div>
        <Space size="large">
          <Button onClick={() => message.info?.(config)} type="primary">
            Info
          </Button>
          <Button
            onClick={() => message.success?.(config)}
            type="primary"
            status="success"
          >
            Success
          </Button>
          <Button
            onClick={() => message.warning?.(config)}
            type="primary"
            status="warning"
          >
            Warning
          </Button>
          <Button
            onClick={() => message.error?.(config)}
            type="primary"
            status="danger"
          >
            Error
          </Button>
          <Button onClick={() => message.normal?.(config)}>Normal</Button>
        </Space>
      </ConfigContext.Provider>
    );
  },
};

export const Transition: Story = {
  render: () => (
    <Button
      onClick={() => {
        Message.info({
          content: 'This is an info message!',
          transitionClassNames: 'message-demo-animation',
          transitionTimeout: {
            enter: 1000,
            exit: 50000,
          },
        });
      }}
      type="primary"
    >
      Click
    </Button>
  ),
};
