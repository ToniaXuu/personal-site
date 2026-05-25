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
          <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400/20 to-purple-500/20 flex items-center justify-center">
            <Icon :name="item.icon" size="24" class="text-cyan-400" />
          </div>
          <div>
            <h1 class="text-2xl sm:text-3xl font-bold" style="color: var(--color-text)">
              {{ item.name }}
            </h1>
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
              <div class="w-6 h-6 rounded-full bg-emerald-400/10 flex items-center justify-center shrink-0 mt-0.5">
                <Icon name="lucide:check" size="14" class="text-emerald-400" />
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
const route = useRoute()
const id = parseInt(route.params.id)

const projects = [
  {
    name: '碳排放管理系统',
    role: '全栈开发 · 2025',
    icon: 'lucide:leaf',
    description: '面向企业碳排放全过程管理的统一能碳平台，围绕数据采集、排放核算、指标管理、报告填报及考核评价等核心业务，实现碳数据的标准化、流程化与可视化。',
    tags: ['Spring Cloud', 'Vue 3', 'Element Plus', 'ECharts', 'KingBaseES', 'Redis'],
    highlights: [
      '基于国家发改委24项企业温室气体排放核算方法实现自动核算',
      '可视化大屏开发，支持多维度碳排放数据分析',
      'Quartz 定时任务实现自动化催报与考核评分',
    ],
  },
  {
    name: '数字化综合管理平台',
    role: '全栈开发 · 2024',
    icon: 'lucide:landmark',
    description: '全流程数字化综合管理平台，实现从信息录入、多级审批到数据展示的闭环管理。',
    tags: ['Spring Cloud', 'Vue 3', 'Element Plus', 'MySQL', 'PowerJob'],
    highlights: [
      '精准帮扶模块，对接外部数据自动检测需帮扶对象',
      '多级审批流程，实现灵活的权限控制',
      '志愿服务积分激励机制',
    ],
  },
  {
    name: '采购与生产一体化系统',
    role: '全栈开发 · 2024',
    icon: 'lucide:factory',
    description: '实现客户和供应商的一体化管理，涵盖销售、采购、生产、库存等多个模块，跟踪生产流程，管理货运物流的配送与成本管控。',
    tags: ['Spring Boot', 'Vue 3', 'Element Plus', 'MySQL', 'Quartz'],
    highlights: [
      '采购申请审核流程与采购订单计划生成',
      '超期库存处理方案，Quartz 定时任务实现自动化',
      '物资领用管理与资金报表编制',
    ],
  },
  {
    name: '物流加盟管理系统',
    role: '后端开发 · 2023',
    icon: 'lucide:truck',
    description: '优化和自动化公司特许加盟门店的管理流程，通过集中化系统实现门店运营数据的统一管理、分析和决策支持。',
    tags: ['Spring Boot', 'MyBatis', 'Vue 2', 'MySQL'],
    highlights: [
      '复杂费用计算与财务处理业务逻辑',
      '运单打印、二维码生成打印与扫描',
      '通用数据字典和选择器组件开发',
    ],
  },
  {
    name: '政务信息服务平台',
    role: '后端开发 · 2021',
    icon: 'lucide:building',
    description: '政务信息发布平台，涵盖动态管理、投诉建议、新闻管理、重点工程、办事指南、公告管理等模块，支持多级审批与公开发布。',
    tags: ['Spring Boot', 'MyBatis', 'Oracle', 'Vue 2'],
    highlights: [
      '动态管理/新闻/重点工程/办事指南全流程审批发布',
      '投诉建议公众提交与管理员处理反馈闭环',
      '公共数据字典组件，提升系统可维护性',
    ],
  },
  {
    name: 'BatteryDetector',
    role: '独立开发 · 2025',
    icon: 'lucide:battery-charging',
    description: '基于 Tauri（Rust + 前端）开发的 Windows 桌面电池检测工具，追求赛博朋克风格 UI 效果。',
    tags: ['Tauri', 'Rust', 'Vue 3', 'TypeScript'],
    highlights: [
      'Rust 后端 + Web 前端桌面应用架构',
      '赛博朋克风格 UI 设计与实现',
      '电池检测功能核心逻辑开发',
    ],
  },
]

const item = projects[id]
const prevIndex = id > 0 ? id - 1 : null
const nextIndex = id < projects.length - 1 ? id + 1 : null
const prevItem = prevIndex !== null ? projects[prevIndex] : null
const nextItem = nextIndex !== null ? projects[nextIndex] : null

const backLink = '/#projects'
const backLabel = '返回项目列表'

if (!item) {
  throw createError({ statusCode: 404, message: '项目未找到' })
}
</script>
