<script setup lang="ts">
const items = [{
  label: 'Visi',
  slot: 'visi',
  content: 'This is the content shown for Tab1',
}, {
  label: 'Tujuan',
  slot: 'tujuan',
  content: 'And, this is the content for Tab2',
}, {
  label: 'Misi',
  slot: 'misi',
  content: 'Finally, this is the content for Tab3',
}]
</script>

<template>
  <UContainer>
    <UTabs

      :default-index="1" :items="items"
    />
  </UContainer>
</template>
