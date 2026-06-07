---
layout: image
image: /panoramix-burnout/village_heureux.png
---
---
layout: image
image: /panoramix-burnout/banquet.png
---
---
layout: image
image: /panoramix-burnout/panoramix_deborde.png
---
---
layout: image
image: /panoramix-burnout/armoire_potion_vide.png
---
---
layout: image
image: /panoramix-burnout/conseil_village.png
transition: none
---
---
layout: image
image: /panoramix-burnout/conseil_village.png
---
<SpeechBubble
:x="100"
:y="0"
:width="300"
:height="160"
:tail-x="420"
:tail-y="50"
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
layout: image
image: /panoramix-burnout/queue_devant_maison_panoramix.png
---
---
layout: image
image: /panoramix-burnout/ifonix.png
---
--- 