---
layout: radial-gradient
---
<div class="absolute inset-0 flex items-center justify-center">
    <TanstackTitle class="text-6xl">Tanstack <Orange>DB</Orange></TanstackTitle>
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
    <TanstackTitle>TanStack <Orange>DB</Orange></TanstackTitle>, c'est quoi ?
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
leftTitle: todos-collection.ts
rightTitle: Informations
---

<h1 class="w-full text-left text-4xl"><TanstackTitle small>Les <Orange>collections</Orange></TanstackTitle></h1>
<h2 class="w-full text-left text-xl opacity-75 italic">La base de TanStack DB</h2>


::left::

````md magic-move
```ts
const todosCollection = createCollection()
```
```ts
const todosCollection = createCollection(
  queryCollectionOptions({})
)
```
```ts {5-7|8|all}
const queryClient = new QueryClient()

const todosCollection = createCollection(
  queryCollectionOptions({
    queryKey: ["todos"],
    queryFn: fetchTodo,
    queryClient,
    getKey: (item) => item.id,
  })
)
```
```ts {9-14}
const queryClient = new QueryClient()

const todosCollection = createCollection(
  queryCollectionOptions({
    queryKey: ["todos"],
    queryFn: fetchTodo,
    queryClient,
    getKey: (item) => item.id,
    onInsert: async ({ transaction }) => {
      const newTodos = transaction.mutations.map((m) => 
        m.modified
      );
      await createTodos(newTodos);
    }
  })
)
```
```ts {10-15}
const queryClient = new QueryClient()

const todosCollection = createCollection(
  queryCollectionOptions({
    queryKey: ["todos"],
    queryFn: fetchTodo,
    queryClient,
    getKey: (item) => item.id,
    onInsert: async ({ transaction }) => {/** */},
    onUpdate: async ({ transaction }) => {
      const updates = transaction.mutations.map((m) => ({
        id: m.key,
        changes: m.changes,
      }))
      await updateTodos(updates)
    }
  })
)
```
```ts {11-14}
const queryClient = new QueryClient()

const todosCollection = createCollection(
  queryCollectionOptions({
    queryKey: ["todos"],
    queryFn: fetchTodo,
    queryClient,
    getKey: (item) => item.id,
    onInsert: async ({ transaction }) => {/** */},
    onUpdate: async ({ transaction }) => {/** */},
    onDelete: async ({ transaction }) => {
      const ids = transaction.mutations.map((m) => m.key)
      await deleteTodos(ids)
    },
  })
)
```
```ts
const queryClient = new QueryClient()

const todosCollection = createCollection(
  queryCollectionOptions({
    queryKey: ["todos"],
    queryFn: fetchTodo,
    queryClient,
    getKey: (item) => item.id,
    onInsert: async ({ transaction }) => {/** */},
    onUpdate: async ({ transaction }) => {/** */},
    onDelete: async ({ transaction }) => {/** */},
  })
)
```
````

::right::

<div class="m-2 relative h-full">
  <div v-click="[1, 2]" class="absolute inset-0">
    Pleins de utilitaires existe déjà ! 🤯
    <ul class="store-benefits">
      <li>Query Collection</li>
      <li>Electric Collection</li>
      <li>Trailbase Collection</li>
      <li>RxDB Collection</li>
      <li>PowerSync Collection</li>
      <li>LocalStorage Collection</li>
      <li>LocalOnly Collection</li>
    </ul>
  </div>
  <div v-click="[2, 4]" class="absolute inset-0">
    Comme un useQuery classique 🥳

```tsx
const queryClient = new QueryClient();

const useTodoQuery = useQuery({
  queryKey: ["todos"],
  queryFn: fetchTodo,
  queryClient
})
```
  </div>
  <div v-click="[4, 8]" class="absolute inset-0">
  "Persistence handlers"
    <ul class="store-benefits">
      <li v-click="5">onInsert</li>
      <li v-click="6">onUpdate</li>
      <li v-click="7">onDelete</li>
    </ul>
  </div>
  <div v-click="8" class="absolute inset-0">
    <h2 class="text-4xl w-full h-80 text-center flex items-center justify-center">Tout est prêt ! 🎉</h2>
  </div>
</div>

<!-- ::right::

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
</div> -->


<style scoped>
.store-benefits {
  list-style: none;
  margin: 0;
  padding: 0;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.store-benefits li {
  position: relative;
  padding: 0.45rem 0.75rem 0.45rem 2rem;
  font-size: 1.05rem;
  line-height: 1.35;
  transform: rotate(-0.4deg);
}

.store-benefits li:nth-child(even) {
  transform: rotate(0.5deg);
}

.store-benefits li::before {
  content: "•";
  position: absolute;
  left: 0.65rem;
  top: 0.5rem;
  color: var(--comics-red);
  font-size: 0.9rem;
  line-height: 1;
}
</style>

---
layout: radial-gradient
---


<h1 class="w-full text-left text-4xl"><TanstackTitle small>Les <Orange>Live queries</Orange></TanstackTitle></h1>
<h2 class="w-full text-left text-xl opacity-75 italic">"Query Driven Developpment"</h2>


<div class="flex flex-col w-full items-center justify-center h-60">
  <MacWindow class="w-120" title="ActiveTodoList.tsx">

````md magic-move
```tsx
const ActiveTodoList = () => {
  const todos = /** ? */;

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.content}</li>
      ))}
    </ul>
  )
}
```
```tsx
const ActiveTodoList = () => {
  const todos = useLiveQuery()

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.content}</li>
      ))}
    </ul>
  )
}
```
```tsx
const ActiveTodoList = () => {
  const todos = useLiveQuery((q) => {
    return q.from({ todos: todosCollection })
  })

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.content}</li>
      ))}
    </ul>
  )
}
```
```tsx
const ActiveTodoList = () => {
  const todos = useLiveQuery((q) => {
    return q
              .from({ todos: todosCollection })
              .where(({ todos })  => eq(todos.completed, false))
  })

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.content}</li>
      ))}
    </ul>
  )
}
```
```tsx
const ActiveTodoList = () => {
  const todos = useLiveQuery((q) => {
    return q
              .from({ todos: todosCollection })
              .where(({ todos })  => eq(todos.completed, false))
              .select(({ todos }) => ({ 
                  id: todos.id,
                  text: todos.text
              }))
  })

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.content}</li>
      ))}
    </ul>
  )
}
```
````
  </MacWindow>
</div>

---
layout: radial-gradient
---

<div class="h-110 flex flex-col justify-center items-center">
  <h1 class="text-6xl text-center">Et si on refaisait l'app d'Iphonix ?</h1>
</div>

---
layout: deux-vignettes-radial
macWindow: true
leftTitle: ingredient-collection.ts
rightTitle: recipe-collection.ts
rightClick: 5
revealCards: true
---

# Première étape, les collections

::left::

````md magic-move
```ts
export const ingredientCollection = createCollection(
  queryCollectionOptions(),
);
```
```ts
export const ingredientCollection = createCollection(
  queryCollectionOptions(),
);
```
```ts {2-6}
export const ingredientCollection = createCollection(
  queryCollectionOptions({
    queryKey: ['ingredients'],
    queryFn: listIngredients,
    queryClient,
  }),
);
```
```ts {6}
export const ingredientCollection = createCollection(
  queryCollectionOptions({
    queryKey: ['ingredients'],
    queryFn: listIngredients,
    queryClient,
    getKey: (item) => item.id,
  }),
);
```
```ts {7-16}
export const ingredientCollection = createCollection(
  queryCollectionOptions({
    queryKey: ['ingredients'],
    queryFn: listIngredients,
    queryClient,
    getKey: (item) => item.id,
    onUpdate: async ({ transaction }) => {
      await Promise.all(
        transaction.mutations.map(({ modified }) =>
          updateIngredientQuantity({
            id: modified.id, 
            quantity: modified.quantity
          }),
        ),
      );
    },
  }),
);
```
````

::right::

````md magic-move
```ts
export const recipeCollection = createCollection(
  queryCollectionOptions(),
);
```
```ts
export const recipeCollection = createCollection(
  queryCollectionOptions(),
);
```
```ts {2-6}
export const recipeCollection = createCollection(
  queryCollectionOptions({
    queryKey: ['recipes'],
    queryFn: listRecipes,
    queryClient,
  }),
);

```
```ts {6}
export const recipeCollection = createCollection(
  queryCollectionOptions({
    queryKey: ['recipes'],
    queryFn: listRecipes,
    queryClient,
    getKey: (item) => item.id,
  }),
);

```
```ts {7-13|all}
export const recipeCollection = createCollection(
  queryCollectionOptions({
    queryKey: ['recipes'],
    queryFn: listRecipes,
    queryClient,
    getKey: (item) => item.id,
    onInsert: async ({ transaction }) => {
      await Promise.all(
        transaction.mutations.map(({ modified }) =>
          createRecipe(modified),
        ),
      );
    },
  }),
);

```
````

---
layout: deux-vignettes-radial
macWindow: true
revealCards: true
leftTitle: IngredientList.tsx
leftLabel: TanStack Query
rightTitle: IngredientList.tsx
rightLabel: TanStack DB
rightClick: 7
---

# La query des ingredients

::left::

```tsx {all|all|2|5|6|4|all}
export function IngredientsList() {
  const filters = useIngredientsFilters();

  const { data, isPending } = useQuery({
    queryKey: ['ingredients'],
    queryFn: () => listIngredients(filters)
  })

  return <ul>...</ul>;
}
```

::right::

```tsx {all|2|4|6|7-14|15|16-17|all}
export function IngredientsList() {
  const filters = useIngredientsFilters();

  const { data, isPending } = useLiveQuery((q) => 
    q.
      .from({ ingredients: ingredientCollection })
      .where(({ ingredients }) => 
        ilike(ingredients.name, `%${search}%`))
      .where(({ ingredients }) => category !== 'tous' 
          ? eq(category, ingredients.category)
          : eq(true, true))
      .where(({ ingredients }) => inStockOnly 
        ? gt(ingredients.quantity, 0) 
        : eq(true, true))
      .orderBy(({ ingredients }) => ingredients.id, "desc")
      .limit(pageSize)
      .offset((page - 1) * pageSize)
  )

    return <ul>...</ul>;
}
```
