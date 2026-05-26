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
const route = useRoute()
const id = parseInt(route.params.id)

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

const item = experiences[id]
const prevIndex = id > 0 ? id - 1 : null
const nextIndex = id < experiences.length - 1 ? id + 1 : null
const prevItem = prevIndex !== null ? experiences[prevIndex] : null
const nextItem = nextIndex !== null ? experiences[nextIndex] : null

const backLink = '/#experience'
const backLabel = '返回经历列表'

if (!item) {
  throw createError({ statusCode: 404, message: '经历未找到' })
}
</script>
