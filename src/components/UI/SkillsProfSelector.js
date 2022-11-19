import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { charActions } from "../../redux/slices/charSlice";
import { getElementId } from "../../scripts/helperFunctions";
import { capitalize } from "../../scripts/helperFunctions";

const SkillsDiv = styled.div`
  max-height: 300px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Checkbox = styled.input`
  margin: 0.4rem;
`;

const WrapperDiv = styled.div`
  max-height: 50px;
  max-width: 150px;
`;
const P = styled.p`
color: green;
`;

const SkillsProfSelector = (props) => {
  const dispatch = useDispatch();
  const skillProfChangeHandler = (event) => {
    let bool;
    if (event.target.checked) {
      bool = 1;
    } else {
      bool = 0;
    }
    dispatch(
      charActions.changeSkillProficiencies({
        skill: event.target.id,
        value: bool,
      })
    );
    dispatch(charActions.update());
  };
  const skills = Object.entries(useSelector((state) => state.char.skills));
  const skillsToChoose = useSelector((state) => state.char.skillsToChoose);
  const stillToPick = skillsToChoose - skills.filter(skill => skill[1].chosen === true).length;

  const possibleSkills = skills.filter(
    (skill) => skill[1].potentialSkill === true
  );
  if (possibleSkills.length === 0) {
    return null;
  }
  const skillsList = possibleSkills.map((skill) => (
    <WrapperDiv key={getElementId()}>
      <Checkbox
        type="checkbox"
        id={skill[0]}
        name={skill[0]}
        key={getElementId()}
        onChange={skillProfChangeHandler}
        checked={skill[1].chosen}
        disabled={stillToPick <= 0 && !skill[1].chosen}
      />
      <label htmlFor={skill[0]} key={getElementId()}>
        {capitalize(skill[1].name)}
      </label>
    </WrapperDiv>
  ));
  let skillsMessage = <p>You can still pick {stillToPick} out of a total of {skillsToChoose} skills.</p>;
  if (stillToPick === 0) {
    skillsMessage = <P>You picked all your skills.</P>
  }

  return (
    <SkillsDiv>
      <h2>Available skills:</h2>
      {skillsMessage}
      {skillsList}
    </SkillsDiv>
  );
};
export default SkillsProfSelector;