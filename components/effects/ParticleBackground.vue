<template>
  <canvas ref="canvas" class="fixed inset-0 z-[-1] pointer-events-none" />
</template>

<script setup>
const canvas = ref(null)
const particles = []
const ripples = []
const mouse = { x: -9999, y: -9999, tx: -9999, ty: -9999, active: false }
let ctx, w, h, animId
let frame = 0

function handleMouse(e) {
  mouse.tx = e.clientX
  mouse.ty = e.clientY
  mouse.active = true
}
function handleMouseLeave() { mouse.active = false }
function handleClick(e) {
  ripples.push({
    x: e.clientX,
    y: e.clientY,
    radius: 0,
    maxRadius: 200,
    alpha: 1,
    force: 1,
  })
  // 限制涟漪数量
  if (ripples.length > 5) ripples.shift()
}
function handleResize() { resize() }

const PARTICLE_COUNT = 120
const PARTICLE_COUNT_MOBILE = 40
const MAX_DIST = 160
const MAX_DIST_MOBILE = 100
const MOUSE_RADIUS = 150
const MOUSE_CONNECT_RADIUS = 200

// 深色主题：明亮发光的颜色
const DARK_COLORS = [
  '#4ade80', // green
  '#a78bfa', // purple
  '#60a5fa', // blue
  '#f472b6', // pink
  '#34d399', // emerald
  '#fbbf24', // amber
]

// 浅色主题：深饱和色，在白底上清晰可见
const LIGHT_COLORS = [
  '#4338ca', // indigo
  '#7c3aed', // violet
  '#be185d', // deep pink
  '#0e7490', // dark cyan
  '#b45309', // dark amber
  '#047857', // dark emerald
]

class Particle {
  constructor(initial = false) {
    this.reset(initial)
  }

  reset(initial = false) {
    this.x = initial ? Math.random() * w : (Math.random() - 0.5) * w * 0.8 + w * 0.5
    this.y = initial ? Math.random() * h : (Math.random() - 0.5) * h * 0.8 + h * 0.5
    this.vx = (Math.random() - 0.5) * 0.55
    this.vy = (Math.random() - 0.5) * 0.55
    this.baseR = Math.random() * 2.2 + 1
    this.r = this.baseR
    this.colorIdx = Math.floor(Math.random() * 6)
    this.baseAlpha = Math.random() * 0.45 + 0.3
    this.pulseSpeed = Math.random() * 0.025 + 0.01
    this.pulsePhase = Math.random() * Math.PI * 2
    this.isGlow = Math.random() < 0.22
    if (this.isGlow) {
      this.baseR = Math.random() * 3 + 3
      this.baseAlpha = Math.random() * 0.25 + 0.15
    }
  }

  update() {
    this.x += this.vx
    this.y += this.vy

    // 边缘环绕
    const pad = 40
    if (this.x < -pad) this.x = w + pad
    if (this.x > w + pad) this.x = -pad
    if (this.y < -pad) this.y = h + pad
    if (this.y > h + pad) this.y = -pad

    // 鼠标排斥力
    const dx = mouse.x - this.x
    const dy = mouse.y - this.y
    const dist = Math.sqrt(dx * dx + dy * dy)
    this.mouseDist = dist
    if (mouse.active && dist < MOUSE_RADIUS) {
      const force = Math.pow((MOUSE_RADIUS - dist) / MOUSE_RADIUS, 1.5)
      const angle = Math.atan2(dy, dx)
      this.x -= Math.cos(angle) * force * 1.8
      this.y -= Math.sin(angle) * force * 1.8
    }

    // 涟漪排斥力
    for (const rip of ripples) {
      if (rip.force <= 0) continue
      const rdx = rip.x - this.x
      const rdy = rip.y - this.y
      const rdist = Math.sqrt(rdx * rdx + rdy * rdy)
      const ringDist = Math.abs(rdist - rip.radius)
      const ringWidth = 30
      if (ringDist < ringWidth && rip.radius > 10) {
        const ringForce = (1 - ringDist / ringWidth) * rip.force * 0.6
        const angle = Math.atan2(rdy, rdx)
        this.x -= Math.cos(angle) * ringForce * 3
        this.y -= Math.sin(angle) * ringForce * 3
      }
    }

    // 脉冲动画
    const pulse = Math.sin(frame * this.pulseSpeed + this.pulsePhase) * 0.25 + 0.85
    this.r = this.baseR * pulse
    this.alpha = this.baseAlpha * pulse
  }

  getColor(isDark) {
    return (isDark ? DARK_COLORS : LIGHT_COLORS)[this.colorIdx]
  }

  draw(isDark) {
    const color = this.getColor(isDark)

    // 鼠标附近的粒子更亮
    const mouseBoost = mouse.active && this.mouseDist < MOUSE_RADIUS
      ? 1 + (1 - this.mouseDist / MOUSE_RADIUS) * 1.5
      : 1
    const displayAlpha = this.alpha * mouseBoost
    const displayR = this.r * (1 + (mouseBoost - 1) * 0.6)

    if (this.isGlow) {
      // 发光粒子：径向渐变光晕
      const glowR = displayR * 3.5
      const grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, glowR)
      grad.addColorStop(0, color)
      grad.addColorStop(0.35, color + '66')
      grad.addColorStop(1, 'transparent')
      ctx.beginPath()
      ctx.arc(this.x, this.y, glowR, 0, Math.PI * 2)
      ctx.fillStyle = grad
      ctx.globalAlpha = displayAlpha * 0.5
      ctx.fill()
    }

    // 核心粒子
    ctx.beginPath()
    ctx.arc(this.x, this.y, displayR, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.globalAlpha = displayAlpha
    ctx.fill()
  }
}

function init() {
  if (!canvas.value) return
  ctx = canvas.value.getContext('2d')
  resize()
  particles.length = 0
  const isMobile = w < 768
  const count = isMobile ? PARTICLE_COUNT_MOBILE : PARTICLE_COUNT
  for (let i = 0; i < count; i++) particles.push(new Particle(true))
  animate()
}

function resize() {
  if (!canvas.value) return
  canvas.value.width = w = window.innerWidth
  canvas.value.height = h = window.innerHeight
}

function animate() {
  frame++
  const isDark = document.documentElement.classList.contains('dark')
  const maxDist = w < 768 ? MAX_DIST_MOBILE : MAX_DIST

  // 鼠标平滑缓动跟随
  mouse.x += (mouse.tx - mouse.x) * 0.07
  mouse.y += (mouse.ty - mouse.y) * 0.07

  ctx.clearRect(0, 0, w, h)

  // 绘制鼠标光晕
  if (mouse.active) {
    const glowGrad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 160)
    const glowColor = isDark ? '255,255,255' : '99,102,241'
    glowGrad.addColorStop(0, `rgba(${glowColor},0.06)`)
    glowGrad.addColorStop(0.4, `rgba(${glowColor},0.03)`)
    glowGrad.addColorStop(1, 'transparent')
    ctx.beginPath()
    ctx.arc(mouse.x, mouse.y, 160, 0, Math.PI * 2)
    ctx.fillStyle = glowGrad
    ctx.globalAlpha = 1
    ctx.fill()
  }

  // 先画粒子间连线
  for (let i = 0; i < particles.length; i++) {
    const p = particles[i]
    for (let j = i + 1; j < particles.length; j++) {
      const q = particles[j]
      const dx = p.x - q.x
      const dy = p.y - q.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < maxDist) {
        const ratio = 1 - dist / maxDist
        const alpha = isDark ? ratio * 0.1 : ratio * 0.16
        ctx.beginPath()
        ctx.moveTo(p.x, p.y)
        ctx.lineTo(q.x, q.y)
        ctx.strokeStyle = p.getColor(isDark)
        ctx.globalAlpha = alpha
        ctx.lineWidth = ratio * 1
        ctx.stroke()
      }
    }
    p.update()
  }

  // 绘制鼠标与附近粒子的连线
  if (mouse.active) {
    for (const p of particles) {
      if (p.mouseDist < MOUSE_CONNECT_RADIUS) {
        const ratio = 1 - p.mouseDist / MOUSE_CONNECT_RADIUS
        const alpha = ratio * 0.15
        ctx.beginPath()
        ctx.moveTo(mouse.x, mouse.y)
        ctx.lineTo(p.x, p.y)
        ctx.strokeStyle = p.getColor(isDark)
        ctx.globalAlpha = alpha
        ctx.lineWidth = ratio * 1.2
        ctx.stroke()
      }
    }
  }

  // 更新并绘制涟漪
  for (let i = ripples.length - 1; i >= 0; i--) {
    const rip = ripples[i]
    rip.radius += 3
    rip.alpha -= 0.015
    rip.force = rip.alpha

    if (rip.alpha <= 0 || rip.radius > rip.maxRadius) {
      ripples.splice(i, 1)
      continue
    }

    ctx.beginPath()
    ctx.arc(rip.x, rip.y, rip.radius, 0, Math.PI * 2)
    const rippleColor = isDark ? '255,255,255' : '99,102,241'
    ctx.strokeStyle = `rgba(${rippleColor},${rip.alpha * 0.2})`
    ctx.lineWidth = 2
    ctx.globalAlpha = 1
    ctx.stroke()
  }

  // 再画粒子（覆盖在连线上层）
  for (const p of particles) {
    p.draw(isDark)
  }

  ctx.globalAlpha = 1
  animId = requestAnimationFrame(animate)
}

onMounted(() => {
  init()
  window.addEventListener('resize', handleResize)
  window.addEventListener('mousemove', handleMouse)
  window.addEventListener('mouseleave', handleMouseLeave)
  window.addEventListener('click', handleClick)
})

onUnmounted(() => {
  cancelAnimationFrame(animId)
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('mousemove', handleMouse)
  window.removeEventListener('mouseleave', handleMouseLeave)
  window.removeEventListener('click', handleClick)
})
</script>
