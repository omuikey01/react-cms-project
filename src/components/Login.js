import axios from 'axios'
import { useState } from 'react'

let Login = () => {
    let [loginData, setLoginData] = useState({})

    let datamanage = (e) => {
        let name = e.target.name
        let value = e.target.value
        setLoginData({ ...loginData, [name]:value })
        console.log(loginData)
    }


    let Logindatasubmit = (e) => {
        e.preeventDefault();
        let url = `http://localhost:4000/Register?email=${loginData.loginid}`
        axios.get(url).then((res) => {
            console.log(res.data);
            // alert(res.data)
        })

    }



    return (
        <>
            <section className="login">
                <form>
                    <h1> Login Process </h1>
                    <label> Email Id </label>
                    <input type="email" name='loginid' value={loginData.loginid} onChange={datamanage} />
                    <label> Password </label>
                    <input type="password" name='loginpass' value={loginData.loginpass} onChange={datamanage} />
                    <label> Account As </label>
                    <select name='dropdown' onClick={datamanage} >
                        <option value='no select' > Select any one  </option>
                        <option value="admin" > Admin  </option>
                        <option value="student" > Student  </option>
                    </select>
                    <button onClick={Logindatasubmit} > Login Now </button>
                </form>

                {/* <div className="login_link">
                    <span> Don't Have Account <Link to="/register" > Click Here </Link> </span>
                </div> */}

            </section>
        </>
    )
}
export default Login
