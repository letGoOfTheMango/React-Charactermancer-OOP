import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { charActions } from "../redux/slices/charSlice";


const LanguagesSummary = (props) => {
    const languages = useSelector((state) => state.char.languages);
    
    const aarakocra = useSelector((state) => state.char.languages.aarakocra.proficiency);
    const aarakocraPot = useSelector((state) => state.char.languages.aarakocra.potentialLanguage);

    const abyssal = useSelector((state) => state.char.languages.abyssal.proficiency);
    const abyssalPot = useSelector((state) => state.char.languages.abyssal.potentialLanguage);
    
    const aquan = useSelector((state) => state.char.languages.aquan.proficiency);
    const aquanPot = useSelector((state) => state.char.languages.aquan.potentialLanguage);
    
    const auran = useSelector((state) => state.char.languages.auran.proficiency);
    const auranPot = useSelector((state) => state.char.languages.auran.potentialLanguage);
    
    const celestial = useSelector((state) => state.char.languages.celestial.proficiency);
    const celestialPot = useSelector((state) => state.char.languages.celestial.potentialLanguage);
    
    const common = useSelector((state) => state.char.languages.common.proficiency);
    const commonPot = useSelector((state) => state.char.languages.common.potentialLanguage);
    
    const deepSpeech = useSelector((state) => state.char.languages.deepSpeech.proficiency);
    const deepSpeechPot = useSelector((state) => state.char.languages.deepSpeech.potentialLanguage);
    
    const draconic = useSelector((state) => state.char.languages.draconic.proficiency);
    const draconicPot = useSelector((state) => state.char.languages.draconic.potentialLanguage);
    
    const druidic = useSelector((state) => state.char.languages.druidic.proficiency);
    const druidicPot = useSelector((state) => state.char.languages.druidic.potentialLanguage);
    
    const dwarvish = useSelector((state) => state.char.languages.dwarvish.proficiency);
    const dwarvishPot = useSelector((state) => state.char.languages.dwarvish.potentialLanguage);
    
    const elvish = useSelector((state) => state.char.languages.elvish.proficiency);
    const elvishPot = useSelector((state) => state.char.languages.elvish.potentialLanguage);
    
    const giant = useSelector((state) => state.char.languages.giant.proficiency);
    const giantPot = useSelector((state) => state.char.languages.giant.potentialLanguage);
    
    const gith = useSelector((state) => state.char.languages.gith.proficiency);
    const githPot = useSelector((state) => state.char.languages.gith.potentialLanguage);
    
    const gnoll = useSelector((state) => state.char.languages.gnoll.proficiency);
    const gnollPot = useSelector((state) => state.char.languages.gnoll.potentialLanguage);
    
    const gnomish = useSelector((state) => state.char.languages.gnomish.proficiency);
    const gnomishPot = useSelector((state) => state.char.languages.gnomish.potentialLanguage);
    
    const goblin = useSelector((state) => state.char.languages.goblin.proficiency);
    const goblinPot = useSelector((state) => state.char.languages.goblin.potentialLanguage);
    
    const halfling = useSelector((state) => state.char.languages.halfling.proficiency);
    const halflingPot = useSelector((state) => state.char.languages.halfling.potentialLanguage);
    
    const ignan = useSelector((state) => state.char.languages.ignan.proficiency);
    const ignanPot = useSelector((state) => state.char.languages.ignan.potentialLanguage);
    
    const infernal = useSelector((state) => state.char.languages.infernal.proficiency);
    const infernalPot = useSelector((state) => state.char.languages.infernal.potentialLanguage);
    
    const orc = useSelector((state) => state.char.languages.orc.proficiency);
    const orcPot = useSelector((state) => state.char.languages.orc.potentialLanguage);
    
    const primordial = useSelector((state) => state.char.languages.primordial.proficiency);
    const primordialPot = useSelector((state) => state.char.languages.primordial.potentialLanguage);
    
    const sylvan = useSelector((state) => state.char.languages.sylvan.proficiency);
    const sylvanPot = useSelector((state) => state.char.languages.sylvan.potentialLanguage);
    
    const terran = useSelector((state) => state.char.languages.terran.proficiency);
    const terranPot = useSelector((state) => state.char.languages.terran.potentialLanguage);
    
    const thievesCant = useSelector((state) => state.char.languages.thievesCant.proficiency);
    const thievesCantPot = useSelector((state) => state.char.languages.thievesCant.potentialLanguage);
    
    const undercommon = useSelector((state) => state.char.languages.undercommon.proficiency);
    const undercommonPot = useSelector((state) => state.char.languages.undercommon.potentialLanguage);
       
    

  return <><p>Languages: {}</p></>;
};
export default LanguagesSummary;
