import React from 'react'

import './user.css'
import '../../App.css'
import Leftsidebar from '../../components/leftsidebar/Leftsidebar'
import Userlist from './Userlist'
import Navbar from '../../components/navbar/Navbar'

function User() {
  return (
    <>
      <Navbar />
      <div className='home-container-1'>
        <Leftsidebar />
        <div className="home-container-2" style={{ marginTop: "30px" }}>
          <h1 style={{ fontWeight: "400" }}>Users</h1>
          <Userlist />
        </div>
      </div>
    </>
  )
}

export default User
