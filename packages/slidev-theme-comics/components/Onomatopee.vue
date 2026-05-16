<template>
  <div
    class="onomatopee"
    :class="[`onomatopee--${size}`, { 'onomatopee--decor': decor }]"
    :style="{ color, transform: `rotate(${rotate}deg)` }"
  >
    <slot>{{ word }}</slot>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    word?: string;
    color?: string;
    rotate?: number;
    size?: "sm" | "md" | "lg" | "xl";
    decor?: boolean;
  }>(),
  {
    word: "POW!",
    color: "#c41e3a",
    rotate: -8,
    size: "lg",
    decor: false,
  },
);
</script>
