<template>
  <div class="min-h-screen flex items-center justify-center" style="background: var(--color-bg)">
    <div class="text-center px-6">
      <!-- Glitch effect number -->
      <div class="relative mb-8">
        <h1 class="text-[8rem] sm:text-[12rem] font-extrabold leading-none gradient-text opacity-20">
          {{ error?.statusCode || 404 }}
        </h1>
      </div>

      <!-- Message -->
      <h2 class="text-2xl sm:text-3xl font-bold mb-4" style="color: var(--color-text)">
        {{ error?.statusCode === 404 ? '页面未找到' : '出了点问题' }}
      </h2>
      <p class="text-base mb-10 max-w-md mx-auto" style="color: var(--color-text-muted)">
        {{ error?.statusCode === 404
          ? '你访问的页面不存在或已被移除，请检查地址是否正确。'
          : '服务器遇到了一个错误，请稍后重试。'
        }}
      </p>

      <!-- Actions -->
      <div class="flex flex-wrap justify-center gap-4">
        <button
          class="px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium text-sm hover:from-green-400 hover:to-emerald-500 transition-all shadow-lg shadow-green-500/20 hover:shadow-green-500/30 hover:scale-105"
          @click="handleError"
        >
          <Icon name="lucide:home" size="16" class="inline mr-1.5 -mt-0.5" />
          返回首页
        </button>
        <button
          class="px-6 py-3 rounded-full font-medium text-sm transition-all hover:scale-105"
          style="border: 1px solid var(--color-border); color: var(--color-text-muted)"
          @click="goBack"
        >
          <Icon name="lucide:arrow-left" size="16" class="inline mr-1.5 -mt-0.5" />
          返回上页
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  error: Object,
})

const handleError = () => clearError({ redirect: '/' })

const goBack = () => {
  if (window.history.length > 1) {
    window.history.back()
  } else {
    clearError({ redirect: '/' })
  }
}
</script>
