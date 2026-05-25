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
          <UiGlassCard class="relative">
            <div class="timeline-line">
              <div class="timeline-dot" />
              <span class="text-xs font-medium text-cyan-400 mb-2 block">
                {{ item.period }}
              </span>
              <h3 class="text-xl font-semibold text-[#f1f5f9] mb-1">
                {{ item.title }}
              </h3>
              <p class="text-sm text-purple-400 mb-3">
                {{ item.company }}
              </p>
              <p class="text-[#94a3b8] text-sm leading-relaxed">
                {{ item.description }}
              </p>
              <div v-if="item.tags" class="flex flex-wrap gap-2 mt-4">
                <span
                  v-for="tag in item.tags"
                  :key="tag"
                  class="skill-tag"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </UiGlassCard>
        </UiAnimatedSection>
      </div>
    </div>
  </section>
</template>

<script setup>
const experiences = [
  {
    period: '2023 - 至今',
    title: '高级前端开发工程师',
    company: 'XX 科技有限公司',
    description: '负责核心产品前端架构设计，主导从 Vue 2 到 Vue 3 的技术迁移。搭建组件库与 CI/CD 流程，提升团队开发效率 40%。',
    tags: ['Vue 3', 'TypeScript', 'Nuxt', 'Vite'],
  },
  {
    period: '2021 - 2023',
    title: '前端开发工程师',
    company: 'YY 互联网公司',
    description: '参与多个 B 端与 C 端产品的开发，独立负责支付模块前端重构，优化首屏加载速度 60%。',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'Node.js'],
  },
  {
    period: '2019 - 2021',
    title: '初级前端开发',
    company: 'ZZ 科技',
    description: '参与公司官网与后台管理系统的开发，学习并实践敏捷开发流程与代码规范。',
    tags: ['Vue 2', 'Element UI', 'jQuery', 'SCSS'],
  },
]
</script>
