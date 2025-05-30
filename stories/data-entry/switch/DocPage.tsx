import PropsTable, { type PropsTableData } from "@/components/props-table";
import { Typography } from "@/src";
import { Canvas, Source, Unstyled } from "@storybook/addon-docs/blocks";
import { injectIntl, IntlShape } from "react-intl";
import * as Stories from "./index.stories";

const { Title, Paragraph } = Typography;

function DocPage({ intl }: { intl: IntlShape }) {
  const { formatMessage } = intl;

  const data: PropsTableData[] = [
    {
      name: "checked",
      description: formatMessage({ defaultMessage: "开关是否打开。" }),
      type: "boolean",
    },
    {
      name: "defaultChecked",
      description: formatMessage({ defaultMessage: "默认是否选中。" }),
      type: "boolean",
    },
    {
      name: "disabled",
      description: formatMessage({ defaultMessage: "是否禁用。" }),
      type: "boolean",
    },
    {
      name: "loading",
      description: formatMessage({ defaultMessage: "加载中状态。" }),
      type: "boolean",
    },
    {
      name: "size",
      description: formatMessage({ defaultMessage: "开关的尺寸，有 small 和 default 可供选择。" }),
      type: "'small' | 'default'",
    },
    {
      name: "type",
      description: formatMessage({ defaultMessage: "三种样式类型。" }),
      type: "'circle' | 'round' | 'line'",
      defaultValue: "circle",
    },
    {
      name: "checkedIcon",
      description: formatMessage({ defaultMessage: "开关打开时，按钮上显示的图标。" }),
      type: "ReactNode",
    },
    {
      name: "checkedText",
      description: formatMessage({ defaultMessage: "开关打开时的文案，small 尺寸不生效。" }),
      type: "ReactNode",
    },
    {
      name: "uncheckedIcon",
      description: formatMessage({ defaultMessage: "开关关闭时，按钮上显示的图标。" }),
      type: "ReactNode",
    },
    {
      name: "uncheckedText",
      description: formatMessage({ defaultMessage: "开关关闭时的文案，small 尺寸不生效。" }),
      type: "ReactNode",
    },
    {
      name: "onChange",
      description: formatMessage({ defaultMessage: "点击开关的回调。" }),
      type: "(value: boolean, event) => void",
    },
  ];

  return (
    <Unstyled>
      <Title>{formatMessage({ defaultMessage: "开关 Switch" })}</Title>
      <Paragraph>{formatMessage({ defaultMessage: "使用开关切换两种状态之间。" })}</Paragraph>

      <Title heading={2}>{formatMessage({ defaultMessage: "示例" })}</Title>

      <Title heading={3} id="default">
        {formatMessage({ defaultMessage: "基础用法" })}
      </Title>
      <Canvas of={Stories.Default} />

      <Title heading={3} id="disable">
        {formatMessage({ defaultMessage: "禁用状态" })}
      </Title>
      <Canvas of={Stories.Disabled} />

      <Title heading={3} id="icon">
        {formatMessage({ defaultMessage: "图标" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "自定义两种状态的图标。",
        })}
      </Paragraph>
      <Canvas of={Stories.Icon} />

      <Title heading={3} id="text">
        {formatMessage({ defaultMessage: "文本" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "自定义两种状态的文本。",
        })}
      </Paragraph>
      <Canvas of={Stories.Text} />

      <Title heading={3} id="types">
        {formatMessage({ defaultMessage: "不同类型" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "开关有三种类型：circle、round、line，默认是circle。",
        })}
      </Paragraph>
      <Canvas of={Stories.Types} />

      <Title heading={3} id="sizes">
        {formatMessage({ defaultMessage: "尺寸" })}
      </Title>
      <Paragraph>
        {formatMessage({ defaultMessage: "开关有三种尺寸：small、default、large。" })}
      </Paragraph>
      <Canvas of={Stories.Sizes} />

      <Title heading={3} id="loading">
        {formatMessage({ defaultMessage: "加载中" })}
      </Title>
      <Paragraph>{formatMessage({ defaultMessage: "开关处于加载中状态，不可点击。" })}</Paragraph>
      <Canvas of={Stories.Loading} />

      <Title heading={2}>{formatMessage({ defaultMessage: "用法" })}</Title>
      <Source
        code={`import { Switch, type SwitchProps } from "@gio-design/react";`}
        language="typescript"
      />

      <Title id="props" heading={3}>
        SwitchProps
      </Title>
      <PropsTable data={data} />
    </Unstyled>
  );
}

export default injectIntl(DocPage);
