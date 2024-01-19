import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    stuName: "",
    stuId: "",
    stuAuth: false
}

let StudentAccountSlice = createSlice({
    name: "StudentAccountManage",
    initialState: initialState,
    reducers:
    {
        Login: (state, { payload }) => {
            state.stuName = payload.name
            state.stuId = payload.idd
            state.stuAuth = true
        },
        Logout: (state) => {
            state.stuName = ""
            state.stuId = ""
            state.stuAuth = false
        }
    }
})

export default StudentAccountSlice.reducer
export let { Login, Logout } = StudentAccountSlice.actions