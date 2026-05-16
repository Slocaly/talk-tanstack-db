<template>
  <BackgroundImage v-if="backgroundImageUrl" :url="backgroundImageUrl" />
  <div class="slidev-layout panneau-triple" :style="backgroundStyle">
    <ComicPanel class="panneau-triple__main" variant="code">
      <slot />
    </ComicPanel>
    <ComicPanel class="panneau-triple__top" :rotate="0.6">
      <slot name="top-right" />
    </ComicPanel>
    <ComicPanel class="panneau-triple__bottom" :rotate="-0.5">
      <slot name="bottom-right" />
    </ComicPanel>
  </div>
</template>

<script setup lang="ts">
import BackgroundImage from "../components/BackgroundImage.vue";
import ComicPanel from "../components/ComicPanel.vue";
import type { Location } from "../types/characters";
import { useComicBackground } from "../utils/useComicBackground";

const props = defineProps<{
  location?: Location;
  background?: string;
}>();

const { backgroundImageUrl, backgroundStyle } = useComicBackground(props);
</script>
