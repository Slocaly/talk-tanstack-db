<template>
  <BackgroundImage v-if="backgroundImageUrl" :url="backgroundImageUrl" />
  <div class="slidev-layout deux-vignettes-entete" :style="backgroundStyle">
    <NarrateurBox variant="chapter" class="deux-vignettes-entete__header">
      <slot />
    </NarrateurBox>
    <div class="deux-vignettes-entete__cols">
      <ComicPanel :rotate="-0.6">
        <slot name="left" />
      </ComicPanel>
      <ComicPanel :rotate="0.6">
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

const props = defineProps<{
  location?: Location;
  background?: string;
}>();

const { backgroundImageUrl, backgroundStyle } = useComicBackground(props);
</script>
