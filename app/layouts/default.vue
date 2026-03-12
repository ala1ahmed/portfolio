<template>
  <div class="min-h-screen font-mono dark">
    <AppNav />
    <main>
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppNav from "~/components/layout/AppNav.vue";
import AppFooter from "~/components/layout/AppFooter.vue";
</script>
