import React from "react";
import { IconGallery, IconItem } from "@storybook/blocks";
import { FormattedMessage, useIntl } from "react-intl";
import * as Icon from "@arco-iconbox/react-growingio";
import { Radio } from "@/src";
import {
  GENERAL_ICONS,
  USER_ICONS,
  DATA_ICONS,
  DIRECTION_ICONS,
  TIPS_ICONS,
  PLATFORM_DEVICE_ICONS,
  EDIT_ICONS,
  MEDIA_ICONS,
  FILLED_ICONS,
  COLOR_ICONS,
  EMOJIS,
} from "./Icons";

const renderIcons = (icons: string[], title: string) => (
  <div
    style={{
      marginTop: 40,
      border: "1px solid var(--color-border)",
      boxSizing: "border-box",
    }}
  >
    <div
      style={{
        padding: 12,
        fontSize: 16,
        fontWeight: 500,
        borderBottom: "1px solid var(--color-border)",
        backgroundColor: "var(--color-bg-2)",
      }}
    >
      {title}
    </div>
    <div style={{ padding: "12px 12px 0px 12px" }}>
      <IconGallery>
        {icons.map((name) => {
          const iconElement = name.startsWith("Icon") ? name : `Icon${name}`;
          // @ts-expect-error valid icon name
          const icon = Icon[iconElement];
          if (!icon) {
            console.error("[*] not found icon: ", name);
          }
          return (
            <IconItem key={name} name={name.replace("Icon", "")}>
              {React.createElement(icon)}
            </IconItem>
          );
        })}
      </IconGallery>
    </div>
  </div>
);

export default function IconPanel() {
  const [iconType, setIconType] = React.useState("outlined");
  const { formatMessage } = useIntl();

  const content = () => {
    if (iconType === "emoji") {
      return (
        <>
          {renderIcons(
            EMOJIS,
            formatMessage({ defaultMessage: "Emoji({count})" }, { count: EMOJIS.length }),
          )}
        </>
      );
    }
    if (iconType === "color") {
      return (
        <>
          {renderIcons(
            COLOR_ICONS,
            formatMessage({ defaultMessage: "多色图标（{count}）" }, { count: COLOR_ICONS.length }),
          )}
        </>
      );
    }
    if (iconType === "filled") {
      return (
        <>
          {renderIcons(
            FILLED_ICONS,
            formatMessage(
              { defaultMessage: "面性图标（{count}）" },
              { count: FILLED_ICONS.length },
            ),
          )}
        </>
      );
    }
    return (
      <>
        {renderIcons(
          GENERAL_ICONS,
          formatMessage(
            { defaultMessage: "通用类图标（{count}）" },
            { count: GENERAL_ICONS.length },
          ),
        )}
        {renderIcons(
          USER_ICONS,
          formatMessage({ defaultMessage: "用户图标（{count}）" }, { count: USER_ICONS.length }),
        )}
        {renderIcons(
          DATA_ICONS,
          formatMessage(
            { defaultMessage: "数据、业务图标（{count}）" },
            { count: DATA_ICONS.length },
          ),
        )}
        {renderIcons(
          DIRECTION_ICONS,
          formatMessage(
            { defaultMessage: "方向指示图标（{count}）" },
            { count: DIRECTION_ICONS.length },
          ),
        )}
        {renderIcons(
          TIPS_ICONS,
          formatMessage(
            { defaultMessage: "提示建议类图标（{count}）" },
            { count: TIPS_ICONS.length },
          ),
        )}
        {renderIcons(
          PLATFORM_DEVICE_ICONS,
          formatMessage(
            { defaultMessage: "平台和设备图标（{count}）" },
            { count: PLATFORM_DEVICE_ICONS.length },
          ),
        )}
        {renderIcons(
          EDIT_ICONS,
          formatMessage({ defaultMessage: "编辑类图标（{count}）" }, { count: EDIT_ICONS.length }),
        )}
        {renderIcons(
          MEDIA_ICONS,
          formatMessage({ defaultMessage: "影音类图标（{count}）" }, { count: MEDIA_ICONS.length }),
        )}
      </>
    );
  };
  return (
    <>
      <div style={{ display: "flex", marginTop: "2rem" }}>
        <Radio.Group type="button" value={iconType} onChange={setIconType}>
          <Radio value="outlined">
            <FormattedMessage defaultMessage="线性图标" />
          </Radio>
          <Radio value="filled">
            <FormattedMessage defaultMessage="面性图标" />
          </Radio>
          <Radio value="color">
            <FormattedMessage defaultMessage="多色图标" />
          </Radio>
          <Radio value="emoji">
            <FormattedMessage defaultMessage="Emoji" />
          </Radio>
        </Radio.Group>
      </div>
      {content()}
    </>
  );
}
