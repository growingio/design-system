import PropsTable, { type PropsTableData } from "@/components/props-table";
import { Typography } from "@/src";
import { Canvas, Source, Unstyled } from "@storybook/addon-docs/blocks";
import { IntlShape, injectIntl } from "react-intl";
import * as Stories from "./index.stories";

const { Title, Paragraph } = Typography;

function DocPage({ intl }: { intl: IntlShape }) {
  const { formatMessage } = intl;
  const data: PropsTableData[] = [
    {
      name: "countUp",
      description: formatMessage({ defaultMessage: "数字动态变大。" }),
      type: "boolean",
      defaultValue: "-",
    },
    {
      name: "groupSeparator",
      description: formatMessage({ defaultMessage: "显示千位分割符。" }),
      type: "boolean",
      defaultValue: "-",
    },
    {
      name: "loading",
      description: formatMessage({ defaultMessage: "数字是否加载中。" }),
      type: "boolean",
      defaultValue: "-",
    },
    {
      name: "countDuration",
      description: formatMessage({ defaultMessage: "动态变大的过渡时间 (ms)。" }),
      type: "number",
      defaultValue: "2000",
    },
    {
      name: "countFrom",
      description: formatMessage({ defaultMessage: "从什么数字开始动态变大。" }),
      type: "number",
      defaultValue: "0",
    },
    {
      name: "precision",
      description: formatMessage({ defaultMessage: "数字精度。" }),
      type: "number",
      defaultValue: "-",
    },
    {
      name: "format",
      description: formatMessage({
        defaultMessage: "[Day.js 的 format](https://day.js.org/docs/zh-CN/display/format)。",
      }),
      type: "string",
      defaultValue: "-",
    },
    {
      name: "renderFormat",
      description: formatMessage({
        defaultMessage: "自定义 render 函数。`formattedValue` 表示格式化后的值。",
      }),
      type: "(value: string | number | Dayjs, formattedValue: string) => ReactNode",
      defaultValue: "-",
    },
    {
      name: "extra",
      description: formatMessage({ defaultMessage: "在数值下展示额外内容。" }),
      type: "ReactNode",
      defaultValue: "-",
    },
    {
      name: "prefix",
      description: formatMessage({ defaultMessage: "前缀。" }),
      type: "string | ReactNode",
      defaultValue: "-",
    },
    {
      name: "suffix",
      description: formatMessage({ defaultMessage: "后缀。" }),
      type: "string | ReactNode",
      defaultValue: "-",
    },
    {
      name: "title",
      description: formatMessage({ defaultMessage: "数值的标题。" }),
      type: "string | ReactNode",
      defaultValue: "-",
    },
    {
      name: "styleDecimal",
      description: formatMessage({ defaultMessage: "数值小数部分的样式。" }),
      type: "CSSProperties",
      defaultValue: "-",
    },
    {
      name: "styleValue",
      description: formatMessage({ defaultMessage: "数值的样式。" }),
      type: "CSSProperties",
      defaultValue: "-",
    },
    {
      name: "value",
      description: formatMessage({ defaultMessage: "数值。" }),
      type: "string | number | Dayjs",
      defaultValue: "-",
    },
  ];
  const countDownPropsData: PropsTableData[] = [
    {
      name: "start",
      description: formatMessage({
        defaultMessage: "是否开始倒计时，默认为 `true`，可以通过设置该值控制倒计时的时机。",
      }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "format",
      description: formatMessage({
        defaultMessage: "[Day.js 的 format](https://day.js.org/docs/zh-CN/display/format)。",
      }),
      type: "string",
      defaultValue: "HH:mm:ss",
    },
    {
      name: "title",
      description: formatMessage({ defaultMessage: "数值的标题。" }),
      type: "string | ReactNode",
      defaultValue: "-",
    },
    {
      name: "now",
      description: formatMessage({ defaultMessage: "用于修正初始化时间显示不正确。" }),
      type: "number | string | Date | Dayjs",
      defaultValue: "-",
    },
    {
      name: "styleValue",
      description: formatMessage({ defaultMessage: "数值的样式。" }),
      type: "CSSProperties",
      defaultValue: "-",
    },
    {
      name: "value",
      description: formatMessage({ defaultMessage: "倒计时的时间。" }),
      type: "number | string | Date | Dayjs",
      defaultValue: "-",
    },
    {
      name: "onFinish",
      description: formatMessage({ defaultMessage: "倒计时完成后触发的回调。" }),
      type: "() => void",
      defaultValue: "-",
    },
    {
      name: "renderFormat",
      description: formatMessage({
        defaultMessage:
          "自定义 render 函数。`valueDiff` 表示两个时间的时间差，`formattedDiff` 表示格式化后的时间差。",
      }),
      type: "(valueDiff: number, formattedDiff: string) => ReactNode",
      defaultValue: "-",
    },
  ];

  return (
    <Unstyled>
      <Title>{formatMessage({ defaultMessage: "统计数值 Statistic" })}</Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "突出展示某个或某组数字、带描述的统计类数据。",
        })}
      </Paragraph>

      <Title heading={2}>{formatMessage({ defaultMessage: "示例" })}</Title>

      <Title heading={3} id="default">
        {formatMessage({ defaultMessage: "基础用法" })}
      </Title>
      <Canvas of={Stories.Default} />

      <Title heading={3} id="prefix-suffix">
        {formatMessage({ defaultMessage: "前缀后缀" })}
      </Title>
      <Canvas of={Stories.PrefixSuffix} />

      <Title heading={3} id="countup">
        {formatMessage({ defaultMessage: "计数器" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "如果你设置了 countUp，那么在组件 mount 之后，会执行动效。如果你想自己控制动效，也可以通过 ref 拿到实例，执行 ins.countUp() 即可。",
        })}
      </Paragraph>
      <Canvas of={Stories.CountUp} />

      <Title heading={3} id="format">
        {formatMessage({ defaultMessage: "格式化" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "format 即 dayjs 的 format。",
        })}
      </Paragraph>
      <Canvas of={Stories.Format} />

      <Title heading={3} id="loading">
        {formatMessage({ defaultMessage: "加载中状态" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "通过 loading 可以控制是否显示加载中状态。",
        })}
      </Paragraph>
      <Canvas of={Stories.Loading} />

      <Title heading={3} id="countdown">
        {formatMessage({ defaultMessage: "倒计时" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "倒计时组件。可以通过 now 来传入 Date.now()，用于修复初始值显示的小误差问题。",
        })}
      </Paragraph>
      <Canvas of={Stories.Countdowns} />

      <Title heading={2}>{formatMessage({ defaultMessage: "用法" })}</Title>
      <Source
        code={`import { Statistic, StatisticProps } from "@gio-design/react";
const { Countdown } = Statistic;`}
        language="typescript"
      />

      <Title id="statistic-props" heading={3}>
        Statistic Props
      </Title>
      <PropsTable data={data} />

      <Title id="statistic-countdown-props" heading={3}>
        Statistic.Countdown Props
      </Title>
      <PropsTable data={countDownPropsData} />
    </Unstyled>
  );
}

export default injectIntl(DocPage);
