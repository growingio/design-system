import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { IconFaceSmileFill } from '@arco-iconbox/react-growingio';
import { Space, Button, Link } from '../..';
import Result from '..';

const meta: Meta<typeof Result> = {
  component: Result,
  title: 'Base/Result',
};

export default meta;
type Story = StoryObj<typeof Result>;

export const Success: Story = {
  args: {
    status: 'success',
    title: <FormattedMessage defaultMessage="成功消息" />,
    subTitle: <FormattedMessage defaultMessage="这是关于成功结果的描述。" />,
    extra: (
      <Space>
        <Button>
          <FormattedMessage defaultMessage="重试" />
        </Button>
        <Button type="primary">
          <FormattedMessage defaultMessage="返回" />
        </Button>
      </Space>
    ),
  },
  render: (args) => <Result {...args} />,
};

export const Info: Story = {
  ...Success,
  args: {
    ...Success.args,
    status: 'info',
    title: <FormattedMessage defaultMessage="你的操作已经被执行。" />,
    subTitle: undefined,
    extra: (
      <Button type="primary">
        <FormattedMessage defaultMessage="返回" />
      </Button>
    ),
  },
};

export const Warning: Story = {
  ...Info,
  args: {
    ...Info.args,
    status: 'warning',
    title: <FormattedMessage defaultMessage="对于你的操作，有一个问题。" />,
  },
};

export const Error: Story = {
  ...Success,
  args: {
    ...Success.args,
    status: 'error',
    title: <FormattedMessage defaultMessage="错误消息" />,
    subTitle: <FormattedMessage defaultMessage="出了问题。请再试一次。" />,
  },
};

export const Forbidden: Story = {
  ...Success,
  args: {
    status: '403',
    title: <FormattedMessage defaultMessage="企业还未购买 产品名称" />,
    subTitle: (
      <>
        <span style={{ marginRight: 8 }}>
          <FormattedMessage defaultMessage="请联系销售咨询" />
        </span>
        <Link href="#">
          <FormattedMessage defaultMessage="了解产品" />
        </Link>
      </>
    ),
    extra: (
      <Space>
        <Button>
          <FormattedMessage defaultMessage="次要操作" />
        </Button>
        <Button type="primary">
          <FormattedMessage defaultMessage="主要操作" />
        </Button>
      </Space>
    ),
  },
};

export const PaymentRequired: Story = {
  ...Success,
  args: {
    status: '402',
    title: <FormattedMessage defaultMessage="该功能为高级功能" />,
    subTitle: (
      <>
        <span style={{ marginRight: 8 }}>
          <FormattedMessage defaultMessage="请联系客户成功经理开通" />
        </span>
        <Link href="#">
          <FormattedMessage defaultMessage="了解产品" />
        </Link>
      </>
    ),
  },
};

export const NoResource: Story = {
  ...Success,
  args: {
    status: 'no-resource',
    title: <FormattedMessage defaultMessage="该项目已删除" />,
    subTitle: undefined,
    extra: (
      <Space>
        <Button>
          <FormattedMessage defaultMessage="返回首页" />
        </Button>
        <Button type="primary">
          <FormattedMessage defaultMessage="主要操作" />
        </Button>
      </Space>
    ),
  },
};

export const NotFound: Story = {
  ...NoResource,
  args: {
    ...NoResource.args,
    status: '404',
    title: (
      <FormattedMessage defaultMessage="抱歉，出现了一个错误，页面不见了" />
    ),
  },
};

export const InternalServerError: Story = {
  ...Forbidden,
  args: {
    status: '500',
    title: <FormattedMessage defaultMessage="抱歉，服务器出现了错误" />,
    subTitle: undefined,
    extra: (
      <Button type="primary">
        <FormattedMessage defaultMessage="返回" />
      </Button>
    ),
  },
};

export const Unauthorized: Story = {
  ...Success,
  args: {
    status: '401',
    title: <FormattedMessage defaultMessage="登录失败" />,
    subTitle: (
      <FormattedMessage defaultMessage="用户标识符字段为空，请联系管理员确认单点登录配置是否正确。" />
    ),
    extra: (
      <Space>
        <Button>
          <FormattedMessage defaultMessage="返回登录页" />
        </Button>
        <Button type="primary">
          <FormattedMessage defaultMessage="主要操作" />
        </Button>
      </Space>
    ),
  },
};

export const Ok: Story = {
  ...Unauthorized,
  args: {
    ...Unauthorized.args,
    status: '200',
    title: <FormattedMessage defaultMessage="退出成功" />,
    subTitle: <FormattedMessage defaultMessage="您已成功退出当前账号" />,
  },
};

export const Icon: Story = {
  ...Success,
  args: {
    ...Info.args,
    status: null,
    icon: <IconFaceSmileFill style={{ color: 'rgb(var(--arcoblue-6))' }} />,
  },
};

// export const Success: Story = {
//   args: {
//     status: 'success',
//     title: <FormattedMessage id="result-success-title" />,
//     subTitle: <FormattedMessage id="result-success-subtitle" />,
//     extra: (
//       <Space>
//         <Button>
//           <FormattedMessage id="result-again" />
//         </Button>
//         <Button type="primary">
//           <FormattedMessage id="result-back" />
//         </Button>
//       </Space>
//     ),
//   },
//   render: (args) => <Result {...args} />,
// };

// export const Info: Story = {
//   ...Success,
//   args: {
//     ...Success.args,
//     status: 'info',
//     title: <FormattedMessage id="result-info-title" />,
//     subTitle: undefined,
//     extra: (
//       <Button type="primary">
//         <FormattedMessage id="result-back" />
//       </Button>
//     ),
//   },
// };

// export const Warning: Story = {
//   ...Info,
//   args: {
//     ...Info.args,
//     status: 'warning',
//     title: <FormattedMessage id="result-warning-title" />,
//   },
// };

// export const Error: Story = {
//   ...Success,
//   args: {
//     ...Success.args,
//     status: 'error',
//     title: <FormattedMessage id="result-error-title" />,
//     subTitle: <FormattedMessage id="result-error-subtitle" />,
//   },
// };

// export const Forbidden: Story = {
//   ...Success,
//   args: {
//     status: '403',
//     title: <FormattedMessage id="result-forbidden-title" />,
//     subTitle: (
//       <>
//         <span style={{ marginRight: 8 }}>
//           <FormattedMessage id="result-forbidden-subtitle" />
//         </span>
//         <Link href="#">
//           <FormattedMessage id="result-forbidden-subtitle-link" />
//         </Link>
//       </>
//     ),
//     extra: (
//       <Space>
//         <Button>
//           <FormattedMessage id="result-secondary-operation" />
//         </Button>
//         <Button type="primary">
//           <FormattedMessage id="result-primary-operation" />
//         </Button>
//       </Space>
//     ),
//   },
// };

// export const NoResource: Story = {
//   ...Success,
//   args: {
//     status: 'no-resource',
//     title: <FormattedMessage id="result-no-resource-title" />,
//     subTitle: undefined,
//     extra: (
//       <Space>
//         <Button>
//           <FormattedMessage id="result-404-secondary-operation" />
//         </Button>
//         <Button type="primary">
//           <FormattedMessage id="result-primary-operation" />
//         </Button>
//       </Space>
//     ),
//   },
// };

// export const NotFound: Story = {
//   ...NoResource,
//   args: {
//     ...NoResource.args,
//     status: '404',
//     title: <FormattedMessage id="result-404-title" />,
//   },
// };

// export const InternalServerError: Story = {
//   ...Forbidden,
//   args: {
//     status: '500',
//     title: <FormattedMessage id="result-500-title" />,
//     subTitle: undefined,
//     extra: (
//       <Button type="primary">
//         <FormattedMessage id="result-back" />
//       </Button>
//     ),
//   },
// };

// export const Unauthorized: Story = {
//   ...Success,
//   args: {
//     status: '401',
//     title: <FormattedMessage id="result-401-title" />,
//     subTitle: <FormattedMessage id="result-401-subtitle" />,
//     extra: (
//       <Space>
//         <Button>
//           <FormattedMessage id="result-401-secondary-operation" />
//         </Button>
//         <Button type="primary">
//           <FormattedMessage id="result-primary-operation" />
//         </Button>
//       </Space>
//     ),
//   },
// };

// export const Ok: Story = {
//   ...Unauthorized,
//   args: {
//     ...Unauthorized.args,
//     status: '200',
//     title: <FormattedMessage id="result-200-title" />,
//     subTitle: <FormattedMessage id="result-200-subtitle" />,
//   },
// };

// export const Icon: Story = {
//   ...Success,
//   args: {
//     ...Info.args,
//     status: null,
//     icon: <IconFaceSmileFill style={{ color: 'rgb(var(--arcoblue-6))' }} />,
//   },
// };
