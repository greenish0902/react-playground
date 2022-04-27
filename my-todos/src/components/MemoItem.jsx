import React from "react";
import styled, { css } from "styled-components";
import { IoIosCreate, IoIosTrash } from "react-icons/io";

const ItemBox = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 200px;
  height: 200px;
  margin: 12px;
  padding: 12px;
  background-color: #ffd3d8;
  /* background-color:{color}; */
`;
// shadow

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

// 난수생성 색상주기
// 색상배열만들기
// delete button
const MemoItem = (props) => {
  const handleUpdate = (event) => props.onUpdate(props.item.id);
  const handleDelete = (event) => props.onDelete(props.item.id);
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
