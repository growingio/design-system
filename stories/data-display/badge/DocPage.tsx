import { injectIntl, IntlShape } from "react-intl";
import { Canvas, Unstyled, Source } from "@storybook/addon-docs/blocks";
import PropsTable from "@/components/props-table";
import { Typography } from "@/src";
import * as BadgeStories from "./index.stories";
import colors from "@/src/_core/colors";
import React from "react";

const { Title, Paragraph } = Typography;

function DocPage({ intl }: { intl: IntlShape }) {
  const { formatMessage } = intl;

  const data = [
    {
      name: "dot",
      description: formatMessage({ defaultMessage: "显示为小红点。" }),
      type: "boolean",
    },
    {
      name: "maxCount",
      description: formatMessage({
        defaultMessage:
          "徽标最大显示数值，如果 count 超过这个数值会显示为 `maxCount+`",
      }),
      type: "number",
      defaultValue: "99",
    },
    {
      name: "text",
      description: formatMessage({ defaultMessage: "自定义提示内容。" }),
      type: "string",
    },
    {
      name: "color",
      description: formatMessage({ defaultMessage: "内置的一些颜色。" }),
      type: `'${colors.join("' | '")}' | string`,
    },
    {
      name: "status",
      description: formatMessage({ defaultMessage: "徽标的状态类型。" }),
      type: "'default' | 'processing' | 'success' | 'warning' | 'error'",
    },
    {
      name: "count",
      description: formatMessage({ defaultMessage: "徽标显示的数字。" }),
      type: "number | ReactNode",
      defaultValue: "0",
    },
    {
      name: "offset",
      description: formatMessage({ defaultMessage: "设置徽标位置的偏移。" }),
      type: "[number, number]",
    },
    {
      name: "dotClassName",
      description: formatMessage({ defaultMessage: "徽标的类名。" }),
      type: "string | string[]",
    },
    {
      name: "dotStyle",
      description: formatMessage({ defaultMessage: "徽标的样式。" }),
      type: "CSSProperties",
    },
  ];

  return (
    <Unstyled>
      <Title>{formatMessage({ defaultMessage: "徽标数 Badge" })}</Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "一般出现在图标或文字的右上角。提供及时、重要的信息提示。",
        })}
      </Paragraph>

      <Title heading={2}>{formatMessage({ defaultMessage: "示例" })}</Title>

      <Title heading={3} id="basic">
        {formatMessage({ defaultMessage: "基础用法" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "基础的用法。只需指定 count，即可显示徽标。",
        })}
      </Paragraph>
      <Canvas of={BadgeStories.Basic} />

      <Title heading={3} id="no-children">
        {formatMessage({ defaultMessage: "独立使用" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "children 为空时，将会独立展示徽标。",
        })}
      </Paragraph>
      <Canvas of={BadgeStories.NoChildren} />

      <Title heading={3} id="dot">
        {formatMessage({ defaultMessage: "小红点" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "设置 dot，即可只显示小红点而不显示数字。count > 0 时才显示。",
        })}
      </Paragraph>
      <Canvas of={BadgeStories.Dot} />

      <Title heading={3} id="text">
        {formatMessage({ defaultMessage: "文本内容" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "设置 text，可设置自定义提示内容。",
        })}
      </Paragraph>
      <Canvas of={BadgeStories.Text} />

      <Title heading={3} id="max-count">
        {formatMessage({ defaultMessage: "最大值" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "设置 maxCount，可以限制最大显示的徽标数值，超过将会加 + 后缀。maxCount 默认为 99。",
        })}
      </Paragraph>
      <Canvas of={BadgeStories.MaxCount} />

      <Title heading={3} id="status">
        {formatMessage({ defaultMessage: "状态点" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "设置 status，可以得到不同的状态点。",
        })}
      </Paragraph>
      <Canvas of={BadgeStories.Status} />

      <Title heading={3} id="color">
        {formatMessage({ defaultMessage: "颜色" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "我们提供多种预设色彩的徽标样式。如果预设值不能满足你的需求，color 字段也可以设置自定义色值。",
        })}
      </Paragraph>
      <Canvas of={BadgeStories.Color} />

      <Title heading={3} id="animation">
        {formatMessage({ defaultMessage: "动画效果" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "count 改变时候存在动画效果。",
        })}
      </Paragraph>
      <Canvas of={BadgeStories.Animation} />

      <Title heading={2}>{formatMessage({ defaultMessage: "用法" })}</Title>
      <Source
        code={`import { Badge, type BadgeProps } from "growingio-design";`}
        language="tsx"
      />

      <Title id="props" heading={3}>
        BadgeProps
      </Title>
      <PropsTable data={data} />

      <Title id="faq" heading={3}>
        {formatMessage({ defaultMessage: "常见问题" })}
      </Title>
      <ul>
        <li>
          <Paragraph>
            {formatMessage({
              defaultMessage: "如何在 dot=true 时设置不显示小红点？",
            })}
          </Paragraph>
          <Paragraph>
            {formatMessage({
              defaultMessage: "可以设置 count=0。count>0 的时候才会展示徽标。",
            })}
          </Paragraph>
        </li>
      </ul>
    </Unstyled>
  );
}

const IntlDocPage = injectIntl(DocPage);
export default IntlDocPage;
