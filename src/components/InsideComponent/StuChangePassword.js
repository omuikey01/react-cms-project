import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

let Stupasschange = () => {
    let { passnum } = useParams()
    let [myData, setMyData] = useState({})
    let [oldPass, setOldPass] = useState("")
    let [newPass, setnewPass] = useState("")
    let [reNewPass, setreNewPass] = useState("")
    let Navigate = useNavigate()

    let url = `http://localhost:4000/Register/${passnum}`;

    let loadData = () => {
        axios.get(url).then((res) => {
            setMyData(res.data)
        })
    }
    useEffect(() => {
        loadData()
    }, [])

    let oldCheck = () => {
        if (oldPass === myData.password) {
            document.getElementById("passwordinput").style.display = "block"
            document.getElementById("opcbtn").style.display = "none"
            document.getElementById("opcbtnSubmit").style.display = "Block"

        }
        else {
            alert("Old Password Not Matched")
            setOldPass("")
        }
    }

    let PassChangeSubmit = () => {
        if (newPass === reNewPass) {
            axios.patch(url, { "password": reNewPass }).then((res) => {
                alert("Successful Updated Your Password!!")
                Navigate("/studash")
            })
        }
        else {
            alert("Confirm Password Not Matched ")
            setnewPass("")
            setreNewPass("")
        }
    }
    return (
        <>
            <section className="profileDetails">
                <h1> Change Your Password </h1>
                <label> Old Password </label> <input type="password" name="oldPass" value={oldPass} onChange={(e) => { setOldPass(e.target.value) }} />

                <div id="passwordinput">
                    <label> New Password </label> <input type="password" name="newPass" value={newPass} onChange={(e) => { setnewPass(e.target.value) }} required /> <label> Re-Password </label> <input type="password" name="reNewPass" value={reNewPass} onChange={(e) => { setreNewPass(e.target.value) }} required />
                </div>

                <button onClick={oldCheck} id="opcbtn" > Submit </button>
                <button onClick={PassChangeSubmit} id="opcbtnSubmit" > Submit </button>
            </section>
        </>
    )
}
export default Stupasschange
