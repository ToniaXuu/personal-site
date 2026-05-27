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
          rel="noopener noreferrer"
          class="hidden sm:flex w-8 h-8 rounded-lg items-center justify-center hover:bg-[var(--glass-hover)] transition-all"
          style="color: var(--color-text-muted)"
          title="GitHub"
        >
          <Icon name="lucide:github" size="18" />
        </a>
        <LayoutThemeSwitcher />
        <!-- Mobile menu button -->
        <button
          class="sm:hidden w-9 h-9 flex items-center justify-center rounded-lg transition-colors border border-[var(--color-border)] hover:bg-[var(--glass-hover)]"
          style="color: var(--color-text-muted)"
          @click="mobileOpen = !mobileOpen"
        >
          <Icon v-if="!mobileOpen" name="lucide:menu" size="18" />
          <Icon v-else name="lucide:x" size="18" />
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <Transition name="slide-down">
      <div
        v-if="mobileOpen"
        class="sm:hidden mobile-menu navbar-scrolled px-4 py-3 flex flex-col gap-1"
      >
        <NuxtLink to="/" class="mobile-nav-item text-sm" exact-active-class="" @click="mobileOpen = false">首页</NuxtLink>
        <NuxtLink to="/#about" class="mobile-nav-item text-sm" @click="mobileOpen = false">关于</NuxtLink>
        <NuxtLink to="/#experience" class="mobile-nav-item text-sm" @click="mobileOpen = false">经历</NuxtLink>
        <NuxtLink to="/#skills" class="mobile-nav-item text-sm" @click="mobileOpen = false">技能</NuxtLink>
        <NuxtLink to="/#projects" class="mobile-nav-item text-sm" @click="mobileOpen = false">项目</NuxtLink>
        <NuxtLink to="/#news" class="mobile-nav-item text-sm" @click="mobileOpen = false">动态</NuxtLink>
        <NuxtLink to="/blog" class="mobile-nav-item text-sm" @click="mobileOpen = false">博客</NuxtLink>
        <a href="https://github.com/ToniaXuu" target="_blank" rel="noopener noreferrer" class="mobile-nav-item text-sm flex items-center gap-2">
          <Icon name="lucide:github" size="16" /> GitHub
        </a>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
const route = useRoute()
const scrolled = ref(false)
const mobileOpen = ref(false)

const onScroll = () => {
  scrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})

// 路由变化时自动关闭移动端菜单
watch(() => route.path, () => {
  mobileOpen.value = false
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

/* ===== 移动端菜单项 ===== */
.mobile-nav-item {
  display: flex;
  align-items: center;
  padding: 10px 14px;
  border-radius: 10px;
  color: var(--color-text-muted);
  font-weight: 500;
  transition: all 0.2s ease;
  position: relative;
}
.mobile-nav-item:hover {
  color: var(--color-text);
  background: var(--glass-hover);
}
.mobile-nav-item.router-link-exact-active {
  color: var(--color-text);
  background: var(--accent-glow);
}
/* 移动端菜单不需要下划线 */
.mobile-nav-item::after {
  display: none !important;
}
</style>
