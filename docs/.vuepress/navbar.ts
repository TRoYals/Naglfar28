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

  { text: "笔记", icon: "note", link: "https://github.com/TRoYals " },
]);
