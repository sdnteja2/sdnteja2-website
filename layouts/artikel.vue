<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<!-- eslint-disable unused-imports/no-unused-vars -->
<script setup lang="ts">
import { useActiveScroll } from 'vue-use-active-scroll'

const emit = defineEmits(['move'])
const { toc } = useContent()
const targets = computed(() =>
  toc.value.links.flatMap(({ id, children = [] }: { id: string, children: { id: string }[] }) => [
    id,
    ...children.map(({ id }) => id),
  ]),
)

const { setActive, activeId } = useActiveScroll(targets)
function scrollToHeading(id: string) {
  const element = document.getElementById(id)
  if (element) {
    window.setTimeout(() => {
      window.scrollBy({
        top: element.getBoundingClientRect().top - 80, // Sesuaikan dengan tinggi header kamu
        behavior: 'smooth',
      })
    }, 100)
    emit('move', id)
    setActive(id) // Set active element
  }
}

const isSSR = ref(true)

onMounted(() => (isSSR.value = false))

const route = useRoute()
const { page: artikel } = useContent()

const networks = [
  { network: 'email' },
  { network: 'facebook' },
  { network: 'linkedin' },
  { network: 'messenger' },
  { network: 'pinterest' },
  { network: 'telegram' },
  { network: 'twitter' },
  { network: 'whatsapp' },
]

const isLoaded = ref(false)
const hashtags = computed(() => {
  return artikel.value?.tags ? artikel.value.tags.join(', ') : ''
})

const { getIcon } = useSocialMediaIcons()

defineOgImageComponent('PageDefault', {
  title: artikel.value.title,
  description: artikel.value.description,
})
</script>

<template>
  <div>
    <UContainer class="py-14 scroll-smooth md:py-16">
      <div class="max-w-4xl mx-auto">
        <UBreadcrumb
          :ui="{
            active: 'text-primary-600 font-bold dark:text-primary-600 ',
            inactive: ' text-gray-600 font-light dark:text-gray-200',
          }"
          class="my-4 px-2 shadow py-1 ring-1 ring-gray-200 dark:ring-gray-800 rounded-lg text-lg bg-white dark:bg-gray-900 inset-x-0 text-center z-30"
          divider=">"
          :links="[
            { label: 'Home', to: '/' },
            { label: 'Artikel', to: '/artikel' },
          ]"
        />

        <UCard>
          <template #header>
            <div class="flex justify-between items-center text-sm">
              <p v-if="artikel?.author">
                @ {{ artikel.author }}
              </p>
              <USkeleton
                v-else
                class="h-4 w-24"
              />
              <UBadge
                v-if="artikel?.date"
                size="lg"
                color="white"
              >
                <time>
                  {{ formatDate(artikel.date) }}
                </time>
              </UBadge>
              <USkeleton
                v-else
                class="h-4 w-16"
              />
            </div>
          </template>
          <div class="aspect-w-16 aspect-h-9 relative">
            <NuxtImg
              v-show="isLoaded"
              class="w-full object-cover rounded"
              :src="artikel.img"
              :alt="artikel.title"
              :title="artikel.title"
              format="webp"
              loading="lazy"
              height="500"
              width="500"
              sizes="100vw sm:100vw md:100vw lg:100px"
              :placeholder="[100, 60, 35, 5]"
              @load="isLoaded = true"
            />
            <USkeleton
              v-show="!isLoaded"
              class="w-full h-full object-cover rounded"
              :ui="{ rounded: 'rounded' }"
            />
          </div>
          <div class="pt-8 pb-4 mx-0 max-w-3xl">
            <h1
              v-if="isLoaded"
              class="font-bold text-3xl tracking-tight md:text-g3 text-balance headline font-title leading-tight title text-left"
            >
              {{ artikel.title }}
            </h1>
            <USkeleton
              v-else
              class="h-8 w-full"
            />
          </div>
          <p
            v-if="isLoaded"
            class=""
          >
            {{ artikel.description }}
          </p>
          <USkeleton
            v-else
            class="h-4 w-full"
          />
          <template #footer>
            <div v-if="artikel?.tags">
              <div class="flex flex-wrap">
                <NuxtLink
                  v-for="(tag, n) in artikel.tags"
                  :key="n"
                  :to="`/tags#${tag}`"
                  class="uppercase"
                  :aria-label="tag"
                  :title="tag"
                  rel="noopener noreferrer nofollow"
                >
                  <UBadge
                    v-if="isLoaded"
                    class="mr-2"
                    size="md"
                    color="gray"
                  >
                    {{ tag }}
                  </UBadge>
                  <USkeleton
                    v-else
                    class="h-4 w-16 mr-2"
                  />
                </NuxtLink>
              </div>
            </div>
          </template>
        </UCard>
        <!-- konten -->
        <UCard
          class="my-4 ring-gray-200 dark:ring-gray-800 flex-1 flex flex-col shadow hover:ring-gray-200 dark:hover:ring-ring-gray-800"
        >
          <div
            v-if="isLoaded"
            class="prose md:prose-lg mx-auto prose-p:tracking-tight max-w-4xl prose-permadi prose-img:mx-auto prose-img:w-full prose-md sm:prose-base prose-h2:text-balance dark:prose-p:text-brand-400 dark:prose-invert prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-img:rounded"
          >
            <slot />
          </div>
          <USkeleton
            v-else
            class="w-full h-64"
          />
        </UCard>
        <!-- Tambahkan Log untuk Debugging -->

        <!-- sticki butom -->
        <div class="sticky bottom-3 inset-x-0 text-center">
          <div
            class="inline-block relative group isolate rounded-lg background-gradient ring-1 ring-gray-200 dark:ring-gray-800 p-1 sm:p-3 bg-white dark:bg-gray-900"
          >
            <div class="flex items-center gap-x-1.5">
              <UPopover
                :popper="{ arrow: true, placement: 'top' }"
                overlay
              >
                <UTooltip text="Daftar Isi">
                  <UButton
                    aria-label="Daftar Isi"
                    square
                    color="gray"
                    trailing-icon="i-hugeicons-list-view"
                  />
                </UTooltip>
                <template #panel="{ close }">
                  <div class="p-3 w-80">
                    <h3>Daftar Isi</h3>
                    <div

                      class="flex flex-col"
                    >
                      <nav class="overflow-y-auto h-96 p-2">
                        <div v-for="(link, idx) in toc.links" :key="link.id">
                          <NuxtLink
                            class="text-sm my-1 px-2 p-1 line-clamp-1 ring-1 rounded-md ring-gray-200 hover:ring-gray-400 dark:hover:ring-gray-600 dark:ring-gray-800 text-left"
                            :to="{ hash: `#${link.id}` }"
                            :class="{
                              ActiveLink: (isSSR && idx === 0) || activeId === link.id,
                              ParentActive: link.children?.some(({ id }) => id === activeId),
                            }"
                            @click="() => { scrollToHeading(link.id); close(); }"
                          >
                            {{ link.text }}
                          </NuxtLink>
                          <!-- Nested List - Start -->
                          <div v-if="link.children">
                            <div v-for="child in link.children" :key="child.id">
                              <NuxtLink
                                class="text-sm my-1 px-2 p-1 line-clamp-1 ring-1 rounded-md ring-gray-200 hover:ring-gray-400 dark:hover:ring-gray-600 dark:ring-gray-800 text-left ml-2"
                                :to="{ hash: `#${child.id}` }"
                                :class="{ ActiveLink: activeId === child.id }"
                                @click="() => { scrollToHeading(child.id); close(); }"
                              >
                                {{ child.text }}
                              </NuxtLink>
                            </div>
                          </div>
                          <!-- Nested List - End -->
                        </div>
                      </nav>
                    </div>
                  </div>
                </template>
              </UPopover>
              <div
                class="block h-3 border-e border-gray-300 mx-1 dark:border-gray-600"
              />
              <div class="hs-tooltip inline-block">
                <UPopover
                  :popper="{ arrow: true, placement: 'top' }"

                  overlay
                >
                  <UTooltip text="Bagikan Artikel">
                    <UButton
                      aria-label="Bagikan Artikel"
                      color="gray"
                      trailing-icon="i-hugeicons-share-03"
                    />
                  </UTooltip>
                  <template #panel="{ close }">
                    <div class="flex p-2 items-center gap-x-1.5">
                      <ShareNetwork
                        v-for="network in networks"
                        :key="network.network"
                        :network="network.network"
                        :url="`https://sdnteja2.vercel.app${artikel._path}/`"
                        :title="artikel.title"
                        :description="artikel.description"
                        :quote="artikel.quote"
                        :hashtags="hashtags"
                        twitter-user="dinarpermadi07"
                      >
                        <UButton
                          :icon="getIcon(network.network)"
                          :aria-label="network.network"
                          @click="close"
                        />
                      </ShareNetwork>
                    </div>
                  </template>
                </UPopover>
              </div>
            </div>
          </div>
        </div>
        <PagePrevNext />
      </div>
    </UContainer>
  </div>
</template>

<style scoped>
.ActiveLink,
.Child {
  @apply bg-merah-600 text-white;
}

.ParentActive {
  @apply bg-kuning text-gelap;
}
</style>
