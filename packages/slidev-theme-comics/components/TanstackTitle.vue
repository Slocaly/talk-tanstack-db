<script setup lang="ts">
withDefaults(
  defineProps<{
    /** Stretch card to fill the parent height. */
    small?: boolean;
  }>(),
  {
    small: false,
  },
);
</script>

<template>
  <span class="ts-title" :class="{ big: !small }"><slot /></span>
</template>

<style scoped>
.ts-title {
  font-family: Inter, sans-serif;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: -1px;
}
.ts-title.big {
  letter-spacing: -3px;
}
</style>
