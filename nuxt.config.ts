// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@vueuse/motion/nuxt', '@nuxt/icon'],

  devtools: { enabled: true },

  app: {
    head: {
      title: 'ToniaXuu | Full Stack Developer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'ToniaXuu - Full Stack Developer, 5 years of experience in Vue/Java/Microservices.' },
        { name: 'keywords', content: 'ToniaXuu, Full Stack Developer, Vue, Java, Spring Boot, Frontend, Backend' },
        { property: 'og:title', content: 'ToniaXuu | Full Stack Developer' },
        { property: 'og:description', content: '5 years full stack development experience, focused on Vue/Java/Microservices architecture' },
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
