import React from "react";

import MemoInput from "../components/Memo/MemoInput";
import MemoItems from "../components/Memo/MemoItems";

const Memo = ({ items, onAddItem, onClick, onDelete }) => {
  return (
    <div>
      <MemoInput handleCreate={onAddItem} />
      {items && (
        <MemoItems
          items={items}
          handleClick={onClick}
          handleDelete={onDelete}
        />
      )}
    </div>
  );
};

export default Memo;
