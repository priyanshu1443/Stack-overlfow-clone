import React, { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Allroutes from './Allroutes'
import { fetchAllQuestion } from "./actions/question"
import { fetchAllUsers } from './actions/user'


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllQuestion())
    dispatch(fetchAllUsers())
    // eslint-disable-next-line
  }, [dispatch])
  return (
    <div className='App'>
      <Router>
        <Allroutes />
      </Router>
    </div>
  )
}

export default App
