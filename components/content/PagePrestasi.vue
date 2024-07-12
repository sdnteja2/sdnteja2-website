<script setup lang="ts">
interface Prestasi {
  tahun: string
  lomba: string
  peringkat: string
  siswa: string
}

defineProps({
  dataPrestasi: {
    type: Array as () => Prestasi[],
    default: () => ([
      { tahun: '2024', lomba: 'OSN Matematika', peringkat: '1', siswa: 'Farhan Muhaemin A. ' },
    ]),
  },

})

const columns = [{
  key: 'tahun',
  label: 'Tahun',
  sortable: true,
  direction: 'desc' as const,
}, {
  key: 'lomba',
  label: 'Lomba',

}, {
  key: 'peringkat',
  label: 'Peringkat',
  sortable: true,
}, {
  key: 'siswa',
  label: 'Siswa',

}]

// const prestasi = [{
//   tahun: '2024',
//   lomba: 'OSN Matematika',
//   peringkat: '1',
//   siswa: 'Farhan Muhaemin A. ',

// }, {

//   lomba: 'Siswa Berprestasi',
//   siswa: 'Sindi Dewi N.',
//   tahun: '2024',
//   peringkat: '3',

// }, {

//   lomba: 'Voli',
//   siswa: 'Tim Bola Voli Putra',
//   tahun: '2023',
//   peringkat: '1',

// }]
</script>

<template>
  <UContainer class="py-16">
    <div class="pb-8">
      <h2 data-aos="fade-up" data-aos-anchor-placement="top-bottom" class="headline">
        PRESTASI SDN TEJA II
      </h2>
    </div>
    <UCard data-aos="fade-up" data-aos-anchor-placement="top-bottom">
      <UTable class="max-w-5xl mx-auto" :columns="columns" :rows="dataPrestasi" />
    </UCard>
  </UContainer>
</template>
