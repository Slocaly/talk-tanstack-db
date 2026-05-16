<template>
  <div :class="boxClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    variant?: "fact" | "warning" | "punchline" | "chapter";
  }>(),
  {
    variant: "fact",
  },
);

const boxClasses = computed(() => [
  "narrateur-box",
  `narrateur-box--${props.variant}`,
]);
</script>
