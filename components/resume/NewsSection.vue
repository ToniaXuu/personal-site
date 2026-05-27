<template>
  <section id="news" class="py-20">
    <div class="max-w-5xl mx-auto px-6">
      <UiAnimatedSection>
        <UiSectionTitle title="最近折腾" subtitle="What I've Been Up To" />
      </UiAnimatedSection>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <UiAnimatedSection v-for="(item, i) in news" :key="i">
          <NuxtLink v-if="item.link" :to="item.link" class="block group">
            <UiGlassCard class="h-full flex flex-col">
              <div class="flex items-center justify-between mb-3">
                <span class="text-xs font-medium text-green-400/80">{{ item.date }}</span>
                <span class="text-xs px-2 py-0.5 rounded-full border" :class="item.typeClass">{{ item.type }}</span>
              </div>
              <h3 class="text-base font-semibold mb-2 group-hover:text-green-400 transition-colors" style="color: var(--color-text)">
                {{ item.title }}
              </h3>
              <p class="text-sm leading-relaxed flex-1 mb-4" style="color: var(--color-text-muted)">
                {{ item.summary }}
              </p>
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2 text-xs" style="color: var(--color-text-subtle)">
                  <Icon :name="item.icon" size="14" class="text-green-400/50" />
                  <span>{{ item.source }}</span>
                </div>
                <Icon name="lucide:arrow-right" size="14" class="opacity-0 group-hover:opacity-100 transition-opacity" style="color: var(--color-accent-green)" />
              </div>
            </UiGlassCard>
          </NuxtLink>
          <UiGlassCard v-else class="h-full flex flex-col">
            <div class="flex items-center justify-between mb-3">
              <span class="text-xs font-medium text-green-400/80">{{ item.date }}</span>
              <span class="text-xs px-2 py-0.5 rounded-full border" :class="item.typeClass">{{ item.type }}</span>
            </div>
            <h3 class="text-base font-semibold mb-2" style="color: var(--color-text)">
              {{ item.title }}
            </h3>
            <p class="text-sm leading-relaxed flex-1 mb-4" style="color: var(--color-text-muted)">
              {{ item.summary }}
            </p>
            <div class="flex items-center gap-2 text-xs" style="color: var(--color-text-subtle)">
              <Icon :name="item.icon" size="14" class="text-green-400/50" />
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
    title: '全面拥抱 Vibe Coding',
    summary: '从 Cursor 到 WorkBuddy，从 Claude 到 Gemini，把 AI Agent 融入开发的每一个环节。写代码的方式彻底变了，现在更像是"指挥"AI 来实现想法。',
    type: '里程碑',
    typeClass: 'border-violet-400/30 text-violet-400 bg-violet-400/5',
    icon: 'lucide:sparkles',
    source: '个人记录',
  },
  {
    date: '2026-05',
    title: '个人网站 V2 上线',
    summary: '用 Nuxt 4 重构了个人网站，粒子背景、毛玻璃卡片、深浅主题切换，整个过程几乎全靠 AI Agent 辅助完成，体验了一把真正的 Vibe Coding。',
    type: '项目',
    typeClass: 'border-green-400/30 text-green-400 bg-green-400/5',
    icon: 'lucide:globe',
    source: 'ToniaXuu',
    link: '/blog/hello-world',
  },
  {
    date: '2026-05',
    title: 'AI Agent 工具深度对比',
    summary: '写了篇长文对比 Cursor、Windsurf、WorkBuddy、GitHub Copilot 等主流 AI 编程助手，从功能、体验、价格多维度分析，帮你找到最适合的 Agent。',
    type: '博客',
    typeClass: 'border-amber-400/30 text-amber-400 bg-amber-400/5',
    icon: 'lucide:pen-line',
    source: 'ToniaXuu Blog',
    link: '/blog/ai-agent-comparison-2026',
  },
  {
    date: '2026-05',
    title: 'BatteryDetector 电池检测工具开发中',
    summary: '基于 Tauri（Rust + Vue 3）的 Windows 桌面电池检测工具，赛博朋克风格 UI，支持实时电池状态监控。Rust 写后端，Web 写前端，桌面应用也可以很酷。',
    type: '开发中',
    typeClass: 'border-emerald-400/30 text-emerald-400 bg-emerald-400/5',
    icon: 'lucide:battery-charging',
    source: 'GitHub',
  },
  {
    date: '2026-05',
    title: '探索 AI Agent 在碳管理领域的应用',
    summary: '尝试用自然语言驱动碳排放数据查询与分析，让 AI 成为碳管理的智能助手。还在概念验证阶段，但已经能看到巨大的潜力。',
    type: '探索',
    typeClass: 'border-cyan-400/30 text-cyan-400 bg-cyan-400/5',
    icon: 'lucide:bot',
    source: '个人项目',
  },
  {
    date: '2026-05',
    title: 'Cloudflare CDN 域名接入完成',
    summary: '通过 Cloudflare DNS 托管 + CDN 代理方案，解决了 Vercel 在国内被墙的问题。现在国内也能流畅访问了。',
    type: '公告',
    typeClass: 'border-emerald-400/30 text-emerald-400 bg-emerald-400/5',
    icon: 'lucide:globe',
    source: '运维',
  },
]
</script>
