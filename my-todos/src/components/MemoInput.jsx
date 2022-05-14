import React, { useState, memo, useRef, useCallback } from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";

const MemoForm = memo(styled.form`
  display: flex;
  flex-direction: column;
  textarea {
    resize: none;
    line-height: 1.5;
  }
  button {
    background-color: var(--color-light-blue-1);
  }
  .addBtn {
    background-color: var(--color-light-blue-2);
  }
  .details {
    * {
      margin: 0 20px;
    }
  }
`);

const MemoInput = memo((props) => {
  const hiddenRef = useRef(null);
  const [memoItem, setMemoItem] = useState({
    title: "",
    content: "",
    datetime: "",
    color: "default",
  });
  const { title, content, datetime } = memoItem;

  const handleInput = useCallback((event) => {
    const { name, value } = event.target;
    setMemoItem((memoItem) => ({ ...memoItem, [name]: value }));
  }, []);
  const resetInputs = useCallback(() => {
    setMemoItem(() => ({
      title: "",
      content: "",
      datetime: "",
      color: "default",
    }));
  }, []);
  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      event.target.firstChild.focus();
      props.addItem({
        ...memoItem,
        datetime: datetime
          ? new Date(datetime).toLocaleString()
          : new Date().toLocaleString(),
        id: nanoid(10),
      });
      hiddenRef.current.classList.add("hidden");
      resetInputs();
    },
    [memoItem]
  );
  const handleDisplay = useCallback((event) => {
    event.preventDefault();
    hiddenRef.current.classList.toggle("hidden");
  }, []);

  return (
    <MemoForm onSubmit={handleSubmit}>
      <textarea
        className="smallBox"
        rows="1"
        name="title"
        value={title}
        onChange={handleInput}
        placeholder="title"
      />
      <textarea
        required
        rows="5"
        className="smallBox content"
        name="content"
        value={content}
        onChange={handleInput}
        placeholder="new memo..."
      />
      <button className="smallBox" onClick={handleDisplay}>
        details
      </button>
      <div className="hidden details" ref={hiddenRef}>
        <label htmlFor="datetime">
          datetime
          <input
            className="smallBox"
            name="datetime"
            type="datetime-local"
            value={datetime}
            onChange={handleInput}
          />
        </label>
        <label htmlFor="color">
          color
          <select name="color" className="smallBox" onChange={handleInput}>
            <option value="default">default</option>
            <option value="red">red</option>
            <option value="yellow">yellow</option>
            <option value="green">green</option>
            <option value="blue">blue</option>
            <option value="purple">purple</option>
            <option value="gray">gray</option>
          </select>
        </label>
      </div>
      <button className={["smallBox", "addBtn"].join(" ")}>ADD</button>
    </MemoForm>
  );
});

export default MemoInput;
