<template>
  <Transition name="fade">
    <button
      v-show="visible"
      class="fixed bottom-8 right-8 z-40 w-10 h-10 rounded-full glass-card flex items-center justify-center text-[#94a3b8] hover:text-white hover:border-white/20 transition-all"
      @click="scrollToTop"
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

onMounted(() => {
  window.addEventListener('scroll', () => {
    visible.value = window.scrollY > 400
  })
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
