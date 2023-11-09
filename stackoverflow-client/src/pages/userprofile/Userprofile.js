import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import moment from 'moment'

import '../../App.css'
import './userprofile.css'
import cakecandles from '../../assets/cake-candles-solid.svg'
import pen from '../../assets/pen-solid.svg'
import Leftsidebar from '../../components/leftsidebar/Leftsidebar'
import Avatar from '../../components/avatar/Avatar'
import Editprofileform from './Editprofileform'
import Profilebio from './Profilebio'
import Navbar from '../../components/navbar/Navbar'

function Userprofile() {
  const [Switch, setSwitch] = useState(false)

  const { id } = useParams()

  const allusers = JSON.parse(localStorage.getItem('AllUsers'))

  const currentUser = useSelector((state) => state.currentUserReducer)
  const currentProfile = allusers.filter((user) => user._id === id)

  return (
    <>
      <Navbar />
      <div className='home-container-1 '>
        <Leftsidebar />
        <div className='home-container-2 '>
          <section>
            <div className="user-details-container">
              <div className="user-details">
                <Avatar backgroundColor="purple" py="30px" px="40px" color="white" borderRadius="none" fontSize="50px" cursor="pointer">
                  {currentProfile[0].name.charAt(0).toUpperCase()}
                </Avatar>
                <div className="user-name">
                  <h1>{currentProfile[0].name}</h1>
                  <p><img src={cakecandles} alt="" width="15px" /> Joined {moment(currentProfile[0].joinedOn).fromNow()}</p>
                </div>
              </div>
              {
                currentUser?.data?.result._id === id && (
                  <button type='button' className='edit-profile-btn' onClick={(e) => setSwitch(!Switch)}>
                    <img src={pen} alt="" width="15px" /> Edit Profile
                  </button>
                )
              }
            </div>
            {Switch ? <Editprofileform currentUser={currentUser} setSwitch={setSwitch} /> : <Profilebio currentProfile={currentProfile} />}
          </section>
        </div>
      </div>
    </>
  )
}

export default Userprofile
