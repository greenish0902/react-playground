import React, { useState, useCallback } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Memo from "./pages/Memo";

const App = () => {
  const [items, setItems] = useState([]);

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

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          }
        />
        <Route path="/signin" element={<SignIn />} />
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
    </div>
  );
};

export default App;
