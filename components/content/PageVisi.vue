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
</script>

<template>
  <UContainer>
    <div class="flex flex-col md:flex-row gap-8">
      <div class="md:w-1/2">
        <div>
          <h2 class="headline">
            Fasilitas
          </h2>
        </div>
        <Swiper
          :style="{
            '--swiper-navigation-color': '#F22727',
            '--swiper-pagination-color': '#F22727',
            '--swiper-navigation-size': '20px',
            '--swiper-pagination-bullet-inactive-opacity': '0.5',
            '--swiper-pagination-bullet-inactive-color': '#F22727',
            '--swiper-pagination-bottom': '0px',
          }"
          :height="300"
          :modules="[SwiperAutoplay, SwiperNavigation, SwiperEffectCreative, SwiperPagination]"
          :slides-per-view="1"
          :pagination="true"
          :navigation="true"
          :loop="true"
          effect="creative"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: true,
          }"
          :creative-effect="{
            prev: {
              shadow: false,
              translate: ['-20%', 0, -1],
            },
            next: {
              translate: ['100%', 0, 0],
            },
          }"
        >
          <SwiperSlide
            v-for="(slide, idx) in fasilitas"
            :key="idx"
          >
            <div class="dark:bg-gelap-900 bg-slate-50">
              <UCard
                :ui="
                  {
                    body: {
                      base: '',
                      background: '',
                      padding: 'px-4 pt-1 sm:pt-1 sm:px-6',
                    },
                    header: {
                      base: '',
                      background: '',
                      padding: 'px-4 py-1 sm:px-6',
                    } }" class="mx-2"
              >
                <NuxtImg
                  height="300"
                  width="600"
                  :src="slide.image" alt="Fasilitas" class="w-ful rounded h-full object-cover"
                />
                <template #header>
                  <p class="text-center">
                    {{ slide.label }}
                  </p>
                </template>
              </UCard>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="md:w-1/2">
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
