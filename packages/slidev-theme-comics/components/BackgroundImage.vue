<template>
  <img :src="url" class="absolute top-0 left-0 w-full h-full object-cover" alt="background image" />
</template>

<script setup lang="ts">
const props = defineProps({
  url: { type: String },
});
</script>

