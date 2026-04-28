<template>
  <img
    :src="url"
    :alt="props.character.character"
    class="absolute bottom-0 h-3/5"
    :class="cssClasses"
  />
  <SpeechBubble
    :x="bubblePosition.x"
    :y="bubblePosition.y"
    :width="300"
    :height="160"
    :tail-x="tailPosition.x"
    :tail-y="tailPosition.y"
    fill="white"
    stroke="black"
    :stroke-width="4"
    :text-style="{ fontSize: '18px', color: '#111' }"
  >
    <slot />
  </SpeechBubble>
</template>

<script lang="ts" setup>
import { CharacterEmotion, CharacterName } from "../types/characters";
import { computed } from "vue";
import { resolveAssetUrl } from "../utils/resolveAssetUrl";
import SpeechBubble from "./SpeechBubble.vue";

const props = defineProps<{
  character: {
    character: CharacterName;
    emotion: CharacterEmotion;
  };
  position: "left" | "right";
}>();

const TAILS_POSITIONS = {
  asterix: {
    angry: {
      x: 30,
      y: 280,
    },
    happy: {
      x: 25,
      y: 280,
    },
    sad: {
      x: 0,
      y: 280,
    },
    scorn: {
      x: 40,
      y: 280,
    },
  },
  panoramix: {
    angry: {
      x: 20,
      y: 260,
    },
    happy: {
      x: 0,
      y: 270,
    },
    sad: {
      x: 60,
      y: 220,
    },
    scorn: {
      x: 10,
      y: 260,
    },
  },
  obelix: {
    angry: {
      x: 10,
      y: 220,
    },
    happy: {
      x: 0,
      y: 210,
    },
    sad: {
      x: 50,
      y: 220,
    },
    scorn: {
      x: 35,
      y: 220,
    },
  },
} as const;

const BUBBLE_POSITIONS = {
  left: {
    x: 100,
    y: -10,
  },
  right: {
    x: 600,
    y: 30,
  },
};

const bubblePosition = BUBBLE_POSITIONS[props.position];

const url = computed(() =>
  resolveAssetUrl(
    `../public/images/${props.character.character}/${props.character.emotion}.png`,
  ),
);

const cssClasses =
  props.position === "right" ? "right-0 -scale-x-100" : "left-0";

const leftTailPosition =
  TAILS_POSITIONS[props.character.character][props.character.emotion];

const tailPosition =
  props.position === "left"
    ? leftTailPosition
    : {
        x: 220 - leftTailPosition.x,
        y: leftTailPosition.y - BUBBLE_POSITIONS.right.y,
      };

</script>
