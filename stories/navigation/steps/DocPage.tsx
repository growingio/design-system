import { FormattedMessage, injectIntl, IntlShape } from "react-intl";
import { Canvas, Unstyled, Source } from "@storybook/addon-docs/blocks";
import PropsTable, { type PropsTableData } from "@/components/props-table";
import { Typography } from "@/src";
import * as Stories from "./index.stories";

const { Title, Paragraph } = Typography;

function DocPage({ intl }: { intl: IntlShape }) {
  const { formatMessage } = intl;
  const data: PropsTableData[] = [
    {
      name: "lineless",
      description: formatMessage({ defaultMessage: "无连接线模式。" }),
      type: "boolean",
    },
    {
      name: "current",
      description: formatMessage({ defaultMessage: "当前步数。" }),
      type: "number",
      defaultValue: "1",
    },
    {
      name: "direction",
      description: formatMessage({ defaultMessage: "显示方向。" }),
      type: "'vertical' \\| 'horizontal'",
      defaultValue: "horizontal",
    },
    {
      name: "labelPlacement",
      description: formatMessage({
        defaultMessage:
          "标签描述文字放置的位置，默认 `horizontal` 水平放在图标右侧，可选 `vertical` 放在图标下方。",
      }),
      type: "'horizontal' \\| 'vertical'",
      defaultValue: "horizontal",
    },
    {
      name: "size",
      description: formatMessage({ defaultMessage: "步骤条的尺寸。" }),
      type: "'default' \\| 'small'",
      defaultValue: "default",
    },
    {
      name: "status",
      description: formatMessage({ defaultMessage: "当前步数的节点状态。" }),
      type: "'wait' \\| 'process' \\| 'finish' \\| 'error'",
    },
    {
      name: "type",
      description: formatMessage({ defaultMessage: "节点样式类型。" }),
      type: "'default' \\| 'arrow' \\| 'dot' \\| 'navigation'",
      defaultValue: "default",
    },
    {
      name: "customDot",
      description: formatMessage({ defaultMessage: "自定义步骤条节点，不支持箭头模式。" }),
      type: "(IconDot: ReactNode, stepConfig: { index: number; status: string; title: ReactNode; description: ReactNode }) => ReactNode",
    },
    {
      name: "onChange",
      description: formatMessage({
        defaultMessage: "点击步骤切换的回调，设置这个属性后，步骤条可点击切换。",
      }),
      type: "(current: number, id: any) => void",
    },
  ];
  const stepPropsData: PropsTableData[] = [
    {
      name: "disabled",
      description: formatMessage({ defaultMessage: "当前步骤点击被禁用。" }),
      type: "boolean",
    },
    {
      name: "status",
      description: formatMessage({ defaultMessage: "节点状态。" }),
      type: "'wait' \\| 'process' \\| 'finish' \\| 'error'",
    },
    {
      name: "description",
      description: formatMessage({ defaultMessage: "节点描述。" }),
      type: "string \\| ReactNode",
    },
    {
      name: "title",
      description: formatMessage({ defaultMessage: "节点标题。" }),
      type: "string \\| ReactNode",
    },
    {
      name: "id",
      description: formatMessage({
        defaultMessage: "指定节点的 ID，将在 onChange 回调中作为参数。",
      }),
      type: "any",
    },
    {
      name: "onClick",
      description: formatMessage({ defaultMessage: "点击回调。" }),
      type: "(index: number, id: any, e) => void",
    },
  ];
  return (
    <Unstyled>
      <Title>
        <FormattedMessage defaultMessage="步骤条 Steps" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="明示任务流程和当前完成程度，引导用户按照步骤完成任务。" />
      </Paragraph>

      <Title heading={2}>
        <FormattedMessage defaultMessage="示例" />
      </Title>

      <Title heading={3} id="default">
        <FormattedMessage defaultMessage="默认样式" />
      </Title>
      <Canvas of={Stories.Default} />

      <Title heading={3} id="size">
        <FormattedMessage defaultMessage="小型步骤条" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="通过size属性可以设置展示小型步骤条。" />
      </Paragraph>
      <Canvas of={Stories.Size} />

      <Title heading={3} id="label-placement">
        <FormattedMessage defaultMessage="标签放置位置" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="标签描述文字放置的位置，默认 horizontal 水平放在图标右侧，可选 vertical 放在图标下方。" />
      </Paragraph>
      <Canvas of={Stories.LabelPlacement} />

      <Title heading={3} id="status">
        <FormattedMessage defaultMessage="步骤状态" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="通过指定参数 status 来指定错误状态。" />
      </Paragraph>
      <Canvas of={Stories.Status} />

      <Title heading={3} id="lineless">
        <FormattedMessage defaultMessage="隐藏连接线" />
      </Title>
      <Canvas of={Stories.Lineless} />

      <Title heading={3} id="direction">
        <FormattedMessage defaultMessage="纵向步骤条" />
      </Title>
      <Canvas of={Stories.Direction} />

      <Title heading={3} id="arrow">
        <FormattedMessage defaultMessage="箭头步骤条" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="指定 type: 'arrow'， 可以使用箭头类型的步骤条。注意：仅支持水平步骤条。" />
      </Paragraph>
      <Canvas of={Stories.Arrow} />

      <Title heading={3} id="dot">
        <FormattedMessage defaultMessage="点状步骤条" />
      </Title>
      <Canvas of={Stories.Dot} />

      <Title heading={3} id="navigation">
        <FormattedMessage defaultMessage="导航步骤条" />
      </Title>
      <Canvas of={Stories.Navigation} />

      <Title heading={3} id="mini">
        <FormattedMessage defaultMessage="迷你箭头步骤条" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="指定 type: 'arrow', size: 'small'， 可以使用迷你箭头类型的步骤条。仅支持水平步骤条。description 会被忽略。" />
      </Paragraph>
      <Canvas of={Stories.Mini} />

      <Title heading={3} id="custom-dot">
        <FormattedMessage defaultMessage="自定义步骤点" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="通过设置 customDot 可以自定义节点，可以给节点添加弹出或任意自定义操作。" />
      </Paragraph>
      <Canvas of={Stories.CustomDot} />

      <Title heading={3} id="icon">
        <FormattedMessage defaultMessage="自定义图标" />
      </Title>
      <Paragraph>
        <FormattedMessage defaultMessage="指定 icon 可以自定义每一步的图标显示。" />
      </Paragraph>
      <Canvas of={Stories.Icon} />

      <Title heading={2}>{formatMessage({ defaultMessage: "用法" })}</Title>
      <Source
        code={`import { Steps, type StepsProps } from "@gio-design/react";
const { Step } = Steps;`}
        language="tsx"
      />

      <Title id="steps-props" heading={3}>
        StepsProps
      </Title>
      <PropsTable data={data} />

      <Title id="step-props" heading={3}>
        Steps.Step Props
      </Title>
      <PropsTable data={stepPropsData} />
    </Unstyled>
  );
}

const IntlDocPage = injectIntl(DocPage);
export default IntlDocPage;
