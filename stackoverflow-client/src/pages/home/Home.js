import React from 'react'
import "../../App.css"

import Navbar from '../../components/navbar/Navbar'
import Leftsidebar from '../../components/leftsidebar/Leftsidebar'
import Rightsidebar from '../../components/rightsidebar/Rightsidebar'
import Homemainbar from '../../components/homemainbar/Homemainbar'


function Home() {
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

export default Home
