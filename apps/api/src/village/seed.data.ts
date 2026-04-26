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
  {
    id: 'lievre',
    name: 'Lièvre des landes d’Armorique',
    quantity: 5,
    unit: 'pièces',
    dueDate: '2026-04-12',
    whereToFind:
      'Landes entre le village et le camp de Babaorum — Astérix prétend connaître tous les terriers.',
    howToHarvest:
      'Piège doux ou fronde ; ne pas laisser le lièvre s’échapper vers une patrouille romaine.',
    lat: 48.328,
    lng: -4.755,
    category: 'viande',
  },
  {
    id: 'canard-sauvage',
    name: 'Canard sauvage des marais',
    quantity: 4,
    unit: 'volailles',
    dueDate: '2026-04-13',
    whereToFind:
      'Marais à l’ouest, là où Idéfix aboie avant même qu’on voie le plumage.',
    howToHarvest:
      'Appelant et filet ; si le barde est dans les parages, viser l’oreille bouchée.',
    lat: 48.318,
    lng: -4.77,
    category: 'viande',
  },
  {
    id: 'poisson-ordral',
    name: 'Poisson « tout frais » chez Ordralphabetix',
    quantity: 10,
    unit: 'kg',
    dueDate: '2026-04-08',
    whereToFind:
      'Étal du poissonnier sur la place — discuter du prix avant que le soleil ne fasse son œuvre.',
    howToHarvest:
      'Choisir vite, payer comptant, et ne pas écouter les commentaires des voisins sur l’odeur.',
    lat: 48.335,
    lng: -4.726,
    category: 'poisson',
  },
  {
    id: 'boudin-unhygienix',
    name: 'Boudins et tripes de l’échoppe d’Unhygienix',
    quantity: 14,
    unit: 'morceaux',
    dueDate: '2026-04-07',
    whereToFind:
      'Boucherie en plein vent ; dispute fréquente avec le poissonnier pour savoir qui pue le plus.',
    howToHarvest:
      'Prendre ce qui pend au crochet ; éviter les jets de poisson pourri en retour.',
    lat: 48.334,
    lng: -4.727,
    category: 'viande',
  },
  {
    id: 'jambon-fume',
    name: 'Jambon fumé au feu de la forge',
    quantity: 3,
    unit: 'demi-jambons',
    dueDate: '2026-05-22',
    whereToFind:
      'Près de la forge de Cétautomatix — la fumée masque parfois les disputes du village.',
    howToHarvest:
      'Demander au forgeron de décrocher la pièce ; ne pas marcher pieds nus sur les étincelles.',
    lat: 48.339,
    lng: -4.731,
    category: 'viande',
  },
  {
    id: 'saucisse-sanglier',
    name: 'Saucisses de sanglier maison',
    quantity: 24,
    unit: 'saucisses',
    dueDate: '2026-04-20',
    whereToFind:
      'Séchoir derrière la hutte du charcutier, à l’abri des corbeaux romains.',
    howToHarvest:
      'Couper au couteau bien aiguisé ; réserver une portion pour calmer Obélix.',
    lat: 48.331,
    lng: -4.732,
    category: 'viande',
  },
  {
    id: 'escargots',
    name: 'Escargots des fossés (style légionnaire, mais meilleurs)',
    quantity: 200,
    unit: 'pièces',
    dueDate: '2026-04-25',
    whereToFind:
      'Fossé du rempart côté sud — les Romains les ramassent aussi, mais sans le beurre du village.',
    howToHarvest:
      'Ramasser après la rosée ; laisser jeûner dans un panier avant la cuisson.',
    lat: 48.333,
    lng: -4.729,
    category: 'autre',
  },
  {
    id: 'miel',
    name: 'Miel des ruches du Grand Bois',
    quantity: 7,
    unit: 'pots',
    dueDate: '2026-09-01',
    whereToFind:
      'Ruches entre deux chênes, loin du chant d’Assurancetourix pour le moral des abeilles.',
    howToHarvest:
      'Enfumoir et voile ; partager une louche avec le druide s’il passe par là.',
    lat: 48.342,
    lng: -4.742,
    category: 'autre',
  },
  {
    id: 'champignons',
    name: 'Cèpes et girolles d’Armorique',
    quantity: 3,
    unit: 'paniers',
    dueDate: '2026-04-15',
    whereToFind:
      'Sous-bois humide au nord-est ; Panoramix connaît les bons coins et les champignons à éviter.',
    howToHarvest:
      'Couteau à la racine ; ne jamais mélanger avec ceux du champ de Babaorum.',
    lat: 48.348,
    lng: -4.705,
    category: 'herbe',
  },
  {
    id: 'oignons',
    name: 'Oignons du carré potager',
    quantity: 30,
    unit: 'têtes',
    dueDate: '2026-05-10',
    whereToFind:
      'Potager surveillé par Agecanonix — marcher droit pour ne pas entendre le sermon.',
    howToHarvest:
      'Arracher à la main ; replanter quelques bulbes pour la paix des générations futures.',
    lat: 48.337,
    lng: -4.733,
    category: 'herbe',
  },
  {
    id: 'ail',
    name: 'Ail à repousser tout ce qui sent le légionnaire',
    quantity: 40,
    unit: 'têtes',
    dueDate: '2026-06-01',
    whereToFind: 'Bordure du potager, là où le chat du village fait la sieste.',
    howToHarvest:
      'Sécher au soleil trois jours ; ne pas confondre avec les bulbes du druide.',
    lat: 48.336,
    lng: -4.734,
    category: 'herbe',
  },
  {
    id: 'carottes',
    name: 'Carottes croquantes pour Idéfix',
    quantity: 18,
    unit: 'bottes',
    dueDate: '2026-04-17',
    whereToFind:
      'Parcelle réservée au petit chien — les Gaulois jurent que c’est pour le pot-au-feu.',
    howToHarvest:
      'Tirer doucement ; si Idéfix grogne, céder une carotte et tout ira bien.',
    lat: 48.338,
    lng: -4.736,
    category: 'herbe',
  },
  {
    id: 'navets',
    name: 'Navets et rutabagas du fossé',
    quantity: 22,
    unit: 'pièces',
    dueDate: '2026-04-19',
    whereToFind:
      'Champ derrière le rempart, là où les légionnaires ne pensent jamais à fouiller.',
    howToHarvest:
      'Fourche-bêche ; brosser la terre avant de les apporter à la marmite.',
    lat: 48.329,
    lng: -4.737,
    category: 'herbe',
  },
  {
    id: 'farine',
    name: 'Farine de froment au moulin du ruisseau',
    quantity: 8,
    unit: 'sacs',
    dueDate: '2026-07-01',
    whereToFind:
      'Moulin à eau en aval du village — vérifier qu’aucun menhir ne bloque le cours d’eau.',
    howToHarvest:
      'Sac en lin fourni par la femme du meunier ; porter sur le dos comme Obélix.',
    lat: 48.325,
    lng: -4.748,
    category: 'cereales',
  },
  {
    id: 'orge',
    name: 'Orge pour bouillie et bière de table',
    quantity: 12,
    unit: 'sacs',
    dueDate: '2026-10-15',
    whereToFind:
      'Grenier communal, ratissé après chaque moisson victorieuse sur les Romains.',
    howToHarvest:
      'Pelle et balance ; déduire la part du chef avant de compter le reste à voix haute.',
    lat: 48.34,
    lng: -4.724,
    category: 'cereales',
  },
  {
    id: 'beurre',
    name: 'Beurre de baratte du matin',
    quantity: 5,
    unit: 'motte',
    dueDate: '2026-04-11',
    whereToFind:
      'Laiterie attenante à la bergerie — même traite que le lait de chèvre.',
    howToHarvest:
      'Baratte jusqu’au caillé ; saler légèrement pour tenir jusqu’au banquet.',
    lat: 48.338,
    lng: -4.734,
    category: 'laitier',
  },
  {
    id: 'fromage-chevre',
    name: 'Fromage de chèvre affiné sur paille',
    quantity: 9,
    unit: 'roues',
    dueDate: '2026-05-30',
    whereToFind:
      'Cellier frais sous la hutte du berger — araignées gauloises incluses sans supplément.',
    howToHarvest:
      'Retourner une roue par semaine ; marquer d’une feuille de chêne les lots pour le chef.',
    lat: 48.339,
    lng: -4.735,
    category: 'laitier',
  },
  {
    id: 'oeufs',
    name: 'Œufs de poules du fossé',
    quantity: 48,
    unit: 'œufs',
    dueDate: '2026-04-14',
    whereToFind:
      'Poulailler à claire-voie ; le coq se prend pour un aigle romain mais cède devant une poignée d’orge.',
    howToHarvest:
      'Ramasser avant midi ; laisser une coquille vide pour tromfler les corbeaux.',
    lat: 48.334,
    lng: -4.736,
    category: 'laitier',
  },
  {
    id: 'sel-marin',
    name: 'Sel marin du litige avec Unhygienix',
    quantity: 2,
    unit: 'sacs',
    dueDate: '2026-12-31',
    whereToFind:
      'Réserve scellée — chaque prise de sel relance la querelle avec le poissonnier sur la qualité de l’eau.',
    howToHarvest:
      'Mesurer au poids d’or ; ne pas renverser sur les sandales du chef.',
    lat: 48.335,
    lng: -4.726,
    category: 'autre',
  },
  {
    id: 'vin-romain',
    name: 'Vin « réquisitionné » aux légionnaires',
    quantity: 6,
    unit: 'amphores',
    dueDate: '2026-11-01',
    whereToFind:
      'Cave secrète sous la hutte d’Astérix — provenance toujours expliquée par « un petit voyage ».',
    howToHarvest:
      'Bonde bien posée ; déguster avec modération sauf si le banquet a déjà commencé.',
    lat: 48.341,
    lng: -4.721,
    category: 'boisson',
  },
  {
    id: 'cervoise',
    name: 'Cervoise de fermentation gauloise',
    quantity: 20,
    unit: 'tonneaux',
    dueDate: '2026-08-15',
    whereToFind:
      'Brasserie du village, tonneaux alignés comme des légionnaires — mais moins disciplinés.',
    howToHarvest:
      'Siphonner proprement ; prévenir Bonemine si les tonneaux diminuent trop vite.',
    lat: 48.336,
    lng: -4.723,
    category: 'boisson',
  },
  {
    id: 'eau-source',
    name: 'Eau de source du ruisseau sacré',
    quantity: 50,
    unit: 'cruches',
    dueDate: '2026-04-30',
    whereToFind:
      'Source derrière le chêne de Panoramix — l’eau est excellente tant que personne n’y a trempé les pieds.',
    howToHarvest:
      'Cruche propre ; ne pas déranger le druide s’il récite des formules sur l’eau.',
    lat: 48.352,
    lng: -4.717,
    category: 'boisson',
  },
  {
    id: 'romarin',
    name: 'Romarin et thym du bord de chemin',
    quantity: 4,
    unit: 'bouquets',
    dueDate: '2026-05-05',
    whereToFind:
      'Chemins piétinés entre huttes — les herbes repoussent plus vite que les excuses des Romains.',
    howToHarvest:
      'Sécateur en bronze ; attacher par liens de ronce pour le séchage.',
    lat: 48.33,
    lng: -4.728,
    category: 'herbe',
  },
  {
    id: 'laurier-chef',
    name: 'Feuilles de laurier pour le bouclier du chef',
    quantity: 1,
    unit: 'couronne',
    dueDate: '2026-04-21',
    whereToFind:
      'Buisson d’honneur près de la hutte d’Abraracourcix — cueillir quand le chef est en inspection du rempart.',
    howToHarvest:
      'Brins pairs uniquement ; éviter les remarques sur le ventre du chef pendant la cueillette.',
    lat: 48.337,
    lng: -4.724,
    category: 'herbe',
  },
  {
    id: 'noisettes',
    name: 'Noisettes du chêne du druide',
    quantity: 4,
    unit: 'sacs',
    dueDate: '2026-10-31',
    whereToFind:
      'Sous le chêne sacré — écureuils gaulois tolérés, légionnaires à écarter au gourdin.',
    howToHarvest:
      'Ramasser au sol après le vent ; trier les coques vides chantées par les oiseaux.',
    lat: 48.351,
    lng: -4.719,
    category: 'autre',
  },
  {
    id: 'gland',
    name: 'Glands torréfiés (secours en cas de siège)',
    quantity: 15,
    unit: 'sacs',
    dueDate: '2027-01-01',
    whereToFind:
      'Réserve du vieux druide retraité — Astérix dit que c’est « pour le goût », Obélix préfère le sanglier.',
    howToHarvest:
      'Torréfier à la poêle ; moudre si on veut une farine de fortune.',
    lat: 48.353,
    lng: -4.716,
    category: 'cereales',
  },
  {
    id: 'bouillon-legumes',
    name: 'Légumes pour bouillon (poireaux, poireaux, poireaux)',
    quantity: 35,
    unit: 'tiges',
    dueDate: '2026-04-12',
    whereToFind:
      'Parcelle du potager tenue par la femme d’Ordralphabetix — elle n’a pas le même métier que son mari.',
    howToHarvest:
      'Couper au ras ; laver à grande eau pour enlever toute suspicion de poissonnerie.',
    lat: 48.334,
    lng: -4.725,
    category: 'herbe',
  },
  {
    id: 'moutarde',
    name: 'Graines de moutarde pilées au mortier',
    quantity: 1,
    unit: 'pot',
    dueDate: '2026-06-20',
    whereToFind:
      'Épicerie du coin — le marchand jure que les Romains n’y ont jamais mis les doigts.',
    howToHarvest:
      'Piler avec vinaigre de pomme ; ne pas éternuer sur le bouclier du chef.',
    lat: 48.335,
    lng: -4.724,
    category: 'autre',
  },
  {
    id: 'lard',
    name: 'Lard salé de la réserve d’hiver',
    quantity: 6,
    unit: 'plaques',
    dueDate: '2026-06-01',
    whereToFind:
      'Fumoir sous le toit de chaume — l’odeur attire Obélix ; prévoir une escorte.',
    howToHarvest:
      'Trancher fin pour le civet ; trancher épais pour calmer un porteur de menhir affamé.',
    lat: 48.332,
    lng: -4.731,
    category: 'viande',
  },
  {
    id: 'chou',
    name: 'Choux cabus du rempart',
    quantity: 12,
    unit: 'pièces',
    dueDate: '2026-04-22',
    whereToFind:
      'Bord intérieur du fossé — excellent projectiles improvisés si une cohorte escalade.',
    howToHarvest:
      'Couper la base au couteau ; retirer les limaces « neutres » avant la marmite.',
    lat: 48.328,
    lng: -4.73,
    category: 'herbe',
  },
  {
    id: 'pommes',
    name: 'Pommes à cidre du verger',
    quantity: 80,
    unit: 'fruits',
    dueDate: '2026-04-28',
    whereToFind:
      'Verger derrière la hutte d’Agecanonix — il surveille les échelles comme un aigle.',
    howToHarvest:
      'Secouer l’arbre au bon vent ; ramasser avant que le cidre ne se fasse tout seul par terre.',
    lat: 48.343,
    lng: -4.722,
    category: 'herbe',
  },
  {
    id: 'miel-lune',
    name: 'Miel de lune (réservé aux formules de Panoramix)',
    quantity: 1,
    unit: 'fiole',
    dueDate: '2026-04-30',
    whereToFind:
      'Étagère haute dans la hutte du druide — ne pas toucher si la potion mijote déjà.',
    howToHarvest:
      'Demander la permission par trois fois ; sinon, risquer de se retrouver en poisson volant.',
    lat: 48.35,
    lng: -4.718,
    category: 'autre',
  },
  {
    id: 'garum',
    name: 'Sauce garum « empruntée » au camp romain',
    quantity: 2,
    unit: 'amphores',
    dueDate: '2026-04-06',
    whereToFind:
      'Butin de la dernière incursion nocturne — à utiliser avec parcimonie sauf pour faire fuir les rats.',
    howToHarvest:
      'Ouvrir fenêtre ; verser goutte à goutte ; fermer vite et laver les mains à l’eau du ruisseau.',
    lat: 48.326,
    lng: -4.76,
    category: 'autre',
  },
  {
    id: 'sanglier-marine',
    name: 'Sanglier mariné au vin et aux baies',
    quantity: 8,
    unit: 'kg',
    dueDate: '2026-04-09',
    whereToFind:
      'Tonneau de marine dans la cave du chef — étiquette illisible volontairement.',
    howToHarvest:
      'Égoutter ; éponger ; ne pas goûter le marinadeur si Assurancetourix répète à côté.',
    lat: 48.337,
    lng: -4.725,
    category: 'viande',
  },
  {
    id: 'creme',
    name: 'Crème fouettée pour desserts de victoire',
    quantity: 3,
    unit: 'pots',
    dueDate: '2026-04-10',
    whereToFind:
      'Même traite que le lait — battre jusqu’à ce que le bras fasse comme celui d’Obélix.',
    howToHarvest:
      'Fouet en bois ; garder au frais dans le ruisseau si le banquet est dans trois heures.',
    lat: 48.338,
    lng: -4.735,
    category: 'laitier',
  },
  {
    id: 'perdrix',
    name: 'Perdrix des landes venteuses',
    quantity: 9,
    unit: 'volailles',
    dueDate: '2026-04-21',
    whereToFind:
      'Landes entre deux buissons bas — les perdrix se moquent des patrouilles qui crissent en latin.',
    howToHarvest:
      'Filet ou fronde discrète ; ne pas viser le casque d’un légionnaire par erreur (déjà vu).',
    lat: 48.327,
    lng: -4.752,
    category: 'viande',
  },
  {
    id: 'lapin',
    name: 'Lapin de garenne du fossé',
    quantity: 14,
    unit: 'pièces',
    dueDate: '2026-04-19',
    whereToFind:
      'Terriers le long du rempart — Idéfix a parfois des opinions sur qui a attrapé le premier.',
    howToHarvest:
      'Lacs et collets ; relâcher les lapins trop maigres pour ne pas vexer Obélix.',
    lat: 48.331,
    lng: -4.727,
    category: 'viande',
  },
  {
    id: 'veau',
    name: 'Veau de pâturage (jamais vu par les Romains)',
    quantity: 2,
    unit: 'demi-carcasses',
    dueDate: '2026-04-12',
    whereToFind:
      'Pré derrière la bergerie — le troupeau se confond volontiers avec les nuages de poussière de charge.',
    howToHarvest:
      'Abattage au village seulement après victoire ; sinon, on attend et on mange du sanglier.',
    lat: 48.341,
    lng: -4.738,
    category: 'viande',
  },
  {
    id: 'mouton',
    name: 'Gigot de mouton du troupeau',
    quantity: 4,
    unit: 'gigots',
    dueDate: '2026-04-23',
    whereToFind:
      'Bergerie commune — le berger prétend connaître chaque bête par son nom de légionnaire ridicule.',
    howToHarvest:
      'Séparer au couteau ; réserver l’os pour le bouillon et les chiens du village.',
    lat: 48.339,
    lng: -4.736,
    category: 'viande',
  },
  {
    id: 'chevreau',
    name: 'Chevreau rôti pour les grandes fêtes',
    quantity: 1,
    unit: 'carcasse',
    dueDate: '2026-04-26',
    whereToFind:
      'Réserve du chef — étiquetée « ne pas confondre avec le bouclier du chef » après une erreur mémorable.',
    howToHarvest:
      'Demander à Abraracourcix ; si le ton monte, laisser parler Bonemine.',
    lat: 48.337,
    lng: -4.724,
    category: 'viande',
  },
  {
    id: 'anguille',
    name: 'Anguilles du ruisseau vaseux',
    quantity: 18,
    unit: 'pièces',
    dueDate: '2026-04-08',
    whereToFind:
      'Méandre vaseux en aval — Astérix dit que c’est comme attraper un centurion, mais plus glissant.',
    howToHarvest:
      'Fourche à anguilles et patience ; bottes hautes pour les flatteurs du fond.',
    lat: 48.324,
    lng: -4.745,
    category: 'poisson',
  },
  {
    id: 'truite',
    name: 'Truites fario des remous',
    quantity: 11,
    unit: 'pièces',
    dueDate: '2026-04-10',
    whereToFind:
      'Cascade cachée derrière les rochers — l’eau est si claire qu’on voit les sandales des curieux.',
    howToHarvest:
      'Mouche sèche au crépuscule ; ne pas chanter faux près de l’eau.',
    lat: 48.319,
    lng: -4.768,
    category: 'poisson',
  },
  {
    id: 'morue-salee',
    name: 'Morue salée du commerce du Grand Nord',
    quantity: 6,
    unit: 'morceaux',
    dueDate: '2026-09-30',
    whereToFind:
      'Hangar du marchand itinérant — il jure que les pirates n’y sont pour rien, ce qui est louche.',
    howToHarvest:
      'Dessaler trois jours en changeant l’eau ; sinon, boire encore plus de cervoise.',
    lat: 48.336,
    lng: -4.722,
    category: 'poisson',
  },
  {
    id: 'cuisses-grenouille',
    name: 'Cuisses de grenouille « spécialité légionnaire »',
    quantity: 40,
    unit: 'paires',
    dueDate: '2026-04-11',
    whereToFind:
      'Marais où les légionnaires s’entraînent à marcher — les grenouilles en profitent pour se moquer.',
    howToHarvest:
      'Épuisette au clair de lune ; rincer soigneusement avant de nier toute parenté avec Rome.',
    lat: 48.317,
    lng: -4.772,
    category: 'viande',
  },
  {
    id: 'pain-seigle',
    name: 'Pain noir de seigle',
    quantity: 20,
    unit: 'miches',
    dueDate: '2026-04-13',
    whereToFind:
      'Four du boulanger, fournée du matin — résiste mieux qu’un bouclier romain aux intempéries.',
    howToHarvest:
      'Tapoter la croûte ; si ça sonne creux, c’est prêt ; si ça sonne romain, fuir.',
    lat: 48.335,
    lng: -4.729,
    category: 'cereales',
  },
  {
    id: 'figues-seches',
    name: 'Figues sèches du soleil du Midi',
    quantity: 3,
    unit: 'sacs',
    dueDate: '2026-11-01',
    whereToFind:
      'Coffre du marchand revenu d’Hispania — il raconte des histoires de taureaux, le village raconte des histoires de sangliers.',
    howToHarvest:
      'Tri des queues ; tremper dans l’hydromel si elles sont trop coriaces.',
    lat: 48.334,
    lng: -4.721,
    category: 'herbe',
  },
  {
    id: 'pruneaux',
    name: 'Pruneaux pour digestion de banquet',
    quantity: 2,
    unit: 'pots',
    dueDate: '2026-12-15',
    whereToFind:
      'Armoire de la femme du chef — « au cas où », dit-elle en regardant le ventre du village.',
    howToHarvest:
      'Compter les grains ; en cacher pour Agecanonix qui prêche la modération entre deux pruneaux.',
    lat: 48.338,
    lng: -4.723,
    category: 'herbe',
  },
  {
    id: 'lentilles',
    name: 'Lentilles vertes du champ de tir',
    quantity: 7,
    unit: 'sacs',
    dueDate: '2026-05-18',
    whereToFind:
      'Champ derrière le stand de lancer de menhir — les lentilles repoussent plus vite que les excuses des arbitres.',
    howToHarvest:
      'Faucille basse ; trier les cailloux qui se prennent pour des projectiles.',
    lat: 48.33,
    lng: -4.739,
    category: 'herbe',
  },
  {
    id: 'feves',
    name: 'Fèves à écosser du bord du chemin',
    quantity: 5,
    unit: 'paniers',
    dueDate: '2026-05-12',
    whereToFind:
      'Haie bordant le chemin des druides — cueillir en chantonnant pour ne pas effrayer les fèves.',
    howToHarvest:
      'Écosser au soleil ; jeter les enveloppes au compost, pas sur la tête d’un légionnaire.',
    lat: 48.342,
    lng: -4.726,
    category: 'herbe',
  },
  {
    id: 'cresson',
    name: 'Cresson de source cristalline',
    quantity: 4,
    unit: 'bouquets',
    dueDate: '2026-04-14',
    whereToFind:
      'Source derrière le chêne — croquant et piquant comme une réplique d’Astérix.',
    howToHarvest:
      'Ciseaux propres ; laver à l’eau vive pour enlever la boue des sandales des visiteurs.',
    lat: 48.352,
    lng: -4.716,
    category: 'herbe',
  },
  {
    id: 'epinards',
    name: 'Épinards à la poêle du potager',
    quantity: 16,
    unit: 'bottes',
    dueDate: '2026-04-17',
    whereToFind:
      'Parcelle ombragée — le cultivateur prétend que ça rend fort comme un menhir ; Obélix approuve par principe.',
    howToHarvest:
      'Couper les tiges ; rejeter les feuilles mangées par les limaces diplomates.',
    lat: 48.333,
    lng: -4.732,
    category: 'herbe',
  },
  {
    id: 'persil',
    name: 'Persil plat et frisé du marché',
    quantity: 12,
    unit: 'bouquets',
    dueDate: '2026-04-20',
    whereToFind:
      'Étal du potager sur la place — frais tant qu’Ordralphabetix ne passe pas trop près.',
    howToHarvest:
      'Couper au ras ; lier avec une brindille de ronce pour le séchage.',
    lat: 48.335,
    lng: -4.726,
    category: 'herbe',
  },
  {
    id: 'aneth-cerfeuil',
    name: 'Aneth et cerfeuil pour poissons',
    quantity: 6,
    unit: 'bouquets',
    dueDate: '2026-04-16',
    whereToFind:
      'Bacs d’herbes près du ruisseau — l’odeur attire les poissons et repousse parfois les barbares.',
    howToHarvest:
      'Sécateur ; ne pas confondre avec les herbes du druide sous peine de sourcils froncés.',
    lat: 48.332,
    lng: -4.731,
    category: 'herbe',
  },
  {
    id: 'huile-olive',
    name: 'Huile d’olive du commerce méditerranéen',
    quantity: 4,
    unit: 'amphores',
    dueDate: '2026-08-01',
    whereToFind:
      'Réserve du marchand — chaque amphore raconte une tempête, un pirate, ou un mensonge élégant.',
    howToHarvest:
      'Entonnoir propre ; verser au goutte-à-goutte sur la salade de cresson.',
    lat: 48.333,
    lng: -4.72,
    category: 'autre',
  },
  {
    id: 'vinaigre-cidre',
    name: 'Vinaigre de cidre du verger',
    quantity: 3,
    unit: 'cruches',
    dueDate: '2026-06-30',
    whereToFind:
      'Tonnelle derrière les pommiers — le cidre est parti en fumée, le vinaigre est resté, fier.',
    howToHarvest:
      'Filtrer à travers un linge ; ne pas renverser sur les sandales de Bonemine.',
    lat: 48.344,
    lng: -4.721,
    category: 'autre',
  },
  {
    id: 'cornichons',
    name: 'Cornichons au vinaigre et aromates',
    quantity: 2,
    unit: 'pots',
    dueDate: '2026-07-20',
    whereToFind:
      'Cellier de la femme d’Unhygienix — elle assure que ce n’est pas la même cuve que les tripes.',
    howToHarvest:
      'Fourchette en bois ; croquer pour tester le courage des convives.',
    lat: 48.334,
    lng: -4.727,
    category: 'autre',
  },
  {
    id: 'rillettes-sanglier',
    name: 'Rillettes de sanglier en pot clos',
    quantity: 10,
    unit: 'pots',
    dueDate: '2026-05-25',
    whereToFind:
      'Réserve du charcutier — chaque pot porte un petit sanglier dessiné au charbon (style naïf).',
    howToHarvest:
      'Cuillère en corne ; étaler sur le pain noir pour le voyage vers Lutèce.',
    lat: 48.33,
    lng: -4.733,
    category: 'viande',
  },
  {
    id: 'pate-foie-canard',
    name: 'Pâté de foie de canard sauvage',
    quantity: 5,
    unit: 'terrines',
    dueDate: '2026-04-24',
    whereToFind:
      'Huche réfrigérée au ruisseau — Obélix a déjà essayé d’ouvrir une terrine à la main nue.',
    howToHarvest:
      'Trancher au fil ; servir avec figues sèches si on veut se donner des airs de reine d’Égypte.',
    lat: 48.331,
    lng: -4.734,
    category: 'viande',
  },
  {
    id: 'fromage-helvete',
    name: 'Meule « rapportée de Helvétie »',
    quantity: 2,
    unit: 'meules',
    dueDate: '2026-06-10',
    whereToFind:
      'Sous la hutte du voyageur — il raconte des trous dans le fromage et des trous dans les légions.',
    howToHarvest:
      'Râpe en bois ; fondre près du feu en raclant le fond du récit du voyageur.',
    lat: 48.34,
    lng: -4.719,
    category: 'laitier',
  },
  {
    id: 'lait-vache',
    name: 'Lait de vache entier du matin',
    quantity: 11,
    unit: 'cruches',
    dueDate: '2026-04-09',
    whereToFind:
      'Étable voisine de la bergerie — vaches gauloises, humeur variable selon le vent du nord.',
    howToHarvest:
      'Traire après avoir salué la bête ; ne pas faire de vagues devant le taureau.',
    lat: 48.34,
    lng: -4.737,
    category: 'laitier',
  },
  {
    id: 'caille-brebis',
    name: 'Caillé de brebis pour fromage frais',
    quantity: 4,
    unit: 'mottes',
    dueDate: '2026-04-11',
    whereToFind:
      'Laiterie — même traite que le lait de brebis, mais le caillé a décidé de se tenir droit.',
    howToHarvest:
      'Égoutter dans une étamine ; saler une pointe pour le goût du berger.',
    lat: 48.339,
    lng: -4.734,
    category: 'laitier',
  },
  {
    id: 'citron-rare',
    name: 'Citrons rares du marchand d’Orient',
    quantity: 8,
    unit: 'fruits',
    dueDate: '2026-05-01',
    whereToFind:
      'Cageot sous bâche — Panoramix en réclame une tranche pour certaines mixtures ; le chef pour son poisson.',
    howToHarvest:
      'Zester avant de presser ; conserver les pépins pour une blague à un légionnaire curieux.',
    lat: 48.332,
    lng: -4.719,
    category: 'herbe',
  },
  {
    id: 'pommes-terre',
    name: 'Pommes de terre « ramenées d’Hispania »',
    quantity: 45,
    unit: 'kg',
    dueDate: '2026-05-08',
    whereToFind:
      'Sac près de la hutte du marchand — il explique que c’est « la terre des pommes », le village hausse les épaules.',
    howToHarvest:
      'Brosser la terre ; cuire en robe des champs ou en purée selon l’humeur d’Obélix.',
    lat: 48.336,
    lng: -4.718,
    category: 'herbe',
  },
  {
    id: 'poivrons',
    name: 'Poivrons doux du potager ensoleillé',
    quantity: 19,
    unit: 'pièces',
    dueDate: '2026-04-21',
    whereToFind:
      'Carré le plus exposé au sud — les poivrons rougissent plus vite que les oreilles d’un légionnaire taquiné.',
    howToHarvest:
      'Couper le pédoncule ; retirer les graines si on veut éviter les éternuements en chaîne.',
    lat: 48.334,
    lng: -4.733,
    category: 'herbe',
  },
  {
    id: 'tomates-druide',
    name: 'Tomates « expérimentales » du jardin du druide',
    quantity: 14,
    unit: 'pièces',
    dueDate: '2026-04-18',
    whereToFind:
      'Parcelle entourée de baguettes gravées — Panoramix dit que c’est de la botanique, pas de la magie.',
    howToHarvest:
      'Cueillir mûres ; ne pas manger les tomates qui murmurent, celles-là sont pour demain.',
    lat: 48.349,
    lng: -4.717,
    category: 'herbe',
  },
  {
    id: 'sauge-menthe',
    name: 'Sauge et menthe pour tisanes',
    quantity: 8,
    unit: 'bouquets',
    dueDate: '2026-05-28',
    whereToFind:
      'Bordure humide du ruisseau — l’odeur réveille plus vite qu’un cor de charge gaulois.',
    howToHarvest:
      'Sécher à l’ombre ; stocker dans un sac en peau loin des rats et des curieux.',
    lat: 48.328,
    lng: -4.741,
    category: 'herbe',
  },
  {
    id: 'tisane-tilleul',
    name: 'Fleurs de tilleul séchées',
    quantity: 2,
    unit: 'sacs',
    dueDate: '2026-10-01',
    whereToFind:
      'Grenier sous le toit — récolte quand les abeilles dorment, sinon elles protestent en essaim.',
    howToHarvest:
      'Infuser à l’eau frémissante ; offrir à Agecanonix pour gagner cinq minutes de silence.',
    lat: 48.342,
    lng: -4.723,
    category: 'herbe',
  },
  {
    id: 'vin-clairet',
    name: 'Vin clairet du vignoble voisin',
    quantity: 5,
    unit: 'amphores',
    dueDate: '2026-07-15',
    whereToFind:
      'Cave du marchand de vin — il jure que le clairet n’est pas du vin romain dilué ; le village goûte quand même.',
    howToHarvest:
      'Verser sans mélange avec le garum sous peine d’excommunication culinaire.',
    lat: 48.338,
    lng: -4.72,
    category: 'boisson',
  },
  {
    id: 'liqueur-miel',
    name: 'Liqueur de miel et plantes (à consommer avec modération)',
    quantity: 2,
    unit: 'fioles',
    dueDate: '2026-12-24',
    whereToFind:
      'Armoire fermée du druide — « ce n’est pas une potion », répète-t-il à chaque visite d’Obélix.',
    howToHarvest:
      'Une goutte dans l’eau chaude ; deux gouttes si personne ne regarde.',
    lat: 48.35,
    lng: -4.718,
    category: 'boisson',
  },
  {
    id: 'eau-de-vie-pomme',
    name: 'Eau-de-vie de pomme du verger',
    quantity: 1,
    unit: 'outre',
    dueDate: '2027-01-15',
    whereToFind:
      'Alambic caché derrière les tonneaux de cidre — le meunier prétend que c’est pour désinfecter les outils.',
    howToHarvest:
      'Petit gobelet en bois ; ne pas approcher une flamme, ni un discours du chef.',
    lat: 48.343,
    lng: -4.722,
    category: 'boisson',
  },
  {
    id: 'bouillon-os',
    name: 'Os de bœuf et de mouton pour fond',
    quantity: 15,
    unit: 'os',
    dueDate: '2026-04-30',
    whereToFind:
      'Marmite du boucher — pile d’os blanchis, prête à chanter sous le feu.',
    howToHarvest:
      'Griller légèrement avant l’eau ; écumer comme on écume une cohorte en déroute.',
    lat: 48.333,
    lng: -4.728,
    category: 'autre',
  },
  {
    id: 'craquelins',
    name: 'Craquelins au sésame du four',
    quantity: 120,
    unit: 'pièces',
    dueDate: '2026-04-22',
    whereToFind:
      'Plaque chaude du boulanger — croustillants comme les arguments de Bonemine.',
    howToHarvest: 'Laisser refroidir sur grille ; ranger vite avant Obélix.',
    lat: 48.336,
    lng: -4.728,
    category: 'cereales',
  },
  {
    id: 'miel-acacia',
    name: 'Miel clair d’acacia des ruches neuves',
    quantity: 4,
    unit: 'pots',
    dueDate: '2026-08-25',
    whereToFind:
      'Ruches installées près du pommier — les abeilles préfèrent les fleurs aux disputes du village.',
    howToHarvest:
      'Extracteur lent ; filtrer à travers un linge propre, pas celui d’Ordralphabetix.',
    lat: 48.341,
    lng: -4.741,
    category: 'autre',
  },
  {
    id: 'feuilles-vigne',
    name: 'Feuilles de vigne pour farcis',
    quantity: 60,
    unit: 'feuilles',
    dueDate: '2026-04-27',
    whereToFind:
      'Tonnelle sur la hutte du viticulteur improvisé — trois pieds de vigne, beaucoup d’ambition.',
    howToHarvest:
      'Cueillir tendres ; blanchir vite pour qu’elles se laissent rouler sans râler.',
    lat: 48.346,
    lng: -4.719,
    category: 'herbe',
  },
  {
    id: 'poires',
    name: 'Poires comice du verger',
    quantity: 35,
    unit: 'fruits',
    dueDate: '2026-05-03',
    whereToFind:
      'Arbres derrière Agecanonix — il surveille aussi les poires, pour la cohérence.',
    howToHarvest:
      'Panier et échelle stable ; ne pas mordre avant lavage, sauf défi avec Astérix.',
    lat: 48.342,
    lng: -4.723,
    category: 'herbe',
  },
  {
    id: 'chataignes',
    name: 'Châtaignes grillées du sous-bois',
    quantity: 6,
    unit: 'sacs',
    dueDate: '2026-11-15',
    whereToFind:
      'Sous le chêne et le châtaignier — ramasser avant les sangliers et les gamins.',
    howToHarvest:
      'Entaille en croix ; griller sur la braise ; peler brûlant pour prouver son courage.',
    lat: 48.347,
    lng: -4.712,
    category: 'herbe',
  },
  {
    id: 'sanglier-effiloche',
    name: 'Sanglier mijoté effiloché (préparation)',
    quantity: 6,
    unit: 'marmites',
    dueDate: '2026-04-15',
    whereToFind:
      'Marmite sur le feu depuis hier — le parfum traverse le rempart jusqu’aux narines romaines.',
    howToHarvest:
      'Remuer avec une cuillère de bois ; ajouter de l’eau si Obélix a goûté trop tôt.',
    lat: 48.337,
    lng: -4.726,
    category: 'viande',
  },
  {
    id: 'fromage-chevre-frais',
    name: 'Fromage de chèvre tout frais du matin',
    quantity: 7,
    unit: 'boules',
    dueDate: '2026-04-10',
    whereToFind:
      'Égouttoir de la laiterie — encore tiède, encore fragile, comme une promesse de banquet.',
    howToHarvest:
      'Égoutter une heure ; rouler dans les herbes si on veut du « style druide ».',
    lat: 48.338,
    lng: -4.735,
    category: 'laitier',
  },
  {
    id: 'pain-au-levain',
    name: 'Pain au levain (miche du lendemain)',
    quantity: 9,
    unit: 'miches',
    dueDate: '2026-04-12',
    whereToFind:
      'Étagère haute du four — « pour ceux qui savent attendre », dit le boulanger en regardant Obélix.',
    howToHarvest:
      'Scier la croûte épaisse ; réserver la mie pour la soupe du soir.',
    lat: 48.336,
    lng: -4.728,
    category: 'cereales',
  },
  {
    id: 'bouquet-garni',
    name: 'Bouquet garni (laurier, thym, persil)',
    quantity: 10,
    unit: 'bouquets',
    dueDate: '2026-04-25',
    whereToFind:
      'Corde au-dessus de la table du potager — séchage collectif, parfum de victoire.',
    howToHarvest:
      'Lier avec du fil de lin ; retirer avant de servir, sauf si quelqu’un aime mâcher le laurier.',
    lat: 48.331,
    lng: -4.73,
    category: 'herbe',
  },
  {
    id: 'raisins-secs',
    name: 'Raisins secs de la route des marchands',
    quantity: 1,
    unit: 'sac',
    dueDate: '2026-10-20',
    whereToFind:
      'Sac poussiéreux dans la remise — chaque grain raconte une étape vers la mer.',
    howToHarvest:
      'Laver rapidement ; ajouter au porridge ou au pain pour sucrer sans miel.',
    lat: 48.333,
    lng: -4.719,
    category: 'herbe',
  },
  {
    id: 'sanglier-terrine',
    name: 'Terrine de sanglier aux noisettes',
    quantity: 4,
    unit: 'terrines',
    dueDate: '2026-05-05',
    whereToFind:
      'Cellier du charcutier — noisettes concassées visibles sur la tranche comme des menhirs miniatures.',
    howToHarvest:
      'Trancher fin ; tartiner sur craquelin pour un goûter de patrouille.',
    lat: 48.329,
    lng: -4.732,
    category: 'viande',
  },
  {
    id: 'cidre-doux',
    name: 'Cidre doux du pressoir du verger',
    quantity: 8,
    unit: 'tonneaux',
    dueDate: '2026-06-30',
    whereToFind:
      'Hangar du pressoir — tonneaux alignés comme des légionnaires ivres, mais plus sympathiques.',
    howToHarvest:
      'Cruche et bonnet de fête ; ne pas mélanger avec la potion, le druide insiste.',
    lat: 48.344,
    lng: -4.721,
    category: 'boisson',
  },
  {
    id: 'choucroute-sel',
    name: 'Choucroute en fermentation',
    quantity: 3,
    unit: 'futs',
    dueDate: '2026-05-30',
    whereToFind:
      'Barrique sous la hutte — bulles et odeur tenace ; les Romains croient à une arme chimique.',
    howToHarvest:
      'Rincer avant cuisson ; mijoter longtemps avec lard et saucisse pour la paix des narines.',
    lat: 48.327,
    lng: -4.728,
    category: 'herbe',
  },
  {
    id: 'pigeon',
    name: 'Pigeons ramiers du clocher... du poteau de garde',
    quantity: 6,
    unit: 'volailles',
    dueDate: '2026-04-20',
    whereToFind:
      'Poteau de garde et toits de chaume — les pigeons se croient à l’abri des flèches, pas des Gaulois affamés.',
    howToHarvest:
      'Filet la nuit ; plumer discrètement pour ne pas réveiller la sentinelle qui ronfle.',
    lat: 48.335,
    lng: -4.724,
    category: 'viande',
  },
  {
    id: 'babeurre',
    name: 'Babeurre pour pancakes gaulois',
    quantity: 5,
    unit: 'cruches',
    dueDate: '2026-04-11',
    whereToFind:
      'Jarre sous la table de la laiterie — « reste » du beurre, mais le goût est roi.',
    howToHarvest:
      'Secouer avant emploi ; mélanger à la farine si on veut une galette épaisse comme un bouclier.',
    lat: 48.339,
    lng: -4.734,
    category: 'laitier',
  },
  {
    id: 'datte',
    name: 'Dattes du commerce du Nil lointain',
    quantity: 1,
    unit: 'panier',
    dueDate: '2026-08-10',
    whereToFind:
      'Coffre du marchand revenu d’Égypte — il parle sphinx, le village parle sanglier ; tout le monde est content.',
    howToHarvest:
      'Dénoyauter ; farcir d’amande si on veut impressionner un convive.',
    lat: 48.331,
    lng: -4.718,
    category: 'herbe',
  },
  {
    id: 'amandes',
    name: 'Amandes grillées du soleil',
    quantity: 2,
    unit: 'sacs',
    dueDate: '2026-09-05',
    whereToFind:
      'Sac du marchand hispanique — il assure que les amandes rendent rusé comme un renard du désert.',
    howToHarvest:
      'Concasser au mortier ; saupoudrer sur miel ou fromage pour le contraste.',
    lat: 48.332,
    lng: -4.717,
    category: 'autre',
  },
  {
    id: 'seigle-moulu',
    name: 'Farine de seigle pour pain noir',
    quantity: 4,
    unit: 'sacs',
    dueDate: '2026-06-12',
    whereToFind:
      'Moulin du ruisseau, sac séparé du froment — étiquette « pour les jours de pluie et de siège ».',
    howToHarvest:
      'Tamiser ; mélanger à l’eau tiède pour une pâte sombre et rassurante.',
    lat: 48.325,
    lng: -4.748,
    category: 'cereales',
  },
  {
    id: 'sanglier-bourguignon',
    name: 'Morceaux de sanglier pour civet long',
    quantity: 10,
    unit: 'kg',
    dueDate: '2026-04-14',
    whereToFind:
      'Marmite froide du lendemain de banquet — « on recycle », dit la femme du chef avec fierté.',
    howToHarvest:
      'Dégraisser ; repartir équitablement avant qu’Obélix ne vote à la majorité simple.',
    lat: 48.337,
    lng: -4.725,
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
    description:
      'Collation d’Obélix — version raisonnable pour le stock du village.',
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
    description:
      'Dessert simple pour calmer les esprits après une incursion romaine.',
    ingredients: [
      { ingredientId: 'baies', amount: 1 },
      { ingredientId: 'lait-chevre', amount: 1 },
      { ingredientId: 'pain', amount: 1 },
    ],
  },
  {
    id: 'civet-lievre',
    name: 'Civet de lièvre aux oignons et lard',
    description:
      'Plat de saison, quand les lièvres se croient encore plus malins que les centurions.',
    ingredients: [
      { ingredientId: 'lievre', amount: 2 },
      { ingredientId: 'oignons', amount: 8 },
      { ingredientId: 'lard', amount: 1 },
      { ingredientId: 'vin-romain', amount: 1 },
    ],
  },
  {
    id: 'ragout-babaorum',
    name: 'Ragoût « message » pour le camp de Babaorum',
    description:
      'Envoyé par catapulte morale : viande, légumes, et une pointe de moutarde pour le piquant.',
    ingredients: [
      { ingredientId: 'navets', amount: 6 },
      { ingredientId: 'carottes', amount: 4 },
      { ingredientId: 'bouillon-legumes', amount: 5 },
      { ingredientId: 'moutarde', amount: 1 },
    ],
  },
  {
    id: 'potee-forge',
    name: 'Potée de la forge (saucisses & chou)',
    description:
      'On mange près des étincelles ; Cétautomatix dit que le fer donne du courage — Obélix dit que c’est la viande.',
    ingredients: [
      { ingredientId: 'saucisse-sanglier', amount: 6 },
      { ingredientId: 'chou', amount: 3 },
      { ingredientId: 'pommes', amount: 4 },
      { ingredientId: 'cervoise', amount: 1 },
    ],
  },
  {
    id: 'bouillabaisse-gauloise',
    name: 'Bouillabaisse gauloise (deux poissonniers, zéro querelle)',
    description:
      'Mélange du ruisseau et du marché : la paix culinaire tient une marmite.',
    ingredients: [
      { ingredientId: 'poisson', amount: 2 },
      { ingredientId: 'poisson-ordral', amount: 2 },
      { ingredientId: 'ail', amount: 4 },
      { ingredientId: 'romarin', amount: 1 },
      { ingredientId: 'sel-marin', amount: 1 },
    ],
  },
  {
    id: 'tripes-place',
    name: 'Tripes mijotées de la place du village',
    description:
      'Spécialité d’Unhygienix — à consommer avant le passage du poissonnier pour garder l’appétit.',
    ingredients: [
      { ingredientId: 'boudin-unhygienix', amount: 4 },
      { ingredientId: 'oignons', amount: 6 },
      { ingredientId: 'vin-romain', amount: 1 },
    ],
  },
  {
    id: 'canard-miel',
    name: 'Canard sauvage laqué au miel',
    description:
      'Banquet de Bonemine : sucré-salé, sans discours sur les tonneaux de cervoise.',
    ingredients: [
      { ingredientId: 'canard-sauvage', amount: 2 },
      { ingredientId: 'miel', amount: 1 },
      { ingredientId: 'romarin', amount: 1 },
    ],
  },
  {
    id: 'omelette-obelix',
    name: 'Omelette des douze œufs (portion Obélix)',
    description:
      'Non, ce n’est pas une coquille : il en faut vraiment autant. Ajouter du jambon si le menhir est en vue.',
    ingredients: [
      { ingredientId: 'oeufs', amount: 12 },
      { ingredientId: 'jambon-fume', amount: 1 },
      { ingredientId: 'beurre', amount: 1 },
    ],
  },
  {
    id: 'tarte-pommes-miel',
    name: 'Tarte aux pommes et miel du verger',
    description:
      'Agecanonix approuve les pommes ; il préfère ne pas savoir combien de miel a disparu avant la cuisson.',
    ingredients: [
      { ingredientId: 'pommes', amount: 12 },
      { ingredientId: 'miel', amount: 1 },
      { ingredientId: 'farine', amount: 1 },
      { ingredientId: 'beurre', amount: 1 },
    ],
  },
  {
    id: 'fromage-pain-hydromel',
    name: 'Assiette gauloise (fromage, pain, hydromel)',
    description:
      'Le trio classique quand on n’a pas le temps de chasser un sanglier entre deux patrouilles.',
    ingredients: [
      { ingredientId: 'fromage-chevre', amount: 2 },
      { ingredientId: 'pain', amount: 2 },
      { ingredientId: 'hydromel', amount: 1 },
    ],
  },
  {
    id: 'escargots-beurre',
    name: 'Escargots au beurre et à l’ail',
    description:
      'Les Romains prétendent les avoir inventés — le village répond par la quantité de beurre.',
    ingredients: [
      { ingredientId: 'escargots', amount: 40 },
      { ingredientId: 'beurre', amount: 2 },
      { ingredientId: 'ail', amount: 6 },
    ],
  },
  {
    id: 'sanglier-champignons',
    name: 'Sanglier aux champignons et crème',
    description:
      'Plat de forêt : Panoramix valide les champignons, le reste c’est pour les estomacs ordinaires.',
    ingredients: [
      { ingredientId: 'sanglier', amount: 5 },
      { ingredientId: 'champignons', amount: 1 },
      { ingredientId: 'creme', amount: 1 },
      { ingredientId: 'sel-marin', amount: 1 },
    ],
  },
  {
    id: 'porridge-gland',
    name: 'Bouillie de glands d’urgence',
    description:
      'Quand le siège dure et que même les Romains ont faim — survivance avec honneur.',
    ingredients: [
      { ingredientId: 'gland', amount: 2 },
      { ingredientId: 'eau-source', amount: 2 },
      { ingredientId: 'miel', amount: 1 },
    ],
  },
  {
    id: 'potion-calin',
    name: 'Grog à la potion (interdit aux mineurs et aux légionnaires)',
    description:
      'Une goutte de potion dans l’hydromel pour la légende — le druide surveille la mesure au cordeau.',
    ingredients: [
      { ingredientId: 'potion', amount: 1 },
      { ingredientId: 'hydromel', amount: 1 },
      { ingredientId: 'eau-source', amount: 1 },
    ],
  },
  {
    id: 'banquet-liberation',
    name: 'Grand banquet de libération (toutes huttes confondues)',
    description:
      'Après la chute d’un camp retranché : sanglier, oie, cervoise, et couronne de laurier pour le chef.',
    ingredients: [
      { ingredientId: 'sanglier', amount: 10 },
      { ingredientId: 'oie', amount: 2 },
      { ingredientId: 'cervoise', amount: 3 },
      { ingredientId: 'pain', amount: 8 },
      { ingredientId: 'laurier-chef', amount: 1 },
    ],
  },
  {
    id: 'garum-piege',
    name: 'Appât à rats du camp romain (garum pur)',
    description:
      'Recette « technique » : ne pas servir aux Gaulois — réservée aux baraquements ennemis.',
    ingredients: [{ ingredientId: 'garum', amount: 1 }],
  },
  {
    id: 'sanglier-marine-roti',
    name: 'Sanglier mariné rôti aux herbes',
    description:
      'Le chef prétend que c’est lui qui a inventé la marinade ; le vin romain se tait.',
    ingredients: [
      { ingredientId: 'sanglier-marine', amount: 4 },
      { ingredientId: 'herbes', amount: 1 },
      { ingredientId: 'laurier-chef', amount: 1 },
    ],
  },
  {
    id: 'noisettes-baies',
    name: 'Poignée d’énergie (noisettes & baies)',
    description:
      'Collation des éclaireurs — Astérix en prend une avant chaque mission « discrète ».',
    ingredients: [
      { ingredientId: 'noisettes', amount: 1 },
      { ingredientId: 'baies', amount: 1 },
    ],
  },
  {
    id: 'tarte-creme-baies',
    name: 'Tarte meringuée aux baies et crème fouettée',
    description:
      'Pour étouffer le souvenir du chant du barde — sucre naturel du miel en option.',
    ingredients: [
      { ingredientId: 'baies', amount: 1 },
      { ingredientId: 'creme', amount: 2 },
      { ingredientId: 'miel', amount: 1 },
      { ingredientId: 'farine', amount: 1 },
    ],
  },
  {
    id: 'orge-soupe',
    name: 'Soupe d’orge au bouillon de légumes',
    description:
      'Remplit les ventres avant la bataille ; les légionnaires disent que ça sent le courage — c’est l’ail.',
    ingredients: [
      { ingredientId: 'orge', amount: 1 },
      { ingredientId: 'bouillon-legumes', amount: 8 },
      { ingredientId: 'ail', amount: 3 },
      { ingredientId: 'sel-marin', amount: 1 },
    ],
  },
  {
    id: 'lapin-moutarde',
    name: 'Lapin à la moutarde et au cidre doux',
    description:
      'Le lapin n’a rien vu venir ; le cidre non plus. Astérix approuve la discrétion du plat.',
    ingredients: [
      { ingredientId: 'lapin', amount: 2 },
      { ingredientId: 'moutarde', amount: 1 },
      { ingredientId: 'cidre-doux', amount: 1 },
      { ingredientId: 'lard', amount: 1 },
    ],
  },
  {
    id: 'perdrix-lard',
    name: 'Perdrix bardées de lard et romarin',
    description:
      'Petit gibier pour les jours où le sanglier est en grève — rare, mais délicieux.',
    ingredients: [
      { ingredientId: 'perdrix', amount: 3 },
      { ingredientId: 'lard', amount: 1 },
      { ingredientId: 'romarin', amount: 1 },
    ],
  },
  {
    id: 'navarin-veau',
    name: 'Navarin de veau aux navets (jeu de mots assumé)',
    description:
      'Le cuisinier insiste sur le calembour ; le village insiste sur le second service.',
    ingredients: [
      { ingredientId: 'veau', amount: 1 },
      { ingredientId: 'navets', amount: 8 },
      { ingredientId: 'oignons', amount: 6 },
      { ingredientId: 'bouillon-os', amount: 4 },
    ],
  },
  {
    id: 'mouton-lentilles',
    name: 'Mouton aux lentilles et bouquet garni',
    description:
      'Plat de terroir : lentilles tenaces comme des Gaulois, mouton tendre comme une promesse de trêve.',
    ingredients: [
      { ingredientId: 'mouton', amount: 2 },
      { ingredientId: 'lentilles', amount: 1 },
      { ingredientId: 'bouquet-garni', amount: 1 },
      { ingredientId: 'vin-clairet', amount: 1 },
    ],
  },
  {
    id: 'chevreau-herbes',
    name: 'Chevreau rôti aux herbes druidiques',
    description:
      'Réservé aux invités de marque — ou aux jours où le chef a oublié de crier sur quelqu’un.',
    ingredients: [
      { ingredientId: 'chevreau', amount: 1 },
      { ingredientId: 'herbes', amount: 1 },
      { ingredientId: 'huile-olive', amount: 1 },
      { ingredientId: 'laurier-chef', amount: 1 },
    ],
  },
  {
    id: 'matelote-riviere',
    name: 'Matelote d’anguilles, truites et poisson du marché',
    description:
      'Tout ce qui nage localement finit dans la même marmite — sauf Idéfix, qui surveille.',
    ingredients: [
      { ingredientId: 'anguille', amount: 6 },
      { ingredientId: 'truite', amount: 4 },
      { ingredientId: 'poisson', amount: 1 },
      { ingredientId: 'vin-clairet', amount: 1 },
    ],
  },
  {
    id: 'brandade-morue',
    name: 'Brandade de morue à l’ail et huile d’olive',
    description:
      'Le marchand du Nord est fier ; Unhygienix trouve que ça sent encore meilleur que ses tripes.',
    ingredients: [
      { ingredientId: 'morue-salee', amount: 2 },
      { ingredientId: 'ail', amount: 5 },
      { ingredientId: 'huile-olive', amount: 1 },
      { ingredientId: 'pommes-terre', amount: 6 },
    ],
  },
  {
    id: 'grenouilles-ail',
    name: 'Cuisses de grenouilles à l’ail et au persil',
    description:
      'On sert avec humour — et avec assiettes lourdes pour éviter les quolibets romains.',
    ingredients: [
      { ingredientId: 'cuisses-grenouille', amount: 10 },
      { ingredientId: 'ail', amount: 4 },
      { ingredientId: 'persil', amount: 2 },
      { ingredientId: 'beurre', amount: 1 },
    ],
  },
  {
    id: 'pain-seigle-rillettes',
    name: 'Tartines de pain noir aux rillettes',
    description:
      'Collation de marche forcée — tient dans le sac sans écraser la potion.',
    ingredients: [
      { ingredientId: 'pain-seigle', amount: 2 },
      { ingredientId: 'rillettes-sanglier', amount: 1 },
      { ingredientId: 'cornichons', amount: 1 },
    ],
  },
  {
    id: 'fondue-helvete',
    name: 'Fondue à la meule helvète',
    description:
      'Récit du voyageur obligatoire ; pain au levain non négociable pour la tartine.',
    ingredients: [
      { ingredientId: 'fromage-helvete', amount: 1 },
      { ingredientId: 'pain-au-levain', amount: 2 },
      { ingredientId: 'vin-clairet', amount: 1 },
    ],
  },
  {
    id: 'puree-menhir',
    name: 'Purée de pommes de terre « presque menhir »',
    description:
      'Crèmeuse comme une promesse d’Obélix — sans morceaux de pierre, cette fois.',
    ingredients: [
      { ingredientId: 'pommes-terre', amount: 12 },
      { ingredientId: 'beurre', amount: 1 },
      { ingredientId: 'lait-vache', amount: 1 },
      { ingredientId: 'sel-marin', amount: 1 },
    ],
  },
  {
    id: 'ratatouille-druide',
    name: 'Mijoté de tomates, poivrons et courgettes imaginaires',
    description:
      'Tomates et poivrons du druide ; la courgette est dans la tête du légionnaire qui espionne.',
    ingredients: [
      { ingredientId: 'tomates-druide', amount: 6 },
      { ingredientId: 'poivrons', amount: 4 },
      { ingredientId: 'oignons', amount: 4 },
      { ingredientId: 'huile-olive', amount: 1 },
    ],
  },
  {
    id: 'salade-cresson',
    name: 'Salade de cresson, citron et huile',
    description:
      'Fraîcheur rare après une charge — le citron du marchand fait grincer des dents et des sandales.',
    ingredients: [
      { ingredientId: 'cresson', amount: 2 },
      { ingredientId: 'citron-rare', amount: 2 },
      { ingredientId: 'huile-olive', amount: 1 },
      { ingredientId: 'vinaigre-cidre', amount: 1 },
    ],
  },
  {
    id: 'feves-lard',
    name: 'Fèves fraîches aux lardons',
    description:
      'Le lard parle aux fèves ; le village écoute en silence, bouche pleine.',
    ingredients: [
      { ingredientId: 'feves', amount: 1 },
      { ingredientId: 'lard', amount: 1 },
      { ingredientId: 'oignons', amount: 2 },
    ],
  },
  {
    id: 'epinards-lait',
    name: 'Épinards à la crème et lait de vache',
    description:
      'Pour convaincre un enfant gaulois que le vert n’est pas une punition.',
    ingredients: [
      { ingredientId: 'epinards', amount: 2 },
      { ingredientId: 'lait-vache', amount: 1 },
      { ingredientId: 'creme', amount: 1 },
    ],
  },
  {
    id: 'pigeon-figues',
    name: 'Pigeons aux figues sèches et miel',
    description:
      'Sucré-salé digne d’un banquet — les pigeons du poteau de garde ont enfin servi la patrie.',
    ingredients: [
      { ingredientId: 'pigeon', amount: 3 },
      { ingredientId: 'figues-seches', amount: 1 },
      { ingredientId: 'miel', amount: 1 },
    ],
  },
  {
    id: 'choucroute-village',
    name: 'Choucroute garnie du village',
    description:
      'Chou, saucisses, lard, moutarde : l’odeur fait lever le camp romain plus vite qu’une catapulte.',
    ingredients: [
      { ingredientId: 'choucroute-sel', amount: 1 },
      { ingredientId: 'saucisse-sanglier', amount: 4 },
      { ingredientId: 'lard', amount: 2 },
      { ingredientId: 'moutarde', amount: 1 },
    ],
  },
  {
    id: 'tisane-agecanonix',
    name: 'Tisane apaisante tilleul & sauge',
    description:
      'À servir chaud quand Agecanonix monte sur son rocher — efficacité non garantie, bonne volonté oui.',
    ingredients: [
      { ingredientId: 'tisane-tilleul', amount: 1 },
      { ingredientId: 'sauge-menthe', amount: 1 },
      { ingredientId: 'eau-source', amount: 2 },
    ],
  },
  {
    id: 'infusion-miel-lune',
    name: 'Infusion du druide au miel de lune',
    description:
      'Panoramix surveille la dosette ; les effets secondaires incluent des envies de proverbes.',
    ingredients: [
      { ingredientId: 'miel-lune', amount: 1 },
      { ingredientId: 'sauge-menthe', amount: 1 },
      { ingredientId: 'eau-source', amount: 1 },
    ],
  },
  {
    id: 'dolmas-vigne',
    name: 'Feuilles de vigne farcies au riz... enfin, au petit épeautre',
    description:
      'Version gauloise : pas de riz, mais orge concassée et herbes — les Romains lèvent les sourcils.',
    ingredients: [
      { ingredientId: 'feuilles-vigne', amount: 20 },
      { ingredientId: 'orge', amount: 1 },
      { ingredientId: 'herbes', amount: 1 },
      { ingredientId: 'huile-olive', amount: 1 },
    ],
  },
  {
    id: 'poire-miel-acacia',
    name: 'Poires pochées au miel d’acacia',
    description:
      'Dessert léger pour finir un banquet sans que le chef remarque qu’on a volé la dernière amphore.',
    ingredients: [
      { ingredientId: 'poires', amount: 6 },
      { ingredientId: 'miel-acacia', amount: 1 },
      { ingredientId: 'cidre-doux', amount: 1 },
    ],
  },
  {
    id: 'chataignes-miel',
    name: 'Châtaignes grillées au miel et thym',
    description:
      'Collation d’automne — on se réchauffe les mains comme après une bordée de pluie sur le rempart.',
    ingredients: [
      { ingredientId: 'chataignes', amount: 1 },
      { ingredientId: 'miel', amount: 1 },
      { ingredientId: 'romarin', amount: 1 },
    ],
  },
  {
    id: 'craquelins-fromage',
    name: 'Craquelins au fromage frais de chèvre',
    description:
      'Goûter silencieux — le craquelin craque, le fromage fond, le barde est ailleurs avec un peu de chance.',
    ingredients: [
      { ingredientId: 'craquelins', amount: 12 },
      { ingredientId: 'fromage-chevre-frais', amount: 2 },
    ],
  },
  {
    id: 'galette-babeurre',
    name: 'Galettes au babeurre et farine de froment',
    description:
      'Petit-déjeuner de patrouille : rapide, énergétique, et moins bruyant qu’une marmite de sanglier.',
    ingredients: [
      { ingredientId: 'babeurre', amount: 1 },
      { ingredientId: 'farine', amount: 1 },
      { ingredientId: 'oeufs', amount: 2 },
    ],
  },
  {
    id: 'datte-amande',
    name: 'Dattes farcies aux amandes grillées',
    description:
      'Le marchand égyptien sourit ; Obélix préfère quand même le sanglier, mais il goûte par politesse.',
    ingredients: [
      { ingredientId: 'datte', amount: 1 },
      { ingredientId: 'amandes', amount: 1 },
      { ingredientId: 'miel-acacia', amount: 1 },
    ],
  },
  {
    id: 'sanglier-effiloche-pain',
    name: 'Sanglier effiloché sur pain au levain',
    description:
      'Le lendemain victorieux : on recycle le banquet avec panache et moutarde.',
    ingredients: [
      { ingredientId: 'sanglier-effiloche', amount: 2 },
      { ingredientId: 'pain-au-levain', amount: 2 },
      { ingredientId: 'moutarde', amount: 1 },
    ],
  },
  {
    id: 'terrine-noisettes',
    name: 'Terrine de sanglier aux noisettes et vin clairet',
    description:
      'Tranches fines, verre de vin — le luxe à la mode du village insoumis.',
    ingredients: [
      { ingredientId: 'sanglier-terrine', amount: 1 },
      { ingredientId: 'noisettes', amount: 1 },
      { ingredientId: 'vin-clairet', amount: 1 },
    ],
  },
  {
    id: 'civet-sanglier-long',
    name: 'Civet de sanglier aux pruneaux',
    description:
      'Mijotage long pendant que les Romains creusent des tranchées — le village creuse surtout dans l’assiette.',
    ingredients: [
      { ingredientId: 'sanglier-bourguignon', amount: 3 },
      { ingredientId: 'pruneaux', amount: 1 },
      { ingredientId: 'vin-romain', amount: 1 },
      { ingredientId: 'bouquet-garni', amount: 1 },
    ],
  },
  {
    id: 'truite-aneth',
    name: 'Truites en papillote aux herbes fines',
    description:
      'Poisson délicat pour un soir sans bataille — rare, donc précieux comme une potion entamée.',
    ingredients: [
      { ingredientId: 'truite', amount: 4 },
      { ingredientId: 'aneth-cerfeuil', amount: 1 },
      { ingredientId: 'citron-rare', amount: 1 },
      { ingredientId: 'huile-olive', amount: 1 },
    ],
  },
  {
    id: 'pate-foie-craquelin',
    name: 'Pâté de foie sur craquelins au sésame',
    description:
      'Apéritif de négociation — « on signe la paix après la dernière terrine », dit Astérix en souriant.',
    ingredients: [
      { ingredientId: 'pate-foie-canard', amount: 1 },
      { ingredientId: 'craquelins', amount: 8 },
    ],
  },
  {
    id: 'porridge-orge-raisins',
    name: 'Porridge d’orge, raisins secs et miel',
    description:
      'Énergie du matin pour creuser un fossé ou creuser dans un plat — même combat.',
    ingredients: [
      { ingredientId: 'orge', amount: 1 },
      { ingredientId: 'raisins-secs', amount: 1 },
      { ingredientId: 'miel', amount: 1 },
      { ingredientId: 'eau-source', amount: 2 },
    ],
  },
  {
    id: 'liqueur-miel-tisane',
    name: 'Tisane tiède à la liqueur de miel',
    description:
      'Pour les voix enrouées après le chant — ou pour faire taire le souvenir du chant.',
    ingredients: [
      { ingredientId: 'liqueur-miel', amount: 1 },
      { ingredientId: 'tisane-tilleul', amount: 1 },
      { ingredientId: 'eau-source', amount: 2 },
    ],
  },
  {
    id: 'caille-pain-seigle',
    name: 'Caillé de brebis sur pain noir',
    description:
      'Collation laitière pour les bergers et les porteurs de menhir en récupération.',
    ingredients: [
      { ingredientId: 'caille-brebis', amount: 2 },
      { ingredientId: 'pain-seigle', amount: 1 },
      { ingredientId: 'miel-acacia', amount: 1 },
    ],
  },
  {
    id: 'seigle-soupe',
    name: 'Soupe de farine de seigle et bouillon d’os',
    description:
      'Jour de tempête : la soupe est sombre, le moral est clair, les Romains sont perdus dehors.',
    ingredients: [
      { ingredientId: 'seigle-moulu', amount: 1 },
      { ingredientId: 'bouillon-os', amount: 6 },
      { ingredientId: 'oignons', amount: 3 },
    ],
  },
  {
    id: 'eau-de-vie-pomme-tisane',
    name: 'Chauffe-cœur pomme & tilleul (pour sentinelles)',
    description:
      'Une larme d’eau-de-vie dans l’infusion — suffit à tenir une garde ; deux larmes, et on chante faux.',
    ingredients: [
      { ingredientId: 'eau-de-vie-pomme', amount: 1 },
      { ingredientId: 'tisane-tilleul', amount: 1 },
      { ingredientId: 'eau-source', amount: 1 },
    ],
  },
];
