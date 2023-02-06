import React from 'react'
import { useNavigate } from 'react-router-dom';


const UserProfile = () => {
  const navigate=useNavigate()
  const HandleUser = async () => {
    try {
      const res = await fetch("/secretpage", {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });
      const data = await res.json()
      console.log(data)
    }
    catch (e) {
      alert("You Have to Login To Access This Page...")
      navigate("/")
    }
  }

  React.useEffect(() => {
    HandleUser()
  }, [])


  return (
    <>
      <form method='GET'>
        <h1>This Is User Page</h1>
      </form>
    </>
  )
}


export default UserProfile

  