import React from "react";
import styled from "styled-components";

const NavSection = styled.nav`
  margin: 24px 0;
  height: 48px;
  line-height: 48px;
  text-align: center;
  color: darkslategary;
  background-color: #f0f8ff;
`;

const Navbar = () => {
  return (
    <NavSection>
      <h1>Memo App</h1>
    </NavSection>
  );
};

export default Navbar;
