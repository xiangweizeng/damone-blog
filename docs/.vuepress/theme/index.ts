import { getDirname, path } from "@vuepress/utils";
import { hopeTheme } from "vuepress-theme-hope";

const __dirname = getDirname(import.meta.url);

export default (options) => ({
  name: "localTheme",

  extends: hopeTheme(options),

  alias: {
    "@theme-hope/components/HomePage": path.resolve(
      __dirname,
      "./views/HomePage.vue"
    ),
  },
});
