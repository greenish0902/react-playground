import React, { useState, useRef } from "react";
import styles from "./SearchForm.module.css";

const SearchForm = (props) => {
  const [inputValue, setInputValue] = useState();
  const inputElem = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const query = inputElem.current.value.trim();
    if (!query) return;
    props.onNewInput(query);
    setInputValue(query);
  };

  return (
    <form onSubmit={submitHandler} action="submit">
      <img
        className={styles.icon}
        src="./img/YouTube-Logo.wine.svg"
        alt="youtube logo"
      />
      <input
        value={inputValue}
        ref={inputElem}
        type="text"
        placeholder="search"
      />
      <button>search</button>
    </form>
  );
};

export default SearchForm;
