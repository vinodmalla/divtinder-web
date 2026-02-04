import { createSlice } from "@reduxjs/toolkit"; //importing createSlice from redux toolkit for creating a slice of the redux store
const userSlice = createSlice({
    name: "user", //name of the slice
    initialState: null,  //initial state of the slice
    reducers:{  //reducers to handle actions
        addUser:(state,action)=>{
            return action.payload; //updating the state with the payload from the action
        },
        removeUser:(state,action)=>{
            return null; //resetting the state to null
        }
    }
});
export const {addUser,removeUser}=userSlice.actions; //exporting the actions to be used in the components or other parts of the application
export default userSlice.reducer; //exporting the reducer to be included in the store