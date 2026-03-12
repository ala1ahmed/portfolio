<template>
  <div class="flex items-center gap-4 mb-10">
    <span class="text-xs tracking-widest text-terminal-green">{{ num }}</span>
    <span class="text-xl font-bold tracking-wide text-light-50">
      {{ title }}
    </span>
    <div
      class="flex-1 h-px text-noir-700"
      style="background: linear-gradient(to right, currentColor, transparent)"
    />
  </div>
</template>

<script setup>
defineProps({ num: String, title: String });
</script>
