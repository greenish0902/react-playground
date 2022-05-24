import React, { useState, useCallback, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Memo from "./pages/Memo";
import MemoPopUp from "./components/Memo/MemoPopup";
import Spinner from "./components/Spinner";

const AppContainer = styled.div`
  margin: auto;
  max-width: 720px;
`;

const App = () => {
  const [items, setItems] = useState([]);
  const [username, setUsername] = useState("");
  const [popup, setPopup] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!username) return;
    (async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/data?username=${username}`
        );
        setItems(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [username]);

  const handleNewItem = useCallback(
    (newItem) => {
      setLoading(true);
      (async () => {
        try {
          await axios.post(`http://localhost:3001/data`, {
            ...newItem,
            username,
          });
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      })();
      setItems((prevItems) => [{ ...newItem }, ...prevItems]);
    },
    [username]
  );
  const handleClick = useCallback(
    (selectedId) => {
      items.forEach((item) => {
        if (selectedId === item.id) setPopup(item);
      });
    },
    [items]
  );
  const handleUpdate = useCallback(({ id, title, content }) => {
    setItems((items) =>
      items.map((item) => {
        if (item.id === id) {
          item.title = title;
          item.content = content;
        }
        return item;
      })
    );
  }, []);
  const handleDelete = useCallback((selectedId) => {
    if (!selectedId) return;
    setItems((items) => items.filter((item) => selectedId !== item.id));
    setPopup({});
  }, []);
  const handleSignIn = useCallback((username) => setUsername(username), []);
  const handleClose = useCallback(() => setPopup({}), []);

  return (
    <>
      {loading && <Spinner visible={loading} />}
      {popup.id && (
        <MemoPopUp
          item={popup}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
          onClose={handleClose}
        />
      )}
      <AppContainer>
        <Navbar display={username} />
        <Routes>
          <Route
            path={username ? "/" : "/home"}
            element={
              <Home
                items={items}
                onClick={handleClick}
                onDelete={handleDelete}
              />
            }
          />
          <Route
            path={username ? "/signin" : "/"}
            element={<SignIn display={username} onSignIn={handleSignIn} />}
          />
          <Route
            path="/memo"
            element={
              <Memo
                items={items}
                onAddItem={handleNewItem}
                onClick={handleClick}
                onDelete={handleDelete}
              />
            }
          />
        </Routes>
      </AppContainer>
    </>
  );
};

export default App;
