<script setup lang="ts">
const myBar = ref<HTMLElement | null>(null)

function updateProgressBar() {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
  const scrolled = (winScroll / height) * 100
  if (myBar.value) {
    myBar.value.style.width = `${scrolled}%`
  }
}

function resetProgressBar() {
  if (myBar.value) {
    myBar.value.style.width = '0%'
  }
}

const router = useRouter()

router.afterEach(() => {
  resetProgressBar()
  window.scrollTo(0, 0)
  updateProgressBar()
})

onMounted(() => {
  window.addEventListener('scroll', updateProgressBar)
  updateProgressBar()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateProgressBar)
})
</script>

<template>
  <div>
    <div id="myBar" ref="myBar" class="w-full fixed top-0 z-50 h-1 bg-merah" />
  </div>
</template>
