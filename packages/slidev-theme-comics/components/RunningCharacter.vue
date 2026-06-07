<script setup lang="ts">
import { useMotion } from "@vueuse/motion";
import { computed, ref } from "vue";
import { onSlideEnter } from "@slidev/client";

const props = withDefaults(
  defineProps<{
    ingredientPositions: { x: number; y: number }[];
    character: "asterix" | "obelix";
  }>(),
  {
    ingredientPosition: () => ({ x: -100, y: -100 }),
    character: "obelix",
  },
);

const el = ref();

let scaleX = props.ingredientPositions[0].x > 0 ? 1 : -1;

const { apply } = useMotion(el, {
  initial: {
    x: 0,
    y: 0,
    scaleX,
  },
});

let isAnimating = false;

async function runAnimation() {
  if (isAnimating) {
    return;
  }
  isAnimating = true;

  let lastPosition = { x: 0, y: 0 };

  for (let position of props.ingredientPositions) {
    if (position.x < lastPosition.x && scaleX > 0) {
      scaleX = -1;
      await apply({
        x: lastPosition.x,
        y: lastPosition.y,
        scaleX: scaleX,
        transition: { duration: 0 },
      });
    }
    if (position.x > lastPosition.x && scaleX < 0) {
      scaleX = 1;
      await apply({
        x: lastPosition.x,
        y: lastPosition.y,
        scaleX: scaleX,
        transition: { duration: 0 },
      });
    }

    await apply({
      x: position.x,
      y: position.y,
      transition: {
        duration: 1500,
        easings: ["linear"],
      },
    });
    lastPosition = position;
  }

  await apply({
    x: lastPosition.x,
    y: lastPosition.y,
    scaleX: -1 * scaleX,
    transition: { duration: 0 },
  });

  await apply({
    x: 0,
    y: 0,
    transition: {
      duration: 1500,
      easings: ["linear"],
    },
  });
  isAnimating = false;
}

let imageUrl = computed(() =>
  props.character === "asterix"
    ? "/panoramix-burnout/running_asterix.png"
    : "/panoramix-burnout/running_obelix.png",
);

onSlideEnter(() => runAnimation());
</script>

<template>
  <img
    ref="el"
    :src="imageUrl"
    :style="{
      height: '50px',
      position: 'absolute',
      top: '220px',
      left: '400px',
    }"
  />
</template>
