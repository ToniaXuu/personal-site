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
            <h3 class="text-lg font-semibold text-[#f1f5f9] mb-4 flex items-center gap-2">
              <Icon :name="group.icon" size="20" class="text-cyan-400" />
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
    name: '前端框架',
    icon: 'lucide:layout',
    skills: ['Vue 3', 'React', 'Nuxt', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Pinia', 'Redux'],
  },
  {
    name: '后端 & 数据库',
    icon: 'lucide:server',
    skills: ['Node.js', 'Express', 'NestJS', 'PostgreSQL', 'MongoDB', 'Redis', 'Prisma'],
  },
  {
    name: '工具 & 运维',
    icon: 'lucide:wrench',
    skills: ['Git', 'Docker', 'Vercel', 'CI/CD', 'Nginx', 'Linux', 'Webpack/Vite'],
  },
  {
    name: '设计 & 其他',
    icon: 'lucide:palette',
    skills: ['Figma', 'Responsive Design', 'Agile/Scrum', 'RESTful API', 'GraphQL'],
  },
]
</script>
