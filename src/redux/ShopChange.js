import { createSlice } from "@reduxjs/toolkit";


const ShopChange = createSlice({
    name: 'shop',
    initialState: {
        borderStyle: "",
        borderWidth: "",
        color: '',
        marginLeft: "",
        marginRight: '',
        borderBottomLeftRadius: '',
        borderBottomRightRadius: ''
    },
    reducers: {
        chaneshop: (state) => {
            state.color = 'red'
            state.borderStyle = 'solid'
            state.borderWidth = "0px 0px 5px 0px"
            state.marginLeft = "4px"
            state.marginRight = "4px"
            state.borderBottomLeftRadius = "5px"
            state.borderBottomLeftRadius = "5px"
        },
        chaneshopRight: (state) => {
            state.color = ''
            state.borderStyle = ''
            state.borderWidth = ""
            state.marginLeft = ""
            state.marginRight = ""
            state.borderBottomLeftRadius = ""
            state.borderBottomLeftRadius = ""
        }


    }


})
export default ShopChange