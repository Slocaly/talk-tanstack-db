import type { Ingredient, Recipe } from './village.types';

export const seedIngredients: Ingredient[] = [
  {
    id: 'sanglier',
    name: 'Sanglier du Grand Bois',
    quantity: 12,
    unit: 'kg',
    dueDate: '2026-04-14',
    whereToFind:
      'Lisière de la forêt d’Armorique, près du ruisseau où Obélix pêche parfois des poissons.',
    howToHarvest:
      'Approche silencieuse à l’aube, avec Idéfix en éclaireur. Ne pas confondre avec le chef du village.',
    lat: 48.32,
    lng: -4.76,
    category: 'viande',
  },
  {
    id: 'potion',
    name: 'Fiole de potion magique',
    quantity: 3,
    unit: 'fioles',
    dueDate: '2026-05-01',
    whereToFind:
      'Chaudron du druide Panoramix, sous le chêne sacré — demander poliment avant de servir.',
    howToHarvest:
      'Laisser mijoter mystérieusement ; ne jamais goûter seul sans autorisation du druide.',
    lat: 48.35,
    lng: -4.72,
    category: 'boisson',
  },
  {
    id: 'menhir',
    name: 'Morceaux de menhir (livraison Obélix)',
    quantity: 40,
    unit: 'morceaux',
    dueDate: '2026-12-31',
    whereToFind: 'Carrière du village, pile à côté de la hutte d’Obélix.',
    howToHarvest:
      'Demander à Obélix de « découper » un petit échantillon — éviter les discussions sur le poisson.',
    lat: 48.34,
    lng: -4.74,
    category: 'autre',
  },
  {
    id: 'poisson',
    name: 'Poisson de rivière',
    quantity: 8,
    unit: 'kg',
    dueDate: '2026-04-11',
    whereToFind: 'Rivière qui borde le village, au pied du menhir.',
    howToHarvest:
      'Ligne simple ou épuisette ; attention aux oursins si Assurancetourix chante à proximité.',
    lat: 48.33,
    lng: -4.73,
    category: 'poisson',
  },
  {
    id: 'herbes',
    name: 'Herbes druidiques séchées',
    quantity: 2,
    unit: 'poignées',
    dueDate: '2026-06-15',
    whereToFind: 'Serre ombragée derrière la hutte de Panoramix.',
    howToHarvest:
      'Cueillir à la lune descendante ; remercier l’arbre à voix basse pour ne pas vexer le druide.',
    lat: 48.351,
    lng: -4.718,
    category: 'herbe',
  },
  {
    id: 'lait-chevre',
    name: 'Lait de chèvre frais',
    quantity: 6,
    unit: 'pots',
    dueDate: '2026-04-10',
    whereToFind: 'Bergerie du village, côté est, près du fossé.',
    howToHarvest:
      'Traire doucement le matin ; flatter la bête pour éviter le coup de corne.',
    lat: 48.338,
    lng: -4.735,
    category: 'laitier',
  },
  {
    id: 'pain',
    name: 'Pain gaulois cuit au feu de bois',
    quantity: 15,
    unit: 'miches',
    dueDate: '2026-04-09',
    whereToFind: 'Four communal, derrière la place du village.',
    howToHarvest:
      'Sortir du four avec la pelle longue ; ne pas brûler les moustaches du boulanger.',
    lat: 48.336,
    lng: -4.728,
    category: 'cereales',
  },
  {
    id: 'hydromel',
    name: 'Hydromel du banquet',
    quantity: 4,
    unit: 'amphores',
    dueDate: '2026-08-20',
    whereToFind: 'Cave du chef Abraracourcix, sous la table du banquet.',
    howToHarvest:
      'Demander au chef — et tenir le bouclier au cas où le ton monterait.',
    lat: 48.337,
    lng: -4.725,
    category: 'boisson',
  },
  {
    id: 'baies',
    name: 'Baies des bois',
    quantity: 1,
    unit: 'paniers',
    dueDate: '2026-04-16',
    whereToFind: 'Lisière nord, buissons derrière le palis en rondins.',
    howToHarvest:
      'Cueillette à la main ; surveiller les sangliers voisins et les légionnaires perdus.',
    lat: 48.345,
    lng: -4.71,
    category: 'herbe',
  },
  {
    id: 'oie',
    name: 'Oie du carré potager',
    quantity: 2,
    unit: 'volailles',
    dueDate: '2026-04-18',
    whereToFind: 'Potager d’Assurancetourix — éviter l’heure de la répétition.',
    howToHarvest:
      'Attraper fermement sans bousculer le musicien ; plumer hors de portée vocale.',
    lat: 48.332,
    lng: -4.738,
    category: 'viande',
  },
];

export const seedRecipes: Recipe[] = [
  {
    id: 'rotis-sanglier',
    name: 'Rôtis de sanglier à la broche',
    description:
      'Le plat des banquets quand les Romains ont encore une fois essuyé une défaite.',
    ingredients: [
      { ingredientId: 'sanglier', amount: 4 },
      { ingredientId: 'herbes', amount: 1 },
      { ingredientId: 'hydromel', amount: 1 },
    ],
  },
  {
    id: 'soupe-poisson',
    name: 'Soupe de poisson du ruisseau',
    description: 'Réconfortant après une bataille ou une chute de menhir.',
    ingredients: [
      { ingredientId: 'poisson', amount: 2 },
      { ingredientId: 'herbes', amount: 1 },
      { ingredientId: 'pain', amount: 2 },
    ],
  },
  {
    id: 'fondue-menhir',
    name: 'Casse-croûte menhir & lait de chèvre',
    description: 'Collation d’Obélix — version raisonnable pour le stock du village.',
    ingredients: [
      { ingredientId: 'menhir', amount: 5 },
      { ingredientId: 'lait-chevre', amount: 2 },
    ],
  },
  {
    id: 'banquet-chef',
    name: 'Banquet du chef (menu complet)',
    description:
      'Réservé aux grandes victoires — et aux invités qui supportent le ton du chef.',
    ingredients: [
      { ingredientId: 'sanglier', amount: 8 },
      { ingredientId: 'hydromel', amount: 2 },
      { ingredientId: 'pain', amount: 6 },
      { ingredientId: 'oie', amount: 1 },
    ],
  },
  {
    id: 'tarte-baies',
    name: 'Tarte aux baies du palis',
    description: 'Dessert simple pour calmer les esprits après une incursion romaine.',
    ingredients: [
      { ingredientId: 'baies', amount: 1 },
      { ingredientId: 'lait-chevre', amount: 1 },
      { ingredientId: 'pain', amount: 1 },
    ],
  },
];
