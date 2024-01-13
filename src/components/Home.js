import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "./Main"
import Layout from "../Layout"
import Registration from "./Registration"
// import StuDashboard from "./StuDashboard"
import LoaderExample from "../LoaderPage"
import StuCompalint from "./InsideComponent/StuCompalint"
import LastStuComplaint from "./InsideComponent/LastStuCompalint"
import StuProfile from "./InsideComponent/StuProfile"


let Home = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />} >
                        <Route index element={<Main />} />
                        <Route path="home" element={<Main />} />
                        <Route path="register" element={<Registration />} />
                        <Route path="login" element={<Main />} />
                        <Route path="studash" element={<LoaderExample />} >
                            <Route path="camplaint"  element={<StuCompalint />} />
                            <Route path="laststucpm" element={<LastStuComplaint />} />
                            <Route path="stuprofile" element={<StuProfile />} />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Home