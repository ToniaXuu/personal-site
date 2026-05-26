<template>
  <section class="pt-24 pb-20">
    <div class="max-w-5xl mx-auto px-6">
      <UiAnimatedSection>
        <UiSectionTitle title="博客" subtitle="Blog" />
      </UiAnimatedSection>

      <!-- 加载骨架屏 -->
      <div v-if="pending" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="i in 3"
          :key="i"
          class="glass-card p-6 animate-pulse"
        >
          <div class="h-3 w-16 rounded mb-3" style="background: var(--color-border)" />
          <div class="h-5 w-3/4 rounded mb-2" style="background: var(--color-border)" />
          <div class="h-4 w-full rounded mb-1" style="background: var(--color-border)" />
          <div class="h-4 w-2/3 rounded mb-6" style="background: var(--color-border)" />
          <div class="h-3 w-24 rounded" style="background: var(--color-border)" />
        </div>
      </div>

      <!-- 文章列表 -->
      <div v-else-if="posts?.length" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <UiAnimatedSection
          v-for="(post, idx) in posts"
          :key="post._path"
          :style="{ animationDelay: `${idx * 80}ms` }"
        >
          <NuxtLink :to="post._path" class="block group">
            <UiGlassCard class="h-full flex flex-col">
              <!-- Tags -->
              <div v-if="post.tags?.length" class="flex flex-wrap gap-1.5 mb-3">
                <span
                  v-for="tag in post.tags"
                  :key="tag"
                  class="text-xs px-2 py-0.5 rounded-full bg-green-400/10 text-green-400 border border-green-400/20"
                >
                  {{ tag }}
                </span>
              </div>
              <!-- Title -->
              <h3 class="text-lg font-semibold mb-2 group-hover:text-green-400 transition-colors" style="color: var(--color-text)">
                {{ post.title }}
              </h3>
              <!-- Description -->
              <p class="text-sm leading-relaxed mb-4 flex-1 line-clamp-2" style="color: var(--color-text-muted)">
                {{ post.description }}
              </p>
              <!-- Date + arrow -->
              <div class="flex items-center justify-between">
                <time class="text-xs" style="color: var(--color-text-subtle)">
                  {{ formatDate(post.date) }}
                </time>
                <Icon name="lucide:arrow-right" size="14" class="opacity-0 group-hover:opacity-100 transition-opacity" style="color: var(--color-accent-green)" />
              </div>
            </UiGlassCard>
          </NuxtLink>
        </UiAnimatedSection>
      </div>

      <!-- 空状态 -->
      <div v-else class="text-center py-20" style="color: var(--color-text-muted)">
        <Icon name="lucide:file-text" size="48" class="mx-auto mb-4 opacity-30" />
        <p>暂无文章</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const { data: posts, pending } = await useAsyncData('blog-posts', () =>
  queryContent('blog')
    .sort({ date: -1 })
    .find(),
  { lazy: true }
)

const formatDate = (d) => {
  if (!d) return ''
  const date = new Date(d)
  return date.toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })
}
</script>
