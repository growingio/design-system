import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-essentials", "storybook-addon-tag-badges"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
export default config;
