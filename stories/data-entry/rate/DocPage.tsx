import PropsTable, { type PropsTableData } from "@/components/props-table";
import { Typography } from "@/src";
import { Canvas, Source, Unstyled } from "@storybook/blocks";
import { injectIntl, IntlShape } from "react-intl";
import * as Stories from "./index.stories";

const { Title, Paragraph } = Typography;

function DocPage({ intl }: { intl: IntlShape }) {
  const { formatMessage } = intl;

  const data: PropsTableData[] = [
    {
      name: "allowClear",
      description: formatMessage({ defaultMessage: "是否允许清除。" }),
      type: "boolean",
    },
    {
      name: "allowHalf",
      description: formatMessage({ defaultMessage: "是否允许半选。" }),
      type: "boolean",
    },
    {
      name: "disabled",
      description: formatMessage({ defaultMessage: "是否禁用。" }),
      type: "boolean",
    },
    {
      name: "grading",
      description: formatMessage({ defaultMessage: "笑脸分级。" }),
      type: "boolean",
    },
    {
      name: "readonly",
      description: formatMessage({ defaultMessage: "是否只读，不能选择。" }),
      type: "boolean",
    },
    {
      name: "count",
      description: formatMessage({ defaultMessage: "星的总数。" }),
      type: "number",
      defaultValue: "5",
    },
    {
      name: "defaultValue",
      description: formatMessage({ defaultMessage: "默认值。" }),
      type: "number",
    },
    {
      name: "value",
      description: formatMessage({ defaultMessage: "星的个数，受控值。" }),
      type: "number",
    },
    {
      name: "tooltips",
      description: formatMessage({ defaultMessage: "自定义每一项的提示信息。" }),
      type: "string[]",
    },
    {
      name: "character",
      description: formatMessage({ defaultMessage: "自定义字符。" }),
      type: "ReactNode | ((index: number) => ReactNode)",
      defaultValue: "<IconStarFill />",
    },
    {
      name: "onChange",
      description: formatMessage({ defaultMessage: "选择时的回调。" }),
      type: "(value: number) => void",
    },
    {
      name: "onHoverChange",
      description: formatMessage({ defaultMessage: "鼠标经过时数值变化的回调。" }),
      type: "(value: number) => void",
    },
  ];

  return (
    <Unstyled>
      <Title>{formatMessage({ defaultMessage: "评分 Rate" })}</Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "用于对事物进行评分操作。",
        })}
      </Paragraph>

      <Title heading={2}>{formatMessage({ defaultMessage: "示例" })}</Title>

      <Title heading={3} id="default">
        {formatMessage({ defaultMessage: "基础用法" })}
      </Title>
      <Canvas of={Stories.Default} />

      <Title heading={3} id="disable">
        {formatMessage({ defaultMessage: "禁用状态" })}
      </Title>
      <Canvas of={Stories.Disabled} />

      <Title heading={3} id="readonly">
        {formatMessage({ defaultMessage: "只读状态" })}
      </Title>
      <Canvas of={Stories.ReadOnly} />

      <Title heading={3} id="allow-half">
        {formatMessage({ defaultMessage: "半选状态" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "半选状态可通过 allowHalf 来开启。",
        })}
      </Paragraph>
      <Canvas of={Stories.AllowHalf} />

      <Title heading={3} id="allow-clear">
        {formatMessage({ defaultMessage: "允许清除" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "单击选中，再单击清除。",
        })}
      </Paragraph>
      <Canvas of={Stories.AllowClear} />

      <Title heading={3} id="count">
        {formatMessage({ defaultMessage: "指定长度" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "通过 count 指定星星数量。",
        })}
      </Paragraph>
      <Canvas of={Stories.Count} />

      <Title heading={3} id="grading">
        {formatMessage({ defaultMessage: "笑脸分级" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "通过 grading 指定使用笑脸分级。",
        })}
      </Paragraph>
      <Canvas of={Stories.Grading} />

      <Title heading={3} id="tooltips">
        {formatMessage({ defaultMessage: "提示" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "通过 tooltips 指定提示文本。",
        })}
      </Paragraph>
      <Canvas of={Stories.Tooltips} />

      <Title heading={3} id="characters">
        {formatMessage({ defaultMessage: "字符" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "通过 characters 指定字符，可以是字母、数字、中文等。",
        })}
      </Paragraph>
      <Canvas of={Stories.Characters} />

      <Title heading={2}>{formatMessage({ defaultMessage: "用法" })}</Title>
      <Source
        code={`import { Rate, type RateProps } from "@gio-design/react";`}
        language="typescript"
      />

      <Title id="props" heading={3}>
        RateProps
      </Title>
      <PropsTable data={data} />
    </Unstyled>
  );
}

export default injectIntl(DocPage);
