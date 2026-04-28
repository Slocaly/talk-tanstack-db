export const ALL_LOCATIONS = ["village", "forest", "panoramix_home"] as const;
export type Location = (typeof ALL_LOCATIONS)[number];

export const ALL_CHARACTERS = ["asterix", "obelix", "panoramix"] as const;
export type CharacterName = (typeof ALL_CHARACTERS)[number];

export const ALL_EMOTIONS = ["angry", "happy", "sad", "scorn"] as const;
export type CharacterEmotion = (typeof ALL_EMOTIONS)[number];

export type CharacterToShow =
  | {
      shouldShow: false;
    }
  | {
      shouldShow: true;
      character: CharacterName;
      emotion: CharacterEmotion;
    };
