---
layout: radial-gradient
color: "#FE9A00FF"
opacity: 0.20
---
<div class="absolute inset-0 flex items-center justify-center">
    <TanstackTitle class="text-6xl text-center">From <Red>0</Red><br/> to<br/>Tanstack <Red>query</Red></TanstackTitle>
</div>

---
layout: radial-gradient
color: "#FE9A00FF"
opacity: 0.20
---

<MacWindow title="IngredientListPage.tsx" class="w-full">

````md magic-move { lines: true }
```tsx
export const IngredientListPage = () => {
};
```
```tsx {2-6}
export const IngredientListPage = () => {
  const [ingredients, setIngredients] = useState<Data>([]);

  return (
    <IngredientList ingredients={ingredients}/>
  );
};
```
```tsx {4-11}
export const IngredientListPage = () => {
  const [ingredients, setIngredients] = useState<Data>([]);

  useEffect(() => {
    const load = async () => {
      const data = await fetchAppData()
      setIngredients(data)
    }

    void load()
  }, []);

  return (
    <IngredientList ingredients={ingredients}/>
  );
};
```
```tsx {3,7,10,16-18}
export const IngredientListPage = () => {
  const [ingredients, setIngredients] = useState<Data>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const data = await fetchAppData()
      setIngredients(data)
      setLoading(false)
    }

    void load()
  }, []);

  if (loading) return (
    <div>loading...</div>
  )

  return (
    <IngredientList ingredients={ingredients}/>
  );
};
```
```tsx {4,10,18-20}
export const IngredientListPage = () => {
  const [ingredients, setIngredients] = useState<Data>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const data = await fetchAppData()
        .catch(e => setError(e.message))
      setIngredients(data)
      setLoading(false)
    }

    void load()
  }, []);
  
  if (error) return (
    <div>An error happened {error}</div>
  )

  if (loading) return (
    <div>loading...</div>
  )

  return (
    <IngredientList ingredients={ingredients}/>
  );
};
```
````
</MacWindow>

---
layout: radial-gradient
color: "#FE9A00FF"
opacity: 0.20
---

<FetchDiagram />

---
layout: deux-vignettes-radial
revealCards: true
color: "#FE9A00FF"
opacity: 0.20
---

<TanstackTitle class="text-4xl" small>Librairies de <Red>store</Red></TanstackTitle>

::left::

<div>
  <ul class="store-benefits">
    <li>Unique source de vérité</li>
    <li>Réduction du “prop drilling”</li>
    <li>Architecture plus claire et maintenable</li>
    <li>Debugging avancé avec DevTools</li>
    <li>Facilite le travail en équipe</li>
    <li>Code plus prévisible et réutilisable</li>
  </ul>
</div>

::right::

<div class="store-logos-scatter relative h-full min-h-80 w-full">
  <div class="store-logo" style="top: 0%; left: 44%; transform: rotate(-5deg);">
    <img src="/redux.png" alt="Redux" />
    <p>Redux</p>
  </div>
  <div class="store-logo" style="top: 15%; left: 79%; transform: rotate(8deg);">
    <img src="/pinia.png" alt="Pinia" />
    <p>Pinia</p>
  </div>
  <div class="store-logo" style="top: 58%; left: 72%; transform: rotate(-7deg);">
    <img src="/ngrx-logo.svg" alt="RxJs" />
    <p>RxJs</p>
  </div>
  <div class="store-logo" style="top: 70%; left: 44%; transform: rotate(4deg);">
    <img src="/xstate-logo.png" alt="XState" />
    <p>XState</p>
  </div>
  <div class="store-logo" style="top: 56%; left: 10%; transform: rotate(-8deg);">
    <img src="/zustand-logo.jpeg" alt="Zustand" />
    <p>Zustand</p>
  </div>
  <div class="store-logo" style="top: 20%; left: 14%; transform: rotate(6deg);">
    <img src="/jotai-logo.png" alt="Jotai" />
    <p>Jotai</p>
  </div>
</div>

<style scoped>
.store-benefits {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
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

.store-logos-scatter .store-logo {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
}

.store-logos-scatter .store-logo img {
  width: 4.5rem;
  height: 4.5rem;
  object-fit: contain;
}

.store-logos-scatter .store-logo p {
  margin: 0;
  font-size: 1rem;
  line-height: 1;
  white-space: nowrap;
}
</style>


---
layout: radial-gradient
color: "#FE9A00FF"
opacity: 0.20
clicks: 2
---

<TanStackQueryFetchDiagram />

---
layout: radial-gradient
color: "#FE9A00FF"
opacity: 0.20
---

<div class="flex flex-col w-full h-full gap-20">
  <TanstackTitle big class="w-full pt-10 text-7xl text-center">Tanstack <Red>Query</Red></TanstackTitle>
  <img class="!h-20 !w-20 -rotate-20 absolute top-5 left-5" src="/tanstack-logo.png" />
  <div class="flex gap-12 justify-center items-stretch">
    <div v-click class="w-2/8 flex border border-4 border-orange p-4 rounded-lg flex-col gap-4 items-center justify-center" style="background: radial-gradient(farthest-corner at 50% 30%, rgba(251, 146, 60, 0.45) 0%, rgba(253, 224, 184, 0.3) 55%, rgba(255, 247, 237, 0.18) 100%)">
      <div class="text-6xl">🗃️</div>
      <div class="text-2xl text-center">Cache intelligent</div>
    </div>
    <div v-click class="w-2/8 flex border border-4 border-orange p-4 rounded-lg flex-col gap-4 items-center justify-center" style="background: radial-gradient(farthest-corner at 50% 30%, rgba(251, 146, 60, 0.45) 0%, rgba(253, 224, 184, 0.3) 55%, rgba(255, 247, 237, 0.18) 100%)">
      <div class="text-6xl">⚡</div>
      <div class="text-2xl text-center">Pas de rendering inutile</div>
    </div>
    <div v-click class="w-2/8 flex border border-4 border-orange p-4 rounded-lg flex-col gap-4 items-center justify-center" style="background: radial-gradient(farthest-corner at 50% 30%, rgba(251, 146, 60, 0.45) 0%, rgba(253, 224, 184, 0.3) 55%, rgba(255, 247, 237, 0.18) 100%)">
      <div class="text-6xl">🚀</div>
      <div class="text-2xl text-center">Synchronisation automatique</div>
    </div>
  </div>
</div>

---
layout: deux-vignettes-radial
macWindow: true
leftTitle: useQuery.tsx
rightTitle: useMutation.tsx
revealCards: true
---

<TanstackTitle class="text-4xl" small>Dans le <Red>code</Red></TanstackTitle>

::left::

```tsx {all|all|all|3-7|9-10|all}
import { useQuery } from '@tanstack/react-query';

const { data, isLoading, error } = useQuery({
  queryKey: ['users'],
  queryFn: () => 
    fetch('/api/users').then(res => res.json())
});

if (isLoading) return <div>Chargement...</div>;
if (error) return <div>Erreur !</div>;

return <div>{data?.map(user => user.name)}</div>;
```

::right::

```tsx {all|3-6|8|all}
import { useMutation } from '@tanstack/react-query';

const { mutate } = useMutation({
  mutationKey: ['users'],
  mutationFn: (userData) => addUser(userData),
});

const handleCreate = () => mutate({ name: 'John' });

return (
  <button onClick={handleCreate}>
    Créer utilisateur
  </button>
);
```

---
layout: radial-gradient
color: "#FE9A00FF"
opacity: 0.20
---


<h1 class="text-4xl text-left w-full"><TanstackTitle small>Une gestion de <Red>cache</Red></TanstackTitle></h1>
<h2 class="w-full text-left text-xl opacity-75 italic">"Aux petits oignons"</h2>

<MacWindow title="CacheInvalidation.tsx" class="mt-15 w-100">

````md magic-move
```tsx
import { useMutation } from '@tanstack/react-query'; 

const { mutate } = useMutation({
  mutationKey: ['users'],
  mutationFn: (userData) => addUser(userData),
});

const handleCreate = () => mutate({ name: 'John' });

return (
  <button onClick={handleCreate}>
    Créer utilisateur
  </button>
);
```
```tsx {all|3,8-10}
import { useMutation } from '@tanstack/react-query'; 

const queryClient = useQueryClient();

const { mutate } = useMutation({
  mutationKey: ['users'],
  mutationFn: (userData) => addUser(userData),
  onSuccess: () => {
    queryClient.invalidateQueries(['users'])
  }
});

const handleCreate = () => mutate({ name: 'John' });

return (
  <button onClick={handleCreate}>
    Créer utilisateur
  </button>
);
```
````
</MacWindow>

<style scoped>
.store-benefits {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
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
color: "#FE9A00FF"
opacity: 0.20
---

<div class="obelix-reveal h-110 flex flex-col justify-center items-center relative">
  <div v-click.hide="1" class="text-9xl">?</div>
  <img v-click="1" class="w-60 absolute max-w-100" src="/obélix.png" alt="obélix" />
</div>

<style>
.obelix-reveal .slidev-vclick-target {
  transition: opacity 0.5s ease;
}
</style>