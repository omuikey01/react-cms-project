import axios from "axios";
import { useEffect, useState } from "react";

let SolvedQuery = () => {
    let [queryData, setQueryData] = useState([])
    let [Newdata, setNewData] = useState([])

    let loadData = () => {
        let url = `http://localhost:4000/Complaints`;
        axios.get(url).then((res) => {
            setQueryData(res.data)
        })
        let newurl = `http://localhost:4000/Register`;
        axios.get(newurl).then((res) => {
            setNewData(res.data)
        })
    }

    useEffect(() => {
        loadData()
    }, [])

    let ans = queryData.map((key) => {
        if (key.ans !== "") {
            let getdata = ""
            for (var i = 0; i < Newdata.length; i++) {
                if (key.stuid === Newdata[i].id) {
                    getdata = Newdata[i].fullname
                }
            }
            return (
                <>
                    <tr>
                        <td> {getdata} </td>
                        <td> {key.subject}  </td>
                        <td> {key.queryexplain} </td>
                        <td> {key.datetime} </td>
                        <td> {key.ans}  </td>
                    </tr>
                </>
            )
        }
    })
    return (
        <>
            <h1> Solved Queryies </h1>
            <table border="1" >
                <tr>
                    <th> Name </th>
                    <th> Subject </th>
                    <th> Description </th>
                    <th> Date of Post </th>
                    <th> Replyed </th>
                </tr>
                {ans}
            </table>
        </>
    )
}
export default SolvedQuery