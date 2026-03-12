<template>
  <section id="skills" class="py-24 px-6 max-w-4xl mx-auto">
    <SectionHeader num="01." title="TECH STACK" />
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div
        v-for="cat in skills"
        :key="cat.label"
        class="reveal group relative bg-noir-800 border border-noir-700 p-6 overflow-hidden hover:border-terminal-green/30 transition-all duration-200 hover:shadow-[0_0_20px_rgba(0,255,136,0.04)]"
      >
        <!-- Left accent bar -->
        <span
          class="absolute left-0 top-0 bottom-0 w-0.5 bg-terminal-green opacity-0 group-hover:opacity-100 transition-opacity"
        />
        <p
          class="text-[10px] tracking-[0.2em] text-terminal-green uppercase mb-4"
        >
          {{ cat.comment }}
        </p>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tag in cat.tags"
            :key="tag.name"
            :class="[
              'text-[11px] px-2.5 py-1 border tracking-wider transition-all duration-200 cursor-default',
              tag.highlight
                ? 'border-terminal-green/40 text-terminal-green bg-terminal-green/[0.04]'
                : 'border-noir-700 text-noir-500 hover:border-terminal-cyan hover:text-terminal-cyan',
            ]"
          >
            {{ tag.name }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { skills } from "~/data/site";
</script>
