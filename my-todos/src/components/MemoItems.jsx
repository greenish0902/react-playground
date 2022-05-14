import React from "react";
import MemoItem from "./MemoItem";
import styled from "styled-components";

const MemoItemsBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const MemoItems = ({ items, handleUpdate, handleDelete }) => {
  return (
    items && (
      <MemoItemsBlock>
        {items.map((item, index) => (
          <MemoItem
            item={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
            key={item.id || index}
          />
        ))}
      </MemoItemsBlock>
    )
  );
};

export default MemoItems;
