---
layout: radial-gradient
transition: none
title: Et si tu as 200 pages ?
---
<div class="flex absolute top-0 min-h-full flex-content-around flex-col">
<TanstackTitle small class="text-5xl text-center mt-8">Et si tu as <Orange>200</Orange> pages ? 🤔</TanstackTitle>
<v-clicks>
<MacWindow title="ingredient-item.json" class="w-full mt-10">
```json
{
  "id": "sanglier",
  "name": "Sanglier du Grand Bois",
  "quantity": 12,
  "unit": "kg",
  "dueDate": "2026-04-14",
  "whereToFind": "Lisière de la forêt d\u2019Armorique, près du ruisseau où Obélix pêche parfois des poissons.",
  "howToHarvest": "Approche silencieuse à l\u2019aube, avec Idéfix en éclaireur. Ne pas confondre avec le chef du village.",
  "lat": 48.32,
  "lng": -4.76,
  "category": "viande"
}
```
</MacWindow>
     <h2 class="text-4xl mt-auto mb-10">2000 ingrédients --> 635 ko</h2>
</v-clicks>
</div>

---
layout: radial-gradient
class: text-center
transition: none
title: Bandwith
---

<TanstackTitle small class="text-5xl text-center">Et si tu as <Orange>200</Orange> pages ? 🤔</TanstackTitle>
<ul class="mt-10 text-4xl w-160">
    <li class="mt-10 w-full flex space-between">3G : 1 mb/s <span class="text-red ml-auto">635 ms</span></li>
    <li class="mt-10 w-full flex space-between">4G&nbsp;<small>moyenne</small> : 10 mb/s <span class="text-red ml-auto">63.5 ms</span></li>
    <li class="mt-10 w-full flex space-between">4G&nbsp;<small>bonne</small> : 50 mb/s <span class="text-red ml-auto">12.7 ms</span></li>
    <li class="mt-10 w-full flex space-between">Fibre : 1000 mb/s <span class="text-red ml-auto">0.635 ms</span></li>
</ul>

---
layout: radial-gradient
class: text-center
transition: none
title: Bandwith vs latency
---

<TanstackTitle small class="text-5xl text-center"><Orange>Bandwith</Orange> &#8800; <Blue>Latency</Blue></TanstackTitle>
<ul class="mt-10 text-4xl w-160">
    <li class="mt-10 w-full flex space-between">3G : <span class="text-red inline-block ml-auto">635 ms</span>&nbsp;<span class="text-blue">+ 80-500 ms</span></li>
    <li class="mt-10 w-full flex space-between">4G&nbsp;<small>moyenne</small> : <span class="text-red inline-block ml-auto">63.5 ms</span>&nbsp;<span class="text-blue">+ 20-80 ms</span></li>
    <li class="mt-10 w-full flex space-between">4G&nbsp;<small>bonne</small> : <span class="text-red inline-block ml-auto">12.7 ms</span>&nbsp;<span class="text-blue">+ 20-80 ms</span></li>
    <li class="mt-10 w-full flex space-between">Fibre : <span class="text-red inline-block ml-auto">0.635 ms</span>&nbsp;<span class="text-blue">+ 5-30 ms</span></li>
</ul>

---
layout: radial-gradient
class: text-center
title: Bandwith vs latency proportions
---

<TanstackTitle small class="text-5xl text-center"><Orange>Bandwith</Orange> &#8800; <Blue>Latency</Blue></TanstackTitle>
<ul class="mt-10 text-4xl w-160">
    <li class="mt-10 w-full flex space-between">3G : <img class="inline ml-auto w-80" src="/local-first/latency/3g.svg" /></li>
    <li class="mt-10 w-full flex space-between">4G&nbsp;<small>moyenne</small> : <img class="inline ml-auto w-80" src="/local-first/latency/4g-moyenne.svg" /></li>
    <li class="mt-10 w-full flex space-between">4G&nbsp;<small>bonne</small> : <img class="inline ml-auto w-80" src="/local-first/latency/4g-bonne.svg" /></li>
    <li class="mt-10 w-full flex space-between">Fibre : <img class="inline ml-auto w-80" src="/local-first/latency/fibre.svg" /></li>
</ul>

---
layout: radial-gradient
class: text-center
title: Et si tu as 20 M pages ?
---
<TanstackTitle small class="text-5xl text-center">Et si tu as <Orange>20 000 000</Orange> pages ? 🙃</TanstackTitle>
<v-clicks>
    <span class="text-5xl mt-30">syncMode: <span class="text-orange">"on-demand"</span></span>
</v-clicks>
---
layout: radial-gradient
location: village
title: syncMode on-demand
---
<TanstackTitle small class="text-5xl">syncMode: <Orange>"on-demand"</Orange></TanstackTitle>
<MacWindow title="ingredients-collection.ts" class="w-full mt-10">
````md magic-move { lines: true }
```tsx
const ingredientsCollection = createCollection(
  queryCollectionOptions({
    queryKey: ["ingredients"],
    queryFn: async () => {
      const response = await fetch("/api/ingredients")
      return response.json()
    },
    queryClient,
    getKey: (item) => item.id,
  })
)
```
```tsx {3}
const ingredientsCollection = createCollection(
  queryCollectionOptions({
    syncMode: "on-demand",
    queryKey: ["ingredients"],
    queryFn: async () => {
      const response = await fetch("/api/ingredients")
      return response.json()
    },
    queryClient,
    getKey: (item) => item.id,
  })
)
```
```tsx {3,5-8}
const ingredientsCollection = createCollection(
  queryCollectionOptions({
    syncMode: "on-demand",
    queryKey: ["ingredients"],
    queryFn: async () => {
      const response = await fetch("/api/ingredients")
      return response.json()
    },
    queryClient,
    getKey: (item) => item.id,
  })
)
```
```tsx {3,5-8}
const ingredientsCollection = createCollection(
  queryCollectionOptions({
    syncMode: "on-demand",
    queryKey: ["ingredients"],
    queryFn: async (ctx) => {
      const response = await fetch("/api/ingredients")
      return response.json()
    },
    queryClient,
    getKey: (item) => item.id,
  })
)
```
```tsx {3,5-10}
const ingredientsCollection = createCollection(
  queryCollectionOptions({
    syncMode: "on-demand",
    queryKey: ["ingredients"],
    queryFn: async (ctx) => {
      const searchParams = yourCustomSearchParamsMapping(ctx.meta.loadSubsetOptions)

      const response = await fetch("/api/ingredients")
      return response.json()
    },
    queryClient,
    getKey: (item) => item.id,
  })
)
```
```tsx {3,5-10}
const ingredientsCollection = createCollection(
  queryCollectionOptions({
    syncMode: "on-demand",
    queryKey: ["ingredients"],
    queryFn: async (ctx) => {
      const searchParams = yourCustomSearchParamsMapping(ctx.meta.loadSubsetOptions)
      
      const response = await fetch(`/api/ingredients?${searchParams}`)
      return response.json()
    },
    queryClient,
    getKey: (item) => item.id,
  })
)
```
````
</MacWindow>
---