<script setup lang="ts">
import { computed } from "vue";
import { handleBackground } from "../utils/handleBackground";

const props = defineProps({
  image: {
    default: "",
  },
});

const style = computed(() => handleBackground(props.image, false));
</script>

<template>
  <div class="slidev-layout image" :style="style">
    <div class="my-auto w-full">
      <slot />
    </div>
  </div>
</template>
