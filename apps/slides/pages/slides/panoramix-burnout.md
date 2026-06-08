--- 
layout: narrateur
location: village
variant: punchline
size: xl
---
# Le burnout de Panoramix
---
layout: full
---
<img
v-motion :initial="{ scale: 1.3, y: 60, x: -60 }" :enter="{ scale: 1.1, y: 0, x: 30, transition: { duration: 15000, ease: 'linear'} }"
src="/panoramix-burnout/village_heureux.png"
alt="banquet"
class="absolute top-0 left-0 cover full"
/>
---
layout: full
clicks: 1
---
<img
    v-motion :initial="{ scale: 1.1, y: -10, x: 50 }" :enter="{ scale: 1.3, y: 0, x: 0, transition: { duration: 15000, ease: 'linear'} }" :click-1="{ scale: 3, y: 0, x: 900, transition: { duration: 3000} }"
    src="/panoramix-burnout/banquet.png"
    alt="banquet"
    class="absolute top-0 left-0 cover full"
    />
---
layout: full
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
---
<img
v-motion :initial="{ scale: 1, y: 0, x: 0 }" :click-1="{ scale: 2, y: -120, x: -30, transition: { duration: 1200} }"
src="/panoramix-burnout/armoire_potion_vide.png"
alt="banquet"
class="absolute top-0 left-0 cover full"
/>
---
layout: image
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
Asterix et Obelix vont t'aider pour les ingrédients
</SpeechBubble>
---
layout: dialog
location: panoramix_home
left: obelix:happy
right: panoramix:happy
transition: fade
---
::right::
Obelix,
Va me chercher du gui
---
layout: dialog
location: panoramix_home
right: panoramix:scorn
transition: fade
---
::right::
et du ...
---
layout: image
image: /panoramix-burnout/plan.png
---
<RunningCharacter :ingredient-positions="[{x: -250, y:-80}]" character="obelix"/>
---
layout: dialog
location: panoramix_home
left: obelix:happy
right: panoramix:scorn
transition: fade
---
::right::
Et 3 brins d'orges
---
layout: image
image: /panoramix-burnout/plan.png
---
<RunningCharacter :ingredient-positions="[{x: -200, y: 80}]" character="obelix" />
---
layout: dialog
location: panoramix_home
left: obelix:happy
right: panoramix:scorn
transition: fade
---
::right::
Et de l'ecume de vague
---
layout: image
image: /panoramix-burnout/plan.png
---
<RunningCharacter :ingredient-positions="[{x: 160, y: 280}]" character="obelix" />
---
layout: dialog
location: panoramix_home
left: asterix:happy
right: panoramix:happy
transition: fade
---

::right::

Il me faut du gui, <br />3 brins d'orges et de l'ecume de vague

---
layout: dialog
location: panoramix_home
left: asterix:happy
right: panoramix:happy
---
Je vais aller t'en chercher

::right::

Merci Asterix !
---
layout: image
image: /panoramix-burnout/plan.png
---
<RunningCharacter :ingredient-positions="[{x: -250, y:-80}, {x: -200, y: 80}, {x: 160, y: 280}, {x: 260, y: -80}]" character="asterix" />
---
layout: image
image: /panoramix-burnout/stock_ingredients.png
---
---
layout: image
image: /panoramix-burnout/livre_peremption.png
---
---
layout: full
---
<img
v-motion :initial="{ scale: 1.5, y: -120, x: -240 }" :enter="{ scale: 1.2, y: -100, x: 50, transition: { duration: 3000, delay: 1500} }"
src="/panoramix-burnout/queue_devant_maison_panoramix.png"
alt="banquet"
class="absolute top-0 left-0 cover full"
/>
---
layout: image
image: /panoramix-burnout/ifonix.png
---
--- 