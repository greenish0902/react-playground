import React, { useState, useEffect } from "react";
import axios from "axios";
import Videos from "../components/Videos";

const Search = ({ query }) => {
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = "https://www.googleapis.com/youtube/v3/search";
    const params = {
      key: "AIzaSyBsj7cGa_qFEHF40i5w9CFRJuegkk8KzxQ",
      part: "snippet",
      q: query,
      regionCode: "KR",
      maxResults: 5,
    };
    const fetchData = async () => {
      try {
        setError(null);
        setItems(null);
        setLoading(true);
        const response = await axios.get(url, { params });
        setItems(response.data.items);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [query]);

  if (loading) return <div>loading...</div>;
  if (error) return <div>error...</div>;
  if (!items) return null;

  return (
    <div>
      <Videos items={items} />
    </div>
  );
};

export default Search;
