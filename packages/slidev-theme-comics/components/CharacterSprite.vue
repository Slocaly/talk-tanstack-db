<template>
  <img
    v-if="character.shouldShow"
    :src="url"
    :alt="character.character"
    class="character-sprite"
    :class="[`character-sprite--${position}`, { 'character-sprite--flip': flip }]"
  />
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { CharacterToShow } from "../types/characters";
import { resolveAssetUrl } from "../utils/resolveAssetUrl";

const props = withDefaults(
  defineProps<{
    character: CharacterToShow;
    position?: "left" | "right" | "center";
    flip?: boolean;
    size?: "sm" | "md" | "lg";
  }>(),
  {
    position: "left",
    flip: false,
    size: "lg",
  },
);

const url = computed(() => {
  if (!props.character.shouldShow) return "";
  return resolveAssetUrl(
    `../public/images/${props.character.character}/${props.character.emotion}.png`,
  );
});
</script>
