import React, { useState, useCallback, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Memo from "./pages/Memo";

const App = () => {
  const [items, setItems] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/data/${username}`
        );
        setItems(response.data.memo);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [username]);

  const handleNewItem = useCallback((newItem) => {
    setItems((prevItems) => [{ ...newItem }, ...prevItems]);
  }, []);
  const handleUpdate = useCallback((selectedId) => {
    if (!selectedId) return;
    setItems((items) =>
      items.map((item) => {
        if (selectedId === item.id) {
          const newTitle =
            window.prompt("new TITLE here", item.title) || item.title;
          const newContent =
            window.prompt("new CONTENT here", item.content) || item.content;
          return { ...item, title: newTitle, content: newContent };
        }
        return item;
      })
    );
  }, []);
  const handleDelete = useCallback((selectedId) => {
    if (!selectedId) return;
    setItems((items) => items.filter((item) => selectedId !== item.id));
  }, []);
  const handleSignIn = useCallback((username) => setUsername(username), []);

  return (
    <>
      <Navbar display={username} />
      <Routes>
        <Route
          path={username ? "/" : "/home"}
          element={
            <Home
              items={items}
              onUpdate={handleUpdate}
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
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;
