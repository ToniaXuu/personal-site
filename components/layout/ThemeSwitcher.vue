<template>
  <div class="relative">
    <button
      class="theme-switch-btn"
      @click="open = !open"
      :title="currentLabel"
    >
      <Transition name="icon-swap" mode="out-in">
        <Icon v-if="isDark" key="moon" name="lucide:moon" size="18" />
        <Icon v-else key="sun" name="lucide:sun" size="18" />
      </Transition>
    </button>

    <Transition name="dropdown">
      <div v-if="open" class="theme-dropdown" @click.stop>
        <div class="text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider mb-2 px-1">
          主题模式
        </div>
        <button
          v-for="opt in options"
          :key="opt.value"
          class="theme-option"
          :class="{ active: mode === opt.value }"
          @click="selectMode(opt.value)"
        >
          <Icon :name="opt.icon" size="16" />
          <span>{{ opt.label }}</span>
          <Icon v-if="mode === opt.value" name="lucide:check" size="14" class="ml-auto text-cyan-500" />
        </button>

        <!-- 自定义时间设置 -->
        <div v-if="mode === 'custom'" class="mt-3 pt-3 border-t border-[var(--border)]">
          <div class="text-xs font-medium text-[var(--text-muted)] mb-2 px-1">
            自定义时间段
          </div>
          <div class="flex items-center gap-2 text-sm">
            <div class="flex-1 flex items-center gap-1.5">
              <Icon name="lucide:sunrise" size="14" class="text-amber-400 shrink-0" />
              <input
                type="time"
                :value="customTime.lightStart"
                @change="onLightStartChange"
                class="theme-input"
              />
            </div>
            <span class="text-[var(--text-muted)] text-xs">~</span>
            <div class="flex-1 flex items-center gap-1.5">
              <Icon name="lucide:sunset" size="14" class="text-orange-400 shrink-0" />
              <input
                type="time"
                :value="customTime.darkStart"
                @change="onDarkStartChange"
                class="theme-input"
              />
            </div>
          </div>
          <div class="text-[10px] text-[var(--text-muted)] mt-1.5 px-1">
            浅色 {{ customTime.lightStart }} ~ 深色 {{ customTime.darkStart }}
          </div>
        </div>
      </div>
    </Transition>

    <!-- Click outside to close -->
    <div v-if="open" class="fixed inset-0 z-[59]" @click="open = false" />
  </div>
</template>

<script setup>
const { mode, customTime, isDark, setMode, setCustomTime } = useTheme()
const open = ref(false)

const options = [
  { value: 'light', label: '浅色模式', icon: 'lucide:sun' },
  { value: 'dark', label: '深色模式', icon: 'lucide:moon' },
  { value: 'system', label: '跟随系统', icon: 'lucide:monitor' },
  { value: 'custom', label: '自定义时间', icon: 'lucide:clock' },
]

const currentLabel = computed(() => {
  return options.find(o => o.value === mode.value)?.label || '切换主题'
})

function selectMode(m) {
  setMode(m)
  open.value = false
}

function onLightStartChange(e) {
  setCustomTime(e.target.value, customTime.value.darkStart)
}

function onDarkStartChange(e) {
  setCustomTime(customTime.value.lightStart, e.target.value)
}
</script>

<style scoped>
.theme-switch-btn {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border);
  background: var(--glass-bg);
  color: var(--text-muted);
  cursor: pointer;
  transition: all 0.3s ease;
}
.theme-switch-btn:hover {
  color: var(--text);
  background: var(--glass-hover);
  border-color: var(--border-hover);
}

.theme-dropdown {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 200px;
  padding: 12px;
  border-radius: 14px;
  border: 1px solid var(--border);
  background: var(--glass-bg-strong);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  z-index: 60;
  box-shadow: 0 16px 48px rgba(0,0,0,0.2);
}

.theme-option {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 8px 10px;
  border-radius: 8px;
  border: none;
  background: transparent;
  color: var(--text-muted);
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s;
}
.theme-option:hover {
  background: var(--glass-hover);
  color: var(--text);
}
.theme-option.active {
  background: var(--accent-glow);
  color: var(--text);
}

.theme-input {
  width: 100%;
  padding: 4px 6px;
  border-radius: 6px;
  border: 1px solid var(--border);
  background: var(--glass-bg);
  color: var(--text);
  font-size: 12px;
  outline: none;
  cursor: pointer;
}
.theme-input:focus {
  border-color: var(--accent-cyan);
}

/* Transitions */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease;
}
.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-8px) scale(0.95);
}

.icon-swap-enter-active,
.icon-swap-leave-active {
  transition: all 0.2s ease;
}
.icon-swap-enter-from {
  opacity: 0;
  transform: rotate(-90deg) scale(0.5);
}
.icon-swap-leave-to {
  opacity: 0;
  transform: rotate(90deg) scale(0.5);
}
</style>
