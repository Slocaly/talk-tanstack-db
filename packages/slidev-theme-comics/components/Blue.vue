<script setup lang="ts"></script>

<template>
  <span class="ts-red"><slot /></span>
</template>

<style scoped>
.ts-red {
  display: inline-block;
  padding-inline-end: 3px;
  background-clip: text;
  background-image: linear-gradient(to right, oklch(0.715 0.143 215.221) 0%, oklch(0.546 0.245 262.881) 100%);
  color: transparent;
}
</style>
