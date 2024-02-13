import { Link, useNavigate } from 'react-router-dom'
import Img1 from '../images/Complaints.jpg'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Login } from '../StudentAccountSlice'
import { adminLogin } from './Admin/AdminSlice'


if (navigator.onLine) {
    console.log("Internet connection is available.");
  } else {
    console.log("No Internet Connection");
  }


let Main = () => {
    let [loginData, setLoginData] = useState({})
    let [admin, setAdmin] = useState({})
    let [stuData, SetStuData] = useState([])
    let myNav = useNavigate()
    let myDispatch = useDispatch()

    let datamanage = (e) => {
        let name = e.target.name
        let value = e.target.value
        setLoginData({ ...loginData, [name]: value })
    }

    let loaddata = () => {
        axios.get('http://localhost:8000/super/admin/').then((res) => { setAdmin(res.data) })
        axios.get("http://127.0.0.1:8000/register/student/").then((res) => {
            SetStuData(res.data)
        })
    }
    useEffect(() => {
        loaddata()
    }, [])


    console.log(admin)
    console.log(stuData)


    let Logindatasubmit = (e) => {
        if (loginData.dropdown === "admin") {
            e.preventDefault()

            if (admin[0].email === loginData.loginid) {
                if (admin[0].password === loginData.loginpass) {
                    let name = admin[0].name;
                    myDispatch(adminLogin(name))
                    myNav("/admindash")
                }
                else {
                    alert("Password not Match ")
                }
            }
            else {
                alert("Email Not Found ")
            }
        }
        else {
            let info = {}
            e.preventDefault()
            let cnt = 0
            for (var i = 0; i < stuData.length; ++i) {
                if (stuData[i].email === loginData.loginid) {
                    cnt++
                    if (stuData[i].password === loginData.loginpass) {
                        info = {
                            "name": stuData[i].fullname,
                            "idd": stuData[i].id
                        }
                        myDispatch(Login(info))
                        myNav("/studash")
                    }
                    else {
                        alert("Password not Match ")
                    }
                    break;
                }
            }
            if (cnt === 0) {
                alert("Email Not Found")
            }
        }
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
                                <option value="student"> Student  </option>
                                <option value="admin" > Admin  </option>
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