<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from "vue";
import { useNav } from "@slidev/client";

const nav = useNav();

const isUnderView = ref(true);

function toggle() {
  isUnderView.value = !isUnderView.value;
}

function onKeyDown(e: KeyboardEvent) {
  if (e.repeat) return;
  if (e.key !== "+" && e.code !== "NumpadAdd") return;
  if (e.metaKey || e.ctrlKey || e.altKey) return;

  e.preventDefault();
  toggle();
}

// onSlideEnter does not run in global-top — watch slide navigation instead
watch(
  () => nav.currentSlideNo.value,
  () => {
    isUnderView.value = true;
  },
);

onMounted(() => {
  window.addEventListener("keydown", onKeyDown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", onKeyDown);
});
</script>

<template>
  <div class="ipad" :class="{ 'ipad--under': isUnderView }">
    <iframe src="http://localhost:5173" class="ipad-content"></iframe>
    <img src="/ipad.png" alt="ipad" class="ipad-screen" />
  </div>
</template>

<style scoped>
.ipad {
  width: 100%;
  height: 105%;
  position: absolute;
  left: 0;
  right: 0;
  top: -2.5vh;
  pointer-events: auto;
  /* top (not transform): iframes often only repaint after a parent transform ends */
  transition: top 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}

.ipad--under {
  top: 100vh;
  pointer-events: none;
}

.ipad-screen {
  z-index: -1;
  position: relative;
}

.ipad-content {
  width: 1100px;
  height: 700px;
  position: absolute;
  left: 50%;
  top: 55%;
  transform: translate(-50%, -50%);
  zoom: 0.5;
  border-radius: 30px;
}
</style>
