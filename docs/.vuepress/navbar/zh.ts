import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "计算机基础",
    icon: "mdi:computer-classic",
    prefix: "/computer-science/",
    children: [
      {
        text: "数据结构",
        icon: "ph:tree-structure-bold",
        link: "data-structure",
      },
    ],
  },
  {
    text: "收藏资料",
    icon: "mdi:collection",
    prefix: "/collect-data/",
    children: ["development.md", "dnn.md", "distributed-system.md", "other.md"],
  },
  {
    text: "工作总结",
    icon: "mdi:computer-classic",
    prefix: "/blog/",
    children: ['operation-system', 'application', 'dnn'],
  },
  {
    text: "个人简介",
    icon: "ic:sharp-supervised-user-circle",
    link: "/about/",
  },
]);
