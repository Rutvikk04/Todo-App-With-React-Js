import React from 'react'
import { Link } from 'react-router-dom'
import './css/todos.css'

const Navbar = () => {
    const DarkMode = () => {
        var darkmodestyle = document.getElementById("light-mode")
        darkmodestyle.classList.toggle("dark-mode")

        var darkbtn = document.getElementById("btn")
        if (darkbtn.innerHTML === 'Dark Mode') {
            darkbtn.innerHTML = 'Light Mode'
        }
        else {
            darkbtn.innerHTML = 'Dark Mode'
        }
    }
    return (
        <>
            <div className='navbar'>
                <Link className='navlink' to="/" >Home</Link>
                <Link className='navlink' to="/about" >About Us</Link>
                <Link className='navlink' to="/Login" >Login</Link>
                <Link className='navlink' to="/SignUp" >Sign Up</Link>
                <Link className='navlink' to="/UserProfile" >User</Link>

                <button id="btn" onClick={DarkMode}>Dark Mode</button>
            </div>
        </>
    )
}

export default Navbar