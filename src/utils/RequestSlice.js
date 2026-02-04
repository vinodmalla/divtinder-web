import { createSlice } from "@reduxjs/toolkit";

const RequestSlice=createSlice({
    name:"requests",
    initialState:null,
    reducers:{
        addRequest:(state,actions)=>actions.payload,
        removeRequest:(state,actions)=>{
            const newArray=state.filter(r=>r._id!==actions.payload)
            return newArray;
        }
    }
})
export const {addRequest,removeRequest}=RequestSlice.actions;
export default RequestSlice.reducer;