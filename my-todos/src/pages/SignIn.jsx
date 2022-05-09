import React, { useRef } from "react";
import styled from "styled-components";

const SignInContainer = styled.div`
  width: 420px;
  form {
    padding: 60px;
    border-radius: 8px;
    background-color: var(--color-light-blue-1);
    * {
      width: 100%;
      display: block;
    }
    h2 {
      margin-bottom: 12px;
      text-align: center;
    }
  }
`;

const SignIn = () => {
  const formRef = useRef(null);
  return (
    <SignInContainer>
      <form action="submit" ref={formRef}>
        <h2>Sign In</h2>
        <label htmlFor="id">ID</label>
        <input type="text" name="id" className="smallBox" />
        <label htmlFor="password">Password</label>
        <input type="text" name="password" className="smallBox" />
      </form>
    </SignInContainer>
  );
};

export default SignIn;
