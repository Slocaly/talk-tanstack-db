<script setup lang="ts">
withDefaults(
  defineProps<{
    /** Stretch card to fill the parent height. */
    small?: boolean;
    big?: boolean;
  }>(),
  {
    small: false,
    big: false,
  },
);
</script>

<template>
  <span class="ts-title" :class="{ normal: !small, big: big }"><slot /></span>
</template>

<style scoped>
.ts-title,
.ts-title * {
  font-family: Inter, sans-serif;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: -1px;
}
.ts-title.normal, .ts-title.normal * {
  letter-spacing: -3px;
}
.ts-title.big, .ts-title.big * {
  letter-spacing: -4px;
}
</style>
