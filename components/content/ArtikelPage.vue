<script setup lang="ts">
import { withTrailingSlash } from 'ufo'

const props = defineProps({
  path: {
    type: String,
    default: 'artikel',
  },
})

const currentPage = ref(1)
const itemsPerPage = ref(12) // Sesuaikan jumlah item per halaman sesuai kebutuhan
const selectedTag = ref('Semua')

const { data: _articles } = await useAsyncData(props.path, async () => await queryContent(withTrailingSlash(props.path)).sort({ date: -1 }).find())

const articles = computed(() => _articles.value || [])

const filteredArticles = computed(() => {
  if (selectedTag.value === 'Semua') {
    return articles.value
  }
  return articles.value.filter(article => article.tags.includes(selectedTag.value))
})

const paginatedArticles = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return filteredArticles.value.slice(start, end)
})

const allTags = computed(() => {
  const tags = new Set()
  if (_articles.value) {
    _articles.value.forEach((article) => {
      if (article.tags) {
        article.tags.forEach((tag: string) => tags.add(tag))
      }
    })
  }
  return ['Semua', ...Array.from(tags)]
})
</script>

<template>
  <div v-if="articles?.length">
    <UContainer>
      <div class="flex pb-4 justify-center md:justify-end">
        <USelectMenu
          v-slot="{ open }"
          v-model="selectedTag"
          :popper="{ placement: 'bottom' }"
          class="w-60"
          :options="allTags as string[]"
        >
          <UButton
            color="gray"
            :aria-label="selectedTag"
            class="flex-1 justify-between"
          >
            <span class="capitalize">
              {{ selectedTag }}
            </span>
            <UIcon
              name="i-heroicons-chevron-right-20-solid"
              class="w-5 h-5 transition-transform text-gray-400 dark:text-gray-500"
              :class="[open && 'transform rotate-90']"
            />
          </UButton>
        </USelectMenu>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ArtikelCard v-for="(article, index) in paginatedArticles" :key="index" :article="article" />
      </div>
      <div class="mt-8 flex justify-center w-full">
        <UPagination
          v-model="currentPage"
          :total="filteredArticles.length"
          :page-count="itemsPerPage"
          show-first
          show-last
        />
      </div>
    </UContainer>
  </div>
  <div v-else class="tour">
    <p>Seems like there are no articles yet.</p>
    <p>
      You can start by
      <ProseA href="https://alpine.nuxt.space/articles/write-articles">
        creating
      </ProseA> one in the <ProseCodeInline>articles</ProseCodeInline> folder.
    </p>
  </div>
</template>
