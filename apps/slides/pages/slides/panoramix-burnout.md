---
layout: narrateur
location: village
variant: punchline
size: xl
---

<h1><T fr="Le burnout de Panoramix" en="Panoramix's Burnout" /></h1>

---
layout: full
title: Village heureux
---

<img
v-motion :initial="{ scale: 1.3, y: 60, x: -60 }" :enter="{ scale: 1.1, y: 0, x: 30, transition: { duration: 15000, ease: 'linear'} }"
src="/panoramix-burnout/village_heureux.png"
alt="banquet"
class="absolute top-0 left-0 cover full"
/>

<!--
The gaulish village


The gauls
-->

---
layout: full
clicks: 1
title: Banquet
---
<img
    v-motion :initial="{ scale: 1.1, y: -10, x: 50 }" :enter="{ scale: 1.3, y: 0, x: 0, transition: { duration: 15000, ease: 'linear'} }" :click-1="{ scale: 3, y: 0, x: 900, transition: { duration: 3000} }"
    src="/panoramix-burnout/banquet.png"
    alt="banquet"
    class="absolute top-0 left-0 cover full"
    />
---
layout: full
title: Pano débordé
---
<img
    v-motion :initial="{ scale: 1.2, y: 0, x: 0 }" :enter="{ scale: 1, y: 0, x: 0, transition: { duration: 15000, ease: 'linear'} }"
    src="/panoramix-burnout/panoramix_deborde.png"
    alt="banquet"
    class="absolute top-0 left-0 cover full"
/>
---
layout: full
clicks: 1
title: Stock potion vide
---
<img
    v-motion :initial="{ scale: 1, y: 0, x: 0 }" :click-1="{ scale: 2, y: -120, x: -30, transition: { duration: 1200} }"
    src="/panoramix-burnout/armoire_potion_vide.png"
    alt="banquet"
    class="absolute top-0 left-0 cover full"
/>
---
layout: image
title: conseil village
---

<img
    v-motion :initial="{ scale: 1.2, y: -40, x: 20 }" :enter="{ scale: 1.2, y: 10, x: -20, transition: { duration: 15000} }"
    src="/panoramix-burnout/conseil_village.png"
    alt="banquet"
    class="absolute top-0 left-0 cover full"
/>
<SpeechBubble
    v-motion
    :initial="{ scale: 1, y: -40, x: 20 }" :enter="{ scale: 1, y: 10, x: -20, transition: { duration: 15000} }"
    v-click="1"
    :x="100"
    :y="40"
    :width="300"
    :height="160"
    :tail-x="430"
    :tail-y="30"
    fill="white"
    stroke="black"
    :stroke-width="4"
    :text-style="{ fontSize: '14px', color: '#111' }"
>
<T fr="Asterix et Obelix vont t'aider pour les ingrédients" en="Asterix and Obelix will help you with the ingredients" />
</SpeechBubble>

---
layout: dialog
location: panoramix_home
left: obelix:happy
right: panoramix:happy
transition: fade
title: Obelix va chercher guy
---

::right::
<T
 fr="Obelix, Va me chercher du gui"
 en="Obelix, go get me some mistletoe"
/>

---
layout: dialog
location: panoramix_home
right: panoramix:scorn
left: obelix:smoke
transition: fade
title: Obelix disparait
---

::right::
<T
 fr="et du ..."
 en="and some..."
/>

---
layout: image
image: /panoramix-burnout/plan.png
title: Plan obelix
---
<RunningCharacter :ingredient-positions="[{x: -250, y:-80}]" character="obelix"/>
---
layout: dialog
location: panoramix_home
left: obelix:happy
right: panoramix:scorn
transition: fade
title: Obelix va chercher 3 brins d'orges
---

::right::
<T
 fr="Et 3 brins d'orges"
 en="And three stalks of barley"
/>

---
layout: image
image: /panoramix-burnout/plan.png
title: Plan obelix
---
<RunningCharacter :ingredient-positions="[{x: -200, y: 80}]" character="obelix" />
---
layout: dialog
location: panoramix_home
left: obelix:happy
right: panoramix:scorn
transition: fade
title: Obelix va chercher ecume de vague
---

::right::
<T
 fr="Et de l'écume de vague"
 en="And some sea foam"
/>

---
layout: image
image: /panoramix-burnout/plan.png
title: Plan obelix
---
<RunningCharacter :ingredient-positions="[{x: 160, y: 280}]" character="obelix" />
---
layout: dialog
location: panoramix_home
left: asterix:happy
right: panoramix:happy
transition: fade
title: Asterix va me chercher tous les ingrédients
---

::right::
<T
 fr="Il me faut du gui,"
 en="I need some mistletoe,"
/><br />
<T
 fr="3 brins d'orges et de l'ecume de vague"
 en="three stalks of barley and some sea foam"
/>

---
layout: dialog
location: panoramix_home
left: asterix:happy
right: panoramix:happy
title: Asterix OK
---

<T
 fr="Je vais aller t'en chercher"
 en="I’ll go get some for you"
/>

::right::
<T
 fr="Merci Asterix !"
 en="Thanks Asterix!"
/>

---
layout: image
image: /panoramix-burnout/plan.png
title: Plan Asterix
---
<RunningCharacter :ingredient-positions="[{x: -250, y:-80}, {x: -200, y: 80}, {x: 160, y: 280}, {x: 260, y: -80}]" character="asterix" />
---
layout: full
title: Asterix & Obelix qui à raison ?
---
<img
    v-motion :initial="{ scale: 1, y: -100, x: 0 }" :enter="{ scale: 1.2, y: 0, x: 0, transition: { duration: 15000} }"
    src="/panoramix-burnout/dispute-asterix-obelix.png"
    alt="dispute asterix et obelix"
    class="absolute top-0 left-0 cover full"
/>
---
layout: image
image: /panoramix-burnout/stock_ingredients.png
title: Stock ingrédients
---

<!--
Expiration date
-->

---
layout: image
image: /panoramix-burnout/livre_peremption.png
title: Date de péremtion
---

<!--
Expiration date
-->

---
layout: full
title: Queue devant pano pour medicaments
---
<img
    v-motion :initial="{ scale: 1.5, y: -120, x: -240 }" :enter="{ scale: 1.2, y: -100, x: 50, transition: { duration: 3000, delay: 1500} }"
    src="/panoramix-burnout/queue_devant_maison_panoramix.png"
    alt="banquet"
    class="absolute top-0 left-0 cover full"
/>
---
layout: image
image: /panoramix-burnout/plan-siege-romain.png
title: Siège romain
---

<!--
A siege


The romans
-->

---
layout: image
image: /panoramix-burnout/ifonix.png
title: Ifonix
---
