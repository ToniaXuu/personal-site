<script setup>
import { projects } from '~/data/projects'
</script>

<template>
  <section id="projects" class="py-20">
    <div class="max-w-5xl mx-auto px-6">
      <UiAnimatedSection>
        <UiSectionTitle title="我的项目" subtitle="Projects" />
      </UiAnimatedSection>

      <!-- Featured projects -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <UiAnimatedSection
          v-for="(project, i) in projects.filter(p => p.featured)"
          :key="i"
        >
          <NuxtLink :to="`/detail/project/${projects.indexOf(project)}`" class="block group">
            <UiGlassCard class="h-full flex flex-col">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-green-400/20 to-violet-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon :name="project.icon" size="20" class="text-green-400" />
                </div>
                <div class="flex-1">
                  <div class="flex items-center gap-2">
                    <h3 class="text-lg font-semibold" style="color: var(--color-text)">{{ project.name }}</h3>
                    <span
                      v-if="project.type === 'personal'"
                      class="text-[10px] px-1.5 py-0.5 rounded-full bg-violet-400/10 text-violet-400 border border-violet-400/20"
                    >个人</span>
                    <span
                      v-else
                      class="text-[10px] px-1.5 py-0.5 rounded-full bg-green-400/10 text-green-400 border border-green-400/20"
                    >工作</span>
                    <span
                      v-if="project.featured"
                      class="text-[10px] px-1.5 py-0.5 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/20"
                    >精选</span>
                  </div>
                  <span class="text-xs" style="color: var(--color-text-subtle)">{{ project.role }}</span>
                </div>
              </div>
              <p class="text-sm leading-relaxed mb-4 flex-1" style="color: var(--color-text-muted)">
                {{ project.description }}
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="skill-tag"
                >
                  {{ tag }}
                </span>
              </div>
              <div class="pt-3" style="border-top: 1px solid var(--color-border)">
                <ul class="text-xs space-y-1" style="color: var(--color-text-muted)">
                  <li v-for="(h, j) in project.highlights" :key="j" class="flex gap-1.5">
                    <Icon name="lucide:check" size="12" class="text-green-400 mt-0.5 shrink-0" />
                    <span>{{ h }}</span>
                  </li>
                </ul>
              </div>
              <div class="flex items-center gap-1 text-xs font-medium mt-3 opacity-0 group-hover:opacity-100 transition-opacity" style="color: var(--color-accent-green)">
                <span>查看详情</span>
                <Icon name="lucide:arrow-right" size="14" />
              </div>
            </UiGlassCard>
          </NuxtLink>
        </UiAnimatedSection>
      </div>

      <!-- Other projects -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <UiAnimatedSection
          v-for="(project, i) in projects.filter(p => !p.featured)"
          :key="i"
        >
          <NuxtLink :to="`/detail/project/${projects.indexOf(project)}`" class="block group">
            <UiGlassCard class="h-full flex flex-col">
              <div class="flex items-center gap-3 mb-3">
                <div class="w-9 h-9 rounded-lg bg-gradient-to-br from-green-400/15 to-violet-500/15 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon :name="project.icon" size="18" class="text-green-400" />
                </div>
                <div class="flex-1">
                  <div class="flex items-center gap-2">
                    <h3 class="text-base font-semibold" style="color: var(--color-text)">{{ project.name }}</h3>
                    <span
                      v-if="project.type === 'personal'"
                      class="text-[10px] px-1.5 py-0.5 rounded-full bg-violet-400/10 text-violet-400 border border-violet-400/20"
                    >个人</span>
                    <span
                      v-else
                      class="text-[10px] px-1.5 py-0.5 rounded-full bg-green-400/10 text-green-400 border border-green-400/20"
                    >工作</span>
                  </div>
                  <span class="text-xs" style="color: var(--color-text-subtle)">{{ project.role }}</span>
                </div>
              </div>
              <p class="text-sm leading-relaxed mb-3 flex-1" style="color: var(--color-text-muted)">
                {{ project.description }}
              </p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="skill-tag"
                >
                  {{ tag }}
                </span>
              </div>
              <div class="flex items-center gap-1 text-xs font-medium mt-3 opacity-0 group-hover:opacity-100 transition-opacity" style="color: var(--color-accent-green)">
                <span>查看详情</span>
                <Icon name="lucide:arrow-right" size="14" />
              </div>
            </UiGlassCard>
          </NuxtLink>
        </UiAnimatedSection>
      </div>
    </div>
  </section>
</template>
