<template>
  <footer class="border-t border-white/[0.06] py-12 mt-20">
    <div class="max-w-5xl mx-auto px-6">
      <div class="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div class="flex items-center gap-3">
          <span class="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-white text-sm font-bold">X</span>
          <div>
            <p class="text-sm font-semibold text-[#f1f5f9]">徐岳童 / YueTonia</p>
            <p class="text-xs text-[#64748b]">全栈工程师 · 5 年开发经验</p>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <a
            href="https://github.com/ToniaXuu"
            target="_blank"
            class="w-9 h-9 rounded-lg flex items-center justify-center text-[#64748b] hover:text-white hover:bg-white/[0.06] transition-all border border-transparent hover:border-white/[0.06]"
            title="GitHub"
          >
            <Icon name="lucide:github" size="18" />
          </a>
          <a
            href="mailto:2900713340@qq.com"
            class="w-9 h-9 rounded-lg flex items-center justify-center text-[#64748b] hover:text-white hover:bg-white/[0.06] transition-all border border-transparent hover:border-white/[0.06]"
            title="Email"
          >
            <Icon name="lucide:mail" size="18" />
          </a>
        </div>
      </div>
      <div class="mt-6 pt-6 border-t border-white/[0.04] text-center">
        <p class="text-xs text-[#475569]">
          &copy; {{ year }} 徐岳童. Built with
          <a href="https://nuxt.com" target="_blank" class="text-[#64748b] hover:text-cyan-400 transition-colors">Nuxt</a>
          &middot; Deployed on
          <a href="https://vercel.com" target="_blank" class="text-[#64748b] hover:text-cyan-400 transition-colors">Vercel</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>
