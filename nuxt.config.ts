// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@vueuse/motion/nuxt', '@nuxt/icon'],

  devtools: { enabled: true },

  app: {
    head: {
      title: '徐岳童 | 全栈工程师 - YueTonia',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '徐岳童 - 全栈工程师，5年开发经验，专注 Vue/Java/微服务开发，构建高性能Web应用。' },
        { name: 'keywords', content: '徐岳童, 全栈工程师, Vue, Java, Spring Boot, 前端开发, 后端开发' },
        { property: 'og:title', content: '徐岳童 | 全栈工程师' },
        { property: 'og:description', content: '5年全栈开发经验，专注 Vue/Java/微服务架构开发' },
        { property: 'og:type', content: 'website' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Noto+Sans+SC:wght@400;500;700&family=JetBrains+Mono:wght@400;500&display=swap' },
      ],
    },
  },

  tailwindcss: {
    configPath: 'tailwind.config.ts',
  },

  compatibilityDate: '2026-05-25',
})
