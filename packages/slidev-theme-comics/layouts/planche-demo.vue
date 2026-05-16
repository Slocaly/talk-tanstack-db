<template>
  <BackgroundImage v-if="backgroundImageUrl" :url="backgroundImageUrl" />
  <div class="slidev-layout planche-demo" :style="backgroundStyle">
    <NarrateurBox
      v-if="caption || $slots.caption"
      variant="chapter"
      class="planche-demo__caption"
    >
      <slot name="caption">{{ caption }}</slot>
    </NarrateurBox>
    <ComicPanel class="planche-demo__code" variant="code">
      <slot />
    </ComicPanel>
    <SpeakingCharacter
      v-if="characterToShow.shouldShow"
      :character="characterToShow"
      position="right"
    >
      <slot name="speech" />
    </SpeakingCharacter>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import BackgroundImage from "../components/BackgroundImage.vue";
import ComicPanel from "../components/ComicPanel.vue";
import NarrateurBox from "../components/NarrateurBox.vue";
import SpeakingCharacter from "../components/SpeakingCharacter.vue";
import type { Location } from "../types/characters";
import { parseCharacter } from "../utils/parseCharacter";
import { useComicBackground } from "../utils/useComicBackground";

const props = withDefaults(
  defineProps<{
    location?: Location;
    background?: string;
    caption?: string;
    character?: string;
  }>(),
  {},
);

const { backgroundImageUrl, backgroundStyle } = useComicBackground(props);
const characterToShow = computed(() => parseCharacter(props.character));
</script>
