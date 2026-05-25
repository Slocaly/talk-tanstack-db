import { defineMonacoSetup } from "@slidev/types";

export default defineMonacoSetup((monaco) => {
  const transparent = {
    "editor.background": "#00000000",
    "editorGutter.background": "#00000000",
    "editor.lineHighlightBackground": "#00000010",
  };

  monaco.editor.defineTheme("comics-transparent-dark", {
    base: "vs-dark",
    inherit: true,
    rules: [],
    colors: transparent,
  });
  monaco.editor.defineTheme("comics-transparent-light", {
    base: "vs",
    inherit: true,
    rules: [],
    colors: transparent,
  });

  return {
    theme: {
      dark: "comics-transparent-dark",
      light: "comics-transparent-light",
    },
    editorOptions: {
      minimap: { enabled: false },
    },
  };
});
