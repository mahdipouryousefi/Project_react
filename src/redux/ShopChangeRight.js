import { createSlice } from "@reduxjs/toolkit";


const ShopChangeRight = createSlice({
    name: 'shop',
    initialState: {
        color : '',
        borderStyle : '',
        borderWidth : " ",
        marginLeft : "",
        marginRight : "",
        borderBottomLeftRadius : "",
        borderBottomLeftRadius : ""
    },
    reducers: {
        shop: (state) => {
            state.color = 'red'
            state.borderStyle = 'solid'
            state.borderWidth = "0px 0px 5px 0px"
            state.marginLeft = "4px"
            state.marginRight = "4px"
            state.borderBottomLeftRadius = "5px"
            state.borderBottomLeftRadius = "5px"
        },
        shopRight: (state) => {
            state.color = '#868686'
            state.borderStyle = 'none'
            state.borderWidth = ""
            state.marginLeft = ""
            state.marginRight = ""
            state.borderBottomLeftRadius = ""
            state.borderBottomLeftRadius = ""
        }


    }


})
export default ShopChangeRight