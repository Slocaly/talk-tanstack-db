<script setup lang="ts"></script>

<template>
  <span class="ts-red"><slot /></span>
</template>

<style scoped>
.ts-red {
  display: inline-block;
  padding-inline-end: 3px;
  background-clip: text;
  background-image: linear-gradient(to right, oklch(0.696 0.17 162.48) 0%, oklch(0.648 0.2 131.684) 100%);
  color: transparent;
}
</style>
