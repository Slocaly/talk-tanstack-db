<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { setLang, type Lang } from "../lib/lang";

// Shift+F → français, Shift+E → english.
//
// Bound on the CAPTURE phase deliberately: Slidev binds bare "f" (fullscreen)
// and "e" through magic-keys, which track individual key state and so still
// match while Shift is held. Capturing lets us stop the event before Slidev's
// own document-level handlers ever see it.
const flash = ref<Lang | null>(null);
let flashTimer: ReturnType<typeof setTimeout> | undefined;

function resolveKey(e: KeyboardEvent): Lang | null {
  // Match on both code and key so the shortcut survives AZERTY/QWERTY.
  const key = e.key.toLowerCase();
  if (e.code === "KeyF" || key === "f") return "fr";
  if (e.code === "KeyE" || key === "e") return "en";
  return null;
}

function onKeydown(e: KeyboardEvent) {
  if (!e.shiftKey || e.metaKey || e.ctrlKey || e.altKey || e.repeat) return;

  const target = e.target as HTMLElement | null;
  if (
    target?.isContentEditable ||
    /^(INPUT|TEXTAREA|SELECT)$/.test(target?.tagName ?? "")
  )
    return;

  const next = resolveKey(e);
  if (!next) return;

  e.preventDefault();
  e.stopImmediatePropagation();
  setLang(next);

  // Without this you cannot tell the shortcut registered on a slide that has
  // no translated text on it. Remove the <transition> block below if unwanted.
  flash.value = next;
  clearTimeout(flashTimer);
  flashTimer = setTimeout(() => (flash.value = null), 900);
}

const opts = { capture: true } as const;
onMounted(() => window.addEventListener("keydown", onKeydown, opts));
onUnmounted(() => {
  window.removeEventListener("keydown", onKeydown, opts);
  clearTimeout(flashTimer);
});
</script>

<template>
  <Transition name="lang-flash">
    <div v-if="flash" class="lang-flash" aria-live="polite">
      {{ flash === "en" ? "EN" : "FR" }}
    </div>
  </Transition>
</template>

<style scoped>
.lang-flash {
  position: fixed;
  bottom: 1.25rem;
  right: 1.25rem;
  z-index: 100;
  padding: 0.2em 0.6em;
  border-radius: 0.4em;
  background: rgba(0, 0, 0, 0.75);
  color: #fff;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  pointer-events: none;
}

.lang-flash-enter-active,
.lang-flash-leave-active {
  transition: opacity 0.18s ease;
}

.lang-flash-enter-from,
.lang-flash-leave-to {
  opacity: 0;
}
</style>
