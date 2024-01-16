import { useDispatch, useSelector } from "react-redux"
import { Link, Outlet, useNavigate } from "react-router-dom"
import { adminLogout } from "./AdminSlice"

let AdminDashboard = () => {
    let name = useSelector(state => state.Admin.adminname)
    let myDispatch = useDispatch()
    let myNav = useNavigate()


    let callmeout = () => {
        myDispatch(adminLogout())
        myNav("/")
    }

    return (
        <>
            <div className="studashh1"> Admin Dashboard </div>
            <div style={{ "width": "90vw", "margin": "10px " }}>
                <h1 className="useenameheading" > {name} <span className="username" onClick={callmeout} > Logout </span> </h1>
            </div>
            <nav className="adminNav">
                <ul>
                    <Link to="allquery"><li> All Querys </li> </Link>
                    <Link to="solvedquery"><li> Solved Querys </li> </Link>
                    <Link to="adminprofile"><li> Profile </li> </Link>
                </ul>
            </nav>
            <section className="showlQueryes" >

                <Outlet />

            </section>
        </>
    )
}

export default AdminDashboard