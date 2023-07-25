import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../features/ExampleSlice";

const Example = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.someData);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Some Data:</h1>
      <ul>{data.fact}</ul>
    </div>
  );
};

export default Example;
