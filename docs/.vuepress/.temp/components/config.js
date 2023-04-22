import { defineClientConfig } from "@vuepress/client";
import { hasGlobalComponent } from "D:/project/docs/damone-blog/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.198_44bug2q4gvgfsg4b36ccgweufe/node_modules/vuepress-plugin-components/lib/client/shared.js";
import { h } from "vue";

import { useScriptTag } from "D:/project/docs/damone-blog/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.198_44bug2q4gvgfsg4b36ccgweufe/node_modules/vuepress-plugin-components/lib/client/vueuse.js";
import Badge from "D:/project/docs/damone-blog/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.198_44bug2q4gvgfsg4b36ccgweufe/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import FontIcon from "D:/project/docs/damone-blog/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.198_44bug2q4gvgfsg4b36ccgweufe/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import BackToTop from "D:/project/docs/damone-blog/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.198_44bug2q4gvgfsg4b36ccgweufe/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";

import "D:/project/docs/damone-blog/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.198_44bug2q4gvgfsg4b36ccgweufe/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    
  },
  setup: () => {
    useScriptTag(
  `https://cdn.jsdelivr.net/npm/iconify-icon@1`
);
  },
  rootComponents: [
    () => h(BackToTop, { threshold: 300 }),
  ],
});
