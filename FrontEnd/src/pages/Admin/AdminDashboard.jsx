import React from 'react'
import AdminMenu from '../../componets/layout/AdminMenu'
import { useAuth } from '../../context/Auth'
function AdminDashboard() {
  const[auth,setAuth] = useAuth();
    return (
         <>  
         <div className="contianer-fluid m-3 p-3">
            <div className="row">
                <div className="col-md-3"> <AdminMenu /> </div>
                <div className="col-md-9"> Content </div>
                <div className="card w-75 p-3">
                    <h1>
           Hi: {auth?.user?.name }

                    </h1>
                </div>
            </div>
         </div>
       
        </>

  )
}

export default AdminDashboard