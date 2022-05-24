import React from "react";

import MemoItems from "../components/Memo/MemoItems";

const Home = ({ items, onClick, onDelete }) => {
  return (
    <div>
      <MemoItems items={items} handleClick={onClick} handleDelete={onDelete} />
    </div>
  );
};

export default Home;
