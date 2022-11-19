import styled from "styled-components";
import ShortSummary from "./ShortSummary";
import StatsSummary from "./StatsSummary";
import SkillSummary from "./SkillSummary";
import SpellsSummary from "./SpellsSummary";
import AttacksSummary from "./AttacksSummary";
import ProficienciesSummary from "./ProficienciesSummary";

const WrapperDiv = styled.div`
  float: left;
  /* position: relative; */ // why no sticky?
  padding: 0 1%;
  width: 15%;
  height: 95vh;
  overflow-x: hidden;
  overflow-y: scroll;
  scrollbar-color: lightyellow lightyellow;
`;

const SummaryElement = (props) => {
  return (
    <WrapperDiv>
      <h2>Character summary:</h2>
      <ShortSummary />
      <StatsSummary />
      <SkillSummary />
      <ProficienciesSummary />
      <SpellsSummary />
      <AttacksSummary />
    </WrapperDiv>
  );
};
export default SummaryElement;
