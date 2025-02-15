import { configureStore } from "@reduxjs/toolkit";
import ChangeBackInput from "./chnageInput";
import Deleinput from "./dateinput";
import Deletopinput from "./deletopinput";
import ShopChange from "./ShopChange";
import ShopChangeRight from "./ShopChangeRight";
import Delebottnav from "./deletebottnav";

const store = configureStore({
  reducer: {
    ChageInput: ChangeBackInput.reducer,
    deleinput: Deleinput.reducer,
    deletetopinput: Deletopinput.reducer,
    ShopChange: ShopChange.reducer,
    ShopChangeRight: ShopChangeRight.reducer,
    deletebottnav: Delebottnav.reducer


  },
});
export default store;
