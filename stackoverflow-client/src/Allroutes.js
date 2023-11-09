import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Auth from "./pages/auth/Auth"
import Question from './pages/questions/Question'
import Askquestion from './pages/askquestions/Askquestion'
import Displayquestion from './pages/questions/Displayquestion'
import Tags from './pages/Tags/Tags'
import User from './pages/user/User'
import Userprofile from './pages/userprofile/Userprofile'

function Allroutes() {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/auth' element={<Auth />} />
      <Route exact path='/Questions' element={<Question />} />
      <Route exact path='/AskQuestion' element={<Askquestion />} />
      <Route exact path='/Questions/:id' element={<Displayquestion />} />
      <Route exact path='/Tags' element={<Tags />} />
      <Route exact path='/Users' element={<User />} />
      <Route exact path='/Users/:id' element={<Userprofile />} />
    </Routes>
  )
}

export default Allroutes
