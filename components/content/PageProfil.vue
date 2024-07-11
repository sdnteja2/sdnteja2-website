<script setup lang="ts">
const columns = [{
  key: 'name',
}, {
  key: 'value',
}]
const schoolData = [
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
]
</script>

<template>
  <UContainer>
    <section class="grid grid-cols-1 h-auto md:grid-cols-2 gap-8">
      <UCard data-aos="fade-up" data-aos-anchor-placement="top-bottom" class="  space-x-0">
        <template #header>
          <h2 class="headline">
            Profil Sekolah
          </h2>
        </template>
        <UTable class="text-base" :columns="columns" :rows="schoolData" />
        <template #footer>
          <div>
            <UButton
              color="primary"
              to="https://sekolah.data.kemdikbud.go.id/index.php/chome/profil/10946411-2cf5-e011-b2b8-71cae28b2adc"
              block
              target="_blank"
            >
              Lihat Detail
            </UButton>
          </div>
        </template>
      </UCard>
      <UCard class="max-h-min">
        <template #header>
          <h2 class="headline">
            Selayang Pandang
          </h2>
        </template>
        <blockquote>
          <p class="text-xl font-medium text-gray-800 lg:text-2xl lg:leading-normal dark:text-neutral-200">
            To say that switching to Preline has been life-changing is an understatement. My business has tripled and I got my life back.
          </p>
          <footer class="mt-6">
            <div class="flex items-center">
              <div class=" flex-shrink-0">
                <img class="size-12 rounded-full" src="https://images.unsplash.com/photo-1671726203390-cdc4354ee2eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description">
              </div>
              <div class="ms-4 lg:ms-0">
                <p class="font-medium text-gray-800 dark:text-neutral-200">
                  Nicole Grazioso
                </p>
                <p class="text-sm text-gray-600 dark:text-neutral-400">
                  Head of Finance
                </p>
              </div>
            </div>
          </footer>
        </blockquote>
      </UCard>
    </section>
  </UContainer>
</template>

<style scoped></style>
