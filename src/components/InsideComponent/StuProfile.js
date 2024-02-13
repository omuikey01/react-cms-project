import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"



let StuProfile = () => {
    let id = useSelector(state => state.Student.stuId)
    let [myData, setMyData] = useState("")

    let loadData = () => {
        // let url = `http://localhost:4000/Register/${id}`
        axios.get(`http://localhost:8000/register/student/${id}/`).then((res) => {
            setMyData(res.data)
        })
    }

    useEffect(() => {
        loadData()
    }, [])


    return (
        <>
            <section className="profileDetails">
                <h1> Student Profile  </h1>
                <img src="profile.jpg" alt="Picture" id="profilepicture" />
                <h1> {myData.fullname} </h1>
                <label> Email </label> <input value={myData.email} readOnly />
                <label> Contact </label> <input value={myData.contact} readOnly />
                <label> Gender </label> <input value={myData.gender} readOnly />
                <label> City </label> <input value={myData.city} readOnly />
                <Link to={"/studash/stuEdit/" + id}>
                    <button style={{ "width": "90%", "height": "40px" }}> Edit  </button>
                </Link>
            </section>
        </>
    )
}
export default StuProfile