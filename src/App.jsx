import React from "react"
import './App.css'
import User from './components/user'
import Owner from './components/owner'

function user() {
  const [role, setRole] = React.useState(1);
  
  React.useEffect(()=>{
    if(localStorage.getItem("role"))
      setRole(localStorage.getItem("role"));
  },[])

  return (
    <>
    {role === 0 && <User />}

    {role === 1 && <Owner />}
    </>
  )
}

export default user
