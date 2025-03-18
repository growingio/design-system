import { injectIntl, IntlShape } from "react-intl";
import { Canvas, Unstyled, Source } from "@storybook/blocks";
import PropsTable, { type PropsTableData } from "@/components/props-table";
import { Typography } from "@/src";
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
      description: formatMessage({ defaultMessage: "自动关闭的时间，单位为 `ms`。" }),
      type: "number",
      defaultValue: "3000",
    },
    {
      name: "id",
      description: formatMessage({ defaultMessage: "当前通知的唯一标识，可以用来更新消息。" }),
      type: "string",
      defaultValue: "-",
    },
    {
      name: "position",
      description: formatMessage({
        defaultMessage:
          "消息的位置，分为 `topLeft` 左上方、`topRight` 右上方、`bottomLeft` 左下方和 `bottomRight` 右下方。",
      }),
      type: "'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'",
      defaultValue: "-",
    },
    {
      name: "btn",
      description: formatMessage({ defaultMessage: "添加操作按钮。" }),
      type: "ReactNode",
      defaultValue: "-",
    },
    {
      name: "closeIcon",
      description: formatMessage({ defaultMessage: "自定义右上角关闭按钮。" }),
      type: "ReactNode",
      defaultValue: "-",
    },
    {
      name: "icon",
      description: formatMessage({ defaultMessage: "自定义图标。" }),
      type: "ReactNode",
      defaultValue: "-",
    },
    {
      name: "content",
      description: formatMessage({ defaultMessage: "通知内容。" }),
      type: "ReactNode | string",
      defaultValue: "-",
      required: true,
    },
    {
      name: "title",
      description: formatMessage({ defaultMessage: "通知标题。" }),
      type: "ReactNode | string",
      defaultValue: "-",
    },
    {
      name: "onClose",
      description: formatMessage({ defaultMessage: "关闭时的回调。" }),
      type: "() => void",
      defaultValue: "-",
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
      <Title>{formatMessage({ defaultMessage: "通知提醒框 Notification" })}</Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "全局展示通知提醒，将信息及时有效的传达给用户。",
        })}
      </Paragraph>

      <Title heading={2}>{formatMessage({ defaultMessage: "示例" })}</Title>

      <Title heading={3} id="basic">
        {formatMessage({ defaultMessage: "基础用法" })}
      </Title>
      <Canvas of={MessageStories.Default} />

      <Title heading={3} id="types">
        {formatMessage({ defaultMessage: "不同类型的通知" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "通知提醒框有 5 种不同的类型，分别为：info, success, warning, error, normal。",
        })}
      </Paragraph>
      <Canvas of={MessageStories.Types} />

      <Title heading={3} id="update">
        {formatMessage({ defaultMessage: "更新通知内容" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "通过指定参数 id，可以更新已经存在的通知提醒框。",
        })}
      </Paragraph>
      <Canvas of={MessageStories.Update} />

      <Title heading={3} id="buttons">
        {formatMessage({ defaultMessage: "自定义操作按钮" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "通过指定 btn 字段，可以添加操作按钮。",
        })}
      </Paragraph>
      <Canvas of={MessageStories.Buttons} />

      <Title heading={3} id="icon">
        {formatMessage({ defaultMessage: "自定义图标" })}
      </Title>
      <Canvas of={MessageStories.Icon} />

      <Title heading={3} id="position">
        {formatMessage({ defaultMessage: "自定义位置" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "通知提醒框有 4 种不同的弹出位置，分别为：左上角, 右上角 (默认), 左下角, 右下角。",
        })}
      </Paragraph>
      <Canvas of={MessageStories.Positions} />

      <Title heading={3} id="hooks">
        {formatMessage({ defaultMessage: "Hooks 用法" })}
      </Title>
      <Canvas of={MessageStories.Hooks} />

      <Title heading={2}>{formatMessage({ defaultMessage: "用法" })}</Title>
      <Source
        code={`import { Notification, type NotificationProps } from "@gio-design/react";`}
        language="typescript"
      />

      <Title id="props" heading={3}>
        NotificationProps
      </Title>
      <PropsTable data={data} />

      <Title id="config-options" heading={3}>
        Notification.config(options)
      </Title>
      <PropsTable data={configOptionData} includeCommonProps={false} />
    </Unstyled>
  );
}

export default injectIntl(DocPage);
