<script setup lang="ts">
const open = ref(false)
const $route = useRoute()
// Define a shortcut to toggle the open state
defineShortcuts({
  o: () => open.value = !open.value,
})
// Define a computed property to change the icon based on the open state
const trailingIcon = computed(() => open.value ? 'i-hugeicons-cancel-02' : 'i-hugeicons-dashboard-square-01')

// Function to check if a path is active
function isActive(path: string) {
  return $route.path === path || $route.path.startsWith('/artikel') && path === '/artikel'
}
</script>

<template>
  <div class="fixed top-0 z-[49] w-full">
    <header class="w-full bg-gray-100/75 dark:bg-gelap-900/75 backdrop-blur-container border-b border-gray-200 dark:border-gelap-800 p-2">
      <nav class="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
        <div class="flex justify-between h-10 md:h-14 items-center">
          <div class="flex w-full">
            LOGO
          </div>
          <div class="flex items-center">
            <div class="md:flex flex-row space-x-2 hidden">
              <ContentNavigation v-slot="{ navigation }">
                <div v-for="link of navigation" :key="link._path">
                  <UButton
                    :icon="link.icon"
                    size="sm"
                    :color="isActive(link._path) ? 'primary' : 'gray'"
                    :variant="isActive(link._path) ? 'solid' : 'ghost'"
                    :label="link.title"
                    :trailing="false"
                    :to="link._path"
                    class="w-full"
                    rel="nofollow"
                    :title="link.title"
                  />
                </div>
              </ContentNavigation>
            </div>
            <div class="ml-4">
              <ColorMode />
            </div>
            <div class="flex ml-2 md:hidden">
              <UPopover
                v-model:open="open"
                :popper="{ offsetDistance: 10 }"
                :ui="{
                  container: 'z-40 group',
                  trigger: 'inline-flex w-full',
                  width: 'w-48',
                  height: '',
                  background: 'bg-gray-100/80 dark:bg-gelap-900/80 backdrop-blur',
                  shadow: 'shadow-lg',
                  rounded: 'rounded-md',
                  ring: 'ring-1 ring-gray-200 dark:ring-gray-700',
                  base: 'relative focus:outline-none overflow-y-auto scroll-py-1',
                  divide: 'divide-y divide-gray-200 dark:divide-gray-700',
                  padding: 'p-2',
                }"
              >
                <UButton color="gray" variant="ghost" :trailing-icon="trailingIcon" />
                <template #panel="{ close }">
                  <div class="p-2 space-y-2">
                    <ContentNavigation v-slot="{ navigation }">
                      <div v-for="link of navigation" :key="link._path" class="">
                        <UButton
                          :icon="link.icon"
                          size="sm"
                          :color="isActive(link._path) ? 'primary' : 'gray'"
                          :variant="isActive(link._path) ? 'solid' : 'ghost'"
                          :label="link.title"
                          :trailing="false"
                          :to="link._path"
                          class="w-full"
                          @click="close"
                        />
                      </div>
                    </ContentNavigation>
                  </div>
                </template>
              </UPopover>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<style scoped>
.backdrop-blur-container::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  backdrop-filter: blur(8px); /* Adjust the blur level as needed */
  -webkit-backdrop-filter: blur(8px); /* For Safari */
  z-index: -1;
}
</style>
