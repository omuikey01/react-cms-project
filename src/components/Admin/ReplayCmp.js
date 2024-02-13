import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"


let ReplayCmp = () => {
    let { id } = useParams()
    let [userQuery, setUserQuery] = useState({})
    let [reply, setReply] = useState("")
    let myNav = useNavigate()
    // let url = `http://localhost:8000/student/complaint/comp/${id}`
    let loadData = () => {
        axios.get(`http://localhost:8000/student/complaint/comp/${id}`).then((res) => {
            setUserQuery(res.data)
        })
    }

    useEffect(() => {
        loadData()
    }, []);


    let datapost = () => {
        let date = new Date()
        let newDate = date.getDate() + " " + date.getMonth() + 1 + " " + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes();

        axios.patch(`http://localhost:8000/student/complaint/comp/${id}`, { "ans": reply, "replydata": newDate, }).then((res) => {
            alert("Successful Reply Ans !!")
            myNav("/admindash")
        })
        
    }
    return (
        <>
            <div className="StuCpmForm">
                <h1> Replay Complaint {id} </h1>
                <label> Subject  </label>
                <input type="text" value={userQuery.subject} name="query" />
                <label> Query </label>
                <textarea type="text" cols="100" rows="5" value={userQuery.queryexplain} />
                <label> Date of Complaint  </label>
                <input type="text" value={userQuery.datetime} name="query" />
                <label> Reply </label>
                <textarea type="text" cols="100" rows="5" value={reply} onChange={(e) => { setReply(e.target.value) }} />
                <button onClick={datapost} > Submit </button>
            </div>
        </>
    )
}
export default ReplayCmp