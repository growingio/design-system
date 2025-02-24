import { injectIntl, IntlShape } from "react-intl";
import { Canvas, Unstyled, Source } from "@storybook/blocks";
import { Typography } from "@/src";
import PropsTable, { type PropsTableData } from "@/components/props-table";
import * as AlertStories from "./index.stories";

const { Title, Paragraph } = Typography;

function DocPage({ intl }: { intl: IntlShape }) {
  const { formatMessage } = intl;

  const data: PropsTableData[] = [
    {
      name: "banner",
      description: formatMessage({ defaultMessage: "是否用作顶部公告。" }),
      type: "boolean",
    },
    {
      name: "closable",
      description: formatMessage({ defaultMessage: "是否可关闭。" }),
      type: "boolean",
    },
    {
      name: "showIcon",
      description: formatMessage({ defaultMessage: "是否显示图标。" }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "type",
      description: formatMessage({ defaultMessage: "警告的类型。" }),
      type: "'info' | 'success' | 'warning' | 'error'",
      defaultValue: "info",
    },
    {
      name: "action",
      description: formatMessage({ defaultMessage: "自定义操作项。" }),
      type: "ReactNode",
    },
    {
      name: "closeElement",
      description: formatMessage({ defaultMessage: "自定义关闭按钮。" }),
      type: "ReactNode",
    },
    {
      name: "content",
      description: formatMessage({ defaultMessage: "内容。" }),
      type: "ReactNode",
    },
    {
      name: "icon",
      description: formatMessage({
        defaultMessage: "可以指定自定义图标，`showIcon` 为 `true` 时生效。",
      }),
      type: "ReactNode",
    },
    {
      name: "title",
      description: formatMessage({ defaultMessage: "标题。" }),
      type: "ReactNode",
    },
    {
      name: "afterClose",
      description: formatMessage({
        defaultMessage: "关闭动画结束后执行的回调。",
      }),
      type: "() => void",
    },
    {
      name: "onClose",
      description: formatMessage({ defaultMessage: "关闭的回调。" }),
      type: "(e) => void",
    },
  ];

  return (
    <Unstyled>
      <Title>{formatMessage({ defaultMessage: "警告提示 Alert" })}</Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "向用户显示警告的信息时，通过警告提示，展现需要关注的信息。",
        })}
      </Paragraph>

      <Title heading={2}>{formatMessage({ defaultMessage: "示例" })}</Title>

      <Title heading={3} id="basic">
        {formatMessage({ defaultMessage: "基础用法" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "警告提示，展现需要关注的信息，适用于简短的警告提示。",
        })}
      </Paragraph>
      <Canvas of={AlertStories.Basic} />

      <Title heading={3} id="types">
        {formatMessage({ defaultMessage: "不同类型" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "警告提示的类型有 info, success, warning, error 四种。",
        })}
      </Paragraph>
      <Canvas of={AlertStories.Types} />

      <Title heading={3} id="closable">
        {formatMessage({ defaultMessage: "可关闭" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "指定 closable = true，可开启关闭按钮。",
        })}
      </Paragraph>
      <Canvas of={AlertStories.Closable} />

      <Title heading={3} id="close-element">
        {formatMessage({ defaultMessage: "自定义关闭元素" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "指定 closeElement，自定义关闭元素。closeElement 可以接收 onClick，并且自带 close 参数，调用 close() 可以关闭。",
        })}
      </Paragraph>
      <Canvas of={AlertStories.CloseElement} />

      <Title heading={3} id="banner">
        {formatMessage({ defaultMessage: "顶部公告" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "设置 banner = true，可以当作顶部公告使用。",
        })}
      </Paragraph>
      <Canvas of={AlertStories.Banner} />

      <Title heading={3} id="actions">
        {formatMessage({ defaultMessage: "操作项" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "通过 action 可以自定义右上角操作项。",
        })}
      </Paragraph>
      <Canvas of={AlertStories.Actions} />

      <Title heading={2}>{formatMessage({ defaultMessage: "用法" })}</Title>
      <Source
        code={`import { Alert, type AlertProps } from "@giod/react";`}
        language="tsx"
      />

      <Title id="props" heading={3}>
        AlertProps
      </Title>
      <PropsTable data={data} />
    </Unstyled>
  );
}

const IntlDocPage = injectIntl(DocPage);
export default IntlDocPage;
