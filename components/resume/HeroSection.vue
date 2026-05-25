<template>
  <section class="min-h-[90vh] flex items-center justify-center relative pt-16">
    <div class="max-w-5xl mx-auto px-6 text-center">
      <!-- 状态标签 -->
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-sm text-[#94a3b8] mb-8">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        Available for opportunities
      </div>

      <!-- 标题 -->
      <h1 class="text-5xl sm:text-7xl font-extrabold text-[#f1f5f9] mb-6 leading-tight">
        Hi, I'm
        <span class="block mt-2 gradient-text">
          Your Name
        </span>
      </h1>

      <!-- 副标题 -->
      <p class="text-xl sm:text-2xl text-[#94a3b8] max-w-2xl mx-auto mb-10 leading-relaxed">
        Full Stack Developer &mdash; 热爱构建优雅、高性能的 Web 应用。
        专注于 Vue / React 生态与 Node.js 后端开发。
      </p>

      <!-- CTA 按钮 -->
      <div class="flex flex-wrap justify-center gap-4">
        <a
          href="/blog"
          class="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-sm hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/20"
        >
          阅读博客
        </a>
        <a
          href="#about"
          class="px-6 py-3 rounded-full border border-white/[0.1] text-[#94a3b8] font-medium text-sm hover:text-white hover:border-white/20 transition-all"
        >
          了解更多
        </a>
      </div>
    </div>
  </section>
</template>
