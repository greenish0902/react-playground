import React from "react";
import MemoItem from "./MemoItem";
import styled from "styled-components";

const MemoItemsBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const MemoItems = ({ items, handleClick, handleDelete }) => {
  return (
    items && (
      <MemoItemsBlock>
        {items.map((item) => (
          <MemoItem
            item={item}
            onClick={handleClick}
            onDelete={handleDelete}
            key={item.id}
          />
        ))}
      </MemoItemsBlock>
    )
  );
};

export default MemoItems;
