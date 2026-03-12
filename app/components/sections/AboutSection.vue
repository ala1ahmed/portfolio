<template>
  <section id="about" class="py-24 px-6 max-w-4xl mx-auto">
    <SectionHeader num="03." title="ABOUT ME" />
    <div class="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 reveal">
      <!-- Bio -->
      <div class="space-y-5">
        <p
          v-for="(para, i) in siteMeta.bio"
          :key="i"
          class="text-[13px] leading-8 text-[#c8c8c8]"
          v-html="para"
        />
      </div>

      <!-- Stats -->
      <div class="flex flex-col gap-3">
        <div
          v-for="stat in siteMeta.stats"
          :key="stat.label"
          class="flex justify-between items-center px-5 py-4 bg-noir-800 border border-noir-700 hover:border-terminal-green/30 transition-colors"
        >
          <span class="text-[11px] tracking-widest text-noir-500">
            {{ stat.label }}
          </span>
          <span
            :class="[
              'text-xl font-extrabold',
              stat.green ? 'text-terminal-green' : 'text-light-50',
            ]"
          >
            {{ stat.value }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { siteMeta } from "~/data/site";
</script>
