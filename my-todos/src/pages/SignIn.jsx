import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

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

const SignIn = ({ display, onSignIn }) => {
  const formRef = useRef(null);
  const [users, setUsers] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("http://localhost:3001/users");
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (display) return onSignIn(false);
    const temp = {
      id: formRef.current.id.value,
      pw: formRef.current.password.value,
    };
    users.forEach((user) => {
      if (user.id == temp.id && user.password == temp.pw)
        return onSignIn(user.id);
    });
    event.target.reset();
  };

  return (
    <SignInContainer>
      <form ref={formRef} onSubmit={handleSubmit}>
        {display ? (
          <>
            <h2>Sign Out</h2>
          </>
        ) : (
          <>
            <h2>Sign In</h2>
            <label htmlFor="id">ID</label>
            <input
              name="id"
              type="text"
              required
              autoComplete="username"
              className="smallBox"
            />
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              required
              className="smallBox"
              autoComplete="current-password"
            />
          </>
        )}
        <button className="smallBox">submit</button>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
