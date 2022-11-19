/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { charActions } from "../../redux/slices/charSlice";
import styled from "styled-components";
import { getNumber } from "../../scripts/helperFunctions";

const Ul = styled.ul`
list-style-type: none;
`
const SkillSummary = (props) => {
  const acrobatics = useSelector((state) => state.char.skills.acrobatics.mod);
  const acrobaticsProf = useSelector((state) => state.char.skills.acrobatics.proficiency);
  const acrobaticsPot = useSelector((state) => state.char.skills.acrobatics.potentialSkill);

  const animalHandling = useSelector((state) => state.char.skills.animalHandling.mod);
  const animalHandlingProf = useSelector((state) => state.char.skills.animalHandling.proficiency);
  const animalHandlingPot = useSelector((state) => state.char.skills.animalHandling.potentialSkill);

  const arcana = useSelector((state) => state.char.skills.arcana.mod);
  const arcanaProf = useSelector((state) => state.char.skills.arcana.proficiency);
  const arcanaPot = useSelector((state) => state.char.skills.arcana.potentialSkill);

  const athletics = useSelector((state) => state.char.skills.athletics.mod);
  const athleticsProf = useSelector((state) => state.char.skills.athletics.proficiency);
  const athleticsPot = useSelector((state) => state.char.skills.athletics.potentialSkill);

  const deception = useSelector((state) => state.char.skills.deception.mod);
  const deceptionProf = useSelector((state) => state.char.skills.deception.proficiency);
  const deceptionPot = useSelector((state) => state.char.skills.deception.potentialSkill);

  const history = useSelector((state) => state.char.skills.history.mod);
  const historyProf = useSelector((state) => state.char.skills.history.proficiency);
  const historyPot = useSelector((state) => state.char.skills.history.potentialSkill);

  const insight = useSelector((state) => state.char.skills.insight.mod);
  const insightProf = useSelector((state) => state.char.skills.insight.proficiency);
  const insightPot = useSelector((state) => state.char.skills.insight.potentialSkill);

  const intimidation = useSelector((state) => state.char.skills.intimidation.mod);
  const intimidationProf = useSelector((state) => state.char.skills.intimidation.proficiency);
  const intimidationPot = useSelector((state) => state.char.skills.intimidation.potentialSkill);

  const investigation = useSelector((state) => state.char.skills.investigation.mod);
  const investigationProf = useSelector((state) => state.char.skills.investigation.proficiency);
  const investigationPot = useSelector((state) => state.char.skills.investigation.potentialSkill);

  const medicine = useSelector((state) => state.char.skills.medicine.mod);
  const medicineProf = useSelector((state) => state.char.skills.medicine.proficiency);
  const medicinePot = useSelector((state) => state.char.skills.medicine.potentialSkill);

  const nature = useSelector((state) => state.char.skills.nature.mod);
  const natureProf = useSelector((state) => state.char.skills.nature.proficiency);
  const naturePot = useSelector((state) => state.char.skills.nature.potentialSkill);

  const perception = useSelector((state) => state.char.skills.perception.mod);
  const perceptionProf = useSelector((state) => state.char.skills.perception.proficiency);
  const perceptionPot = useSelector((state) => state.char.skills.perception.potentialSkill);

  const performance = useSelector((state) => state.char.skills.performance.mod);
  const performanceProf = useSelector((state) => state.char.skills.performance.proficiency);
  const performancePot = useSelector((state) => state.char.skills.performance.potentialSkill);

  const persuasion = useSelector((state) => state.char.skills.persuasion.mod);
  const persuasionProf = useSelector((state) => state.char.skills.persuasion.proficiency);
  const persuasionPot = useSelector((state) => state.char.skills.persuasion.potentialSkill);

  const religion = useSelector((state) => state.char.skills.religion.mod);
  const religionProf = useSelector((state) => state.char.skills.religion.proficiency);
  const religionPot = useSelector((state) => state.char.skills.religion.potentialSkill);

  const sleightOfHand = useSelector((state) => state.char.skills.sleightOfHand.mod);
  const sleightOfHandProf = useSelector((state) => state.char.skills.sleightOfHand.proficiency);
  const sleightOfHandPot = useSelector((state) => state.char.skills.sleightOfHand.potentialSkill);

  const stealth = useSelector((state) => state.char.skills.stealth.mod);
  const stealthProf = useSelector((state) => state.char.skills.stealth.proficiency);
  const stealthPot = useSelector((state) => state.char.skills.stealth.potentialSkill);

  const survival = useSelector((state) => state.char.skills.survival.mod);
  const survivalProf = useSelector((state) => state.char.skills.survival.proficiency);
  const survivalPot = useSelector((state) => state.char.skills.survival.potentialSkill);


  return (
    <div>
      <h3>Skills:</h3>
      <Ul>
        <li>Acrobatics: {getNumber(acrobatics)}</li>
        <li>Animal handling: {getNumber(animalHandling)}</li>
        <li>Arcana: {getNumber(arcana)}</li>
        <li>Athletics: {getNumber(athletics)}</li>
        <li>Deception: {getNumber(deception)}</li>
        <li>History: {getNumber(history)}</li>
        <li>Insight: {getNumber(insight)}</li>
        <li>Intimidation: {getNumber(intimidation)}</li>
        <li>Investigation: {getNumber(investigation)}</li>
        <li>Medicine: {getNumber(medicine)}</li>
        <li>Nature: {getNumber(nature)}</li>
        <li>Perception: {getNumber(perception)}</li>
        <li>Performance: {getNumber(performance)}</li>
        <li>Persuasion: {getNumber(persuasion)}</li>
        <li>Religion: {getNumber(religion)}</li>
        <li>Sleight of hand: {getNumber(sleightOfHand)}</li>
        <li>Stealth: {getNumber(stealth)}</li>
        <li>Survival: {getNumber(survival)}</li>
      </Ul>
    </div>
  );
};
export default SkillSummary;
