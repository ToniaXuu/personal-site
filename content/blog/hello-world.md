---
title: Hello World - 我的第一篇博客
description: 欢迎来到我的个人博客，这里记录我的技术探索与思考。
date: 2026-05-25
tags: [intro, personal]
---

# Hello World 👋

欢迎来到我的个人博客！

## 关于这个站点

这个站点是我个人品牌的一部分，用于展示我的工作经历、技术栈，以及时不时写一些技术文章。

### 技术栈

这个网站采用以下技术构建：

- **Nuxt 4** - Vue 3 全栈框架，支持 SSG/SSR
- **@nuxt/content** - Markdown 驱动的 CMS
- **Tailwind CSS** - 原子化 CSS 框架
- **Vercel** - 部署平台

### 为什么要写博客

1. **知识沉淀** &mdash; 写作是最好的学习方式。把一个概念讲清楚，才能真正理解它。
2. **分享交流** &mdash; 互联网的价值在于连接。分享自己的经验，也获得反馈。
3. **持续成长** &mdash; 记录成长轨迹，回头看时会有惊喜。

## 一段代码示例

```typescript
// 一个简单的防抖函数
function debounce<T extends (...args: any[]) => any>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout>
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}
```

---

后续会分享更多关于前端开发、工程化实践等方面的内容。敬请期待！
