// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@vueuse/motion/nuxt', '@nuxt/icon'],

  devtools: { enabled: true },

  app: {
    head: {
      title: '个人简历 - Your Name',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '个人简历与博客站点' },
        { property: 'og:title', content: '个人简历 - Your Name' },
        { property: 'og:description', content: '个人简历与博客站点' },
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
