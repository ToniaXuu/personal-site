<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'navbar-scrolled' : 'bg-transparent'"
  >
    <div class="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="text-lg font-bold gradient-text flex items-center gap-2">
        <div class="w-7 h-7 rounded-lg overflow-hidden shrink-0">
          <img src="/avatar.jpg" alt="ToniaXuu" class="w-full h-full object-cover" />
        </div>
        ToniaXuu
      </NuxtLink>

      <!-- Links -->
      <div class="hidden sm:flex items-center gap-1 text-sm">
        <NuxtLink to="/" class="nav-link px-3 py-1.5 rounded-lg" exact-active-class="">首页</NuxtLink>
        <NuxtLink to="/#about" class="nav-link px-3 py-1.5 rounded-lg">关于</NuxtLink>
        <NuxtLink to="/#experience" class="nav-link px-3 py-1.5 rounded-lg">经历</NuxtLink>
        <NuxtLink to="/#skills" class="nav-link px-3 py-1.5 rounded-lg">技能</NuxtLink>
        <NuxtLink to="/#projects" class="nav-link px-3 py-1.5 rounded-lg">项目</NuxtLink>
        <NuxtLink to="/#news" class="nav-link px-3 py-1.5 rounded-lg">动态</NuxtLink>
        <NuxtLink to="/blog" class="nav-link px-3 py-1.5 rounded-lg">博客</NuxtLink>
      </div>

      <!-- Right side -->
      <div class="flex items-center gap-2">
        <a
          href="https://github.com/ToniaXuu"
          target="_blank"
          class="hidden sm:flex w-8 h-8 rounded-lg items-center justify-center hover:bg-[var(--glass-hover)] transition-all"
          style="color: var(--color-text-muted)"
          title="GitHub"
        >
          <Icon name="lucide:github" size="18" />
        </a>
        <LayoutThemeSwitcher />
        <!-- Mobile menu button -->
        <button
          class="sm:hidden p-2 transition-colors"
          style="color: var(--color-text-muted)"
          @click="mobileOpen = !mobileOpen"
        >
          <Icon v-if="!mobileOpen" name="lucide:menu" size="24" />
          <Icon v-else name="lucide:x" size="24" />
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <Transition name="slide-down">
      <div
        v-if="mobileOpen"
        class="sm:hidden navbar-scrolled px-6 py-4 flex flex-col gap-4"
      >
        <NuxtLink to="/" class="nav-link text-sm" exact-active-class="" @click="mobileOpen = false">首页</NuxtLink>
        <NuxtLink to="/#about" class="nav-link text-sm" @click="mobileOpen = false">关于</NuxtLink>
        <NuxtLink to="/#experience" class="nav-link text-sm" @click="mobileOpen = false">经历</NuxtLink>
        <NuxtLink to="/#skills" class="nav-link text-sm" @click="mobileOpen = false">技能</NuxtLink>
        <NuxtLink to="/#projects" class="nav-link text-sm" @click="mobileOpen = false">项目</NuxtLink>
        <NuxtLink to="/#news" class="nav-link text-sm" @click="mobileOpen = false">动态</NuxtLink>
        <NuxtLink to="/blog" class="nav-link text-sm" @click="mobileOpen = false">博客</NuxtLink>
        <a href="https://github.com/ToniaXuu" target="_blank" class="nav-link text-sm flex items-center gap-2">
          <Icon name="lucide:github" size="16" /> GitHub
        </a>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
const scrolled = ref(false)
const mobileOpen = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 20
  })
})
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
