import axios from "axios"
import { useEffect, useState } from "react"
// import './PassJavascript.js'




let AdminProfile = () => {
    let [adminData, setAdminData] = useState({})
    // let [readOnly, setReadonly] = useState(true)

    let loadData = () => {
        axios.get("http://localhost:8000/super/admin/1/").then((response) => {
            setAdminData(response.data)

        })
    }

    useEffect(() => {
        loadData()
    }, [])

    // console.log(adminData);




    return (
        <>
            <section>
                <h1> Admin Profile </h1>
                <label> Your Name  </label>
                <input type="text" value={adminData.name} />
                <label> Your Email </label>
                <input type="text" value={adminData.email} />
                <label> Your Password  </label>
                <input type="text" value={adminData.password} id="pass" />
                
            </section >
        </>
    )
}

export default AdminProfile