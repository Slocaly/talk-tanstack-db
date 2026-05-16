<template>
  <BackgroundImage v-if="backgroundImageUrl" :url="backgroundImageUrl" />
  <div class="slidev-layout deux-vignettes" :style="backgroundStyle">
    <ComicPanel class="deux-vignettes__left" :rotate="-0.8">
      <slot />
    </ComicPanel>
    <ComicPanel class="deux-vignettes__right" :rotate="0.8">
      <slot name="right" />
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
