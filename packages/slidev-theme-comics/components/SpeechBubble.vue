<template>
  <div class="speech-bubble" :style="containerStyle">
    <svg
        :width="svgWidth"
        :height="svgHeight"
        :viewBox="`0 0 ${svgWidth} ${svgHeight}`"
        style="overflow: visible"
    >
      <path
          :d="bubblePath"
          :fill="fill"
          :stroke="stroke"
          :stroke-width="strokeWidth"
          stroke-linejoin="round"
          stroke-linecap="round"
      />
    </svg>

    <div class="speech-bubble-text" :style="textBoxStyle">
      <slot>Bonjour !</slot>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  x: { type: Number, default: 50 },
  y: { type: Number, default: 50 },
  width: { type: Number, default: 260 },
  height: { type: Number, default: 140 },
  tailX: { type: Number, default: 80 },
  tailY: { type: Number, default: 180 },
  stroke: { type: String, default: "black" },
  fill: { type: String, default: "white" },
  strokeWidth: { type: Number, default: 4 },
  textStyle: { type: Object, default: () => ({}) },
});

const pad = 30;

// On garde la bulle dans son propre repère local
const cx = computed(() => props.width / 2 + pad);
const cy = computed(() => props.height / 2 + pad);
const rx = computed(() => props.width / 2);
const ry = computed(() => props.height / 2);

// Coordonnées absolues de la pointe de queue dans le SVG
const tipX = computed(() => props.tailX + pad);
const tipY = computed(() => props.tailY + pad);

const svgWidth = computed(() =>
    Math.max(props.width, props.tailX, 0) + pad * 2
);

const svgHeight = computed(() =>
    Math.max(props.height, props.tailY, 0) + pad * 2
);

function pointOnEllipse(cx, cy, rx, ry, a) {
  return {
    x: cx + rx * Math.cos(a),
    y: cy + ry * Math.sin(a),
  };
}

function normalizeAngle(a) {
  while (a < 0) a += Math.PI * 2;
  while (a >= Math.PI * 2) a -= Math.PI * 2;
  return a;
}

function buildBubblePath(cx, cy, rx, ry, tipX, tipY) {
  const angle = Math.atan2(tipY - cy, tipX - cx);

  // Taille de l’ouverture dans l’ellipse pour insérer la queue
  const gap = 0.34;

  const a1 = normalizeAngle(angle - gap / 2);
  const a2 = normalizeAngle(angle + gap / 2);

  const p1 = pointOnEllipse(cx, cy, rx, ry, a1);
  const p2 = pointOnEllipse(cx, cy, rx, ry, a2);

  // On parcourt l’ellipse "dans l’autre sens" pour éviter de tracer le segment coupé
  const start = a2;
  let end = a1;
  if (end <= start) end += Math.PI * 2;

  const steps = 48;
  const pts = [];

  for (let i = 0; i <= steps; i++) {
    const t = start + ((end - start) * i) / steps;
    pts.push(pointOnEllipse(cx, cy, rx, ry, t));
  }

  let d = `M ${p1.x} ${p1.y} `;
  d += `L ${tipX} ${tipY} `;
  d += `L ${p2.x} ${p2.y} `;

  for (const p of pts) {
    d += `L ${p.x} ${p.y} `;
  }

  d += "Z";
  return d;
}

const bubblePath = computed(() =>
    buildBubblePath(
        cx.value,
        cy.value,
        rx.value,
        ry.value,
        tipX.value,
        tipY.value
    )
);

const containerStyle = computed(() => ({
  position: "absolute",
  left: `${props.x}px`,
  top: `${props.y}px`,
  width: `${svgWidth.value}px`,
  height: `${svgHeight.value}px`,
  overflow: "visible",
}));

const textBoxStyle = computed(() => ({
  position: "absolute",
  left: `${pad + 24}px`,
  top: `${pad + 18}px`,
  width: `${props.width - 48}px`,
  height: `${props.height - 36}px`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  fontWeight: "bold",
  pointerEvents: "none",
  fontFamily: "var(--comics-font)",
  boxSizing: "border-box",
  ...props.textStyle,
}));
</script>

<style scoped>
.speech-bubble {
  position: absolute;
}

.speech-bubble-text {
  box-sizing: border-box;
}
</style>