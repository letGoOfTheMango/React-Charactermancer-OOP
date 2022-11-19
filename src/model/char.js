export const char = {
    abilities: {
      str: {
        value: 8,
        proficient: false,
        bonuses: {
          check: "",
          save: "",
        },
      },
      dex: {
        value: 8,
        proficient: false,
        bonuses: {
          check: "",
          save: "",
        },
      },
      con: {
        value: 8,
        proficient: false,
        bonuses: {
          check: "",
          save: "",
        },
      },
      int: {
        value: 8,
        proficient: false,
        bonuses: {
          check: "",
          save: "",
        },
      },
      wis: {
        value: 8,
        proficient: false,
        bonuses: {
          check: "",
          save: "",
        },
      },
      cha: {
        value: 8,
        proficient: false,
        bonuses: {
          check: "",
          save: "",
        },
      },
    },
    attributes: {
      ac: {
        flat: 10,
        calc: "flat",
        formula: "10",
      },
      hp: {
        value: 10,
        min: 0,
        max: 10,
        temp: null,
        tempmax: null,
      },
      init: {
        value: 0,
        bonus: 0,
      },
      movement: {
        burrow: null,
        climb: null,
        fly: null,
        swim: null,
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
        special: "",
      },
      spellcasting: "",
      death: {
        success: 0,
        failure: 0,
      },
      exhaustion: 0,
      inspiration: false,
      prof: 2,
    },
    details: {
      biography: {
        value: '<p></p>',
        public: "",
      },
      alignment: "",
      race: "",
      background: "",
      class: "",
      xp: {
        value: 0,
        min: 0,
        max: 100,
        pct: 0,
      },
      appearance: "",
      trait: "",
      ideal: "",
      bond: "",
      flaw: "",
    },
    traits: {
      size: "",
      di: { //damage immunities
        value: [],
        custom: "",
      },
      dr: { //damage reductions
        value: [],
        custom: "",
      },
      dv: { //damage vulnerabilities
        value: [],
        custom: "",
      },
      ci: { //condition immunities
        value: [],
        custom: "",
      },
      languages: {
        value: ["common"],
        custom: "",
      },
      weaponProf: {
        value: ["mar", "sim"], // "mar", "sim" ,"club","dagger","dart","greatclub","handaxe","javelin","lightcrossbow","lighthammer","mace","quarterstaff","shortbow","sickle","sling","spear","battleaxe","blowgun","flail","glaive","greataxe","greatsword","halberd","handcrossbow","heavycrossbow","lance","longbow","longsword","maul","morningstar","net","pike","rapier","scimitar","shortsword","trident","warpick","warhammer","whip" 
        custom: "",
      },
      armorProf: {
        value: ["lgt", "med", "shl"],
        custom: "",
      },
      toolProf: {
        value: ["disg", "thief"],
        custom:
          "three musical instruments of your choice (bag pipes, flute, shawm)",
      },
    },
    currency: {
      pp: 0,
      gp: 40,
      ep: null,
      sp: null,
      cp: 0,
    },
    skills: {
      acr: {
        value: 1,
        ability: "dex",
        bonuses: {
          check: "",
          passive: "",
        },
      },
      ani: {
        value: 0,
        ability: "wis",
        bonuses: {
          check: "",
          passive: "",
        },
      },
      arc: {
        value: 0,
        ability: "int",
        bonuses: {
          check: "",
          passive: "",
        },
      },
      ath: {
        value: 0,
        ability: "str",
        bonuses: {
          check: "",
          passive: "",
        },
      },
      dec: {
        value: 2,
        ability: "cha",
        bonuses: {
          check: "",
          passive: "",
        },
      },
      his: {
        value: 0,
        ability: "int",
        bonuses: {
          check: "",
          passive: "",
        },
      },
      ins: {
        value: 1,
        ability: "wis",
        bonuses: {
          check: "",
          passive: "",
        },
      },
      itm: {
        value: 0,
        ability: "cha",
        bonuses: {
          check: "",
          passive: "",
        },
      },
      inv: {
        value: 1,
        ability: "int",
        bonuses: {
          check: "",
          passive: "",
        },
      },
      med: {
        value: 0,
        ability: "wis",
        bonuses: {
          check: "",
          passive: "",
        },
      },
      nat: {
        value: 0,
        ability: "int",
        bonuses: {
          check: "",
          passive: "",
        },
      },
      prc: {
        value: 1,
        ability: "wis",
        bonuses: {
          check: "",
          passive: "",
        },
      },
      prf: {
        value: 1,
        ability: "cha",
        bonuses: {
          check: "",
          passive: "",
        },
      },
      per: {
        value: 2,
        ability: "cha",
        bonuses: {
          check: "",
          passive: "",
        },
      },
      rel: {
        value: 0,
        ability: "int",
        bonuses: {
          check: "",
          passive: "",
        },
      },
      slt: {
        value: 1,
        ability: "dex",
        bonuses: {
          check: "",
          passive: "",
        },
      },
      ste: {
        value: 1,
        ability: "dex",
        bonuses: {
          check: "",
          passive: "",
        },
      },
      sur: {
        value: 0,
        ability: "wis",
        bonuses: {
          check: "",
          passive: "",
        },
      },
    },
    spells: {
      spell1: {
        value: 4,
        override: null,
        max: 4,
      },
      spell2: {
        value: 2,
        override: null,
        max: 2,
      },
      spell3: {
        value: 0,
        override: null,
      },
      spell4: {
        value: 0,
        override: null,
      },
      spell5: {
        value: 0,
        override: null,
      },
      spell6: {
        value: 0,
        override: null,
      },
      spell7: {
        value: 0,
        override: null,
      },
      spell8: {
        value: 0,
        override: null,
      },
      spell9: {
        value: 0,
        override: null,
      },
      pact: {
        value: 1,
        override: null,
        max: 1,
      },
    },
    bonuses: {
      mwak: {
        attack: "",
        damage: "",
      },
      rwak: {
        attack: "",
        damage: "",
      },
      msak: {
        attack: "",
        damage: "",
      },
      rsak: {
        attack: "",
        damage: "",
      },
      abilities: {
        check: "",
        save: "",
        skill: "",
      },
      spell: {
        dc: "",
      },
    },
  }