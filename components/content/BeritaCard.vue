<script setup lang="ts">
import { useContentPreview } from '#imports'

interface Beerita {
  _path: string
  title: string
  date: string
  description: string
  cover: string
  image: string

}

const props = defineProps({
  berita: {
    type: Object,
    required: true,
    validator: (value: Beerita) => {
      if (value?._path && value.title)
        return true
      return false
    },
  },
  featured: {
    type: Boolean,
    default: false,
  },
})

const id = computed(() => {
  return (import.meta.env.DEV || useContentPreview()?.isEnabled()) ? props.berita?._id : undefined
})
</script>

<template>
  <div
    v-if="berita._path && berita.title" data-aos="flip-up"

    :data-content-id="id"
    class="h-full"
  >
    <NuxtLink
      :to="berita._path"
      :title="berita.title"
    >
      <UCard
        :ui="
          {
            footer: {
              padding: 'px-2 py-1.5 sm:px-4',
            },
            header: {
              padding: 'px-2 py-1.5 sm:px-4',
            },
          }
        "
        class="h-full cardHover"
      >
        <template #header>
          <div class="w-full  justify-end flex ">
            <UBadge class="">
              <time>
                {{ formatDate(berita.date) }}
              </time>
            </UBadge>
          </div>
        </template>
        <div class="mb-2">
          <h2 class="font-semibold headline font-body leading-tight  m-0 p-0">
            {{ berita.title }}
          </h2>
        </div>
        <template #footer>
          <div class="flex flex-wrap ">
            <NuxtLink
              v-for="(tag, n) in berita.tags"
              :key="n" rel="tag"
              :title="`Tags: ${tag}`"

              :to="`/tags#${tag}`" class="uppercase"
            >
              <UBadge size="xs" class="mr-2">
                {{ tag }}
              </UBadge>
            </NuxtLink>
          </div>
        </template>
      </UCard>
    </NuxtLink>
  </div>
</template>
