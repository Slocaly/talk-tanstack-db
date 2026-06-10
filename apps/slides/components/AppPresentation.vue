<script setup lang="ts">
import { onSlideEnter } from "@slidev/client";

onSlideEnter(() => {
  window.dispatchEvent(new CustomEvent("toggleApp"));
});
</script>

<template>
  <img
    src="/panoramix-burnout/fond-village-iphonix.png"
    alt="app-presentation"
    class="app-presentation"
  />
</template>

<style scoped>
.app-presentation {
  width: 100%;
  position: absolute;
  left: 0;
  top: -5%;
  object-fit: contain;
  pointer-events: none;
}
</style>
