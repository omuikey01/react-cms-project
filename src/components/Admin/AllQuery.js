import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

let AllQuery = () => {
    let [query, setQuery] = useState([])
    let [allRegisterData, setAllRegisterData] = useState([])


    let loadData = () => {
        let url = `http://localhost:4000/Complaints`;
        axios.get(url).then((response) => {
            setQuery(response.data)
        })

        url = `http://localhost:4000/Register`
        axios.get(url).then((res) => {
            setAllRegisterData(res.data)
        })
    }
    useEffect(() => {
        loadData()
    }, [])

    let ans = query.map((key) => {
        let name = "";
        for (var i = 0; i < allRegisterData.length; i++) {
            if (key.stuid === allRegisterData[i].id) {
                name = allRegisterData[i].fullname
            }
        }
        return (
            <>
                <tr>
                    <td> {name} </td>
                    <td> {key.subject}  </td>
                    <td> {key.queryexplain} </td>
                    <td> {key.datetime} </td>
                    <td>
                        <Link to={"/admindash/adminreply/" + key.id} > <span className="replyClass">Replay </span> </Link>
                    </td>
                </tr>
            </>
        )
    })


    return (
        <>
            <h1> All Querys..... </h1>
            <table border="1">
                <tr>
                    <th> Name </th>
                    <th> Subject </th>
                    <th> Description </th>
                    <th> Date of Post </th>
                    <th> Replay </th>
                </tr>
                {ans}
            </table>
        </>
    )
}
export default AllQuery