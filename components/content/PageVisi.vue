<script setup lang="ts">
// Definisikan props
defineProps({
  items: {
    type: Array,
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
    <div>
      <h2 class="headline">
        {{ title }}
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
              <NuxtImg class="rounded" :src="item.image" />
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
              <NuxtImg :src="item.image" />
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
              <NuxtImg :src="item.image" />
            </div>
          </template>
        </UCard>
      </template>
    </UTabs>
  </UContainer>
</template>
