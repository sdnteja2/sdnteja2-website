<script setup lang="ts">
interface Sekolah {
  name: string
  value: string
}

interface SelayangPandang {
  nama: string
  jabatan: string
  poto: string
  ucapan: string
}

defineProps({
  dataSekolah: {
    type: Array as () => Sekolah[],
    default: () => ([
      { name: 'Nama Sekolah', value: 'SDN Teja II' },
      { name: 'NPSN', value: '20246133' },
      { name: 'Jenjang Pendidikan', value: 'Sekolah Dasar (SD)' },
      { name: 'Status Sekolah', value: 'Negeri' },
      { name: 'Alamat Sekolah', value: 'Blok Desa, Desa Teja' },
      { name: 'Kecamatan', value: 'Rajagaluh' },
      { name: 'Kabupaten', value: 'Majalengka' },
      { name: 'Provinsi', value: 'Jawa Barat' },
      { name: 'Kode Pos', value: '45472' },
      { name: 'Titik Koordinat', value: '-6.821242097490107, 108.34612476589537' },
    ]),
  },
  profilUrl: {
    type: String,
    default: '/',
  },
  selayangPandang: {
    type: Object as () => SelayangPandang,
    default: () => ({
      nama: 'Yusup, S.Pd.',
      jabatan: 'Head of Finance',
      poto: 'https://images.unsplash.com/photo-1671726203390-cdc4354ee2eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
      ucapan: 'To say that switching to Preline has been life-changing is an understatement. My business has tripled and I got my life back.',
    }),
  },
})

const columns = [{
  key: 'name',
}, {
  key: 'value',
}]
</script>

<template>
  <UContainer>
    <section class="flex flex-col md:flex-row gap-8">
      <div class="w-full overflow-hidden md:w-1/2">
        <UCard
          data-aos="flip-up"
          :ui="
            { header: {
              base: '',
              background: '',
              padding: 'px-4 py-2 sm:px-6',
            } }" class="h-auto"
        >
          <template #header>
            <h2 class="headline md:text-4xl mb-0 py-0">
              Selayang Pandang
            </h2>
          </template>
          <blockquote>
            <p class="text-xl font-medium text-gray-800 lg:text-2xl lg:leading-normal dark:text-neutral-200">
              {{ selayangPandang.ucapan }}
            </p>
            <footer class="mt-6">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <NuxtImg
                    class="size-12 rounded-full"
                    :src="selayangPandang.poto"
                    :title="selayangPandang.nama"
                    :alt="selayangPandang.nama"
                    format="webp"
                    height="500"
                    sizes="100vw sm:100vw md:100vw lg:100px"
                    width="500"
                    :placeholder="[100, 60, 35, 5]"
                  />
                </div>
                <div class="ms-4 lg:ms-0">
                  <p class="font-medium text-gray-800 dark:text-neutral-200">
                    {{ selayangPandang.nama }}
                  </p>
                  <p class="text-sm text-gray-600 dark:text-neutral-400">
                    {{ selayangPandang.jabatan }}
                  </p>
                </div>
              </div>
            </footer>
          </blockquote>
        </UCard>
      </div>

      <div class="w-full overflow-hidden md:w-1/2">
        <UCard
          data-aos="flip-up"
          :ui="
            { header: {
              base: '',
              background: '',
              padding: 'px-4 py-2 sm:px-6',
            } }" class="h-auto"
        >
          <template #header>
            <h2 class="headline mb-0 py-0 md:text-4xl">
              Profil Sekolah
            </h2>
          </template>
          <UTable
            :ui="
              {

                th: {
                  base: 'text-left rtl:text-right ',
                  padding: 'px-4 py-0',
                  color: 'text-gray-900 dark:text-white',
                  font: 'font-semibold',
                },
                td: {
                  base: 'whitespace-nowrap  ',
                  padding: 'px-4 py-0',
                  color: 'text-gray-500 dark:text-gray-400',
                  font: '',
                  size: 'text-sm',
                } }" class="text-base space-y-0 leading-none" :columns="columns" :rows="dataSekolah"
          />
          <template #footer>
            <div v-if="profilUrl">
              <UButton
                color="primary"
                :to="profilUrl"
                block
                target="_blank"
              >
                Lihat Detail
              </UButton>
            </div>
          </template>
        </UCard>
      </div>
    </section>
  </UContainer>
</template>

<style scoped></style>
