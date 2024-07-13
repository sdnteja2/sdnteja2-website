<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: 'Halaman SDN Teja II',
  },
})
</script>

<template>
  <UContainer>
    <div>
      <h1 class="headline text-center">
        {{ title }}
      </h1>
    </div>
  </UContainer>
</template>
