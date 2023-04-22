import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/computer-science/": [
    {
      icon: "mdi:computer-classic",
      text: "计算机基础",
      children: "structure",
    },
  ],
  "/collect-data/": [
    {
      text: "收藏资料",
      icon: "mdi:collection",
      prefix: "",
      link: "",
      children: "structure",
    },
  ],
  "/blog/": [
    {
      text: "工作日志",
      icon: "mdi:collection",
      children: "structure",
    },
  ],
});
