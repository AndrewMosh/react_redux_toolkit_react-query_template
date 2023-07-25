import { createSlice } from "@reduxjs/toolkit";
import { fetchSomeData } from "../api/api";

const ExampleSlice = createSlice({
  name: "someData",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setData, setLoading, setError } = ExampleSlice.actions;

export const fetchData = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const data = await fetchSomeData();
    dispatch(setData(data));
    console.log(data);
  } catch (error) {
    dispatch(setError("Failed to fetch data"));
  } finally {
    dispatch(setLoading(false));
  }
};

export default ExampleSlice.reducer;
