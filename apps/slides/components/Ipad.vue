<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from "vue";
import { useNav } from "@slidev/client";

const nav = useNav();

const isUnderView = ref(true);

function toggle() {
  isUnderView.value = !isUnderView.value;
}

function openApp() {
  isUnderView.value = true;
}

function closeApp() {
  isUnderView.value = false;
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
  window.addEventListener("toggleApp", toggle);
  window.addEventListener("openApp", openApp);
  window.addEventListener("closeApp", closeApp);
});

onUnmounted(() => {
  window.removeEventListener("keydown", onKeyDown);
  window.removeEventListener("toggleApp", toggle);
  window.removeEventListener("openApp", openApp);
  window.removeEventListener("closeApp", closeApp);
});
</script>

<template>
  <div class="ipad" :class="{ 'ipad--under': isUnderView }">
    <div class="background" />
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
  top: 0;
  pointer-events: auto;
  /* top (not transform): iframes often only repaint after a parent transform ends */
  transition: top 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}

.background {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  background-color: #faf6e8;
}

.ipad--under {
  top: 100vh;
  pointer-events: none;
}

.ipad-screen {
  position: relative;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.ipad-content {
  width: 73%;
  height: 73%;
  position: absolute;
  left: 50%;
  top: 49%;
  transform: translate(-50%, -50%);
  zoom: 1;
}
</style>
