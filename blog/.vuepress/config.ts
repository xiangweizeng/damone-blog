import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

import { searchProPlugin } from "vuepress-plugin-search-pro";
import { containerPlugin } from "@vuepress/plugin-container";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";

import {
  CARD_IMG_LIST,
  CARD_LIST,
  renderCardList,
} from "./plugin/container.js";

export default defineUserConfig({
  base: "/damone-blog/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "Damone's Blog",
      description: "Damone's Blog",
    },
  },

  theme,
  plugins: [
    registerComponentsPlugin({
      componentsDir: "docs/.vuepress/components",
    }),
    containerPlugin({
      type: CARD_LIST,
      render: (tokens, idx) => {
        // tokens 是整个md文件的虚拟dom结构数组
        // idx 是tokens中':::' 所在的索引，而且是当前指定type的':::'，分别有开始和结束两次的idx
        // if (tokens[idx].nesting === 1) { // 开头的 ':::' 标记
        // } else { // 结束的 ':::' 标记
        // }
        // 注意：修改这里面的代码后需要在md文件保存一下才会重新执行渲染
        return renderCardList(tokens, idx, CARD_LIST);
      },
    }),
    containerPlugin({
      type: CARD_IMG_LIST,
      render: (tokens, idx) => {
        return renderCardList(tokens, idx, CARD_IMG_LIST);
      },
    }),
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category,
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag,
          formatter: "标签：$content",
        },
      ],
    }),
  ],
});

