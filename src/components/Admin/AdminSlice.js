import { createSlice } from "@reduxjs/toolkit";

let AdminSlice = createSlice({
    name: "AdminSlice",
    initialState: {
        adminname: "",
        auth: false
    },
    reducers: {
        adminLogin: (state, action) => {
            state.adminname = action.payload
            state.auth = true
        },
        adminLogout: (state) => {
            state.adminname = ""
            state.auth = false
        }
    }

});
export default AdminSlice.reducer
export let { adminLogin, adminLogout } = AdminSlice.actions