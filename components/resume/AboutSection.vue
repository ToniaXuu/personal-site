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
                嗨，我是 <span class="text-green-400 font-medium">ToniaXuu</span>，
                一个对 AI Agent 充满热情的全栈开发者。
                最近全面拥抱了 <span class="text-violet-400 font-medium">Vibe Coding</span>，
                让 AI 成为我的编程搭档，用自然语言描述需求，代码交给 Agent 来写。
              </p>
              <p>
                工作之余喜欢折腾各种有趣的项目 ——
                赛博朋克风格的电池检测工具、粒子特效满满的个人网站、还有各种 AI 工具的深度体验。
                代码对我来说不只是工作，更是一种创造的乐趣。
              </p>
              <p>
                最近在探索 AI Agent 的各种玩法，从 Cursor 到 WorkBuddy，
                从 Claude 到 Gemini，尝试把 AI 融入开发的每一个环节。
                坚信 <span class="text-amber-400 font-medium">"不会用 AI 的开发者会被淘汰"</span>，
                所以每天都在学习和实践。
              </p>
              <div class="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-sm" style="color: var(--color-text-muted)">
                <span class="flex items-center gap-1.5">
                  <Icon name="lucide:bot" size="16" class="text-violet-400/60" />
                  AI Agent 爱好者
                </span>
                <span class="flex items-center gap-1.5">
                  <Icon name="lucide:sparkles" size="16" class="text-amber-400/60" />
                  Vibe Coding 实践者
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
