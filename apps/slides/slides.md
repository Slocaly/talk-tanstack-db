---
theme: comics
title: Ils sont fous chez Tanstack ils ont mis une DB dans le front !
info: |
  ## Conference sur TanstackDB
# apply UnoCSS classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
# duration of the presentation
duration: 45min
background: /panoramix_deborde.png
layout: title
---
# Le burnout de Panoramix

---
src: ./pages/slides/tanstack-query.md
---

---
layout: image
image: /village_heureux.png
---
---
layout: image
image: /banquet.png
---
---
layout: image
image: /panoramix_deborde.png
---
---
layout: image
image: /armoire_potion_vide.png
---
---
layout: image
image: /conseil_village.png
transition: none
---
---
layout: image
image: /conseil_village.png
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
image: /plan.png
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
image: /plan.png
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
image: /plan.png
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
image: /plan.png
---
<RunningCharacter :ingredient-positions="[{x: -250, y:-80}, {x: -200, y: 80}, {x: 160, y: 280}]" character="asterix" />
---
layout: image
image: /stock_ingredients.png
---
---
layout: image
image: /livre_peremption.png
---
---
layout: image
image: /queue_devant_maison_panoramix.png
---
---
layout: image
image: /ifonix.png
---

---

<AppPresentation />

---
layout: fullHeight
dragPos:
  square: 391,27,152,69
  square2: 396,226,142,69
  arrow1: 203,187,160,0
---

<div class="bg-blue flex items-center justify-center text-center text-white" v-drag="'square'">Commande de potion</div>

<v-drag-arrow pos="arrow1" />

<div class="bg-blue flex items-center justify-center text-center text-white" v-drag="'square2'">Stock ingrédients</div>
