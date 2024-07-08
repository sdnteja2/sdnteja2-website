<script setup lang="ts">
const open = ref(true)

// Define a shortcut to toggle the open state
defineShortcuts({
  o: () => open.value = !open.value,
})

// Define a computed property to change the icon based on the open state
const trailingIcon = computed(() => open.value ? 'i-hugeicons-dashboard-square-02' : 'i-hugeicons-dashboard-square-01')
</script>

<template>
  <div class="fixed top-0 z-50 w-full">
    <header class="w-full bg-gray-50/75 dark:bg-gelap-900/75 backdrop-blur-container border-b border-gray-200 dark:border-gelap-800 p-2 md:px-0">
      <nav class="max-w-7xl mx-auto">
        <div class="flex justify-between items-center">
          <div class="flex w-full">
            LOGO
          </div>
          <div class="flex items-center">
            <ColorMode />
            <div class="relative">
              <UPopover
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
                          color="primary"
                          :variant="$route.path === link._path ? 'solid' : 'ghost'"
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
