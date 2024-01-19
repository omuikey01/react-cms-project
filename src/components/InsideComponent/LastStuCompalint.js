import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux"

let LastStuComplaint = () => {
    let SrNumber = 0
    let idd = useSelector(state => state.Student.stuId)
    let [Cmp, setCpm] = useState([])

    let LoadData = () => {
        let url = `http://localhost:4000/Complaints?stuid=${idd}`;

        axios.get(url).then((res) => {
            setCpm(res.data)
        })
    }

    useEffect(() => {
        LoadData()
    }, [])

    console.log(Cmp)

    let ans = Cmp.map((key) => {
        SrNumber++
        return (
            <tr>
                <td> {SrNumber} </td>
                <td> {key.queryexplain} </td>
                <td> {key.datetime} </td>
                <td> {key.replydata ? key.replydata : "Wait......"} </td>
                <td> {key.ans ? key.ans : "Wait......"} </td>
            </tr>
        )
    })

    if (Cmp.length == 0) {
        return (
            <>
                <h1> Last Compalints </h1>
                <br /> <br /> <br />
                <h1> No Complaints Yet </h1>
            </>
        )
    }
    else {
        return (
            <>
                <h1> Last Compalints </h1>
                <table border="1" width="900" >
                    <tr>
                        <th> Sr.  </th>
                        <th> Complaint  </th>
                        <th> Register Date</th>
                        <th> Reply Date</th>
                        <th> Ans By Admin </th>
                    </tr>
                    {ans}
                </table >
            </>
        )
    }
}
export default LastStuComplaint