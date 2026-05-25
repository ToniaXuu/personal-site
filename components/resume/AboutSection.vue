<template>
  <section id="about" class="py-20">
    <div class="max-w-5xl mx-auto px-6">
      <UiAnimatedSection>
        <UiSectionTitle title="关于我" subtitle="About Me" />
      </UiAnimatedSection>

      <UiAnimatedSection>
        <UiGlassCard>
          <div class="flex flex-col sm:flex-row gap-8 items-start">
            <!-- 头像占位 -->
            <div class="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-white text-3xl font-bold shrink-0">
              Y
            </div>
            <div class="flex-1 text-[#cbd5e1] leading-relaxed space-y-4">
              <p>
                一名充满热情的 Full Stack 开发者，拥有 X 年 Web 开发经验。
                热衷于探索前沿技术，追求代码质量与用户体验的完美平衡。
              </p>
              <p>
                目前专注于 Vue 3 / Nuxt 生态、React / Next.js 以及 Node.js 后端开发。
                在业余时间喜欢写技术博客，分享自己的学习与思考。
              </p>
              <div class="flex gap-6 pt-2 text-sm text-[#94a3b8]">
                <span class="flex items-center gap-1.5">
                  <Icon name="lucide:map-pin" size="16" />
                  北京 / 上海
                </span>
                <span class="flex items-center gap-1.5">
                  <Icon name="lucide:briefcase" size="16" />
                  X 年经验
                </span>
                <span class="flex items-center gap-1.5">
                  <Icon name="lucide:mail" size="16" />
                  hello@example.com
                </span>
              </div>
            </div>
          </div>
        </UiGlassCard>
      </UiAnimatedSection>
    </div>
  </section>
</template>
