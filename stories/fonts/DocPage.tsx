import { injectIntl, IntlShape } from "react-intl";
import { Unstyled, Typeset } from "@storybook/blocks";
import { Typography, Grid } from "../../src";
import React from "react";

const { Title, Paragraph } = Typography;

function FontFamily(props: { title: string; name: string; text: string }) {
  const { title, name, text } = props;
  return (
    <div style={{ maxWidth: 264, textAlign: "center" }}>
      <Paragraph
        style={{
          color: "var(--color-text-1)",
          fontSize: 64,
          lineHeight: "64px",
          marginBottom: 0,
        }}
      >
        {title}
      </Paragraph>
      <Paragraph
        style={{
          marginTop: 8,
          marginBottom: 0,
          color: "var(--color-text-3)",
          fontSize: 12,
          lineHeight: "18px",
        }}
      >
        {name}
      </Paragraph>
      <Paragraph
        style={{
          marginTop: 24,
          marginBottom: 0,
          color: "var(--color-text-1)",
          fontSize: 14,
          lineHeight: "22px",
        }}
      >
        {text}
      </Paragraph>
    </div>
  );
}

const FONT_SIZES = [
  "48px",
  "36px",
  "32px",
  "24px",
  "20px",
  "18px",
  "16px",
  "14px",
  "12px",
];
const FONT_FAMILY = [
  "Inter",
  "-apple-system",
  "BlinkMacSystemFont",
  "PingFang SC",
  "Hiragino Sans GB",
  "noto sans",
  "Microsoft YaHei",
  "Helvetica Neue",
  "Helvetica",
  "Arial",
  "sans-serif",
];
const NUMBER_TEXT = "0123456789";

function DocPage({ intl: { formatMessage } }: { intl: IntlShape }) {
  return (
    <Unstyled>
      <Title>{formatMessage({ defaultMessage: "字体 Fonts" })}</Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "字体是 UI 设计中最基本的构成之一。字体系统的建立主要解决的是内容可读性以及信息的表达，同时选择不同的字体传达不同的设计风格。通过定义字体的使用规则在设计上达到统一性和整体性，从而在阅读的舒适性上达到平衡。",
        })}
      </Paragraph>
      <Title heading={2}>{formatMessage({ defaultMessage: "样式" })}</Title>

      <Title heading={3} id="font-family">
        {formatMessage({ defaultMessage: "字体族 Font Family" })}
      </Title>
      <Grid.Row>
        <Grid.Col span={8}>
          <FontFamily
            title="Aa"
            name={FONT_FAMILY[0]}
            text="sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </Grid.Col>
        <Grid.Col span={8}>
          <FontFamily title="123" name={FONT_FAMILY[0]} text={NUMBER_TEXT} />
        </Grid.Col>
        <Grid.Col span={8}>
          <FontFamily
            title="永"
            name={FONT_FAMILY.slice(1).join(",")}
            text="滚滚长江东逝水，浪花淘尽英雄。青山依旧在，几度夕阳红。"
          />
        </Grid.Col>
      </Grid.Row>

      <Title heading={3} id="font-size">
        {formatMessage({ defaultMessage: "字号 Font Size" })}
      </Title>
      <Typeset
        fontSizes={FONT_SIZES}
        fontFamily={FONT_FAMILY.join(",")}
        sampleText="GrowingIO 设计系统"
      />
      <Title heading={4}>
        {formatMessage({ defaultMessage: "数字字体 D-DIN" })}
      </Title>
      <Typeset
        fontSizes={FONT_SIZES}
        fontFamily="D-DIN"
        sampleText={NUMBER_TEXT}
      />
    </Unstyled>
  );
}

export default injectIntl(DocPage);
