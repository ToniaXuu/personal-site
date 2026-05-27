import { useStorage } from '@vueuse/core'

export const useTheme = () => {
  const mode = useStorage('theme-mode', 'system')
  const customTime = useStorage('theme-custom-time', {
    lightStart: '06:00',
    darkStart: '18:00',
  })

  const isDark = useState('theme-is-dark', () => true)

  function getSystemDark() {
    if (import.meta.client) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return true
  }

  function getCustomDark() {
    if (!import.meta.client) return true
    const now = new Date()
    const currentMinutes = now.getHours() * 60 + now.getMinutes()
    const [lh, lm] = customTime.value.lightStart.split(':').map(Number)
    const [dh, dm] = customTime.value.darkStart.split(':').map(Number)
    const lightMinutes = lh * 60 + lm
    const darkMinutes = dh * 60 + dm

    if (lightMinutes < darkMinutes) {
      return currentMinutes < lightMinutes || currentMinutes >= darkMinutes
    }
    return currentMinutes >= darkMinutes && currentMinutes < lightMinutes
  }

  function applyTheme() {
    if (!import.meta.client) return
    let dark
    switch (mode.value) {
      case 'dark': dark = true; break
      case 'light': dark = false; break
      case 'custom': dark = getCustomDark(); break
      case 'system':
      default: dark = getSystemDark(); break
    }
    isDark.value = dark
    document.documentElement.classList.toggle('dark', dark)
    document.documentElement.classList.toggle('light', !dark)
  }

  /**
   * 带圆形扩散动画的主题切换
   * @param x - 动画起始 X 坐标（视口坐标）
   * @param y - 动画起始 Y 坐标（视口坐标）
   */
  function animateThemeSwitch(x?: number, y?: number) {
    if (!import.meta.client) return

    // 设置动画起始坐标
    if (x !== undefined && y !== undefined) {
      document.documentElement.style.setProperty('--vt-x', `${x}px`)
      document.documentElement.style.setProperty('--vt-y', `${y}px`)
    }

    // 使用 View Transition API
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        applyTheme()
      })
    } else {
      // 降级：不支持 View Transition 的浏览器直接切换
      applyTheme()
    }
  }

  function setMode(m: string, event?: MouseEvent) {
    mode.value = m
    if (event) {
      animateThemeSwitch(event.clientX, event.clientY)
    } else {
      applyTheme()
    }
  }

  function setCustomTime(lightStart: string, darkStart: string) {
    customTime.value = { lightStart, darkStart }
    if (mode.value === 'custom') applyTheme()
  }

  if (import.meta.client) {
    onMounted(() => {
      applyTheme()

      const mq = window.matchMedia('(prefers-color-scheme: dark)')
      const handler = () => {
        if (mode.value === 'system') applyTheme()
      }
      mq.addEventListener('change', handler)

      const timer = setInterval(() => {
        if (mode.value === 'custom') applyTheme()
      }, 60000)

      onUnmounted(() => {
        clearInterval(timer)
        mq.removeEventListener('change', handler)
      })
    })
  }

  return { mode, customTime, isDark, setMode, setCustomTime, updateTheme: applyTheme }
}
