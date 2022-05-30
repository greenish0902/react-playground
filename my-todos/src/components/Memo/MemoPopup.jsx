import React, { useState, useRef, memo } from "react";
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

const ItemForm = memo(styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  box-sizing: border-box;
  width: 600px;
  height: 600px;
  max-width: 80%;
  max-height: 80%;
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
  cursor: pointer;
  position: absolute;
  top: 0;
  padding: 4px;
  color: #000;
  opacity: 0.3;
  font-size: 20px;
  transition: all 300ms ease;
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

const TextWrapper = memo(styled.div`
  margin: 24px 0;
  width: 100%;
  height: 100%;
  textarea {
    padding: 12px;
    width: 100%;
    outline: none;
    border: none;
    border-radius: 4px;
    font-size: 18px;
    background-color: ${(props) => props.color};
    opacity: 0.6;
    &.titleArea {
      height: 52px;
    }
    &.contentArea {
      height: 80%;
    }
    &:focus {
      opacity: 1;
      background-color: #fff;
    }
  }
`);

const MemoItem = memo((props) => {
  const formRef = useRef(null);
  const [updating, setUpdating] = useState(false);
  const { title, content, datetime, color, id } = props.item;

  const handleUpdate = () => {
    setUpdating((updating) => !updating);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const { title, content } = formRef.current;
    props.onUpdate({ id, title: title.value, content: content.value });
  };
  const handleDelete = () => props.onDelete(id);
  const handleClose = (event) => {
    if (updating) return;
    if (
      formRef.current.contains(event.target) &&
      !event.currentTarget.classList.contains("closeBtn")
    )
      return;
    props.onClose();
  };

  return (
    <TransLayer onClick={handleClose}>
      <ItemForm color={`var(--color-memo-${color})`} ref={formRef}>
        <span className="datetime">{datetime}</span>
        {updating ? (
          <TextWrapper color={`var(--color-memo-${color})`}>
            <textarea
              name="title"
              className="titleArea"
              defaultValue={title}
              placeholder="title"
              autoFocus
            ></textarea>
            <textarea
              name="content"
              className="contentArea"
              defaultValue={content}
              placeholder="content"
            ></textarea>
          </TextWrapper>
        ) : (
          <div>
            <h3 className="title">{title}</h3>
            <p className="content">{content}</p>
          </div>
        )}
        <SmallBtn className="updateBtn" onClick={handleUpdate}>
          {updating ? <IoIosSave onClick={handleSubmit} /> : <IoIosCreate />}
        </SmallBtn>
        <SmallBtn className="removeBtn" onClick={handleDelete}>
          <IoIosTrash />
        </SmallBtn>
        <SmallBtn className="closeBtn" onClick={handleClose}>
          <IoIosCloseCircle />
        </SmallBtn>
      </ItemForm>
    </TransLayer>
  );
});

export default MemoItem;
