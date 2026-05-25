<template>
  <footer class="border-t border-white/[0.06] py-8 mt-20">
    <div class="max-w-5xl mx-auto px-6 text-center">
      <p class="text-sm text-[#64748b]">
        &copy; {{ year }} Your Name. Built with Nuxt &middot; Deployed on Vercel.
      </p>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>
