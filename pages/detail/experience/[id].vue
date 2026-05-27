<template>
  <section class="pt-24 pb-20">
    <div class="max-w-3xl mx-auto px-6">
      <!-- Back -->
      <NuxtLink :to="backLink" class="inline-flex items-center gap-1.5 text-sm mb-8 transition-colors" style="color: var(--color-text-muted)">
        <Icon name="lucide:arrow-left" size="16" />
        {{ backLabel }}
      </NuxtLink>

      <!-- Header -->
      <header class="mb-10">
        <div class="mb-4">
          <span class="text-sm font-medium text-green-400">{{ item.period }}</span>
        </div>
        <h1 class="text-2xl sm:text-3xl font-bold" style="color: var(--color-text)">
          {{ item.title }}
        </h1>

        <!-- Tags -->
        <div class="flex flex-wrap gap-2 mt-4">
          <span v-for="tag in item.tags" :key="tag" class="skill-tag">
            {{ tag }}
          </span>
        </div>
      </header>

      <!-- Content -->
      <UiGlassCard class="space-y-6">
        <div>
          <h2 class="text-lg font-semibold mb-4" style="color: var(--color-text)">工作内容</h2>
          <ul class="space-y-4">
            <li
              v-for="(desc, j) in item.descriptions"
              :key="j"
              class="flex items-start gap-3"
            >
              <div class="w-6 h-6 rounded-full bg-green-400/10 flex items-center justify-center shrink-0 mt-0.5">
                <span class="text-green-400 text-xs font-bold">{{ j + 1 }}</span>
              </div>
              <span class="leading-relaxed" style="color: var(--color-text-muted)">{{ desc }}</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 class="text-lg font-semibold mb-3" style="color: var(--color-text)">技术栈</h2>
          <div class="flex flex-wrap gap-2">
            <span v-for="tag in item.tags" :key="tag" class="skill-tag">
              {{ tag }}
            </span>
          </div>
        </div>
      </UiGlassCard>

      <!-- Navigation -->
      <div class="mt-12 flex items-center justify-between">
        <NuxtLink
          v-if="prevItem"
          :to="`/detail/experience/${prevIndex}`"
          class="flex items-center gap-2 text-sm transition-colors"
          style="color: var(--color-text-muted)"
        >
          <Icon name="lucide:chevron-left" size="16" />
          <span>{{ prevItem.period }}</span>
        </NuxtLink>
        <span v-else />
        <NuxtLink
          v-if="nextItem"
          :to="`/detail/experience/${nextIndex}`"
          class="flex items-center gap-2 text-sm transition-colors"
          style="color: var(--color-text-muted)"
        >
          <span>{{ nextItem.period }}</span>
          <Icon name="lucide:chevron-right" size="16" />
        </NuxtLink>
        <span v-else />
      </div>
    </div>
  </section>
</template>

<script setup>
import { experiences } from '~/data/experiences'

const route = useRoute()
const id = Number(route.params.id)

const item = !isNaN(id) && id >= 0 && id < experiences.length ? experiences[id] : null

if (!item) {
  throw createError({ statusCode: 404, message: '经历未找到' })
}

const prevIndex = id > 0 ? id - 1 : null
const nextIndex = id < experiences.length - 1 ? id + 1 : null
const prevItem = prevIndex !== null ? experiences[prevIndex] : null
const nextItem = nextIndex !== null ? experiences[nextIndex] : null

const backLink = '/#experience'
const backLabel = '返回经历列表'
</script>
