import React from 'react'
import {useNavigate} from 'react-router-dom'
import Navbar from './navbar'
import "./css/auth.css"
const Login = () => {
let navigate=useNavigate()
  const [user, setUser] = React.useState({ email: "", password: "" })
  let name, value
  const HandleInput = (e) => {
    name = e.target.name
    value = e.target.value
    setUser({ ...user, [name]: value })
  }

  const HandleLogin = async (e) => {
    const { email, password } = user
    e.preventDefault()
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        email, password
      })
    })
    const Data = res.json()
    if (res.status!==200) {
      alert("Invalid Credentials")
    } else {
      navigate("/")


    }
  }
  return (
    <>
      <Navbar />
      <section id='light-mode'>
      <h1 className='Todo_head'> Login</h1>
      <form method='POST'>
        <div className='DarkmodeDiv'>
        <div className='inputSection'>
        <input type="text" className='dataInput' value={user.email} name="email" id="email" placeholder="Enter your Email" onChange={HandleInput} /><br /><br />
        <input type="password" className='dataInput' value={user.password} name="password" id="password" placeholder="Enter your password" onChange={HandleInput} /><br /><br />
        <button value="login" id='subbtn' onClick={HandleLogin}>Log In</button><br /><br />
        </div>
        </div>
      </form>
      </section>
    </>
  )
}

export default Login