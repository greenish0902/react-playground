import React from "react";

import MemoItems from "../components/MemoItems";

const Home = ({ items, onUpdate, onDelete }) => {
  return (
    <div>
      <MemoItems
        items={items}
        handleUpdate={onUpdate}
        handleDelete={onDelete}
      />
    </div>
  );
};

export default Home;
