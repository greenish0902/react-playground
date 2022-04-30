import React from "react";
import MemoItem from "./MemoItem";
import styled from "styled-components";

const MemoItemsBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const MemoItems = ({ items, handleUpdate, handleDelete }) => {
  return (
    <MemoItemsBlock>
      {items.map((item) => (
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
