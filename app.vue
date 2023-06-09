<template>
  <header-nav/>
  <ClientOnly>
    <NuxtPage />
  </ClientOnly>
  <footer-nav />
</template>
<script setup>

</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.5s ease;
  transform: translateX(0);
}

.page-enter-from,
.page-leave-to {
  transition: all 0.5s ease;
  opacity: 0;
  transform: translateX(200px);
}
</style>
