import React from 'react'
import { useSelector } from 'react-redux'
import Users from './Users'

function Userlist() {
  const users = useSelector((state) => state.userReducer)
  return (
    <div className="user-list-container">
      {
        users.map((user) => {
          return <Users user={user} key={user?._id} />
        })
      }
    </div>
  )
}

export default Userlist
