import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"


let ReplayCmp = () => {
    let { id } = useParams()
    let [userQuery, setUserQuery] = useState({})
    let [reply, setReply] = useState("")
    let myNav = useNavigate()

    let loadData = () => {
        let url = `http://localhost:4000/Complaints/${id}`
        axios.get(url).then((res) => {
            setUserQuery(res.data)
        })
    }

    useEffect(()=>{
        loadData()
    }, []);


    let datapost=()=>{
        let date = new Date()
        let newDate = date.getDate() + " " + date.getMonth()+1 + " " + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes();
        
        let url = `http://localhost:4000/Complaints/${id}`
        axios.put(url, {
            "subject" : userQuery.subject,
            "datetime" : userQuery.datetime,
            "queryexplain" : userQuery.queryexplain,
            "ans" : reply,
            "replydata" : newDate,
            "stuid" : userQuery.stuid
        }).then((res)=>{
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
                <textarea type="text" cols="100" rows="5"value={reply} onChange={(e)=>{setReply(e.target.value)}} />

                <button onClick={datapost} > Submit </button>

            </div>

        </>
    )
}
export default ReplayCmp