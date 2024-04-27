import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    // {
    //   text: "Demo",
    //   icon: "laptop-code",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
    {
      text: "LeetCode",
      icon: "code",
      prefix: "04 Coding & Tech/04 Coding Ability/00 Leetcode",
      link: "04 Coding & Tech/04 Coding Ability/00 Leetcode/00 Leetcode.md",
      children: "structure",
      collapsible: true,
    },
    {
      text: "Coding",
      icon: "laptop-code",
      prefix: "04 Coding & Tech/",
      link: "04 Coding & Tech/04 Coding & Tech.md",
      children: "structure",
      collapsible: true,
    },

    {
      text: "Books",
      icon: "book-open",
      prefix: "01 Reading/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "Daily Notes",
      icon: "book",
      prefix: "10IMYMEMINE/日记/",
      collapsible: true,
      children: "structure",
    },
    "intro",
    // {
    //   text: "Slides",
    //   icon: "person-chalkboard",
    //   link: "https://plugin-md-enhance.vuejs.press/guide/content/revealjs/demo.html",
    // },
  ],
});
