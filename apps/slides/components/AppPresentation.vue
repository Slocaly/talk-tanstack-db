<template>
  <!-- <div class="slidev-layout image" :style="style" /> -->
  <iframe src="http://localhost:5173" class="ipad-content"></iframe>
  <img
    src="/app-presentation.png"
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

.ipad-content {
  width: 60%;
  height: 825px;
  position: absolute;
  left: 51%;
  top: 36dvh;
  transform: translate(-50%, -50%);
  zoom: 0.5;
}
</style>
