<template>
  <section id="about" class="py-20">
    <div class="max-w-5xl mx-auto px-6">
      <UiAnimatedSection>
        <UiSectionTitle title="关于我" subtitle="About Me" />
      </UiAnimatedSection>

      <UiAnimatedSection>
        <UiGlassCard>
          <div class="flex flex-col sm:flex-row gap-8 items-start">
            <!-- Avatar -->
            <div class="w-28 h-28 rounded-2xl overflow-hidden shrink-0 shadow-lg shadow-green-500/10">
              <img src="/avatar.jpg" alt="ToniaXuu" class="w-full h-full object-cover" />
            </div>
            <div class="flex-1 leading-relaxed space-y-4" style="color: var(--color-text-muted)">
              <p>
                Full Stack Developer，拥有 <span class="text-green-400 font-medium">{{ yearsOfExperience }} 年</span> Web 开发经验。
                具备扎实的前后端开发能力，从数据库设计、后端 API 开发到前端页面实现，能够独立打通全链路业务闭环。
              </p>
              <p>
                熟悉 <span class="text-violet-400 font-medium">Vue 3 / Spring Boot / Spring Cloud</span> 技术栈，
                拥有微服务架构开发经验。对碳排放管理、政务平台、物流系统等企业级 B 端系统有丰富的实战经验，
                擅长可视化大屏开发与数据驱动的前端展示。
              </p>
              <p>
                工作之余，热衷于探索新技术，持续学习并分享技术心得。追求代码质量与用户体验的完美平衡。
              </p>
              <div class="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-sm" style="color: var(--color-text-muted)">
                <span class="flex items-center gap-1.5">
                  <Icon name="lucide:briefcase" size="16" class="text-violet-400/60" />
                  {{ yearsOfExperience }} 年经验
                </span>
                <span class="flex items-center gap-1.5">
                  <Icon name="lucide:graduation-cap" size="16" class="text-emerald-400/60" />
                  本科 · 计算机科学与技术
                </span>
                <span class="flex items-center gap-1.5">
                  <Icon name="lucide:github" size="16" class="text-green-400/60" />
                  <a href="https://github.com/ToniaXuu" target="_blank" rel="noopener noreferrer" class="hover:text-green-400 transition-colors">ToniaXuu</a>
                </span>
              </div>
            </div>
          </div>
        </UiGlassCard>
      </UiAnimatedSection>
    </div>
  </section>
</template>

<script setup>
const yearsOfExperience = getYearsOfExperience()
</script>
