import React from "react"
import './App.css'
import User from './components/user'
import Owner from './components/owner'

function user() {
  const [role, setRole] = React.useState("");
  
  React.useEffect(()=>{
    if(localStorage.getItem("role"))
      setRole(localStorage.getItem("role"));
  },[])

  return (
    <>
    {role === "buyer" || role === "" && <User />}

    {role === "owner" && <Owner />}
    </>
  )
}

export default user
