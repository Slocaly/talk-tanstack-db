export function resolveAssetUrl(url: string) {
  if (url.startsWith("/") || url.startsWith(".")) {
    return new URL(url, import.meta.url).href;
  }
  return url;
}
