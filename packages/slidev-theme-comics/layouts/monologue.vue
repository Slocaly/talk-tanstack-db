<template>
  <BackgroundImage v-if="backgroundImageUrl" :url="backgroundImageUrl" />
  <div
    class="slidev-layout monologue"
    :class="`monologue--${side}`"
    :style="backgroundStyle"
  >
    <ComicPanel class="monologue__panel" :variant="panelVariant">
      <slot />
    </ComicPanel>
    <div class="monologue__character">
      <SpeakingCharacter
        v-if="characterToShow.shouldShow"
        :character="characterToShow"
        :position="characterPosition"
      >
        <slot name="speech" />
      </SpeakingCharacter>
    </div>
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
    character?: string;
    side?: "left" | "right";
    panel?: "panel" | "code";
  }>(),
  {
    side: "right",
    panel: "panel",
  },
);

const { backgroundImageUrl, backgroundStyle } = useComicBackground(props);
const characterToShow = computed(() => parseCharacter(props.character));
const characterPosition = computed(() =>
  props.side === "left" ? "left" : "right",
);
const panelVariant = computed(() => props.panel);
</script>
