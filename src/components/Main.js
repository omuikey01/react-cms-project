import { Link, useNavigate } from 'react-router-dom'
import Img1 from '../images/Complaints.jpg'
import axios from 'axios'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Login, Logout } from '../StudentAccountSlice'

let Main = () => {
    let [loginData, setLoginData] = useState({})
    let myDispatch = useDispatch()
    let myNav = useNavigate()

    let datamanage = (e) => {
        let name = e.target.name
        let value = e.target.value
        setLoginData({ ...loginData, [name]: value })
        console.log(loginData)
    }

    let Logindatasubmit = (e) => {

        e.preventDefault()
        let url = `http://localhost:4000/Register?email=${loginData.loginid}`
        axios.get(url).then((res) => {
            console.log(res.data);
            if (res.data.length === 1) {
                if (res.data[0].password === loginData.loginpass) {
                    // alert("Password Match")
                    myDispatch(Login(res.data[0].fullname))
                    myNav("/studash")
                }
                else {
                    alert("Password not match")
                }
            }
            else {
                alert("Email Not Match ")

            }
        })

    }

    return (
        <>
            <section>
                <div className="CompTitle pointer" >
                    WELCOME TO COMPLAINT   MANAGEMENT SYSTEM
                </div>
                <div className="mainpageboxes">
                    <div className='logininmainpage'>
                        <form>
                            <h1> Login Process </h1>
                            <label> Email Id </label>
                            <input type="email" name='loginid' value={loginData.loginid} onChange={datamanage} />
                            <label> Password </label>
                            <input type="password" name='loginpass' value={loginData.loginpass} onChange={datamanage} />
                            <label> Account As </label>
                            <select name='dropdown' onChange={datamanage} >
                                <option value='no select' > Select any one  </option>
                                <option value="admin" > Admin  </option>
                                <option value="student" > Student  </option>
                            </select>
                            <button onClick={Logindatasubmit} > Login Now </button>
                        </form>
                    </div>
                    <div className="mainBoxImages" >
                        <img width="100%" height="300px" src={Img1} alt="img1" />
                        <Link to="/register"> <button> Fresh Registration </button> </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Main