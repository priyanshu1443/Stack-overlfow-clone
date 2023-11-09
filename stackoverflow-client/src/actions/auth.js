import * as api from "../aip"
import setCurrentUser from "./currentuser"



export const signup = (authData, navigate) => async (dispatch) => {
  try {
    const data = await api.signUp(authData)
    dispatch({
      type: "AUTH",
      data
    })
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    navigate('/')
  } catch (error) {
    console.log(error)
  }
}

export const login = (authData, navigate) => async (dispatch) => {
  try {
    const data = await api.logIn(authData)
    console.log(data)
    dispatch({
      type: "AUTH",
      data
    })
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    navigate("/")
  } catch (error) {
    console.log(error)
  }
}

