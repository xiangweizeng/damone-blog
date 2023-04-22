import { zhNavbar } from "./navbar/index.js";
import { zhSidebar } from "./sidebar/index.js";

import localTheme from "./theme/index.js";

export default localTheme({
  hostname: "https://github.com/xiangweizeng",

  author: {
    name: "damone",
    url: "https://github.com/xiangweizeng",
  },

  locales: {
    /**
     * Chinese locale config
     */
    "/": {
      navbar: zhNavbar,
      sidebar: zhSidebar,
      sidebarIcon: true,
      footer: "",
      copyright: "Copyright © 2022-2023 Damone All Rights Reserved.",
      displayFooter: true,
      headerDepth: 3,
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
        toc: "目录",
      },
    },
  },

  iconAssets: "iconify",
  logo: "/logo.svg",
  repo: 'https://github.com/xiangweizeng/mytotal',

  navbarLayout: {
    start: ["Brand"],
    center: ["Links"],
    end: ["Search", "Outlook", "Language", 'Repo'],
  },

  docsDir: "docs",
  print: false,
  editLink: true,
  repoDisplay: true,
  blog: {
    avatar: "/logo.svg",
    name: "Damone's Blog",
    description: '才华是刀刃，辛苦是磨刀石，再锋利的刀刃，若日久不磨，也会生锈。',
    medias: {
      Email: "https://mail.163.com/",
      GitHub: "https://github.com/xiangweizeng/",
      Gitee: "https://gitee.com/damone",
    },
  },

  plugins: {
    blog: true,
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },
  },
});
