<!-- eslint-disable ts/ban-ts-comment -->
<script setup lang="ts">
import { withTrailingSlash } from 'ufo'

const props = defineProps({
  path: {
    type: String,
    default: 'berita',
  },
})

const { data: _berita } = await useAsyncData('berita', async () => await queryContent(withTrailingSlash(props.path)).sort({ date: -1 }).find())

const beritas = computed(() => _berita.value || [])
</script>

<template>
  <UContainer v-if="beritas?.length" class="py-4 md:py-8">
    <div class="max-w-3xl  mx-auto ">
      <div
        class="grid grid-cols-1 gap-6"
      >
        <div>
          <BeritaCard v-for="(berita, index) in beritas" :key="index" :berita="berita" />
        </div>
      </div>
    </div>
  </UContainer>
  <div v-else class="tour">
    <p>Seems like there are no beritas yet.</p>
    <p>
      You can start by
      <!-- eslint-disable-next-line -->
      <ProseA href="https://alpine.nuxt.space/beritas/write-beritas">creating</ProseA> one in the <ProseCodeInline>beritas</ProseCodeInline> folder.
    </p>
  </div>
</template>
