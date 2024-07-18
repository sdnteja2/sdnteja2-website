<script setup lang="ts">
const { page } = useContent()

defineOgImageComponent('PageDefault', {
  title: page.value.title,
  description: page.value.description,
})
</script>

<template>
  <div>
    <slot />
  </div>
</template>
