<template>
  <section class="pt-24 pb-20">
    <article class="max-w-3xl mx-auto px-6">
      <!-- 返回 -->
      <NuxtLink to="/blog" class="inline-flex items-center gap-1.5 text-sm text-[#64748b] hover:text-[#94a3b8] transition-colors mb-8">
        <Icon name="lucide:arrow-left" size="16" />
        返回博客列表
      </NuxtLink>

      <!-- 文章头部 -->
      <header class="mb-10">
        <h1 class="text-3xl sm:text-4xl font-bold text-[#f1f5f9] mb-4">
          {{ page?.title }}
        </h1>
        <div class="flex items-center gap-4 text-sm text-[#64748b]">
          <time v-if="page?.date">
            {{ formatDate(page.date) }}
          </time>
          <div v-if="page?.tags?.length" class="flex gap-2">
            <span
              v-for="tag in page.tags"
              :key="tag"
              class="text-xs px-2 py-0.5 rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </header>

      <!-- 文章内容 -->
      <div class="blog-prose">
        <ContentRenderer v-if="page" :value="page" />
      </div>

      <!-- 分隔线 -->
      <div class="mt-16 pt-8 border-t border-white/[0.06] text-center">
        <NuxtLink to="/blog" class="text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
          查看全部文章
        </NuxtLink>
      </div>
    </article>
  </section>
</template>

<script setup>
const route = useRoute()
const slug = route.params.slug

const { data: page } = await useAsyncData(`blog-${route.path}`, () =>
  queryContent('/blog', ...slug).findOne()
)

const formatDate = (d) => {
  if (!d) return ''
  const date = new Date(d)
  return date.toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })
}

if (!page.value) {
  throw createError({ statusCode: 404, message: '文章未找到' })
}
</script>
