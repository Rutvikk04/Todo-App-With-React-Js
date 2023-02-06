import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './navbar'


const Signup = () => {
    let navigate = useNavigate()
    const [user, setUser] = React.useState({ name: "", age: "", gender: "", email: "", password: "", cpassword: "" })
    let name, value
    const HandleChange = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value })
    }
    const HandleSubmit = async (e) => {
        const { name, age, gender, email, password, cpassword } = user
        e.preventDefault()

        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name, age, gender, email, password, cpassword
            })
        })

        const data = res.json()
        if (res.status !== 200) {
            alert("Something Went Wrong")
        }
        else {
            navigate('/Login')

        }

    }
    return (
        <>
            <Navbar />
            <section id='light-mode'>
            <h3 className="Todo_head">New User Registration</h3>
            <form method='POST'>
                <div className='DarkmodeDiv'>
                <div className='inputSection'>
                    <input className='dataInput' value={user.name} type="text" placeholder="name" name="name" id="username" onChange={HandleChange} /><br /><br />
                    <input className='dataInput' value={user.age} type="number" placeholder="age" name="age" id="age" onChange={HandleChange} /><br /><br />
                   <div className='dataInput'> Gender:<input value="male" type="radio" placeholder="gender" name="gender" onChange={HandleChange} />Male 
                    <input value="female" type="radio" placeholder="gender" name="gender" onChange={HandleChange} />Female</div><br />
                    <input className='dataInput' value={user.email} type="text" placeholder="Email Address" name="email" id="email" onChange={HandleChange} /><br /><br />
                    <input className='dataInput' value={user.password} type="password" placeholder="password" name="password" id="password" onChange={HandleChange} /><br /><br />
                    <input className='dataInput' value={user.cpassword} type="password" placeholder="Confirm password" name="cpassword" id="cpassword" onChange={HandleChange} /><br /><br />
                    <button type="submit" id='subbtn' onClick={HandleSubmit}>Submit</button>
                </div></div>
            </form>
            </section>
        </>
    )
}

export default Signup