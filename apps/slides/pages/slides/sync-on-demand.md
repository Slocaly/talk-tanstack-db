---
layout: radial-gradient
transition: none
---
<div class="flex absolute top-0 min-h-full flex-content-around flex-col">
<h1 class="text-5xl text-center mt-10">Et si tu as 200 pages ? 🤔</h1>
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
---

<h1 class="text-5xl text-center">Et si tu as 200 pages ? 🤔</h1>
<ul class="mt-10 text-4xl">
    <li class="mt-10">3G : 1 mb/s <span class="text-red">635 ms</span></li>
    <li class="mt-10">4G <small>moyenne</small> : 10 mb/s <span class="text-red">63.5 ms</span></li>
    <li class="mt-10">4G <small>bonne</small> : 50 mb/s <span class="text-red">12.7 ms</span></li>
    <li class="mt-10">Fibre : 1000 mb/s <span class="text-red">0.635 ms</span></li>
</ul>

---
layout: radial-gradient
class: text-center
---

<h1 class="text-5xl text-center"><span class="text-red">Bandwith</span> &#8800; <span class="text-blue">Latency</span></h1>
<ul class="mt-10 text-4xl">
    <li class="mt-10">3G : <span class="text-red">635 ms</span> <span class="text-blue">+ 80-500 ms</span></li>
    <li class="mt-10">4G <small>moyenne</small> : <span class="text-red">63.5 ms</span> <span class="text-blue">+ 20-80 ms</span></li>
    <li class="mt-10">4G <small>bonne</small> : <span class="text-red">12.7 ms</span> <span class="text-blue">+ 20-80 ms</span></li>
    <li class="mt-10">Fibre : <span class="text-red">0.635 ms</span> <span class="text-blue">+ 5-30 ms</span></li>
</ul>

---
layout: radial-gradient
class: text-center
---

<h1 class="text-5xl text-center">Et si tu as 20 000 000 pages ? 🙃</h1>
<span class="text-5xl mt-30">syncMode: <span class="text-orange">"on-demand"</span></span>
---
layout: radial-gradient
location: village
---
<h1 class="text-5xl">SyncMode = on-demand</h1>
<MacWindow title="todo-collection.ts" class="w-full mt-10">
````md magic-move { lines: true }
```tsx
const todosCollection = createCollection(
  queryCollectionOptions({
    queryKey: ["todos"],
    queryFn: async () => {
      const response = await fetch("/api/todos")
      return response.json()
    },
    queryClient,
    getKey: (item) => item.id,
  })
)
```
```tsx {3}
const todosCollection = createCollection(
  queryCollectionOptions({
    syncMode: "on-demand",
    queryKey: ["todos"],
    queryFn: async () => {
      const response = await fetch("/api/todos")
      return response.json()
    },
    queryClient,
    getKey: (item) => item.id,
  })
)
```
```tsx {3,5-8}
const todosCollection = createCollection(
  queryCollectionOptions({
    syncMode: "on-demand",
    queryKey: ["todos"],
    queryFn: async () => {
      const response = await fetch("/api/todos")
      return response.json()
    },
    queryClient,
    getKey: (item) => item.id,
  })
)
```
```tsx {3,5-8}
const todosCollection = createCollection(
  queryCollectionOptions({
    syncMode: "on-demand",
    queryKey: ["todos"],
    queryFn: async (ctx) => {
      const response = await fetch("/api/todos")
      return response.json()
    },
    queryClient,
    getKey: (item) => item.id,
  })
)
```
```tsx {3,5-10}
const todosCollection = createCollection(
  queryCollectionOptions({
    syncMode: "on-demand",
    queryKey: ["todos"],
    queryFn: async (ctx) => {
      const searchParams = yourCustomSearchParamsMapping(ctx.meta.loadSubsetOptions)

      const response = await fetch("/api/todos")
      return response.json()
    },
    queryClient,
    getKey: (item) => item.id,
  })
)
```
```tsx {3,5-10}
const todosCollection = createCollection(
  queryCollectionOptions({
    syncMode: "on-demand",
    queryKey: ["todos"],
    queryFn: async (ctx) => {
      const searchParams = yourCustomSearchParamsMapping(ctx.meta.loadSubsetOptions)
      
      const response = await fetch(`/api/todos?${searchParams}`)
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