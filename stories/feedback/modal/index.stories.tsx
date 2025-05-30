import {
  Alert,
  Button,
  Message,
  Modal,
  ModalProps,
  Space,
  Spin,
  Steps,
  Table,
  Typography,
} from "@/src";
import { IconCheckCircleFill, IconInfoCircleFill } from "@arco-iconbox/react-growingio/src";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { createContext, useState } from "react";
import Draggable from "react-draggable";
import { FormattedMessage } from "react-intl";

const { Paragraph } = Typography;

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: "Components/Feedback/Modal",
};

export default meta;
type Story = StoryObj<ModalProps>;

export const Basic: Story = {
  args: {
    title: <FormattedMessage defaultMessage="对话框标题" />,
    autoFocus: false,
    focusLock: true,
    children: (
      <Paragraph>
        您可以根据当前场景自定义对话框的内容。一旦你按下确定按钮，这个模态框将立即关闭。
      </Paragraph>
    ),
  },
  render: (args, { intl: { formatMessage } }) => {
    const [visible, setVisible] = useState(false);
    return (
      <>
        <Button onClick={() => setVisible(true)} type="primary">
          {formatMessage({ defaultMessage: "打开对话框" })}
        </Button>
        <Modal
          {...args}
          visible={visible}
          onOk={() => setVisible(false)}
          onCancel={() => setVisible(false)}
        />
      </>
    );
  },
};

// TODO: 完成 Form 组件后来添加这个 Story
// export const CloseAsync: Story = {
// }

export const Footer: Story = {
  args: {
    ...Basic.args,
  },
  render: (args, { intl: { formatMessage } }) => {
    const [btnVisible, setBtnVisible] = useState(false);
    const [footerVisible, setFooterVisible] = useState(false);
    const [footerLoading, setFooterLoading] = useState(false);
    const [nullVisible, setNullVisible] = useState(false);

    return (
      <Space size="large">
        <Button
          type="primary"
          onClick={() => {
            setBtnVisible(true);
          }}
        >
          {formatMessage({ defaultMessage: "自定义按钮" })}
        </Button>
        <Modal
          {...args}
          visible={btnVisible}
          okButtonProps={{ disabled: true }}
          onOk={() => {
            setBtnVisible(false);
          }}
          cancelButtonProps={{ disabled: true }}
          onCancel={() => {
            setBtnVisible(false);
          }}
        />
        <Button
          type="primary"
          onClick={() => {
            setFooterVisible(true);
          }}
        >
          {formatMessage({ defaultMessage: "自定义底部" })}
        </Button>
        <Modal
          {...args}
          visible={footerVisible}
          onCancel={() => {
            setFooterVisible(false);
          }}
          footer={
            <Space>
              <Button
                onClick={() => {
                  setFooterVisible(false);
                }}
              >
                {formatMessage({ defaultMessage: "返回" })}
              </Button>
              <Button
                type="primary"
                loading={footerLoading}
                onClick={() => {
                  setFooterLoading(true);
                  setTimeout(() => {
                    setFooterLoading(false);
                    setFooterVisible(false);
                  }, 1500);
                }}
              >
                {formatMessage({ defaultMessage: "提交" })}
              </Button>
            </Space>
          }
        />
        <Button
          type="primary"
          onClick={() => {
            setNullVisible(true);
          }}
        >
          {formatMessage({ defaultMessage: "无底部" })}
        </Button>
        <Modal
          {...args}
          visible={nullVisible}
          onCancel={() => {
            setNullVisible(false);
          }}
          footer={null}
        />
      </Space>
    );
  },
};

export const Title: Story = {
  ...Basic,
  args: {
    ...Basic.args,
    title: (
      <div style={{ textAlign: "center" }}>
        <FormattedMessage defaultMessage="居中的标题" />
      </div>
    ),
  },
};

export const Confirm: Story = {
  render: (_, { intl: { formatMessage } }) => {
    function confirm() {
      Modal.confirm({
        title: formatMessage({ defaultMessage: "确认删除？" }),
        content: formatMessage({
          defaultMessage: "确定删除选择的 3 项吗？一旦点击删除按钮，记录会被立即删除，且不可恢复。",
        }),
        okButtonProps: {
          status: "danger",
        },
        onOk: async () => {
          return new Promise((resolve, reject) => {
            setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
          }).catch(() => {
            Message.error({
              content: formatMessage({
                defaultMessage: "删除过程中发生错误！",
              }),
            });
          });
        },
      });
    }
    return (
      <Button type="primary" onClick={confirm}>
        {formatMessage({ defaultMessage: "删除" })}
      </Button>
    );
  },
};

export const Messages: Story = {
  render: (_, { intl: { formatMessage } }) => (
    <Space size="large">
      <Button
        type="primary"
        onClick={() => {
          Modal.info({
            title: formatMessage({ defaultMessage: "提示" }),
            content: formatMessage({
              defaultMessage: "这是关于提示通知的描述。",
            }),
          });
        }}
      >
        {formatMessage({ defaultMessage: "提示" })}
      </Button>
      <Button
        type="primary"
        status="success"
        onClick={() => {
          Modal.success({
            title: formatMessage({ defaultMessage: "成功" }),
            content: formatMessage({
              defaultMessage: "这是关于成功通知的描述。",
            }),
          });
        }}
      >
        {formatMessage({ defaultMessage: "成功" })}
      </Button>
      <Button
        type="primary"
        status="warning"
        onClick={() => {
          Modal.warning({
            title: formatMessage({ defaultMessage: "警告" }),
            content: formatMessage({
              defaultMessage: "这是关于警告通知的描述。",
            }),
          });
        }}
      >
        {formatMessage({ defaultMessage: "警告" })}
      </Button>
      <Button
        type="primary"
        status="danger"
        onClick={() => {
          Modal.error({
            title: formatMessage({ defaultMessage: "错误" }),
            content: formatMessage({
              defaultMessage: "这是关于错误通知的描述。",
            }),
          });
        }}
      >
        {formatMessage({ defaultMessage: "错误" })}
      </Button>
    </Space>
  ),
};

export const ButtonText: Story = {
  ...Basic,
  args: {
    ...Basic.args,
    okText: <FormattedMessage defaultMessage="确认" />,
    cancelText: <FormattedMessage defaultMessage="返回" />,
  },
};

export const Instance: Story = {
  render: (_, { intl: { formatMessage } }) => {
    const sleep = async (time: number) => {
      return new Promise((resolve) => {
        setTimeout((v: unknown) => {
          resolve(v);
        }, time);
      });
    };

    return (
      <Button
        type="primary"
        onClick={async () => {
          const modal = Modal.confirm({
            title: formatMessage({ defaultMessage: "提交中……" }),
            icon: <IconInfoCircleFill />,
            content: (
              <span>
                {formatMessage({ defaultMessage: "对话框将在 1.5 秒后更新。" })} <Spin size={14} />
              </span>
            ),
            footer: null,
          });
          await sleep(1500);
          modal.update({
            icon: <IconCheckCircleFill />,
            title: formatMessage({ defaultMessage: "成功" }),
            content: formatMessage({
              defaultMessage: "对话框将在 1.5 秒后关闭。",
            }),
          });
          await sleep(1500);
          modal.close();
        }}
      >
        {formatMessage({ defaultMessage: "打开对话框" })}
      </Button>
    );
  },
};

export const Position: Story = {
  ...Basic,
  args: {
    ...Basic.args,
    alignCenter: false,
    style: { top: 48, bottom: 48 },
  },
};

export const ScrollContent: Story = {
  ...Basic,
  args: {
    ...Basic.args,
    children: (
      <div style={{ overflowY: "auto", maxHeight: "calc(100vh - 248px)" }}>
        {Array.from({ length: 20 }).map((_, index) => (
          <Paragraph key={index}>
            This is very long content... Paragraph {index + 1}. Please ensure the modal can scroll
            properly to display all content.
          </Paragraph>
        ))}
      </div>
    ),
  },
};

export const LongContent: Story = {
  ...Basic,
  args: {
    ...Basic.args,
    children: Array.from({ length: 20 }).map((_, index) => (
      <Paragraph key={index}>
        This is very long content... Paragraph {index + 1}. Please ensure the modal can scroll
        properly to display all content.
      </Paragraph>
    )),
  },
};

export const Fullscreen: Story = {
  ...Basic,
  args: {
    ...Basic.args,
    fullscreen: true,
  },
};

const tableColumns = [
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a: any, b: any) => a.name.length - b.name.length,
  },
  {
    title: "Version",
    dataIndex: "version",
    sorter: (a: any, b: any) => {
      const aVersion = a.version.split(".");
      const bVersion = b.version.split(".");

      for (let i = 0; i < aVersion.length; i++) {
        if (aVersion[i] === bVersion[i]) continue;
        return aVersion[i] - bVersion[i];
      }

      return 1;
    },
  },
  {
    title: "Author",
    dataIndex: "author",
    sorter: (a: any, b: any) => a.author.length - b.author.length,
  },
];

function getDataFromServer() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: "1",
          name: "EduTools",
          version: "12.18.1",
          author: "Dickens",
        },
        {
          id: "2",
          name: "BashSupport",
          version: "12.19.2",
          author: "Aristotle",
        },
        {
          id: "3",
          name: "GitToolBox",
          version: "12.20.3",
          author: "Hemingway",
        },
      ]);
    }, 1500);
  });
}

export const Loading: Story = {
  args: {
    title: <FormattedMessage defaultMessage="管理插件" />,
  },
  render: (args, { intl: { formatMessage } }) => {
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<unknown[]>([]);

    function loadData() {
      setLoading(true);
      getDataFromServer().then((res: any) => {
        setData(res);
        setLoading(false);
      });
    }
    return (
      <>
        <Button
          onClick={() => {
            setVisible(true);
            loadData();
          }}
          type="primary"
        >
          {formatMessage({ defaultMessage: "打开对话框" })}
        </Button>
        <Modal
          {...args}
          visible={visible}
          onOk={() => setVisible(false)}
          onCancel={() => setVisible(false)}
          afterClose={() => setData([])}
        >
          <Spin
            tip={formatMessage({ defaultMessage: "加载中……" })}
            loading={loading}
            style={{ width: "100%" }}
          >
            <div
              style={{
                height: 266,
                visibility: !loading ? "visible" : "hidden",
              }}
            >
              <p>{formatMessage({ defaultMessage: "你可以选择多个插件：" })}</p>
              <Table
                columns={tableColumns}
                data={data}
                pagination={false}
                border={{
                  headerCell: true,
                  wrapper: true,
                }}
                rowKey="id"
                rowSelection={{
                  type: "checkbox",
                  checkAll: true,
                }}
              ></Table>
            </div>
          </Spin>
        </Modal>
      </>
    );
  },
};

export const ModalWithAlert: Story = {
  ...Basic,
  args: {
    ...Basic.args,
    children: (
      <>
        <Alert
          style={{ marginBottom: 24 }}
          closable
          content={<FormattedMessage defaultMessage="这条消息只展示一次。" />}
        />
        {Basic.args?.children}
      </>
    ),
  },
};

export const ModalWithSteps: Story = {
  ...Basic,
  args: {
    ...Basic.args,
    children: (
      <>
        <Steps size="small" current={2} style={{ margin: "0 auto 24px" }}>
          <Steps.Step title={<FormattedMessage defaultMessage="成功" />} />
          <Steps.Step title={<FormattedMessage defaultMessage="处理中" />} />
          <Steps.Step title={<FormattedMessage defaultMessage="待处理" />} />
        </Steps>
        {Basic.args?.children}
      </>
    ),
  },
};

export const ModalRender: Story = {
  ...Basic,
  args: {
    ...Basic.args,
    style: { cursor: "move" },
    modalRender: (modal) => <Draggable>{modal}</Draggable>,
  },
};

export const Hooks: Story = {
  render: () => {
    const [modal, contextHolder] = Modal.useModal();
    const ConfigContext = createContext({});

    const config = {
      title: <FormattedMessage defaultMessage="简介" />,
      content: (
        <ConfigContext.Consumer>
          {(value: any) => (
            <FormattedMessage defaultMessage="当前用户：{name}" values={{ name: value }} />
          )}
        </ConfigContext.Consumer>
      ),
    };
    return (
      <ConfigContext.Provider value="GrowingIO">
        {contextHolder}
        <Space>
          <Button onClick={() => modal.confirm?.(config)}>Confirm</Button>
          <Button onClick={() => modal.info?.(config)}>Info</Button>
          <Button onClick={() => modal.success?.(config)}>Success</Button>
          <Button onClick={() => modal.warning?.(config)}>Warning</Button>
          <Button onClick={() => modal.error?.(config)}>Error</Button>
          <Button onClick={() => Modal.confirm(config)} type="outline" status="danger">
            Can't get context
          </Button>
        </Space>
      </ConfigContext.Provider>
    );
  },
};
