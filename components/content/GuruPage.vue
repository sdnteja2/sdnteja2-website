<script setup lang="ts">
interface SosialMedia {
  name: string
  url: string
}

interface Guru {
  nama: string
  poto: string
  jabatan: string
  quote: string
  sosialmedia: SosialMedia[]
}

defineProps({
  guru: {
    type: Array as () => Guru[],
    default: () => ([
      {
        nama: 'Nama',
        poto: 'https://example.com/johndoe.jpg',
        jabatan: 'Jabatan Guru',
        quote: 'Quote Guru',
        sosialmedia: [
          {
            name: 'Twitter',
            url: '/',
          },
          {
            name: 'LinkedIn',
            url: '/',
          },
        ],
      },

    ]),
  },
})

const { getIcon } = useSocialMediaIcons()
</script>

<template>
  <UContainer>
    <div class="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="g in guru" :key="g.nama">
        <UCard
          :ui="
            {
              base: ' first-letter:',
              background: 'bg-white dark:bg-gelap-900',
              ring: 'ring-1 ring-gray-200 dark:ring-gelap-800',

            }"
          class="cardHover h-full"
        >
          <template #default>
            <div class="flex items-center gap-x-4">
              <NuxtImg
                height="500"
                width="500"
                sizes="100vw sm:100vw md:100vw lg:100px"
                class="rounded-full size-20"
                loading="lazy"
                :title="g.nama"
                :src="g.poto"
                :alt="g.nama"
              />
              <div class="grow">
                <h2 class="font-bold tracking-normal text-lg md:text-2xl ">
                  {{ g.nama }}
                </h2>
                <p class="text-xs uppercase dark:text-kuning ">
                  {{ g.jabatan }}
                </p>
              </div>
            </div>
            <p class="mt-3 italic ">
              "{{ g.quote }}"
            </p>
          </template>
          <template #footer>
            <div class="flex justify-end space-x-2">
              <UButton
                v-for="sosmed in g.sosialmedia"
                :key="sosmed.url"
                :href="sosmed.url"
                target="_blank"
                variant="ghost"
                color="gray"
                :icon="getIcon(sosmed.name)"
                size="sm"
              />
            </div>
          </template>
        </UCard>
      </div>
    </div>
  </UContainer>
</template>

<style scoped></style>
