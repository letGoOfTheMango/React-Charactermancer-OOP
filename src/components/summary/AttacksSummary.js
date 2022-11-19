import { useSelector } from "react-redux";
import styled from "styled-components";
import { getNumber } from "../../scripts/helperFunctions";

const Ul = styled.ul`
  list-style-type: none;
`;
const Li = styled.li`
padding: 2% 0px;
`;

const AttacksSummary = (props) => {
  const attacks = useSelector((state) => state.char.attacks);
  if (attacks.length === 0) {
    return null;
  }

  return (
    <>
      <h3>Attacks: </h3>
      <Ul>{attacks.map((attack) => <Li key={Math.random()*10}><strong>{attack.name}</strong>. {attack.attackType}:<br/>
      {getNumber(attack.toHit)} to hit, reach {attack.reach}ft., {attack.target}.<br/>
      Hit: {attack.damageDice} {getNumber(attack.dependantStatMod)} {attack.damageType}</Li>)}</Ul>
    </>
  );
};
export default AttacksSummary;

// {
//     name:"",
//     attackType: "", // Melee Weapon Attack, Ranged Weapon Attack
// dependantStat:"str",
//     toHit:0,
//     reach:0,
//     target:"",
//     hit: "Hit: ",// dice + mod
//     damageType:"",
// }
