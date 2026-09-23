---
layout: radial-gradient
title: Tanstack DB
---
<div class="absolute inset-0 flex items-center justify-center">
    <TanstackTitle class="text-6xl">Tanstack <Orange>DB</Orange></TanstackTitle>
</div>

---
layout: radial-gradient
---

<div class="flex flex-col w-full h-full gap-20">
  <TanstackTitle big class="w-full pt-10 text-7xl text-center">Tanstack <Orange>DB</Orange></TanstackTitle>
  <img class="!h-20 !w-20 -rotate-10 absolute top-5 left-5" src="/tanstack-logo.svg" />
  <div class="flex gap-12 justify-center items-stretch">
    <div v-click class="w-2/8 flex border border-4 border-red p-4 rounded-lg flex-col gap-4 items-center justify-center" style="background: radial-gradient(farthest-corner at 50% 30%, rgba(239, 68, 68, 0.45) 0%, rgba(254, 202, 202, 0.3) 55%, rgba(254, 242, 242, 0.18) 100%)">
      <div class="text-6xl">🐎</div>
      <div class="text-2xl text-center">"Blazing fast"</div>
    </div>
    <div v-click class="w-2/8 flex border border-4 border-red p-4 rounded-lg flex-col gap-4 items-center justify-center" style="background: radial-gradient(farthest-corner at 50% 30%, rgba(239, 68, 68, 0.45) 0%, rgba(254, 202, 202, 0.3) 55%, rgba(254, 242, 242, 0.18) 100%)">
      <div class="text-6xl">🔬</div>
      <div class="text-2xl text-center"><T fr="Réactivité fine" en="Fine Grained Reactivity" /></div>
    </div>
    <div v-click class="w-2/8 flex border border-4 border-red p-4 rounded-lg flex-col gap-4 items-center justify-center" style="background: radial-gradient(farthest-corner at 50% 30%, rgba(239, 68, 68, 0.45) 0%, rgba(254, 202, 202, 0.3) 55%, rgba(254, 242, 242, 0.18) 100%)">
      <div class="text-6xl">🌈</div>
      <div class="text-2xl text-center"><T fr="Optimistic update par défaut" en="Optimistic update by design" /></div>
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
    <T><template #fr><TanstackTitle>TanStack <Orange>DB</Orange></TanstackTitle>, c'est quoi ?</template><template #en>What is <TanstackTitle>TanStack <Orange>DB</Orange></TanstackTitle>?</template></T>
  </h1>

  <div v-click="1" class="citation-reveal flex h-full flex-col items-center justify-center gap-4 px-8 pt-32">
    <div class="comic-panel citation__quote">
      <blockquote class="citation__text">
        <T fr="Une couche de " en="A client-side " /><span class="text-red font-bold"><T fr="base de données" en="database"/></span><T fr=" côté client" en=" layer"/>&nbsp;<span v-click="2"><T fr="propulsée par le " en="powered by " /><span class="text-red font-bold">differential dataflow</span></span><span v-click="3">, <T fr="qui se branche directement sur vos appels " en="that plugs straight into your existing " /><span class="text-red font-bold"><T fr="useQuery " en="useQuery " /></span><T fr="existants" en="calls" />.</span>
      </blockquote>
    </div>
    <p class="citation__author">— <T fr="L'équipe TanStack DB" en="TanStack DB's team" /></p>
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
layout: radial-gradient
---

<div class="h-110 flex flex-col justify-center items-center">
  <TanstackTitle class="text-6xl text-center"><T><template #fr>Et si on refaisait l'app <br/>d'<Orange>Iphonix</Orange> ?</template><template #en>What if we redo the <br/><Orange>Iphonix</Orange> app?</template></T></TanstackTitle>
</div>

---
layout: deux-vignettes-radial
macWindow: true
leftTitle: todos-collection.ts
rightTitle: Informations
---

<h1 class="w-full text-left text-4xl"><TanstackTitle small><T><template #fr>Les <Orange>collections</Orange></template><template #en><Orange>collections</Orange></template></T></TanstackTitle></h1>
<h2 class="w-full text-left text-xl opacity-75 italic"><T fr="La base de TanStack DB" en="TanStack DB foundation" /></h2>


::left::

````md magic-move
```ts
const recipeCollection = createCollection()
```
```ts
const recipeCollection = createCollection(
  queryCollectionOptions({})
)
```
```ts {5-7|8|all}
const queryClient = new QueryClient()

const recipeCollection = createCollection(
  queryCollectionOptions({
    queryKey: ["recipe"],
    queryFn: fetchRecipe,
    queryClient,
    getKey: (item) => item.id,
  })
)
```
```ts {9-14}
const queryClient = new QueryClient()

const recipeCollection = createCollection(
  queryCollectionOptions({
    queryKey: ["recipe"],
    queryFn: fetchRecipe,
    queryClient,
    getKey: (item) => item.id,
    onInsert: async ({ transaction }) => {
      const newRecipe = transaction.mutations.map(
        (m) =>  m.modified
      );
      await api.createRecipe(newTodos);
    }
  })
)
```
```ts {10-17}
const queryClient = new QueryClient()

const recipeCollection = createCollection(
  queryCollectionOptions({
    queryKey: ["recipe"],
    queryFn: fetchRecipe,
    queryClient,
    getKey: (item) => item.id,
    onInsert: async ({ transaction }) => {/** */},
    onUpdate: async ({ transaction }) => {
      const updates = transaction.mutations.map(
      (m) => ({
        id: m.key,
        changes: m.changes,
      }))
      await api.updateRecipe(updates)
    }
  })
)
```
```ts {11-16}
const queryClient = new QueryClient()

const recipeCollection = createCollection(
  queryCollectionOptions({
    queryKey: ["recipe"],
    queryFn: fetchRecipe,
    queryClient,
    getKey: (item) => item.id,
    onInsert: async ({ transaction }) => {/** */},
    onUpdate: async ({ transaction }) => {/** */},
    onDelete: async ({ transaction }) => {
      const ids = transaction.mutations.map(
        (m) => m.key
      )
      await api.deleteRecipes(ids)
    },
  })
)
```
```ts
const queryClient = new QueryClient()

const recipeCollection = createCollection(
  queryCollectionOptions({
    queryKey: ["recipe"],
    queryFn: fetchRecipe,
    queryClient,
    getKey: (item) => item.id,
    onInsert: async ({ transaction }) => {/** */},
    onUpdate: async ({ transaction }) => {/** */},
    onDelete: async ({ transaction }) => {/** */},
  })
)
```
```ts
const queryClient = new QueryClient()

const recipeCollection = createCollection(
  queryCollectionOptions({
    queryKey: ["recipe"],
    queryFn: fetchRecipe,
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

<div class="m-2 relative">
  <div v-click="[1, 2]" class="absolute inset-0">
    <T fr="Migration simplifié depuis TanStack Query ! 🎉" en="Easy refactor from TanStack Query ! 🎉" />
  </div>
  <div v-click="[2, 4]" class="absolute inset-0">
    <T fr="Comme un useQuery classique 🥳" en="Like a good old useQuery 🥳" />

```tsx
const queryClient = new QueryClient();

const useRecipeQuery = useQuery({
  queryKey: ["recipe"],
  queryFn: fetchRecipe,
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
    <h2 class="text-4xl w-full h-80 text-center flex items-center justify-center"><T fr="Tout est prêt ! 🎉" en="Everything is ready! 🎉" /></h2>
  </div>
  <div class="-ml-2 mt-2" v-click="9">

```ts
const queryClient = new QueryClient()

const ingredientCollection = createCollection(
  queryCollectionOptions({
    queryKey: ["ingredients"],
    queryFn: fetchIngredients,
    queryClient,
    getKey: (item) => item.id,
    onInsert: async ({ transaction }) => {/** */},
    onUpdate: async ({ transaction }) => {/** */},
    onDelete: async ({ transaction }) => {/** */},
  })
)
```
  </div>
</div>

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
layout: deux-vignettes-radial
macWindow: true
revealCards: true
leftTitle: RecipesPage.tsx
leftLabel: TanStack Query
rightTitle: RecipesPage.tsx
rightLabel: TanStack DB
rightClick: 3
---

<h1 class="w-full text-left text-4xl"><TanstackTitle small><T fr="Les " en="" /><Orange>Live queries</Orange></TanstackTitle></h1>
<h2 class="w-full text-left text-xl opacity-75 italic">"Query Driven Developpment"</h2>

::left::

```tsx {all|all|4-7}
export function RecipesPage() {
  const filters = useRecipesFilters();

  const { data, isPending } = useQuery({
    queryKey: ['recipes'],
    queryFn: () => listRecipe(filters)
  })

  return <RecipesList recipes={data} />;
}
```

::right::

```tsx {all|4-11|5|6-7|8|9-10|4-11}
export function RecipesPage() {
  const filters = useRecipesFilters();

  const { data, isLoading } = useLiveQuery((q) =>
    q.from({ recipes: recipeCollection })
      .where(({ recipes }) => 
        ilike(recipes.name, `%${search}%`))
      .orderBy(({ recipes }) => recipes.id, "desc")
      .limit(pageSize)
      .offset((page - 1) * pageSize),
  );

    return <RecipesList recipes={data} />;
}
```

---
layout: deux-vignettes-radial
revealCards: true
macWindow: true
leftTitle: IngredientsList.tsx
rightTitle: RecipeDetails.tsx
location: forest
---

<h1 class="w-full text-left text-4xl"><TanstackTitle small><T fr="Les " en="" /><Orange>Live queries</Orange></TanstackTitle></h1>
<h2 class="w-full text-left text-xl opacity-75 italic"><T fr="Une api très complète !" en="a very complete api!" /></h2>

::left::

```tsx {all|all|all|5-6}
export function IngredientList() {
  const { data, isLoading } = useLiveQuery((q) =>
    q
      .from({ ing: ingredientCollection })
      .where(({ ing }) => eq(category, ing.category))
      .where(({ ing }) => gt(ing.quantity, 0))
      .orderBy(({ ing }) => ing.id, "desc")
      .limit(pageSize)
      .offset((page - 1) * pageSize),
  );

  return <main>...</main>
}
```

<div v-mark="{ at: 3, color: 'orange', type: 'circle' }" class="absolute opacity-0 top-55 left-18">
```ts
.where(({ ing }) => eq(category, ing.category))
.where(({ ing }) => gt(ing.quantity, 0))
```
</div>

::right::

```tsx {all|6-9}
export function RecipeDetails() {
  const { data, isLoading } = useLiveQuery((q) =>
    q
      .from({ recipes: recipeCollection })
      .where(({ recipes }) => eq(recipes.id, id))
      .join({ ingredient: ingredientsCollection }, 
        ({ recipe, ingredient }) => 
          eq(recipe.id, ingredient.id)
      )
      .findOne(),
  );

  return <main>...</main>
}
```

<div class="absolute opacity-0 top-58 left-135" v-mark="{ at: 4, color: 'red', type: 'circle' }">
```ts
.join({ ingredient: ingredientsCollection }, 
  ({ recipe, ingredient }) => 
    eq(recipe.id, ingredient.id)
)
```
</div>

---
layout: deux-vignettes-radial
macWindow: true
revealCards: true
leftTitle: IngredientDetailPage.tsx
leftLabel: TanStack Query
rightTitle: IngredientDetailPage.tsx
rightLabel: TanStack DB
rightClick: 4
---

<h1 class="w-full text-left text-4xl"><TanstackTitle small><T fr="Les " en="" /><Orange>Mutations</Orange></TanstackTitle></h1>
<h2 class="w-full text-left text-xl opacity-75 italic"><T fr="Action utilisateurs" en="User actions" /></h2>

::left::

```tsx {all|all|2-13|15-17}
export function IngredientDetailsPage({ ingredientId }) {
  const { mutate, isPending } = useMutation({
    mutationFn: (newQuantity) => 
      updateIngredientQuantity(ingredientId, newQuantity)
    onSuccess: async () => {
      await queryClient.invalidateQueries(
        ['ingredient-detail']
      )
      await queryClient.invalidateQueries(
        ['ingredients']
      )
    }
  })

  const onSubmit = (newQuantity: number) => {
    mutate(newQuantity)
  }

  return <IngredientQuantityForm onSubmit={onSubmit} />;
}
```

::right::

```tsx {all|all|2-6|3|2-6}
export function IngredientDetailsPage({ ingredientId }) {
  const onSubmit = (newQuantity: number) => {
    ingredientCollection.update(ingredientId, (draft) => {
      draft.quantity = newQuantity;
    });
  }

  return <IngredientQuantityForm onSubmit={onSubmit} />;
}
```

---
layout: radial-gradient
---

<h1 class="w-full text-center text-6xl mt-50">
  <TanstackTitle small>Demo <Orange>time !</Orange></TanstackTitle>
</h1>

---
layout: radial-gradient
---
<img class="absolute top-5 w-300px mx-auto" src="/tanstackdb/tsquery.png" />

---
layout: radial-gradient
---

<img class="absolute top-5 w-300px mx-auto" src="/tanstackdb/tsdbquery.png" />

---
layout: radial-gradient
---

<img class="absolute top-5 w-250px mx-auto" src="/tanstackdb/tsdbinmemo.png" />

---
layout: radial-gradient
---

<h1 class="w-full text-center text-4xl">
  <TanstackTitle small>Local only <Orange>Collection</Orange></TanstackTitle>
</h1>

<ul class="w-full flex flex-col gap-6 text-3xl mt-20 mb-20">
  <li v-click>
    <span class="inline-block mr-4">🖥️</span> <T fr="Peux faire office de store" en="Can be use as a store" />
  </li>
  <li v-click>
    <span class="inline-block mr-4">⚡</span> <T fr="Prototyper sans backend" en="Prototype without backend" />
  </li>
  <li v-click>
    <span class="inline-block mr-4">🧪</span> <T fr="Trop bien pour les tests" en="Great for testing" />
  </li>
</ul>
---
layout: radial-gradient
---

<h1 class="w-full text-center text-4xl">
  <TanstackTitle small><T><template #fr>Les <Orange>avantages</Orange> de TanStack <Orange>DB</Orange></template><template #en><Orange>TanStack</Orange> DB <Orange>benefits</Orange></template></T></TanstackTitle>
</h1>

<ul class="w-full flex flex-col gap-6 text-3xl mt-20 mb-20">
  <li v-click>
    <span class="inline-block mr-4">⏳</span> <T fr="Aucun temps de chargement après l'initial" en="No loading time after the initial one" />
  </li>
  <li v-click>
    <span class="inline-block mr-4">🌈</span> <T fr="Optimistic update par default" en="Optimistic update by design" />
  </li>
  <li v-click>
    <span class="inline-block mr-4">🪓</span> <T fr="Separation of concerns encore plus appuyé" en="Even more Separation of concerns" />
  </li>
  <li v-click>
    <span class="inline-block mr-4">🕹️</span> <T fr="DX au petit oignons !" en="nearly perfect DX!" />
  </li>
  <li v-click>
    <span class="inline-block mr-4">🏎️</span> <T fr="Performance perçue au maximum" en="Perceived performance to the max" />
  </li>
</ul>
