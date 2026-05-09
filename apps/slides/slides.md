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

# Tout commence par un probleme de potion



---
layout: image
image: /armoire_potion_vide.png
---


---
layout: image
image: /panoramix_deborde.png
---


---
layout: dialog
location: panoramix_home
left: asterix:sad
right: panoramix:sad
transition: fade
---

ça va pano ?

::right::

Non je n'ai plus de potion et je n'ai pas le temps d'en refaire

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
layout: dialog
location: village
left: asterix:happy
right: obelix:happy
---

Tu viens m'aider Panoramix a besoin de nous ?

::right::

Les sangliers peuvent attendre !

---
layout: dialog
location: forest
left: obelix:scorn
right: asterix:scorn
---

C'est un travail a temps plein d'aller chercher des ingredients !

::right::

On ne fait que des allers retours

---
layout: fullHeight
---

<FlowDiagram :nodes="[
    {
        id: '1', position: { x: 300, y: 0 },
        data: { label: 'Client' },
        class: 'light'
    },
    {
        id: '2',
        position: { x: 300, y: 200 },
        data: { label: 'TanStack DB' },
        class: 'light'
    },
    {
        id: '3',
        position: { x: 300, y: 400 },
        data: { label: 'Server' },
        class: 'light'
    },
    {
        id: '4',
        position: { x: 600, y: 400 },
        data: { label: 'Database' }
    }]"
    :edges="[
    {
        id: 'e1-2',
        source: '1',
        target: '2', 
        label: 'query',
        animated: true
    },
    {
        id: 'e2-3',
        source: '2',
        target: '3',
        label: 'sync'
    },
    {
        id: 'e3-4',
        source: '3',
        target: '4',
        label: 'persist'
    }]" height="500px" width="400px" />
