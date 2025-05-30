import { injectIntl, IntlShape } from "react-intl";
import { Canvas, Unstyled, Source } from "@storybook/addon-docs/blocks";
import PropsTable, { type PropsTableData } from "../../../components/props-table";
import { Typography } from "../../../src";
import * as MessageStories from "./index.stories";

const { Title, Paragraph } = Typography;

function DocPage({ intl }: { intl: IntlShape }) {
  const { formatMessage } = intl;

  const data: PropsTableData[] = [
    {
      name: "closable",
      description: formatMessage({ defaultMessage: "是否显示关闭按钮。" }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "showIcon",
      description: formatMessage({ defaultMessage: "是否显示图标。" }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "duration",
      description: formatMessage({
        defaultMessage: "自动关闭的时间，单位为 `ms`。",
      }),
      type: "number",
      defaultValue: "3000",
    },
    {
      name: "id",
      description: formatMessage({
        defaultMessage: "当前消息的唯一标识，可以用来更新消息。",
      }),
      type: "string",
    },
    {
      name: "transitionClassNames",
      description: formatMessage({
        defaultMessage:
          "消息弹出动画的类名，见 react-transition-group 的 [classNames](https://reactcommunity.org/react-transition-group/css-transition#CSSTransition-prop-classNames)。",
      }),
      type: "string | { appear?: string, appearActive?: string, appearDone?: string, enter?: string, enterActive?: string, enterDone?: string, exit?: string, exitActive?: string, exitDone?: string, }",
    },
    {
      name: "position",
      description: formatMessage({
        defaultMessage: "消息的位置，分为 `top` 上方和 `bottom` 下方。",
      }),
      type: "'top' | 'bottom'",
    },
    {
      name: "closeIcon",
      description: formatMessage({ defaultMessage: "自定义右上角关闭按钮。" }),
      type: "ReactNode",
    },
    {
      name: "icon",
      description: formatMessage({ defaultMessage: "自定义图标。" }),
      type: "ReactNode",
    },
    {
      name: "content",
      description: formatMessage({ defaultMessage: "消息内容。" }),
      type: "ReactNode | string",
      required: true,
    },
    {
      name: "transitionTimeout",
      description: formatMessage({
        defaultMessage:
          "动画持续时间，见 react-transition-group 的 [timeout](https://reactcommunity.org/react-transition-group/transition#Transition-prop-timeout)。",
      }),
      type: "number | { enter?: number, exit?: number, appear?: number }",
      defaultValue: "{enter: 100, exit: 300}",
    },
    {
      name: "onClose",
      description: formatMessage({ defaultMessage: "关闭时的回调。" }),
      type: "() => void",
    },
  ];

  const configOptionData: PropsTableData[] = [
    {
      name: "maxCount",
      description: formatMessage({ defaultMessage: "最大通知数量。" }),
      type: "number",
    },
    {
      name: "getContainer",
      description: formatMessage({ defaultMessage: "放置通知的容器。" }),
      type: "() => HTMLElement",
      defaultValue: "() => document.body",
    },
    {
      name: "duration",
      description: formatMessage({ defaultMessage: "通知自动关闭的时间。" }),
      type: "number",
      defaultValue: "3000",
    },
    {
      name: "prefixCls",
      description: formatMessage({ defaultMessage: "类名前缀。" }),
      type: "string",
      defaultValue: "arco",
    },
  ];

  return (
    <Unstyled>
      <Title>{formatMessage({ defaultMessage: "全局提示 Message" })}</Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "由用户的操作触发的轻量级全局反馈。",
        })}
      </Paragraph>

      <Title heading={2}>{formatMessage({ defaultMessage: "示例" })}</Title>

      <Title heading={3} id="basic">
        {formatMessage({ defaultMessage: "基础用法" })}
      </Title>
      <Canvas of={MessageStories.Basic} />

      <Title heading={3} id="types">
        {formatMessage({ defaultMessage: "不同类型" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "全局提示有 5 种不同的类型，分别为：info, success, warning, error, normal。",
        })}
      </Paragraph>
      <Canvas of={MessageStories.Types} />

      <Title heading={3} id="icon">
        {formatMessage({ defaultMessage: "自定义图标" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "设置 icon 来自定义图标。",
        })}
      </Paragraph>
      <Canvas of={MessageStories.Icon} />

      <Title heading={3} id="update-message">
        {formatMessage({ defaultMessage: "更新全局提醒内容" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "通过指定 id，可以更新已经存在的全局提示。",
        })}
      </Paragraph>
      <Canvas of={MessageStories.UpdateMessage} />

      <Title heading={3} id="position">
        {formatMessage({ defaultMessage: "全局提示的位置" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "全局提示有 2 种不同的弹出位置，分别为顶部和底部。",
        })}
      </Paragraph>
      <Canvas of={MessageStories.Position} />

      <Title heading={3} id="duration">
        {formatMessage({ defaultMessage: "更新延时" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "通过指定 id，可以更新已经存在的全局提示的 duration 属性。",
        })}
      </Paragraph>
      <Canvas of={MessageStories.Duration} />

      <Title heading={3} id="close-function">
        {formatMessage({ defaultMessage: "手动控制关闭" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "Message.xxx() 会返回一个函数，调用此函数能手动关闭通知。",
        })}
      </Paragraph>
      <Canvas of={MessageStories.CloseFunction} />

      <Title heading={3} id="closable">
        {formatMessage({ defaultMessage: "显示关闭按钮" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "设置 closable 来显示关闭按钮。",
        })}
      </Paragraph>
      <Canvas of={MessageStories.Closable} />

      <Title heading={3} id="multi-lines">
        {formatMessage({ defaultMessage: "支持换行" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "默认整体宽度自适应内容，可以通过 style 来设置最大宽度，来实现内容换行。",
        })}
      </Paragraph>
      <Canvas of={MessageStories.MultiLines} />

      <Title heading={3} id="hooks">
        {formatMessage({ defaultMessage: "Hooks" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "通过 useMessage 去创建可读取 context 的对话框。但是通过 useMessage 渲染的 message 挂载在 contextHolder 所在位置。无法通过 getContainer() 修改容器。",
        })}
      </Paragraph>
      <Canvas of={MessageStories.Hooks} />

      <Title heading={3} id="transition">
        {formatMessage({ defaultMessage: "自定义动画效果" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "可以通过 transitionClassNames 和 transitionTimeout 实现自定义过渡效果。动画实现基于 react-transition-group。",
        })}
      </Paragraph>
      <Canvas of={MessageStories.Transition} />

      <Title heading={2}>{formatMessage({ defaultMessage: "用法" })}</Title>
      <Source
        code={`import { Message, type MessageProps } from "growingio-design";`}
        language="tsx"
      />

      <Title id="props" heading={3}>
        MessageProps
      </Title>
      <PropsTable data={data} />
      <Title id="config-options" heading={3}>
        Message.config(options)
      </Title>
      <PropsTable data={configOptionData} includeCommonProps={false} />
    </Unstyled>
  );
}

export default injectIntl(DocPage);
