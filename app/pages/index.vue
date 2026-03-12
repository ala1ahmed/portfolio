<template>
  <div>
    <HeroSection />
    <SkillsSection />
    <ProjectsSection />
    <AboutSection />
    <ContactSection />
  </div>
</template>

<script setup>
import HeroSection from "~/components/sections/HeroSection.vue";
import SkillsSection from "~/components/sections/SkillsSection.vue";
import ProjectsSection from "~/components/sections/ProjectsSection.vue";
import AboutSection from "~/components/sections/AboutSection.vue";
import ContactSection from "~/components/sections/ContactSection.vue";
useSeo({
  title: "Home",
  description:
    "Full Stack JavaScript developer specialising in Nuxt.js, Express.js, PostgreSQL & MongoDB. Based in Tunis, Tunisia. Available for freelance and full-time roles.",
  path: "/",
});

const { init } = useReveal();
onMounted(init);
</script>
