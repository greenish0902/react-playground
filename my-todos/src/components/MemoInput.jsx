import React, { useState, memo } from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";

const MemoForm = memo(styled.form`
  display: flex;
  flex-direction: column;
  .smallBox {
    padding: 12px;
    margin: 8px 32px;
    border: 1px solid #eee;
  }
  button {
    background-color: #f0f8ff;
  }
`);

const MemoInput = memo((props) => {
  const [memoItem, setMemoItem] = useState({
    title: "",
    content: "",
  });

  const { title, content } = memoItem;
  const handleInput = (event) => {
    const { name, value } = event.target;
    setMemoItem({ ...memoItem, [name]: value });
  };
  const resetInputs = () => {
    setMemoItem({
      title: "",
      content: "",
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.firstChild.focus();
    if (!(memoItem.title && memoItem.content)) return;
    props.addItem({ ...memoItem, id: nanoid(10) });
    resetInputs();
  };

  return (
    <MemoForm onSubmit={handleSubmit}>
      <input
        className="smallBox"
        name="title"
        value={title}
        onChange={handleInput}
        placeholder="title"
      />
      <input
        className="smallBox"
        name="content"
        value={content}
        onChange={handleInput}
        placeholder="new memo..."
      />
      <button className="smallBox">ADD</button>
    </MemoForm>
  );
});

export default MemoInput;
