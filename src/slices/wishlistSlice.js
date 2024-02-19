import {createSlice} from "@reduxjs/toolkit";
const wishlistSlice=createSlice({
    name:"wishlist",
    initialState:[],
    reducers:{
        //actions
        //function logic to add item into wishlist
        addTowishlist:(state,action)=>{
            state.push(action.payload)//actions will be in payload variable
        },
        removeFromWishlist: (state, action) => {
            return state.filter(item => item.id !== action.payload)
        }
    }
})
export const {addTowishlist,removeFromWishlist}=wishlistSlice.actions;
export default wishlistSlice.reducer;