
const currentUserReducer = (state = null, action) => {
  switch (action.type) {
    case "FETCH__CURRENT_USER":
      return action.payload;

    default:
      return state
  }
}

export default currentUserReducer
