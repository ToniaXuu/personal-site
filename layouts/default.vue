<template>
  <div class="min-h-screen flex flex-col">
    <LayoutAppNavbar />
    <main class="flex-1">
      <slot />
    </main>
    <LayoutAppFooter />
    <LayoutBackToTop />
    <EffectsParticleBackground />
    <EffectsGridBackground />
  </div>
</template>

<script setup>
import '~/assets/css/main.css'

// JSON-LD structured data for SEO
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'ToniaXuu',
        url: 'https://toniaxuu.com',
        description: '一个沉迷 AI 的开发者，用代码造点有趣的东西',
        sameAs: ['https://github.com/ToniaXuu'],
        knowsAbout: ['AI Agent', 'Vibe Coding', 'Vue.js', 'Nuxt', 'Tauri', 'Rust', 'Full Stack Development'],
      }),
    },
  ],
})
</script>
