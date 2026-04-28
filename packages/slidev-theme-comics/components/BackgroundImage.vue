<template>
  <img :src="url" class="absolute top-0 left-0 w-full h-full object-cover">
</template>

<script setup>
const props = defineProps({
  url: { type: String },
});


</script>

<style scoped>

</style>
