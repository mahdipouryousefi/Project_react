import { createSlice } from "@reduxjs/toolkit";

const ChangeBackInput = createSlice({
  name: "back",
  initialState: {
    filter: "white",
    Background: "white",
  },
  reducers: {
    BackInpout: (state) => {
      state.filter = " brightness(60%)   blur(2px) ";
      state.Background = "#787777";
    },
    Back: (state) => {
      state.filter = "";
      state.Background = "";
    },
  },
});
export default ChangeBackInput;
