import { createSlice } from "@reduxjs/toolkit";

const Deletopinput = createSlice({
  name: "input",
  initialState: { display: "" },
  reducers: {
    deleteinput: (state) => {
      state.display = "none";
    },
    pushinput: (state) => {
      state.display = "block";
    },
  },
});
export default Deletopinput
