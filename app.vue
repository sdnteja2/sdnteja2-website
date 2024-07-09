<template>
  <div>
    <NuxtRouteAnnouncer />
    <PageIndicator />
    <NuxtLoadingIndicator color="#F22727" />
    <NuxtPage />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(4px);
  transform: translateY(20px);
}
.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
