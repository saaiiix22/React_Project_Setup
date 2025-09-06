import { combineReducers } from "@reduxjs/toolkit";
import userReducer from '../features/user/userSlice'
const rootReducer  = combineReducers({
    userDetails:userReducer
})
export default rootReducer;