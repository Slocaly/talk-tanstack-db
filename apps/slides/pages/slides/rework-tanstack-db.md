---
layout: radial-gradient
---
<div class="absolute inset-0 flex items-center justify-center">
    <h1 class="text-6xl">Tanstack DB </h1>
</div>

---
layout: radial-gradient
---

<div class="flex flex-col w-full h-full gap-20">
  <img class="m-auto !w-3/4 pt-10" src="/tanstack-db.png" />
  <img class="!h-20 !w-20 -rotate-20 absolute top-5 left-5" src="/tanstack-logo.png" />
  <div class="flex gap-12 justify-center items-stretch">
    <div v-click class="w-2/8 flex border border-4 border-red p-4 rounded-lg flex-col gap-4 items-center justify-center" style="background: radial-gradient(farthest-corner at 50% 30%, rgba(239, 68, 68, 0.45) 0%, rgba(254, 202, 202, 0.3) 55%, rgba(254, 242, 242, 0.18) 100%)">
      <div class="text-6xl">🐎</div>
      <div class="text-2xl text-center">"Blazing fast"</div>
    </div>
    <div v-click class="w-2/8 flex border border-4 border-red p-4 rounded-lg flex-col gap-4 items-center justify-center" style="background: radial-gradient(farthest-corner at 50% 30%, rgba(239, 68, 68, 0.45) 0%, rgba(254, 202, 202, 0.3) 55%, rgba(254, 242, 242, 0.18) 100%)">
      <div class="text-6xl">🔬</div>
      <div class="text-2xl text-center">Réactivité fine</div>
    </div>
    <div v-click class="w-2/8 flex border border-4 border-red p-4 rounded-lg flex-col gap-4 items-center justify-center" style="background: radial-gradient(farthest-corner at 50% 30%, rgba(239, 68, 68, 0.45) 0%, rgba(254, 202, 202, 0.3) 55%, rgba(254, 242, 242, 0.18) 100%)">
      <div class="text-6xl">🌈</div>
      <div class="text-2xl text-center">Optimistic update par défaut</div>
    </div>
  </div>
</div>

---
layout: radial-gradient
---

<div class="relative h-full min-h-96 w-full">
  <h1
    class="title-slide-up absolute inset-x-0 z-10 text-center pt-6"
    :class="$clicks < 1 ? 'title-slide-up--center' : 'title-slide-up--top'"
  >
    TanStack DB, c'est quoi ?
  </h1>

  <div v-click="1" class="citation-reveal flex h-full flex-col items-center justify-center gap-4 px-8 pt-32">
    <div class="comic-panel citation__quote">
      <blockquote class="citation__text">
        Une couche de base de données côté client, propulsée par le differential dataflow, qui se branche directement sur vos appels useQuery existants.
      </blockquote>
    </div>
    <p class="citation__author">— L'équipe TanStack DB</p>
  </div>
</div>

<style>
.title-slide-up {
  font-size: 2.25rem;
  line-height: 1.1;
  transition:
    top 0.6s cubic-bezier(0.42, 0, 0.58, 1),
    transform 0.6s cubic-bezier(0.42, 0, 0.58, 1);
}

.title-slide-up--center {
  top: 50%;
  transform: translateY(-50%) scale(1.55);
  transform-origin: center center;
}

.title-slide-up--top {
  top: 0;
  transform: translateY(0) scale(1);
  transform-origin: top center;
}

.citation-reveal.slidev-vclick-target {
  transition: opacity 0.5s ease 0.4s;
}
</style>

---
layout: deux-vignettes-radial
macWindow: true
revealCards: true
leftTitle: Collections
rightTitle: Live Queries
---

# Les deux piliers de TanStack DB

::left::

```ts
const queryClient = new QueryClient()

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

<div v-mark="{ at: 3, color: 'red', type: 'circle' }" class="absolute top-58 opacity-0">
```ts
    queryFn: async () => {
        const response = await fetch("/api/dzd")
    },
```
</div>

::right::

```ts
const { data, isLoading } = useLiveQuery((q) =>
    q
        .from({ todos: todosCollection })
        .where(({ todos })  => eq(todos.completed, false))
        .select(({ todos }) => ({ 
            id: todos.id,
            text: todos.text
        }))
);
```

<div v-mark="{ at: 4, color: 'orange', type: 'circle' }" class="absolute top-42 opacity-0">
```ts
        .from({ todos: todosCollection })
        .where(({ todos })  => eq(todos.completed, false))
        .select(({ todos }) => ({ 
            id: todos.id,
            text: todos.text
        }))
```
</div>


<style>
.asterix-underline {
  display: inline-block;
  position: relative;
  margin: 0 0 0.75rem;
  padding-bottom: 0.15em;
}

.asterix-underline::after {
  content: "";
  position: absolute;
  left: -5%;
  right: -5%;
  bottom: -0.05em;
  height: 0.5em;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 16' preserveAspectRatio='none'%3E%3Cpath d='M2 11 C28 5 52 13 78 8 S128 4 152 10 S178 6 198 9' fill='none' stroke='%23111' stroke-width='6' stroke-linecap='round'/%3E%3Cpath d='M4 13 C32 9 58 14 84 11 S134 8 160 13 S182 10 196 12' fill='none' stroke='%23111' stroke-width='3' stroke-linecap='round' opacity='0.55'/%3E%3C/svg%3E")
    center / 100% 100% no-repeat;
  pointer-events: none;
}
</style>

---