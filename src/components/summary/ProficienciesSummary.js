// import { useSelector } from "react-redux";
import styled from "styled-components";
import ToolsSummary from "./ToolsSummary";
import WeaponsSummary from "./WeaponsSummary";
const Ul = styled.ul`
list-style-type: none;
`

const ProficienciesSummary = (props) => {
  // const property = useSelector((state) => state.char.name);
  return <>                <div>
  <h3>Proficiencies:</h3>
  <div>
      <Ul>
          <WeaponsSummary/>
          <li>Armor: {}</li>
          <ToolsSummary />
          <li>Languages: {}</li>
      </Ul>
  </div>
  </div></>;
};
export default ProficienciesSummary;
