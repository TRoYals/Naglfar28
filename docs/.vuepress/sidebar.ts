import { sidebar } from "vuepress-theme-hope";

export default sidebar([
  {
    text: "Reading",
    icon: "write",
    prefix: "/02 Reading/",
    link: "/02 Reading/02 Reading.html",
    collapsible: true,
    children: "structure",
  },
  {
    text: "Programming Language",
    icon: "object",
    prefix: "/04 Coding & Tech/01 Programming Language/",
    link: "/04 Coding & Tech/01 Programming Language/01 Programming Language.html",
    collapsible: true,
    children: "structure",
  },
  {
    text: "Database",
    icon: "object",
    prefix: "/04 Coding & Tech/02 Database/",
    link: "/04 Coding & Tech/02 Database/02 Database.html",
    collapsible: true,
    children: "structure",
  },
  {
    text: "Tools & Services",
    icon: "object",
    prefix: "/04 Coding & Tech/03 Tools & Services/",
    link: "/04 Coding & Tech/03 Tools & Services/03 Tools & Services.html",
    collapsible: true,
    children: "structure",
  },
  {
    text: "Coding Ability",
    icon: "object",
    prefix: "/04 Coding & Tech/04 Coding Ability/",
    link: "/04 Coding & Tech/04 Coding Ability/04 Coding Ability.html",
    collapsible: true,
    children: "structure",
  },
  {
    text: "Japanese Learing",
    icon: "object",
    prefix: "/07 Language/02 日语",
    link: "/07 Language/02 日语.html",
    collapsible: true,
    children: "structure",
  },
]);
