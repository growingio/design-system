import PropsTable, { type PropsTableData } from "@/components/props-table";
import { Typography } from "@/src";
import { Canvas, Source, Unstyled } from "@storybook/blocks";
import { IntlShape, injectIntl } from "react-intl";
import * as Stories from "./index.stories";

const { Title, Paragraph } = Typography;

function DocPage({ intl }: { intl: IntlShape }) {
  const { formatMessage } = intl;
  const data: PropsTableData[] = [
    {
      name: "autoFixFontSize",
      description: formatMessage({ defaultMessage: "是否自动根据头像尺寸调整字体大小。" }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "size",
      description: formatMessage({ defaultMessage: "头像的尺寸大小，单位是 `px`。" }),
      type: "number",
    },
    {
      name: "shape",
      description: formatMessage({
        defaultMessage: "头像的形状，有圆形(circle)和正方形(square)两种。",
      }),
      type: "'circle' | 'square'",
      defaultValue: "circle",
    },
    {
      name: "triggerType",
      description: formatMessage({ defaultMessage: "可点击的头像交互类型。" }),
      type: "'mask' | 'button'",
      defaultValue: "button",
    },
    {
      name: "triggerIcon",
      description: formatMessage({ defaultMessage: "可点击的头像交互图标。" }),
      type: "ReactNode",
    },
    {
      name: "triggerIconStyle",
      description: formatMessage({ defaultMessage: "交互图标的样式。" }),
      type: "CSSProperties",
    },
    {
      name: "onClick",
      description: formatMessage({ defaultMessage: "点击回调。" }),
      type: "(e) => void",
    },
  ];
  const groupPropsData: PropsTableData[] = [
    {
      name: "autoFixFontSize",
      description: formatMessage({
        defaultMessage: "是否自动根据头像尺寸调整字体大小，(优先级低于 Avatar 组件本身)。",
      }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "zIndexAscend",
      description: formatMessage({ defaultMessage: "头像组内的头像 `z-index` 递增，默认是递减。" }),
      type: "boolean",
    },
    {
      name: "maxCount",
      description: formatMessage({
        defaultMessage: "头像组最多显示的头像数量，多余头像将以 `+x` 的形式展示。",
      }),
      type: "number",
    },
    {
      name: "size",
      description: formatMessage({
        defaultMessage: "头像的尺寸大小，单位是 `px`，(优先级低于 Avatar 组件本身)。",
      }),
      type: "number",
    },
    {
      name: "shape",
      description: formatMessage({ defaultMessage: "头像的形状，(优先级低于 Avatar 组件本身)。" }),
      type: "'circle' | 'square'",
      defaultValue: "circle",
    },
    {
      name: "maxPopoverTriggerProps",
      description: formatMessage({ defaultMessage: "多余头像气泡的 `TriggerProps`。" }),
      type: "[TriggerProps](trigger#trigger)",
    },
    {
      name: "maxStyle",
      description: formatMessage({ defaultMessage: "多余头像样式。" }),
      type: "CSSProperties",
    },
  ];

  return (
    <Unstyled>
      <Title>{formatMessage({ defaultMessage: "标签页 Tabs" })}</Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "将内容组织同一视图中，一次可查看一个视图内容。查看其他内容可切换选项卡查看。",
        })}
      </Paragraph>

      <Title heading={2}>{formatMessage({ defaultMessage: "示例" })}</Title>

      <Title heading={3} id="default">
        {formatMessage({ defaultMessage: "基础用法" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "如果头像是文字的话，会自动调节字体大小，来适应头像框。",
        })}
      </Paragraph>
      <Canvas of={Stories.Default} />

      <Title heading={3} id="size-shape">
        {formatMessage({ defaultMessage: "大小和形状" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "通过设置 size 字段，可以调节头像的大小，默认大小为 32px。设置 shape 字段，可以设置头像是圆形 (circle) 还是正方形 (square)。",
        })}
      </Paragraph>
      <Canvas of={Stories.SizeShape} />

      <Title heading={3} id="avatar-group">
        {formatMessage({ defaultMessage: "头像组" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "使用 Avatar.Group 可以使用头像组功能，可通过 size 指定头像的大小。",
        })}
      </Paragraph>
      <Canvas of={Stories.Group} />

      <Title heading={3} id="trigger">
        {formatMessage({ defaultMessage: "交互按钮" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "可以通过 triggerIcon triggerType 来定制交互按钮，类型有 mask (遮罩) 和 button (按钮) 两种，通过 onClick 参数来添加回调。",
        })}
      </Paragraph>
      <Canvas of={Stories.Trigger} />

      <Title heading={2}>{formatMessage({ defaultMessage: "用法" })}</Title>
      <Source
        code={`import { Avatar, AvatarProps } from "@gio-design/react";
const { Group } = Avatar;`}
        language="typescript"
      />

      <Title id="avatar-props" heading={3}>
        Avatar Props
      </Title>
      <PropsTable data={data} />

      <Title id="avatar-group-props" heading={3}>
        Avatar.Group Props
      </Title>
      <PropsTable data={groupPropsData} />
    </Unstyled>
  );
}

export default injectIntl(DocPage);
