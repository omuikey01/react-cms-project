import { configureStore } from "@reduxjs/toolkit";
import StudentReducer from './StudentAccountSlice'

let store = configureStore({
    reducer:
    {
        StudentAccountManage : StudentReducer
    }
})
export default store