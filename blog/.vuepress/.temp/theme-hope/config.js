import { defineClientConfig } from "@vuepress/client";

import { HopeIcon, Layout, NotFound, useScrollPromise, injectDarkmode, setupDarkmode, setupSidebarItems } from "D:/project/docs/damone-blog/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.198_fkbu36zvo6n4eqf2hdnjmgbn2i/node_modules/vuepress-theme-hope/lib/client/export.js";

import { BlogCategory, BlogHome, BlogType, BloggerInfo, Timeline, setupBlog } from "D:/project/docs/damone-blog/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.198_fkbu36zvo6n4eqf2hdnjmgbn2i/node_modules/vuepress-theme-hope/lib/client/modules/blog/export.js";
import "D:/project/docs/damone-blog/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.198_fkbu36zvo6n4eqf2hdnjmgbn2i/node_modules/vuepress-theme-hope/lib/client/modules/blog/styles/layout.scss";
import Slide from "D:/project/docs/damone-blog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.198_44bug2q4gvgfsg4b36ccgweufe/node_modules/vuepress-plugin-md-enhance/lib/client/SlidePage.js";

import "D:/project/docs/damone-blog/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.198_fkbu36zvo6n4eqf2hdnjmgbn2i/node_modules/vuepress-theme-hope/lib/client/styles/index.scss";

export default defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await useScrollPromise().wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);

    // render icon for auto-catalog
    app.component("HopeIcon", HopeIcon);

    app.component("BloggerInfo", BloggerInfo);
  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();
    setupBlog();
  },
  layouts: {
    Layout,
    NotFound,
    BlogCategory,
    BlogHome,
    BlogType,
    Timeline,
    Slide,
  }
});