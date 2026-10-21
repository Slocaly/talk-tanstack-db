---
layout: full
title: Banquet
---
<img
v-motion :initial="{ scale: 1.2, y: -30, x: 65 }" :enter="{ scale: 1, y: 0, x: 0, transition: { duration: 15000, ease: 'linear'} }"
src="/localfirst-village.png"
alt="local first village"
class="absolute top-0 left-0 cover full"
/>

---
layout: default
clicks: 2
title: Ordalphatix pas d'accord
---
<div class="absolute -bottom-28 left-0 w-screen h-screen bg-black"
/>
<img
src="/poissonerie.png"
alt="fond de poissonerie"
class="absolute -bottom-28 left-0 cover full opacity-70"
/>
<img
src="/ordalphabetix.png"
alt="ordalphabetix pas d'accord"
class="absolute -bottom-5 left-10 w-80 h-auto"
/>
<SpeechBubble
    :x="400"
    :y="0"
    :width="400"
    :height="260"
    :tail-x="-120"
    :tail-y="280"
    fill="white"
    stroke="black"
    :stroke-width="4"
    :text-style="{ fontSize: '22px', color: '#111' }"
>
je trouve ça compliqué votre truc
</SpeechBubble>
<SpeechBubble
:x="400"
:y="0"
:width="400"
:height="260"
:tail-x="-120"
:tail-y="280"
fill="white"
stroke="black"
:stroke-width="4"
:text-style="{ fontSize: '20px', color: '#111' }"
v-click="1"
>
<span>j'ai jamais eu besoin de ça pour avoir du poisson frais</span>
</SpeechBubble>
---
layout: image
image: /pano.gif
title: Merci
---

<div class="flex h-full w-full items-center justify-center">
</div>
---