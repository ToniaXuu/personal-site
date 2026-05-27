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
        jobTitle: 'Full Stack Developer',
        sameAs: ['https://github.com/ToniaXuu'],
        knowsAbout: ['Vue.js', 'Java', 'Spring Boot', 'Spring Cloud', 'Full Stack Development'],
      }),
    },
  ],
})
</script>
