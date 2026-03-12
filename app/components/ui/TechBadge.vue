<template>
  <span
    :class="[
      'text-[10px] px-2 py-0.5 border tracking-wider transition-all duration-200',
      layerClass,
    ]"
    >{{ tag.name }}</span
  >
</template>

<script setup>
const props = defineProps({
  tag: { type: Object, required: true },
});

const layerClass = computed(() => {
  const map = {
    fe: "border-terminal-cyan/30 text-terminal-cyan hover:bg-terminal-cyan/5",
    be: "border-terminal-green/30 text-terminal-green hover:bg-terminal-green/5",
    db: "border-terminal-amber/30 text-terminal-amber hover:bg-terminal-amber/5",
    devops:
      "border-noir-600 text-noir-500 hover:border-terminal-green hover:text-terminal-green",
    ext: "border-terminal-purple/30 text-terminal-purple hover:bg-terminal-purple/5",
  };
  return map[props.tag.layer];
});
</script>
