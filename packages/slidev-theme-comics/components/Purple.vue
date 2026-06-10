<script setup lang="ts"></script>

<template>
  <span class="ts-red"><slot /></span>
</template>

<style scoped>
.ts-red {
  display: inline-block;
  padding-inline-end: 3px;
  background-clip: text;
  background-image: linear-gradient(
    to right,
    oklch(62.7% 0.265 303.9) 0%, oklch(54.1% 0.281 293.009) 100%
  );
  color: transparent;
}
</style>
