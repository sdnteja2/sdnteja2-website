<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: 'Halaman SDN Teja II',
  },
})
</script>

<template>
  <UContainer
    :ui="
      {
        base: 'mx-auto',
        padding: 'px-2 pt-10 pb-0 sm:pb-0 lg:pb-0 sm:pt-12 lg:pt-16 sm:px-6 lg:px-8 ',
        constrained: 'max-w-7xl',
      }"
  >
    <div>
      <h1 data-aos="flip-up" class="headline  text-center">
        {{ title }}
      </h1>
    </div>
  </UContainer>
</template>
