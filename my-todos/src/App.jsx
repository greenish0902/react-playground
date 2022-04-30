import React, { useState, useCallback } from "react";

import Navbar from "./components/Navbar";
import MemoInput from "./components/MemoInput";
import MemoItems from "./components/MemoItems";

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
      <MemoItems
        items={items}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
      />
      <MemoInput addItem={handleNewItem} />
    </div>
  );
};

export default App;
