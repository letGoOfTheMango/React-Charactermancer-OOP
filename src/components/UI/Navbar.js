import styled from "styled-components";

const Nav = styled.nav`
  height: 50px;
  background-color: transparent;
  display: flex;
  justify-content: space-around;
  z-index: 10;
  border: solid 2px black;
  padding: 1rem;
`;

const Navlink = styled.a`
  color: #58180d;
  border: solid 2px #58180d;
  font-family: "MrsEavesSmallCaps";
  font-weight: bold;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 2rem;
  cursor: not-allowed;
`;

const Navbar = (props) => {
  return (
    <Nav>
      <Navlink>Intro</Navlink>
      <Navlink>Class</Navlink>
      <Navlink>Race</Navlink>
      <Navlink>Background</Navlink>
      <Navlink>Inventory</Navlink>
      <Navlink>Stats</Navlink>
      <Navlink>Character details</Navlink>
    </Nav>
  );
};
export default Navbar;
