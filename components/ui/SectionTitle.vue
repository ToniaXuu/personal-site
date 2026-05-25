<template>
  <div class="mb-12">
    <h2 class="text-3xl sm:text-4xl font-bold mb-3" style="color: var(--color-text)">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="text-lg" style="color: var(--color-text-muted)">
      {{ subtitle }}
    </p>
    <div class="mt-4 h-px w-16 bg-gradient-to-r from-cyan-400 to-purple-500" />
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
})
</script>
