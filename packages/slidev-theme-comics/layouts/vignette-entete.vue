<template>
  <BackgroundImage v-if="backgroundImageUrl" :url="backgroundImageUrl" />
  <div class="slidev-layout vignette-entete" :style="backgroundStyle">
    <NarrateurBox variant="chapter" class="vignette-entete__header">
      <slot />
    </NarrateurBox>
    <div
      v-if="revealCards"
      v-click="1"
      class="vignette-entete__card"
    >
      <ComicPanel variant="code" :rotate="-0.6">
        <slot name="card" />
      </ComicPanel>
    </div>
    <ComicPanel v-else variant="code" :rotate="-0.6" class="vignette-entete__panel">
      <slot name="card" />
    </ComicPanel>
  </div>
</template>

<script setup lang="ts">
import BackgroundImage from "../components/BackgroundImage.vue";
import ComicPanel from "../components/ComicPanel.vue";
import NarrateurBox from "../components/NarrateurBox.vue";
import type { Location } from "../types/characters";
import { useComicBackground } from "../utils/useComicBackground";

const props = withDefaults(
  defineProps<{
    location?: Location;
    background?: string;
    /** Reveal the card on click (opt-in). */
    revealCards?: boolean;
  }>(),
  {
    revealCards: false,
  },
);

const { backgroundImageUrl, backgroundStyle } = useComicBackground(props);
</script>
