import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "./Main"
import Layout from "../Layout"
import Registration from "./Registration"
import Login from "./Login"
import StuDashboard from "./StuDashboard"


let Home = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />} >
                        <Route index element={<Main />} />
                        <Route path="home" element={<Main />} />
                        <Route path="register" element={<Registration />} />
                        <Route path="login" element={<Login />} />
                        <Route path="studash" element={<StuDashboard />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Home