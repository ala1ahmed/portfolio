<template>
  <div class="flex items-center gap-3 mb-5 pb-3 border-b border-noir-700">
    <span class="text-[10px] tracking-[0.2em] text-terminal-green uppercase">
      {{ label }}
    </span>
    <div
      class="flex-1 h-px text-noir-700"
      style="background: linear-gradient(to right, currentColor, transparent)"
    />
  </div>
</template>

<script setup>
defineProps({ label: String });
</script>
