import { useSelector } from "react-redux";
import styled from "styled-components";

const Ul = styled.ul`
  list-style-type: none;
`;

const SpellsSummary = (props) => {
  const cantrips = useSelector((state) => state.char.spells.level0.spells);
  const firstLvl = useSelector((state) => state.char.spells.level1.spells);
  const secondLvl = useSelector((state) => state.char.spells.level2.spells);
  const spellSave = useSelector((state) => state.char.spellSaveDC);
  const spellAttackBonus = useSelector((state) => state.char.spellAttackBonus);

  if (
    cantrips.length === 0 &&
    firstLvl.length === 0 &&
    secondLvl.length === 0
  ) {
    return null;
  }

  return (
    <div>
      <h3>Spells:</h3>
      {spellSave && <p>Spell save DC: {spellSave}</p>}
      {spellAttackBonus && <p>Spell attack bonus: {spellAttackBonus}</p>}
      {cantrips.length >= 1 && (
        <div>
          <h4>Cantrips:</h4>
          <Ul>
            {cantrips.map((cantrip) => (
              <li key={Math.random() * 10}>{cantrip}</li>
            ))}
          </Ul>
        </div>
      )}
      {firstLvl.length >= 1 && (
        <div>
          <h4>1st level:</h4>
          <Ul>
            {firstLvl.map((firstLvl) => (
              <li key={Math.random() * 10}>{firstLvl}</li>
            ))}
          </Ul>
        </div>
      )}
      {secondLvl.length >= 1 && (
        <div>
          <h4>2nd level:</h4>
          <Ul>
            {secondLvl.map((secondLvl) => (
              <li key={Math.random() * 10}>{secondLvl}</li>
            ))}
          </Ul>
        </div>
      )}
    </div>
  );
};
export default SpellsSummary;
