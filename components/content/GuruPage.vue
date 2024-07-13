<script setup lang="ts">
interface SosialMedia {
  name: string
  url: string
}

interface Guru {
  nama: string
  nip: string
  poto: string
  jabatan: string
  sosialmedia: SosialMedia[]
}

defineProps({
  guru: {
    type: Array as () => Guru[],
    default: () => ([
    ]),
  },
})
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div v-for="g in guru" :key="g.nip">
      <UCard>
        <template #header>
          <img :src="g.poto" alt="Foto" class="w-full h-32 object-cover">
        </template>
        <template #default>
          <h3 class="text-xl font-semibold">
            {{ g.nama }}
          </h3>
          <p>{{ g.jabatan }}</p>
          <p>{{ g.nip }}</p>
        </template>
        <template #footer>
          <div class="flex space-x-2">
            <a v-for="sosmed in g.sosialmedia" :key="sosmed.url" :href="sosmed.url" target="_blank">
              {{ sosmed.name }}
            </a>
          </div>
        </template>
      </UCard>
    </div>
  </div>
</template>

<style scoped></style>
