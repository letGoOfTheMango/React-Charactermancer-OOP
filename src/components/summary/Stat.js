// import { charActions } from "../redux/slices/charSlice";
import styled from "styled-components";

const WrapperDiv = styled.div`
  margin: 0;
  width: 15%;
  border: solid 1px black;
`;

const StatName = styled.p`
  margin: 0;
  text-align: center;
  font-weight: bold;
  font-size: 1em;
`;
const StatTotal = styled.p`
  margin: 0;
  text-align: center;
  font-weight: bold;
  font-size: 1.4em;
`;
const StatMod = styled.p`
  margin: 0;
  text-align: center;
  font-weight: bold;
  font-size: 0.9em;
`;

const Stat = (props) => {
  return (
    <WrapperDiv>
      <StatName>{props.stat}</StatName>
      <StatTotal>{props.total}</StatTotal>
      <StatMod>{props.mod}</StatMod>
    </WrapperDiv>
  );
};
export default Stat;
