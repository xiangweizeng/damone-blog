import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    {
      icon: "mdi:computer-classic",
      text: "计算机基础",
      prefix: "computer-science/",
      link: "computer-science/",
      children: "structure",
    },
    {
      text: "收藏资料",
      icon: "mdi:collection",
      prefix: "collect-data/",
      link: "collect-data/",
      children: "structure",
    },
    {
      text: "工作日志",
      icon: "mdi:collection",
      prefix: "blog/",
      link: "blog/",
      children: "structure",
    },
  ],
});
