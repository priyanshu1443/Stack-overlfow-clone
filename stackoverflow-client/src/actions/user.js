import * as api from "../aip/index"

export const fetchAllUsers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAllUsers()
    localStorage.setItem("AllUsers", JSON.stringify(data))
    dispatch({
      type: "FETCH_USERS",
      payload: data
    })
  } catch (error) {
    console.log(error)
  }
}


export const updateProfile = (id, updateData) => async (dispatch) => {
  try {
    const { data } = await api.updateProfile(id, updateData)
    dispatch({
      type: "UPDATE_CURRENT_USER",
      payload: data
    })
  } catch (error) {
    console.log(error)
  }
}
