import { IntlShape, injectIntl } from "react-intl";
import { Canvas, Unstyled, Source } from "@storybook/addon-docs/blocks";
import PropsTable, { type PropsTableData } from "../../../components/props-table";
import { Typography } from "../../../src";
import * as TagStories from "./index.stories";

const { Title, Paragraph } = Typography;

function DocPage({ intl }: { intl: IntlShape }) {
  const { formatMessage } = intl;
  const data: PropsTableData[] = [
    {
      name: "checkable",
      description: formatMessage({ defaultMessage: "是否支持选中。" }),
      type: "boolean",
    },
    {
      name: "checked",
      description: formatMessage({ defaultMessage: "是否选中。" }),
      type: "boolean",
    },
    {
      name: "closable",
      description: formatMessage({ defaultMessage: "是否可关闭标签。" }),
      type: "boolean",
    },
    {
      name: "defaultChecked",
      description: formatMessage({ defaultMessage: "是否默认选中。" }),
      type: "boolean",
    },
    {
      name: "visible",
      description: formatMessage({ defaultMessage: "设置标签显示隐藏。" }),
      type: "boolean",
    },
    {
      name: "color",
      description: formatMessage({ defaultMessage: "设置标签背景颜色。" }),
      type: "string",
    },
    {
      name: "size",
      description: formatMessage({ defaultMessage: "标签尺寸。" }),
      type: "'mini' | 'small' | 'medium' | 'large'",
      defaultValue: "small",
    },
    {
      name: "closeIcon",
      description: formatMessage({ defaultMessage: "自定义关闭图标。" }),
      type: "ReactNode",
    },
    {
      name: "icon",
      description: formatMessage({ defaultMessage: "设置图标。" }),
      type: "ReactNode",
    },
    {
      name: "bordered",
      description: formatMessage({ defaultMessage: "是否显示边框。" }),
      type: "Boolean",
    },
    {
      name: "onClose",
      description: formatMessage({ defaultMessage: "关闭标签回调函数。" }),
      type: "(e) => Promise<any> | void",
    },
    {
      name: "onCheck",
      description: formatMessage({ defaultMessage: "选中的回调。" }),
      type: "(checked: boolean) => void",
    },
  ];

  const badgeTagData: PropsTableData[] = [
    {
      name: "size",
      description: formatMessage({ defaultMessage: "子母标签尺寸。" }),
      type: "'mini' | 'small' | 'medium' | 'large'",
      defaultValue: "small",
    },
    {
      name: "icon",
      description: formatMessage({ defaultMessage: "设置图标。" }),
      type: "ReactNode",
    },
    {
      name: "title",
      description: formatMessage({ defaultMessage: "设置标题区域。" }),
      type: "ReactNode",
    },
    {
      name: "content",
      description: formatMessage({ defaultMessage: "设置内容区域。" }),
      type: "ReactNode",
    },
    {
      name: "contentColor",
      description: formatMessage({
        defaultMessage: "设置内容区域的背景颜色。",
      }),
      type: "string",
    },
  ];

  const avatarTagData: PropsTableData[] = [
    {
      name: "size",
      description: formatMessage({ defaultMessage: "头像标签尺寸。" }),
      type: "'mini' | 'small' | 'medium' | 'large'",
      defaultValue: "small",
    },
    {
      name: "imageSrc",
      description: formatMessage({ defaultMessage: "头像图片的 url。" }),
      type: "string",
    },
    {
      name: "mode",
      description: formatMessage({ defaultMessage: "颜色模式。" }),
      type: "'light' | 'dark'",
      defaultValue: "light",
    },
    {
      name: "label",
      description: formatMessage({ defaultMessage: "标签文本内容。" }),
      type: "ReactNode",
    },
  ];

  return (
    <Unstyled>
      <Title>{formatMessage({ defaultMessage: "标签 Tag" })}</Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "用于信息的选择、筛选、分类。用户通过标签进行信息反馈和交互操作。",
        })}
      </Paragraph>

      <Title heading={2}>{formatMessage({ defaultMessage: "示例" })}</Title>

      <Title heading={3} id="basic">
        {formatMessage({ defaultMessage: "基础用法" })}
      </Title>
      <Paragraph>{formatMessage({ defaultMessage: "标签的基础用法。" })}</Paragraph>
      <Canvas of={TagStories.Basic} />
      <Title heading={3} id="close">
        {formatMessage({ defaultMessage: "可关闭标签" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "可设置 closable 属性控制标签是否可关闭，可关闭标签可通过 onClose 事件执行一些关闭后操作。也可通过 visible 属性控制标签的显示隐藏。",
        })}
      </Paragraph>
      <Canvas of={TagStories.Close} />
      <Title heading={3} id="check">
        {formatMessage({ defaultMessage: "可选中" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "通过参数 checkable，可以实现点击选中的效果。",
        })}
      </Paragraph>
      <Canvas of={TagStories.Check} />
      <Title heading={3} id="type">
        {formatMessage({ defaultMessage: "标签类型" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "标签有 Normal、Highlighted、outline、light-outline 四种类型，根据场景选用。",
        })}
      </Paragraph>
      <Canvas of={TagStories.Type} />
      <Title heading={3} id="disabled">
        {formatMessage({ defaultMessage: "标签禁用" })}
      </Title>
      <Paragraph>{formatMessage({ defaultMessage: "标签的禁用状态。" })}</Paragraph>
      <Canvas of={TagStories.Disabled} />
      <Title heading={3} id="color">
        {formatMessage({ defaultMessage: "多色标签" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "我们提供多种预设色彩的标签样式，通过 color 设置不同颜色。如果预设值不能满足你的需求，color 字段也可以设置自定义色值。",
        })}
      </Paragraph>
      <Canvas of={TagStories.Color} />
      <Title heading={3} id="active">
        {formatMessage({ defaultMessage: "动态编辑标签" })}
      </Title>
      <Paragraph>{formatMessage({ defaultMessage: "可动态添加和删除标签。" })}</Paragraph>
      <Canvas of={TagStories.Active} />
      <Title heading={3} id="size">
        {formatMessage({ defaultMessage: "不同尺寸" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "标签分为：大、中、小、迷你，4 种尺寸。可在不同场景及不同业务需求选择适合尺寸。默认使用小型标签。",
        })}
      </Paragraph>
      <Canvas of={TagStories.Size} />
      <Title heading={3} id="close-async">
        {formatMessage({ defaultMessage: "异步关闭" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "如果 onClose 返回一个 Promise，可以异步关闭标签，并且在未关闭时展示加载效果。",
        })}
      </Paragraph>
      <Canvas of={TagStories.CloseAsync} />
      <Title heading={3} id="icon">
        {formatMessage({ defaultMessage: "带图标的标签" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "可通过设置 icon 在标签中加入图标。",
        })}
      </Paragraph>
      <Canvas of={TagStories.Icon} />
      <Title heading={3} id="bordered">
        {formatMessage({ defaultMessage: "带边框的标签" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "通过参数 bordered，可以显示带边框的标签。",
        })}
      </Paragraph>
      <Canvas of={TagStories.Bordered} />
      <Title heading={3} id="badge-tag">
        {formatMessage({ defaultMessage: "子母标签" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "标题区颜色固定，内容区颜色可自定义不同色值。标题区是否显示icon可配。",
        })}
      </Paragraph>
      <Canvas of={TagStories.BadgeTagBasic} />
      <Title heading={3} id="avatar-tag">
        {formatMessage({ defaultMessage: "头像标签" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "在与人相关的标签可使用。浅色为默认样式，头像内容可配。",
        })}
      </Paragraph>
      <Canvas of={TagStories.AvatarTagBasic} />
      <Title heading={2}>{formatMessage({ defaultMessage: "用法" })}</Title>
      <Source
        code={`import { Tag, BadgeTag, AvatarTag } from "growingio-design";`}
        language="tsx"
      />
      <Title id="tag-props" heading={3}>
        Tag Props
      </Title>
      <PropsTable data={data} />
      <Title id="badge-tag-props" heading={3}>
        BadgeTag Props
      </Title>
      <PropsTable data={badgeTagData} />
      <Title id="avatar-tag-props" heading={3}>
        AvatarTag Props
      </Title>
      <PropsTable data={avatarTagData} />
    </Unstyled>
  );
}

export default injectIntl(DocPage);
