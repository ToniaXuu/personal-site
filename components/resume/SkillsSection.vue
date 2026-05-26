<template>
  <section id="skills" class="py-20">
    <div class="max-w-5xl mx-auto px-6">
      <UiAnimatedSection>
        <UiSectionTitle title="技术栈" subtitle="Skills & Tech Stack" />
      </UiAnimatedSection>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <UiAnimatedSection
          v-for="(group, i) in skillGroups"
          :key="i"
        >
          <UiGlassCard>
            <h3 class="text-lg font-semibold mb-4 flex items-center gap-2" style="color: var(--color-text)">
              <Icon :name="group.icon" size="20" class="text-green-400" />
              {{ group.name }}
            </h3>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="skill in group.skills"
                :key="skill"
                class="skill-tag"
              >
                {{ skill }}
              </span>
            </div>
          </UiGlassCard>
        </UiAnimatedSection>
      </div>
    </div>
  </section>
</template>

<script setup>
const skillGroups = [
  {
    name: '前端技术',
    icon: 'lucide:layout',
    skills: ['Vue 2', 'Vue 3', 'Nuxt', 'React', 'Element UI', 'Element Plus', 'ECharts', 'Axios', 'Tailwind CSS', 'HTML/CSS', 'JavaScript'],
  },
  {
    name: '后端技术',
    icon: 'lucide:server',
    skills: ['Java', 'Spring Boot', 'Spring Cloud', 'Spring MVC', 'MyBatis', 'MyBatis Plus', 'RESTful API'],
  },
  {
    name: '数据库 & 中间件',
    icon: 'lucide:database',
    skills: ['MySQL', 'Oracle', 'KingBaseES', 'Redis', 'Quartz', 'PowerJob'],
  },
  {
    name: '工具 & 其他',
    icon: 'lucide:wrench',
    skills: ['Git', 'Linux', 'Maven', 'Vite', 'Nginx', 'Tauri', 'Rust'],
  },
]
</script>
