import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavSection = styled.nav`
  display: flex;
  margin: 24px 0;
  height: 72px;
  text-align: center;
  color: darkslategary;
  background-color: var(--color-light-blue-2);
  a {
    padding: 12px;
    border-radius: 12px;
    opacity: 0.5;
    &.active,
    &:hover {
      font-weight: 600;
      opacity: 1;
    }
  }
`;

const Navbar = () => {
  return (
    <NavSection>
      <NavLink to="/signin">Sign In</NavLink>
      <NavLink to="/">
        <h1>Memo App</h1>
      </NavLink>
      <NavLink to="/memo">Memo</NavLink>
    </NavSection>
  );
};

export default Navbar;
