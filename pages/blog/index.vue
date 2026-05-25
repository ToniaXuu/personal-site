<template>
  <section class="pt-24 pb-20">
    <div class="max-w-5xl mx-auto px-6">
      <UiAnimatedSection>
        <UiSectionTitle title="博客" subtitle="Blog" />
      </UiAnimatedSection>

      <div v-if="posts?.length" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <UiAnimatedSection
          v-for="post in posts"
          :key="post._path"
        >
          <NuxtLink :to="post._path" class="block">
            <BlogBlogCard :post="post" />
          </NuxtLink>
        </UiAnimatedSection>
      </div>

      <div v-else class="text-center py-20 text-[#64748b]">
        <Icon name="lucide:file-text" size="48" class="mx-auto mb-4 opacity-30" />
        <p>暂无文章</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const { data: posts } = await useAsyncData('blog-posts', () =>
  queryContent('blog')
    .sort({ date: -1 })
    .find()
)
</script>
