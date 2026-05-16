<template>
  <BackgroundImage v-if="backgroundImageUrl" :url="backgroundImageUrl" />
  <div class="slidev-layout dialog">
    <SpeakingCharacter
      v-if="characters.left.shouldShow"
      :character="characters.left"
      position="left"
    >
      <slot />
    </SpeakingCharacter>
    <SpeakingCharacter
      v-if="characters.right.shouldShow"
      :character="characters.right"
      position="right"
    >
      <slot name="right" />
    </SpeakingCharacter>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import BackgroundImage from "../components/BackgroundImage.vue";
import SpeakingCharacter from "../components/SpeakingCharacter.vue";
import type { Location } from "../types/characters";
import { parseCharacter } from "../utils/parseCharacter";
import { useComicBackground } from "../utils/useComicBackground";

const props = defineProps<{
  location?: Location;
  left?: string;
  right?: string;
}>();

const { backgroundImageUrl } = useComicBackground(props);

const characters = computed(() => ({
  right: parseCharacter(props.right),
  left: parseCharacter(props.left),
}));
</script>
