import type { StorybookConfig } from "@storybook/react-vite";
import { transformAsync } from "@babel/core";
import formatjs from "babel-plugin-formatjs";

const config: StorybookConfig = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-docs", "storybook-addon-tag-badges"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (config) => {
    config.plugins ??= [];
    config.plugins.push(
      {
        name: "storybook-formatjs",
        enforce: "pre",
        async transform(code, id) {
          if (!/\.[cm]?[jt]sx?$/.test(id) || id.includes("node_modules")) {
            return null;
          }

          const result = await transformAsync(code, {
            filename: id,
            plugins: [
              [
                formatjs,
                {
                  idInterpolationPattern: "[sha512:contenthash:base64:6]",
                  ast: true,
                },
              ],
            ],
            parserOpts: {
              plugins: ["typescript", "jsx"],
            },
            sourceMaps: true,
          });

          if (!result?.code) return null;
          return {
            code: result.code,
            map: result.map,
          };
        },
      },
    );
    return config;
  },
};
export default config;
