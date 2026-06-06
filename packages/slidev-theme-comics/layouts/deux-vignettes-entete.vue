<template>
  <BackgroundImage v-if="backgroundImageUrl" :url="backgroundImageUrl" />
  <div class="slidev-layout deux-vignettes-entete" :style="backgroundStyle">
    <NarrateurBox variant="chapter" class="deux-vignettes-entete__header">
      <slot />
    </NarrateurBox>
    <div class="deux-vignettes-entete__cols">
      <div
        v-if="revealCards"
        v-click="1"
        class="deux-vignettes-entete__col"
      >
        <ComicPanel variant="code" :rotate="-0.6">
          <slot name="left" />
        </ComicPanel>
      </div>
      <ComicPanel v-else variant="code" :rotate="-0.6">
        <slot name="left" />
      </ComicPanel>

      <div
        v-if="revealCards"
        v-click="2"
        class="deux-vignettes-entete__col"
      >
        <ComicPanel variant="code" :rotate="0.6">
          <slot name="right" />
        </ComicPanel>
      </div>
      <ComicPanel v-else variant="code" :rotate="0.6">
        <slot name="right" />
      </ComicPanel>
    </div>
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
    /** Reveal left then right card on click (opt-in). */
    revealCards?: boolean;
  }>(),
  {
    revealCards: false,
  },
);

const { backgroundImageUrl, backgroundStyle } = useComicBackground(props);
</script>
