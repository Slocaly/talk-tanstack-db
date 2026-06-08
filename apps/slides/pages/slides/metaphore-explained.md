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
image: /panoramix-burnout/plan_with_pages.png
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
image: /panoramix-burnout/plan_with_pages.png
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
image: /panoramix-burnout/plan_with_pages.png
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

Asterix, va me chercher tous les ingrédients

---
layout: image
image: /panoramix-burnout/plan_with_pages.png
transition: none
---
<RunningCharacter :ingredient-positions="[{x: -250, y:-80}, {x: -200, y: 80}, {x: 160, y: 280}, {x: 260, y: -80}]" character="asterix" />
---
layout: image
image: /panoramix-burnout/stock_ingredients.png
---
<v-clicks>
    <h2 class="text-4xl">Cache</h2> 
    <h2 class="text-4xl">Store</h2> 
    <h2 class="text-4xl">State</h2> 
    <h1>Données côté client</h1>
</v-clicks>
---
layout: image
image: /panoramix-burnout/livre_peremption.png
---
<v-clicks>
    <h2 class="text-4xl">Données "Staled"</h2> 
    <h1>Invalidation de cache</h1>
</v-clicks>
---
layout: image
image: /panoramix-burnout/plan-siege-romain.png
---
<v-clicks>
    <h1>Offline</h1>
</v-clicks>
---