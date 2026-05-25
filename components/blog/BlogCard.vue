<template>
  <UiGlassCard class="h-full flex flex-col group">
    <div v-if="post.tags?.length" class="flex flex-wrap gap-1.5 mb-3">
      <span
        v-for="tag in post.tags"
        :key="tag"
        class="text-xs px-2 py-0.5 rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20"
      >
        {{ tag }}
      </span>
    </div>
    <h3 class="text-lg font-semibold text-[#f1f5f9] mb-2 group-hover:text-cyan-400 transition-colors">
      {{ post.title }}
    </h3>
    <p class="text-[#94a3b8] text-sm leading-relaxed mb-4 flex-1 line-clamp-2">
      {{ post.description }}
    </p>
    <time class="text-xs text-[#64748b]">
      {{ formatDate(post.date) }}
    </time>
  </UiGlassCard>
</template>

<script setup>
const props = defineProps({
  post: { type: Object, required: true },
})

const formatDate = (d) => {
  if (!d) return ''
  const date = new Date(d)
  return date.toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })
}
</script>
