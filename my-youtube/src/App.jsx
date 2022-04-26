import React, { useState } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import SearchForm from "./Search/SearchForm";
import Search from "./Search/Search";
import Main from "./Main";

function App() {
  const [query, setQuery] = useState(null);
  const handleInput = (keyWord) => {
    return setQuery(keyWord);
  };

  return (
    <div>
      <SearchForm onNewInput={handleInput} />
      <nav>
        <NavLink to="/">main</NavLink>
        <NavLink to="/search">search</NavLink>
      </nav>
      <Routes>
        <Route exact path="/" element={<Main onChange={handleInput} />} />
        <Route path="/search" element={<Search query={query} />} />
      </Routes>
    </div>
  );
}

export default App;
