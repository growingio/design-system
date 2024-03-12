import { injectIntl, IntlShape } from "react-intl";
import { Canvas, Unstyled, Source } from "@storybook/blocks";
import PropsTable, { type PropsTableData } from "@/components/props-table";
import { Typography } from "@giod/react/src";
import * as BackTopStories from "./index.stories";

const { Title, Paragraph } = Typography;

function DocPage({ intl }: { intl: IntlShape }) {
  const { formatMessage } = intl;

  const data: PropsTableData[] = [
    {
      name: "duration",
      description: formatMessage({ defaultMessage: "滚动到顶部的时间。" }),
      type: "number",
      defaultValue: "400",
    },
    {
      name: "visibleHeight",
      description: formatMessage({
        defaultMessage: "当滚动到这个高度时，显示返回顶部按钮。",
      }),
      type: "number",
      defaultValue: "400",
    },
    {
      name: "easing",
      description: formatMessage({
        defaultMessage:
          "滚动到顶部的缓动方式类型, 所有类型：[b-tween](https://github.com/PengJiyuan/b-tween?tab=readme-ov-file#optionseasing-string)。",
      }),
      type: "string",
      defaultValue: "quartOut",
    },
    {
      name: "onClick",
      description: formatMessage({
        defaultMessage: "点击返回顶部时的回调函数。",
      }),
      type: "() => void",
    },
    {
      name: "target",
      description: formatMessage({
        defaultMessage:
          "设置需要监听其滚动事件的元素，值为一个返回对应 `DOM` 元素的函数。",
      }),
      type: "() => HTMLElement | Window",
      defaultValue: "() => window",
    },
  ];

  return (
    <Unstyled>
      <Title>{formatMessage({ defaultMessage: "返回顶部 BackTop" })}</Title>
      <Paragraph>
        {formatMessage({ defaultMessage: "可一键返回顶部的按钮。" })}
      </Paragraph>

      <Title heading={2}>{formatMessage({ defaultMessage: "示例" })}</Title>

      <Title heading={3} id="basic">
        {formatMessage({ defaultMessage: "基础用法" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "当滚动到一定高度的时候，在右下角会出现一个返回顶部的按钮。",
        })}
      </Paragraph>
      <Canvas of={BackTopStories.Basic} />

      <Title heading={3} id="children">
        {formatMessage({ defaultMessage: "自定义按钮" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "可以自定义返回顶部的按钮。",
        })}
      </Paragraph>
      <Canvas of={BackTopStories.Children} />

      <Title heading={3} id="easing-duration">
        {formatMessage({ defaultMessage: "滚动类型和滚动时间" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "当然，我们提供了更丰富的功能可供使用，你可以通过指定 easing 和 duration 来指定滚动到顶部的过度效果和滚动时间。",
        })}
      </Paragraph>
      <Canvas of={BackTopStories.EasingDuration} />

      <Title heading={2}>{formatMessage({ defaultMessage: "用法" })}</Title>
      <Source
        code={`import { BackTop, type BackTopProps } from "growingio-design";`}
        language="tsx"
      />

      <Title id="props" heading={3}>
        BackTopProps
      </Title>
      <PropsTable data={data} />
    </Unstyled>
  );
}

const IntlDocPage = injectIntl(DocPage);
export default IntlDocPage;
