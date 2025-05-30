import { FormattedMessage, injectIntl, IntlShape } from "react-intl";
import { Canvas, Unstyled, Source, Markdown } from "@storybook/addon-docs/blocks";
import PropsTable, { type PropsTableData } from "../../../components/props-table";
import { Typography } from "../../../src";
import * as ResultStories from "./index.stories";

const { Title, Paragraph } = Typography;

function DocPage({ intl: { formatMessage } }: { intl: IntlShape }) {
  const data: PropsTableData[] = [
    {
      name: "status",
      description: formatMessage({ defaultMessage: "不同状态。" }),
      type: "'success' | 'error' | 'info' | 'warning' | '200' | '401' | '403' | '404' | '500' | null",
      defaultValue: "'info'",
    },
    {
      name: "extra",
      description: formatMessage({ defaultMessage: "额外内容。" }),
      type: "ReactNode",
    },
    {
      name: "icon",
      description: formatMessage({ defaultMessage: "自定义图标。" }),
      type: "ReactNode",
    },
    {
      name: "subTitle",
      description: formatMessage({ defaultMessage: "子标题文字。" }),
      type: "ReactNode",
    },
    {
      name: "title",
      description: formatMessage({ defaultMessage: "标题文字。" }),
      type: "ReactNode",
    },
  ];

  return (
    <Unstyled>
      <Title>{formatMessage({ defaultMessage: "结果页 Result" })}</Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "用于反馈一系列操作任务的处理结果，当有重要操作需告知用户处理结果，且反馈内容较为复杂时使用。",
        })}
      </Paragraph>
      <Title heading={2}>{formatMessage({ defaultMessage: "示例" })}</Title>
      <Title heading={3} id="success">
        {formatMessage({ defaultMessage: "成功" })}
      </Title>
      <Paragraph>{formatMessage({ defaultMessage: "展示成功状态。" })}</Paragraph>
      <Canvas of={ResultStories.Success} />
      <Title heading={3} id="info">
        {formatMessage({ defaultMessage: "信息" })}
      </Title>
      <Paragraph>{formatMessage({ defaultMessage: "展示处理结果。" })}</Paragraph>
      <Canvas of={ResultStories.Info} />
      <Title heading={3} id="warning">
        {formatMessage({ defaultMessage: "警告" })}
      </Title>
      <Paragraph>{formatMessage({ defaultMessage: "展示警告状态。" })}</Paragraph>
      <Canvas of={ResultStories.Warning} />
      <Title heading={3} id="error">
        {formatMessage({ defaultMessage: "错误" })}
      </Title>
      <Paragraph>{formatMessage({ defaultMessage: "展示错误状态。" })}</Paragraph>
      <Canvas of={ResultStories.Error} />

      <Title heading={3} id="forbidden">
        {formatMessage({ defaultMessage: "无访问权限" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "无权限 - NoAuth：适用于用户通过URL打开页面，但没有访问页面功能的权限。",
        })}
      </Paragraph>
      <Canvas of={ResultStories.Forbidden} />

      <Title heading={3} id="payment-required">
        {formatMessage({ defaultMessage: "无权益" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "无权益 - 402 Payment Required：适用于用户通过URL打开页面，但没有没有购买该权益无功能可配",
        })}
      </Paragraph>
      <Canvas of={ResultStories.PaymentRequired} />

      <Title heading={3} id="no-resource">
        {formatMessage({ defaultMessage: "资源删除" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "资源删除 - NoResource：适用于用户通过URL访问资源页面（如看板、单图），但该资源已被删除。",
        })}
      </Paragraph>
      <Canvas of={ResultStories.NoResource} />
      <Title heading={3} id="not-found">
        {formatMessage({ defaultMessage: "404" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "404：适用于用户通过URL访问资源页面",
        })}
      </Paragraph>
      <Canvas of={ResultStories.NotFound} />
      <Title heading={3} id="internal-server-error">
        {formatMessage({ defaultMessage: "500" })}
      </Title>
      <Paragraph>{formatMessage({ defaultMessage: "500：适用于服务器错误。" })}</Paragraph>
      <Canvas of={ResultStories.InternalServerError} />
      <Title heading={3} id="unauthorized">
        {formatMessage({ defaultMessage: "登录失败" })}
      </Title>
      <Canvas of={ResultStories.Unauthorized} />
      <Title heading={3} id="ok">
        {formatMessage({ defaultMessage: "退出成功" })}
      </Title>
      <Canvas of={ResultStories.Ok} />
      <Title heading={3} id="icon">
        {formatMessage({ defaultMessage: "自定义 icon" })}
      </Title>
      <Paragraph>{formatMessage({ defaultMessage: "通过 icon 属性自定义图标" })}</Paragraph>
      <Canvas of={ResultStories.Icon} />
      <Title heading={2}>
        <FormattedMessage defaultMessage="用法" />
      </Title>
      <Source code={`import { Result } from 'growingio-design';`} language="tsx" />
      <Title id="result-props" heading={3}>
        ResultProps
      </Title>
      <PropsTable data={data} />
      <Markdown>
        当 `status` 传入 `null` 时，需要通过 `icon`
        属性设置图标，并且默认没有背景色以及图标颜色，[示例](/docs/base-result--docs#icon)。
      </Markdown>
    </Unstyled>
  );
}

export default injectIntl(DocPage);
