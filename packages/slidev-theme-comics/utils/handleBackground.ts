import { CSSProperties } from "vue";
import { resolveAssetUrl } from "./resolveAssetUrl";

export function handleBackground(
  background?: string,
  dim = false,
): CSSProperties {
  const isColor =
    background && ["#", "rgb", "hsl"].some((v) => background.indexOf(v) === 0);

  const style = {
    background: isColor ? background : undefined,
    color: background && !isColor ? "white" : undefined,
    backgroundImage: isColor
      ? undefined
      : background
        ? dim
          ? `linear-gradient(#0005, #0008), url(${CSS.escape(resolveAssetUrl(background))})`
          : `url("${CSS.escape(resolveAssetUrl(background))}")`
        : undefined,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  if (!style.background) delete style.background;

  return style;
}
