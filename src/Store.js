import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import StudentReducer from './StudentAccountSlice'
import AdminReducer from './components/Admin/AdminSlice'

let persistConfig = {
    key: "root",
    storage,
}
let StudentpersistedReducer = persistReducer(persistConfig, StudentReducer)
let adminpersistedReducer = persistReducer(persistConfig, AdminReducer)

export let store = configureStore({
    reducer:
    {
        "Student": StudentpersistedReducer,
        "Admin": adminpersistedReducer
    }
})
export let persistor = persistStore(store)