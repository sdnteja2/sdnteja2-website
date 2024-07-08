<!-- pages -->
<script setup lang="ts">
const items = [{
  label: 'Getting Started',
  icon: 'i-heroicons-information-circle',
  defaultOpen: true,
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.',
}, {
  label: 'Installation',
  icon: 'i-heroicons-arrow-down-tray',
  disabled: true,
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.',
}, {
  label: 'Theming',
  icon: 'i-heroicons-eye-dropper',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.',
}, {
  label: 'Layouts',
  icon: 'i-heroicons-rectangle-group',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.',
}, {
  label: 'Components',
  icon: 'i-heroicons-square-3-stack-3d',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.',
}, {
  label: 'Utilities',
  icon: 'i-heroicons-wrench-screwdriver',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.',
}]
</script>

<template>
  <NuxtLayout>
    <UContainer class="py-20">
      <ContentDoc />
      <div class="flex flex-col space-y-10">
        <UAccordion :items="items" />
        <UAlert
          icon="i-heroicons-command-line"
          color="primary"
          variant="solid"
          title="Heads up!"
          description="You can add components to your app using the cli."
        />
        <div>
          <UBadge color="primary" variant="solid">
            Badge
          </UBadge>
        </div>
        <UBreadcrumb
          divider="/"
          :links="[{ label: 'Home', to: '/' }, { label: 'Navigation' }, { label: 'Breadcrumb' }]"
        />
        <UCard>
          <template #header>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio saepe est voluptatum earum, aspernatur eius ducimus mollitia vero aperiam nemo culpa ut excepturi autem. Expedita repudiandae blanditiis vitae necessitatibus a.
          </template>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum labore a quam, vel unde est natus tempore excepturi enim corporis molestias, aliquam cumque, sed consectetur ea odit perspiciatis? Iste, aliquid?
          <template #footer>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi a consequatur quia libero ratione praesentium, enim totam porro impedit quibusdam ducimus, aspernatur, deleniti et voluptatibus alias eum dolores tempore! Voluptate.
          </template>
        </UCard>
      </div>
    </UContainer>
  </NuxtLayout>
</template>
