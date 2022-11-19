/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  name: "Daniel",
  level: 1,
  class: "",
  features: [],
  abilities: {
    strength:{
      value: 8,
      mod: -1,
      prof: false,
      saveMod: -1
    },
    dexterity:{
      value: 8,
      mod: -1,
      prof: false,
      saveMod: -1
    },
    constitution:{
      value: 8,
      mod: -1,
      prof: false,
      saveMod: -1
    },
    wisdom:{
      value: 8,
      mod: -1,
      prof: false,
      saveMod: -1
    },
    intelligence:{
      value: 8,
      mod: -1,
      prof: false,
      saveMod: -1
    },
    charisma:{
      value: 8,
      mod: -1,
      prof: false,
      saveMod: -1
    }
  },
  _armorProficiencies: {
    none: true,
    light: false,
    medium: false,
    heavy: false,
    shields: false,
  },
  languages: [],
  skills: [1,2],
  tools: [],
};
export const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeLevel(state, action) {},
    changeClass(state, action) {},
    changeFeatures(state, action) {},
    changeAbilites(state, action) {
      switch (action.payload.ability) {
        case "strength":
          state.abilities.strength.value +=action.payload.value;
          state.abilities.strength.mod = Math.floor((state.abilities.strength.value - 10) / 2);
          if (state.abilities.strength.prof === true) {
            state.abilities.strength.saveMod = state.abilities.strength.mod + 2;
        } else {
          state.abilities.strength.saveMod = state.abilities.strength.mod
        }
          break;
          case "dexterity":
          state.abilities.dexterity.value +=action.payload.value;
          state.abilities.dexterity.mod = Math.floor((state.abilities.dexterity.value - 10) / 2);
          if (state.abilities.dexterity.prof === true) {
            state.abilities.dexterity.saveMod = state.abilities.dexterity.mod + 2;
        } else {
          state.abilities.dexterity.saveMod = state.abilities.dexterity.mod
        }
          break;
          case "constitution":
          state.abilities.constitution.value +=action.payload.value;
          state.abilities.constitution.mod = Math.floor((state.abilities.constitution.value - 10) / 2);
          if (state.abilities.constitution.prof === true) {
            state.abilities.constitution.saveMod = state.abilities.constitution.mod + 2;
        } else {
          state.abilities.constitution.saveMod = state.abilities.constitution.mod
        }
          break;
          case "wisdom":
          state.abilities.wisdom.value +=action.payload.value;
          state.abilities.wisdom.mod = Math.floor((state.abilities.wisdom.value - 10) / 2);
          if (state.abilities.wisdom.prof === true) {
            state.abilities.wisdom.saveMod = state.abilities.wisdom.mod + 2;
        } else {
          state.abilities.wisdom.saveMod = state.abilities.wisdom.mod
        }
          break;
          case "intelligence":
          state.abilities.intelligence.value +=action.payload.value;
          state.abilities.intelligence.mod = Math.floor((state.abilities.intelligence.value - 10) / 2);
          if (state.abilities.intelligence.prof === true) {
            state.abilities.intelligence.saveMod = state.abilities.intelligence.mod + 2;
        } else {
          state.abilities.intelligence.saveMod = state.abilities.intelligence.mod
        }
          break;
          case "charisma":
          state.abilities.charisma.value +=action.payload.value;
          state.abilities.charisma.mod = Math.floor((state.abilities.charisma.value - 10) / 2);
          if (state.abilities.charisma.prof === true) {
            state.abilities.charisma.saveMod = state.abilities.charisma.mod + 2;
        } else {
          state.abilities.charisma.saveMod = state.abilities.charisma.mod
        }
          break;
      
        default:
          break;
      }
      
    },
    changeArmorProficiencies(state, action) {},
    changeLanguages(state, action) {},
    changeSKills(state, action) {},
    changeTools(state, action) {},
  },
});

export const testActions = testSlice.actions;
export default testSlice.reducer;
