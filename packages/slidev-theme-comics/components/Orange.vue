<script setup lang="ts"></script>

<template>
  <span class="ts-red"><slot /></span>
</template>

<style scoped>
.ts-red {
  display: inline-block;
  padding-inline-end: 3px;
  background-clip: text;
  background-image: linear-gradient(to right, oklch(0.705 0.213 47.604) 0%, oklch(0.553 0.195 38.402) 100%);
  color: transparent;
}
</style>
