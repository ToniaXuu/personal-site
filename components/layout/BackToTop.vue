<template>
  <Transition name="fade">
    <button
      v-show="visible"
      class="fixed bottom-8 right-8 z-40 w-10 h-10 rounded-full glass-card flex items-center justify-center transition-all"
      style="color: var(--color-text-muted)"
      @click="scrollToTop"
      @mouseenter="$event.currentTarget.style.color = 'var(--color-text)'"
      @mouseleave="$event.currentTarget.style.color = 'var(--color-text-muted)'"
    >
      <Icon name="lucide:arrow-up" size="18" />
    </button>
  </Transition>
</template>

<script setup>
const visible = ref(false)

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const onScroll = () => {
  visible.value = window.scrollY > 400
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from,
.fade-leave-to { opacity: 0; }
</style>
