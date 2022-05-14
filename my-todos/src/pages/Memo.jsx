import React from "react";

import MemoInput from "../components/MemoInput";
import MemoItems from "../components/MemoItems";

const Memo = ({ items, onAddItem, onUpdate, onDelete }) => {
  return (
    <div>
      <MemoInput addItem={onAddItem} />
      {items && (
        <MemoItems
          items={items}
          handleUpdate={onUpdate}
          handleDelete={onDelete}
        />
      )}
    </div>
  );
};

export default Memo;
