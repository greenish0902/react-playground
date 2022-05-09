import React, { memo } from "react";
import styled from "styled-components";
import { IoIosCreate, IoIosTrash } from "react-icons/io";

const ItemBox = memo(styled.div`
  position: relative;
  box-sizing: border-box;
  width: 200px;
  height: 200px;
  margin: 12px;
  line-height: 1.5;
  border-radius: 12px;
  border: 12px solid ${(props) => props.color};
  background-color: ${(props) => props.color};
  overflow-wrap: break-word;
  overflow-y: scroll;
  scroll-padding: 12px;
  box-shadow: 6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
    12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
    41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05);
  transition: all 500ms ease;
  :hover {
    transform: scale(1.1);
  }
  .datetime {
    font-size: 12px;
    color: #7c7c7c;
    text-align: right;
  }
`);

const SmallBtn = memo(styled.span`
  position: absolute;
  padding: 4px 0;
  top: 0;
  ${ItemBox}:hover & {
    color: #c8c8c8;
  }
  &.updateBtn {
    right: 20px;
    color: transparent;
    &:hover {
      color: #03c900;
    }
  }
  &.removeBtn {
    right: 0;
    color: transparent;
    transition: all 300ms ease;
    &:hover {
      color: #ff0015;
    }
  }
`);

const MemoItem = memo((props) => {
  const { title, content, datetime, color, id } = props.item;

  const handleUpdate = () => props.onUpdate(id);
  const handleDelete = () => props.onDelete(id);

  return (
    <ItemBox color={`var(--color-memo-${color})`}>
      <span className="datetime">{datetime}</span>
      <h3 className="title">{title}</h3>
      <p className="content">{content}</p>
      <SmallBtn className="updateBtn" onClick={handleUpdate}>
        <IoIosCreate />
      </SmallBtn>
      <SmallBtn className="removeBtn" onClick={handleDelete}>
        <IoIosTrash />
      </SmallBtn>
    </ItemBox>
  );
});

export default MemoItem;
