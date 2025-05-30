import { create } from "storybook/theming/create";

const baseTheme = {
  fontBase: '"PingFang SC", sans-serif',
  brandTitle: "GrowingIO Design",
  brandUrl: "https://www.growingio.com",
};

const darkTheme = create({
  base: "dark",
  ...baseTheme,
  brandImage: "/logo-white.svg",
});

const lightTheme = create({
  base: "light",
  ...baseTheme,
  brandImage: "/logo-black.svg",
});

export default {
  dark: darkTheme,
  light: lightTheme,
};
