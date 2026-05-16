<template>
  <BackgroundImage v-if="backgroundImageUrl" :url="backgroundImageUrl" />
  <div class="slidev-layout narrateur" :style="backgroundStyle">
    <NarrateurBox :variant="variant" class="narrateur__box">
      <slot />
    </NarrateurBox>
  </div>
</template>

<script setup lang="ts">
import BackgroundImage from "../components/BackgroundImage.vue";
import NarrateurBox from "../components/NarrateurBox.vue";
import type { Location } from "../types/characters";
import { useComicBackground } from "../utils/useComicBackground";

const props = withDefaults(
  defineProps<{
    location?: Location;
    background?: string;
    variant?: "fact" | "warning" | "punchline" | "chapter";
  }>(),
  {
    variant: "fact",
  },
);

const { backgroundImageUrl, backgroundStyle } = useComicBackground(props);
</script>
