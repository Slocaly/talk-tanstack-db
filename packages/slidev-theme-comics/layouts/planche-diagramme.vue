<template>
  <BackgroundImage v-if="backgroundImageUrl" :url="backgroundImageUrl" />
  <div
    class="slidev-layout planche-diagramme"
    :class="{
      'planche-diagramme--stone': surface === 'stone',
      'planche-diagramme--panel': surface === 'panel',
    }"
    :style="backgroundStyle"
  >
    <NarrateurBox
      v-if="caption || $slots.caption"
      variant="chapter"
      class="planche-diagramme__caption"
    >
      <slot name="caption">{{ caption }}</slot>
    </NarrateurBox>
    <ComicPanel
      v-if="surface === 'panel'"
      class="planche-diagramme__frame"
      variant="inset"
      :tilt="tilt"
    >
      <div class="planche-diagramme__content" :style="contentStyle">
        <slot />
      </div>
    </ComicPanel>
    <div
      v-else
      class="planche-diagramme__frame planche-diagramme__stone"
      :class="{ 'planche-diagramme__stone--tilt': tilt }"
      :style="stoneFrameStyle"
    >
      <div class="planche-diagramme__content" :style="contentStyle">
        <slot />
      </div>
    </div>
    <CharacterSprite
      v-if="characterToShow.shouldShow"
      :character="characterToShow"
      :position="characterSide"
      class="planche-diagramme__character"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import BackgroundImage from "../components/BackgroundImage.vue";
import CharacterSprite from "../components/CharacterSprite.vue";
import ComicPanel from "../components/ComicPanel.vue";
import NarrateurBox from "../components/NarrateurBox.vue";
import type { Location } from "../types/characters";
import { parseCharacter } from "../utils/parseCharacter";
import { resolveAssetUrl } from "../utils/resolveAssetUrl";
import { useComicBackground } from "../utils/useComicBackground";

const DEFAULT_STONE_TEXTURE = "../public/images/textures/menhir.png";

const props = withDefaults(
  defineProps<{
    location?: Location;
    background?: string;
    caption?: string;
    character?: string;
    side?: "left" | "right";
    scale?: number;
    tilt?: boolean;
    surface?: "panel" | "stone";
    texture?: string;
  }>(),
  {
    side: "right",
    scale: 1,
    tilt: false,
    surface: "panel",
  },
);

const { backgroundImageUrl, backgroundStyle } = useComicBackground(props);
const characterToShow = computed(() => parseCharacter(props.character));
const characterSide = computed(() => props.side);

const contentStyle = computed(() => ({
  transform: props.scale !== 1 ? `scale(${props.scale})` : undefined,
}));

const stoneFrameStyle = computed(() => {
  const textureUrl = resolveAssetUrl(props.texture ?? DEFAULT_STONE_TEXTURE);
  return {
    backgroundImage: `linear-gradient(148deg, rgba(139, 133, 120, 0.35) 0%, rgba(90, 84, 73, 0.55) 100%), url("${textureUrl}")`,
  };
});
</script>

