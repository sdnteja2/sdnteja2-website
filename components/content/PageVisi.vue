<script setup lang="ts">
import type { TabItem } from '#ui/types'

defineProps({
  items: {
    type: Array as () => TabItem[],
    default: () => ([]),
  },
  fasilitas: {
    type: Array as () => { image: string, label: string }[],
    default: () => ([]),
  },
  title: {
    type: String,
    default: '',
  },
})

const carouselRef = ref()
onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value)
      return

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0)
    }

    carouselRef.value.next()
  }, 1500)
})
</script>

<template>
  <UContainer>
    <div class="flex flex-col md:flex-row gap-8">
      <div data-aos="flip-up" class="md:w-1/2 overflow-hidden">
        <div>
          <h2 class="headline">
            Fasilitas
          </h2>
        </div>

        <UCarousel
          ref="carouselRef"
          v-slot="{ item }" :items="fasilitas" :ui="{ item: 'basis-full' }" class="rounded-lg overflow-hidden" arrows indicators
        >
          <NuxtImg :src="item.image" class="w-full" draggable="false" />
          <div class="absolute w-full top-0 bg-gelap/50">
            <p class="text-center">
              {{ item.label }}
            </p>
          </div>
        </UCarousel>
      </div>
      <div data-aos="flip-up" class="md:w-1/2 overflow-hidden">
        <div>
          <h2 class="headline">
            Visi, Misi, dan Tujuan
          </h2>
        </div>
        <UTabs :default-index="1" :items="items">
          <template #visi="{ item }">
            <UCard>
              <template #header>
                <div class="flex md:flex-row flex-col gap-4 justify-between">
                  <div>
                    <h2 class=" ">
                      {{ item.label }}
                    </h2>
                    <p class="mt-1  ">
                      {{ item.content }}
                    </p>
                  </div>
                </div>
              </template>
            </UCard>
          </template>
          <template #tujuan="{ item }">
            <UCard>
              <template #header>
                <div class="flex md:flex-row flex-col gap-4 justify-between">
                  <div>
                    <h2 class=" ">
                      {{ item.label }}
                    </h2>
                    <ol class="mt-1 list-decimal ml-6 ">
                      <li v-for="(bullet, index) in item.content" :key="index">
                        {{ bullet }}
                      </li>
                    </ol>
                  </div>
                </div>
              </template>
            </UCard>
          </template>
          <template #misi="{ item }">
            <UCard>
              <template #header>
                <div class="flex md:flex-row flex-col gap-4 justify-between">
                  <div>
                    <h2 class=" ">
                      {{ item.label }}
                    </h2>
                    <ol class="mt-1 list-decimal ml-6 ">
                      Untuk mencapai visi tersebut melalui misi sebagai berikut:
                      <li v-for="(bullet, index) in item.content" :key="index">
                        {{ bullet }}
                      </li>
                    </ol>
                  </div>
                </div>
              </template>
            </UCard>
          </template>
        </UTabs>
      </div>
    </div>
  </UContainer>
</template>

<style scoped>
/* Add any specific styles if needed */
</style>
