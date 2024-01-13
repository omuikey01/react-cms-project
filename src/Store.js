import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import StudentReducer from './StudentAccountSlice'


let persistConfig = {
    key: "root",
    storage,
}
let persistedReducer = persistReducer(persistConfig, StudentReducer)



export let store = configureStore({
    reducer: persistedReducer
    // StudentAccountManage : StudentReducer
})
// export default store
export let persistor = persistStore(store)