<template>
  <LangSwitcher />
  <div class="ipad-layer">
    <Ipad />
  </div>
</template>

<style scoped>
.ipad-layer {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 30;
}
</style>
