<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useWindowScroll } from '@vueuse/core'

const myBar = ref<HTMLElement | null>(null)
const { y } = useWindowScroll()

function updateProgressBar() {
  const winScroll = y.value
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

watch(y, updateProgressBar)

onMounted(() => {
  updateProgressBar()
})
</script>

<template>
  <div>
    <div id="myBar" ref="myBar" class="w-full fixed top-0 z-50 h-1 bg-merah" />
  </div>
</template>

<style scoped>
#myBar {
  transition: width 0.1s ease-in-out;
}
</style>
