<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator color="#F22727" />
    <NuxtPage />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
  transform: scale(0.8);
}
</style>
