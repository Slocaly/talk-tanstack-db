import { ref } from "vue";

export type Lang = "fr" | "en";

const KEY = "slides-lang";

// Resolved ONCE at module init, deliberately.
//
// Slidev's router drops the query string when navigating between slides, so
// re-reading `location` later would flip the deck back to French on the first
// arrow press. Persisting to localStorage means the presenter view — which
// opens in a separate tab at /presenter/1 with no query string — inherits the
// language of the main view instead of falling back to French.
function resolve(): Lang {
  if (typeof window === "undefined") return "fr";

  let stored: string | null = null;
  try {
    stored = window.localStorage.getItem(KEY);
  } catch {
    // Private browsing modes can throw on storage access. A dead deck mid-talk
    // is a worse outcome than losing stickiness, so swallow it.
  }

  const param = new URLSearchParams(window.location.search).get("lang");
  const value: Lang = (param ?? stored) === "en" ? "en" : "fr";

  try {
    window.localStorage.setItem(KEY, value);
  } catch {
    // See above.
  }

  return value;
}

export const lang = ref<Lang>(resolve());

/** Pick a string by language. For use inside .vue components. */
export function t(fr: string, en: string): string {
  return lang.value === "en" ? en : fr;
}

/**
 * Switch language. Persisted so a reload, or the presenter view opened
 * afterwards, keeps the language you last switched to.
 */
export function setLang(next: Lang): void {
  if (lang.value === next) return;
  lang.value = next;
  try {
    window.localStorage.setItem(KEY, next);
  } catch {
    // Storage unavailable — the switch still applies to this tab.
  }
}
