import React from "react";

import MemoItems from "../components/Memo/MemoItems";

const Home = ({ username, onClick, onDelete }) => {
  return (
    <div>
      <MemoItems
        username={username}
        handleClick={onClick}
        handleDelete={onDelete}
      />
    </div>
  );
};

export default Home;
