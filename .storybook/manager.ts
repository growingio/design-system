import { addons } from "storybook/manager-api";
import themes from "./themes-growingio";

const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

addons.setConfig({
  theme: darkThemeMq.matches ? themes.dark : themes.light,
});
