import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { charActions } from "../../redux/slices/charSlice";
import { getElementId } from "../../scripts/helperFunctions";
import { capitalize } from "../../scripts/helperFunctions";

const ToolsDiv = styled.div`
  max-height: 300px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Checkbox = styled.input`
  margin: 0.4rem;
  text-transform: capitalize;
`;

const WrapperDiv = styled.div`
  max-height: 50px;
  max-width: 250px;
`;

const P = styled.p`
color: green;
`;

const WeaponsProfSelector = (props) => {
  const dispatch = useDispatch();
  const weaponsProfChangeHandler = (event) => {
    let bool;
    if (event.target.checked) {
      bool = true;
    } else {
      bool = false;
    }
    dispatch(
      charActions.changeWeaponProficiencies({
        weapon: event.target.id,
        value: bool,
      })
    );
    dispatch(charActions.update());
  };
  const weapons = Object.entries(useSelector((state) => state.char.weapons));
  const weaponsToChoose = useSelector((state) => state.char.weaponsToChoose);
  const stillToPick = weaponsToChoose - tools.filter(tool => tool[1].chosen === true).length;

  const possibleTools = tools.filter(
    (tool) => tool[1].potentialToolProficiency === true
  );
  if (possibleTools.length === 0) {
    return null;
  }
  const toolsList = possibleTools.map((tool) => (
    <WrapperDiv key={getElementId()}>
      <Checkbox
        type="checkbox"
        id={tool[0]}
        name={tool[0]}
        key={getElementId()}
        onChange={weaponsProfChangeHandler}
        checked={tool[1].chosen}
        disabled={stillToPick <= 0 && !tool[1].chosen}
      />
      <label htmlFor={tool[0]} key={getElementId()}>
        {capitalize(tool[1].name)}
      </label>
    </WrapperDiv>
  ));
  let toolsMessage = <p>You can still pick {stillToPick} out of a total of {weaponsToChoose} tool proficiencies.</p>;
  if (stillToPick === 0) {
    toolsMessage = <P>You picked all your tools.</P>
  }

  return (
    <ToolsDiv>
      <h2>Available weapon proficiencies:</h2>
      {toolsMessage}
      {toolsList}
    </ToolsDiv>
  );
};
export default WeaponsProfSelector;