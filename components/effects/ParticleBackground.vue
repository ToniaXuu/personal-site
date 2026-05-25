<template>
  <canvas ref="canvas" class="fixed inset-0 z-[-1] pointer-events-none" />
</template>

<script setup>
const canvas = ref(null)
const particles = []
const mouse = { x: -9999, y: -9999, r: 120 }
let ctx, w, h, animId

function handleMouse(e) { mouse.x = e.clientX; mouse.y = e.clientY }
function handleResize() { resize() }

const PARTICLE_COUNT = 80
const MAX_DIST = 140
const COLORS = ['#06b6d4', '#a855f7', '#10b981']

class Particle {
  constructor() {
    this.reset()
  }
  reset() {
    this.x = Math.random() * w
    this.y = Math.random() * h
    this.vx = (Math.random() - 0.5) * 0.5
    this.vy = (Math.random() - 0.5) * 0.5
    this.r = Math.random() * 2 + 1
    this.color = COLORS[Math.floor(Math.random() * COLORS.length)]
    this.opacity = Math.random() * 0.5 + 0.1
  }
  update() {
    this.x += this.vx
    this.y += this.vy
    if (this.x < -20) this.x = w + 20
    if (this.x > w + 20) this.x = -20
    if (this.y < -20) this.y = h + 20
    if (this.y > h + 20) this.y = -20

    // mouse interaction
    const dx = mouse.x - this.x
    const dy = mouse.y - this.y
    const dist = Math.sqrt(dx * dx + dy * dy)
    if (dist < mouse.r) {
      const force = (mouse.r - dist) / mouse.r
      this.x -= dx * force * 0.02
      this.y -= dy * force * 0.02
    }
  }
  draw() {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
    ctx.fillStyle = this.color
    ctx.globalAlpha = this.opacity
    ctx.fill()
  }
}

function init() {
  if (!canvas.value) return
  ctx = canvas.value.getContext('2d')
  resize()
  particles.length = 0
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(new Particle())
  }
  animate()
}

function resize() {
  if (!canvas.value) return
  canvas.value.width = w = window.innerWidth
  canvas.value.height = h = window.innerHeight
}

function animate() {
  ctx.clearRect(0, 0, w, h)

  // draw connections
  for (let i = 0; i < particles.length; i++) {
    const p = particles[i]
    for (let j = i + 1; j < particles.length; j++) {
      const q = particles[j]
      const dx = p.x - q.x
      const dy = p.y - q.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < MAX_DIST) {
        ctx.beginPath()
        ctx.moveTo(p.x, p.y)
        ctx.lineTo(q.x, q.y)
        ctx.strokeStyle = p.color
        ctx.globalAlpha = (1 - dist / MAX_DIST) * 0.1
        ctx.lineWidth = 0.5
        ctx.stroke()
      }
    }
    p.update()
    p.draw()
  }

  ctx.globalAlpha = 1
  animId = requestAnimationFrame(animate)
}

onMounted(() => {
  init()
  window.addEventListener('resize', handleResize)
  window.addEventListener('mousemove', handleMouse)
})

onUnmounted(() => {
  cancelAnimationFrame(animId)
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('mousemove', handleMouse)
})
</script>
