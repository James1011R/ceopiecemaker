/** COMPREHENSIVE GUIDE OF PRETEND CATEGORIZER NOTATION (longname)
 *** THIS PART IS WRITTEN IN CASE I AM STUPID ENOUGH TO
 *** FORGET WHAT I HAVE DONE PREVIOUSLY, THIS OBVIOUSLY
 *** HAPPENED WHEN I TOOK A BREAK FROM UPDATING TOO LONG
 *** SO JUST IN CASE.
 ***
 *** ALSO FOR THOSE WHO PLAN TO STEAL MY CODE, HERE YOU
 *** GO ;)
 **
 ** Longname structure explanation:
 * #   C  ]BN     :description;
 * Pay Cat Bracket Description 
 **
 ** Category Explanation:
 * a: Ability Target. Used for explanation of other abilities.
 * b: Basic. Involves one turn, one/two target life/death, or caster moving.
 * c: Complex. Involves one turn, one/two target attribute change.
 *
 * m: Map. Involves marking of locations.
 *
 * p: Piece. Involves creation of another piece.
 *
 * s: Status. Involves cross-turn, one/two target status effect change.
 * t: Trigger. Involves trigger actions.
 * u: Indirect. Involves an indirect target.
 * v: Passive. Involves passive actions
 *
 * z: Customs. Should not be sorted with the abilities.
 **
 ** Bracket Notation Explanation:
 * m/r: Melee / Magic (ranged)
 * f/n/u/z: Fragile / Normal / Unblockable / Unstoppable
 */

// Description structure explanation:
/// Note: Everything assumes common sense. That is, values cannot go negative,
///       target cannot go out of bounds, one cannot attack something empty, etc.
// recognized structures:
// Descriptors (Base level)
LDE = ["move", "attack", "swap", "transform", "summon", "set", "flag", "deflag", "block"];
// These descriptors are to be used as the lowest level building blocks of descriptions.
// One can go lower, but I'll not note it here as it will make the longnames too long(?)
// move, attack, swap, transform self explanatory.
// set: Change properties
// flag: Add status for changes
//       flag@(number)(action) refers to (action) opponent for (number) turns
//       flag@(number)&(action) refers to (action) opponent after (number) turns
// Descriptors (Extra level):
LEE = ["charm", "poison", "freeze", "petrify", "push", "sorcerize"];
// These are extra ability names, but due to it being open-ended to changes (duration)
// They have to be specified every time, with the above descriptors.
// Properties:
LPE = ["minion", "type", "tier", "ally", "value", "startpos", "pos"];
// These are the "Properties" used for changing/conditioning.
// Triggers:
LTE = ["meleedeath", "death", "start", "end", "status", "targeted"];
// These are the triggers, which is guaranteed to be sent every time these events happen
// Other undescribable events will be notated in brackets.
// Especially those requiring more complex explanation.
// Current listed items:
// (RANDOM), (ENCHANT), (CAN-REVIVE), (RANGE), (AWAY), (KING), (LOSEABILITY),
// (MOVETOGETHER), (RANDOMMINION), (LOSEIMMUNE), (REFLECT), (REMOVE), (EXILE), (BONUS)
//
// #Away: # Square away from the caster, if unspecified, assume infinity.
// #Range: Squares of range #, if unspecified, assume 1.
//
// Piecenames should be capitalized.
// "this" refers to the caster. Prefix with \ or A to mean targets.
/* operators
|| /  or
|| ?  (if)
|| &  then
|| ?& (if )
|| #  defined as (For extra level descriptors)
|| @  extra argument
|| -  prevent (freeze)
|| +  allow (augment)
|| !  not
|| * regardless of
|| \  make (referring to target)
|| A  make (referring to ability target)
|| /@ for each
*/

// ORDER BY
MOVESORT = ["canonical"];

/**Structure Explanation:
 * Name: used for CSS classes, short name. Changes flexible.
 * Long: used for Categorization/Sorting/Filtering, code-like description. 
 *       Changes flexible (to reflect reality). See above for explanation.
 * id  : used for Indexing/Export code. Changes kept to minimum.
 * cat : Deprecated(never used). See Long.
 * text: In-game description.
 * Others self-explanatory.
 */
MOVES = [{
    "id": "1",
    "cat": "official",
    "name": "moveattack",
    "long": "b]mn:move/attack",
    "text": "Move or Attack.",
    "color": [0, 0, 0]
}, {
    "id": "2",
    "cat": "official",
    "name": "move",
    "long": "b]mn:move",
    "text": "Move only.",
    "color": [0, 0, 255]
}, {
    "id": "3",
    "cat": "official",
    "name": "attack",
    "long": "b]mn:attack",
    "text": "Attack only.",
    "color": [252, 13, 27]
}, {
    "id": "4",
    "cat": "official",
    "name": "jump",
    "long": "b]mu:move/attack",
    "text": "(Unblockable) Move or Attack.",
    "color": [20, 151, 24]
}, {
    "id": "5",
    "cat": "official",
    "name": "jumpswap",
    "long": "b]mu:move/attack/swap",
    "text": "(Unblockable) Move, Attack or swap places with ally.",
    "color": [255, 210, 0]
}, {
    "id": "6",
    "cat": "official",
    "name": "teleport",
    "long": "b]mu:move",
    "text": "(Unblockable) Teleport.",
    "color": [121, 19, 153]
}, {
    "id": "7",
    "cat": "official",
    "name": "magic",
    "long": "b]ru:attack",
    "text": "(Magic) Destroy target.",
    "color": [253, 117, 34]
}, {
    "id": "8",
    "cat": "official",
    "name": "plant",
    "long": "2p]ru:transform@SAPLING/summon@SAPLING",
    "text": "[Pay 2]: (Magic) Summon Sapling or transform enemy into ally Sapling.",
    "color": [0, 101, 24]
}, {
    "id": "9",
    "cat": "official",
    "name": "charm",
    "long": "c]ru:minion?charm#set@ally",
    "text": "(Magic) Charm enemy minion.",
    "color": [255, 0, 255]
}, {
    "id": "10",
    "cat": "official",
    "name": "skeleton",
    "long": "4p]ru:summon@SKELETON&set@value=0",
    "text": "[Pay 4]: (Magic) Summon Value 0 Skeleton.",
    "color": [102, 102, 102],
    "color3": [0, 0, 0],
    "content": "\u26e7"
}, {
    "id": "11",
    "cat": "official",
    "name": "movestart",
    "long": "b]mn:startpos?move",
    "text": "Move from starting position.",
    "color": [11, 36, 251],
    "content": "\u274b"
}, {
    "id": "12",
    "cat": "official",
    "name": "poison",
    "long": "s]ru:poison#flag@3&attack",
    "text": "(Magic) Poison enemy unit, destroying them in 3 turns.",
    "color": [0, 101, 24],
    "content": "\u00d7"
}, {
    "id": "13",
    "cat": "official",
    "name": "freeze",
    "long": "s]ru:freeze#flag@3-move",
    "text": "(Magic) Freeze enemy unit, making them unable to act for 3 turns.",
    "color": [107, 205, 253],
    "content": "\u00d7"
}, {
    "id": "14",
    "cat": "official",
    "name": "petrify",
    "long": "s]rn:petrify#flag@5-move",
    "text": "(Ranged) Petrify enemy unit, making them unable to act for 5 turns.",
    "color": [94, 94, 94],
    "content": "\u00d7"
}, {
    "id": "15",
    "cat": "official",
    "name": "polymorph",
    "long": "c]ru:set@type=(RANDOMMINION)",
    "text": "(Magic) Polymorph target into random minion.",
    "color": [255, 0, 255],
    "content": "\u00d7",
    "hide": true
}, {
    "id": "16",
    "cat": "official",
    "name": "haul",
    "long": "c]ru:set@pos=(RANDOM)",
    "text": "(Magic) Teleport unit to random location.",
    "color": [102, 0, 102],
    "content": "\ufe56",
    "hide": true
}, {
    "id": "17",
    "cat": "official",
    "name": "teleportmasshaul",
    "long": "bc]mu:move&1(RANGE)/@set@pos=(RANDOM)",
    "text": "(Unblockable) Teleport to empty location and Mass-Teleport all adjacent units to random locations.",
    "color": [102, 0, 102],
    "content": "\ufe56\u2747",
    "hide": true
}, {
   "id": "18",
   "cat": "official",
   "name": "sorcer",
   "long": "3]",
   "text": "[Pay 3] .",
   "color": [255,0,0],
   "color2": [127,0,0],
   "content": "\uffec",
   "hide": true
}, {
    "id": "19",
    "cat": "official",
    "name": "enchant",
    "long": "s]ru:ally?enchant#flag@2(ENCHANT)",
    "text": "(Magic) Enchant ally, making them immune to melee death for 2 turns.",
    "color": [0, 102, 255],
    "color2": [0, 0, 0],
    "color3": [0, 255, 255],
    "content": "\u25cb"
}, {
    "id": "20",
    "cat": "official",
    "name": "soulkeep",
    "long": "1cp]ru:transform@GHOST",
    "text": "[Pay 1]: (Magic) Transform enemy into ally Ghost.",
    "color": [208, 88, 161],
    "color2": [255, 255, 255],
    "color3": [0, 0, 0],
    "content": "\ue900"
}, {
    "id": "21",
    "cat": "official",
    "name": "teleportstart",
    "long": "b]mu:startpos?move",
    "text": "(Unblockable) Teleport from starting position.",
    "color": [121, 19, 153],
    "content": "\u274b"
}, {
    "id": "22",
    "cat": "official",
    "name": "slime",
    "long": "pt]:meleedeath?this+move?summon@SLIME",
    "text": "(Trigger) On Melee Death: Summon ally Slime into this empty location. If this unit is Frozen or Petrified this ability cannot activate.",
    "color": [0, 153, 0],
    "color2": [255, 255, 255],
    "color3": [0, 204, 0],
    "content": "\ue902"
}, {
    "id": "23",
    "cat": "official",
    "name": "moon",
    "long": "pt]:meleedeath?summon@this&set@value-=10",
    "text": "(Trigger) On Melee Death: Revive into this empty location with value decreased by 10. If this unit's value is less than 10 this ability cannot activate.",
    "color": [0, 0, 0],
    "color2": [255, 255, 255],
    "content": "\u263d"
}, {
    "id": "24",
    "cat": "official",
    "name": "jumpattackminion",
    "long": "b]mu:minion?attack",
    "text": "(Unblockable) Attack Minion.",
    "color": [138, 63, 63],
    "color2": [255, 255, 255],
    "color3": [195, 63, 63],
    "content": "\u239a"
}, {
    "id": "25",
    "cat": "official",
    "name": "triggerattack",
    "long": "bt]mn:start?attack",
    "text": "(Trigger) Enemy Unit: Instantly attack this target at the start of your turn.",
    "color": [0, 0, 0],
    "color2": [255, 255, 255],
    "color3": [255, 0, 0],
    "content": "\u25c7"
}, {
    "id": "26",
    "cat": "official",
    "name": "abilitytarget",
    "long": "a]",
    "text": "Ability Target.",
    "color": [0, 0, 0],
    "color2": [255, 255, 255],
    "content": "\u2609"
}, {
    "id": "27",
    "cat": "official",
    "name": "portal",
    "long": "u]:Aset@pos=\\this",
    "text": "Teleport Ability Target to this empty location.",
    "color": [0, 0, 0],
    "color2": [233, 155, 255],
    "content": "\u25e6"
}, {
    "id": "28",
    "cat": "official",
    "name": "push",
    "long": "1c]rn:push#\\(mn:move@3(AWAY))",
    "text": "[Pay 1]: (Ranged) Push unit up to 3 spaces away from caster.",
    "color": [87, 218, 40],
    "color2": [255, 255, 255],
    "content": "\u25cc"
}, {
    "id": "29",
    "cat": "official",
    "name": "gemini",
    "long": "6cp]rn:summon@GEMINITWIN&set@tier=this&thisset@type=GEMINITWIN",
    "text": "[Pay 6]: (Ranged) Summon GeminiTwin and transform into GeminiTwin, each having value equal to this unit.",
    "color": [0, 0, 0],
    "color2": [255, 255, 255],
    "content": "\u264a"
}, {
    "id": "30",
    "cat": "official",
    "name": "teleportking",
    "long": "cu]ru:(KING)set@pos=\\this",
    "text": "(Magic) Teleport ally King to this empty location.",
    "color": [0, 0, 0],
    "color2": [255, 255, 255],
    "content": "\u25c7\u25fd"
}, {
    "id": "31",
    "cat": "official",
    "name": "teleportswap",
    "long": "b]mu:move/swap",
    "text": "(Unblockable) Teleport or swap places with ally.",
    "color": [121, 19, 153],
    "color3": [0, 0, 0],
    "content": "\u{1f5d8}"
}, {
    "id": "32",
    "cat": "official",
    "name": "lifestone",
    "long": "cp]ru:summon@(CAN-REVIVE)&thisattack",
    "text": "(Magic) Revive most recently fallen ally champion of value 2x this unit's value or less, and destroy this unit.",
    "color": [0, 0, 0],
    "color2": [58, 233, 93],
    "content": "\uea42"
}, {
    "id": "33",
    "cat": "official",
    "name": "heal",
    "long": "1st]:ally?status?deflag",
    "text": "[Pay 1]: (Trigger) Ally Status Effect: Instantly cure this target at the start of your turn, removing all negative status effects.",
    "color": [0, 0, 0],
    "color2": [58, 233, 93],
    "content": "\uea43"
}, {
    "id": "34",
    "cat": "official",
    "name": "necromance",
    "long": "2cp]ru:ally?type==SKELETON?set@tier+=1/transform@BONEPILE",
    "text": "[Pay 2]: (Magic) Upgrade ally Skeleton, or transform target enemy minion into ally BonePile.",
    "color": [0, 0, 0],
    "color2": [227, 0, 0],
    "content": "\ue901"
}, {
    "id": "35",
    "cat": "official",
    "name": "moveattackblock",
    "long": "bv]:block@(mn:attack)&(LOSEABILTY)/(mn:move/attack)",
    "text": "(Passive) Block one normal attack from this location, and lose this ability. \n(Active) Move or Attack.",
    "color": [0, 0, 0],
    "color3": [255, 255, 255],
    "content": "\u2219"
}, {
    "id": "36",
    "cat": "official",
    "name": "freezeexplosion",
    "long": "st]:death?minion?freeze#flag@3-move",
    "text": "(Trigger) On Death: Freeze enemy minions in trigger area.",
    "color": [107, 205, 253],
    "content": "\u25fc"
}, {
    "id": "37",
    "cat": "official",
    "name": "freezestrike",
    "long": "bs]ru:thisattack&freeze#flag@3-move",
    "text": "(Magic) Destroy self at target location and Freeze enemy unit for 3 turns, making them unable to act.",
    "color": [107, 205, 253],
    "color3": [0, 255, 255],
    "content": "\u2738"
}, {
    "id": "38",
    "cat": "official",
    "name": "bat",
    "long": "p]mz:thisset@type=BAT&move",
    "text": "(Unstoppable) Transform into Bat and fly to this location.",
    "color": [0, 0, 0],
    "color2": [255, 255, 255],
    "content": "\ue903"
}, {
    "id": "39",
    "cat": "official",
    "name": "castle",
    "long": "c]:ally?!minion?swap&(MOVETOGETHER)&(LOSEABILITY)",
    "text": "Swap places with ally Champion, then move this unit and Champion together, and lose this ability.",
    "color": [0, 0, 0],
    "color2": [255, 255, 255],
    "content": "\u2656"
}, {
    "id": "40",
    "cat": "official",
    "name": "thunder",
    "long": "1m]ru:flag@4&(ru:attack)",
    "text": "[Pay 1]: (Magic) After 4 turns any unit in the marked location is destroyed.",
    "color": [0, 0, 0],
    "color2": [255, 255, 255],
    "content": "\u26a1"
}, {
    "id": "41",
    "cat": "official",
    "name": "attract",
    "long": "ct]ru:end?!ally?\\(mn:move@-1(AWAY))",
    "text": "(Magic, Trigger) Enemy Unit: At the end of your opponent's turn, target moves 1 space in the direction of this unit.",
    "color": [255, 63, 255],
    "color2": [255, 255, 255],
    "content": "\u25c7"
}, {
    "id": "42",
    "cat": "official",
    "name": "shoot",
    "long": "b]rn:attack",
    "text": "(Ranged) Destroy target.",
    "color": [255, 0, 0],
    "color2": [255, 255, 255],
    "content": "\u2316"
}, {
    "id": "43",
    "cat": "official",
    "name": "beacon",
    "long": "cu]ru:set@pos=Athis",
    "text": "(Magic) Teleport unit to Ability Target.",
    "color": [155, 20, 208],
    "color2": [255, 255, 255],
    "content": "\u25ef"
}, {
    "id": "44",
    "cat": "official",
    "name": "gravity",
    "long": "1cu]ru:\\(mn:move@A-(AWAY))",
    "text": "[Pay 1]: (Magic) Move target unit toward Ability Target.",
    "color": [0, 63, 255],
    "color2": [255, 255, 255],
    "content": "\u25ef"
}, {
    "id": "45",
    "cat": "official",
    "name": "omnishield",
    "long": "bt]:ally?(CHAMPION)?targeted?+move?this+move?(mu:swap)",
    "text": "(Trigger) Ally Champion targeted by enemy ability or attack: this unit instantly swaps places with targeted champion.",
    "color": [0, 0, 153],
    "color2": [153, 255, 255],
    "content": "\ue905"
}, {
    "id": "46",
    "cat": "official",
    "name": "envy",
    "long": "c]ru:thisset@type=\\this&thisset@tier=\\this",
    "text": "(Magic) Transform into target enemy unit type.",
    "color": [127, 192, 127],
    "color2": [255, 255, 255],
    "color3": [0, 0, 0],
    "content": "\u2b50"
}, {
    "id": "47",
    "cat": "official",
    "name": "splash",
    "long": "cs]ru:push#\\(mn:move@1(AWAY))?&freeze#flag@3-move",
    "text": "(Magic) Push enemy unit 1 space away from caster and freeze it for 2 turns.",
    "color": [0, 153, 255],
    "color2": [255, 255, 255],
    "content": "\ue904"
}, {
    "id": "48",
    "cat": "official",
    "name": "pike",
    "long": "bt]:targeted@(m*:attack)?attack",
    "text": "(Passive) On Melee Death from this location: Destroy the attacker.",
    "color": [0, 0, 0],
    "color2": [255, 255, 255],
    "color3": [255, 0, 0],
    "content": "\uea5e"
}, {
    "id": "49",
    "cat": "official",
    "name": "magicpush",
    "long": "1c]ru:push#\\(mn:move@3(AWAY))",
    "text": "[Pay 1]: (Magic) Push unit up to 3 spaces away from caster.",
    "color": [87, 218, 40],
    "color2": [200, 255, 200],
    "content": "\u25cb\u2742"
}, {
    "id": "50",
    "cat": "official",
    "name": "compel",
    "long": "s]rn:compel#flag&(COMPEL)",
    "text": "(Ranged) Compel enemy unit, making them move in the direction of this ability at the start of their turn, for 3 turns.",
    "color": [204, 0, 153],
    "color2": [255, 255, 255],
    "color3": [255, 51, 255],
    "content": "\u2661"
}, {
    "id": "51",
    "cat": "official",
    "name": "butterflyeffect",
    "long": "bm]ru:thisattack&flag@20&(thissummon\!ally?ru:attack\ally?enchant#flag@2(ENCHANT))",
    "text": "(Magic) Destroy self and mark location. After 20 turns destroy enemy unit in the marked location, enchant ally for 2 turns, or revive the caster into empty marked location.",
    "color": [0, 0, 0],
    "color2": [255, 255, 255],
    "content": "\ue906"
}, {
    "id": "52",
    "cat": "official",
    "name": "rush",
    "long": "c]mn:(RUSH)",
    "text": "Rush enemy, pushing it up to 3 spaces away from this unit and destroying the enemy if it collides with any unit or the field edge.",
    "color": [255, 0, 0],
    "color2": [255, 255, 255],
    "color3": [0, 0, 0],
    "content": "\u25cc"
}, {
    "id": "53",
    "cat": "official",
    "name": "jumpattack",
    "long": "b]mu:attack",
    "text": "(Unblockable) Attack only.",
    "color": [255, 0, 0],
    "color2": [127, 0, 0]
}, {
    "id": "54",
    "cat": "official",
    "name": "stone",
    "long": "ps]ru:petrify#flag@3-move/summon@STONEPILLAR",
    "text": "(Magic) Create StonePillar in this empty location, or petrify enemy for 3 turns, making them unable to act.",
    "color": [94, 94, 94],
    "color3": [59, 59, 59],
    "content": "\u25ae"
}, {
    "id": "55",
    "cat": "official",
    "name": "meteor",
    "text": "[Pay 3]: (Magic) After 6 turns any unit in the marked location is destroyed and all adjacent units are pushed away 1 space.",
    "color": [127, 0, 0],
    "color2": [248, 131, 31],
    "color3": [0, 0, 0],
    "content": "\uea24"
}, {
    "id": "0a",
    "cat": "variation",
    "name": "swap",
    "long": "b]mu:swap",
    "text": "(Unblockable) Swap places with ally.",
    "color": [127, 127, 127],
    "color2": [255, 255, 255],
    "content": "\u{1f5d8}",
    "hide": true
}, {
    "id": "0b",
    "cat": "variation",
    "name": "swapenemy",
    "long": "b]mu:!ally?swap",
    "text": "(Unblockable) Swap places with enemy.",
    "color": [127, 0, 59],
    "hide": true
}, {
    "id": "0c",
    "cat": "variation",
    "name": "swapall",
    "long": "b]mu:*ally?swap",
    "text": "(Unblockable) Swap places with unit.",
    "color": [127, 105, 0],
    "hide": true
}, {
    "id": "9a",
    "cat": "variation",
    "name": "charmall",
    "long": "c]ru:*minion?charm#set@ally",
    "text": "(Magic) Charm enemy unit.",
    "color": [255, 0, 255],
    "content": "\ufe62",
    "hide": true
}, {
    "id": "15a",
    "cat": "variation",
    "name": "polymorphall",
    "long": "c]ru:set@type=(RANDOM)",
    "text": "(Magic) Polymorph target into random unit.",
    "color": [255, 0, 255],
    "content": "\ufe62\u00d7",
    "hide": true
}, {
    "id": "18a",
    "cat": "variation",
    "name": "protosorcerattack",
    "long": "3cs]ru:sorcerize#flag@2(2(RANGE)/@+(mu:attack))",
    "text": "[Pay 3]: (Magic) Sorcerize target, making them prone to melee attack from any caster's ally piece in Range 2, for 2 turns.",
    "color": [255, 0, 0],
    "color2": [0, 0, 0],
    "content": "\uffec",
    "hide": true
}, {
    "id": "18b",
    "cat": "variation",
    "name": "protosorcerdeimmune",
    "long": "2s]:sorcerize#flag@2(LOSEIMMUNE)",
    "text": "[Pay 2]: Sorcerize target, making them lose any immunity for 2 turns.",
    "color": [0, 178, 255],
    "color2": [0, 64, 127],
    "color3": [0, 255, 255],
    "content": "\uffec",
    "hide": true
}, {
    "id": "18c",
    "cat": "variation",
    "name": "protosorcerenchant",
    "long": "2cs]ru:sorcerize#flag@2(t]:death?enchant#flag@2(ENCHANT))",
    "text": "[Pay 2]: (Magic) Sorcerize target for 2 turns, making them enchant attacker on Death for 2 turns.",
    "color": [0, 178, 255],
    "color2": [0, 0, 0],
    "color3": [0, 255, 255],
    "content": "\uffec",
    "hide": true
}, {
    "id": "18d",
    "cat": "variation",
    "name": "protosorcerdetarget",
    "long": "s]ru:sorcerize#flag@3-target",
    "text": "(Magic) Sorcerize target, making them unable to target units for 3 turns.",
    "color": [0, 178, 255],
    "color2": [0, 0, 0],
    "color3": [0, 255, 255],
    "content": "\u00d7",
    "hide": true
}, {
    "id": "19a",
    "cat": "variation",
    "name": "magicenchant",
    "long": "s]ru:ally?enchant#flag@2(ENCHANT)@(r*:attack)",
    "text": "(Magic) Enchant ally, making them immune to Magic and Ranged attacks for 2 turns.",
    "color": [255, 102, 0],
    "color2": [0, 0, 0],
    "color3": [255, 178, 0],
    "content": "\u25cb",
    "hide": true
}, {
    "id": "19b",
    "cat": "variation",
    "name": "omnienchant",
    "long": "3s]ru:ally?enchant#flag@2(ENHCANT)@(**:attack)",
    "text": "[Pay 3]: (Magic) Enchant ally, making them immune to enemy abilities or attacks for 2 turns.",
    "color": [208, 208, 127],
    "color2": [0, 0, 0],
    "color3": [255, 255, 255],
    "content": "\u25cb",
    "hide": true
}, {
    "id": "25a",
    "cat": "variation",
    "name": "burn",
    "long": "bt]ru:start?attack",
    "text": "(Magic, Trigger) Enemy Unit: Instantly destroy this target at the start of your turn.",
    "color": [253, 117, 34],
    "color3": [127, 59, 17],
    "content": "\uea15",
    "hide": true
}, {
    "id": "25b",
    "cat": "variation",
    "name": "frostburn",
    "long": "st]ru:start?attack#flag@1-move",
    "text": "(Magic, Trigger) Enemy Unit: Instantly freeze this target for 1 turn at the start of your turn.",
    "color": [107, 205, 253],
    "color3": [59, 108, 127],
    "content": "\uea21",
    "hide": true
}, {
    "id": "27a",
    "cat": "variation",
    "name": "magicportal",
    "long": "pu]ru:Aset@pos=\\this",
    "text": "(Magic) Ability Target is teleported to this empty location.",
    "color": [155, 20, 208],
    "color2": [255, 255, 255],
    "content": "\u2609",
    "hide": true
}, {
    "id": "27b",
    "cat": "variation",
    "name": "targetswap",
    "text": "(Magic) Target Unit is swapped with Ability Target.",
    "color": [155, 20, 208],
    "color2": [255, 255, 255],
    "content": "\u2609\u{1f5d8}",
    "hide": true
}, {
    "id": "49a",
    "cat": "variation",
    "name": "magicpull",
    "long": "1c]ru:pull#\\(mn:move@-3(AWAY))",
    "text": "[Pay 1]: (Magic) Pull unit up to 3 spaces towards caster.",
    "color": [155, 20, 208],
    "color2": [220, 200, 255],
    "content": "\u25cb\u2742",
    "hide": true
}, {
    "id": "31a",
    "cat": "variation",
    "name": "moveswap",
    "long": "b]mn:move/swap",
    "text": "Move or swap places with ally.",
    "color": [0, 0, 255],
    "color3": [0, 0, 0],
    "content": "\u{1f5d8}",
    "hide": true
}, {
    "id": "34a",
    "cat": "variation",
    "name": "downgradenecromance",
    "long": "1cp]ru:ally?type==SKELETON?set@tier+=1/minion?(set@tier-=1/tier==0?attack)",
    "text": "[Pay 1]: (Magic) Upgrade ally Skeleton, Downgrade enemy minion, or destroy enemy Tier-1 minion.",
    "color": [0, 0, 0],
    "color2": [227, 227, 0],
    "content": "\ue901",
    "hide": true
}, {
    "id": "34b",
    "cat": "variation",
    "name": "destroynecromance",
    "long": "2cp]ru:ally?type==SKELETON?set@tier+=1/attack",
    "text": "[Pay 2]: (Magic) Upgrade ally Skeleton, or destroy enemy minion.",
    "color": [0, 0, 0],
    "color2": [227, 113, 0],
    "content": "\ue901",
    "hide": true
}, {
    "id": "35a",
    "cat": "variation",
    "name": "moveblock",
    "long": "bv]:block@(mn:attack)&(LOSEABILTY)/(mn:move)",
    "text": "(Passive) Block one melee attack from this location, and lose this ability. \n(Active) Move only.",
    "color": [0, 0, 255],
    "color3": [255, 255, 255],
    "content": "\u2219",
    "hide": true
}, {
    "id": "35b",
    "cat": "variation",
    "name": "rangedblock",
    "long": "bv]:block@(rn:attack)&(LOSEABILTY)/(mn:move/attack)",
    "text": "(Passive) Block one ranged destroy from this location, and lose this ability. \n(Active) Move or Attack.",
    "color": [0, 0, 0],
    "color3": [127, 255, 127],
    "content": "\u2219",
    "hide": true
}, {
    "id": "37a",
    "cat": "variation",
    "name": "explosion",
    "long": "bt]:death?minion?attack",
    "text": "(Trigger) On Death: Destroy enemy minions in trigger area.",
    "color": [255, 102, 0],
    "content": "\u25fc",
    "hide": true
}, {
    "id": "41a",
    "cat": "variation",
    "name": "unattract",
    "long": "ct]ru:end?!ally?\\(mn:move@1(AWAY))",
    "text": "(Magic, Trigger) Enemy Unit: At the end of your opponent's turn, target moves 1 space away from this unit.",
    "color": [63, 127, 63],
    "color2": [255, 255, 255],
    "content": "\u25c7",
    "hide": true
}, {
    "id": "43a",
    "cat": "variation",
    "name": "beaconally",
    "long": "cu]ru:set@pos=Athis",
    "text": "(Magic) Target ally is teleported to Ability Target.",
    "color": [155, 20, 208],
    "color2": [255, 255, 255],
    "content": "\u25ef\u25e6",
    "hide": true
}, {
    "id": "43b",
    "cat": "variation",
    "name": "rangedbeacon",
    "long": "cu]rn:set@pos=Athis",
    "text": "(Ranged) Target unit is teleported to Ability Target.",
    "color": [155, 20, 208],
    "color2": [255, 255, 255],
    "content": "\u2316",
    "hide": true
}, {
    "id": "44a",
    "cat": "variation",
    "name": "antigravity",
    "long": "1cu]ru:\\(mn:Amove@\\this)",
    "text": "[Pay 1]: (Magic) Ability Target is moved to this unblocked empty space.",
    "color": [0, 63, 255],
    "color2": [255, 255, 255],
    "content": "\u25cc",
    "hide": true
}, {
    "id": "44b",
    "cat": "variation",
    "name": "gravityfreeze",
    "long": "1cu]ru:\\(mn:move@A-(AWAY))&freeze#flag@3-move",
    "text": "[Pay 2]: (Magic) Move target unit in the direction of Ability Target until blocked or Ability Target is reached, then freeze target for 1 turn.",
    "color": [0, 127, 255],
    "color2": [255, 255, 255],
    "content": "\u25ef",
    "hide": true
}, {
    "id": "45a",
    "cat": "variation",
    "name": "meleeshieldall",
    "long": "bt]:ally?targeted@(m*:attack)?+move?this+move?(mu:swap)",
    "text": "(Trigger) Ally unit targeted by enemy melee attack: this unit instantly swaps places with targeted unit.",
    "color": [153, 0, 0],
    "color2": [255, 158, 153],
    "content": "\ue905\ufe62",
    "hide": true
}, {
    "id": "45b",
    "cat": "variation",
    "name": "spellshieldall",
    "long": "bt]:ally?targeted@(r*:*)?+move?this+move?(mu:swap)",
    "text": "(Trigger) Ally unit targeted by enemy Magic or Ranged ability: this unit instantly swaps places with targeted unit.",
    "color": [153, 78, 0],
    "color2": [255, 255, 153],
    "content": "\ue905\ufe62",
    "hide": true
}, {
    "id": "45c",
    "cat": "variation",
    "name": "omnishieldall",
    "long": "bt]:ally?targeted?+move?this+move?(mu:swap)",
    "text": "(Trigger) Ally unit targeted by enemy ability or attack: this unit instantly swaps places with targeted unit.",
    "color": [0, 0, 153],
    "color2": [153, 255, 255],
    "content": "\ue905\ufe62",
    "hide": true
}, {
    "id": "45d",
    "cat": "variation",
    "name": "spellshield",
    "long": "bt]:ally?(CHAMPION)?targeted@(r*:*)?+move?this+move?(mu:swap)",
    "text": "(Trigger) Ally Champion targeted by enemy Magic or Ranged ability: this unit instantly swaps places with targeted champion.",
    "color": [153, 78, 0],
    "color2": [255, 255, 153],
    "content": "\ue905",
    "hide": true
}, {
    "id": "48a",
    "cat": "variation",
    "name": "wisp",
    "long": "t]:targeted:(REFLECT)",
    "text": "(Passive) On Target from this location: Reflect ability.",
    "color": [0, 0, 0],
    "color2": [255, 255, 255],
    "color3": [255, 0, 0],
    "content": "\uea14",
    "hide": true
}, {
    "id": "52a",
    "cat": "variation",
    "name": "arcanerush",
    "long": "c]mu:(RUSH)",
    "text": "(Unblockable) Rush enemy, pushing it up to 3 spaces away from this unit and destroying the enemy if it collides with any unit or the field edge.",
    "color": [255, 0, 0],
    "color2": [200, 200, 200],
    "color3": [0, 0, 0],
    "content": "\u25cb\u2742",
    "hide": true
}, {
    "id": "31b",
    "cat": "limbo",
    "name": "ximaera",
    "long": "b]mu:move/*ally?swap",
    "text": "(Unblockable) Teleport or swap places with unit.",
    "color": [19, 121, 153],
    "hide": true
}, {
    "id": "4a",
    "cat": "limbo",
    "name": "warp",
    "long": "b]mz:move/attack",
    "text": "(Unstoppable) Move or Attack.",
    "color": [200, 151, 24],
    "hide": true
}, {
    "id": "6a",
    "cat": "limbo",
    "name": "fly",
    "long": "b]mz:move",
    "text": "(Unstoppable) Fly.",
    "color": [0, 255, 200],
    "hide": true
}, {
    "id": "5a",
    "cat": "limbo",
    "name": "warpswap",
    "long": "b]mz:move/attack/swap",
    "text": "(Unstoppable) Move, Attack or swap places with ally.",
    "color": [160, 180, 255],
    "hide": true
}, {
    "id": "7a",
    "cat": "limbo",
    "name": "moonflare",
    "long": "b]rz:attack",
    "text": "(Invocation) Destroy target.",
    "color": [34, 117, 253],
    "content": "\u263e",
    "hide": true
}, {
    "id": "53a",
    "cat": "limbo",
    "name": "warpattack",
    "long": "b]mz:attack",
    "text": "(Unstoppable) Attack only.",
    "color": [127, 0, 0],
    "color2": [255, 0, 0],
    "hide": true
}, {
    "id": "a1",
    "cat": "adoption",
    "name": "flirt",
    "long": "cs]rn:flag@3&charm#set@ally",
    "text": "(Magic) Flirt with enemy minion, charming them in 3 turns.",
    "color": [255, 0, 255],
    "content": "\u2665",
    "hide": true
}, {
    "id": "a2",
    "cat": "adoption",
    "name": "mutualpoison",
    "long": "s]ru:(thispoison#flag@3&attack)&poison#flag@3&attack",
    "text": "(Magic) Poison self and enemy unit, destroying them in 3 turns.",
    "color": [0, 101, 24],
    "content": "\uea27",
    "hide": true
}, {
    "id": "a3",
    "cat": "adoption",
    "name": "levitate",
    "long": "s]ru:flag@2-((mn:attack)/\\mn:attack)",
    "text": "(Magic) Levitate unit for 2 turns, making them unable to use or be targeted by normal Attacks.",
    "color": [121, 19, 153],
    "color3": [255, 255, 0],
    "content": "^",
    "hide": true
}, {
    "id": "a4",
    "cat": "adoption",
    "name": "notarget",
    "long": "v]:-\\**:*",
    "text": "(Passive) Can't be targeted from this location.",
    "color": [0, 0, 0],
    "color2": [255, 255, 255],
    "content": "\u2300",
    "hide": true
}, {
    "id": "a5",
    "cat": "adoption",
    "name": "replaceabilitytarget",
    "long": "m]:(REPLACEABILITYTARGET)",
    "text": "(Active) Remove this unit's other Ability Targets, then this location becomes this unit's Ability Target.",
    "color": [0, 0, 0],
    "color2": [127, 127, 255],
    "content": "\u2609",
    "hide": true
}, {
    "id": "a6",
    "cat": "adoption",
    "name": "jumpallymoveattack",
    "long": "b]m(ALLYUNBLOCKABLE)n:move/attack",
    "text": "Move or Attack. Cannot be blocked by Ally units.",
    "color": [0, 0, 0],
    "content": "\u25e0\u25e6",
    "hide": true
}, {
    "id": "a7",
    "cat": "adoption",
    "name": "demote",
    "long": "3c]ru:set@type=(DEMOTION)",
    "text": "[Pay 3]: (Magic) Demote enemy champion, transforming them into their minion counterpart, if possible.",
    "color": [255, 0, 0],
    "color2": [241, 241, 140],
    "content": "\uffec",
    "hide": true
}, {
    "id": "a8",
    "cat": "adoption",
    "name": "backtech",
    "long": "1cs]ru:*ally?flag@3(t]\\!ally?targeted?mn:move@1(AWAY))",
    "text": "[Pay 1]: (Magic) Back-tech unit, making them move 1 square in the opposite direction after targeting enemy for 3 turns.",
    "color": [127, 127, 191],
    "color3": [64, 64, 95],
    "content": "\u25cc",
    "hide": true
}, {
    "id": "a9",
    "cat": "adoption",
    "name": "destroysplash",
    "long": "1c]ru:attack&1(RANGE)\\Amove@1(AWAY))",
    "text": "[Pay 1]: (Magic) Destroy target and push adjacent enemy units 1 space away.",
    "color": [0, 101, 24],
    "color2": [255, 255, 255],
    "content": "\u2747",
    "hide": true
}, {
    "id": "b1",
    "cat": "ultrapretendlimitededition",
    "name": "annihilate",
    "long": "c]rz:(REMOVE)",
    "text": "(Invocation) Annihilate target.",
    "color": [200, 200, 200],
    "color3": [253, 117, 34],
    "content": "*",
    "hide": true
}, {
    "id": "b2",
    "cat": "ultrapretendlimitededition",
    "name": "clear",
    "long": "ms]:*ally?status?deflag?&*ally?enchant?deflag?&deflag",
    "text": "Clear unit and location, removing all status effects and location effects.",
    "color": [220, 220, 220],
    "color2": [255, 255, 255],
    "color3": [0, 0, 0],
    "content": "\u2300",
    "hide": true
}, {
    "id": "b3",
    "cat": "ultrapretendlimitededition",
    "name": "decimate",
    "long": "c]ru:set@value-=3",
    "text": "(Magic) Target loses 3 value. If unit has 3 value or less, destroy it instead.",
    "color": [64, 0, 255],
    "color2": [0, 0, 0],
    "content": "\ufe63",
    "hide": true
}, {
    "id": "b4",
    "cat": "ultrapretendlimitededition",
    "name": "banish",
    "long": "c]ru:*ally?set@pos=startpos",
    "text": "(Magic) Teleport unit back to starting position.",
    "color": [0, 0, 0],
    "color2": [0, 127, 127],
    "color3": [0, 255, 255],
    "content": "\u0058\u2219",
    "hide": true
}, {
    "id": "b5",
    "cat": "ultrapretendlimitededition",
    "name": "hobble",
    "long": "b]mf:move",
    "text": "(Fragile) Move only.",
    "color": [0, 0, 255],
    "color2": [255, 255, 255],
    "hide": true
}, {
    "id": "b6",
    "cat": "ultrapretendlimitededition",
    "name": "protosorcertarget",
    "long": "s]ru:sorcerize#flag@3-!(target?!ally)",
    "text": "(Magic) Enrage target, forcing them to target enemy units if they are capable of targeting any for 3 turns.",
    "color": [255, 0, 0],
    "color2": [0, 0, 0],
    "content": "\u00d7",
    "hide": true
}, {
    "id": "b7",
    "cat": "ultrapretendlimitededition",
    "name": "protosorcerdestroy",
    "long": "cs]ru:sorcerize#flag@3(t]:targeted?block@(**:*)&thisattack)",
    "text": "(Magic) Weaken target, causing them to be destroyed by any ability for 3 turns.",
    "color": [0, 0, 255],
    "color2": [0, 0, 0],
    "content": "\uffec",
    "hide": true
}, {
    "id": "b8",
    "cat": "ultrapretendlimitededition",
    "name": "protosorcerantienchant",
    "long": "cs]ru:sorcerize#flag@3(@+(move:attack))",
    "text": "(Magic) Disenchant target, allowing them to be attacked by Move for 3 turns.",
    "color": [0, 0, 255],
    "color2": [0, 0, 127],
    "content": "\uffec",
    "hide": true
}, {
    "id": "b9",
    "cat": "ultrapretendlimitededition",
    "name": "omniblock",
    "long": "bv]:block@(**:*)&(LOSEABILTY)/(mn:move/attack)",
    "text": "(Passive) Block one attack or ability from this location, and lose this ability. \n(Active) Move or Attack.",
    "color": [0, 0, 0],
    "color3": [255, 255, 0],
    "content": "\u2219",
    "hide": true
}, {
    "id": "b10",
    "cat": "ultrapretendlimitededition",
    "name": "provoke",
    "long": "bt]:start?\(m*:attack)",
    "text": "(Trigger) Enemy Unit: At the start of your turn, target unit instantly attacks this unit.",
    "color": [255, 255, 255],
    "color2": [0, 0, 0],
    "color3": [255, 255, 255],
    "content": "\u25c7",
    "hide": true
}, {
    "id": "b11",
    "cat": "ultrapretendlimitededition",
    "name": "bullrush",
    "long": "c]mn:push#\\(mn:move@3(AWAY))",
    "text": "Move to unit and push them up to 3 spaces away.",
    "color": [87, 218, 40],
    "color2": [255, 255, 255],
    "content": "\u2b1a",
    "hide": true
}, {
    "id": "b12",
    "cat": "ultrapretendlimitededition",
    "name": "void",
    "long": "m]:flag@4(-move&(BLOCK))",
    "text": "Mark location as Void for 4 turns. A void location cannot be moved on if there isn't a unit there and blocks movement.",
    "color": [0, 0, 0],
    "color2": [255, 255, 255],
    "content": "\u2742\u2747",
    "hide": true
}, {
    "id": "b13",
    "cat": "ultrapretendlimitededition",
    "name": "assassinate",
    "long": "bc]mz:move/(REMOVE)",
    "text": "(Unstoppable) Move or Assassinate, removing them from the game.",
    "color": [75, 0, 150],
    "color3": [0, 0, 0],
    "content": "\u2727",
    "hide": true
}, {
    "id": "b14",
    "cat": "ultrapretendlimitededition",
    "name": "bonusmove",
    "long": "b]mn:move&(BONUS)",
    "text": "[Bonus Action] Move only.",
    "color": [0, 0, 255],
    "color3": [255, 255, 255],
    "content": "\u22a1",
    "hide": true
}, {
    "id": "b15",
    "cat": "ultrapretendlimitededition",
    "name": "pullunder",
    "long": "c]ru:(EXILE)3@pos",
    "text": "(Magic) Exile unit, then return them in 3 turns.",
    "color": [0, 80, 150],
    "color3": [0, 0, 0],
    "content": "\u2742",
    "hide": true
}, {
    "id": "b16",
    "cat": "ultrapretendlimitededition",
    "name": "lock",
    "text": "(Magic) Lock enemy unit, making them unable to act or be displaced for 3 turns.",
    "color": [100, 100, 150],
    "color3": [0, 0, 0],
    "content": "\u0311\u25fd",
    "hide": true
}, {
    "id": "b17",
    "cat": "ultrapretendlimitededition",
    "name": "dummypolymorph",
    "text": "(Magic) Transform minion or champion into Dummy.",
    "color": [255, 255, 0],
    "color3": [0, 0, 0],
    "content": "\uea00",
    "hide": true
}, {
    "id": "b18",
    "cat": "ultrapretendlimitededition",
    "name": "deepstrike",
    "text": "Exile self and mark location for return in 3 turns. If location is occupied upon return the occupant is annihilated.",
    "color": [0, 0, 0],
    "color2": [255, 255, 255],
    "content": "\uec24",
    "hide": true
}, {
    "id": "b19",
    "cat": "ultrapretendlimitededition",
    "name": "goto",
    "long": "b]:move",
    "text": "Teleport self to this empty location.",
    "color": [102, 0, 102],
    "hide": true
}, {
    "id": "b20",
    "cat": "ultrapretendlimitededition",
    "name": "setpos",
    "long": "b]:move/attack",
    "text": "Teleport self to this empty location or attack target.",
    "color": [20, 60, 20],
    "hide": true
}, {
    "id": "b21",
    "cat": "predux",
    "name": "specialtykill",
    "text": "(Magic) Enemy unit loses all abilities that aren’t a melee move or melee attack.",
    "color": [0, 0, 0],
    "color2": [255, 255, 255],
    "content": "\uea26",
    "hide": true
}, {
    "id": "b22",
    "cat": "predux",
    "name": "bind",
    "text": "Bind enemy unit, removing all of its abilities on corresponding ability targets.",
    "color": [0, 0, 0],
    "color2": [255, 255, 255],
    "content": "\uec5d",
    "hide": true
}, {
    "id": "b23",
    "cat": "predux",
    "name": "freezeshot",
    "text": "(Ranged) Destroy target and freeze adjacent units perpendicular to target for 1 turn. Cannot target units immune to freeze.",
    "color": [107, 205, 253],
    "color2": [255, 255, 255],
    "content": "\u2316",
    "hide": true
}, {
    "id": "b24",
    "cat": "predux",
    "name": "invigorate",
    "text": "(Magic) Invigorate ally unit, making them able to act regardless of negative status effects for 2 turns.",
    "color": [0, 0, 0],
    "color2": [58, 233, 93],
    "content": "\u274b",
    "hide": true
}, {
    "id": "b25",
    "cat": "predux",
    "name": "agility",
    "text": "(Trigger) At the end of your turn teleport to this empty location before returning to your previous position at the end of your opponent's turn.",
    "color": [121, 19, 153],
    "color2": [255, 255, 255],
    "content": "\u25c7\uea14",
    "hide": true
}, {
    "id": "b26",
    "cat": "predux",
    "name": "confuse",
    "text": "(Magic) Confuse enemy unit for 3 turns, making them unable to target empty locations.",
    "color": [160, 127, 253],
    "content": "\ue904",
    "hide": true
}, {
    "id": "b27",
    "cat": "predux",
    "name": "autominotaur",
    "text": "(Trigger) Enemy King: Swap with target at the start of your turn.",
    "color": [0, 0, 0],
    "color2": [255, 255, 255],
    "color3": [19, 121, 153],
    "content": "\uec32",
    "hide": true
}, {
    "id": "b28",
    "cat": "predux",
    "name": "morph",
    "text": "(Magic) Transform self into most recently fallen unit of value X or less, where X is twice this unit's value.",
    "color": [0, 0, 0],
    "color2": [255, 255, 255],
    "content": "\uea22",
    "hide": true
}, {
    "id": "b29",
    "cat": "predux",
    "name": "finalblast",
    "text": "(Invocation) Annihilate target, poison ally King for 3 turns, and lose this ability.",
    "color": [200, 200, 200],
    "color3": [127, 59, 17],
    "content": "\u2728",
    "hide": true
}, {
    "id": "b30",
    "cat": "predux",
    "name": "finalrespite",
    "text": "(Magic) Enchant self and target ally for 2 turns and lose 5 value. If this unit reaches 0 value this ability can't be used.",
    "color": [0, 102, 255],
    "color2": [0, 0, 0],
    "color3": [0, 255, 255],
    "content": "\uea2a",
    "hide": true
}, {
    "id": "c1",
    "cat": "custom",
    "name": "custom1",
    "long": "z]",
    "text": "Custom ability 1 (Double Click Menu Icon to Edit)",
    "color": [227, 25, 25],
    "content": "1"
}, {
    "id": "c2",
    "cat": "custom",
    "name": "custom2",
    "long": "z]",
    "text": "Custom ability 2 (Double Click Menu Icon to Edit)",
    "color": [227, 126, 25],
    "content": "2"
}, {
    "id": "c3",
    "cat": "custom",
    "name": "custom3",
    "long": "z]",
    "text": "Custom ability 3 (Double Click Menu Icon to Edit)",
    "color": [227, 227, 25],
    "content": "3"
}, {
    "id": "c4",
    "cat": "custom",
    "name": "custom4",
    "long": "z]",
    "text": "Custom ability 4 (Double Click Menu Icon to Edit)",
    "color": [126, 227, 25],
    "content": "4"
}, {
    "id": "c5",
    "cat": "custom",
    "name": "custom5",
    "long": "z]",
    "text": "Custom ability 5 (Double Click Menu Icon to Edit)",
    "color": [25, 227, 25],
    "content": "5"
}, {
    "id": "c6",
    "cat": "custom",
    "name": "custom6",
    "long": "z]",
    "text": "Custom ability 6 (Double Click Menu Icon to Edit)",
    "color": [25, 227, 126],
    "content": "6"
}, {
    "id": "c7",
    "cat": "custom",
    "name": "custom7",
    "long": "z]",
    "text": "Custom ability 7 (Double Click Menu Icon to Edit)",
    "color": [25, 227, 227],
    "content": "7"
}, {
    "id": "c8",
    "cat": "custom",
    "name": "custom8",
    "long": "z]",
    "text": "Custom ability 8 (Double Click Menu Icon to Edit)",
    "color": [25, 126, 227],
    "content": "8"
}, {
    "id": "c9",
    "cat": "custom",
    "name": "custom9",
    "long": "z]",
    "text": "Custom ability 9 (Double Click Menu Icon to Edit)",
    "color": [25, 25, 227],
    "content": "9",
    "hide": true
}, {
    "id": "c10",
    "cat": "custom",
    "name": "custom10",
    "long": "z]",
    "text": "Custom ability 10 (Double Click Menu Icon to Edit)",
    "color": [126, 25, 227],
    "content": "A",
    "hide": true
}, {
    "id": "c11",
    "cat": "custom",
    "name": "custom11",
    "long": "z]",
    "text": "Custom ability 11 (Double Click Menu Icon to Edit)",
    "color": [227, 25, 227],
    "content": "B",
    "hide": true
}, {
    "id": "c12",
    "cat": "custom",
    "name": "custom12",
    "long": "z]",
    "text": "Custom ability 12 (Double Click Menu Icon to Edit)",
    "color": [227, 25, 126],
    "content": "C",
    "hide": true
}, {
    "id": "c13",
    "cat": "custom",
    "name": "custom13",
    "long": "z]",
    "text": "Custom ability 13 (Double Click Menu Icon to Edit)",
    "color": [25, 25, 25],
    "content": "D",
    "hide": true
}, {
    "id": "c14",
    "cat": "custom",
    "name": "custom14",
    "long": "z]",
    "text": "Custom ability 14 (Double Click Menu Icon to Edit)",
    "color": [126, 126, 126],
    "content": "E",
    "hide": true
}, {
    "id": "c15",
    "cat": "custom",
    "name": "custom15",
    "long": "z]",
    "text": "Custom ability 15 (Double Click Menu Icon to Edit)",
    "color": [227, 227, 227],
    "content": "F",
    "hide": true
}, {
    "id": "c16",
    "cat": "custom",
    "name": "custom16",
    "long": "z]",
    "text": "Custom ability 16 (Double Click Menu Icon to Edit)",
    "color": [126, 126, 25],
    "content": "0",
    "hide": true
}, {
    "id": "e",
    "cat": "custom",
    "name": "customexperimental",
    "long": "z]",
    "text": "Experimental Ability (Do not click!)",
    "color": [255, 0, 0],
    "color2": [NaN, NaN, NaN],
    "content": "E",
    "hide": true
}, {
    "id": "⭐",
    "cat": "custom",
    "name": "custommoonfox",
    "long": "z]",
    "text": "Really Super Experimental Ability (Do not click!)",
    "color": [253, 117, 34],
    "content": "\ue9fc",
    "hide": true
}, {
    "id": "UB1",
    "cat": "ultrabeast",
    "name": "nothingshield",
    "text": "(Trigger) This unit targeted by enemy ability: this unit instantly swaps places with targeted champion.",
    "color": [0, 0, 0],
    "content": "\ue905",
    "hide": true
}];

/* Self reminder
\\ when creating an ability of slightly different ability, prefer these changes:
\\ "\ufe62" Targets all
\\ "\u22c6" Magic
\\ "\u2295" Ranged
*/

PASSIVES = ["Does not block movement.",
    "Vanishes after attacking.",
    "Vanishes after Magic.",
    "Immune to Poison.",
    "Immune to Petrify.",
    "Immune to Freeze.",
    "(Ranged-Immune)",
    "(Magic-Immune)",
    "(Status-Immune)",
    "(Trigger-Immune)",
    "(Displacement-Immune)",
    "(Reaction-Immune)",
    "(Location-Immune)",
    "On Death: ",
    "On Kill: ",
    "On Melee Death: ",
    "An enemy unit that targets this unit with any attack or ability is "
];
LABELS = {
    rank: ["Minion", "Champion", "Boss", "King"],
    faction: ["Basic", "Clan", "Arcane", "Forest", "Unholy"],
    rarity: ["Common", "Rare", "Epic", "Legendary", "Unique"]
}
LEVELS = ["base", "plus", "plusplus", "plusplusplus"];

TOOLTIPS = {
    ts0: "Pen Size 2",
    ts1: "Pen Size 3",
    ts2: "Pen Size 5",
    ts3: "Pen Size 10:\nI don't see a use of this outside erasers tbh",
    tf0: "Coloring of the base",
    tf1: "Coloring of the middle part (what do you call those? :v)",
    tf2: "Coloring of the \"head\" part",
    tf3: "Coloring of the darker parts in a piece",
    tt0: "Marker Tool:\nSmooths out after drawing.",
    tt1: "Line Tool",
    tt2: "Path Tool:\nHold Shift to start a new path.\nClick and drag to add new points.\nRelease Shift to finish.",
    tt3: "Eraser Tool:\nThat thing you guys asked me to keep.",
    tt4: "Line Eraser Tool:\nThat thing you guys asked me to keep even though it was a glitch.",
    tt5: "Closed Path Tool:\nHold Shift to start a new shape.\nClick and drag to add new points.\nRelease Shift to finish and close path.",
    do0: "Undo:\nUndo a Path.",
    do1: "Redo:\nRedo an undone Path.",
    do2: "Download:\nUseless.",
    do3: "Clear:\nUndo all Paths. Cannot be removed.",
};
