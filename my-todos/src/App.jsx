import React, { useState } from "react";
import styled from "styled-components";
import MemoInput from "./components/MemoInput";
import MemoItems from "./components/MemoItems";

const Navbar = styled.nav`
  margin: 24px 0;
  height: ${(props) => props.height ?? "64px"};
  line-height: ${(props) => props.height ?? "64px"};
  text-align: center;
  color: darkslategary;
  background-color: #f0f8ff;
`;

const App = () => {
  const [items, setItems] = useState([]);

  const handleNewItem = (newItem) => {
    setItems((prevItems) => [
      ...prevItems,
      { id: items.length + 1, ...newItem },
    ]);
  };

  const handleUpdate = (selectedId) => {
    if (!selectedId) return;
    setItems(
      items.map((item) => {
        if (selectedId === item.id) {
          const newTitle = window.prompt("new TITLE here") || item.title;
          const newContent = window.prompt("new CONTENT here") || item.content;
          return { ...item, title: newTitle, content: newContent };
        }
        return item;
      })
    );
  };

  const handleDelete = (selectedId) => {
    if (!selectedId) return;
    setItems(items.filter((item) => selectedId !== item.id));
  };

  return (
    <div>
      <Navbar height="48px">
        <h1>Memo App</h1>
      </Navbar>
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
