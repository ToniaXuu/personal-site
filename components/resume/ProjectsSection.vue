<template>
  <section id="projects" class="py-20">
    <div class="max-w-5xl mx-auto px-6">
      <UiAnimatedSection>
        <UiSectionTitle title="精选项目" subtitle="Featured Projects" />
      </UiAnimatedSection>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <UiAnimatedSection
          v-for="(project, i) in projects"
          :key="i"
        >
          <UiGlassCard class="h-full flex flex-col">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400/20 to-purple-500/20 flex items-center justify-center">
                <Icon :name="project.icon" size="20" class="text-cyan-400" />
              </div>
              <h3 class="text-lg font-semibold text-[#f1f5f9]">
                {{ project.name }}
              </h3>
            </div>
            <p class="text-[#94a3b8] text-sm leading-relaxed mb-4 flex-1">
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
            <a
              v-if="project.link"
              :href="project.link"
              target="_blank"
              class="inline-flex items-center gap-1.5 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <Icon name="lucide:external-link" size="14" />
              查看项目
            </a>
          </UiGlassCard>
        </UiAnimatedSection>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    name: '个人博客系统',
    icon: 'lucide:book-open',
    description: '基于 Nuxt 3 + @nuxt/content 的静态博客，支持 Markdown 写作、标签分类与暗色主题。',
    tags: ['Nuxt 3', 'Vue 3', 'Tailwind CSS'],
    link: '#',
  },
  {
    name: 'E-Commerce Dashboard',
    icon: 'lucide:bar-chart-3',
    description: '全栈电商后台管理系统，包含订单管理、商品管理、数据可视化等功能。',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    link: '#',
  },
  {
    name: 'API 网关服务',
    icon: 'lucide:cloud',
    description: '基于 Node.js 的微服务 API 网关，实现路由分发、限流熔断与日志追踪。',
    tags: ['Node.js', 'NestJS', 'Redis', 'Docker'],
    link: '#',
  },
  {
    name: '组件库',
    icon: 'lucide:package',
    description: '企业级 Vue 3 组件库，包含 30+ 常用组件，支持按需加载与主题定制。',
    tags: ['Vue 3', 'TypeScript', 'Vite', 'Storybook'],
    link: '#',
  },
]
</script>
