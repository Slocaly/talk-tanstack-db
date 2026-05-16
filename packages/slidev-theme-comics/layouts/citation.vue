<template>
  <BackgroundImage v-if="backgroundImageUrl" :url="backgroundImageUrl" />
  <div class="slidev-layout citation" :style="backgroundStyle">
    <ComicPanel class="citation__quote" variant="panel">
      <blockquote class="citation__text">
        <slot />
      </blockquote>
    </ComicPanel>
    <p v-if="$slots.author" class="citation__author">
      <slot name="author" />
    </p>
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
