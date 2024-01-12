import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"


let Registration = () => {
    let [regidata, setRegidata] = useState({})
    let myNav = useNavigate()

    let registerdata = (e) => {
        let name = e.target.name
        let value = e.target.value
        setRegidata({ ...regidata, [name]: value })
        console.log(regidata);
    }


    let DataSave = (e) => {
        e.preventDefault()
        let data = {
            "fullname" : regidata.fullname,
            "city" : regidata.city,
            "contact" : regidata.contact,
            "dropdown" : regidata.dropdown,
            "gender" : regidata.gender,
            "email" : regidata.email,
            "password" : regidata.password,
        }
        let url = 'http://localhost:4000/Register'
        axios.post(url, data).then((res) => {
            myNav("/")
        })
    }

    return (
        <>
            <form className="_form"  >
                <h1 className="H1Heading"> Registration Process </h1>
                <label> Full Name </label>
                <input type="text" name="fullname" value={regidata.fullname} onChange={registerdata} />
                <label> City </label>
                <input type="text" name="city" value={regidata.city} onChange={registerdata} />
                <label> Contact </label>
                <input type="tel" name="contact" value={regidata.contact} onChange={registerdata} />



                <label > As a </label >
                <select name="dropdown" onChange={registerdata} required>
                    <option value="nodata" select> Select </option>
                    <option value="student" > Student </option>
                    <option value="teacher"> Teacher </option>
                </select>
                <br />

                <label> Gender </label>
                <input style={{ "width": "30px" }} type="radio" value="male" name="gender" onChange={registerdata} /> Male
                <input style={{ "width": "30px" }} type="radio" value="female" name="gender" onChange={registerdata} /> Female
                <br />


                <label> Email </label>
                <input type="email" name="email" value={regidata.email} onChange={registerdata} />
                <label> Password </label>
                <input type="password" name="password" value={regidata.password} onChange={registerdata} />
                <div className="regibtnmt">
                    <button className="regibtn" type="submit" onClick={DataSave} > Registration </button>
                    <button type="reset"> Reset </button>
                </div>
                <div className="login_link">
                    <span>  Already Have Account <Link to="/" > Click Here </Link> </span>
                </div>
            </form>
        </>
    )
}
export default Registration

