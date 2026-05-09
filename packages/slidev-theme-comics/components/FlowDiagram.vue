<script setup lang="ts">
import type { Edge, Node } from "@vue-flow/core";
import { useVueFlow, VueFlow } from "@vue-flow/core";

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

const { onInit } = useVueFlow();

onInit((vueFlowInstance) => {
  vueFlowInstance.updateNodeInternals(props.nodes.map((n) => n.id));
  vueFlowInstance.fitView();
});
</script>

<template>
  <div
    class="flow-diagram-wrapper"
    :style="{ width: props.width, height: props.height }"
  >
    <VueFlow
      class="basic-flow"
      :nodes="props.nodes"
      :edges="props.edges"
      :nodes-draggable="false"
      :nodes-connectable="false"
      :elements-selectable="false"
      :zoom-on-scroll="false"
      :pan-on-drag="false"
      :prevent-scrolling="true"
      fit-view-on-init
    />
  </div>
</template>


