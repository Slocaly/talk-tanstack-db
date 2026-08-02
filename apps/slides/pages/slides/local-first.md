---
layout: radial-gradient
color: "#00BC7DFF"
title: Titre Local first
---
<div class="absolute inset-0 flex items-center justify-center">
    <TanstackTitle class="text-6xl">Local <Green>first</Green></TanstackTitle>
</div>

---
layout: full
class: bg-black
title: Les 7 règles du local first
---

<div class="relative flex h-full w-full items-center justify-center">
  <img
    src="/local-first/fight-club.png"
    alt=""
    aria-hidden="true"
    class="absolute inset-0 h-full w-full object-contain"
  />
<TanstackTitle small class="absolute bottom-0 p-5 w-full text-right z-10 text-5xl font-bold text-white drop-shadow-xl">
    Les 7 règles du <Green>Local first</Green>
  </TanstackTitle>
</div>

---
layout: full
class: text-white bg-black
title: 1 No spinners
---

<div class="relative flex h-full w-full items-center justify-center">
  <video autoplay loop muted playsinline class="absolute inset-0 h-full w-full object-cover">
    <source src="/local-first/demo-overtone.mp4" type="video/mp4" />
  </video>
    <TanstackTitle small class="absolute bottom-0 p-10 w-full text-center z-10 text-5xl font-bold text-white drop-shadow-xl bg-black/70">
    1. No <Green>spinners</Green>
  </TanstackTitle>
</div>

---
layout: full
class: bg-[#f7f7f7]
title: 2 Network is optional
---

<div class="relative flex h-full w-full flex-col items-center justify-center">
  <TanstackTitle small class="z-10 text-5xl font-bold drop-shadow-sm top-10 absolute">
    2. The network is <Green>optional</Green>
  </TanstackTitle>
  <img
    src="/local-first/no-internet-dino.png"
    alt=""
    aria-hidden="true"
    class="pointer-events-none absolute inset-x-0 bottom-0 w-full object-contain object-bottom"
  />
</div>

---
layout: full
class: text-white bg-black
title: 3 The long now
---

<div class="relative flex h-full w-full items-center justify-center">
  <img
    src="/local-first/the-long-now.png"
    alt=""
    aria-hidden="true"
    class="absolute inset-0 h-full w-full object-cover"
  />
  <TanstackTitle small class="absolute bottom-0 p-10 w-full text-center z-10 text-5xl font-bold text-white drop-shadow-xl bg-black/50">
    3. The long <Green>now</Green>
  </TanstackTitle>
</div>

---
layout: full
class: text-white bg-black
title: 4 Security and privacy
---

<div class="relative flex h-full w-full items-center justify-center">
  <img
    src="/local-first/fort-boyard.webp"
    alt=""
    aria-hidden="true"
    class="absolute inset-0 h-full w-full object-cover"
  />
  <TanstackTitle small class="absolute bottom-0 p-10 w-full text-center z-10 text-4xl font-bold text-white drop-shadow-xl bg-black/50">
    4. Security and privacy <Green>by default</Green>
  </TanstackTitle>
</div>

---
layout: full
class: text-white bg-black
title: 5 Ownership and control
---

<div class="relative flex h-full w-full items-center justify-center">
  <img
    src="/local-first/house-keys.png"
    alt=""
    aria-hidden="true"
    class="absolute inset-0 h-full w-full object-cover"
  />
  <TanstackTitle small class="absolute bottom-0 p-10 w-full text-center z-10 text-5xl font-bold text-white drop-shadow-xl bg-black/50">
    5. You retain ultimate <Green>ownership</Green> and <Green>control</Green>
  </TanstackTitle>
</div>

---
layout: full
class: bg-[#ece9d8]
title: Excel 2003
---

<div class="relative flex h-full w-full items-center justify-center">
  <img
    src="/local-first/excel-2003.png"
    alt=""
    aria-hidden="true"
    class="absolute inset-0 h-full w-full object-contain"
  />
</div>

---
layout: full
title: 6 Not trapped on 1 device
---

<div class="relative flex h-full w-full items-center justify-center">
  <img
    src="/local-first/icloud.png"
    alt=""
    aria-hidden="true"
    class="absolute inset-0 h-70 object-cover top-5 mx-auto"
  />
  <TanstackTitle small class="absolute bottom-0 z-10 max-w-5xl px-8 py-4 text-center text-5xl font-bold w-full">
    6. Your work is not <Green>trapped</Green> on <Green>one device</Green>
  </TanstackTitle>
</div>

---
layout: full
title: 7 Collaborators can see your changes
---

<div class="relative flex h-full w-full items-center justify-center overflow-hidden">
  <img
    src="/local-first/collaboration.png"
    alt="real time collaboration cover image"
    aria-hidden="true"
    class="absolute h-70 top-0"
  />
  <TanstackTitle small class="absolute bottom-0 p-10 w-full text-center z-10 text-5xl font-bold">
    7. Collaborators can <Green>see your changes</Green>
  </TanstackTitle>
</div>
---
layout: full
title: Le first de local first
---

<div class="relative flex h-full w-full items-center justify-center">
  <img
    src="/local-first/all-rules.png"
    alt="real time collaboration cover image"
    aria-hidden="true"
    class="absolute w-full"
  />
  <div v-click="1" class="bg-green absolute w-540px top--5 bottom--5 left--5 bg-opacity-30 flex items-center justify-center">
    <img class="h-100px" src="/local-first/logo-excel.png" />
  </div>
  <div v-click="2" class="bg-blue-200 absolute w-265px top--5 bottom--5 right--5 bg-opacity-60 flex items-center justify-center">
    <img class="h-80px" src="/local-first/logo-jira.png" />
  </div>
  <Arrow v-click="[3, 4]" x2="350" y2="250" x1="650" y1="250" width="12" class="ts-red" />
  <Arrow v-click="4" x1="350" y1="250" x2="650" y2="250" width="12" class="ts-red" />
</div>
---
layout: radial-gradient
color: "#00BC7DFF"
title: On load toutes les données
---
<DownloadAllData/>
---
layout: radial-gradient
color: "#00BC7DFF"
title: On echange que des diff

---
<SmallDiffExchange/>

---
layout: full
class: bg-black
title: Loading Figma
---

<div class="relative flex h-full w-full items-center justify-center">
  <video autoplay muted playsinline class="inset-0 h-112 w-full object-cover" style="object-position: 50% 100%; object-fit: cover;">
    <source src="/local-first/loading-figma.mov" type="video/mp4" />
  </video>
</div>
---
layout: radial-gradient
color: "#00BC7DFF"
title: How changes works schema
---
<LocalFirstVsTraditionalAppSchema/>

---
layout: radial-gradient
color: "#00BC7DFF"
title: Sync engines catalogue
---

<div class="relative flex h-full w-full items-center justify-center">
  <TanstackTitle small class="absolute top-0 z-10 max-w-5xl px-8 py-2 text-center text-5xl font-bold">
    Sync <Green>engines</Green>
  </TanstackTitle>
  <img
    src="/local-first/sync-engines-transparent.png"
    alt=""
    aria-hidden="true"
    class="inset-0 h-100 mt-20"
  />
</div>
---
layout: radial-gradient
color: "#00BC7DFF"
title: Sync engines bullets
---

<TanstackTitle small class="text-5xl">
    Sync <Green>engines</Green>
  </TanstackTitle>
<ul class="mt-10 text-4xl">
    <v-clicks>
        <li class="mt-10">⚡ Émet des events pour synchroniser les changements</li>
        <li class="mt-10">🔀 Fusionne les changements concurrents (conflits)</li>
    </v-clicks>
</ul>

---
layout: radial-gradient
color: "#00BC7DFF"
title: Backend dans une stack Localfirst
---
<TanstackTitle small class="text-4xl">
Backend dans une stack <Green>local first</Green> 
  </TanstackTitle>
<ul class="mt-10 text-4xl">
    <v-clicks>
        <li class="mt-10">📦 Charge le contexte initiale</li>
        <li class="mt-10">🔃 Utilise un sync engine</li>
        <li class="mt-10">✅ Valide les inputs utilisateur</li>
        <li class="mt-10">🔒 Authorization / Authentification</li>
    </v-clicks>
</ul>

---
layout: radial-gradient
color: "#00BC7DFF"
title: Applis connues en localfirst
---

<div class="relative flex h-full w-full items-center justify-center">
  <img
    src="/local-first/local-first-apps-transparent.png"
    alt=""
    aria-hidden="true"
    class="absolute inset-0 w-full object-cover top-0"
  />
</div>

---
layout: radial-gradient
color: "#00BC7DFF"
title: Faut il faire du local first ?
---
<TanstackTitle small class="text-5xl">
    Faut-il faire du <Green>local first</Green> ?
  </TanstackTitle>
<ul class="mt-10 text-4xl">
    <v-clicks>
        <li class="mt-10">🖥️ Ne s'applique qu'aux "applications"</li>
        <li class="mt-10">✨ Change les habitudes</li>
        <li class="mt-10">💒 Implique de "se marier" avec son sync engine</li>
        <li class="mt-10">🤯 Ou de le recoder... Bonne chance !</li>
    </v-clicks>
</ul>

---
layout: radial-gradient
color: "#00BC7DFF"
transition: none
title: Vendor locking sync engine
---
<SyncEngineVendorLocking/>
---
layout: radial-gradient
color: "#00BC7DFF"
title: Tanstack DB abstraction côté front 
---
<SyncEngineVendorLockingTanstackDb/>
---
layout: radial-gradient
color: "#00BC7DFF"
transition: none
title: Tanstack DB migration progressive
---
<ProgressiveSyncEngineMigration/>
---
layout: radial-gradient
color: "#00BC7DFF"
title: Collections tanstack db (sync engines)
---

<div class="relative flex h-full w-full items-center justify-center">
  <img
    src="/local-first/tanstack-compatibilite.png"
    alt=""
    aria-hidden="true"
    class="inset-0 h-120 mt-0"
  />
</div>
---
layout: radial-gradient
title: Faut-il faire du tanstack DB now ?
---
<TanstackTitle small class="text-5xl text-center">
    <T fr="Faut-il faire du Tanstack" en="Could we use Tanstack" /> <Orange>DB</Orange> ?
  </TanstackTitle>
<ul class="mt-10 text-4xl">
    <v-clicks>
        <li class="mt-10">🖥️ <T fr="Ne s'applique qu'aux &quot;applications&quot;" en="Apply only to &quot;applications&quot;" /> <TanstackTitle class="text-sm" small># Local <Green>first</Green></TanstackTitle></li>
        <li class="mt-10">✨ <T fr="Change les habitudes" en="Change habits" /> <TanstackTitle class="text-sm" small># Local <Green>first</Green></TanstackTitle></li>
        <li class="mt-10">🚫 <T fr="Les live query ont des limites" en="Live queries aren't limitless" /></li>
        <li class="mt-10">📈 Learning curve</li>
    </v-clicks>
</ul>

---
layout: radial-gradient
title: Faut-il faire du tanstack DB now ?
---
<TanstackTitle small class="text-5xl text-center">
    <T fr="Faut-il faire du Tanstack" en="Could we use Tanstack" /> <Orange>DB</Orange> <br /><Orange><T fr="Maintenant" en="Now" /></Orange> ?
  </TanstackTitle>
<ul class="mt-10 text-4xl">
    <v-clicks>
        <li class="mt-20">👶️ <T fr="C'est en" en="It's in" /> <TanstackTitle small px-2 rounded-3 bg-black text-white>beta</TanstackTitle></li>
        <li class="mt-20">✨ <T fr="L'IA préfère" en="AI prefer" /> <TanstackTitle small>tanstack <Red>query</Red></TanstackTitle></li>
    </v-clicks>
</ul>
---