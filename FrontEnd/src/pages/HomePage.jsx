import React ,{useEffect}from 'react'
import { useAuth } from '../context/Auth.jsx'

const HomePage = ()=> {
  const [auth ,setAuth ] = useAuth();
  return (
    <div>
     <h5>  {JSON.stringify(auth , null  ,4 )}  </h5>
    </div>
    
  )
}

export default HomePage