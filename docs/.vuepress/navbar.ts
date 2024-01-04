import { navbar } from "vuepress-theme-hope";
import { Icon } from "@iconify/vue";

// 精选图标：https://theme-hope.vuejs.press/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87
export default navbar([
  { text: "主页", icon: "home", link: "/" },

  {
    text: "阅读",
    icon: "Read",
    prefix: "/02 Reading/",
    children: [
      { text: "视觉小说", link: "01 视觉小说/01 视觉小说.html" },
      { text: "书籍", link: "02 书籍/02 书籍.html" },
      { text: "游戏", link: "03 游戏/03 游戏.html" },
    ],
  },
  {
    text: "Coding",
    icon: "network",
    prefix: "/04 Coding & Tech/",
    children: [
      {
        text: "Programming Language",
        link: "01 Programming Language/01 Programming Language.html",
      },
      {
        text: "Tools & Services",
        icon: "python",
        link: "03 Tools & Services/03 Tools & Services.html",
      },
      {
        text: "Coding Ability",
        link: "04 Coding Ability/04 Coding Ability.html",
      },
    ],
  },
  // {
  //   text: "前端",
  //   icon: "html",
  //   prefix: "/Area/前端",
  //   children: [{ text: "前端roadmap", icon: "html", link: "/前端.html" }],
  // },
  // {
  //   text: "后端",
  //   icon: "tool",
  //   prefix: "/Area/后端",
  //   children: [{ text: "后端roadmap", icon: "rank", link: "/后端.html" }],
  // },
  // {
  //   text: "数据科学",
  //   icon: "calculate",
  //   prefix: "/Area/数据科学",
  //   children: [
  //     { text: "Data Analyst", icon: "calculate", link: "/数据科学.html" },
  //   ],
  // },
  // {
  //   text: "视觉小说",
  //   icon: "write",

  //   prefix: "/Area/视觉小说",
  //   link: "",
  //   children: [
  //     {
  //       text: "Kira🌟kira",
  //       icon: "play",
  //       link: "/kira🌟kira 煌煌舞台/kira🌟kira 煌煌舞台.html",
  //     },
  //   ],
  // },
  // {
  //   text: "日语",
  //   icon: "format",
  //   prefix: "/Area/日语",
  //   children: [{ text: "日语", icon: "play", link: "/日语.html" }],
  // },
  // {
  //   text: "麻雀",
  //   icon: "rank",
  //   prefix: "/Area/麻雀",
  //   children: [{ text: "mahjong", icon: "rank", link: "/麻雀.html" }],
  // },
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
