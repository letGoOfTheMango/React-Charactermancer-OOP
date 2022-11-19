/* import { useEffect, useRef, useState } from "react";
 */ import { /* useDispatch ,*/ useSelector } from "react-redux";
 import { getNumber } from "../../scripts/helperFunctions";

const ShortSummary = (props) => {
  const characterName = useSelector((state) => state.char.name);
  const playerName = useSelector((state) => state.char.playerName);
  const race = useSelector((state) => state.char.race);
  const background = useSelector((state) => state.char.background);
  const _class = useSelector((state) => state.char.class);
  const subclass = useSelector((state) => state.char.subclass);
  const characterLevel = useSelector((state) => state.char.characterLevel);
  const hp = useSelector((state) => state.char.attributes.hitPoints.value);
  const ini = useSelector((state) => state.char.attributes.initiative.mod);
  const profBonus = useSelector((state) => state.char.proficiencyBonus);
  let classNode = <p> Class: {_class}</p>;
  if (subclass !== ""){
    classNode = <p> Class: {_class} ({subclass})</p>;
  }
  return (
    <>
      {playerName && <p>Player name: {playerName}</p>}
      {characterName && <p>Character name: {characterName}</p>}
      {race && <p>Race: {race}</p>}
      {background && <p>Background: {background}</p>}
      {!_class ? null : classNode}
      <p>Level: {characterLevel}</p>
      {hp && <p>Hitpoints: {hp}</p>}
      <p>Initiative: {getNumber(ini)}</p>
      <p>Proficiency bonus: {getNumber(profBonus)}</p>
    </>
  );
};
export default ShortSummary;
