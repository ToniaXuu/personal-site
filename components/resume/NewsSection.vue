<template>
  <section id="news" class="py-20">
    <div class="max-w-5xl mx-auto px-6">
      <UiAnimatedSection>
        <UiSectionTitle title="最新动态" subtitle="News & Updates" />
      </UiAnimatedSection>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <UiAnimatedSection v-for="(item, i) in news" :key="i">
          <UiGlassCard class="h-full flex flex-col group">
            <!-- 日期标签 -->
            <div class="flex items-center justify-between mb-3">
              <span class="text-xs font-medium text-cyan-400/80">{{ item.date }}</span>
              <span class="text-xs px-2 py-0.5 rounded-full border" :class="item.typeClass">{{ item.type }}</span>
            </div>
            <!-- 标题 -->
            <h3 class="text-base font-semibold text-[#f1f5f9] mb-2 group-hover:text-cyan-400 transition-colors">
              {{ item.title }}
            </h3>
            <!-- 摘要 -->
            <p class="text-[#94a3b8] text-sm leading-relaxed flex-1 mb-4">
              {{ item.summary }}
            </p>
            <!-- 底部信息 -->
            <div class="flex items-center gap-2 text-xs text-[#64748b]">
              <Icon :name="item.icon" size="14" class="text-cyan-400/50" />
              <span>{{ item.source }}</span>
            </div>
          </UiGlassCard>
        </UiAnimatedSection>
      </div>
    </div>
  </section>
</template>

<script setup>
const news = [
  {
    date: '2026-05',
    title: 'Cloudflare CDN 域名接入完成，国内可正常访问本站',
    summary: '通过 Cloudflare DNS 托管 + CDN 代理方案，解决了 Vercel 在国内被墙的问题。现在你可以通过自定义域名在任何地方访问这个站点。',
    type: '公告',
    typeClass: 'border-emerald-400/30 text-emerald-400 bg-emerald-400/5',
    icon: 'lucide:globe',
    source: 'ToniaXuu',
  },
  {
    date: '2026-05',
    title: 'Nuxt 4 + Vercel 部署个人站点上线',
    summary: '基于 Nuxt 4 构建的个人站点正式上线，支持 SSG 静态生成，托管于 Vercel 平台。包含简历展示、博客系统和动态粒子背景。',
    type: '项目',
    typeClass: 'border-cyan-400/30 text-cyan-400 bg-cyan-400/5',
    icon: 'lucide:rocket',
    source: 'ToniaXuu',
  },
  {
    date: '2026-05',
    title: '开源桌面应用 YueToniaBatteryDetector 开发中',
    summary: '基于 Tauri（Rust + Vue 3）的 Windows 电池检测工具正在开发，赛博朋克风格 UI，支持实时电池状态监控与健康度分析。',
    type: '开发中',
    typeClass: 'border-purple-400/30 text-purple-400 bg-purple-400/5',
    icon: 'lucide:battery-charging',
    source: 'GitHub',
  },
  {
    date: '2026-05',
    title: 'AI Agent 工具推荐：2026 开发者必备',
    summary: '新博客已发布！全面对比 Cursor、Windsurf、WorkBuddy、GitHub Copilot 等主流 AI 编程助手，从功能、体验、价格多维度分析。',
    type: '博客',
    typeClass: 'border-amber-400/30 text-amber-400 bg-amber-400/5',
    icon: 'lucide:file-text',
    source: 'ToniaXuu Blog',
  },
  {
    date: '2026-04',
    title: '碳排放管理系统可视化大屏交付',
    summary: '负责的碳排放管理系统可视化大屏完成交付，基于 ECharts 实现多维碳排放数据分析，支持实时数据刷新与动态图表展示。',
    type: '交付',
    typeClass: 'border-emerald-400/30 text-emerald-400 bg-emerald-400/5',
    icon: 'lucide:check-circle',
    source: '项目',
  },
  {
    date: '2025-09',
    title: '数据库迁移：MySQL 到 KingBaseES',
    summary: '顺利完成碳排放管理系统从 MySQL 到国产数据库 KingBaseES 的迁移工作，涉及 151 张表的适配、SQL 语法兼容与性能调优。',
    type: '技术',
    typeClass: 'border-cyan-400/30 text-cyan-400 bg-cyan-400/5',
    icon: 'lucide:database',
    source: '项目',
  },
]
</script>
