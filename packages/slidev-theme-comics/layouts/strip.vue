<template>
  <BackgroundImage v-if="backgroundImageUrl" :url="backgroundImageUrl" />
  <div class="slidev-layout strip" :style="backgroundStyle">
    <NarrateurBox
      v-if="$slots.header"
      variant="chapter"
      class="strip__header"
    >
      <slot name="header" />
    </NarrateurBox>
    <div class="strip__panels" :style="{ gridTemplateColumns: `repeat(${columns}, 1fr)` }">
      <ComicPanel
        v-for="(slotName, index) in panelSlots"
        :key="slotName"
        class="strip__cell"
        :rotate="rotations[index]"
      >
        <slot :name="slotName" />
      </ComicPanel>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import BackgroundImage from "../components/BackgroundImage.vue";
import ComicPanel from "../components/ComicPanel.vue";
import NarrateurBox from "../components/NarrateurBox.vue";
import type { Location } from "../types/characters";
import { useComicBackground } from "../utils/useComicBackground";

const props = withDefaults(
  defineProps<{
    location?: Location;
    background?: string;
    columns?: number;
  }>(),
  {
    columns: 4,
  },
);

const { backgroundImageUrl, backgroundStyle } = useComicBackground(props);

const panelSlots = computed(() => {
  const names = ["step1", "step2", "step3", "step4", "step5", "step6"];
  return names.slice(0, props.columns);
});

const rotations = [-0.8, 0.5, -0.4, 0.7, -0.6, 0.4];
</script>
