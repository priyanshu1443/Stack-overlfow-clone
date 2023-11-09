import React from 'react'
import "./rightsidebar.css"
import Widget from './Widget'
import Widgettags from './Widgettags'

function Rightsidebar() {
  return (
    <div className="right-sidebar">
      <Widget />
      <Widgettags />
    </div>
  )
}

export default Rightsidebar
