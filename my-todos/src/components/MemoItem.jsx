import React from "react";
import styled from "styled-components";
import { IoIosCreate, IoIosTrash } from "react-icons/io";

const ItemBox = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 200px;
  height: 200px;
  margin: 12px;
  padding: 12px;
  background-color: ${(props) => props.color ?? "#fff"};
  border-radius: 12px;
  box-shadow: 6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
    12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
    41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05);
`;

const SmallBtn = styled.span`
  position: absolute;
  top: 12px;
  color: gray;
  &.updateBtn {
    right: 32px;
    &:hover {
      color: yellowgreen;
    }
  }
  &.removeBtn {
    right: 12px;
    &:hover {
      color: red;
    }
  }
`;

const MemoItem = (props) => {
  const handleUpdate = () => props.onUpdate(props.item.id);
  const handleDelete = () => props.onDelete(props.item.id);

  return (
    <ItemBox>
      <h3 className="title">{props.item.title}</h3>
      <p className="content">{props.item.content}</p>
      <SmallBtn className="updateBtn" onClick={handleUpdate}>
        <IoIosCreate />
      </SmallBtn>
      <SmallBtn className="removeBtn" onClick={handleDelete}>
        <IoIosTrash />
      </SmallBtn>
    </ItemBox>
  );
};

export default MemoItem;
