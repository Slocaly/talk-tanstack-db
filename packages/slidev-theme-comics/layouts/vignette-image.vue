<template>
  <BackgroundImage v-if="backgroundImageUrl" :url="backgroundImageUrl" />
  <div
    class="slidev-layout vignette-image"
    :class="`vignette-image--${side}`"
    :style="backgroundStyle"
  >
    <ComicPanel v-if="image" class="vignette-image__frame" variant="inset">
      <img :src="imageUrl" alt="" class="vignette-image__img" />
    </ComicPanel>
    <ComicPanel class="vignette-image__content">
      <slot />
    </ComicPanel>
    <CharacterSprite
      v-if="characterToShow.shouldShow"
      :character="characterToShow"
      :position="characterSide"
      class="vignette-image__character"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import BackgroundImage from "../components/BackgroundImage.vue";
import CharacterSprite from "../components/CharacterSprite.vue";
import ComicPanel from "../components/ComicPanel.vue";
import type { Location } from "../types/characters";
import { parseCharacter } from "../utils/parseCharacter";
import { resolveAssetUrl } from "../utils/resolveAssetUrl";
import { useComicBackground } from "../utils/useComicBackground";

const props = withDefaults(
  defineProps<{
    location?: Location;
    background?: string;
    image?: string;
    side?: "left" | "right";
    character?: string;
  }>(),
  {
    side: "left",
  },
);

const { backgroundImageUrl, backgroundStyle } = useComicBackground(props);
const characterToShow = computed(() => parseCharacter(props.character));
const characterSide = computed(() => props.side);

const imageUrl = computed(() =>
  props.image ? resolveAssetUrl(props.image) : "",
);
</script>
