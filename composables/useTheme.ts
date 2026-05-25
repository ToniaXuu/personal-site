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

  function updateTheme() {
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

  function setMode(m) {
    mode.value = m
    updateTheme()
  }

  function setCustomTime(lightStart, darkStart) {
    customTime.value = { lightStart, darkStart }
    if (mode.value === 'custom') updateTheme()
  }

  if (import.meta.client) {
    onMounted(() => {
      updateTheme()

      const mq = window.matchMedia('(prefers-color-scheme: dark)')
      const handler = () => {
        if (mode.value === 'system') updateTheme()
      }
      mq.addEventListener('change', handler)

      const timer = setInterval(() => {
        if (mode.value === 'custom') updateTheme()
      }, 60000)

      onUnmounted(() => {
        clearInterval(timer)
        mq.removeEventListener('change', handler)
      })
    })
  }

  return { mode, customTime, isDark, setMode, setCustomTime, updateTheme }
}
