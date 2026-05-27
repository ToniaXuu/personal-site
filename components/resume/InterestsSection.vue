<template>
  <section id="interests" class="py-20">
    <div class="max-w-5xl mx-auto px-6">
      <UiAnimatedSection>
        <UiSectionTitle title="兴趣方向" subtitle="What I'm Into" />
      </UiAnimatedSection>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <UiAnimatedSection
          v-for="(interest, i) in interests"
          :key="i"
        >
          <UiGlassCard class="h-full">
            <div class="flex items-center gap-3 mb-4">
              <div
                class="w-11 h-11 rounded-xl flex items-center justify-center"
                :style="{ background: interest.iconBg }"
              >
                <Icon :name="interest.icon" size="22" :style="{ color: interest.iconColor }" />
              </div>
              <div>
                <h3 class="text-base font-semibold" style="color: var(--color-text)">{{ interest.title }}</h3>
                <span class="text-xs" style="color: var(--color-text-subtle)">{{ interest.tag }}</span>
              </div>
            </div>
            <p class="text-sm leading-relaxed mb-4" style="color: var(--color-text-muted)">
              {{ interest.description }}
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in interest.tags"
                :key="tag"
                class="skill-tag"
              >
                {{ tag }}
              </span>
            </div>
          </UiGlassCard>
        </UiAnimatedSection>
      </div>
    </div>
  </section>
</template>

<script setup>
const interests = [
  {
    title: 'AI Agent',
    tag: '当前最热衷',
    icon: 'lucide:bot',
    iconBg: 'rgba(167,139,250,0.15)',
    iconColor: '#a78bfa',
    description: '深度探索 AI Agent 的各种玩法，从编程助手到自动化工作流，尝试让 AI 渗透到每一个环节。正在研究如何用 Agent 解决实际业务问题。',
    tags: ['Cursor', 'WorkBuddy', 'Claude', 'Gemini', 'MCP'],
  },
  {
    title: 'Vibe Coding',
    tag: '全新的编程方式',
    icon: 'lucide:sparkles',
    iconBg: 'rgba(251,191,36,0.15)',
    iconColor: '#fbbf24',
    description: '全面拥抱 Vibe Coding —— 用自然语言描述需求，让 AI 来写代码。从"我写代码"转变为"我指挥 AI 写代码"，效率提升的同时，创造力也被释放了。',
    tags: ['Prompt Engineering', 'AI Pair Programming', '自然语言编程'],
  },
  {
    title: '桌面应用开发',
    tag: 'Tauri + Rust',
    icon: 'lucide:monitor',
    iconBg: 'rgba(74,222,128,0.15)',
    iconColor: '#4ade80',
    description: '用 Tauri 把 Web 技术带到桌面，Rust 做后端保证性能，Vue 做前端保证开发体验。正在开发赛博朋克风格的电池检测工具。',
    tags: ['Tauri', 'Rust', 'Vue 3', '桌面应用'],
  },
  {
    title: '前端工程化',
    tag: '一直在折腾',
    icon: 'lucide:wrench',
    iconBg: 'rgba(96,165,250,0.15)',
    iconColor: '#60a5fa',
    description: '对前端工具链和工程化实践有持续的热情，喜欢探索新的框架和构建工具，追求更好的开发体验和产物性能。',
    tags: ['Nuxt', 'Vite', 'Tailwind CSS', 'TypeScript'],
  },
  {
    title: '可视化 & 创意编程',
    tag: '代码也可以很美',
    icon: 'lucide:palette',
    iconBg: 'rgba(244,114,182,0.15)',
    iconColor: '#f472b6',
    description: '喜欢用代码创造视觉效果，从 Canvas 粒子系统到数据可视化大屏，技术与艺术的结合总是让人着迷。',
    tags: ['Canvas', 'ECharts', 'CSS 动效', '粒子系统'],
  },
  {
    title: 'AI + 碳管理',
    tag: '探索中',
    icon: 'lucide:leaf',
    iconBg: 'rgba(34,197,94,0.15)',
    iconColor: '#22c55e',
    description: '探索 AI Agent 在碳排放管理领域的应用，尝试用自然语言驱动数据查询与分析，让复杂的碳数据变得触手可及。',
    tags: ['CarbonAgent', 'RAG', '数据查询', '智能分析'],
  },
]
</script>
