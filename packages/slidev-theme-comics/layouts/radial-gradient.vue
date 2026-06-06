<template>
  <div
    class="slidev-layout radial-gradient"
    :style="{
      '--radial-color': color,
      '--radial-opacity': opacity,
    }"
  >
    <div class="radial-gradient__content" :style="contentStyle">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    /** Accent color for the radial glow (CSS color). */
    color?: string;
    /** Peak opacity of the gradient center (0–1). */
    opacity?: number;
    /** CSS zoom applied to the slide content. */
    zoom?: number;
  }>(),
  {
    color: "#c41e3a",
    opacity: 0.12,
  },
);

const contentStyle = computed(() =>
  props.zoom != null ? { zoom: props.zoom } : undefined,
);
</script>

<style scoped>
.radial-gradient {
  display: flex;
  justify-content: center;
  min-height: 100%;
  background: #fff;
  isolation: isolate;
}

.radial-gradient__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.radial-gradient::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: -1;
  opacity: var(--radial-opacity, 0.12);
  background: radial-gradient(
    ellipse 90% 80% at 50% 42%,
    var(--radial-color, #c41e3a) 0%,
    color-mix(in srgb, var(--radial-color, #c41e3a) 40%, transparent) 42%,
    transparent 72%
  );
}
</style>
