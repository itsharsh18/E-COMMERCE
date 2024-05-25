import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Spinner = ({path="login"})=> {
 const [count,setCount] = useState(5);
 const navigate = useNavigate();
 useEffect(()=>{
    const interval = setInterval(()=>{
        setCount((prevValue)=> --prevValue)
    },1000)
    count === 0 && navigate(`/${path}`)
    return () => clearInterval(interval);
 },[count,navigate,path])
    return (
    <>
    <div className="spiner-text">redirecting u in {count} seconds</div>
   <div className="spinner-border m-5" role="status">
  <span className="visually-hidden">Loading...</span>
</div>

    </>
  )
}

export default Spinner