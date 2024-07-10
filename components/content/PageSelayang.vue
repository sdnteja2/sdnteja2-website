<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: 'Selayang pandang',
  },
})
</script>

<template>
  <UContainer>
    <div>
      <h2 class="headline">
        {{ title }}
      </h2>
    </div>
    <div class="relative overflow-hidden">
      <div class="     mx-auto">
        <!-- Grid -->
        <div class="lg:grid lg:grid-cols-6 lg:gap-8 lg:items-center">
          <div class="hidden lg:block lg:col-span-2">
            <img class="rounded-xl" src="https://images.unsplash.com/photo-1671726203390-cdc4354ee2eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image Description">
          </div>
          <!-- End Col -->

          <div class="lg:col-span-4">
            <!-- Blockquote -->
            <blockquote>
              <p class="text-xl font-medium text-gray-800 lg:text-2xl lg:leading-normal dark:text-neutral-200">
                To say that switching to Preline has been life-changing is an understatement. My business has tripled and I got my life back.
              </p>

              <footer class="mt-6">
                <div class="flex items-center">
                  <div class="lg:hidden flex-shrink-0">
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
            <!-- End Blockquote -->
          </div>
          <!-- End Col -->
        </div>
        <!-- End Grid -->
      </div>
    </div>
  </UContainer>
</template>

<style scoped></style>
