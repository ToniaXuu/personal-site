<template>
  <section class="min-h-[90vh] flex items-center justify-center relative pt-16 overflow-hidden">
    <!-- 浮动光晕装饰 -->
    <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none hero-glow" />
    <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl pointer-events-none hero-glow-delay" />

    <div class="max-w-5xl mx-auto px-6 text-center relative z-10">
      <!-- 状态标签 -->
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-sm text-[#94a3b8] mb-8">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        开放工作机会 · Open to Work
      </div>

      <!-- 标题 -->
      <h1 class="text-5xl sm:text-7xl font-extrabold text-[#f1f5f9] mb-6 leading-tight">
        Hi, I'm
        <span class="block mt-2 gradient-text">
          YueTonia
        </span>
      </h1>

      <!-- 副标题 -->
      <p class="text-xl sm:text-2xl text-[#94a3b8] max-w-2xl mx-auto mb-4 leading-relaxed">
        全栈工程师 · 5 年开发经验
      </p>
      <p class="text-base text-[#64748b] max-w-xl mx-auto mb-10 leading-relaxed">
        专注 Vue 全栈开发与 Java 微服务架构，热衷构建优雅、高性能的 Web 应用。
        从前端交互到后端架构，打通数据全链路。
      </p>

      <!-- CTA 按钮 -->
      <div class="flex flex-wrap justify-center gap-4">
        <a
          href="#projects"
          class="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-sm hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 hover:scale-105"
        >
          <Icon name="lucide:rocket" size="16" class="inline mr-1.5 -mt-0.5" />
          查看项目
        </a>
        <a
          href="#about"
          class="px-6 py-3 rounded-full border border-white/[0.1] text-[#94a3b8] font-medium text-sm hover:text-white hover:border-white/20 transition-all hover:scale-105"
        >
          <Icon name="lucide:user" size="16" class="inline mr-1.5 -mt-0.5" />
          了解更多
        </a>
      </div>

      <!-- 快捷数据 -->
      <div class="mt-16 flex flex-wrap justify-center gap-8 text-sm text-[#64748b]">
        <div class="flex items-center gap-2">
          <Icon name="lucide:calendar" size="16" class="text-cyan-400/60" />
          <span><span class="text-[#f1f5f9] font-semibold">5</span> 年经验</span>
        </div>
        <div class="flex items-center gap-2">
          <Icon name="lucide:code-2" size="16" class="text-purple-400/60" />
          <span><span class="text-[#f1f5f9] font-semibold">6+</span> 个核心项目</span>
        </div>
        <div class="flex items-center gap-2">
          <Icon name="lucide:layers" size="16" class="text-emerald-400/60" />
          <span>全栈开发</span>
        </div>
      </div>
    </div>

    <!-- 底部渐变遮罩 -->
    <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#090a0f] to-transparent pointer-events-none" />
  </section>
</template>

<style scoped>
.hero-glow {
  animation: float 8s ease-in-out infinite;
}
.hero-glow-delay {
  animation: float 10s ease-in-out 2s infinite;
}
@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -20px) scale(1.05); }
  66% { transform: translate(-20px, 10px) scale(0.95); }
}
</style>
