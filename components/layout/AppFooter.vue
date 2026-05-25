<template>
  <footer class="py-12 mt-20" style="border-top: 1px solid var(--color-border)">
    <div class="max-w-5xl mx-auto px-6">
      <div class="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div class="flex items-center gap-3">
          <span class="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-white text-sm font-bold">T</span>
          <div>
            <p class="text-sm font-semibold" style="color: var(--color-text)">ToniaXuu</p>
            <p class="text-xs" style="color: var(--color-text-muted)">Full Stack Developer · 5 Years</p>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <a
            href="https://github.com/ToniaXuu"
            target="_blank"
            class="w-9 h-9 rounded-lg flex items-center justify-center transition-all"
            style="color: var(--color-text-muted); border: 1px solid var(--color-border)"
            title="GitHub"
            @mouseenter="$event.currentTarget.style.color = 'var(--color-text)'"
            @mouseleave="$event.currentTarget.style.color = 'var(--color-text-muted)'"
          >
            <Icon name="lucide:github" size="18" />
          </a>
        </div>
      </div>
      <div class="mt-6 pt-6 text-center" style="border-top: 1px solid var(--divider-color)">
        <p class="text-xs" style="color: var(--color-text-subtle)">
          &copy; {{ year }} ToniaXuu. Built with
          <a href="https://nuxt.com" target="_blank" class="transition-colors" style="color: var(--color-text-muted)" @mouseenter="$event.target.style.color = 'var(--color-accent-cyan)'" @mouseleave="$event.target.style.color = 'var(--color-text-muted)'">Nuxt</a>
          &middot; Deployed on
          <a href="https://vercel.com" target="_blank" class="transition-colors" style="color: var(--color-text-muted)" @mouseenter="$event.target.style.color = 'var(--color-accent-cyan)'" @mouseleave="$event.target.style.color = 'var(--color-text-muted)'">Vercel</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>
