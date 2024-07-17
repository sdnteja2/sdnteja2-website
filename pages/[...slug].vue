<!-- pages -->
<script setup lang="ts">
const { page } = useContent()

defineOgImageComponent('Default', {
  title: page.value?.title,
  description: page.value?.description,
})
</script>

<template>
  <div class="pt-10">
    <NuxtLayout>
      <ContentDoc />
    </NuxtLayout>
  </div>
</template>
