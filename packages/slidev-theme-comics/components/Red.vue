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
    oklch(0.637 0.237 25.331) 0%,
    oklch(0.769 0.188 70.08) 100%
  );
  color: transparent;
}
</style>
