<template>
  <section id="projects" class="py-24 px-6 max-w-4xl mx-auto">
    <SectionHeader num="02." title="PROJECTS" />

    <div class="flex flex-col gap-6">
      <div v-for="project in allProjects" :key="project.slug" class="reveal">
        <ProjectCard :project="project" />
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from "~/components/ui/SectionHeader.vue";
import ProjectCard from "~/components/ui/ProjectCard.vue";
const { allProjects } = useProjects();
</script>
