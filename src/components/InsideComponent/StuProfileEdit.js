import axios from "axios"
import { useEffect, useState } from "react"
import {useNavigate, useParams } from "react-router-dom"

let StuProfileEdit = () => {
    let { id } = useParams()
    let [myData, setMyData] = useState({})
    let url = `http://localhost:4000/Register/${id}`
    let myNav = useNavigate()

    let loadData = () => {
        axios.get(url).then((res) => {
            setMyData(res.data)
        })
    }

    useEffect(() => {
        loadData();
    }, [])


    let ManageInput = (e) => {
        setMyData({ ...myData, [e.target.name]: e.target.value })
    }

    let UpdateData = () => {
        axios.put(url, myData).then((res) => {
            alert("Update Successfull!!!")
            myNav("/studash")
        })
    }

    return (
        <section className="profileDetails">
            <h1> Edit Profile Data </h1>
            <label> Name </label> <input type="text" name="fullname" value={myData.fullname} onChange={ManageInput} />
            <label> Email </label> <input type="email" name="email" value={myData.email} onChange={ManageInput} />
            <label> Contact </label> <input type="text" name="contact" value={myData.contact} onChange={ManageInput} />
            <label> Gender </label> <input type="text" name="gender" value={myData.gender} onChange={ManageInput} />
            <label> City </label> <input type="text" name="city" value={myData.city} onChange={ManageInput} />
            <button style={{ "width": "40%" }} onClick={UpdateData}> Update  </button>
        </section>
    )
}

export default StuProfileEdit