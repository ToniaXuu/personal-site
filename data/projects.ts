export interface Project {
  name: string
  role: string
  type: 'personal' | 'work'
  icon: string
  description: string
  tags: string[]
  highlights: string[]
  screenshot?: string
  github?: string
  demo?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    name: 'YueToniaBatteryDetector',
    role: '独立开发 · 2025',
    type: 'personal',
    icon: 'lucide:battery-charging',
    description: '基于 Tauri（Rust + 前端）开发的 Windows 桌面电池检测工具，追求赛博朋克风格 UI 效果。Rust 后端负责系统级电池信息采集，Web 前端负责炫酷的可视化展示。',
    tags: ['Tauri', 'Rust', 'Vue 3', 'TypeScript', '赛博朋克'],
    highlights: [
      'Rust 后端 + Web 前端桌面应用架构',
      '赛博朋克风格 UI 设计与实现',
      '实时电池状态监控与健康度分析',
    ],
    featured: true,
  },
  {
    name: 'personal-site',
    role: '独立开发 · 2025',
    type: 'personal',
    icon: 'lucide:globe',
    description: '你正在看的这个网站！基于 Nuxt 4 构建，粒子背景交互、毛玻璃卡片、深浅主题切换，全面用 AI Agent 辅助开发的 Vibe Coding 实践。',
    tags: ['Nuxt 4', 'Vue 3', 'Tailwind CSS', 'Vercel', 'Vibe Coding'],
    highlights: [
      'Canvas 粒子背景 + 鼠标交互特效',
      '深色/浅色/自定义时间主题切换',
      '全面用 AI Agent 辅助开发',
    ],
    featured: true,
  },
  {
    name: '碳排放管理系统',
    role: '全栈开发 · 2025',
    type: 'work',
    icon: 'lucide:leaf',
    description: '面向企业碳排放全过程管理的统一能碳平台，围绕数据采集、排放核算、指标管理等核心业务，实现碳数据的标准化、流程化与可视化。',
    tags: ['Spring Cloud', 'Vue 3', 'ECharts', 'KingBaseES'],
    highlights: [
      '基于国家发改委24项核算方法实现自动核算',
      '可视化大屏开发，支持多维度数据分析',
    ],
  },
  {
    name: 'CarbonAgent（探索中）',
    role: '探索中 · 2025',
    type: 'personal',
    icon: 'lucide:bot',
    description: '探索中的 AI Agent 项目，尝试用自然语言驱动碳排放数据查询与分析，让 AI 成为碳管理的智能助手。',
    tags: ['AI Agent', 'LLM', 'RAG', '探索中'],
    highlights: [
      '自然语言驱动数据查询',
      'AI 辅助碳排放分析',
      '概念验证阶段',
    ],
  },
]
