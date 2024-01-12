import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import Nav from "./components/Nav"



let Layout = () => {
    return (
        <>
            {/* Nav Component */}
            <section className="nav_component pointer">
                <Nav />
            </section>

            <section className="mainpage">
                <Outlet />
            </section>


            {/* Footer Component */}
            <section className="footer flex" >
                <Footer />
            </section>



        </>
    )
}

export default Layout