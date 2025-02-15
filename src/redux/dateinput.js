import { createSlice } from "@reduxjs/toolkit";

const Deleinput = createSlice({
  name: "input",
  initialState: { display: "" },
  reducers: {
    deleinput: (state) => {
      state.display = "none";
    },
    pushinput: (state) => {
      state.display = "block";
    },
  },
});
export default Deleinput;
