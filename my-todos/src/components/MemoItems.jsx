import React, { useState } from "react";
import MemoItem from "./MemoItem";
import styled from "styled-components";

const MemoItemsBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const MemoItems = ({ items }) => {
  const [memoItems, setMemoItems] = useState(items);

  const handleUpdate = (selectedId) => {
    if (!selectedId) return;
    setMemoItems((prevItems) => {
      return prevItems.map((item) => {
        if (selectedId == item.id) {
          const newTitle = window.prompt("new TITLE here") || item.title;
          const newContent = window.prompt("new CONTENT here") || item.content;
          return { ...item, title: newTitle, content: newContent };
        }
        return item;
      });
    });
  };

  const handleDelete = (selectedId) => {
    if (!selectedId) return;
    setMemoItems((prevItems) => {
      return prevItems.filter((item) => selectedId !== item.id);
    });
  };

  return (
    <MemoItemsBlock>
      {memoItems.map((item) => (
        <MemoItem
          item={item}
          key={item.id}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      ))}
    </MemoItemsBlock>
  );
};

export default MemoItems;
