import React, { memo, useRef, useState } from "react";
import styled from "styled-components";

const MemoForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const MemoInput = (props) => {
  const [memoItem, setMemoItem] = useState({
    title: "",
    content: "",
  });
  const { title, content } = memoItem;
  const handleInput = (event) => {
    const { name, value } = event.target;
    setMemoItem({ ...memoItem, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!(memoItem.title && memoItem.content)) return;
    props.addItem(memoItem);
    setMemoItem({
      title: "",
      content: "",
    });
  };

  return (
    <MemoForm onSubmit={handleSubmit}>
      <input
        name="title"
        value={title}
        onChange={handleInput}
        placeholder="title"
      />
      <input
        name="content"
        value={content}
        onChange={handleInput}
        placeholder="new memo..."
      />
      <button>ADD</button>
    </MemoForm>
  );
};

export default MemoInput;
