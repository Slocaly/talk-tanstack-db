---
layout: planche-titre
location: village
side: left
---

# TanStack Query

---
layout: planche-demo
---
````md magic-move
```tsx
export const IngredientListPage = () => {
};
```
```tsx {2-6}
export const IngredientListPage = () => {
  const [ingredients, setIngredients] = useState<Data>([]);

  return (
    <IngredientList ingredients={ingredients}/>
  );
};
```
```tsx {4-12}
export const IngredientListPage = () => {
  const [ingredients, setIngredients] = useState<Data>([]);

  useEffect(() => {
    const load = async () => {
      const data = await fetchAppData()
      setIngredients(data)
    }

    void load()

  }, []);

  return (
    <IngredientList ingredients={ingredients}/>
  );
};
```
```tsx {3,7,10,17-19}
export const IngredientListPage = () => {
  const [ingredients, setIngredients] = useState<Data>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const data = await fetchAppData()
      setIngredients(data)
      setLoading(false)
    }

    void load()

  }, []);

  if (loading) return (
    <div>loading...</div>
  )

  return (
    <IngredientList ingredients={ingredients}/>
  );
};
```
```tsx
export const IngredientListPage = () => {
  const [ingredients, setIngredients] = useState<Data>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const data = await fetchAppData()
        .catch(e => setError(e.message))
      setIngredients(data)
      setLoading(false)
    }

    void load()

  }, []);
  
  if (error) return (
    <div>An error happened {error}</div>
  )

  if (loading) return (
    <div>loading...</div>
  )

  return (
    <IngredientList ingredients={ingredients}/>
  );
};
```
````
---
layout: fullHeight
---

<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1191.0117721557617 934.2039458823699" width="80%" height="80%">
<rect x="0" y="0" width="1191.0117721557617" height="934.2039458823699" fill="#ffffff"></rect>
<g stroke-linecap="round" transform="translate(10 726.9072310996551) rotate(0 236.8807601928711 98.64835739135742)">
<path d="M32 0 C172.85 2.55, 314.43 1.01, 441.76 0 M32 0 C196.02 -0.81, 359.74 -0.25, 441.76 0 M441.76 0 C462.3 1.62, 474.61 11, 473.76 32 M441.76 0 C462.15 -1.33, 475.06 9.74, 473.76 32 M473.76 32 C471.88 62.4, 472.43 95.32, 473.76 165.3 M473.76 32 C473.68 80.42, 472.8 128.42, 473.76 165.3 M473.76 165.3 C472.4 186.26, 463.5 195.63, 441.76 197.3 M473.76 165.3 C475.12 185.48, 464.52 195.83, 441.76 197.3 M441.76 197.3 C336.85 196.39, 233.62 197.01, 32 197.3 M441.76 197.3 C332.4 196.51, 222.68 196.43, 32 197.3 M32 197.3 C10.54 199.16, -1.02 187.96, 0 165.3 M32 197.3 C9.37 199.16, -1.28 187.89, 0 165.3 M0 165.3 C-0.39 113.05, 0.3 60.95, 0 32 M0 165.3 C-1.28 124.62, -0.47 83.21, 0 32 M0 32 C-1.43 12.15, 9.07 1.72, 32 0 M0 32 C-0.62 9.58, 12.9 -0.69, 32 0"
stroke="#1e1e1e" stroke-width="2" fill="none"></path>
</g>
<g transform="translate(103.09680938720703 803.0555884910125) rotate(0 143.78395080566406 22.5)">
<text x="143.78395080566406" y="31.716" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji"
font-size="36px" fill="#1e1e1e" text-anchor="middle" style="white-space: pre;" direction="ltr"
dominant-baseline="alphabetic">Page ingredients
</text>
</g>
<g stroke-linecap="round"
transform="translate(707.2502517700195 726.5854390261688) rotate(0 236.8807601928711 98.64835739135742)">
<path d="M32 0 C123.51 0.36, 213.06 0.46, 441.76 0 M32 0 C123.53 -0.19, 213.79 0.17, 441.76 0 M441.76 0 C464.24 -1.89, 475.35 11.32, 473.76 32 M441.76 0 C464.98 0.39, 472.28 9.08, 473.76 32 M473.76 32 C473.67 63.83, 476.16 92.82, 473.76 165.3 M473.76 32 C473.85 64.05, 474.89 96.21, 473.76 165.3 M473.76 165.3 C471.92 185.07, 462.1 199.25, 441.76 197.3 M473.76 165.3 C474.27 187.89, 464.99 198.63, 441.76 197.3 M441.76 197.3 C300.46 197.39, 157.58 196.51, 32 197.3 M441.76 197.3 C314.06 198.62, 186.09 198.13, 32 197.3 M32 197.3 C9.91 197.05, -0.77 187.47, 0 165.3 M32 197.3 C10.29 196.14, -0.21 187.88, 0 165.3 M0 165.3 C-1.36 120.52, -1.5 75.82, 0 32 M0 165.3 C0.53 112.11, 1.07 58.44, 0 32 M0 32 C-1.43 10.17, 11.02 -0.57, 32 0 M0 32 C-2.1 10.73, 12.45 -0.49, 32 0"
stroke="#1e1e1e" stroke-width="2" fill="none"></path>
</g>
<g transform="translate(773.2570648193359 802.7337964175263) rotate(0 170.8739471435547 22.5)">
<text x="170.8739471435547" y="31.716" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji"
font-size="36px" fill="#1e1e1e" text-anchor="middle" style="white-space: pre;" direction="ltr"
dominant-baseline="alphabetic">Page détail recette
</text>
</g>
<g stroke-linecap="round">
<g transform="translate(439.2448465076586 223.58845375568762) rotate(0 160.4178634322725 -0.5381546269828874)">
<path d="M0.9 -0.18 C53.99 -0.29, 265.78 -0.82, 318.8 -0.95 M-0.08 -1.32 C53.34 -1.26, 267.33 0.02, 320.92 0.24"
stroke="black" stroke-width="4" fill="none"></path>
</g>
</g>
<mask></mask>
<g stroke-linecap="round">
<g transform="translate(440.889895631155 223.16040229104556) rotate(0 -5.0771111996423315 -51.81584938480484)">
<path d="M-1.13 -0.66 C-4.48 -1.55, -15.34 -3.5, -19.16 -5.53 C-22.98 -7.56, -22 -9.28, -24.05 -12.83 C-26.09 -16.39, -30.64 -19.14, -31.42 -26.86 C-32.2 -34.58, -29.93 -51.6, -28.73 -59.16 C-27.54 -66.72, -27.77 -67.21, -24.25 -72.21 C-20.73 -77.2, -13.65 -83.87, -7.63 -89.15 C-1.61 -94.42, 7.21 -101.76, 11.87 -103.85 C16.53 -105.94, 18.99 -101.97, 20.34 -101.69 M0.48 1.61 C-2.57 0.88, -12.81 -2.13, -16.93 -4.34 C-21.05 -6.56, -21.76 -8.04, -24.22 -11.66 C-26.69 -15.29, -30.74 -18.12, -31.72 -26.07 C-32.71 -34.02, -31.55 -51.52, -30.16 -59.35 C-28.77 -67.17, -26.7 -67.91, -23.37 -73.02 C-20.04 -78.14, -15.88 -84.77, -10.16 -90.04 C-4.44 -95.3, 5.61 -102.56, 10.96 -104.63 C16.3 -106.71, 20.41 -102.86, 21.94 -102.48"
stroke="black" stroke-width="4" fill="none"></path>
</g>
</g>
<mask></mask>
<g stroke-linecap="round">
<g transform="translate(462.0186973863738 117.38745170270181) rotate(0 66.3774090523375 -52.891939080106525)">
<path d="M-0.91 -0.66 C-2.31 -6.84, -7.65 -28.1, -9.56 -37.75 C-11.48 -47.39, -12.97 -52.92, -12.41 -58.54 C-11.85 -64.16, -9.79 -66.26, -6.21 -71.48 C-2.62 -76.7, 3.14 -85.08, 9.11 -89.84 C15.07 -94.61, 23.25 -97.22, 29.6 -100.09 C35.95 -102.96, 38.95 -106.2, 47.2 -107.08 C55.45 -107.96, 68.36 -106.8, 79.09 -105.37 C89.82 -103.94, 104.38 -100.78, 111.58 -98.49 C118.77 -96.2, 116.76 -98.64, 122.24 -91.62 C127.72 -84.6, 140.9 -62.57, 144.48 -56.38 M0.82 1.6 C-0.55 -4.34, -8.11 -26.5, -9.93 -36.36 C-11.74 -46.22, -10.74 -51.77, -10.07 -57.54 C-9.4 -63.3, -9.39 -65.67, -5.92 -70.96 C-2.44 -76.24, 5.14 -84.28, 10.76 -89.23 C16.39 -94.18, 21.64 -98.01, 27.84 -100.67 C34.03 -103.34, 39.03 -104.47, 47.95 -105.21 C56.87 -105.96, 70.5 -106.06, 81.33 -105.11 C92.17 -104.17, 105.99 -101.81, 112.97 -99.54 C119.95 -97.27, 117.84 -98.76, 123.22 -91.48 C128.61 -84.21, 142.09 -62.06, 145.29 -55.88"
stroke="black" stroke-width="4" fill="none"></path>
</g>
</g>
<mask></mask>
<g stroke-linecap="round">
<g transform="translate(603.7460553840365 60.16909067659807) rotate(0 62.18340517132583 14.396332842966672)">
<path d="M1.12 -0.29 C4.07 -2.2, 9.81 -9.32, 16.83 -12.14 C23.84 -14.96, 30.13 -17.57, 43.2 -17.21 C56.28 -16.86, 83.02 -13.57, 95.28 -10 C107.55 -6.43, 112.22 -4.77, 116.78 4.21 C121.33 13.19, 121.79 36.93, 122.6 43.87 M0.25 -1.48 C3.64 -3.19, 11.95 -8.42, 18.99 -10.92 C26.03 -13.42, 29.81 -16.85, 42.48 -16.47 C55.15 -16.1, 82.78 -12.26, 95 -8.67 C107.22 -5.08, 110.94 -4.06, 115.79 5.06 C120.64 14.18, 123.1 39.36, 124.12 46.04"
stroke="black" stroke-width="4" fill="none"></path>
</g>
</g>
<mask></mask>
<g stroke-linecap="round">
<g transform="translate(756.826849914657 223.3051846654596) rotate(0 15.571254970332575 -62.87225878252259)">
<path d="M-1.05 -0.6 C3.58 -3.33, 20.82 -10.63, 28.89 -16.69 C36.96 -22.74, 42.9 -30.25, 47.35 -36.92 C51.81 -43.59, 54.35 -48.3, 55.61 -56.7 C56.88 -65.11, 56.85 -78.83, 54.91 -87.36 C52.97 -95.89, 49.06 -101.73, 43.98 -107.9 C38.9 -114.07, 30.71 -121.21, 24.45 -124.38 C18.18 -127.56, 13.04 -127.13, 6.4 -126.96 C-0.24 -126.79, -10.09 -125.23, -15.38 -123.34 C-20.68 -121.45, -23.73 -116.64, -25.35 -115.62 M0.6 1.7 C4.98 -0.9, 19.8 -8.94, 27.99 -15.73 C36.17 -22.52, 44.99 -31.86, 49.72 -39.04 C54.44 -46.22, 55.71 -50.74, 56.35 -58.8 C56.99 -66.87, 55.44 -79.16, 53.55 -87.42 C51.66 -95.67, 49.85 -102.02, 45.01 -108.34 C40.17 -114.67, 31.06 -122.33, 24.5 -125.39 C17.93 -128.46, 12.44 -127.36, 5.59 -126.71 C-1.25 -126.07, -11.55 -123.41, -16.57 -121.55 C-21.59 -119.69, -23.17 -116.4, -24.51 -115.56"
stroke="black" stroke-width="4" fill="none"></path>
</g>
</g>
<mask></mask>
<g mask="url(#mask-7KNZ-1y2b0HCyGi_lHXSP)" stroke-linecap="round">
<g transform="translate(940.3700038846646 720.585439026169) rotate(0 -155.28170451801589 -244.64186667509335)">
<path d="M0 0 C-84.01 -133.42, -169.23 -267.18, -310.56 -489.28 M0 0 C-91.9 -146.82, -184.72 -293.01, -310.56 -489.28"
stroke="#1e1e1e" stroke-width="2" fill="none"></path>
</g>
<g transform="translate(940.3700038846646 720.585439026169) rotate(0 -155.28170451801589 -244.64186667509335)">
<path d="M-290.7 -474.1 C-296.87 -478.29, -302.65 -481.7, -310.56 -489.28 M-290.7 -474.1 C-297.2 -479.01, -302.46 -482.39, -310.56 -489.28"
stroke="#1e1e1e" stroke-width="2" fill="none"></path>
</g>
<g transform="translate(940.3700038846646 720.585439026169) rotate(0 -155.28170451801589 -244.64186667509335)">
<path d="M-305.11 -464.89 C-307.26 -471.68, -309.1 -477.61, -310.56 -489.28 M-305.11 -464.89 C-307.22 -472.56, -308.16 -478.69, -310.56 -489.28"
stroke="#1e1e1e" stroke-width="2" fill="none"></path>
</g>
</g>
<mask id="mask-7KNZ-1y2b0HCyGi_lHXSP">
<rect x="0" y="0" fill="#fff" width="1350.9334129206964" height="1309.8691723763557"></rect>
<rect x="630.8823514906726" y="453.44357235107555" fill="#000" width="308.4118957519531" height="45"
opacity="1"></rect>
</mask>
<g transform="translate(630.8823514906726 453.4435723510756) rotate(0 154.2059478759761 22.5)">
<text x="154.20594787597656" y="31.716" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji"
font-size="36px" fill="#1e1e1e" text-anchor="middle" style="white-space: pre;" direction="ltr"
dominant-baseline="alphabetic">GET /ingredients
</text>
</g>
<g mask="url(#mask-d-0G3UOe84wTW01dA1Jxb)" stroke-linecap="round">
<g transform="translate(172.28787794648633 720.9072310996551) rotate(0 211.64288811415918 -245.82369014103563)">
<path d="M0 0 C135.4 -155.29, 269.12 -311.19, 423.29 -491.65 M0 0 C167.14 -192.79, 333.37 -385.83, 423.29 -491.65"
stroke="#1e1e1e" stroke-width="2" fill="none"></path>
</g>
<g transform="translate(172.28787794648633 720.9072310996551) rotate(0 211.64288811415918 -245.82369014103563)">
<path d="M414.52 -468.23 C418.08 -477.37, 418.9 -483.94, 423.29 -491.65 M414.52 -468.23 C417.27 -477.44, 420.97 -486.84, 423.29 -491.65"
stroke="#1e1e1e" stroke-width="2" fill="none"></path>
</g>
<g transform="translate(172.28787794648633 720.9072310996551) rotate(0 211.64288811415918 -245.82369014103563)">
<path d="M401.52 -479.34 C409.18 -484.82, 414.12 -487.87, 423.29 -491.65 M401.52 -479.34 C409.29 -484.17, 418.1 -489.21, 423.29 -491.65"
stroke="#1e1e1e" stroke-width="2" fill="none"></path>
</g>
</g>
<mask id="mask-d-0G3UOe84wTW01dA1Jxb">
<rect x="0" y="0" fill="#fff" width="695.5736541748047" height="1312.5546113817263"></rect>
<rect x="229.72481818466895" y="452.58354095861944" fill="#000" width="308.4118957519531" height="45"
opacity="1"></rect>
</mask>
<g transform="translate(229.72481818466895 452.58354095861944) rotate(0 154.20594787597656 22.5)">
<text x="154.20594787597656" y="31.716" font-family="Excalifont, Xiaolai, sans-serif, Segoe UI Emoji"
font-size="36px" fill="#1e1e1e" text-anchor="middle" style="white-space: pre;" direction="ltr"
dominant-baseline="alphabetic">GET /ingredients
</text>
</g>
</svg>

---
layout: title
---

# Schema Redux

---
layout: title
---

# Presentation tanstack-query

---
layout: title
---

# ON a tout ce qui nous faut ? Pas besoin d'une nouvelle techno

---
layout: title
---

# Exemple de la liste des recettes

On browse l'applis sur la liste des recettes

Et Obelix va chercher page 1 page 2 page 3

---
layout: title
---

# T'es mignon mais si tu 2000 pages tu fais quoi ?

---
layout: title
---

# 20 mb Dilemma and difference entre local first et offline first
Exemple de GIT (localfirst)
Figma, Linear, slack et autres fonctionnent comme ça

---
layout: title
---

# Schema Delphin ON rebuild from scratch

