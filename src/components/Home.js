import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "./Main"
import Layout from "../Layout"
import Registration from "./Registration"
import LoaderExample from "../LoaderPage"
import StuCompalint from "./InsideComponent/StuCompalint"
import LastStuComplaint from "./InsideComponent/LastStuCompalint"
import StuProfile from "./InsideComponent/StuProfile"
import AdminDashboard from "./Admin/AdminDashboard"
import AdminProfile from "./Admin/AdminProfile"
import AllQuery from "./Admin/AllQuery"
import SolvedQuery from "./Admin/SolvedQuery"
import ReplayCmp from "./Admin/ReplayCmp"
import StuProfileEdit from "./InsideComponent/StuProfileEdit"
import Stupasschange from "./InsideComponent/StuChangePassword"

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
                            <Route index element={<StuProfile />} />
                            <Route path="camplaint" element={<StuCompalint />} />
                            <Route path="laststucpm" element={<LastStuComplaint />} />
                            <Route path="stuprofile" element={<StuProfile />} />
                            <Route path="stuEdit/:id" element={<StuProfileEdit />} />
                            <Route path="stupasschange/:passnum" element={<Stupasschange />} />
                        </Route>
                        <Route path="admindash" element={<AdminDashboard />} >
                            <Route index element={<AdminProfile />} />
                            <Route path="adminprofile" element={<AdminProfile />} />
                            <Route path="allquery" element={<AllQuery />} />
                            <Route path="solvedquery" element={<SolvedQuery />} />
                            <Route path="adminreply/:id" element={<ReplayCmp />} />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Home