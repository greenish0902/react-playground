import React, { useState, useCallback } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import styled from "styled-components";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Memo from "./pages/Memo";
import Error404 from "./pages/Error404";
import Navbar from "./components/Navbar";
import MemoPopUp from "./components/Memo/MemoPopup";

const AppContainer = styled.div`
  margin: auto;
  max-width: 720px;
`;

const App = () => {
  const [username, setUsername] = useState("");
  const [popup, setPopup] = useState({});
  const navigate = useNavigate();

  const handleClick = useCallback((selectedId) => {}, []);
  const handleUpdate = useCallback(() => {}, []);
  const handleDelete = useCallback(() => {}, []);
  const handleSignIn = useCallback(
    (username) => {
      if (username === "") navigate("/");
      return setUsername(username);
    },
    [navigate]
  );
  const handleClose = useCallback(() => {
    setPopup(() => {});
    return (document.body.style.overflow = "scroll");
  }, []);

  return (
    <>
      {popup?.id && (
        <MemoPopUp
          item={popup}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
          onClose={handleClose}
        />
      )}
      <AppContainer>
        <Navbar signIn={username} />
        <Routes>
          <Route
            path={username ? "/" : "/home"}
            element={
              <Home
                username={username}
                onClick={handleClick}
                onDelete={handleDelete}
              />
            }
          />
          <Route
            path={username ? "/signin" : "/"}
            element={<SignIn signIn={username} onSignIn={handleSignIn} />}
          />
          <Route
            path={username ? "/memo" : "/"}
            element={
              <Memo
                username={username}
                // onAddItem={handleNewItem}
                onClick={handleClick}
                onDelete={handleDelete}
              />
            }
          />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </AppContainer>
    </>
  );
};

export default App;
