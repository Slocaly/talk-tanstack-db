<template>
  <BackgroundImage v-if="backgroundImageUrl" :url="backgroundImageUrl" />
  <div class="slidev-layout planche-titre" :style="backgroundStyle">
    <div v-if="bandeau || $slots.bandeau" class="planche-titre__bandeau">
      <slot name="bandeau">{{ bandeau }}</slot>
    </div>
    <ComicPanel class="planche-titre__panel" variant="panel" :tilt="false">
      <slot />
    </ComicPanel>
    <SpeakingCharacter
      v-if="characterToShow.shouldShow"
      :character="characterToShow"
      :position="characterSide"
    >
      <slot name="speech" />
    </SpeakingCharacter>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import BackgroundImage from "../components/BackgroundImage.vue";
import ComicPanel from "../components/ComicPanel.vue";
import SpeakingCharacter from "../components/SpeakingCharacter.vue";
import type { Location } from "../types/characters";
import { parseCharacter } from "../utils/parseCharacter";
import { useComicBackground } from "../utils/useComicBackground";

const props = withDefaults(
  defineProps<{
    location?: Location;
    background?: string;
    bandeau?: string;
    character?: string;
    side?: "left" | "right";
  }>(),
  {
    side: "left",
  },
);

const { backgroundImageUrl, backgroundStyle } = useComicBackground(props);
const characterToShow = computed(() => parseCharacter(props.character));
const characterSide = computed(() => props.side);
</script>
