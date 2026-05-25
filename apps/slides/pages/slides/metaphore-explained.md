---
layout: dialog
location: panoramix_home
left: obelix:happy
right: panoramix:happy
transition: fade
---
::right::
Obelix,
Va me chercher la page 1
---
layout: image
image: /plan_with_pages.png
transition: none
---
<RunningCharacter :ingredient-positions="[{x: -250, y:-80}]" character="obelix"/>
---
layout: dialog
location: panoramix_home
left: obelix:happy
right: panoramix:happy
transition: fade
---
::right::
Et la page 2
---
layout: image
image: /plan_with_pages.png
transition: none
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
Et la page 3
---
layout: image
image: /plan_with_pages.png
transition: none
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

Asterix, va me chercher toutes les ingrédients

---
layout: image
image: /plan_with_pages.png
transition: none
---
<RunningCharacter :ingredient-positions="[{x: -250, y:-80}, {x: -200, y: 80}, {x: 160, y: 280}]" character="asterix" />
---
layout: image
image: /stock_ingredients.png
---
<v-clicks>
    <h2 class="text-4xl">Cache</h2> 
    <h2 class="text-4xl">Store</h2> 
    <h2 class="text-4xl">State</h2> 
    <h1>Données côté client</h1>
</v-clicks>
---
layout: image
image: /livre_peremption.png
---
<v-clicks>
    <h2 class="text-4xl">Données "Staled"</h2> 
    <h1>Invalidation de cache</h1>
</v-clicks>
---
layout: image
image: /recoding-tanstackdb-from-scratch.png
---

<div class="flex min-h-full items-center justify-center">
    <h2 class="text-5xl" v-click="1" >Est-ce que c'est si compliqué ? 🤔</h2>
</div>
--- 