<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: 'Selamat datang di website SDN TEJA II',
  },
  description: {
    type: String,
    default: 'Wujudkan Impian Pendidikan Berkualitas untuk Semua, Lingkungan Belajar yang Nyaman, Kreatif, dan Menyenangkan',
  },
  image: {
    type: String,
    default: 'https://dummyimage.com/400x400',
  },
  cta: {
    type: String,
    default: 'Tentang Kami',
  },
  url: {
    type: String,
    default: '/',
  },

})
const isLoaded = ref(false)
</script>

<template>
  <UContainer>
    <div class="max-w-[85rem] overflow-hidden mx-auto ">
      <div data-aos="flip-up" class="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
        <div>
          <h1 class="block text-4xl   sm:text-4xl lg:text-6xl lg:leading-tight text-balance  ">
            {{ title }}
          </h1>
          <p class="mt-3 text-lg   ">
            {{ description }}
          </p>

          <div class="mt-7  ">
            <UButton :to="url" color="primary" variant="solid" size="lg" :label="cta" />
          </div>
        </div>

        <div data-aos="flip-up" class="relative  ">
          <NuxtImg
            v-show="isLoaded"
            loading="lazy"
            class="w-full h-64 md:h-[350px] bg-cover object-cover bg-center rounded-md"
            :src="image"
            title="SDN Teja 2"
            alt="SDN Teja 2"
            format="webp"
            height="500"
            sizes="100vw sm:100vw md:100vw lg:100px"
            width="500"
            :placeholder="[100, 60, 35, 5]"
            @load="isLoaded = true"
          />
          <USkeleton
            v-show="!isLoaded"
            class="w-full h-full object-cover rounded"
            :ui="{ rounded: 'rounded' }"
          />

          <!-- SVG -->

          <!-- End SVG -->
        </div>
        <!-- End Col -->
      </div>
      <!-- End Grid -->
    </div>
  </UContainer>
</template>

<style scoped></style>
