<template>
  <div class="star-field">
    <canvas ref="starCanvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const starCanvas = ref(null)
const stars = ref([])
const starCount = 500
const speed = 10
let ctx = null

const createStar = (canvas) => ({
  x: (Math.random() - 0.5) * canvas.width,
  y: (Math.random() - 0.5) * canvas.height,
  z: Math.random() * canvas.width,
})

const initStars = (canvas) => {
  stars.value = Array.from({ length: starCount }, () => createStar(canvas))
}

const animate = () => {
  if (!ctx || !starCanvas.value) return

  const canvas = starCanvas.value
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  for (const star of stars.value) {
    star.z -= speed

    if (star.z <= 0) {
      Object.assign(star, createStar(canvas))
      star.z = canvas.width
    }

    const k = 128 / star.z
    const x = star.x * k + canvas.width / 2
    const y = star.y * k + canvas.height / 2
    const radius = k

    ctx.beginPath()
    ctx.arc(x, y, radius, 0, Math.PI * 2)
    ctx.fillStyle = 'white'
    ctx.fill()
  }

  requestAnimationFrame(animate)
}

const resizeCanvas = () => {
  const canvas = starCanvas.value

  if (!canvas) return

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  initStars(canvas)
}

onMounted(() => {
  const canvas = starCanvas.value
  if (!canvas) return

  ctx = canvas.getContext('2d')

  resizeCanvas()
  animate()

  window.addEventListener('resize', resizeCanvas)
})

onUnmounted(() => {
  window.removeEventListener('resize', resizeCanvas)
})
</script>

<style scoped>
.star-field {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: black;
}
</style>
