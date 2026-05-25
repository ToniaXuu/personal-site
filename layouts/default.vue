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
</script>
