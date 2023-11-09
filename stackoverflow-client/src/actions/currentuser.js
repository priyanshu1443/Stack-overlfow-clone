const setCurrentUser = (data) => {
  return {
    type: 'FETCH__CURRENT_USER',
    payload: data
  }
}

export default setCurrentUser
