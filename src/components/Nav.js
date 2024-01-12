import { Link } from "react-router-dom"



let Nav = () => {
    return (
        <>
            <section>
                <nav className="flex nav_content">
                    <div>
                        <Link to="/">UIKEY </Link>
                    </div>
                    <div>
                        COMPLAINT SYSTEM
                    </div>
                    <div>
                        <Link to="register"> <button> Registration  </button> </Link>
                    </div>
                </nav>
            </section>
        </>
    )
}
export default Nav