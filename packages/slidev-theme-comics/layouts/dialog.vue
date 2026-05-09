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

const props = defineProps<{
  location?: Location;
  left?: string;
  right?: string;
  frontmatter: unknown;
}>();

const characters = computed(
  (): { right: CharacterToShow; left: CharacterToShow } => {
    return {
      right: getCharacterToShow(props.right),
      left: getCharacterToShow(props.left),
    };
  },
);

const backGroundImageUrl = computed((): string | null =>
  getBackgroundImageUrl(props.location),
);

function getBackgroundImageUrl(location: Location | undefined) {
  if (!location) {
    return null;
  }
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
