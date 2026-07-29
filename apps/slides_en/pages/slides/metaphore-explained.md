---
layout: dialog
location: panoramix_home
left: obelix:happy
right: panoramix:happy
transition: fade
title: Obelix va me chercher la page 1
---

::right::
Obelix,
Va me chercher la page 1

---
layout: image
image: /panoramix-burnout/plan_with_pages.png
transition: none
title: Plan Obelix
---
## <RunningCharacter :ingredient-positions="[{x: -250, y:-80}]" character="obelix"/>
---
layout: dialog
location: panoramix_home
left: obelix:happy
right: panoramix:happy
transition: fade
title: Obelix va me chercher la page 2
---
::right::
Et la page 2
---
layout: image
image: /panoramix-burnout/plan_with_pages.png
transition: none
title: Plan Obelix
---

## <RunningCharacter :ingredient-positions="[{x: -200, y: 80}]" character="obelix" />
---
layout: dialog
location: panoramix_home
left: obelix:happy
right: panoramix:scorn
transition: fade
title: Obelix va me chercher la page 3
---

::right::
Et la page 3

---
layout: image
image: /panoramix-burnout/plan_with_pages.png
transition: none
title: Plan Obelix
---
## <RunningCharacter :ingredient-positions="[{x: 160, y: 280}]" character="obelix" />
---
layout: dialog
location: panoramix_home
left: asterix:happy
right: panoramix:happy
transition: fade
title: Asterix va me chercher toutes les ingrédients
---

::right::

Asterix, va me chercher toutes les pages

---
layout: image
image: /panoramix-burnout/plan_with_pages.png
transition: none
title: Plan Asterix
---
## <RunningCharacter :ingredient-positions="[{x: -250, y:-80}, {x: -200, y: 80}, {x: 160, y: 280}, {x: 260, y: -80}]" character="asterix" />
---
layout: image
image: /panoramix-burnout/stock_ingredients.png
title: Stock ingrédients = cache
---

<v-clicks>
    <SpeechBubble
        :x="100"
        :y="40"
        :width="220"
        :height="120"
        :tail-x="300"
        :tail-y="80"
        fill="white"
        stroke="black"
        :stroke-width="4"
        :text-style="{ fontSize: '40px', color: '#111' }"
    >
        Cache
    </SpeechBubble>
    <SpeechBubble
        :x="600"
        :y="80"
        :width="220"
        :height="120"
        :tail-x="-100"
        :tail-y="30"
        fill="white"
        stroke="black"
        :stroke-width="4"
        :text-style="{ fontSize: '40px', color: '#111' }"
    >
        Store
    </SpeechBubble>
    <SpeechBubble
        :x="380"
        :y="180"
        :width="220"
        :height="120"
        :tail-x="40"
        :tail-y="-60"
        fill="white"
        stroke="black"
        :stroke-width="4"
        :text-style="{ fontSize: '40px', color: '#111' }"
    >
        State
    </SpeechBubble>
    <NarrateurBox class="mt-100 text-black text-4xl flex items-center justify-center">Données côté client</NarrateurBox>
</v-clicks>
---
layout: image
image: /panoramix-burnout/livre_peremption.png
title: Livre peremtion =  staled
---
<v-clicks>
    <SpeechBubble
        :x="0"
        :y="40"
        :width="320"
        :height="220"
        :tail-x="440"
        :tail-y="140"
        fill="white"
        stroke="black"
        :stroke-width="4"
        :text-style="{ fontSize: '38px', color: '#111' }"
    >Données "Staled"</SpeechBubble>
    <NarrateurBox class="mt-100 text-black text-4xl flex items-center justify-center">Invalidation de cache</NarrateurBox>
</v-clicks>
---
layout: image
image: /panoramix-burnout/plan-siege-romain.png
title: Siege romain  = offline
---
<v-clicks>
    <NarrateurBox class="mt-100 text-black text-4xl flex items-center justify-center">Offline</NarrateurBox>
</v-clicks>
---