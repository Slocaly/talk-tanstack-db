<template>
  <div
    class="slidev-layout deux-vignettes-radial"
    :style="{
      '--radial-color': color,
      '--radial-opacity': opacity,
    }"
  >
    <div class="deux-vignettes-radial__content" :style="contentStyle">
      <header class="deux-vignettes-radial__header">
        <slot />
      </header>
      <div class="deux-vignettes-radial__cols">
        <div
          v-if="revealCards"
          v-click="leftClick"
          class="deux-vignettes-radial__col"
        >
          <MacWindow
            v-if="macWindow"
            fill
            :title="leftTitle"
            :label="leftLabel"
            :height="macHeight"
            class="deux-vignettes-radial__mac"
          >
            <slot name="left" />
          </MacWindow>
          <Card v-else fill>
            <slot name="left" />
          </Card>
        </div>
        <template v-else>
          <MacWindow
            v-if="macWindow"
            fill
            :title="leftTitle"
            :label="leftLabel"
            :height="macHeight"
            class="deux-vignettes-radial__mac"
          >
            <slot name="left" />
          </MacWindow>
          <Card v-else fill>
            <slot name="left" />
          </Card>
        </template>

        <div
          v-if="revealCards"
          v-click="rightClick"
          class="deux-vignettes-radial__col"
        >
          <MacWindow
            v-if="macWindow"
            fill
            :title="rightTitle"
            :label="rightLabel"
            :height="macHeight"
            class="deux-vignettes-radial__mac"
          >
            <slot name="right" />
          </MacWindow>
          <Card v-else fill>
            <slot name="right" />
          </Card>
        </div>
        <template v-else>
          <MacWindow
            v-if="macWindow"
            fill
            :title="rightTitle"
            :label="rightLabel"
            :height="macHeight"
            class="deux-vignettes-radial__mac"
          >
            <slot name="right" />
          </MacWindow>
          <Card v-else fill>
            <slot name="right" />
          </Card>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import Card from "../components/Card.vue";
import MacWindow from "../components/MacWindow.vue";

const props = withDefaults(
  defineProps<{
    /** Accent color for the radial glow (CSS color). */
    color?: string;
    /** Peak opacity of the gradient center (0–1). */
    opacity?: number;
    /** CSS zoom applied to the slide content. */
    zoom?: number;
    /** Reveal left then right card on click (opt-in). */
    revealCards?: boolean;
    /** Click step at which the left card appears (when revealCards is true). */
    leftClick?: number;
    /** Click step at which the right card appears (when revealCards is true). */
    rightClick?: number;
    /** Wrap columns in MacWindow chrome. */
    macWindow?: boolean;
    /** MacWindow title for the left column. */
    leftTitle?: string;
    /** MacWindow title for the right column. */
    rightTitle?: string;
    /** MacWindow label for the left column. */
    leftLabel?: string;
    /** MacWindow label for the right column. */
    rightLabel?: string;
    /** MacWindow content height. */
    macHeight?: string;
  }>(),
  {
    color: "#c41e3a",
    opacity: 0.12,
    revealCards: false,
    leftClick: 1,
    rightClick: 2,
    macWindow: false,
    leftTitle: "code.ts",
    rightTitle: "code.ts",
  },
);

const contentStyle = computed(() =>
  props.zoom != null ? { zoom: props.zoom } : undefined,
);
</script>

<style scoped>
.deux-vignettes-radial {
  display: flex;
  min-height: 100%;
  background: #fff;
  isolation: isolate;
}

.deux-vignettes-radial::before {
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

.deux-vignettes-radial__content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  min-height: calc(100% - 2rem);
}

.deux-vignettes-radial__header {
  flex-shrink: 0;
  text-align: left;
}

.deux-vignettes-radial__header :deep(h1) {
  margin: 0;
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
}

.deux-vignettes-radial__cols {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  flex: 1;
  min-height: 0;
}

.deux-vignettes-radial__col {
  height: 100%;
  min-height: 0;
}

.deux-vignettes-radial__col.slidev-vclick-target {
  transition: opacity 0.35s ease;
}

.deux-vignettes-radial__mac {
  height: 100%;
}
</style>
