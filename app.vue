<template>
  <div>
    <NuxtLoadingIndicator color="#22c55e" :height="2" :duration="3000" :throttle="0" />
    <NuxtLayout>
      <NuxtPage :transition="{ name: 'page-fade', mode: 'out-in' }" />
    </NuxtLayout>
  </div>
</template>

<style>
/* 页面过渡动画 */
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.page-fade-enter-from {
  opacity: 0;
  transform: translateY(12px);
}

.page-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
