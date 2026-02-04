import { configureStore } from "@reduxjs/toolkit"; //importing configureStore from redux toolkit for creating the redux store
import FeedSlice from "./FeedSlice";
import userReducer from "./userSlice"; //importing the user reducer from userSlice.js
import ConnectionsSlice from "./ConnectionsSlice"
import RequestSlice from './RequestSlice'
const appStore = configureStore({ //creating the redux store
    reducer: {user: userReducer,
        feed:FeedSlice,
        connections:ConnectionsSlice,
        requests:RequestSlice,

    }, 
    
});
export default appStore;
