import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Hoime Docs",
  description: "Hoime Help Document",
  // 主题设置
  themeConfig: {
    // 开启搜索
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    socialLinks: [{icon: 'github', link: 'https://github.com/vuejs/vitepress'}],
    // 底部配置
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 Hoime',
    }
  },
  // 多语言设置
  locales: {
    root: {
      label: "简体中文",
      lang: "zh",
      link: "/"
    },
    en: {
      label: "English",
      lang: "en",
      link: "/en"
    }
  }
})
