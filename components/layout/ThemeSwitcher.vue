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
        <div class="text-[11px] font-semibold uppercase tracking-wider mb-2 px-1" style="color: var(--color-text-muted)">
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
          <Icon v-if="mode === opt.value" name="lucide:check" size="14" class="ml-auto text-green-500" />
        </button>

        <!-- 自定义时间设置 -->
        <div v-if="mode === 'custom'" class="mt-3 pt-3 custom-time-panel">
          <div class="text-[11px] font-semibold mb-3 px-1" style="color: var(--color-text-muted)">
            浅色时间段
          </div>

          <!-- Light start -->
          <div class="time-row">
            <div class="time-icon time-icon-light">
              <Icon name="lucide:sunrise" size="15" />
            </div>
            <div class="time-label">开始</div>
            <input
              type="time"
              v-model="localLightStart"
              class="theme-input"
              @input="onTimeChange"
              @change="onTimeChange"
            />
          </div>

          <!-- Dark start -->
          <div class="time-row mt-2">
            <div class="time-icon time-icon-dark">
              <Icon name="lucide:sunset" size="15" />
            </div>
            <div class="time-label">结束</div>
            <input
              type="time"
              v-model="localDarkStart"
              class="theme-input"
              @input="onTimeChange"
              @change="onTimeChange"
            />
          </div>

          <!-- Current period indicator -->
          <div class="current-period mt-3">
            <span class="period-dot" :class="isDark ? 'period-dark' : 'period-light'" />
            当前为 <strong>{{ isDark ? '深色模式' : '浅色模式' }}</strong>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Click outside to close -->
    <div v-if="open" class="fixed inset-0 z-[59]" @click="closeDropdown" />
  </div>
</template>

<script setup>
const { mode, customTime, isDark, setMode, setCustomTime } = useTheme()
const open = ref(false)

// 本地时间副本，实现 v-model 双向绑定
const localLightStart = ref(customTime.value.lightStart)
const localDarkStart = ref(customTime.value.darkStart)

// 外部 customTime 变化时同步到本地
watch(() => customTime.value, (val) => {
  localLightStart.value = val.lightStart
  localDarkStart.value = val.darkStart
}, { deep: true })

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
  // 选择自定义时间时保持菜单打开，展示时间选择器
  if (m !== 'custom') {
    open.value = false
  }
}

function onTimeChange() {
  setCustomTime(localLightStart.value, localDarkStart.value)
}

function closeDropdown() {
  // 先提交当前时间值
  if (mode.value === 'custom') {
    setCustomTime(localLightStart.value, localDarkStart.value)
  }
  open.value = false
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
  min-width: 220px;
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

/* ===== 自定义时间面板 ===== */
.custom-time-panel {
  border-top: 1px solid var(--color-border);
}

.time-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.time-icon {
  width: 30px;
  height: 30px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.time-icon-light {
  background: rgba(251, 191, 36, 0.12);
  color: #fbbf24;
}
.time-icon-dark {
  background: rgba(139, 92, 246, 0.12);
  color: #8b5cf6;
}

.time-label {
  font-size: 12px;
  color: var(--color-text-muted);
  flex-shrink: 0;
  width: 28px;
}

.theme-input {
  flex: 1;
  padding: 6px 8px;
  border-radius: 8px;
  border: 1px solid var(--color-border);
  background: var(--glass-bg);
  color: var(--color-text);
  font-size: 13px;
  font-family: 'SF Mono', 'Fira Code', monospace;
  outline: none;
  cursor: pointer;
  transition: border-color 0.2s;
  min-width: 0;
}
.theme-input:focus {
  border-color: var(--color-accent-emerald);
  box-shadow: 0 0 0 2px rgba(74, 222, 128, 0.12);
}
.theme-input::-webkit-calendar-picker-indicator {
  filter: invert(0.5);
  cursor: pointer;
}

/* ===== 当前时间段指示 ===== */
.current-period {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
  border-radius: 8px;
  background: var(--glass-bg);
  font-size: 12px;
  color: var(--color-text-muted);
}
.current-period strong {
  color: var(--color-text);
}
.period-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.period-dot.period-light {
  background: #fbbf24;
  box-shadow: 0 0 6px rgba(251, 191, 36, 0.5);
}
.period-dot.period-dark {
  background: #8b5cf6;
  box-shadow: 0 0 6px rgba(139, 92, 246, 0.5);
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
