export type IngredientContentOverlay = {
  name: string;
  whereToFind: string;
  howToHarvest: string;
  unit?: string;
};

export const ingredientContentEn: Record<string, IngredientContentOverlay> = {
  sanglier: {
    name: 'Wild Boar from the Great Forest',
    whereToFind:
      "Edge of the Armorican forest, near the stream where Obélix sometimes fishes.",
    howToHarvest:
      "Approach silently at dawn, with Idéfix scouting ahead. Do not confuse with the village chief.",
    unit: 'kg',
  },
  potion: {
    name: 'Vial of Magic Potion',
    whereToFind:
      "Druid Panoramix's cauldron, beneath the sacred oak — ask politely before serving yourself.",
    howToHarvest:
      "Let it simmer mysteriously; never taste it alone without the druid's permission.",
    unit: 'vials',
  },
  menhir: {
    name: 'Menhir Chunks (Obélix delivery)',
    whereToFind: "Village quarry, right next to Obélix's hut.",
    howToHarvest:
      'Ask Obélix to "cut" a small sample — avoid bringing up the subject of fish.',
    unit: 'chunks',
  },
  poisson: {
    name: 'River Fish',
    whereToFind:
      'The river running alongside the village, at the foot of the menhir.',
    howToHarvest:
      'Simple line or net; watch out for sea urchins if Assurancetourix is singing nearby.',
    unit: 'kg',
  },
  herbes: {
    name: 'Dried Druidic Herbs',
    whereToFind: "Shaded greenhouse behind Panoramix's hut.",
    howToHarvest:
      'Pick during the waning moon; thank the tree in a low voice so as not to offend the druid.',
    unit: 'handfuls',
  },
  'lait-chevre': {
    name: "Fresh Goat's Milk",
    whereToFind: 'Village sheepfold, east side, near the ditch.',
    howToHarvest:
      'Milk gently in the morning; flatter the goat to avoid a headbutt.',
    unit: 'jars',
  },
  pain: {
    name: 'Gaulish Wood-Fired Bread',
    whereToFind: 'Communal oven, behind the village square.',
    howToHarvest:
      "Take out with the long paddle; don't singe the baker's moustache.",
    unit: 'loaves',
  },
  hydromel: {
    name: 'Banquet Mead',
    whereToFind:
      "Chief Abraracourcix's cellar, under the banquet table.",
    howToHarvest:
      'Ask the chief — and hold your shield ready in case tempers rise.',
    unit: 'amphorae',
  },
  baies: {
    name: 'Forest Berries',
    whereToFind: 'Northern edge, bushes behind the log palisade.',
    howToHarvest:
      'Hand-picked; watch out for nearby wild boars and lost legionaries.',
    unit: 'baskets',
  },
  oie: {
    name: 'Kitchen-Garden Goose',
    whereToFind:
      "Assurancetourix's vegetable patch — avoid rehearsal time.",
    howToHarvest:
      'Grab firmly without jostling the musician; pluck out of vocal range.',
    unit: 'birds',
  },
  lievre: {
    name: 'Armorican Moorland Hare',
    whereToFind:
      'Moorland between the village and the camp of Babaorum — Astérix claims to know every burrow.',
    howToHarvest:
      "Gentle snare or slingshot; don't let the hare escape toward a Roman patrol.",
    unit: 'pieces',
  },
  'canard-sauvage': {
    name: 'Wild Marsh Duck',
    whereToFind:
      'Marshes to the west, where Idéfix barks before you even spot the feathers.',
    howToHarvest:
      "Decoy and net; if the bard is nearby, aim for the plugged ear.",
    unit: 'birds',
  },
  'poisson-ordral': {
    name: '"Fresh" Fish from Ordralphabetix',
    whereToFind:
      'The fishmonger\'s stall on the square — haggle over the price before the sun does its work.',
    howToHarvest:
      "Choose quickly, pay cash, and ignore the neighbors' comments about the smell.",
    unit: 'kg',
  },
  'boudin-unhygienix': {
    name: "Blood Sausage and Tripe from Unhygienix's Stall",
    whereToFind:
      'Open-air butcher shop; frequent argument with the fishmonger over who smells worse.',
    howToHarvest:
      "Take whatever's hanging on the hook; dodge any rotten fish thrown in retaliation.",
    unit: 'chunks',
  },
  'jambon-fume': {
    name: 'Ham Smoked over the Forge Fire',
    whereToFind:
      "Near Cétautomatix's forge — the smoke sometimes masks the village's arguments.",
    howToHarvest:
      "Ask the blacksmith to take the piece down; don't walk barefoot over the sparks.",
    unit: 'half-hams',
  },
  'saucisse-sanglier': {
    name: 'Homemade Wild Boar Sausages',
    whereToFind:
      "Drying rack behind the pork butcher's hut, safe from Roman crows.",
    howToHarvest:
      'Cut with a well-sharpened knife; set aside a portion to calm Obélix.',
    unit: 'sausages',
  },
  escargots: {
    name: 'Ditch Snails (legionary-style, but better)',
    whereToFind:
      "South-side rampart ditch — the Romans collect them too, but without the village's butter.",
    howToHarvest:
      'Gather after the dew; let them fast in a basket before cooking.',
    unit: 'pieces',
  },
  miel: {
    name: 'Honey from the Great Forest Hives',
    whereToFind:
      "Hives between two oaks, far from Assurancetourix's singing, for the bees' morale.",
    howToHarvest:
      'Smoker and veil; share a ladleful with the druid if he happens to pass by.',
    unit: 'jars',
  },
  champignons: {
    name: 'Armorican Porcini and Chanterelles',
    whereToFind:
      'Damp undergrowth to the northeast; Panoramix knows the best spots and which mushrooms to avoid.',
    howToHarvest:
      'Cut at the root with a knife; never mix them with the ones from the Babaorum field.',
    unit: 'baskets',
  },
  oignons: {
    name: 'Kitchen-Garden Onions',
    whereToFind:
      'Vegetable patch watched over by Agecanonix — walk straight so as not to invite a lecture.',
    howToHarvest:
      'Pull by hand; replant a few bulbs for the peace of future generations.',
    unit: 'heads',
  },
  ail: {
    name: 'Garlic That Repels Anything Smelling of Legionary',
    whereToFind:
      'Edge of the vegetable patch, where the village cat takes its nap.',
    howToHarvest:
      "Dry in the sun for three days; don't confuse with the druid's bulbs.",
    unit: 'heads',
  },
  carottes: {
    name: 'Crunchy Carrots for Idéfix',
    whereToFind:
      "Plot reserved for the little dog — the Gauls swear it's for the stew.",
    howToHarvest:
      'Pull gently; if Idéfix growls, hand over one carrot and all will be well.',
    unit: 'bunches',
  },
  navets: {
    name: 'Turnips and Rutabagas from the Ditch',
    whereToFind:
      'Field behind the rampart, where legionaries never think to search.',
    howToHarvest:
      'Digging fork; brush off the dirt before bringing them to the pot.',
    unit: 'pieces',
  },
  farine: {
    name: 'Wheat Flour from the Stream Mill',
    whereToFind:
      'Water mill downstream of the village — check that no menhir is blocking the flow.',
    howToHarvest:
      "Linen sack provided by the miller's wife; carry it on your back like Obélix.",
    unit: 'sacks',
  },
  orge: {
    name: 'Barley for Porridge and Table Beer',
    whereToFind:
      'Communal granary, swept clean after every harvest triumph over the Romans.',
    howToHarvest:
      "Shovel and scale; set aside the chief's share before counting the rest out loud.",
    unit: 'sacks',
  },
  beurre: {
    name: 'Morning Churned Butter',
    whereToFind:
      "Dairy adjoining the sheepfold — same milking as the goat's milk.",
    howToHarvest:
      'Churn until curdled; salt lightly so it keeps until the banquet.',
    unit: 'pats',
  },
  'fromage-chevre': {
    name: 'Goat Cheese Aged on Straw',
    whereToFind:
      "Cool cellar beneath the shepherd's hut — Gaulish spiders included at no extra charge.",
    howToHarvest:
      "Turn one wheel per week; mark the chief's batches with an oak leaf.",
    unit: 'wheels',
  },
  oeufs: {
    name: "Ditch Hens' Eggs",
    whereToFind:
      'Slatted henhouse; the rooster fancies himself a Roman eagle but folds for a handful of barley.',
    howToHarvest: 'Collect before noon; leave an empty shell to fool the crows.',
    unit: 'eggs',
  },
  'sel-marin': {
    name: 'Sea Salt from the Feud with Unhygienix',
    whereToFind:
      'Sealed reserve — every pinch of salt reignites the quarrel with the fishmonger over water quality.',
    howToHarvest:
      "Measure by its weight in gold; don't spill any on the chief's sandals.",
    unit: 'sacks',
  },
  'vin-romain': {
    name: 'Wine "Requisitioned" from the Legionaries',
    whereToFind:
      'Secret cellar beneath Astérix\'s hut — its origin always explained away as "a little trip."',
    howToHarvest:
      'Bung well fitted; taste in moderation, unless the banquet has already begun.',
    unit: 'amphorae',
  },
  cervoise: {
    name: 'Gaulish-Fermented Ale',
    whereToFind:
      'Village brewery, barrels lined up like legionaries — but far less disciplined.',
    howToHarvest:
      'Siphon cleanly; warn Bonemine if the barrels empty too quickly.',
    unit: 'barrels',
  },
  'eau-source': {
    name: 'Spring Water from the Sacred Stream',
    whereToFind:
      "Spring behind Panoramix's oak — the water is excellent as long as no one has dipped their feet in it.",
    howToHarvest:
      "Clean jug; don't disturb the druid if he's reciting spells over the water.",
    unit: 'jugs',
  },
  romarin: {
    name: 'Roadside Rosemary and Thyme',
    whereToFind:
      'Trodden paths between huts — the herbs grow back faster than Roman excuses.',
    howToHarvest: 'Bronze shears; tie with bramble twine for drying.',
    unit: 'bunches',
  },
  'laurier-chef': {
    name: "Bay Leaves for the Chief's Shield",
    whereToFind:
      "Bush of honor near Abraracourcix's hut — pick while the chief is inspecting the rampart.",
    howToHarvest:
      "Even-numbered sprigs only; avoid any remarks about the chief's belly while picking.",
    unit: 'wreath',
  },
  noisettes: {
    name: "Hazelnuts from the Druid's Oak",
    whereToFind:
      'Beneath the sacred oak — Gaulish squirrels tolerated, legionaries to be chased off with a club.',
    howToHarvest:
      'Gather from the ground after windy days; sort out the empty shells picked clean by birds.',
    unit: 'sacks',
  },
  gland: {
    name: 'Roasted Acorns (siege rations)',
    whereToFind:
      'The retired old druid\'s reserve — Astérix says it\'s "for the flavor," Obélix still prefers boar.',
    howToHarvest: 'Roast in a pan; grind if you want a makeshift flour.',
    unit: 'sacks',
  },
  'bouillon-legumes': {
    name: 'Broth Vegetables (leeks, leeks, leeks)',
    whereToFind:
      "Vegetable plot kept by Ordralphabetix's wife — she does not share her husband's trade.",
    howToHarvest:
      'Cut close to the base; rinse thoroughly to remove any suspicion of fishmongery.',
    unit: 'stems',
  },
  moutarde: {
    name: 'Mustard Seeds Ground in a Mortar',
    whereToFind:
      "The local grocer's — the merchant swears the Romans never laid a finger on it.",
    howToHarvest:
      "Grind with apple vinegar; don't sneeze on the chief's shield.",
    unit: 'jar',
  },
  lard: {
    name: 'Salted Bacon from the Winter Stock',
    whereToFind:
      "Smokehouse under the thatched roof — the smell attracts Obélix; bring an escort.",
    howToHarvest:
      'Slice thin for stew; slice thick to calm a hungry menhir carrier.',
    unit: 'slabs',
  },
  chou: {
    name: 'Rampart Cabbages',
    whereToFind:
      'Inner edge of the ditch — makes excellent improvised projectiles if a cohort tries to climb over.',
    howToHarvest:
      'Cut the base with a knife; remove the "neutral" slugs before the pot.',
    unit: 'pieces',
  },
  pommes: {
    name: 'Cider Apples from the Orchard',
    whereToFind:
      "Orchard behind Agecanonix's hut — he watches the ladders like a hawk.",
    howToHarvest:
      'Shake the tree in the right wind; gather before the cider ferments on its own on the ground.',
    unit: 'fruits',
  },
  'miel-lune': {
    name: "Moon Honey (reserved for Panoramix's spells)",
    whereToFind:
      "High shelf in the druid's hut — don't touch if the potion is already simmering.",
    howToHarvest:
      'Ask permission three times; otherwise risk turning into a flying fish.',
    unit: 'vial',
  },
  garum: {
    name: 'Garum Sauce "Borrowed" from the Roman Camp',
    whereToFind:
      'Loot from the latest night raid — use sparingly, except to scare off rats.',
    howToHarvest:
      'Open a window; pour drop by drop; close quickly and wash your hands in the stream.',
    unit: 'amphorae',
  },
  'sanglier-marine': {
    name: 'Wild Boar Marinated in Wine and Berries',
    whereToFind:
      "Marinade barrel in the chief's cellar — label deliberately illegible.",
    howToHarvest:
      "Drain; pat dry; don't sample the marinade if Assurancetourix is rehearsing nearby.",
    unit: 'kg',
  },
  creme: {
    name: 'Whipped Cream for Victory Desserts',
    whereToFind:
      "Same milking as the milk — whisk until your arm feels like Obélix's.",
    howToHarvest:
      'Wooden whisk; keep cool in the stream if the banquet is three hours away.',
    unit: 'jars',
  },
  perdrix: {
    name: 'Partridge from the Windy Moors',
    whereToFind:
      "Moorland between two low bushes — the partridges couldn't care less about patrols creaking in Latin.",
    howToHarvest:
      "Net or a discreet slingshot; don't accidentally aim for a legionary's helmet (it's happened before).",
    unit: 'birds',
  },
  lapin: {
    name: 'Wild Rabbit from the Ditch',
    whereToFind:
      'Burrows along the rampart — Idéfix sometimes has strong opinions about who caught it first.',
    howToHarvest:
      "Snares and traps; release rabbits that are too thin so as not to upset Obélix.",
    unit: 'pieces',
  },
  veau: {
    name: 'Pasture-Raised Veal (never seen by the Romans)',
    whereToFind:
      'Meadow behind the sheepfold — the herd blends in nicely with clouds of charging dust.',
    howToHarvest:
      'Slaughtered in the village only after a victory; otherwise, we wait and eat boar instead.',
    unit: 'half-carcasses',
  },
  mouton: {
    name: 'Leg of Mutton from the Flock',
    whereToFind:
      'Communal sheepfold — the shepherd claims to know every animal by its ridiculous legionary name.',
    howToHarvest:
      'Cut off with a knife; save the bone for broth and the village dogs.',
    unit: 'legs',
  },
  chevreau: {
    name: 'Roast Kid Goat for Grand Feasts',
    whereToFind:
      'The chief\'s reserve — labeled "do not confuse with the chief\'s shield" after a memorable mix-up.',
    howToHarvest:
      'Ask Abraracourcix; if tempers rise, let Bonemine do the talking.',
    unit: 'carcass',
  },
  anguille: {
    name: 'Eels from the Muddy Stream',
    whereToFind:
      "Muddy bend downstream — Astérix says it's like catching a centurion, only slipperier.",
    howToHarvest:
      'Eel spear and patience; tall boots for the bottom-dwelling flatterers.',
    unit: 'pieces',
  },
  truite: {
    name: 'Brown Trout from the Rapids',
    whereToFind:
      "Hidden waterfall behind the rocks — the water is so clear you can see onlookers' sandals.",
    howToHarvest: "Dry fly at dusk; don't sing off-key near the water.",
    unit: 'pieces',
  },
  'morue-salee': {
    name: 'Salted Cod from the Great Northern Trade',
    whereToFind:
      "Traveling merchant's shed — he swears the pirates had nothing to do with it, which is suspicious.",
    howToHarvest:
      'Desalt for three days, changing the water; otherwise, drink even more ale.',
    unit: 'chunks',
  },
  'cuisses-grenouille': {
    name: 'Frog Legs ("legionary specialty")',
    whereToFind:
      'Marsh where legionaries drill their marching — the frogs take the opportunity to mock them.',
    howToHarvest:
      'Net by moonlight; rinse thoroughly before denying any connection to Rome.',
    unit: 'pairs',
  },
  'pain-seigle': {
    name: 'Dark Rye Bread',
    whereToFind:
      "The baker's oven, morning batch — withstands the weather better than a Roman shield.",
    howToHarvest:
      "Tap the crust; if it sounds hollow, it's ready; if it sounds Roman, run.",
    unit: 'loaves',
  },
  'figues-seches': {
    name: 'Dried Figs from the Southern Sun',
    whereToFind:
      'Chest of the merchant back from Hispania — he tells stories about bulls, the village tells stories about boars.',
    howToHarvest: "Sort out the stems; soak in mead if they're too tough.",
    unit: 'sacks',
  },
  pruneaux: {
    name: 'Prunes for Banquet Digestion',
    whereToFind:
      'The chief\'s wife\'s cupboard — "just in case," she says, eyeing the village\'s collective belly.',
    howToHarvest:
      'Count them out; hide a few from Agecanonix, who preaches moderation between two prunes.',
    unit: 'jars',
  },
  lentilles: {
    name: 'Green Lentils from the Shooting Range',
    whereToFind:
      "Field behind the menhir-throwing range — the lentils grow back faster than the referees' excuses.",
    howToHarvest:
      "Low sickle; sort out the pebbles that think they're projectiles.",
    unit: 'sacks',
  },
  feves: {
    name: 'Shelling Broad Beans from the Roadside',
    whereToFind:
      "Hedge along the druids' path — pick while humming, so as not to startle the beans.",
    howToHarvest:
      "Shell in the sun; toss the pods on the compost, not on a legionary's head.",
    unit: 'baskets',
  },
  cresson: {
    name: 'Watercress from the Crystal Spring',
    whereToFind:
      "Spring behind the oak — crisp and sharp like one of Astérix's retorts.",
    howToHarvest:
      "Clean scissors; wash in running water to remove mud from visitors' sandals.",
    unit: 'bunches',
  },
  epinards: {
    name: 'Pan-Fried Spinach from the Garden',
    whereToFind:
      'Shaded plot — the grower claims it makes you as strong as a menhir; Obélix approves on principle.',
    howToHarvest: 'Cut the stems; discard leaves nibbled by diplomatic slugs.',
    unit: 'bunches',
  },
  persil: {
    name: 'Flat and Curly Parsley from the Market',
    whereToFind:
      "Vegetable stall on the square — fresh as long as Ordralphabetix doesn't pass too close.",
    howToHarvest:
      'Cut close to the base; tie with a bramble twig for drying.',
    unit: 'bunches',
  },
  'aneth-cerfeuil': {
    name: 'Dill and Chervil for Fish',
    whereToFind:
      'Herb boxes near the stream — the smell attracts fish and sometimes repels barbarians.',
    howToHarvest:
      "Shears; don't confuse with the druid's herbs, on pain of a stern frown.",
    unit: 'bunches',
  },
  'huile-olive': {
    name: 'Olive Oil from Mediterranean Trade',
    whereToFind:
      "The merchant's stock — every amphora tells of a storm, a pirate, or an elegant lie.",
    howToHarvest:
      'Clean funnel; drizzle drop by drop over the watercress salad.',
    unit: 'amphorae',
  },
  'vinaigre-cidre': {
    name: 'Cider Vinegar from the Orchard',
    whereToFind:
      'Arbor behind the apple trees — the cider went up in smoke, the vinegar stayed, proudly.',
    howToHarvest:
      "Strain through a cloth; don't spill any on Bonemine's sandals.",
    unit: 'jugs',
  },
  cornichons: {
    name: 'Pickles in Vinegar and Herbs',
    whereToFind:
      "Unhygienix's wife's cellar — she insists it's not the same vat as the tripe.",
    howToHarvest: "Wooden fork; crunch one to test the guests' courage.",
    unit: 'jars',
  },
  'rillettes-sanglier': {
    name: 'Wild Boar Rillettes in a Sealed Jar',
    whereToFind:
      "The pork butcher's reserve — every jar bears a little boar drawn in charcoal (naive style).",
    howToHarvest:
      'Horn spoon; spread on dark bread for the journey to Lutetia.',
    unit: 'jars',
  },
  'pate-foie-canard': {
    name: 'Wild Duck Liver Pâté',
    whereToFind:
      "Bin cooled in the stream — Obélix has already tried to pry open a terrine with his bare hands.",
    howToHarvest:
      "Slice with a wire; serve with dried figs if you want to put on airs like an Egyptian queen.",
    unit: 'terrines',
  },
  'fromage-helvete': {
    name: 'Wheel of Cheese "Brought Back from Helvetia"',
    whereToFind:
      'Under the traveler\'s hut — he tells tales of holes in the cheese and holes in the legions.',
    howToHarvest:
      "Wooden grater; melt by the fire while scraping the bottom of the traveler's story.",
    unit: 'wheels',
  },
  'lait-vache': {
    name: "Morning Whole Cow's Milk",
    whereToFind:
      'Barn next to the sheepfold — Gaulish cows, mood varies with the north wind.',
    howToHarvest:
      "Milk after greeting the animal; don't make waves in front of the bull.",
    unit: 'jugs',
  },
  'caille-brebis': {
    name: "Ewe's Milk Curd for Fresh Cheese",
    whereToFind:
      "The dairy — same milking as the ewe's milk, but the curd has decided to stand up straight.",
    howToHarvest:
      "Drain in cheesecloth; add a pinch of salt for the shepherd's taste.",
    unit: 'pats',
  },
  'citron-rare': {
    name: 'Rare Lemons from the Eastern Merchant',
    whereToFind:
      'Crate under a tarp — Panoramix requests a slice for certain mixtures; the chief for his fish.',
    howToHarvest:
      'Zest before squeezing; keep the seeds for a prank on a curious legionary.',
    unit: 'fruits',
  },
  'pommes-terre': {
    name: 'Potatoes "Brought Back from Hispania"',
    whereToFind:
      'Sack near the merchant\'s hut — he explains it\'s "apple-earth," the village just shrugs.',
    howToHarvest:
      "Brush off the dirt; cook in their skins or mash, depending on Obélix's mood.",
    unit: 'kg',
  },
  poivrons: {
    name: 'Sweet Peppers from the Sunny Garden',
    whereToFind:
      "The plot most exposed to the south — the peppers redden faster than a teased legionary's ears.",
    howToHarvest:
      'Cut the stem; remove the seeds if you want to avoid a chain of sneezes.',
    unit: 'pieces',
  },
  'tomates-druide': {
    name: '"Experimental" Tomatoes from the Druid\'s Garden',
    whereToFind:
      "Plot surrounded by carved rods — Panoramix insists it's botany, not magic.",
    howToHarvest:
      "Pick when ripe; don't eat the ones that whisper — those are for tomorrow.",
    unit: 'pieces',
  },
  'sauge-menthe': {
    name: 'Sage and Mint for Herbal Teas',
    whereToFind:
      'Damp edge of the stream — the scent wakes you up faster than a Gaulish war horn.',
    howToHarvest:
      'Dry in the shade; store in a leather bag, away from rats and prying eyes.',
    unit: 'bunches',
  },
  'tisane-tilleul': {
    name: 'Dried Linden Flowers',
    whereToFind:
      'Attic under the roof — harvested while the bees sleep, otherwise they protest in a swarm.',
    howToHarvest:
      'Steep in simmering water; offer to Agecanonix to earn five minutes of silence.',
    unit: 'sacks',
  },
  'vin-clairet': {
    name: 'Light Red Wine from the Neighboring Vineyard',
    whereToFind:
      "The wine merchant's cellar — he swears it isn't watered-down Roman wine; the village tastes it anyway.",
    howToHarvest:
      'Pour without mixing with the garum, on pain of culinary excommunication.',
    unit: 'amphorae',
  },
  'liqueur-miel': {
    name: 'Honey and Herb Liqueur (to be enjoyed in moderation)',
    whereToFind:
      'The druid\'s locked cupboard — "it\'s not a potion," he repeats every time Obélix visits.',
    howToHarvest: "One drop in hot water; two drops if no one's watching.",
    unit: 'vials',
  },
  'eau-de-vie-pomme': {
    name: 'Apple Brandy from the Orchard',
    whereToFind:
      "Still hidden behind the cider barrels — the miller claims it's for disinfecting tools.",
    howToHarvest:
      "Small wooden cup; keep away from open flames and the chief's speeches.",
    unit: 'skin',
  },
  'bouillon-os': {
    name: 'Beef and Mutton Bones for Stock',
    whereToFind:
      "The butcher's pot — a pile of bleached bones, ready to sing over the fire.",
    howToHarvest:
      'Roast lightly before adding water; skim it like you\'d rout a fleeing cohort.',
    unit: 'bones',
  },
  craquelins: {
    name: 'Sesame Crackers from the Oven',
    whereToFind: "The baker's hot tray — crisp as Bonemine's arguments.",
    howToHarvest:
      "Let cool on a rack; put away quickly, before Obélix gets to them.",
    unit: 'pieces',
  },
  'miel-acacia': {
    name: 'Light Acacia Honey from the New Hives',
    whereToFind:
      "Hives set up near the apple tree — the bees prefer the flowers to the village's disputes.",
    howToHarvest:
      "Slow extractor; strain through a clean cloth, not one of Ordralphabetix's.",
    unit: 'jars',
  },
  'feuilles-vigne': {
    name: 'Vine Leaves for Stuffing',
    whereToFind:
      "Arbor on the improvised winegrower's hut — three vines, plenty of ambition.",
    howToHarvest:
      'Pick while tender; blanch quickly so they roll up without complaint.',
    unit: 'leaves',
  },
  poires: {
    name: 'Comice Pears from the Orchard',
    whereToFind:
      "Trees behind Agecanonix's place — he keeps an eye on the pears too, for consistency's sake.",
    howToHarvest:
      "Basket and steady ladder; don't bite in before washing, unless Astérix dares you to.",
    unit: 'fruits',
  },
  chataignes: {
    name: 'Roasted Chestnuts from the Woods',
    whereToFind:
      'Under the oak and the chestnut tree — gather before the boars and the kids do.',
    howToHarvest:
      'Cross-cut; roast over embers; peel while scalding hot to prove your courage.',
    unit: 'sacks',
  },
  'sanglier-effiloche': {
    name: 'Slow-Cooked Pulled Wild Boar (preparation)',
    whereToFind:
      'Pot on the fire since yesterday — the smell drifts over the rampart, all the way to Roman nostrils.',
    howToHarvest:
      "Stir with a wooden spoon; add water if Obélix tasted it too soon.",
    unit: 'pots',
  },
  'fromage-chevre-frais': {
    name: 'Fresh Morning Goat Cheese',
    whereToFind:
      'Draining rack at the dairy — still warm, still fragile, like a promised banquet.',
    howToHarvest:
      'Drain for an hour; roll in herbs for a "druid style" finish.',
    unit: 'balls',
  },
  'pain-au-levain': {
    name: 'Sourdough Bread (next-day loaf)',
    whereToFind:
      'High shelf of the oven — "for those who know how to wait," says the baker, glancing at Obélix.',
    howToHarvest:
      'Saw through the thick crust; save the crumb for the evening soup.',
    unit: 'loaves',
  },
  'bouquet-garni': {
    name: 'Bouquet Garni (bay, thyme, parsley)',
    whereToFind:
      'String above the garden table — communal drying, the scent of victory.',
    howToHarvest:
      'Tie with linen thread; remove before serving, unless someone actually enjoys chewing bay leaves.',
    unit: 'bunches',
  },
  'raisins-secs': {
    name: 'Raisins from the Merchant Road',
    whereToFind:
      'Dusty sack in the shed — every grape tells of a stop on the way to the sea.',
    howToHarvest:
      'Rinse quickly; add to porridge or bread to sweeten without honey.',
    unit: 'sack',
  },
  'sanglier-terrine': {
    name: 'Wild Boar Terrine with Hazelnuts',
    whereToFind:
      "The pork butcher's cellar — crushed hazelnuts visible in every slice, like miniature menhirs.",
    howToHarvest: 'Slice thin; spread on a cracker for a patrol snack.',
    unit: 'terrines',
  },
  'cidre-doux': {
    name: 'Sweet Cider from the Orchard Press',
    whereToFind:
      'Press shed — barrels lined up like drunk legionaries, but far friendlier.',
    howToHarvest:
      "Jug and party hat; don't mix with the potion, the druid insists.",
    unit: 'barrels',
  },
  'choucroute-sel': {
    name: 'Fermenting Sauerkraut',
    whereToFind:
      'Cask beneath the hut — bubbles and a stubborn smell; the Romans suspect a chemical weapon.',
    howToHarvest:
      "Rinse before cooking; simmer long with bacon and sausage, for the sake of everyone's nose.",
    unit: 'casks',
  },
  pigeon: {
    name: 'Wood Pigeons from the Bell Tower... er, the Watchpost',
    whereToFind:
      "Watchpost and thatched roofs — the pigeons think they're safe from arrows, but not from hungry Gauls.",
    howToHarvest:
      'Net at night; pluck quietly so as not to wake the snoring sentry.',
    unit: 'birds',
  },
  babeurre: {
    name: 'Buttermilk for Gaulish Pancakes',
    whereToFind:
      'Jar under the dairy table — a butter "leftover," but the taste reigns supreme.',
    howToHarvest:
      'Shake before use; mix with flour for a griddle cake as thick as a shield.',
    unit: 'jugs',
  },
  datte: {
    name: 'Dates from the Distant Nile Trade',
    whereToFind:
      'Chest of the merchant back from Egypt — he talks sphinxes, the village talks boars; everyone\'s happy.',
    howToHarvest: 'Pit them; stuff with almond to impress a guest.',
    unit: 'basket',
  },
  amandes: {
    name: 'Sun-Roasted Almonds',
    whereToFind:
      "The Hispanic merchant's sack — he swears almonds make you as cunning as a desert fox.",
    howToHarvest:
      'Crush in a mortar; sprinkle over honey or cheese for contrast.',
    unit: 'sacks',
  },
  'seigle-moulu': {
    name: 'Rye Flour for Dark Bread',
    whereToFind:
      'Stream mill, kept in a sack separate from the wheat — labeled "for rainy days and sieges."',
    howToHarvest:
      'Sift; mix with lukewarm water for a dark, comforting dough.',
    unit: 'sacks',
  },
  'sanglier-bourguignon': {
    name: 'Wild Boar Chunks for Long-Simmered Stew',
    whereToFind:
      'The cold pot from the morning after a banquet — "we recycle," says the chief\'s wife proudly.',
    howToHarvest:
      "Trim the fat; divide fairly before Obélix settles it by simple majority vote.",
    unit: 'kg',
  },
};
