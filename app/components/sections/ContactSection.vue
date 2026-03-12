<template>
  <section id="contact" class="py-24 px-6 max-w-4xl mx-auto">
    <SectionHeader num="04." title="CONTACT" />

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 reveal">
      <!-- Info -->
      <div>
        <h3 class="text-[15px] text-light-50 font-normal mb-3">
          <span class="text-terminal-green">$</span> ping me — let's build
          something.
        </h3>
        <p class="text-[13px] text-noir-500 leading-relaxed mb-8">
          Open to freelance projects, full-time roles, or a good conversation
          about tech. Response time under 24 hours.
        </p>

        <div class="flex flex-col gap-3">
          <a
            v-for="link in socialLinks"
            :key="link.label"
            :href="link.href"
            target="_blank"
            rel="noopener"
            class="flex items-center gap-3 px-4 py-3 border border-noir-700 text-[12px] text-noir-500 tracking-wide hover:border-terminal-green hover:text-terminal-green hover:bg-terminal-green/[0.02] transition-all duration-200"
          >
            <span class="text-terminal-green text-sm">{{ link.icon }}</span>
            {{ link.label }}
          </a>
        </div>
      </div>

      <!-- Form 
      <form class="flex flex-col gap-4" @submit.prevent="handleSubmit">
        <div
          v-for="field in fields"
          :key="field.name"
          class="flex flex-col gap-1.5"
        >
          <label class="text-[10px] tracking-[0.2em] uppercase text-noir-500">
            // {{ field.label }}
          </label>
          <textarea
            v-if="field.type === 'textarea'"
            v-model="form[field.name]"
            :placeholder="field.placeholder"
            rows="5"
            required
            class="bg-noir-800 border border-noir-700 px-3.5 py-2.5 text-[13px] font-mono resize-none text-light-50 placeholder:text-noir-500 focus:outline-none focus:border-terminal-green focus:shadow-[0_0_0_2px_rgba(0,255,136,0.05)] transition-all duration-200"
          />
          <input
            v-else
            v-model="form[field.name]"
            :type="field.type"
            :placeholder="field.placeholder"
            required
            class="bg-noir-800 border border-noir-700 px-3.5 py-2.5 text-[13px] font-mono text-light-50 placeholder:text-noir-500 focus:outline-none focus:border-terminal-green focus:shadow-[0_0_0_2px_rgba(0,255,136,0.05)] transition-all duration-200"
          />
        </div>

        <button
          type="submit"
          :class="[
            'self-start px-7 py-3 border text-xs tracking-widest uppercase',
            'transition-all duration-200 font-mono',
            sent
              ? 'border-terminal-green bg-terminal-green text-noir-950'
              : 'border-terminal-green text-terminal-green hover:bg-terminal-green hover:text-noir-950 hover:shadow-[0_0_20px_rgba(0,255,136,0.25)]',
          ]"
        >
          {{ sent ? "> message sent ✓" : "./send_message.sh ↗" }}
        </button>
      </form>-->
    </div>
  </section>
</template>

<script setup>
import { socialLinks } from "~/data/site";

const fields = [
  { name: "name", label: "name", type: "text", placeholder: "John Doe" },
  {
    name: "email",
    label: "email",
    type: "email",
    placeholder: "john@example.com",
  },
  {
    name: "message",
    label: "message",
    type: "textarea",
    placeholder: "Hey, I'd like to talk about…",
  },
];

const form = reactive({ name: "", email: "", message: "" });
const sent = ref(false);

function handleSubmit() {
  sent.value = true;
  setTimeout(() => {
    sent.value = false;
    Object.assign(form, { name: "", email: "", message: "" });
  }, 3500);
}
</script>
