<template>
  <BackgroundImage v-if="backgroundImageUrl" :url="backgroundImageUrl" />
  <div class="slidev-layout onomatopee-layout" :style="backgroundStyle">
    <Onomatopee
      :word="word"
      :color="color"
      :rotate="rotate"
      :size="size"
    />
    <slot />
  </div>
</template>

<script setup lang="ts">
import BackgroundImage from "../components/BackgroundImage.vue";
import Onomatopee from "../components/Onomatopee.vue";
import type { Location } from "../types/characters";
import { useComicBackground } from "../utils/useComicBackground";

const props = withDefaults(
  defineProps<{
    location?: Location;
    background?: string;
    word?: string;
    color?: string;
    rotate?: number;
    size?: "sm" | "md" | "lg" | "xl";
  }>(),
  {
    word: "CRACK!",
    color: "#c41e3a",
    rotate: -12,
    size: "xl",
  },
);

const { backgroundImageUrl, backgroundStyle } = useComicBackground(props);
</script>
