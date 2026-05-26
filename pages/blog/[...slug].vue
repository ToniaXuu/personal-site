<template>
  <section class="pt-24 pb-20">
    <article class="max-w-3xl mx-auto px-6">
      <!-- 加载骨架 -->
      <div v-if="pending" class="animate-pulse space-y-4">
        <div class="h-4 w-24 rounded mb-8" style="background: var(--color-border)" />
        <div class="h-9 w-2/3 rounded mb-4" style="background: var(--color-border)" />
        <div class="h-4 w-40 rounded mb-10" style="background: var(--color-border)" />
        <div v-for="i in 6" :key="i" class="h-4 rounded" :style="{ width: `${70 + Math.random() * 30}%`, background: 'var(--color-border)' }" />
      </div>

      <!-- 内容 -->
      <template v-else-if="page">
        <!-- Back -->
        <NuxtLink to="/blog" class="inline-flex items-center gap-1.5 text-sm mb-8 transition-colors hover:text-green-400" style="color: var(--color-text-muted)">
          <Icon name="lucide:arrow-left" size="16" />
          返回博客列表
        </NuxtLink>

        <!-- Header -->
        <header class="mb-10">
          <h1 class="text-3xl sm:text-4xl font-bold mb-4" style="color: var(--color-text)">
            {{ page.title }}
          </h1>
          <div class="flex items-center gap-4 text-sm" style="color: var(--color-text-muted)">
            <time v-if="page.date">
              {{ formatDate(page.date) }}
            </time>
            <div v-if="page.tags?.length" class="flex gap-2">
              <span
                v-for="tag in page.tags"
                :key="tag"
                class="text-xs px-2 py-0.5 rounded-full bg-green-400/10 text-green-400 border border-green-400/20"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </header>

        <!-- Content -->
        <div class="blog-prose">
          <ContentRenderer :value="page" />
        </div>

        <!-- Divider -->
        <div class="mt-16 pt-8 text-center" style="border-top: 1px solid var(--color-border)">
          <NuxtLink to="/blog" class="text-sm text-green-400 hover:text-green-300 transition-colors">
            查看全部文章
          </NuxtLink>
        </div>
      </template>

      <!-- 404 -->
      <div v-else class="text-center py-20">
        <Icon name="lucide:file-x" size="48" class="mx-auto mb-4 opacity-30" style="color: var(--color-text-muted)" />
        <p class="text-lg mb-2" style="color: var(--color-text)">文章未找到</p>
        <NuxtLink to="/blog" class="text-sm text-green-400 hover:text-green-300 transition-colors">
          返回博客列表
        </NuxtLink>
      </div>
    </article>
  </section>
</template>

<script setup>
const route = useRoute()
const slug = route.params.slug

const { data: page, pending } = await useAsyncData(`blog-${route.path}`, () =>
  queryContent('/blog', ...slug).findOne(),
  { lazy: true }
)

const formatDate = (d) => {
  if (!d) return ''
  const date = new Date(d)
  return date.toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })
}

// SSR 时如果文章不存在，抛出 404
if (import.meta.server && !page.value) {
  throw createError({ statusCode: 404, message: '文章未找到' })
}
</script>
