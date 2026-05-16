---
theme: comics
title: TanStack Query — layouts BD
transition: slide-left
---

---

layout: planche-titre
location: village
bandeau: Catalogue des layouts — slidev-theme-comics
character: asterix
side: left

---

# TanStack Query

Exemples de chaque layout BD

---

layout: chapitre
location: forest
number: "PARTIE I"
onomatopee: POW!
character: obelix:happy
side: right

---

# TanStack Query

::subtitle::
Les potions du fetch côté client

---

layout: narrateur
variant: fact
location: panoramix_home

---

Le **cache** est la potion magique de Query : elle évite de re-fetch inutilement.

---

layout: narrateur
variant: warning

---

Attention : un `staleTime` trop bas, et le village re-fetch à chaque render !

---

layout: narrateur
variant: punchline

---

Sans Query, c'est comme préparer la potion magique à la main à chaque fois.

---

layout: deux-vignettes
location: village

---

# Sans Query

- `useEffect` + `useState`
- Pas de cache partagé
- Loading / error à gérer partout

::right::

# Avec Query

- `useQuery` / `useMutation`
- Cache global + déduplication
- États `isLoading`, `isError` unifiés

---

layout: deux-vignettes-entete
location: forest

---

# Les ingrédients du gui

::left::

**queryKey**

Identifiant unique du fetch — comme l'étiquette sur le chaudron.

::right::

**queryFn**

La recette : la fonction qui va chercher les données sur le serveur.

---

layout: panneau-triple
location: panoramix_home

---

```ts
const { data, isLoading, error } = useQuery({
  queryKey: ["todos"],
  queryFn: () => fetch("/api/todos").then((r) => r.json()),
  staleTime: 60_000,
});
```

::top-right::

**staleTime**

Durée pendant laquelle les données sont considérées fraîches.

::bottom-right::

**gcTime**

Temps avant que le cache garbage-collect les données inactives.

---

layout: monologue
location: panoramix_home
character: asterix
side: right
panel: code

---

## invalidateQueries

Quand la potion change sur le serveur, il faut **invalider** le cache pour forcer un nouveau fetch.

```ts
queryClient.invalidateQueries({ queryKey: ["todos"] });
```

::speech::
N'oublie pas d'invalider après une mutation !

---

layout: planche-demo
location: forest
caption: "Regardez bien cette incantation…"
character: asterix:happy

---

```ts
const mutation = useMutation({
  mutationFn: (todo) => api.createTodo(todo),
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ["todos"] });
  },
});
```

::speech::
Sacré TypeScript !

---

layout: vignette-image
location: village
image: /plan.png
side: left
character: asterix:happy

---

# Architecture Query

Le **QueryClient** distribue le cache à tout l'arbre React via le `QueryClientProvider`.

---

layout: vignette-image
location: village
image: /stock_ingredients.png
side: right
character: obelix:happy

---

# Préfetch

`queryClient.prefetchQuery()` — on prépare les ingrédients **avant** que l'utilisateur ouvre le chaudron.

---

layout: citation
location: forest

---

> C'est pas faux : le cache, c'est la vie.

::author::
— Obelix, après un banquet

---

layout: strip
location: village
columns: 4

---

::step1::
**1. Fetch**

`queryFn` appelle l'API

::step2::
**2. Cache**

Résultat stocké par `queryKey`

::step3::
**3. Mutate**

`useMutation` modifie le serveur

::step4::
**4. Sync**

`invalidateQueries` rafraîchit

---

layout: dialog
location: panoramix_home
left: asterix:happy
right: panoramix:happy
transition: fade

---

Asterix, va me chercher du gui !

::right::
Et du gui frais, pas du vieux stock !

---

layout: onomatopee
location: forest
word: CRACK!
color: "#c41e3a"
rotate: -14
size: xl

---

---

layout: fin
location: village
characters: asterix:happy,obelix:happy,panoramix:happy

---

# Merci !

**TanStack Query** — fin du catalogue des layouts

Questions ?
