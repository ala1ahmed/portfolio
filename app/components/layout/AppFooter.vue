<template>
  <footer
    class="border-t border-noir-700 px-6 py-6 flex justify-between items-center text-[11px] text-noir-500 font-mono"
  >
    <span>
      Built with
      <span class="text-terminal-green">♥</span>
      + Nuxt 4 {{ year }}
    </span>
    <span>
      ~/ala.ahmed
      <span class="text-terminal-green">v1.0.0</span>
    </span>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear();
</script>
