<script setup lang="ts">
import { computed, useSlots } from "vue";
import { lang } from "../lib/lang";

// Prop form for plain strings: <T fr="Réactivité fine" en="Fine Grained Reactivity" />
// Slot form when markup or word order differs between languages:
//   <T><template #fr>Les <Orange>collections</Orange></template>
//      <template #en><Orange>collections</Orange></template></T>
//
// Either language may be omitted: whatever is present is rendered in both. That
// is what lets untranslated slides stay as plain text with no wrapper at all.
defineProps<{ fr?: string; en?: string }>();

const slots = useSlots();
const other = computed<"fr" | "en">(() => (lang.value === "en" ? "fr" : "en"));
</script>

<template>
  <slot v-if="slots[lang]" :name="lang" />
  <slot v-else-if="slots[other]" :name="other" />
  <template v-else>{{ lang === "en" ? (en ?? fr) : (fr ?? en) }}</template>
</template>
