import React, { useState, memo, useRef, useCallback } from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";

const MemoForm = memo(styled.form`
  display: flex;
  flex-direction: column;
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

const MemoInput = memo(({ handleCreate }) => {
  const memoRef = useRef(null);
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

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      memoRef.current.firstChild.focus();
      handleCreate({
        ...memoItem,
        datetime: memoItem.datetime
          ? new Date(memoItem.datetime).toLocaleString()
          : new Date().toLocaleString(),
        id: nanoid(10),
      });
      hiddenRef.current.classList.add("hidden");
      setMemoItem(() => ({
        title: "",
        content: "",
        datetime: "",
        color: "default",
      }));
    },
    [memoItem, handleCreate]
  );
  const handleDisplay = useCallback((event) => {
    event.preventDefault();
    hiddenRef.current.classList.toggle("hidden");
  }, []);

  return (
    <MemoForm onSubmit={handleSubmit} ref={memoRef}>
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
