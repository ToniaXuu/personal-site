<template>
  <UiGlassCard class="h-full flex flex-col group">
    <div v-if="post.tags?.length" class="flex flex-wrap gap-1.5 mb-3">
      <span
        v-for="tag in post.tags"
        :key="tag"
        class="text-xs px-2 py-0.5 rounded-full bg-green-400/10 text-green-400 border border-green-400/20"
      >
        {{ tag }}
      </span>
    </div>
    <h3 class="text-lg font-semibold mb-2 group-hover:text-green-400 transition-colors" style="color: var(--color-text)">
      {{ post.title }}
    </h3>
    <p class="text-sm leading-relaxed mb-4 flex-1 line-clamp-2" style="color: var(--color-text-muted)">
      {{ post.description }}
    </p>
    <time class="text-xs" style="color: var(--color-text-subtle)">
      {{ formatDate(post.date) }}
    </time>
  </UiGlassCard>
</template>

<script setup>
defineProps({
  post: { type: Object, required: true },
})
</script>
