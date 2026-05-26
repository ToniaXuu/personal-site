<script setup>
const experiences = [
  {
    period: '2025.03 - 至今',
    title: '全栈工程师',
    descriptions: [
      '基于业务模型进行数据库设计，完成表结构定义、字段设计、索引优化及数据关系建模',
      '设计并实现后端 RESTful API 接口，包括参数校验、业务逻辑处理、异常处理及接口文档编写',
      '完成前端页面开发与交互实现，确保与后端接口的高效联调与数据正确展示',
      '对核心业务流程进行优化与重构，提高系统性能、可维护性及扩展能力',
    ],
    tags: ['Vue 3', 'Spring Boot', 'MySQL', 'RESTful API'],
  },
  {
    period: '2025.04 - 至今（驻场项目）',
    title: '全栈开发',
    descriptions: [
      '负责碳排放管理系统的全栈开发，基于 Spring Cloud + Vue 3 技术架构',
      '开发碳排放核算、数据填报审核、考核评价、可视化大屏等核心模块',
      '基于 ECharts 实现多维度碳排放数据可视化，支持实时刷新与动态展示',
      '利用 Quartz 实现周期性数据校验、考核执行及月报催报等自动化任务',
    ],
    tags: ['Spring Cloud', 'Vue 3', 'ECharts', 'KingBaseES', 'Redis'],
  },
  {
    period: '2023.07 - 2025.02',
    title: '全栈工程师',
    descriptions: [
      '负责使用 Java + Spring Boot 框架开发稳定高效的后端服务及 API 接口',
      '设计合理的数据库结构，开发和维护业务逻辑层，确保功能模块的准确性和稳定性',
      '负责数字化综合管理平台全栈开发，实现精准帮扶、志愿服务、队伍建设等核心模块',
      '开发采购与生产一体化系统，覆盖采购管理、仓库管理、物资管理等业务模块',
    ],
    tags: ['Spring Boot', 'MyBatis', 'Vue 3', 'Element Plus', 'ECharts'],
  },
  {
    period: '2021.06 - 2022.02',
    title: 'Java 开发工程师',
    descriptions: [
      '使用 Java + Spring Boot 开发和维护服务器端应用程序',
      '配置 MySQL 数据库，设计高效的数据库架构，确保数据一致性和查询性能',
      '开发政务信息服务平台，实现动态管理、投诉建议管理、新闻管理等功能模块',
    ],
    tags: ['Java', 'Spring Boot', 'MyBatis', 'Vue 2', 'Oracle'],
  },
]
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
