import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "云音乐开发文档",
  description: "云音乐开发文档",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
