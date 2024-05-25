import React from 'react'
import UserMenu from '../../componets/layout/UserMenu'

const Profile = () => {
  return (
<>
<div className="contianer-fluid m-3 p-3">
    <div className="row">
        <div className="col-md-3">
            <UserMenu />
        </div>
        <div className="col-md-9">
            Your Profile
        </div>

    </div>
</div>
</>
)
}

export default Profile