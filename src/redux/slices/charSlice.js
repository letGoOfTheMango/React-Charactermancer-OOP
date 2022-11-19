/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { CharacterClassNames, AbilityType } from "../../scripts/enums";

export const initialState = {
  playerName: "",
  name: "New Character",
  race: "",
  background: "",
  class: "Wizard",
  subclass: "",
  spellcastingClass: "",
  characterLevel: 1,
  hitDice: {
    size: 6,
    total: 1,
    current: 1,
  },
  proficiencyBonus: 2,
  abilities: {
    strength: {
      value: 8,
      proficient: false,
      mod: -1,
      saveMod: -1,
      potentialStat: false,
    },
    dexterity: {
      value: 8,
      proficient: false,
      mod: -1,
      saveMod: -1,
      potentialStat: false,
    },
    constitution: {
      value: 8,
      proficient: false,
      mod: -1,
      saveMod: -1,
      potentialStat: false,
    },
    intelligence: {
      value: 8,
      proficient: false,
      mod: -1,
      saveMod: -1,
      potentialStat: false,
    },
    wisdom: {
      value: 8,
      proficient: false,
      mod: -1,
      saveMod: -1,
      potentialStat: false,
    },
    charisma: {
      value: 8,
      proficient: false,
      mod: -1,
      saveMod: -1,
      potentialStat: false,
    },
  },
  passivePerception: 11,
  attributes: {
    ac: {
      flat: -1,
      calculation: null,
    },
    hitPoints: {
      value: null,
      min: 0,
      max: null,
      temp: null,
    },
    initiative: {
      mod: -1,
      bonus: 0,
    },
    speed: {
      burrow: 0,
      climb: 0,
      fly: 0,
      swim: 0,
      walk: 30,
      units: "ft",
      hover: false,
    },
    senses: {
      darkvision: 0,
      blindsight: 0,
      tremorsense: 0,
      truesight: 0,
      units: "ft",
    },
    deathSaves: {
      success: 0,
      failure: 0,
    },
    exhaustion: 0,
    inspiration: false,
  },
  details: {
    biography: {
      age: 0,
      backstory: "",
      personalityTraits: "",
      ideals: "",
      bonds: "",
      flaws: "",
    },
    alignment: "",
    experience: {
      value: 0,
      min: 0,
      max: 300,
    },
    size: "medium", //small, medium
    appearance: "",
    height: 0,
    weight: 0,
    eyes: "",
    skin: "",
    hair: "",
  },
  traits: {
    damageImmunities: {
      acid: false,
      bludgeoning: false,
      cold: false,
      fire: false,
      force: false,
      lightning: false,
      necrotic: false,
      physical: false,
      piercing: false,
      poison: false,
      psychic: false,
      radiant: false,
      slashing: false,
      thunder: false,
      custom: "",
    },
    damageResistances: {
      acid: false,
      bludgeoning: false,
      cold: false,
      fire: false,
      force: false,
      lightning: false,
      necrotic: false,
      physical: false,
      piercing: false,
      poison: false,
      psychic: false,
      radiant: false,
      slashing: false,
      thunder: false,
      custom: "",
    },
    damageVulnerabilities: {
      acid: false,
      bludgeoning: false,
      cold: false,
      fire: false,
      force: false,
      lightning: false,
      necrotic: false,
      physical: false,
      piercing: false,
      poison: false,
      psychic: false,
      radiant: false,
      slashing: false,
      thunder: false,
      custom: "",
    },
    conditionImmunities: {
      blinded: false,
      charmed: false,
      deafened: false,
      diseased: false,
      exhaustion: false,
      frightened: false,
      grappled: false,
      incapacitated: false,
      invisible: false,
      paralyzed: false,
      petrified: false,
      poisoned: false,
      prone: false,
      restrained: false,
      stunned: false,
      unconscious: false,
      custom: "",
    },
  },
  languages: {
    aarakocra: {
      proficiency: false,
      potentialLanguage: false,
      name: "Aarakocra",
    },
    abyssal: {
      proficiency: false,
      potentialLanguage: false,
      name: "Abyssal",
    },
    aquan: {
      proficiency: false,
      potentialLanguage: false,
      name: "Aquan",
    },
    auran: {
      proficiency: false,
      potentialLanguage: false,
      name: "Auran",
    },
    celestial: {
      proficiency: false,
      potentialLanguage: false,
      name: "Celestial",
    },
    common: {
      proficiency: true,
      potentialLanguage: false,
      name: "Common",
    },
    deepSpeech: {
      proficiency: false,
      potentialLanguage: false,
      name: "Deep Speech",
    },
    draconic: {
      proficiency: false,
      potentialLanguage: false,
      name: "Draconic",
    },
    druidic: {
      proficiency: false,
      potentialLanguage: false,
      name: "Druidic",
    },
    dwarvish: {
      proficiency: false,
      potentialLanguage: false,
      name: "Dwarvish",
    },
    elvish: {
      proficiency: false,
      potentialLanguage: false,
      name: "Elvish",
    },
    giant: {
      proficiency: false,
      potentialLanguage: false,
      name: "Giant",
    },
    gith: {
      proficiency: false,
      potentialLanguage: false,
      name: "Gith",
    },
    gnoll: {
      proficiency: false,
      potentialLanguage: false,
      name: "Gnoll",
    },
    gnomish: {
      proficiency: false,
      potentialLanguage: false,
      name: "Gnomish",
    },
    goblin: {
      proficiency: false,
      potentialLanguage: false,
      name: "Goblin",
    },
    halfling: {
      proficiency: false,
      potentialLanguage: false,
      name: "Halfling",
    },
    ignan: {
      proficiency: false,
      potentialLanguage: false,
      name: "Ignan",
    },
    infernal: {
      proficiency: false,
      potentialLanguage: false,
      name: "Infernal",
    },
    orc: {
      proficiency: false,
      potentialLanguage: false,
      name: "Orc",
    },
    primordial: {
      proficiency: false,
      potentialLanguage: false,
      name: "Primordial",
    },
    sylvan: {
      proficiency: false,
      potentialLanguage: false,
      name: "Sylvan",
    },
    terran: {
      proficiency: false,
      potentialLanguage: false,
      name: "Terran",
    },
    thievesCant: {
      proficiency: false,
      potentialLanguage: false,
      name: "Thieves' Cant",
    },
    undercommon: {
      proficiency: false,
      potentialLanguage: false,
      name: "Undercommon",
    },
    custom: [],
  },
  weapons: {
    simple: {
      proficiency: false,
      potentialWeaponProficiency: true,
      name: "simple weapons",
    },
    club: {
      proficiency: false,
      potentialWeaponProficiency: true,
      name: "club",
    },
    dagger: {
      proficiency: false,
      potentialWeaponProficiency: true,
      name: "dagger",
    },
    dart: {
      proficiency: false,
      potentialWeaponProficiency: true,
      name: "dart",
    },
    greatclub: {
      proficiency: false,
      potentialWeaponProficiency: true,
      name: "greatclub",
    },
    handaxe: {
      proficiency: false,
      potentialWeaponProficiency: true,
      name: "handaxe",
    },
    javelin: {
      proficiency: false,
      potentialWeaponProficiency: true,
      name: "javelin",
    },
    lightcrossbow: {
      proficiency: false,
      potentialWeaponProficiency: true,
      name: "light crossbow",
    },
    lighthammer: {
      proficiency: false,
      potentialWeaponProficiency: true,
      name: "light hammer",
    },
    mace: {
      proficiency: false,
      potentialWeaponProficiency: true,
      name: "mace",
    },
    quarterstaff: {
      proficiency: false,
      potentialWeaponProficiency: true,
      name: "quarterstaff",
    },
    shortbow: {
      proficiency: false,
      potentialWeaponProficiency: true,
      name: "shortbow",
    },
    sickle: {
      proficiency: false,
      potentialWeaponProficiency: true,
      name: "sickle",
    },
    sling: {
      proficiency: false,
      potentialWeaponProficiency: true,
      name: "sling",
    },
    spear: {
      proficiency: false,
      potentialWeaponProficiency: true,
      name: "spear",
    },
    martial: {
      proficiency: false,
      potentialWeaponProficiency: true,
      name: "martial weapons",
    },
    battleaxe: {
      proficiency: false,
      potentialWeaponProficiency: false,
      name: "battleaxe",
    },
    blowgun: {
      proficiency: false,
      potentialWeaponProficiency: false,
      name: "blowgun",
    },
    flail: {
      proficiency: false,
      potentialWeaponProficiency: false,
      name: "flail",
    },
    glaive: {
      proficiency: false,
      potentialWeaponProficiency: false,
      name: "glaive",
    },
    greataxe: {
      proficiency: false,
      potentialWeaponProficiency: false,
      name: "greataxe",
    },
    greatsword: {
      proficiency: false,
      potentialWeaponProficiency: false,
      name: "greatsword",
    },
    halberd: {
      proficiency: false,
      potentialWeaponProficiency: false,
      name: "halberd",
    },
    handcrossbow: {
      proficiency: false,
      potentialWeaponProficiency: false,
      name: "hand crossbow",
    },
    heavycrossbow: {
      proficiency: false,
      potentialWeaponProficiency: false,
      name: "heavy crossbow",
    },
    lance: {
      proficiency: false,
      potentialWeaponProficiency: false,
      name: "lance",
    },
    longbow: {
      proficiency: false,
      potentialWeaponProficiency: false,
      name: "longbow",
    },
    longsword: {
      proficiency: false,
      potentialWeaponProficiency: false,
      name: "longsword",
    },
    maul: {
      proficiency: false,
      potentialWeaponProficiency: false,
      name: "maul",
    },
    morningstar: {
      proficiency: false,
      potentialWeaponProficiency: false,
      name: "morningstar",
    },
    net: {
      proficiency: false,
      potentialWeaponProficiency: false,
      name: "net",
    },
    pike: {
      proficiency: false,
      potentialWeaponProficiency: false,
      name: "pike",
    },
    rapier: {
      proficiency: false,
      potentialWeaponProficiency: false,
      name: "rapier",
    },
    scimitar: {
      proficiency: false,
      potentialWeaponProficiency: false,
      name: "scimitar",
    },
    shortsword: {
      proficiency: false,
      potentialWeaponProficiency: false,
      name: "shortsword",
    },
    trident: {
      proficiency: false,
      potentialWeaponProficiency: false,
      name: "trident",
    },
    warpick: {
      proficiency: false,
      potentialWeaponProficiency: false,
      name: "warpick",
    },
    warhammer: {
      proficiency: false,
      potentialWeaponProficiency: false,
      name: "warhammer",
    },
    whip: {
      proficiency: false,
      potentialWeaponProficiency: false,
      name: "whip",
    },
    firearms: {
      proficiency: false,
      potentialWeaponProficiency: false,
      name: "firearms",
    },
    custom: [],
  },
  attacks: [
    {
      name: "Rapier",
      attackType: "Melee Weapon Attack",
      dependantStatMod: -1,
      toHit: 1,
      reach: 5,
      target: "one target",
      damageDice: "1d8",
      damageType: "piercing damage",
    },
  ],
  armors: {
    lightArmor: {
      proficiency: false,
      potentialArmorProficiency: false,
      name: "light armor",
    },
    leatherArmor: {
      proficiency: false,
      potentialArmorProficiency: false,
      name: "leather armor",
    },
    paddedArmor: {
      proficiency: false,
      potentialArmorProficiency: false,
      name: "padded armor",
    },
    studdedLeatherArmor: {
      proficiency: false,
      potentialArmorProficiency: false,
      name: "studded leather armor",
    },
    mediumArmor: {
      proficiency: false,
      potentialArmorProficiency: false,
      name: "medium armor",
    },
    breastplate: {
      proficiency: false,
      potentialArmorProficiency: false,
      name: "breastplate",
    },
    chainShirt: {
      proficiency: false,
      potentialArmorProficiency: false,
      name: "chain shirt",
    },
    halfPlateArmor: {
      proficiency: false,
      potentialArmorProficiency: false,
      name: "half plate armor",
    },
    hideArmor: {
      proficiency: false,
      potentialArmorProficiency: false,
      name: "hide armor",
    },
    scaleMail: {
      proficiency: false,
      potentialArmorProficiency: false,
      name: "scale mail",
    },
    heavyArmor: {
      proficiency: false,
      potentialArmorProficiency: false,
      name: "heavy armor",
    },
    chainMail: {
      proficiency: false,
      potentialArmorProficiency: false,
      name: "chain mail",
    },
    plateArmor: {
      proficiency: false,
      potentialArmorProficiency: false,
      name: "plate armor",
    },
    ringMail: {
      proficiency: false,
      potentialArmorProficiency: false,
      name: "ring mail",
    },
    splintArmor: {
      proficiency: false,
      potentialArmorProficiency: false,
      name: "splint armor",
    },
    shields: {
      proficiency: false,
      potentialArmorProficiency: false,
      name: "shields",
    },
    custom: [],
  },
  tools: {
    alchemist: {
      proficiency: false,
      potentialToolProficiency: true,
      chosen: false,
      name: "alchemist's supplies",
    },
    brewer: {
      proficiency: false,
      potentialToolProficiency: true,
      chosen: false,
      name: "brewer's supplies",
    },
    calligrapher: {
      proficiency: false,
      potentialToolProficiency: true,
      chosen: false,
      name: "calligrapher's supplies",
    },
    carpenter: {
      proficiency: false,
      potentialToolProficiency: true,
      chosen: false,
      name: "carpenter's tools",
    },
    cartographer: {
      proficiency: false,
      potentialToolProficiency: true,
      chosen: false,
      name: "cartographer's tools",
    },
    cobbler: {
      proficiency: false,
      potentialToolProficiency: false,
      chosen: false,
      name: "cobbler's tools",
    },
    cook: {
      proficiency: false,
      potentialToolProficiency: false,
      chosen: false,
      name: "cook's utensils",
    },
    glassblower: {
      proficiency: false,
      potentialToolProficiency: false,
      chosen: false,
      name: "glassblower's tools",
    },
    jeweler: {
      proficiency: false,
      potentialToolProficiency: false,
      chosen: false,
      name: "jeweler's tools",
    },
    leatherworker: {
      proficiency: false,
      potentialToolProficiency: false,
      chosen: false,
      name: "leatherworker's tools",
    },
    mason: {
      proficiency: false,
      potentialToolProficiency: false,
      chosen: false,
      name: "mason's tools",
    },
    painter: {
      proficiency: false,
      potentialToolProficiency: false,
      chosen: false,
      name: "painter's supplies",
    },
    potter: {
      proficiency: false,
      potentialToolProficiency: false,
      chosen: false,
      name: "potter's tools",
    },
    smith: {
      proficiency: false,
      potentialToolProficiency: false,
      chosen: false,
      name: "smith's tools",
    },
    tinker: {
      proficiency: false,
      potentialToolProficiency: false,
      chosen: false,
      name: "tinker's tools",
    },
    weaver: {
      proficiency: false,
      potentialToolProficiency: false,
      chosen: false,
      name: "weaver's tools",
    },
    woodcarver: {
      proficiency: false,
      potentialToolProficiency: false,
      chosen: false,
      name: "woodcarver's tools",
    },
    disguise: {
      proficiency: false,
      potentialToolProficiency: false,
      chosen: false,
      name: "disguise Kit",
    },
    forgery: {
      proficiency: false,
      potentialToolProficiency: false,
      chosen: false,
      name: "forgery kit",
    },
    chess: {
      proficiency: false,
      potentialToolProficiency: false,
      chosen: false,
      name: "dragonchess set",
    },
    dice: {
      proficiency: false,
      potentialToolProficiency: false,
      chosen: false,
      name: "dice set",
    },
    cards: {
      proficiency: false,
      potentialToolProficiency: false,
      chosen: false,
      name: "playing card set",
    },
    dragonAnte: {
      proficiency: false,
      potentialToolProficiency: false,
      chosen: false,
      name: "Three-Dragon Ante set",
    },
    herbalism: {
      proficiency: false,
      potentialToolProficiency: false,
      chosen: false,
      name: "herbalism kit",
    },
    bagpipes: {
      proficiency: false,
      potentialToolProficiency: false,
      chosen: false,
      name: "bagpipes",
    },
    drum: {
      proficiency: false,
      potentialToolProficiency: false,
      chosen: false,
      name: "drum",
    },
    dulcimer: {
      proficiency: false,
      potentialToolProficiency: false,
      chosen: false,
      name: "dulcimer",
    },
    flute: {
      proficiency: false,
      potentialToolProficiency: false,
      chosen: false,
      name: "flute",
    },
    horn: {
      proficiency: false,
      potentialToolProficiency: false,
      chosen: false,
      name: "horn",
    },
    lute: {
      proficiency: false,
      potentialToolProficiency: false,
      chosen: false,
      name: "lute",
    },
    lyre: {
      proficiency: false,
      potentialToolProficiency: false,
      chosen: false,
      name: "lyre",
    },
    panflute: {
      proficiency: false,
      potentialToolProficiency: false,
      chosen: false,
      name: "pan flute",
    },
    shawm: {
      proficiency: false,
      potentialToolProficiency: false,
      chosen: false,
      name: "shawm",
    },
    viol: {
      proficiency: false,
      potentialToolProficiency: false,
      chosen: false,
      name: "viol",
    },
    navigators: {
      proficiency: false,
      potentialToolProficiency: false,
      chosen: false,
      name: "navigator's tools",
    },
    poisoners: {
      proficiency: false,
      potentialToolProficiency: false,
      chosen: false,
      name: "poisoner's kit",
    },
    thief: {
      proficiency: false,
      potentialToolProficiency: false,
      chosen: false,
      name: "thieves' tools",
    },
    landVehicle: {
      proficiency: false,
      potentialToolProficiency: false,
      chosen: false,
      name: "vehicles (land)",
    },
    waterVehicle: {
      proficiency: false,
      potentialToolProficiency: false,
      chosen: false,
      name: "vehicles (water)",
    },
    custom: [],
  },
  toolsToChoose: 3,
  skills: {
    acrobatics: {
      name: "acrobatics",
      proficiency: 0,
      mod: -1,
      potentialSkill: true,
      chosen: false,
    },
    animalHandling: {
      name: "animal handling",
      proficiency: 0,
      mod: -1,
      potentialSkill: true,
      chosen: false,
    },
    arcana: {
      name: "arcana",
      proficiency: 0,
      mod: -1,
      potentialSkill: true,
      chosen: false,
    },
    athletics: {
      name: "athletics",
      proficiency: 0,
      mod: -1,
      potentialSkill: true,
      chosen: false,
    },
    deception: {
      name: "deception",
      proficiency: 0,
      mod: -1,
      potentialSkill: true,
      chosen: false,
    },
    history: {
      name: "history",
      proficiency: 0,
      mod: -1,
      potentialSkill: false,
      chosen: false,
    },
    insight: {
      name: "insight",
      proficiency: 0,
      mod: -1,
      potentialSkill: false,
      chosen: false,
    },
    intimidation: {
      name: "intimidation",
      proficiency: 0,
      mod: -1,
      potentialSkill: false,
      chosen: false,
    },
    investigation: {
      name: "investigation",
      proficiency: 0,
      mod: -1,
      potentialSkill: false,
      chosen: false,
    },
    medicine: {
      name: "medicine",
      proficiency: 0,
      mod: -1,
      potentialSkill: false,
      chosen: false,
    },
    nature: {
      name: "nature",
      proficiency: 0,
      mod: -1,
      potentialSkill: false,
      chosen: false,
    },
    perception: {
      name: "perception",
      proficiency: 0,
      mod: -1,
      potentialSkill: false,
      chosen: false,
    },
    performance: {
      name: "performance",
      proficiency: 0,
      mod: -1,
      potentialSkill: false,
      chosen: false,
    },
    persuasion: {
      name: "persuasion",
      proficiency: 0,
      mod: -1,
      potentialSkill: false,
      chosen: false,
    },
    religion: {
      name: "religion",
      proficiency: 0,
      mod: -1,
      potentialSkill: false,
      chosen: false,
    },
    sleightOfHand: {
      name: "sleight of hand",
      proficiency: 0,
      mod: -1,
      potentialSkill: true,
      chosen: false,
    },
    stealth: {
      name: "stealth",
      proficiency: 0,
      mod: -1,
      potentialSkill: false,
      chosen: false,
    },
    survival: {
      name: "survival",
      proficiency: 0,
      mod: -1,
      potentialSkill: false,
      chosen: false,
    },
  },
  skillsToChoose: 2,
  spellcastingAbility: "", //intelligence, wisdom, charisma
  spellSaveDC: null, //8 + ability mod + proficiency bonus
  spellAttackBonus: null, //ability mod + proficiency bonus
  spells: {
    level0: {
      slots: 0,
      spells: ["Guidance"],
      slotsExpended: 0,
    },
    level1: {
      slots: 0,
      spells: [],
      slotsExpended: 0,
    },
    level2: {
      slots: 0,
      spells: [],
      slotsExpended: 0,
    },
    level3: {
      slots: 0,
      spells: [],
      slotsExpended: 0,
    },
    level4: {
      slots: 0,
      spells: [],
      slotsExpended: 0,
    },
    level5: {
      slots: 0,
      spells: [],
      slotsExpended: 0,
    },
    level6: {
      slots: 0,
      spells: [],
      slotsExpended: 0,
    },
    level7: {
      slots: 0,
      spells: [],
      slotsExpended: 0,
    },
    level8: {
      slots: 0,
      spells: [],
      slotsExpended: 0,
    },
    level9: {
      slots: 0,
      spells: [],
      slotsExpended: 0,
    },
    pact: {
      slots: 0,
      spells: [],
      slotsExpended: 0,
    },
  },
  features: [],
  equipment: [],
  treasure: [],
  currency: {
    platinum: 0,
    gold: 0,
    electrum: 0,
    silver: 0,
    copper: 0,
  },
};
export const charSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeLevel(state, action) { },
    changeClass(state, action) { },
    changeFeatures(state, action) { },
    changeAbilites(state, action) {
      switch (action.payload.ability) {
        case AbilityType.STRENGTH:
          state.abilities.strength.value += action.payload.value;
          break;
        case AbilityType.DEXTERITY:
          state.abilities.dexterity.value += action.payload.value;
          break;
        case AbilityType.CONSTITUTION:
          state.abilities.constitution.value += action.payload.value;
          break;
        case AbilityType.INTELLIGENCE:
          state.abilities.intelligence.value += action.payload.value;
          break;
        case AbilityType.WISDOM:
          state.abilities.wisdom.value += action.payload.value;
          break;
        case AbilityType.CHARISMA:
          state.abilities.charisma.value += action.payload.value;
          break;

        default:
          break;
      }
    },
    changeArmorProficiencies(state, action) { },
    changeLanguages(state, action) { },
    changeSkillProficiencies(state, action) {
      switch (action.payload.skill) {
        case "acrobatics":
          state.skills.acrobatics.proficiency = action.payload.value;
          if (action.payload.value > 0.5) {
            state.skills.acrobatics.chosen = true;
          } else {
            state.skills.acrobatics.chosen = false;
          }
          break;
        case "animalHandling":
          state.skills.animalHandling.proficiency = action.payload.value;
          if (action.payload.value > 0.5) {
            state.skills.animalHandling.chosen = true;
          } else {
            state.skills.animalHandling.chosen = false;
          }
          break;
        case "arcana":
          state.skills.arcana.proficiency = action.payload.value;
          if (action.payload.value > 0.5) {
            state.skills.arcana.chosen = true;
          } else {
            state.skills.arcana.chosen = false;
          }
          break;
        case "athletics":
          state.skills.athletics.proficiency = action.payload.value;
          if (action.payload.value > 0.5) {
            state.skills.athletics.chosen = true;
          } else {
            state.skills.athletics.chosen = false;
          }
          break;
        case "deception":
          state.skills.deception.proficiency = action.payload.value;
          if (action.payload.value > 0.5) {
            state.skills.deception.chosen = true;
          } else {
            state.skills.deception.chosen = false;
          }
          break;
        case "history":
          state.skills.history.proficiency = action.payload.value;
          if (action.payload.value > 0.5) {
            state.skills.history.chosen = true;
          } else {
            state.skills.history.chosen = false;
          }
          break;
        case "insight":
          state.skills.insight.proficiency = action.payload.value;
          if (action.payload.value > 0.5) {
            state.skills.insight.chosen = true;
          } else {
            state.skills.insight.chosen = false;
          }
          break;
        case "intimidation":
          state.skills.intimidation.proficiency = action.payload.value;
          if (action.payload.value > 0.5) {
            state.skills.intimidation.chosen = true;
          } else {
            state.skills.intimidation.chosen = false;
          }
          break;
        case "investigation":
          state.skills.investigation.proficiency = action.payload.value;
          if (action.payload.value > 0.5) {
            state.skills.investigation.chosen = true;
          } else {
            state.skills.investigation.chosen = false;
          }
          break;
        case "medicine":
          state.skills.medicine.proficiency = action.payload.value;
          if (action.payload.value > 0.5) {
            state.skills.medicine.chosen = true;
          } else {
            state.skills.medicine.chosen = false;
          }
          break;
        case "nature":
          state.skills.nature.proficiency = action.payload.value;
          if (action.payload.value > 0.5) {
            state.skills.nature.chosen = true;
          } else {
            state.skills.nature.chosen = false;
          }
          break;
        case "perception":
          state.skills.perception.proficiency = action.payload.value;
          if (action.payload.value > 0.5) {
            state.skills.perception.chosen = true;
          } else {
            state.skills.perception.chosen = false;
          }
          break;
        case "performance":
          state.skills.performance.proficiency = action.payload.value;
          if (action.payload.value > 0.5) {
            state.skills.performance.chosen = true;
          } else {
            state.skills.performance.chosen = false;
          }
          break;
        case "persuasion":
          state.skills.persuasion.proficiency = action.payload.value;
          if (action.payload.value > 0.5) {
            state.skills.persuasion.chosen = true;
          } else {
            state.skills.persuasion.chosen = false;
          }
          break;
        case "religion":
          state.skills.religion.proficiency = action.payload.value;
          if (action.payload.value > 0.5) {
            state.skills.religion.chosen = true;
          } else {
            state.skills.religion.chosen = false;
          }
          break;
        case "sleightOfHand":
          state.skills.sleightOfHand.proficiency = action.payload.value;
          if (action.payload.value > 0.5) {
            state.skills.sleightOfHand.chosen = true;
          } else {
            state.skills.sleightOfHand.chosen = false;
          }
          break;
        case "stealth":
          state.skills.stealth.proficiency = action.payload.value;
          if (action.payload.value > 0.5) {
            state.skills.stealth.chosen = true;
          } else {
            state.skills.stealth.chosen = false;
          }
          break;
        case "survival":
          state.skills.survival.proficiency = action.payload.value;
          if (action.payload.value > 0.5) {
            state.skills.survival.chosen = true;
          } else {
            state.skills.survival.chosen = false;
          }
          break;
        default:
          break;
      }
    },
    changeToolProficiencies(state, action) {
      switch (action.payload.tool) {
        case "alchemist":
          state.tools.alchemist.proficiency = action.payload.value;
          state.tools.alchemist.chosen = action.payload.value;
          break;
        case "brewer":
          state.tools.brewer.proficiency = action.payload.value;
          state.tools.brewer.chosen = action.payload.value;
          break;
        case "calligrapher":
          state.tools.calligrapher.proficiency = action.payload.value;
          state.tools.calligrapher.chosen = action.payload.value;
          break;
        case "carpenter":
          state.tools.carpenter.proficiency = action.payload.value;
          state.tools.carpenter.chosen = action.payload.value;
          break;
        case "cartographer":
          state.tools.cartographer.proficiency = action.payload.value;
          state.tools.cartographer.chosen = action.payload.value;
          break;
        case "cobbler":
          state.tools.cobbler.proficiency = action.payload.value;
          state.tools.cobbler.chosen = action.payload.value;
          break;
        case "cook":
          state.tools.cook.proficiency = action.payload.value;
          state.tools.cook.chosen = action.payload.value;
          break;
        case "glassblower":
          state.tools.glassblower.proficiency = action.payload.value;
          state.tools.glassblower.chosen = action.payload.value;
          break;
        case "jeweler":
          state.tools.jeweler.proficiency = action.payload.value;
          state.tools.jeweler.chosen = action.payload.value;
          break;
        case "leatherworker":
          state.tools.leatherworker.proficiency = action.payload.value;
          state.tools.leatherworker.chosen = action.payload.value;
          break;
        case "mason":
          state.tools.mason.proficiency = action.payload.value;
          state.tools.mason.chosen = action.payload.value;
          break;
        case "painter":
          state.tools.painter.proficiency = action.payload.value;
          state.tools.painter.chosen = action.payload.value;
          break;
        case "potter":
          state.tools.potter.proficiency = action.payload.value;
          state.tools.potter.chosen = action.payload.value;
          break;
        case "smith":
          state.tools.smith.proficiency = action.payload.value;
          state.tools.smith.chosen = action.payload.value;
          break;
        case "tinker":
          state.tools.tinker.proficiency = action.payload.value;
          state.tools.tinker.chosen = action.payload.value;
          break;
        case "weaver":
          state.tools.weaver.proficiency = action.payload.value;
          state.tools.weaver.chosen = action.payload.value;
          break;
        case "woodcarver":
          state.tools.woodcarver.proficiency = action.payload.value;
          state.tools.woodcarver.chosen = action.payload.value;
          break;
        case "disguise":
          state.tools.disguise.proficiency = action.payload.value;
          state.tools.disguise.chosen = action.payload.value;
          break;
        case "forgery":
          state.tools.forgery.proficiency = action.payload.value;
          state.tools.forgery.chosen = action.payload.value;
          break;
        case "chess":
          state.tools.chess.proficiency = action.payload.value;
          state.tools.chess.chosen = action.payload.value;
          break;
        case "dice":
          state.tools.dice.proficiency = action.payload.value;
          state.tools.dice.chosen = action.payload.value;
          break;
        case "cards":
          state.tools.cards.proficiency = action.payload.value;
          state.tools.cards.chosen = action.payload.value;
          break;
        case "dragonAnte":
          state.tools.dragonAnte.proficiency = action.payload.value;
          state.tools.dragonAnte.chosen = action.payload.value;
          break;
        case "herbalism":
          state.tools.herbalism.proficiency = action.payload.value;
          state.tools.herbalism.chosen = action.payload.value;
          break;
        case "bagpipes":
          state.tools.bagpipes.proficiency = action.payload.value;
          state.tools.bagpipes.chosen = action.payload.value;
          break;
        case "drum":
          state.tools.drum.proficiency = action.payload.value;
          state.tools.drum.chosen = action.payload.value;
          break;
        case "dulcimer":
          state.tools.dulcimer.proficiency = action.payload.value;
          state.tools.dulcimer.chosen = action.payload.value;
          break;
        case "flute":
          state.tools.flute.proficiency = action.payload.value;
          state.tools.flute.chosen = action.payload.value;
          break;
        case "horn":
          state.tools.horn.proficiency = action.payload.value;
          state.tools.horn.chosen = action.payload.value;
          break;
        case "lute":
          state.tools.lute.proficiency = action.payload.value;
          state.tools.lute.chosen = action.payload.value;
          break;
        case "lyre":
          state.tools.lyre.proficiency = action.payload.value;
          state.tools.lyre.chosen = action.payload.value;
          break;
        case "panflute":
          state.tools.panflute.proficiency = action.payload.value;
          state.tools.panflute.chosen = action.payload.value;
          break;
        case "shawm":
          state.tools.shawm.proficiency = action.payload.value;
          state.tools.shawm.chosen = action.payload.value;
          break;
        case "viol":
          state.tools.viol.proficiency = action.payload.value;
          state.tools.viol.chosen = action.payload.value;
          break;
        case "navigators":
          state.tools.navigators.proficiency = action.payload.value;
          state.tools.navigators.chosen = action.payload.value;
          break;
        case "poisoners":
          state.tools.poisoners.proficiency = action.payload.value;
          state.tools.poisoners.chosen = action.payload.value;
          break;
        case "thief":
          state.tools.thief.proficiency = action.payload.value;
          state.tools.thief.chosen = action.payload.value;
          break;
        case "landVehicle":
          state.tools.landVehicle.proficiency = action.payload.value;
          state.tools.landVehicle.chosen = action.payload.value;
          break;
        case "waterVehicle":
          state.tools.waterVehicle.proficiency = action.payload.value;
          state.tools.waterVehicle.chosen = action.payload.value;
          break;
        default:
          break;
      }
    },
    changeWeaponProficiencies(state, action) {
      switch (action.payload.weapon) {
        case "simple":
          state.weapons.simple.proficiency = action.payload.value;
          break;
        case "club":
          state.weapons.club.proficiency = action.payload.value;
          break;
        case "dagger":
          state.weapons.dagger.proficiency = action.payload.value;
          break;
        case "dart":
          state.weapons.dart.proficiency = action.payload.value;
          break;
        case "greatclub":
          state.weapons.greatclub.proficiency = action.payload.value;
          break;
        case "handaxe":
          state.weapons.handaxe.proficiency = action.payload.value;
          break;
        case "javelin":
          state.weapons.javelin.proficiency = action.payload.value;
          break;
        case "lightcrossbow":
          state.weapons.lightcrossbow.proficiency = action.payload.value;
          break;
        case "mace":
          state.weapons.mace.proficiency = action.payload.value;
          break;
        case "lighthammer":
          state.weapons.lighthammer.proficiency = action.payload.value;
          break;
        case "quarterstaff":
          state.weapons.quarterstaff.proficiency = action.payload.value;
          break;
        case "shortbow":
          state.weapons.shortbow.proficiency = action.payload.value;
          break;
        case "sickle":
          state.weapons.sickle.proficiency = action.payload.value;
          break;
        case "sling":
          state.weapons.sling.proficiency = action.payload.value;
          break;
        case "spear":
          state.weapons.spear.proficiency = action.payload.value;
          break;
        case "martial":
          state.weapons.martial.proficiency = action.payload.value;
          break;
        case "battleaxe":
          state.weapons.battleaxe.proficiency = action.payload.value;
          break;
        case "blowgun":
          state.weapons.blowgun.proficiency = action.payload.value;
          break;
        case "flail":
          state.weapons.flail.proficiency = action.payload.value;
          break;
        case "glaive":
          state.weapons.glaive.proficiency = action.payload.value;
          break;
        case "greataxe":
          state.weapons.greataxe.proficiency = action.payload.value;
          break;
        case "greatsword":
          state.weapons.greatsword.proficiency = action.payload.value;
          break;
        case "halberd":
          state.weapons.halberd.proficiency = action.payload.value;
          break;
        case "handcrossbow":
          state.weapons.handcrossbow.proficiency = action.payload.value;
          break;
        case "heavycrossbow":
          state.weapons.heavycrossbow.proficiency = action.payload.value;
          break;
        case "lance":
          state.weapons.lance.proficiency = action.payload.value;
          break;
        case "longbow":
          state.weapons.longbow.proficiency = action.payload.value;
          break;
        case "longsword":
          state.weapons.longsword.proficiency = action.payload.value;
          break;
        case "maul":
          state.weapons.maul.proficiency = action.payload.value;
          break;
        case "morningstar":
          state.weapons.morningstar.proficiency = action.payload.value;
          break;
        case "net":
          state.weapons.net.proficiency = action.payload.value;
          break;
        case "pike":
          state.weapons.pike.proficiency = action.payload.value;
          break;
        case "rapier":
          state.weapons.rapier.proficiency = action.payload.value;
          break;
        case "scimitar":
          state.weapons.scimitar.proficiency = action.payload.value;
          break;
        case "shortsword":
          state.weapons.shortsword.proficiency = action.payload.value;
          break;
        case "trident":
          state.weapons.trident.proficiency = action.payload.value;
          break;
        case "warpick":
          state.weapons.warpick.proficiency = action.payload.value;
          break;
        case "warhammer":
          state.weapons.warhammer.proficiency = action.payload.value;
          break;
        case "whip":
          state.weapons.whip.proficiency = action.payload.value;
          break;
        case "firearms":
          state.weapons.firearms.proficiency = action.payload.value;
          break;
        default:
          break;
      }
    },
    update(state, action) {
      //Proficiency bonus
      if (state.characterLevel <= 4) {
        state.proficiencyBonus = 2;
      } else if (state.characterLevel <= 8) {
        state.proficiencyBonus = 3;
      } else if (state.characterLevel <= 12) {
        state.proficiencyBonus = 4;
      } else if (state.characterLevel <= 16) {
        state.proficiencyBonus = 5;
      } else {
        state.proficiencyBonus = 6;
      }

      //STAT UPDATES
      //strengh stat
      state.abilities.strength.mod = Math.floor(
        (state.abilities.strength.value - 10) / 2
      );
      if (state.abilities.strength.prof === true) {
        state.abilities.strength.saveMod =
          state.abilities.strength.mod + state.proficiencyBonus;
      } else {
        state.abilities.strength.saveMod = state.abilities.strength.mod;
      }
      //dex stat
      state.abilities.dexterity.mod = Math.floor(
        (state.abilities.dexterity.value - 10) / 2
      );
      if (state.abilities.dexterity.prof === true) {
        state.abilities.dexterity.saveMod =
          state.abilities.dexterity.mod + state.proficiencyBonus;
      } else {
        state.abilities.dexterity.saveMod = state.abilities.dexterity.mod;
      }
      //con stat
      state.abilities.constitution.mod = Math.floor(
        (state.abilities.constitution.value - 10) / 2
      );
      if (state.abilities.constitution.prof === true) {
        state.abilities.constitution.saveMod =
          state.abilities.constitution.mod + state.proficiencyBonus;
      } else {
        state.abilities.constitution.saveMod = state.abilities.constitution.mod;
      }
      //int stat
      state.abilities.intelligence.mod = Math.floor(
        (state.abilities.intelligence.value - 10) / 2
      );
      if (state.abilities.intelligence.prof === true) {
        state.abilities.intelligence.saveMod =
          state.abilities.intelligence.mod + state.proficiencyBonus;
      } else {
        state.abilities.intelligence.saveMod = state.abilities.intelligence.mod;
      }
      //wisodm stat
      state.abilities.wisdom.mod = Math.floor(
        (state.abilities.wisdom.value - 10) / 2
      );
      if (state.abilities.wisdom.prof === true) {
        state.abilities.wisdom.saveMod =
          state.abilities.wisdom.mod + state.proficiencyBonus;
      } else {
        state.abilities.wisdom.saveMod = state.abilities.wisdom.mod;
      }
      //charisma stat
      state.abilities.charisma.mod = Math.floor(
        (state.abilities.charisma.value - 10) / 2
      );
      if (state.abilities.charisma.prof === true) {
        state.abilities.charisma.saveMod =
          state.abilities.charisma.mod + state.proficiencyBonus;
      } else {
        state.abilities.charisma.saveMod = state.abilities.charisma.mod;
      }

      // SKILL UPDATES
      //acrobatics
      if (state.skills.acrobatics.proficiency === 1) {
        state.skills.acrobatics.mod =
          state.abilities.dexterity.mod + state.proficiencyBonus;
      } else if (state.skills.acrobatics.proficiency === 2) {
        state.skills.acrobatics.mod =
          state.abilities.dexterity.mod + state.proficiencyBonus * 2;
      } else {
        state.skills.acrobatics.mod = state.abilities.dexterity.mod;
      }
      //animal handling
      if (state.skills.animalHandling.proficiency === 1) {
        state.skills.animalHandling.mod =
          state.abilities.wisdom.mod + state.proficiencyBonus;
      } else if (state.skills.animalHandling.proficiency === 2) {
        state.skills.animalHandling.mod =
          state.abilities.wisdom.mod + state.proficiencyBonus * 2;
      } else {
        state.skills.animalHandling.mod = state.abilities.wisdom.mod;
      }
      //arcana
      if (state.skills.arcana.proficiency === 1) {
        state.skills.arcana.mod =
          state.abilities.intelligence.mod + state.proficiencyBonus;
      } else if (state.skills.arcana.proficiency === 2) {
        state.skills.arcana.mod =
          state.abilities.intelligence.mod + state.proficiencyBonus * 2;
      } else {
        state.skills.arcana.mod = state.abilities.intelligence.mod;
      }
      // athletics
      if (state.skills.athletics.proficiency === 1) {
        state.skills.athletics.mod =
          state.abilities.strength.mod + state.proficiencyBonus;
      } else if (state.skills.athletics.proficiency === 2) {
        state.skills.athletics.mod =
          state.abilities.strength.mod + state.proficiencyBonus * 2;
      } else {
        state.skills.athletics.mod = state.abilities.strength.mod;
      }
      // deception
      if (state.skills.deception.proficiency === 1) {
        state.skills.deception.mod =
          state.abilities.charisma.mod + state.proficiencyBonus;
      } else if (state.skills.deception.proficiency === 2) {
        state.skills.deception.mod =
          state.abilities.charisma.mod + state.proficiencyBonus * 2;
      } else {
        state.skills.deception.mod = state.abilities.charisma.mod;
      }
      // history
      if (state.skills.history.proficiency === 1) {
        state.skills.history.mod =
          state.abilities.intelligence.mod + state.proficiencyBonus;
      } else if (state.skills.history.proficiency === 2) {
        state.skills.history.mod =
          state.abilities.intelligence.mod + state.proficiencyBonus * 2;
      } else {
        state.skills.history.mod = state.abilities.intelligence.mod;
      }
      // insight
      if (state.skills.insight.proficiency === 1) {
        state.skills.insight.mod =
          state.abilities.wisdom.mod + state.proficiencyBonus;
      } else if (state.skills.insight.proficiency === 2) {
        state.skills.insight.mod =
          state.abilities.wisdom.mod + state.proficiencyBonus * 2;
      } else {
        state.skills.insight.mod = state.abilities.wisdom.mod;
      }
      //intimidation
      if (state.skills.intimidation.proficiency === 1) {
        state.skills.intimidation.mod =
          state.abilities.charisma.mod + state.proficiencyBonus;
      } else if (state.skills.intimidation.proficiency === 2) {
        state.skills.intimidation.mod =
          state.abilities.charisma.mod + state.proficiencyBonus * 2;
      } else {
        state.skills.intimidation.mod = state.abilities.charisma.mod;
      }
      // investigation
      if (state.skills.investigation.proficiency === 1) {
        state.skills.investigation.mod =
          state.abilities.intelligence.mod + state.proficiencyBonus;
      } else if (state.skills.investigation.proficiency === 2) {
        state.skills.investigation.mod =
          state.abilities.intelligence.mod + state.proficiencyBonus * 2;
      } else {
        state.skills.investigation.mod = state.abilities.intelligence.mod;
      }
      // medicine
      if (state.skills.medicine.proficiency === 1) {
        state.skills.medicine.mod =
          state.abilities.wisdom.mod + state.proficiencyBonus;
      } else if (state.skills.medicine.proficiency === 2) {
        state.skills.medicine.mod =
          state.abilities.wisdom.mod + state.proficiencyBonus * 2;
      } else {
        state.skills.medicine.mod = state.abilities.wisdom.mod;
      }
      // nature
      if (state.skills.nature.proficiency === 1) {
        state.skills.nature.mod =
          state.abilities.intelligence.mod + state.proficiencyBonus;
      } else if (state.skills.nature.proficiency === 2) {
        state.skills.nature.mod =
          state.abilities.intelligence.mod + state.proficiencyBonus * 2;
      } else {
        state.skills.nature.mod = state.abilities.intelligence.mod;
      }
      // perception
      if (state.skills.perception.proficiency === 1) {
        state.skills.perception.mod =
          state.abilities.wisdom.mod + state.proficiencyBonus;
      } else if (state.skills.perception.proficiency === 2) {
        state.skills.perception.mod =
          state.abilities.wisdom.mod + state.proficiencyBonus * 2;
      } else {
        state.skills.perception.mod = state.abilities.wisdom.mod;
      }
      // performance
      if (state.skills.performance.proficiency === 1) {
        state.skills.performance.mod =
          state.abilities.charisma.mod + state.proficiencyBonus;
      } else if (state.skills.performance.proficiency === 2) {
        state.skills.performance.mod =
          state.abilities.charisma.mod + state.proficiencyBonus * 2;
      } else {
        state.skills.performance.mod = state.abilities.charisma.mod;
      }
      // persuasion
      if (state.skills.persuasion.proficiency === 1) {
        state.skills.persuasion.mod =
          state.abilities.charisma.mod + state.proficiencyBonus;
      } else if (state.skills.persuasion.proficiency === 2) {
        state.skills.persuasion.mod =
          state.abilities.charisma.mod + state.proficiencyBonus * 2;
      } else {
        state.skills.persuasion.mod = state.abilities.charisma.mod;
      }
      // religion
      if (state.skills.religion.proficiency === 1) {
        state.skills.religion.mod =
          state.abilities.intelligence.mod + state.proficiencyBonus;
      } else if (state.skills.religion.proficiency === 2) {
        state.skills.religion.mod =
          state.abilities.intelligence.mod + state.proficiencyBonus * 2;
      } else {
        state.skills.religion.mod = state.abilities.intelligence.mod;
      }
      // sleightOfHand
      if (state.skills.sleightOfHand.proficiency === 1) {
        state.skills.sleightOfHand.mod =
          state.abilities.dexterity.mod + state.proficiencyBonus;
      } else if (state.skills.sleightOfHand.proficiency === 2) {
        state.skills.sleightOfHand.mod =
          state.abilities.dexterity.mod + state.proficiencyBonus * 2;
      } else {
        state.skills.sleightOfHand.mod = state.abilities.dexterity.mod;
      }
      // stealth
      if (state.skills.stealth.proficiency === 1) {
        state.skills.stealth.mod =
          state.abilities.dexterity.mod + state.proficiencyBonus;
      } else if (state.skills.stealth.proficiency === 2) {
        state.skills.stealth.mod =
          state.abilities.dexterity.mod + state.proficiencyBonus * 2;
      } else {
        state.skills.stealth.mod = state.abilities.dexterity.mod;
      }
      // survival
      if (state.skills.survival.proficiency === 1) {
        state.skills.survival.mod =
          state.abilities.wisdom.mod + state.proficiencyBonus;
      } else if (state.skills.survival.proficiency === 2) {
        state.skills.survival.mod =
          state.abilities.wisdom.mod + state.proficiencyBonus * 2;
      } else {
        state.skills.survival.mod = state.abilities.wisdom.mod;
      }

      //hitpoints
      state.attributes.hitPoints.value =
        state.abilities.constitution.mod + state.hitDice.size;
      //initiative
      state.attributes.initiative.mod =
        state.abilities.dexterity.mod + state.attributes.initiative.bonus;
      //spellSaveDC
      if (state.class === CharacterClassNames.ARTIFICER) {
        state.spellSaveDC =
          8 + state.abilities.intelligence.mod + state.proficiencyBonus;
      } else if (state.class === CharacterClassNames.BARD) {
        state.spellSaveDC =
          8 + state.abilities.charisma.mod + state.proficiencyBonus;
      } else if (state.class === CharacterClassNames.CLERIC) {
        state.spellSaveDC =
          8 + state.abilities.wisdom.mod + state.proficiencyBonus;
      } else if (state.class === CharacterClassNames.DRUID) {
        state.spellSaveDC =
          8 + state.abilities.wisdom.mod + state.proficiencyBonus;
      } else if (state.class === CharacterClassNames.SORCERER) {
        state.spellSaveDC =
          8 + state.abilities.charisma.mod + state.proficiencyBonus;
      } else if (state.class === CharacterClassNames.WARLOCK) {
        state.spellSaveDC =
          8 + state.abilities.charisma.mod + state.proficiencyBonus;
      } else if (state.class === CharacterClassNames.WIZARD) {
        state.spellSaveDC =
          8 + state.abilities.intelligence.mod + state.proficiencyBonus;
      } else if (
        state.class === CharacterClassNames.FIGHTER &&
        state.subclass === "Eldritch Knight"
      ) {
        state.spellSaveDC =
          8 + state.abilities.intelligence.mod + state.proficiencyBonus;
      } else if (
        state.class === CharacterClassNames.MONK &&
        state.subclass === "Way of the Four Elements"
      ) {
        state.spellSaveDC =
          8 + state.abilities.wisdom.mod + state.proficiencyBonus;
      } else if (
        state.class === CharacterClassNames.PALADIN &&
        state.characterLevel >= 2
      ) {
        state.spellSaveDC =
          8 + state.abilities.charisma.mod + state.proficiencyBonus;
      } else if (
        state.class === CharacterClassNames.RANGER &&
        state.characterLevel >= 2
      ) {
        state.spellSaveDC =
          8 + state.abilities.wisdom.mod + state.proficiencyBonus;
      } else if (
        state.class === CharacterClassNames.ROGUE &&
        state.subclass === "Arcane Trickster"
      ) {
        state.spellSaveDC =
          8 + state.abilities.intelligence.mod + state.proficiencyBonus;
      } else {
        state.spellSaveDC = null;
      }

      //spell attack bonus
      if (state.class === CharacterClassNames.ARTIFICER) {
        state.spellAttackBonus =
          state.abilities.intelligence.mod + state.proficiencyBonus;
      } else if (state.class === CharacterClassNames.BARD) {
        state.spellAttackBonus =
          state.abilities.charisma.mod + state.proficiencyBonus;
      } else if (state.class === CharacterClassNames.CLERIC) {
        state.spellAttackBonus =
          state.abilities.wisdom.mod + state.proficiencyBonus;
      } else if (state.class === CharacterClassNames.DRUID) {
        state.spellAttackBonus =
          state.abilities.wisdom.mod + state.proficiencyBonus;
      } else if (state.class === CharacterClassNames.SORCERER) {
        state.spellAttackBonus =
          state.abilities.charisma.mod + state.proficiencyBonus;
      } else if (state.class === CharacterClassNames.WARLOCK) {
        state.spellAttackBonus =
          state.abilities.charisma.mod + state.proficiencyBonus;
      } else if (state.class === CharacterClassNames.WIZARD) {
        state.spellAttackBonus =
          state.abilities.intelligence.mod + state.proficiencyBonus;
      } else if (
        state.class === CharacterClassNames.FIGHTER &&
        state.subclass === "Eldritch Knight"
      ) {
        state.spellAttackBonus =
          state.abilities.intelligence.mod + state.proficiencyBonus;
      } else if (
        state.class === CharacterClassNames.MONK &&
        state.subclass === "Way of the Four Elements"
      ) {
        state.spellAttackBonus =
          state.abilities.wisdom.mod + state.proficiencyBonus;
      } else if (
        state.class === CharacterClassNames.PALADIN &&
        state.characterLevel >= 2
      ) {
        state.spellAttackBonus =
          state.abilities.charisma.mod + state.proficiencyBonus;
      } else if (
        state.class === CharacterClassNames.RANGER &&
        state.characterLevel >= 2
      ) {
        state.spellAttackBonus =
          state.abilities.wisdom.mod + state.proficiencyBonus;
      } else if (
        state.class === CharacterClassNames.ROGUE &&
        state.subclass === "Arcane Trickster"
      ) {
        state.spellAttackBonus =
          state.abilities.intelligence.mod + state.proficiencyBonus;
      } else {
        state.spellAttackBonus = null;
      }
    },
  },
});

export const charActions = charSlice.actions;
export default charSlice.reducer;
