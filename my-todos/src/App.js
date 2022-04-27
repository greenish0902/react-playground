import React, { useState } from "react";
import MemoInput from "./components/MemoInput";
import MemoItems from "./components/MemoItems";

const memoData = [
  {
    title: "title",
    content: "content",
    id: "memo01",
  },
  {
    title: "title",
    content: "content",
    id: "memo02",
  },
  {
    title: "title",
    content: "content",
    id: "memo03",
  },
  {
    title: "title",
    content: "content",
    id: "memo04",
  },
  {
    title: "title",
    content: "content",
    id: "memo05",
  },
];

const App = () => {
  const [items, setItems] = useState(memoData);
  const handleNewItem = (newItem) => {
    setItems((prevItems) => [...prevItems, { ...newItem, id: Math.random() }]);
  };

  return (
    <div>
      <nav>
        <h1>Memo App</h1>
      </nav>
      <MemoItems items={items} />
      <MemoInput addItem={handleNewItem} />
    </div>
  );
};

export default App;
