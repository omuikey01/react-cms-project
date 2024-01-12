import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    stuName : "",
    stuAuth : false
}

let StudentAccountSlice = createSlice({
    name: "StudentAccountManage",
    initialState : initialState,
    reducers : 
    {
        Login : (state, {payload})=>{
            state.stuName = payload
            state.stuAuth = true
        },
        Logout : (state)=>{
            state.stuName = ""
            state.stuAuth = false
        }

    }
})


export default StudentAccountSlice.reducer
export let {Login, Logout} = StudentAccountSlice.actions









// // authSlice.js
// const initialState = {
//   isAuthenticated: false,
//   user: null,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     login: (state, action) => {
//       state.isAuthenticated = true;
//       state.user = action.payload;
//     },
//     logout: (state) => {
//       state.isAuthenticated = false;
//       state.user = null;
//     },
//   },
// });

// export const { login, logout } = authSlice.actions;
// export default authSlice.reducer;
