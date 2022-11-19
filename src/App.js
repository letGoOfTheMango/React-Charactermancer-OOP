import styled from "styled-components";
import "./App.css";
import SummaryElement from "./components/summary/SummaryElement";
import img from "./assets/bg.webp";
import GlobalFonts from "./fonts/fonts";
import Navbar from "./components/UI/Navbar";
// import { useSelector, useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { charActions } from "./redux/slices/charSlice";
import Test from "./components/TestComponent";
import SkillsProfSelector from "./components/UI/SkillsProfSelector";
import ToolsProfSelector from "./components/UI/ToolsProfSelector";
import WeaponsProfSelector from "./components/UI/WeaponsProfSelector";

const BackgroundDiv = styled.div`
  /* The image used */
  background-image: url(${img});
  /* Full height */
  height: 100%;
  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* Turn off parallax scrolling for all tablets and phones. Increase/decrease the pixels if needed */
  @media only screen and (max-device-width: 1366px) {
    .parallax {
      background-attachment: scroll;
    }
  }
`;

function App() {
  // const char = useSelector((state) => state.char);
  // const dispatch = useDispatch(); // auto update?
  // useEffect(() => {
  //   dispatch(charActions.update);
  //   console.log(char)
  // }, [dispatch, char]);
  return (
    <BackgroundDiv>
      <GlobalFonts />
      <Navbar />
      <SummaryElement />
      <Test />
      <SkillsProfSelector />
      <ToolsProfSelector />
      <WeaponsProfSelector />
    </BackgroundDiv>
  );
}

export default App;
