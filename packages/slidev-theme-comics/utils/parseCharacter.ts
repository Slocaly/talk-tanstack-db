import {
  ALL_CHARACTERS,
  ALL_EMOTIONS,
  CharacterEmotion,
  CharacterName,
  CharacterToShow,
} from "../types/characters";

export function parseCharacter(
  characterInfo: string | undefined | null,
): CharacterToShow {
  if (!characterInfo) {
    return { shouldShow: false };
  }

  const [character, emotion] = characterInfo.split(":");

  if (!isKnownCharacter(character)) {
    return { shouldShow: false };
  }

  return {
    shouldShow: true,
    character,
    emotion: isKnownEmotion(emotion) ? emotion : "happy",
  };
}

function isKnownCharacter(name: string): name is CharacterName {
  return ALL_CHARACTERS.includes(name as CharacterName);
}

function isKnownEmotion(emotion: string | undefined): emotion is CharacterEmotion {
  return ALL_EMOTIONS.includes(emotion as CharacterEmotion);
}
