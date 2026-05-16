<template>
  <div :class="panelClasses" :style="panelStyle">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    variant?: "panel" | "narrator" | "code" | "inset";
    rotate?: number;
    tilt?: boolean;
  }>(),
  {
    variant: "panel",
    rotate: 0,
    tilt: false,
  },
);

const panelClasses = computed(() => [
  "comic-panel",
  `comic-panel--${props.variant}`,
  { "comic-panel--tilt": props.tilt },
]);

const panelStyle = computed(() => ({
  transform: props.rotate ? `rotate(${props.rotate}deg)` : undefined,
}));
</script>
