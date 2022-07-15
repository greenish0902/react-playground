import React, { useState, useEffect } from "react";
import MemoItem from "./MemoItem";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getMemo } from "../../slices/memoSlice";

import Spinner from "../Spinner";
import ErrorView from "../ErrorView";

const MemoItemsBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const MemoItems = ({ username, handleClick, handleDelete }) => {
  const [items, setItems] = useState([]);
  // for react-redux
  const { data, loading, error } = useSelector((state) => state.memo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMemo({ username }));
    setItems(() => data);
  }, [dispatch, username]);

  return (
    <>
      {loading && <Spinner visible={loading} />}
      {error ? (
        items && (
          <MemoItemsBlock>
            {items?.map((item) => (
              <MemoItem
                item={item}
                onClick={handleClick}
                onDelete={handleDelete}
                key={item.id}
              />
            ))}
          </MemoItemsBlock>
        )
      ) : (
        <ErrorView error={error} />
      )}
    </>
  );
};

export default MemoItems;
