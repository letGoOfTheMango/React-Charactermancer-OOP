import { useSelector } from "react-redux";


const WeaponsSummary = (props) => {
  const weapons = Object.entries(useSelector((state) => state.char.weapons)).filter(weapon => weapon[1].potentialWeaponProficiency === true);
  const list = weapons.filter(weapon => weapon[1].proficiency === true).map(weapon => weapon[1].name).join(", ");
  return (<li>Weapons: {list}</li>
  );
};
export default WeaponsSummary;
