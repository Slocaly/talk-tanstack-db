import { computed, type ComputedRef } from "vue";
import {
  ALL_LOCATIONS,
  type Location,
} from "../types/characters";
import { handleBackground } from "./handleBackground";
import { resolveAssetUrl } from "./resolveAssetUrl";

export function useComicBackground(props: {
  location?: Location;
  background?: string;
  dim?: boolean;
}): {
  backgroundImageUrl: ComputedRef<string | null>;
  backgroundStyle: ComputedRef<Record<string, string | undefined>>;
} {
  const backgroundImageUrl = computed((): string | null => {
    if (props.location && ALL_LOCATIONS.includes(props.location)) {
      return resolveAssetUrl(
        `../public/images/background/${props.location}.png`,
      );
    }
    return null;
  });

  const backgroundStyle = computed(() => {
    if (!props.background) return {};
    return handleBackground(props.background, props.dim ?? false);
  });

  return { backgroundImageUrl, backgroundStyle };
}
