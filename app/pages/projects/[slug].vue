<template>
  <div>
    <!-- NAV BAR (project-specific) -->
    <div
      class="fixed top-14 inset-x-0 z-40 h-11 flex items-center justify-between px-6 bg-noir-950/90 backdrop-blur border-b border-noir-700"
    >
      <div class="flex items-center gap-4">
        <NuxtLink
          to="/#projects"
          class="flex items-center gap-2 text-[12px] tracking-wide text-noir-500 px-3 py-1 border border-noir-700 hover:border-terminal-green hover:text-terminal-green transition-all"
        >
          <span>←</span> back
        </NuxtLink>
        <span class="hidden sm:block text-[12px] text-noir-500">
          ~/projects
          <span class="mx-2 text-noir-700">/</span>
          <span class="text-terminal-green">{{ project.slug }}</span>
        </span>
      </div>
      <div class="flex gap-3">
        <a
          v-if="project.githubUrl"
          :href="project.githubUrl"
          target="_blank"
          rel="noopener"
          class="text-[11px] tracking-wide px-3.5 py-1 border border-noir-700 text-noir-500 hover:border-terminal-green hover:text-terminal-green transition-all"
        >
          GitHub ↗
        </a>
        <a
          v-if="project.demoUrl"
          :href="project.demoUrl"
          target="_blank"
          rel="noopener"
          class="text-[11px] tracking-wide px-3.5 py-1 border border-terminal-green text-terminal-green hover:bg-terminal-green hover:text-noir-950 hover:shadow-[0_0_16px_rgba(0,255,136,0.25)] transition-all"
        >
          Live Demo ↗
        </a>
      </div>
    </div>

    <!-- HERO BANNER -->
    <div class="pt-[104px] px-6 max-w-5xl mx-auto">
      <div class="relative bg-noir-800 border border-noir-700 overflow-hidden">
        <!-- Grid bg -->
        <div class="absolute inset-0 bg-grid opacity-60" />
        <!-- Radial glow -->
        <div
          class="absolute inset-0"
          style="
            background: radial-gradient(
              ellipse at 30% 50%,
              rgba(0, 255, 136, 0.05) 0%,
              transparent 60%
            );
          "
        />

        <div class="relative z-10 p-10 md:p-14">
          <div
            class="flex flex-col md:flex-row md:items-start md:justify-between gap-6"
          >
            <div class="flex-1">
              <p class="text-[11px] tracking-[0.15em] text-noir-500 mb-3">
                // PROJECT {{ project.index }}
              </p>
              <h1
                class="text-[clamp(28px,5vw,52px)] font-extrabold leading-[1.1] text-light-50 mb-4"
                v-html="highlightedTitle"
              />
              <p class="text-[13px] text-noir-500 leading-relaxed max-w-lg">
                {{ project.tagline }}
              </p>
            </div>

            <div class="flex flex-wrap gap-2 md:flex-col md:items-end">
              <span
                :class="[
                  'text-[10px] px-2.5 py-1 border tracking-widest',
                  project.status === 'live'
                    ? 'border-terminal-green/50 text-terminal-green'
                    : 'border-terminal-amber/50 text-terminal-amber',
                ]"
              >
                {{ project.status === "live" ? "● LIVE" : "◐ WIP" }}
              </span>
              <span
                class="text-[10px] px-2.5 py-1 border border-terminal-cyan/30 text-terminal-cyan tracking-widest"
              >
                {{ project.type }}
              </span>
              <span
                class="text-[10px] px-2.5 py-1 border border-noir-700 text-noir-500 tracking-widest"
              >
                {{ project.year }}
              </span>
            </div>
          </div>

          <!-- Meta row -->
          <div class="flex flex-wrap gap-8 mt-10 pt-6 border-t border-noir-700">
            <div
              v-for="m in metaItems"
              :key="m.label"
              class="flex flex-col gap-1"
            >
              <span
                class="text-[10px] tracking-[0.15em] text-noir-500 uppercase"
              >
                // {{ m.label }}
              </span>
              <span :class="['text-[13px]', m.color ?? 'text-light-50']">
                {{ m.value }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- MAIN LAYOUT -->
    <div
      class="max-w-5xl mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 items-start"
    >
      <!-- MAIN CONTENT -->
      <div class="space-y-14">
        <!-- Overview -->
        <div class="reveal">
          <BlockHeader label="// overview" />
          <p
            v-for="(para, i) in project.description.split('\n').filter(Boolean)"
            :key="i"
            class="text-[13px] leading-8 text-[#c8c8c8] mb-4"
          >
            {{ para.trim() }}
          </p>
        </div>

        <!-- Architecture -->
        <div class="reveal">
          <BlockHeader label="// architecture" />
          <div
            class="bg-noir-800 border border-noir-700 p-8 relative overflow-hidden"
          >
            <div class="absolute inset-0 bg-grid opacity-40" />
            <div
              v-for="(layer, li) in project.architecture"
              :key="li"
              class="relative z-10"
            >
              <p
                class="text-[9px] tracking-[0.2em] text-noir-500 text-center mb-2 uppercase"
              >
                {{ layer.title }}
              </p>
              <div
                class="flex items-center justify-center flex-wrap gap-0 mb-2"
              >
                <template v-for="(node, ni) in layer.nodes" :key="ni">
                  <div
                    :class="[
                      'px-4 py-2.5 border text-center text-[11px] hover:border-terminal-green transition-colors',
                      nodeClass(node.color),
                    ]"
                  >
                    <span
                      class="block text-[9px] tracking-[0.1em] text-noir-500 mb-0.5 uppercase"
                    >
                      {{ node.label }}
                    </span>
                    <span class="font-semibold">{{ node.value }}</span>
                  </div>
                  <span
                    v-if="ni < layer.nodes.length - 1"
                    class="w-8 h-px bg-noir-700 relative shrink-0"
                  >
                    <span
                      class="absolute right-[-5px] top-[-7px] text-noir-500 text-sm"
                      >›</span
                    >
                  </span>
                </template>
              </div>
              <div
                v-if="li < project.architecture.length - 1"
                class="flex justify-center mb-2"
              >
                <div class="w-px h-7 bg-noir-700 relative">
                  <span
                    class="absolute bottom-[-12px] left-[-6px] text-noir-500 text-xs"
                    >↓</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Features -->
        <div class="reveal">
          <BlockHeader label="// key features" />
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div
              v-for="feat in project.features"
              :key="feat.title"
              class="group relative bg-noir-800 border border-noir-700 px-6 py-5 overflow-hidden hover:border-noir-600 transition-colors"
            >
              <span
                class="absolute left-0 top-0 bottom-0 w-0.5 bg-terminal-green opacity-0 group-hover:opacity-100 transition-opacity"
              />
              <p class="text-base mb-2">{{ feat.icon }}</p>
              <p
                class="text-[12px] font-bold text-light-50 mb-1.5 tracking-wide"
              >
                {{ feat.title }}
              </p>
              <p class="text-[11px] text-noir-500 leading-6">
                {{ feat.description }}
              </p>
            </div>
          </div>
        </div>

        <!-- Code snippet -->
        <div v-if="project.snippets?.length" class="reveal">
          <BlockHeader label="// code highlight" />
          <div
            v-for="snip in project.snippets"
            :key="snip.filename"
            class="bg-noir-800 border border-noir-700 overflow-hidden mb-4"
          >
            <div
              class="flex justify-between items-center px-4 py-2.5 bg-noir-600 border-b border-noir-700"
            >
              <span class="text-[11px] tracking-wide text-noir-500">{{
                snip.filename
              }}</span>
              <span class="text-[10px] tracking-widest text-terminal-green">{{
                snip.language
              }}</span>
            </div>
            <div class="overflow-x-auto p-6">
              <pre
                class="text-[12px] leading-7 text-[#c8c8c8] whitespace-pre"
                >{{ snip.code }}</pre
              >
            </div>
          </div>
        </div>

        <!-- Challenges -->
        <div v-if="project.challenges.length" class="reveal">
          <BlockHeader label="// challenges & solutions" />
          <div class="space-y-4">
            <div
              v-for="(ch, i) in project.challenges"
              :key="ch.title"
              class="bg-noir-800 border border-noir-700 px-6 py-5 hover:border-terminal-amber/30 transition-colors"
            >
              <div class="flex items-center gap-3 mb-3">
                <span class="text-[11px] tracking-widest text-terminal-amber"
                  >0{{ i + 1 }}.</span
                >
                <span class="text-[13px] font-bold text-light-50">{{
                  ch.title
                }}</span>
              </div>
              <div
                class="border-l-2 border-terminal-amber/60 pl-4 text-[12px] leading-7 text-noir-500 space-y-1"
              >
                <p>
                  <span class="text-terminal-amber">Problem:</span>
                  {{ ch.problem }}
                </p>
                <p>
                  <span class="text-terminal-amber">Solution:</span>
                  {{ ch.solution }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Related -->
        <div class="reveal">
          <BlockHeader label="// other projects" />
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <NuxtLink
              v-for="rel in relatedProjects"
              :key="rel.slug"
              :to="`/projects/${rel.slug}`"
              class="group relative block bg-noir-800 border border-noir-700 px-5 py-4 overflow-hidden hover:border-noir-600 transition-colors"
            >
              <span
                class="absolute bottom-0 left-0 right-0 h-px origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                style="
                  background: linear-gradient(to right, #00ff88, transparent);
                "
              />
              <p class="text-[10px] tracking-widest text-noir-500 mb-1">
                // {{ rel.index }}
              </p>
              <p class="text-[13px] font-bold text-light-50 mb-2">
                {{ rel.title }}
              </p>
              <div class="flex flex-wrap gap-1.5">
                <TechBadge
                  v-for="tag in rel.techStack.slice(0, 3)"
                  :key="tag.name"
                  :tag="tag"
                />
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- SIDEBAR -->
      <aside class="space-y-5 lg:sticky lg:top-28">
        <!-- Tech stack -->
        <div class="reveal bg-noir-800 border border-noir-700 p-5">
          <p
            class="text-[10px] tracking-[0.2em] text-terminal-green uppercase pb-3 mb-3 border-b border-noir-700"
          >
            // tech stack
          </p>
          <div class="flex flex-col divide-y divide-noir-700">
            <div
              v-for="tag in project.techStack"
              :key="tag.name"
              class="flex justify-between items-center py-2.5"
            >
              <span class="text-[12px] text-light-50">{{ tag.name }}</span>
              <TechBadge :tag="tag" />
            </div>
          </div>
        </div>

        <!-- Stats -->
        <div class="reveal bg-noir-800 border border-noir-700 p-5">
          <p
            class="text-[10px] tracking-[0.2em] text-terminal-green uppercase pb-3 mb-3 border-b border-noir-700"
          >
            // project stats
          </p>
          <div class="flex flex-col divide-y divide-noir-700">
            <div
              v-for="stat in project.stats"
              :key="stat.label"
              class="flex justify-between items-center py-2.5"
            >
              <span class="text-[11px] text-noir-500 tracking-wide">{{
                stat.label
              }}</span>
              <span
                :class="[
                  'text-[12px]',
                  stat.highlight ? 'text-terminal-green' : 'text-light-50',
                ]"
              >
                {{ stat.value }}
              </span>
            </div>
          </div>
        </div>

        <!-- Quick links -->
        <div class="reveal bg-noir-800 border border-noir-700 p-5">
          <p
            class="text-[10px] tracking-[0.2em] text-terminal-green uppercase pb-3 mb-3 border-b border-noir-700"
          >
            // links
          </p>
          <div class="flex flex-col gap-2.5">
            <a
              v-if="project.githubUrl"
              :href="project.githubUrl"
              target="_blank"
              rel="noopener"
              class="flex items-center gap-3 px-4 py-2.5 border border-noir-700 text-[12px] text-noir-500 hover:border-terminal-green hover:text-terminal-green transition-all"
            >
              <span class="text-terminal-green">⌥</span>
              View Source Code
              <span class="ml-auto text-[10px]">↗</span>
            </a>
            <a
              v-if="project.demoUrl"
              :href="project.demoUrl"
              target="_blank"
              rel="noopener"
              class="flex items-center gap-3 px-4 py-2.5 border border-noir-700 text-[12px] text-noir-500 hover:border-terminal-green hover:text-terminal-green transition-all"
            >
              <span class="text-terminal-green">●</span>
              Live Demo
              <span class="ml-auto text-[10px]">↗</span>
            </a>
          </div>
        </div>
      </aside>
    </div>

    <!-- PREV / NEXT -->
    <div class="max-w-5xl mx-auto px-6 pb-16 flex justify-between gap-4">
      <NuxtLink
        v-if="adjacent.prev"
        :to="`/projects/${adjacent.prev.slug}`"
        class="flex flex-col gap-1 px-5 py-4 max-w-xs bg-noir-800 border border-noir-700 hover:border-terminal-green/40 transition-colors"
      >
        <span class="text-[10px] tracking-widest text-noir-500"
          >← prev project</span
        >
        <span class="text-[13px] font-bold text-light-50">{{
          adjacent.prev.shortTitle
        }}</span>
      </NuxtLink>

      <NuxtLink
        v-if="adjacent.next"
        :to="`/projects/${adjacent.next.slug}`"
        class="flex flex-col gap-1 px-5 py-4 max-w-xs ml-auto text-right bg-noir-800 border border-noir-700 hover:border-terminal-green/40 transition-colors"
      >
        <span class="text-[10px] tracking-widest text-noir-500"
          >next project →</span
        >
        <span class="text-[13px] font-bold text-light-50">{{
          adjacent.next.shortTitle
        }}</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { projects } from "~/data/projects";

const route = useRoute();
const slug = computed(() => route.params.slug);
const { project, adjacent } = useProject(slug);

useSeo({
  title: project.value.seoTitle ?? project.value.title,
  description: project.value.seoDescription ?? project.value.tagline,
  image: project.value.ogImage ?? project.value.coverImage,
  type: "article",
  path: `/projects/${project.value.slug}`,
});

const highlightedTitle = computed(() => {
  const words = project.value.title.split(" ");
  return `<span class="text-terminal-green">${words[0]}</span> ${words.slice(1).join(" ")}`;
});

const metaItems = computed(() => {
  const fe = project.value.techStack.find((t) => t.layer === "fe");
  const be = project.value.techStack.find((t) => t.layer === "be");
  const db = project.value.techStack.find((t) => t.layer === "db");
  return [
    { label: "Frontend", value: fe?.name ?? "—", color: "text-terminal-green" },
    { label: "Backend", value: be?.name ?? "—", color: "text-terminal-green" },
    { label: "Database", value: db?.name ?? "—", color: "text-terminal-cyan" },
    {
      label: "Duration",
      value:
        project.value.stats.find((s) => s.label === "Duration")?.value ?? "—",
    },
    { label: "Year", value: project.value.year },
    { label: "Role", value: "Solo Developer" },
  ];
});

const relatedProjects = computed(() =>
  projects.filter((p) => p.slug !== project.value.slug).slice(0, 2),
);

function nodeClass(color) {
  const map = {
    green: "border-terminal-green/30 bg-noir-950/50 text-terminal-green",
    cyan: "border-terminal-cyan/30 bg-noir-950/50 text-terminal-cyan",
    amber: "border-terminal-amber/30 bg-noir-950/50 text-terminal-amber",
    default: "border-noir-700 bg-noir-950 text-light-50",
  };
  return map[color ?? "default"];
}

const { init } = useReveal();
onMounted(init);
</script>
