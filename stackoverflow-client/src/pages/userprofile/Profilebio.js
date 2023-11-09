import React from 'react'

function Profilebio({ currentProfile }) {
  return (
    <div>
      <div>
        <h4>Tags watched</h4>
        {currentProfile[0]?.tags.length !== 0 ? currentProfile[0]?.tags.map((tag) => <p key={tag}>{tag}</p>) : <p>0 tags watched</p>}
      </div>
      <div>
        <h4>About</h4>
        {currentProfile[0]?.about.length !== 0 ? <p>{currentProfile[0].about}</p> : <p>Bio not found</p>}
      </div>
    </div>
  )
}

export default Profilebio
