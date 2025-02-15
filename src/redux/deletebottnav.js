import { createSlice } from "@reduxjs/toolkit";

const Delebottnav = createSlice({
  name: "bottnav",
  initialState: { display: '' },
  reducers: {

    pushbott: (state) => {
      state.display = "block";
    },
     deletebot: (state) => {
      state.display = "none";
    },
  },
});
export default Delebottnav;
