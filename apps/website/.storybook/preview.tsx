import type { Preview } from "@storybook/react";
import * as React from "react";
import { themes } from "@storybook/theming";
import { DocsContainer } from "@storybook/blocks";
import { IntlProvider, injectIntl, useIntl } from "react-intl";
import { ConfigProvider } from "@giod/react/src";
import zhCN from "@arco-design/web-react/es/locale/zh-CN";
import enUS from "@arco-design/web-react/es/locale/en-US";
import zhCNMessages from "../locales/zh-CN.json";
import enUSMessages from "../locales/en-US.json";

import "@giod/react/src/index.css";

export const withIntl = (storyRender) => {
  const intl = useIntl();
  return storyRender(intl);
};

export const getI18nDoc = (docsMap: { [key: string]: string }) => {
  const intl = useIntl();
  return docsMap[intl.locale];
};

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
    globals: { locale, direction },
  } = context;

  const StoryWithIntl = injectIntl(Story);
  return (
    <IntlProvider
      defaultLocale={defaultLocale}
      locale={locale}
      messages={getDocsLocale(locale)}
    >
      <ConfigProvider locale={getComponentLocale(locale)}>
        <StoryWithIntl />
      </ConfigProvider>
    </IntlProvider>
  );
};

const customDocsContainer = ({ children, context }) => {
  const {
    store: {
      globals: {
        globals: { locale, theme },
      },
    },
  } = context;

  React.useEffect(() => {
    document.body.setAttribute("arco-theme", theme);
  }, [theme]);

  return (
    <DocsContainer context={context} theme={themes[theme || "light"]}>
      <IntlProvider
        defaultLocale={defaultLocale}
        locale={locale}
        messages={getDocsLocale(locale)}
      >
        {children}
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
    theme: {
      description: "Global theme for components",
      defaultValue: "light",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: [
          { value: "light", icon: "sun", title: "Light mode" },
          { value: "dark", icon: "moon", title: "Dark mode" },
          { value: "system", icon: "browser", title: "System theme" },
        ],
        dynamicTitle: true,
      },
    },
  },
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      container: customDocsContainer,
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
            "General",
            "Layout",
            "Navigation",
            "Data Entry",
            "Data Display",
            "Feedback",
            "Others",
          ],
        ],
      },
    },
  },
};

export default preview;
