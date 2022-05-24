import React, { useState, memo } from "react";
import styled from "styled-components";
import {
  IoIosCreate,
  IoIosTrash,
  IoIosCloseCircle,
  IoIosSave,
} from "react-icons/io";

const TransLayer = memo(styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: #0002;
  width: 100%;
  height: 100%;
`);

const ItemBox = memo(styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  box-sizing: border-box;
  width: 600px;
  height: 600px;
  margin: 12px;
  font-size: 20px;
  line-height: 1.5;
  border-radius: 12px;
  border: 20px solid ${(props) => props.color};
  background-color: ${(props) => props.color};
  overflow-wrap: break-word;
  overflow-y: scroll;
  scroll-padding: 12px;
  transform: translate(-50%, -50%);
  .datetime {
    font-size: 16px;
    color: #7c7c7c;
    text-align: right;
  }
`);

const SmallBtn = memo(styled.span`
  position: absolute;
  top: 0;
  padding: 4px;
  color: #000;
  opacity: 0.3;
  font-size: 20px;
  transition: all 300ms ease;
  ${ItemBox}:hover & {
    color: #c8c8c8;
  }
  &.updateBtn {
    right: 48px;
    &:hover {
      color: #03c900;
      opacity: 1;
    }
  }
  &.removeBtn {
    right: 22px;
    color: #000;
    &:hover {
      color: #ff0015;
      opacity: 1;
    }
  }
  &.closeBtn {
    right: -4px;
    color: #000;
    &:hover {
      opacity: 1;
    }
  }
`);

const MemoItem = memo((props) => {
  const [updating, setUpdating] = useState(false);
  const { title, content, datetime, color, id } = props.item;

  const handleUpdate = () => props.onUpdate(id);
  const handleDelete = () => props.onDelete(id);
  const handleClose = () => props.onClose(id);

  return (
    <TransLayer>
      <ItemBox color={`var(--color-memo-${color})`}>
        <span className="datetime">{datetime}</span>
        <h3 className="title">{title}</h3>
        <p className="content">{content}</p>
        <SmallBtn className="updateBtn" onClick={handleUpdate}>
          {updating ? <IoIosSave /> : <IoIosCreate />}
        </SmallBtn>
        <SmallBtn className="removeBtn" onClick={handleDelete}>
          <IoIosTrash />
        </SmallBtn>
        <SmallBtn className="closeBtn" onClick={handleClose}>
          <IoIosCloseCircle />
        </SmallBtn>
      </ItemBox>
    </TransLayer>
  );
});

export default MemoItem;
