<script setup lang="ts">
withDefaults(
  defineProps<{
    /** Stretch card to fill the parent height. */
    fill?: boolean;
  }>(),
  {
    fill: false,
  },
);
</script>

<template>
  <div class="comics-card" :class="{ 'comics-card--fill': fill }">
    <slot />
  </div>
</template>

<style scoped>
.comics-card {
  overflow: auto;
  padding: 1.25rem 1.5rem;
  background: #fff;
  border: 1px solid #e4e4e7;
  border-radius: 0.75rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
}

.comics-card--fill {
  height: 100%;
}
</style>
