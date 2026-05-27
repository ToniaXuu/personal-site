// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@vueuse/motion/nuxt', '@nuxt/icon', '@nuxtjs/sitemap'],

  devtools: { enabled: process.env.NODE_ENV === 'development' },

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
        { property: 'og:image', content: '/avatar.jpg' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: 'ToniaXuu | Full Stack Developer' },
        { name: 'twitter:description', content: 'Full Stack Developer, focused on Vue/Java/Microservices' },
      ],
      script: [
        {
          // 防闪烁脚本：在 DOM 渲染前读取 localStorage 应用正确主题
          innerHTML: `(function(){try{var m=localStorage.getItem('theme-mode');var d=true;if(m==='light')d=false;else if(m==='system'||!m){d=window.matchMedia('(prefers-color-scheme:dark)').matches}else if(m==='custom'){try{var c=JSON.parse(localStorage.getItem('theme-custom-time'));if(c){var n=new Date(),h=n.getHours(),min=n.getMinutes(),cm=h*60+min;var ls=c.lightStart.split(':').map(Number),ds=c.darkStart.split(':').map(Number),lm2=ls[0]*60+ls[1],dm2=ds[0]*60+ds[1];if(lm2<dm2)d=cm<lm2||cm>=dm2;else d=cm>=dm2&&cm<lm2}}catch(e){}}if(d)document.documentElement.classList.add('dark');}catch(e){}})()`,
        },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Noto+Sans+SC:wght@400;500;700&family=JetBrains+Mono:wght@400;500&display=swap' },
      ],
    },
  },

  // Sitemap configuration
  sitemap: {
    hostname: 'https://toniaxuu.com',
  },

  // Robots.txt
  robots: {
    allow: '/',
    sitemap: 'https://toniaxuu.com/sitemap.xml',
  },

  tailwindcss: {
    configPath: 'tailwind.config.ts',
  },

  compatibilityDate: '2026-05-25',
})
