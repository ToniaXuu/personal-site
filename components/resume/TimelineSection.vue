<script setup>
import { experiences } from '~/data/experiences'
</script>

<template>
  <section id="experience" class="py-20">
    <div class="max-w-5xl mx-auto px-6">
      <UiAnimatedSection>
        <UiSectionTitle title="工作经历" subtitle="Experience" />
      </UiAnimatedSection>

      <div class="space-y-8">
        <UiAnimatedSection
          v-for="(item, i) in experiences"
          :key="i"
        >
          <NuxtLink :to="`/detail/experience/${i}`" class="block group">
            <UiGlassCard class="relative">
              <div class="timeline-line">
                <div class="timeline-dot" />
                <span class="text-xs font-medium text-green-400 mb-2 block">
                  {{ item.period }}
                </span>
                <h3 class="text-xl font-semibold mb-3" style="color: var(--color-text)">
                  {{ item.title }}
                </h3>
                <ul class="text-sm leading-relaxed space-y-1.5" style="color: var(--color-text-muted)">
                  <li v-for="(desc, j) in item.descriptions" :key="j" class="flex gap-2">
                    <span class="text-green-400/50 mt-1 shrink-0">&#8226;</span>
                    <span>{{ desc }}</span>
                  </li>
                </ul>
                <div v-if="item.tags" class="flex flex-wrap gap-2 mt-4">
                  <span v-for="tag in item.tags" :key="tag" class="skill-tag">
                    {{ tag }}
                  </span>
                </div>
                <div class="mt-4 flex items-center gap-1 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity" style="color: var(--color-accent-green)">
                  <span>查看详情</span>
                  <Icon name="lucide:arrow-right" size="14" />
                </div>
              </div>
            </UiGlassCard>
          </NuxtLink>
        </UiAnimatedSection>
      </div>
    </div>
  </section>
</template>
