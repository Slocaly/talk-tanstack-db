<template>
  <BackgroundImage v-if="backgroundImageUrl" :url="backgroundImageUrl" />
  <div class="slidev-layout fin" :style="backgroundStyle">
    <ComicPanel class="fin__panel">
      <slot />
    </ComicPanel>
    <div class="fin__cast">
      <CharacterSprite
        v-for="(char, index) in cast"
        :key="index"
        :character="char"
        position="center"
        size="md"
        :flip="index === 1"
        class="fin__sprite"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import BackgroundImage from "../components/BackgroundImage.vue";
import CharacterSprite from "../components/CharacterSprite.vue";
import ComicPanel from "../components/ComicPanel.vue";
import type { CharacterToShow, Location } from "../types/characters";
import { parseCharacter } from "../utils/parseCharacter";
import { useComicBackground } from "../utils/useComicBackground";

const props = withDefaults(
  defineProps<{
    location?: Location;
    background?: string;
    characters?: string;
  }>(),
  {
    location: "village",
    characters: "asterix:happy,obelix:happy,panoramix:happy",
  },
);

const { backgroundImageUrl, backgroundStyle } = useComicBackground(props);

const cast = computed((): CharacterToShow[] => {
  return props.characters
    .split(",")
    .map((entry) => parseCharacter(entry.trim()))
    .filter((c) => c.shouldShow);
});
</script>
