<template>
  <nav
    class="fixed top-0 inset-x-0 z-50 h-14 flex items-center justify-between px-6 bg-noir-950/92 backdrop-blur border-b border-noir-700"
  >
    <!-- Logo / home link -->
    <NuxtLink
      to="/"
      class="text-[15px] font-extrabold tracking-wide text-terminal-green hover:text-terminal-green transition-colors"
    >
      <span class="text-noir-500">~/</span>ala.ahmed
    </NuxtLink>

    <!-- Desktop links -->
    <ul class="hidden md:flex items-center gap-7">
      <li v-for="link in navLinks" :key="link.to">
        <NuxtLink
          :to="link.to"
          class="text-xs tracking-widest text-noir-500 hover:text-terminal-green transition-colors relative group"
        >
          <span
            class="text-terminal-green opacity-0 group-hover:opacity-100 transition-opacity"
            >&gt;&nbsp;</span
          >{{ link.label }}
        </NuxtLink>
      </li>
    </ul>

    <!-- Right cluster -->
    <div class="flex items-center gap-3">
      <span class="hidden sm:flex items-center gap-2 text-xs text-noir-500">
        <span
          class="w-2 h-2 rounded-full bg-terminal-green animate-glowPulse"
          style="box-shadow: 0 0 8px #00ff88"
        />
        available
      </span>
    </div>
  </nav>
</template>

<script setup>
const navLinks = [
  { to: "/#skills", label: "skills" },
  { to: "/#projects", label: "projects" },
  { to: "/#about", label: "about" },
  { to: "/#contact", label: "contact" },
];
</script>
