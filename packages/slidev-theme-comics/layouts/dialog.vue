<template>
  <BackgroundImage v-if="backGroundImageUrl" :url="backGroundImageUrl" />
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
import { useSlideContext } from "@slidev/client";
import { computed } from "vue";
import {
  ALL_CHARACTERS,
  ALL_EMOTIONS,
  ALL_LOCATIONS,
  CharacterEmotion,
  CharacterName,
  CharacterToShow,
  Location,
} from "../types/characters";
import SpeakingCharacter from "../components/SpeakingCharacter.vue";
import BackgroundImage from "../components/BackgroundImage.vue";
import { resolveAssetUrl } from "../utils/resolveAssetUrl";

const { $frontmatter } = useSlideContext();

const characters = computed(
  (): { right: CharacterToShow; left: CharacterToShow } => {
    return {
      right: getCharacterToShow($frontmatter.right),
      left: getCharacterToShow($frontmatter.left),
    };
  },
);

const backGroundImageUrl = computed((): string | null =>
  getBackgroundImageUrl($frontmatter.location),
);

function getBackgroundImageUrl(location: Location | undefined) {
  if (ALL_LOCATIONS.includes(location)) {
    return resolveAssetUrl(`../public/images/background/${location}.png`);
  }
  return null;
}

function getCharacterToShow(
  characterInfo: string | undefined | null,
): CharacterToShow {
  if (!characterInfo) {
    return {
      shouldShow: false,
    };
  }

  const [character, emotion] = characterInfo.split(":");

  if (!isKnownCharacter(character)) {
    return {
      shouldShow: false,
    };
  }

  return {
    shouldShow: true,
    character: character,
    emotion: isKnownCharacterEmotion(emotion) ? emotion : "happy",
  };
}

function isKnownCharacter(name: string): name is CharacterName {
  return ALL_CHARACTERS.includes(name as CharacterName);
}

function isKnownCharacterEmotion(
  emotion: string | undefined,
): emotion is CharacterEmotion {
  return ALL_EMOTIONS.includes(emotion as CharacterEmotion);
}
</script>
