import { createSlice } from "@reduxjs/toolkit";

const ConnectionsSlice=createSlice({
    name:"connections",
    initialState:null,
    reducers:{
        addConnections:(state,actions)=>{
            return actions.payload;
        }
    }
})

export const {addConnections}=ConnectionsSlice.actions;
export default ConnectionsSlice.reducer;