<script setup lang="ts">
import { VueFlow, useVueFlow } from "@vue-flow/core";
import type { Node, Edge } from "@vue-flow/core";

const props = withDefaults(
  defineProps<{
    nodes: Node[];
    edges: Edge[];
    width?: string;
    height?: string;
  }>(),
  {
    width: "100%",
    height: "100%",
  },
);

const { onPaneReady } = useVueFlow();

onPaneReady(({ fitView }) => {
  fitView({ padding: 0.2 });
});
</script>

<template>
  <div
    class="flow-diagram-wrapper"
    :style="{ width: props.width, height: props.height }"
  >
    <VueFlow
      :nodes="props.nodes"
      :edges="props.edges"
      :fit-view-on-init="true"
      :nodes-draggable="false"
      :nodes-connectable="false"
      :elements-selectable="false"
      :zoom-on-scroll="false"
      :pan-on-drag="false"
      :prevent-scrolling="true"
    />
  </div>
</template>

<style>
/* Required structural CSS — unscoped so it applies to vue-flow's dynamically injected classes */
@import "../../../node_modules/.pnpm/@vue-flow+core@1.48.2_vue@3.5.32_typescript@5.9.3_/node_modules/@vue-flow/core/dist/style.css";
@import "../../../node_modules/.pnpm/@vue-flow+core@1.48.2_vue@3.5.32_typescript@5.9.3_/node_modules/@vue-flow/core/dist/theme-default.css";
</style>

