import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "On the Naglfar!",
  description:
    "Our lady-loves, phantasms of our brains. Dream fancies blown into soap-bubbles!",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
