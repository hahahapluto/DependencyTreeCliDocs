module.exports = {
  title: "DependencyTreeCliDocs",
  description: "项目依赖分析工具说明文档",
  base: "/DependencyTreeCliDocs/",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "dependencytreecli",
    },
    "/en/": {
      lang: "en-US",
      title: "dependencytreecli",
    },
  },
  themeConfig: {
    logo: "/assets/logo.png",
    locales: {
      "/": {
        selectText: "选择语言",
        label: "简体中文",
        nav: [
          {
            text: "文档说明",
            link: "/usage",
          },
          {
            text: "包地址",
            link: "https://www.npmjs.com/package/dependencytreecli",
          },
        ],
      },
      "/en/": {
        selectText: "Languages",
        label: "English",
        nav: [
          {
            text: "documentation",
            link: "/en/usage",
          },
          {
            text: "Package Address",
            link: "https://www.npmjs.com/package/dependencytreecli",
          },
        ],
      },
    },
    sidebar: "auto",
  },
};
