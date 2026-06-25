export function resolveAssetUrl(url: string) {
  // Theme-relative paths like "../public/images/..." must become absolute "/images/..."
  // because import.meta.url points to the bundled JS location in production, not the source file.
  // Slidev serves the theme's public/ directory at "/" in both dev and prod (after our copy step).
  if (url.startsWith("../public/")) {
    return url.slice("../public".length);
  }
  if (url.startsWith("/") || url.startsWith(".")) {
    return new URL(url, import.meta.url).href;
  }
  return url;
}
