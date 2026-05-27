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
        <div class="flex items-center gap-3 mb-4">
          <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400/20 to-violet-500/20 flex items-center justify-center">
            <Icon :name="item.icon" size="24" class="text-green-400" />
          </div>
          <div>
            <div class="flex items-center gap-2">
              <h1 class="text-2xl sm:text-3xl font-bold" style="color: var(--color-text)">
                {{ item.name }}
              </h1>
              <span
                v-if="item.type === 'personal'"
                class="text-xs px-2 py-0.5 rounded-full bg-violet-400/10 text-violet-400 border border-violet-400/20"
              >个人项目</span>
              <span
                v-else
                class="text-xs px-2 py-0.5 rounded-full bg-green-400/10 text-green-400 border border-green-400/20"
              >工作项目</span>
            </div>
            <span class="text-sm" style="color: var(--color-text-subtle)">{{ item.role }}</span>
          </div>
        </div>

        <!-- Tags -->
        <div class="flex flex-wrap gap-2 mt-4">
          <span v-for="tag in item.tags" :key="tag" class="skill-tag">
            {{ tag }}
          </span>
        </div>
      </header>

      <!-- Main content -->
      <UiGlassCard class="space-y-6">
        <!-- Description -->
        <div>
          <h2 class="text-lg font-semibold mb-2" style="color: var(--color-text)">项目简介</h2>
          <p class="leading-relaxed" style="color: var(--color-text-muted)">
            {{ item.description }}
          </p>
        </div>

        <!-- Highlights -->
        <div v-if="item.highlights?.length">
          <h2 class="text-lg font-semibold mb-3" style="color: var(--color-text)">核心亮点</h2>
          <ul class="space-y-3">
            <li
              v-for="(h, j) in item.highlights"
              :key="j"
              class="flex items-start gap-3"
            >
              <div class="w-6 h-6 rounded-full bg-green-400/10 flex items-center justify-center shrink-0 mt-0.5">
                <Icon name="lucide:check" size="14" class="text-green-400" />
              </div>
              <span style="color: var(--color-text-muted)">{{ h }}</span>
            </li>
          </ul>
        </div>

        <!-- Tech details -->
        <div>
          <h2 class="text-lg font-semibold mb-3" style="color: var(--color-text)">技术架构</h2>
          <div class="flex flex-wrap gap-3">
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
          :to="`/detail/project/${prevIndex}`"
          class="flex items-center gap-2 text-sm transition-colors"
          style="color: var(--color-text-muted)"
        >
          <Icon name="lucide:chevron-left" size="16" />
          <span>{{ prevItem.name }}</span>
        </NuxtLink>
        <span v-else />
        <NuxtLink
          v-if="nextItem"
          :to="`/detail/project/${nextIndex}`"
          class="flex items-center gap-2 text-sm transition-colors"
          style="color: var(--color-text-muted)"
        >
          <span>{{ nextItem.name }}</span>
          <Icon name="lucide:chevron-right" size="16" />
        </NuxtLink>
        <span v-else />
      </div>
    </div>
  </section>
</template>

<script setup>
import { projects } from '~/data/projects'

const route = useRoute()
const id = Number(route.params.id)

const item = !isNaN(id) && id >= 0 && id < projects.length ? projects[id] : null

if (!item) {
  throw createError({ statusCode: 404, message: '项目未找到' })
}

const prevIndex = id > 0 ? id - 1 : null
const nextIndex = id < projects.length - 1 ? id + 1 : null
const prevItem = prevIndex !== null ? projects[prevIndex] : null
const nextItem = nextIndex !== null ? projects[nextIndex] : null

const backLink = '/#projects'
const backLabel = '返回项目列表'
</script>
