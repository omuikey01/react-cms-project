import axios from "axios"
import { useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

let StuCompalint = () => {
    let [userSub, setUserSub] = useState("")
    let [userCpm, setUserCpm] = useState("")
    let date = new Date()
    let stuId = useSelector(state => state.Student.stuId)
    let myNav = useNavigate()



    let submitDandle = (e) => {
        e.preventDefault()
        let currentData = date.getDate() + " " + date.getMonth() + 1 + " " + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes()

        axios.post("http://localhost:8000/student/complaint/comp/", { "stuid": stuId, "subject": userSub, "datetime": currentData, "queryexplain": userCpm, "ans": "" }).then((res) => {
            myNav("/studash/laststucpm")
        })
    }
    return (
        <>
            <div className="StuCpmForm" >
                <h1> Student Compalaint </h1>
                <label>Your Subject : </label>
                <input type="text" name="stucpm" value={userSub} onChange={(e) => { setUserSub(e.target.value) }} />
                <label>Your Compalaint : </label>
                <textarea name="stucpmmsg" type="text" value={userCpm} onChange={(e) => { setUserCpm(e.target.value) }} />

                <button type="submit" onClick={submitDandle} > Submit </button>
                <button type="reset" > Reset </button>
            </div>
        </>
    )
}
export default StuCompalint