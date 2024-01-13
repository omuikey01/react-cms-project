import { useDispatch, useSelector } from "react-redux"
import { Logout } from "../StudentAccountSlice"
import { Link, Outlet, useNavigate } from "react-router-dom"


let StuDashboard = () => {
    let userName = useSelector(state => state.stuName)
    let myDispatch = useDispatch()
    let MyNav = useNavigate()
    let logoutFun = () => {
        myDispatch(Logout())
        MyNav("/")
    }

    return (

        <>
            <section style={{ width: "100%" }}>
                <div className="studashh1"> Welcome To Dashboard   </div>
                <div style={{ width: "90%" }}>
                    <h1 className="useenameheading" > {userName} <span className="username" onClick={logoutFun}> Logout </span> </h1>
                    <div className="StudashNav flex">
                        <div className="studashnavleft">
                            <ul>
                                <Link to="camplaint"> <li> Compalaint </li> </Link>
                                <Link to="laststucpm"> <li> Last Compalaint </li> </Link>
                                <Link to="stuprofile"> <li> Profile </li> </Link>
                            </ul>
                        </div>
                        <div>

                            <div>
                                <Outlet />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default StuDashboard