import { navbar } from "vuepress-theme-hope";
import { Icon } from "@iconify/vue";

// 精选图标：https://theme-hope.vuejs.press/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87
export default navbar([
  { text: "主页", icon: "home", link: "/" },
  {
    text: "工具",
    icon: "tool",
    prefix: "/notes/Area/01 工具",
    children: [{ text: "必备应用", icon: "rank", link: "/必备应用.html" }],
  },
  {
    text: "视觉小说",
    icon: "write",

    prefix: "/VisualNovel",

    children: [
      { text: "Kira Kira", icon: "star", link: "/kirakira/kira.html" },
    ],
  },
  {
    text: "日语",
    icon: "format",
    prefix: "/NihonGo",
    children: [{ text: "日语roadmap", icon: "play", link: "/roadmap.html" }],
  },
  {
    text: "麻雀",
    icon: "rank",
    prefix: "/mahjong",
    children: [{ text: "mahjong", icon: "star", link: "/立直判断.html" }],
  },
  // {
  //   text: "项目",
  //   icon: "network",
  //   prefix: "/",
  //   children: ["web/VuePress", "web/docsify", "deploy/VPS"],
  // },
  // {
  //   text: "应用",
  //   icon: "app",
  //   prefix: "/apps/",
  //   children: ["Applist", "ChatGPT", "design", "AppNotes", "Chrome"],
  // },
  // {
  //   text: "专业知识",
  //   icon: "computer",
  //   prefix: "/professional_knowledge/",
  //   children: [
  //     {
  //       text: "计算机网络",
  //       icon: "network",
  //       link: "computer_network/01.html",
  //     },
  //     {
  //       text: "软件工程",
  //       icon: "repair",
  //       link: "software_engineer/01.html",
  //     },
  //   ],
  // },
  // {
  //   text: "前端",
  //   icon: "html",
  //   prefix: "/front_end/",
  //   children: [
  //     {
  //       text: "基础三剑客",
  //       prefix: "front_end_base/",
  //       children: [
  //         { text: "html/css", icon: "html", link: "html_css/01.html" },
  //         {
  //           text: "javascript",
  //           icon: "javascript",
  //           link: "javascript/01.html",
  //         },
  //       ],
  //     },
  //     {
  //       text: "css提高",
  //       prefix: "css_advanced/",
  //       children: [
  //         {
  //           text: "tailwind",
  //           icon: "css",
  //           link: "tailwind/01.html",
  //         },
  //       ],
  //     },
  //     {
  //       text: "js提高",
  //       prefix: "js_advanced/",
  //       children: [
  //         {
  //           text: "es6",
  //           icon: "es6",
  //           link: "es6/01.html",
  //         },

  //         {
  //           text: "echarts",
  //           icon: "javascript",
  //           link: "echarts/01.html",
  //         },
  //         {
  //           text: "webpack",
  //           icon: "javascript",
  //           link: "webpack/01.html",
  //         },
  //         {
  //           text: "typescript",
  //           icon: "typescript",
  //           link: "typescript/01.html",
  //         },
  //       ],
  //     },
  //     {
  //       text: "框架",
  //       prefix: "front_end_framework/",
  //       children: [
  //         {
  //           text: "react",
  //           icon: "react",
  //           link: "react/01.html",
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   text: "后端",
  //   prefix: "/back_end/",
  //   icon: "page",
  //   children: [
  //     {
  //       text: "nodeJs",
  //       icon: "nodeJS",
  //       link: "nodeJs/01.html",
  //     },
  //     {
  //       text: "linux",
  //       icon: "linux",
  //       link: "linux/01.html",
  //     },
  //     {
  //       text: "数据库",
  //       prefix: "database/",
  //       children: [
  //         {
  //           text: "mysql",
  //           icon: "mysql",
  //           link: "mysql/01.html",
  //         },
  //         {
  //           text: "mongodb",
  //           icon: "mysql",
  //           link: "mongodb/01.html",
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   text: "工具",
  //   icon: "tool",
  //   prefix: "/tool/",
  //   children: [
  //     {
  //       text: "前端代码规范化",
  //       prefix: "lint/",
  //       children: [
  //         {
  //           text: "JS 代码规范",
  //           icon: "javascript",
  //           link: "01.html",
  //         },
  //         {
  //           text: "CSS 代码规范",
  //           icon: "css",
  //           link: "02.html",
  //         },
  //         {
  //           text: "Git 规范化",
  //           icon: "git",
  //           link: "03.html",
  //         },
  //       ],
  //     },
  //   ],
  // },
  { text: "笔记", icon: "note", link: "https://github.com/TRoYals " },
]);
