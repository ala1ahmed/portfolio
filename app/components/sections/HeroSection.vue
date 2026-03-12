<template>
  <section
    id="hero"
    class="min-h-screen flex flex-col justify-center pt-14 px-6 max-w-4xl mx-auto"
  >
    <!-- Terminal window -->
    <div
      class="bg-noir-800 border border-noir-700 rounded-lg overflow-hidden shadow-[0_0_60px_rgba(0,255,136,0.04),0_40px_80px_rgba(0,0,0,0.6)]"
    >
      <!-- Title bar -->
      <div
        class="flex items-center gap-2.5 px-4 py-2.5 bg-noir-600 border-b border-noir-700"
      >
        <span class="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span class="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span class="w-3 h-3 rounded-full bg-[#28c840]" />
        <span
          class="flex-1 text-center text-[11px] text-noir-500 tracking-wide"
        >
          bash — zsh — 120×40
        </span>
      </div>

      <!-- Body -->
      <div class="p-10 min-h-80">
        <template v-for="(line, i) in visibleLines" :key="i">
          <!-- Prompt line -->
          <p v-if="line.type === 'cmd'" class="mb-1.5 text-sm animate-fadeUp">
            <span class="text-terminal-green">❯ </span>
            <span class="text-light-50">{{ line.content }}</span>
          </p>

          <!-- JSON brace -->
          <p
            v-else-if="line.type === 'brace'"
            class="mb-1.5 text-sm text-[#c8c8c8] animate-fadeUp"
          >
            {{ line.content }}
          </p>

          <!-- Name field (big) -->
          <div
            v-else-if="line.type === 'name'"
            class="mb-1.5 pl-6 animate-fadeUp"
          >
            <span class="text-sm text-terminal-cyan">"name"</span>
            <span class="text-sm text-[#c8c8c8]">: </span>
            <span
              class="block text-[clamp(28px,5vw,48px)] font-extrabold leading-tight text-light-50 mt-1"
            >
              <span class="text-terminal-green">{{
                siteMeta.name.split(" ")[0]
              }}</span>
              {{ " " + siteMeta.name.split(" ").slice(1).join(" ") }}
            </span>
          </div>

          <!-- Regular key-value -->
          <p
            v-else-if="line.type === 'kv'"
            class="mb-1.5 pl-6 text-sm animate-fadeUp"
          >
            <span class="text-terminal-cyan">"{{ line.key }}"</span>
            <span class="text-[#c8c8c8]">: </span>
            <span class="text-[#ff8c69]">"{{ line.value }}"</span>
          </p>

          <!-- Array field -->
          <p
            v-else-if="line.type === 'array'"
            class="mb-1.5 pl-6 text-sm animate-fadeUp"
          >
            <span class="text-terminal-cyan">"stack"</span>
            <span class="text-[#c8c8c8]">: [</span>
            <template v-for="(v, vi) in line.values" :key="vi">
              <span class="text-[#ff8c69]">"{{ v }}"</span>
              <span v-if="vi < line.values.length - 1" class="text-[#c8c8c8]"
                >,
              </span>
            </template>
            <span class="text-[#c8c8c8]">]</span>
          </p>

          <!-- Status field -->
          <p
            v-else-if="line.type === 'status'"
            class="mb-1.5 pl-6 text-sm animate-fadeUp"
          >
            <span class="text-terminal-cyan">"status"</span>
            <span class="text-[#c8c8c8]">: </span>
            <span class="text-terminal-amber">"{{ line.value }}"</span>
          </p>
        </template>

        <!-- Blinking cursor -->
        <p v-if="showCursor" class="mt-4 text-sm animate-fadeUp">
          <span class="text-terminal-green">❯ </span>
          <span class="cursor-blink" />
        </p>

        <!-- CTAs -->
        <div v-if="showCta" class="flex flex-wrap gap-4 mt-8 animate-fadeUp">
          <NuxtLink
            to="/#projects"
            class="px-6 py-2.5 border border-terminal-green text-terminal-green text-xs tracking-widest hover:bg-terminal-green hover:text-noir-950 transition-all duration-200 hover:shadow-[0_0_20px_rgba(0,255,136,0.3)]"
          >
            ./view_projects.sh
          </NuxtLink>
          <NuxtLink
            to="/#contact"
            class="px-6 py-2.5 border border-noir-700 text-noir-500 text-xs tracking-widest hover:border-terminal-cyan hover:text-terminal-cyan transition-all duration-200"
          >
            ./contact_me.sh
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { siteMeta } from "~/data/site";

const allLines = [
  { type: "cmd", content: "cat ./developer.json" },
  { type: "brace", content: "{" },
  { type: "name" },
  { type: "kv", key: "role", value: siteMeta.role },
  { type: "kv", key: "location", value: siteMeta.location },
  { type: "array", values: ["Nuxt.js", "Express.js", "PostgreSQL", "MongoDB"] },
  { type: "status", value: "open_to_opportunities" },
  { type: "brace", content: "}" },
];

const visibleLines = ref([]);
const showCursor = ref(false);
const showCta = ref(false);

onMounted(() => {
  allLines.forEach((line, i) => {
    setTimeout(
      () => {
        visibleLines.value.push(line);
        if (i === allLines.length - 1) {
          setTimeout(() => {
            showCursor.value = true;
          }, 300);
          setTimeout(() => {
            showCta.value = true;
          }, 600);
        }
      },
      150 + i * 200,
    );
  });
});
</script>
