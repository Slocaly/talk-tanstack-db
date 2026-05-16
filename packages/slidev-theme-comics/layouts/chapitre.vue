<template>
  <BackgroundImage v-if="backgroundImageUrl" :url="backgroundImageUrl" />
  <div class="slidev-layout chapitre" :style="backgroundStyle">
    <Onomatopee
      v-if="onomatopee"
      class="chapitre__fx"
      :word="onomatopee"
      size="md"
      decor
    />
    <NarrateurBox variant="chapter" class="chapitre__box">
      <p v-if="number" class="chapitre__number">{{ number }}</p>
      <slot />
      <div v-if="$slots.subtitle" class="chapitre__subtitle">
        <slot name="subtitle" />
      </div>
    </NarrateurBox>
    <CharacterSprite
      v-if="characterToShow.shouldShow"
      :character="characterToShow"
      :position="characterSide"
      class="chapitre__character"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import BackgroundImage from "../components/BackgroundImage.vue";
import CharacterSprite from "../components/CharacterSprite.vue";
import NarrateurBox from "../components/NarrateurBox.vue";
import Onomatopee from "../components/Onomatopee.vue";
import type { Location } from "../types/characters";
import { parseCharacter } from "../utils/parseCharacter";
import { useComicBackground } from "../utils/useComicBackground";

const props = withDefaults(
  defineProps<{
    location?: Location;
    background?: string;
    number?: string;
    onomatopee?: string;
    character?: string;
    side?: "left" | "right";
  }>(),
  {
    side: "right",
    onomatopee: "POW!",
  },
);

const { backgroundImageUrl, backgroundStyle } = useComicBackground(props);
const characterToShow = computed(() => parseCharacter(props.character));
const characterSide = computed(() => props.side);
</script>
