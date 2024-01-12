import { useSelector } from "react-redux"



let StuDashboard = () => {
    let userName = useSelector(state=>state.StudentAccountManage.stuName)
    return (
        <>
            <section style={{ width: "100%" }}>
                <div className="studashh1"> Welcome To Dashboard   </div>
                <div style={{ width: "90%", margin: "auto" }}>
                    <h1 style={{textAlign : "right"}}> Welcome {userName}  <a href="#"> Logout </a> </h1>
                    <div className="StudashNav flex">
                        <div className="studashnavleft">
                            <div>
                                <ul>
                                    <li> Compalaint </li>
                                    <li> Last Compalaint </li>
                                </ul>
                            </div>
                        </div>
                        <div>Right Data</div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default StuDashboard