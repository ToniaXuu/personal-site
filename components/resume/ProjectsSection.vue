<script setup>
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
</script>

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
          <NuxtLink :to="`/detail/project/${i}`" class="block group">
            <UiGlassCard class="h-full flex flex-col">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon :name="project.icon" size="20" class="text-cyan-400" />
                </div>
                <div>
                  <h3 class="text-lg font-semibold" style="color: var(--color-text)">{{ project.name }}</h3>
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
              <div class="pt-3 mb-3" style="border-top: 1px solid var(--color-border)">
                <ul class="text-xs space-y-1" style="color: var(--color-text-muted)">
                  <li v-for="(h, j) in project.highlights" :key="j" class="flex gap-1.5">
                    <Icon name="lucide:check" size="12" class="text-emerald-400 mt-0.5 shrink-0" />
                    <span>{{ h }}</span>
                  </li>
                </ul>
              </div>
              <div class="flex items-center gap-1 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity" style="color: var(--color-accent-cyan)">
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
