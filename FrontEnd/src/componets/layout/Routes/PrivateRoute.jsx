import React,{useState , useEffect} from 'react'
import { useAuth } from '../../../context/Auth'
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../../Spinner';

export default function PrivateRoute() {
    const[ok,SetOk] = useState(false);
    const[auth,setAuth] = useAuth();

    useEffect(() => {
        const authCheck = async () => {
          if (auth?.token) {
            try {
              const res = await axios.get("http://localhost:3000/api/v1/auth/user-auth", {
                headers: {
                  "Authorization": auth?.token,
                },
              });
              SetOk(res.data.ok);
            } catch (error) {
              // Handle errors appropriately (e.g., display an error message)
              console.error('Error during authentication check:', error);
            }
          }
        };
      
        if (auth?.token) {
          authCheck(); // Call only if token exists
        }
      }, [auth?.token]); 
    return ok ? <Outlet /> :<Spinner /> 
  
}

