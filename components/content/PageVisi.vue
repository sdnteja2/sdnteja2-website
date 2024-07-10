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
    >
      <template #visi="{ item }">
        <UCard>
          <template #header>
            <p class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
              {{ item.label }}
            </p>
            <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
              {{ item.content }}
            </p>
          </template>
          <template #footer>
            <UButton type="submit" color="black">
              Save account
            </UButton>
          </template>
        </UCard>
      </template>
    </UTabs>
  </UContainer>
</template>
