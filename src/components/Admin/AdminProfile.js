import axios from "axios"
import { useEffect, useState } from "react"
// import './PassJavascript.js'




let AdminProfile = () => {
    let [adminData, setAdminData] = useState({})
    // let [readOnly, setReadonly] = useState(true)

    let loadData = () => {
        let url = `http://localhost:4000/adminuser/1`
        axios.get(url).then((response) => {
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
                {/* <button id="chngepassbtn" type="button" onClick={setReadonly(false)}> Change Password </button> */}
                {/* {readOnly && <button id="updatepassbtn"> Save Password </button>} */}
            </section >
        </>
    )
}

export default AdminProfile