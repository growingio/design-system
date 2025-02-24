import { ColorPalette, ColorItem, Title } from "@storybook/blocks";
import { useIntl } from "react-intl";
import colors from "../../src/_core/colors";
import React from "react";

type ColorMap = { [key: string]: string };

export default function ColorPalettePage() {
  const { formatMessage } = useIntl();

  const colorMessages: ColorMap = {
    ["gio-orange"]: formatMessage({
      defaultMessage: "GrowingIO 橙",
    }),
    primary: formatMessage({
      defaultMessage: "GrowingIO 蓝",
    }),
    blue: formatMessage({
      defaultMessage: "蓝色",
    }),
    green: formatMessage({
      defaultMessage: "绿色",
    }),
    orange: formatMessage({
      defaultMessage: "橙色",
    }),
    gold: formatMessage({
      defaultMessage: "金色",
    }),
    ["sky-blue"]: formatMessage({
      defaultMessage: "天空蓝",
    }),
    purple: formatMessage({
      defaultMessage: "紫色",
    }),
    magenta: formatMessage({
      defaultMessage: "品红",
    }),
    red: formatMessage({
      defaultMessage: "红色",
    }),
    lime: formatMessage({
      defaultMessage: "新生绿",
    }),
    cyan: formatMessage({
      defaultMessage: "青色",
    }),
    gray: formatMessage({
      defaultMessage: "灰色",
    }),
  };

  return (
    <>
      <Title>
        {formatMessage({
          defaultMessage: "颜色 Colors",
        })}
      </Title>
      <p>
        {formatMessage({
          defaultMessage:
            "组件库内置了一套基于动态梯度的色彩算法。色板中包含了 13 个常见的颜色，每个颜色分为 10 个梯度。通常，我们把 6 号色作为色板中的主色。",
        })}
      </p>
      <ColorPalette>
        {colors.map((color) => {
          return (
            <>
              <ColorItem
                title={colorMessages[color]}
                subtitle={color}
                colors={{ [`${color}`]: `rgb(var(--${color}-6))` }}
              />
              <ColorItem
                title=""
                subtitle=""
                colors={Array.from(Array(5).keys()).reduce((acc, cur) => {
                  const i = cur + 1;
                  acc[`${color}-${i}`] = `rgb(var(--${color}-${i}))`;
                  return acc;
                }, {} as ColorMap)}
              />
              <ColorItem
                title=""
                subtitle=""
                colors={Array.from(Array(5).keys()).reduce((acc, cur) => {
                  const i = cur + 6;
                  acc[`${color}-${i}`] = `rgb(var(--${color}-${i}))`;
                  return acc;
                }, {} as ColorMap)}
              />
            </>
          );
        })}
      </ColorPalette>
    </>
  );
}
