import { useSelector } from "react-redux";
import styled from "styled-components";
// import { charActions } from "../redux/slices/charSlice";

import Stat from "./Stat";
const WrapperDiv = styled.div`
width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3%;
`;
const Headline = styled.h3`
    font-family: 'MrsEavesSmallCaps';
`;

const StatsSummary = (props) => {
  const strengthTotal = useSelector((state) => state.char.abilities.strength.value);
  const strengthMod = useSelector((state) => state.char.abilities.strength.mod);
  const dexterityTotal = useSelector((state) => state.char.abilities.dexterity.value);
  const dexterityMod = useSelector((state) => state.char.abilities.dexterity.mod);
  const constitutionTotal = useSelector((state) => state.char.abilities.constitution.value);
  const constitutionMod = useSelector((state) => state.char.abilities.constitution.mod);
  const intelligenceTotal = useSelector((state) => state.char.abilities.intelligence.value);
  const intelligenceMod = useSelector((state) => state.char.abilities.intelligence.mod);
  const wisdomTotal = useSelector((state) => state.char.abilities.wisdom.value);
  const wisdomMod = useSelector((state) => state.char.abilities.wisdom.mod);
  const charismaTotal = useSelector((state) => state.char.abilities.charisma.value);
  const charismaMod = useSelector((state) => state.char.abilities.charisma.mod);
  const pp = useSelector((state) => state.char.passivePerception);
  return (
    <>
      <div>
        <Headline>Ability Scores:</Headline>
        <WrapperDiv>
        <Stat stat="Str" total={strengthTotal} mod={strengthMod}/>
        <Stat stat="Dex" total={dexterityTotal} mod={dexterityMod}/>
        <Stat stat="Con" total={constitutionTotal} mod={constitutionMod}/>
        <Stat stat="Int" total={intelligenceTotal} mod={intelligenceMod}/>
        <Stat stat="Wis" total={wisdomTotal} mod={wisdomMod}/>
        <Stat stat="Cha" total={charismaTotal} mod={charismaMod}/>
        </WrapperDiv>
        <p>Passive perception: {pp}</p>
      </div>
    </>
  );
};
export default StatsSummary;
