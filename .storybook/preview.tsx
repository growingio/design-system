import type { Preview } from "@storybook/react";
import React, { useEffect } from "react";
import { themes } from "@storybook/theming";
import { DocsContainer } from "@storybook/blocks";
import { IntlProvider, injectIntl } from "react-intl";
import { ConfigProvider } from "../src";
import zhCN from "@arco-design/web-react/es/locale/zh-CN";
import enUS from "@arco-design/web-react/es/locale/en-US";
import zhCNMessages from "../locales/zh-CN.json";
import enUSMessages from "../locales/en-US.json";

import "../src/index.css";

const getComponentLocale = (locale: string) => {
  switch (locale) {
    case "en-US":
      return enUS;
    case "zh-CN":
    default:
      return zhCN;
  }
};
const getDocsLocale = (locale: string) => {
  switch (locale) {
    case "en-US":
      return enUSMessages;
    case "zh-CN":
    default:
      return zhCNMessages;
  }
};

const defaultLocale = "zh-CN";

const withConfigProvider = (Story, context) => {
  const {
    globals: { locale },
  } = context;

  const StoryWithIntl = injectIntl(Story);
  return (
    <IntlProvider defaultLocale={defaultLocale} locale={locale} messages={getDocsLocale(locale)}>
      <ConfigProvider locale={getComponentLocale(locale)}>
        <StoryWithIntl />
      </ConfigProvider>
    </IntlProvider>
  );
};

const CustomDocsContainer = ({ children, context }) => {
  const {
    store: {
      userGlobals: {
        globals: { locale, theme },
      },
    },
  } = context;

  useEffect(() => {
    if (theme === "light") {
      document.body.removeAttribute("arco-theme");
    } else if (theme === "dark") {
      document.body.setAttribute("arco-theme", theme);
    } else if (theme === "system") {
      const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
      darkThemeMq.addEventListener("change", (e) => {
        if (e.matches) {
          document.body.setAttribute("arco-theme", "dark");
        } else {
          document.body.removeAttribute("arco-theme");
        }
      });
    }
  }, [theme]);

  return (
    <DocsContainer context={context} theme={themes[theme || "light"]}>
      <IntlProvider defaultLocale={defaultLocale} locale={locale} messages={getDocsLocale(locale)}>
        <ConfigProvider locale={getComponentLocale(locale)}>{children}</ConfigProvider>
      </IntlProvider>
    </DocsContainer>
  );
};

const preview: Preview = {
  decorators: [withConfigProvider],
  globalTypes: {
    locale: {
      name: "Locale",
      description: "Internationalization locales",
      defaultValue: "zh-CN",
      toolbar: {
        icon: "globe",
        items: [
          { value: "en-US", right: "🇺🇸", title: "English (United States)" },
          { value: "zh-CN", right: "🇨🇳", title: "简体中文" },
        ],
        dynamicTitle: true,
      },
    },
    // theme: {
    //   description: "Global theme for components",
    //   defaultValue: "light",
    //   toolbar: {
    //     title: "Theme",
    //     icon: "circlehollow",
    //     items: [
    //       { value: "light", icon: "sun", title: "Light mode" },
    //       { value: "dark", icon: "moon", title: "Dark mode" },
    //       { value: "system", icon: "browser", title: "Sync with system" },
    //     ],
    //     dynamicTitle: true,
    //   },
    // },
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      container: CustomDocsContainer,
      toc: true,
    },
    layout: "centered",
    options: {
      storySort: {
        order: [
          "Home",
          "Style",
          "Components",
          [
            "Overview",
            "Internal",
            "General",
            "Layout",
            "Navigation",
            "Data Display",
            "Data Entry",
            "Feedback",
            "Others",
            "Business",
          ],
        ],
      },
    },
  },
};

export default preview;
