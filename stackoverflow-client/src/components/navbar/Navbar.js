import React, { useEffect } from 'react'
import "./navbar.css"
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import decode from 'jwt-decode'

import logo from "../../assets/logo.png"
import search from "../../assets/magnifying-glass-solid.svg"
import Avatar from "../../components/avatar/Avatar"
import setCurrentUser from '../../actions/currentuser'

function Navbar() {
  const user = useSelector((state) => (state.currentUserReducer))
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" })
    navigate('/')
    dispatch(setCurrentUser(null))
  }

  const verifyToken = () => {
    const token = user?.data.token;
    if (token) {
      const decodedToken = decode(token)
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        handleLogout()
      }
    }
  }

  useEffect(() => {
    verifyToken()
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))))
    // eslint-disable-next-line
  }, [dispatch])



  return (
    <nav className='main-nav'>
      <div className="navbar">
        <Link to="/" className='nav-item nav-logo'>
          <img src={logo} alt="Logo" />
        </Link>
        <Link to="/" className='nav-item nav-btn'>About</Link>
        <Link to="/" className='nav-item nav-btn'>Products</Link>
        <Link to="/" className='nav-item nav-btn'>For Teams</Link>
        <form>
          <input type="text" placeholder='Search...' />
          <img className='search-icon' src={search} alt="search" width="18px" />
        </form>
        {
          user === null ?
            <Link to="/Auth" className='nav-item nav-links'>Log in</Link>
            :
            <>
              <Avatar
                backgroundColor="#009dff"
                px="10px"
                py="5px"
                borderRadius="50%"
                color="white"
              >
                <Link style={{ textDecoration: "none", color: "white" }} to={`/Users/${user.data.result._id}`} className=''>
                  {user.data.result.name[0].toUpperCase()}
                </Link>
              </Avatar>
              <button className='nav-item nav-links' onClick={() => handleLogout()}>Log Out</button>
            </>
        }
      </div>
    </nav>
  )
}

export default Navbar
