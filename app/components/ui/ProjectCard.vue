<template>
  <article
    class="group relative bg-noir-800 border border-noir-700 p-8 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 hover:border-noir-600 transition-all duration-200 overflow-hidden"
  >
    <!-- Animated bottom border -->
    <span
      class="absolute bottom-0 left-0 right-0 h-px origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
      style="background: linear-gradient(to right, #00ff88, transparent)"
    />

    <div>
      <!-- Meta row -->
      <div class="flex items-center gap-3 mb-3">
        <span class="text-[11px] tracking-widest text-noir-500">
          // {{ project.index }}
        </span>
        <span
          :class="[
            'text-[10px] px-2 py-0.5 border tracking-widest',
            project.status === 'live'
              ? 'border-terminal-green/50 text-terminal-green'
              : 'border-terminal-amber/50 text-terminal-amber',
          ]"
        >
          {{ project.status.toUpperCase() }}
        </span>
      </div>

      <h3 class="text-lg font-bold tracking-tight mb-2 text-light-50">
        {{ project.title }}
      </h3>
      <p class="text-[13px] leading-relaxed text-noir-500 max-w-xl mb-5">
        {{ project.tagline }}
      </p>

      <!-- Stack tags -->
      <div class="flex flex-wrap gap-2">
        <TechBadge
          v-for="tag in project.techStack.slice(0, 6)"
          :key="tag.name"
          :tag="tag"
        />
      </div>
    </div>

    <!-- Links -->
    <div class="flex md:flex-col gap-3 items-start md:items-end justify-end">
      <NuxtLink
        :to="`/projects/${project.slug}`"
        class="text-xs tracking-wide text-noir-500 hover:text-terminal-green transition-colors flex items-center gap-1"
      >
        Details
        <span
          class="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          >↗</span
        >
      </NuxtLink>
      <a
        v-if="project.demoUrl"
        :href="project.demoUrl"
        target="_blank"
        rel="noopener"
        class="text-xs tracking-wide text-noir-500 hover:text-terminal-green transition-colors flex items-center gap-1"
      >
        Live ↗
      </a>
      <a
        v-if="project.githubUrl"
        :href="project.githubUrl"
        target="_blank"
        rel="noopener"
        class="text-xs tracking-wide text-noir-500 hover:text-terminal-green transition-colors flex items-center gap-1"
      >
        GitHub ↗
      </a>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  project: { type: Object, required: true },
});
</script>
