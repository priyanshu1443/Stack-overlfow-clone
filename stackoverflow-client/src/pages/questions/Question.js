import React from 'react'
import "../../App.css"
import Leftsidebar from '../../components/leftsidebar/Leftsidebar'
import Rightsidebar from '../../components/rightsidebar/Rightsidebar'
import Homemainbar from '../../components/homemainbar/Homemainbar'
import Navbar from '../../components/navbar/Navbar'

function Question() {
  return (
    <>
      <Navbar />
      <div className='home-container-1'>
        <Leftsidebar />
        <div className="home-container-2">
          <Homemainbar />
          <Rightsidebar />
        </div>
      </div>
    </>
  )
}

export default Question
