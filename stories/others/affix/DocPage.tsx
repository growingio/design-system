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
      name: "offsetBottom",
      description: formatMessage({ defaultMessage: "距离窗口底部达到指定偏移量后触发。" }),
      type: "number",
    },
    {
      name: "offsetTop",
      description: formatMessage({ defaultMessage: "距离窗口顶部达到指定偏移量后触发。" }),
      type: "number",
      defaultValue: "0",
    },
    {
      name: "affixClassName",
      description: formatMessage({ defaultMessage: "给 `fixed` 的元素设置 className。" }),
      type: "string | string[]",
    },
    {
      name: "affixStyle",
      description: formatMessage({
        defaultMessage:
          "给 `fixed` 的元素设置 style，注意不要设置 `position` `top` `width` `height`， 因为这几个属性是在元素 fixed 时候用于定位的。",
      }),
      type: "CSSProperties",
    },
    {
      name: "onChange",
      description: formatMessage({ defaultMessage: "固定状态发生改变时触发。" }),
      type: "(affixed: boolean) => void",
    },
    {
      name: "target",
      description: formatMessage({ defaultMessage: "滚动容器。" }),
      type: "() => HTMLElement | null | Window",
      defaultValue: "() => window",
    },
    {
      name: "targetContainer",
      description: formatMessage({
        defaultMessage:
          "`target` 的外层滚动元素。`Affix` 将会监听该元素的滚动事件，并实时更新固钉的位置。主要是为了解决 `target` 属性指定为非 `window` 元素时，如果外层元素滚动，可能会导致固钉跑出容器问题。",
      }),
      type: "() => HTMLElement | null | Window",
    },
  ];

  return (
    <Unstyled>
      <Title>{formatMessage({ defaultMessage: "固钉 Affix" })}</Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "将页面元素钉在可视范围。当内容区域比较长，需要滚动页面时，固钉可以将内容固定在屏幕上。常用于侧边菜单和按钮组合。",
        })}
      </Paragraph>

      <Title heading={2}>{formatMessage({ defaultMessage: "示例" })}</Title>

      <Title heading={3} id="default">
        {formatMessage({ defaultMessage: "基础用法" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "基本用法，不设置固定位置时，当页面滚动元素不可见时，元素固定在页面最顶部。",
        })}
      </Paragraph>
      <Canvas of={Stories.Default} />

      <Title heading={3} id="offset-top">
        {formatMessage({ defaultMessage: "顶部" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "元素向上滚动到距顶部一定距离时固定。",
        })}
      </Paragraph>
      <Canvas of={Stories.OffsetTop} />

      <Title heading={3} id="offset-bottom">
        {formatMessage({ defaultMessage: "底部" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "元素向下滚动到距底部一定距离时固定。",
        })}
      </Paragraph>
      <Canvas of={Stories.OffsetBottom} />

      <Title heading={3} id="callback">
        {formatMessage({ defaultMessage: "回调" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "当固定状态发生改变时，会触发事件。",
        })}
      </Paragraph>
      <Canvas of={Stories.Callback} />

      <Title heading={2}>{formatMessage({ defaultMessage: "用法" })}</Title>
      <Source code={`import { Affix, type AffixProps } from "@gio-design/react";`} language="tsx" />

      <Title id="props" heading={3}>
        AffixProps
      </Title>
      <PropsTable data={data} />
    </Unstyled>
  );
}

const IntlDocPage = injectIntl(DocPage);
export default IntlDocPage;
