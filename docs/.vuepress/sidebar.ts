import { sidebar } from "vuepress-theme-hope";

// 精选图标：https://theme-hope.vuejs.press/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87
export default sidebar([
  {
    text: "工具",
    icon: "tool",
    prefix: "/Area/工具/",
    link: "/Area/工具/工具.html",
    collapsible: true,
    children: "structure",
  },
  {
    text: "视觉小说",
    icon: "write",
    prefix: "/Area/视觉小说/",
    link: "/Area/视觉小说/视觉小说.html",
    collapsible: true,
    children: [
      {
        text: "kira🌟kira",
        icon: "",
        prefix: "kira🌟kira 煌煌舞台/",
        link: "",
        collapsible: true,
        children: "structure",
      },
    ],
  },
  {
    text: "日语学习",
    icon: "rank",
    prefix: "/Area/日语/",
    link: "/Area/日语/日语.html",
    collapsible: true,
    children: "structure",
  },
  {
    text: "前端",
    icon: "html",
    prefix: "/Area/前端/",
    link: "/Area/前端/前端.html",
    collapsible: true,
    children: [
      {
        text: "javascript",
        icon: "",
        prefix: "javascript/",
        link: "",
        collapsible: true,
        children: "structure",
      },
    ],
  },

  // 指定显示页面
  // {
  //   text: '🧰 应用手册',
  //   icon: '',
  //   prefix: '/apps/',
  //   link: '',
  //   collapsible: true,
  //   children: ['Applist.md', 'ChatGPT.md', 'design.md', 'AppNotes.md', 'Chrome.md'],
  // },
  // {
  //   text: '🌐 页面开发',
  //   icon: '',
  //   prefix: '/web/',
  //   link: '',
  //   collapsible: true,
  //   children: 'structure',
  // },
  // {
  //   text: '🏗️ 网站部署',
  //   icon: '',
  //   prefix: '/deploy/',
  //   link: '',
  //   collapsible: true,
  //   children: 'structure',
  // },
  // {
  //   text: '专业知识',
  //   icon: 'computer',
  //   prefix: '/professional_knowledge/',
  //   collapsible: true,
  //   children: [
  //     {
  //       text: '计算机网络',
  //       icon: 'network',
  //       prefix: 'computer_network/',
  //       collapsible: true,
  //       children: 'structure',
  //     },
  //     {
  //       text: '软件工程',
  //       icon: 'repair',
  //       prefix: 'software_engineer/',
  //       collapsible: true,
  //       children: 'structure',
  //     },
  //   ],
  // },
  // {
  //   text: '前端',
  //   icon: 'page',
  //   prefix: '/front_end/',
  //   link: '',
  //   collapsible: true,
  //   children: [
  //     {
  //       text: '基础三剑客',
  //       icon: '',
  //       prefix: 'front_end_base/',
  //       link: '',
  //       collapsible: true,
  //       children: [
  //         {
  //           text: 'html_css',
  //           icon: 'html',
  //           prefix: 'html_css/',
  //           collapsible: true,
  //           children: 'structure',
  //         },
  //         {
  //           text: 'javascript',
  //           icon: 'javascript',
  //           prefix: 'javascript/',
  //           collapsible: true,
  //           children: 'structure',
  //         },
  //       ],
  //     },
  //     {
  //       text: 'css提高',
  //       icon: '',
  //       prefix: 'css_advanced/',
  //       link: '',
  //       collapsible: true,
  //       children: [
  //         {
  //           text: 'less',
  //           icon: 'css',
  //           prefix: 'less/',
  //           collapsible: true,
  //           children: 'structure',
  //         },
  //         {
  //           text: 'scss',
  //           icon: 'css',
  //           prefix: 'scss/',
  //           collapsible: true,
  //           children: 'structure',
  //         },
  //         {
  //           text: 'tailwind',
  //           icon: 'css',
  //           prefix: 'tailwind/',
  //           collapsible: true,
  //           children: 'structure',
  //         },
  //       ],
  //     },
  //     {
  //       text: 'js提高',
  //       icon: '',
  //       prefix: 'js_advanced/',
  //       link: '',
  //       collapsible: true,
  //       children: [
  //         {
  //           text: 'es6',
  //           icon: 'es6',
  //           prefix: 'es6/',
  //           collapsible: true,
  //           children: 'structure',
  //         },
  //         {
  //           text: 'ajax',
  //           icon: 'ajax',
  //           prefix: 'ajax/',
  //           collapsible: true,
  //           children: 'structure',
  //         },
  //         {
  //           text: 'echarts',
  //           icon: 'javascript',
  //           prefix: 'echarts/',
  //           collapsible: true,
  //           children: 'structure',
  //         },
  //         {
  //           text: 'webpack',
  //           icon: 'javascript',
  //           prefix: 'webpack/',
  //           collapsible: true,
  //           children: 'structure',
  //         },
  //         {
  //           text: 'typescript',
  //           icon: 'typescript',
  //           prefix: 'typescript/',
  //           collapsible: true,
  //           children: 'structure',
  //         },
  //       ],
  //     },
  //     {
  //       text: '框架',
  //       icon: '',
  //       prefix: 'front_end_framework/',
  //       link: '',
  //       collapsible: true,
  //       children: [
  //         {
  //           text: 'vue2',
  //           icon: 'vue',
  //           prefix: 'vue2/',
  //           collapsible: true,
  //           children: 'structure',
  //         },
  //         {
  //           text: 'vue3',
  //           icon: 'vue',
  //           prefix: 'vue3/',
  //           collapsible: true,
  //           children: 'structure',
  //         },
  //         {
  //           text: 'uniapp',
  //           icon: 'wechat',
  //           prefix: 'uniapp/',
  //           collapsible: true,
  //           children: 'structure',
  //         },
  //         {
  //           text: 'react',
  //           icon: 'react',
  //           prefix: 'react/',
  //           collapsible: true,
  //           children: 'structure',
  //         },
  //       ],
  //     },
  //     {
  //       text: '其它',
  //       icon: '',
  //       prefix: 'other/',
  //       link: '',
  //       collapsible: true,
  //       children: [
  //         {
  //           text: 'git',
  //           icon: 'git',
  //           prefix: 'git/',
  //           collapsible: true,
  //           children: 'structure',
  //         },
  //         {
  //           text: 'electron',
  //           icon: 'javascript',
  //           prefix: 'electron/',
  //           collapsible: true,
  //           children: 'structure',
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   text: '服务端',
  //   icon: 'page',
  //   prefix: '/back_end/',
  //   link: '',
  //   collapsible: true,
  //   children: [
  //     {
  //       text: 'nodeJs',
  //       icon: 'nodeJS',
  //       prefix: 'nodeJs/',
  //       link: '',
  //       collapsible: true,
  //       children: 'structure',
  //     },
  //     {
  //       text: 'linux',
  //       icon: 'linux',
  //       prefix: 'linux/',
  //       link: '',
  //       collapsible: true,
  //       children: 'structure',
  //     },
  //     {
  //       text: '数据库',
  //       icon: '',
  //       prefix: 'database/',
  //       link: '',
  //       collapsible: true,
  //       children: [
  //         {
  //           text: 'mysql',
  //           icon: 'mysql',
  //           prefix: 'mysql/',
  //           link: '',
  //           collapsible: true,
  //           children: 'structure',
  //         },
  //         {
  //           text: 'mongodb',
  //           icon: 'mysql',
  //           prefix: 'mongodb/',
  //           link: '',
  //           collapsible: true,
  //           children: 'structure',
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   text: '工具',
  //   icon: 'page',
  //   prefix: '/tool/',
  //   link: '',
  //   collapsible: true,
  //   children: [
  //     {
  //       text: '前端代码规范化',
  //       icon: '',
  //       prefix: 'lint/',
  //       link: '',
  //       collapsible: true,
  //       children: [
  //         {
  //           text: 'JS 代码规范',
  //           icon: 'javascript',
  //           link: '01.html',
  //         },
  //         {
  //           text: 'CSS 代码规范',
  //           icon: 'css',
  //           link: '02.html',
  //         },
  //         {
  //           text: 'Git 规范化',
  //           icon: 'git',
  //           link: '03.html',
  //         },
  //       ],
  //     },
  //   ],
  // },
]);
