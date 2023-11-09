import * as api from "../aip"

export const askQustion = (questionData, navigate) => async (dispatch) => {
  try {
    await api.postQuestion(questionData)
    dispatch({
      type: "POST_QUESTION"
    })
    dispatch(fetchAllQuestion())
    navigate('/')
  } catch (error) {
    console.log(error)
  }
}


export const fetchAllQuestion = () => async (dispatch) => {
  try {
    const { data } = await api.getAllQuestion()
    dispatch({
      type: "FETCH_ALL_QUESTION",
      payload: data
    })
  } catch (error) {
    console.log(error)
  }
}

export const postAnswer = (answerData) => async (dispatch) => {
  try {
    const { id, noOfAnswer, answerBody, userAnswerd, userId } = answerData
    const { data } = await api.postAnswer(id, noOfAnswer, answerBody, userAnswerd, userId)
    dispatch({
      type: "POST_ANSWER",
      payload: data
    })
    dispatch(fetchAllQuestion())
  } catch (error) {
    console.log(error)
  }
}

export const deleteQuestion = (id, navigate) => async (dispatch) => {
  try {
    api.deleteQuestion(id)
    dispatch(fetchAllQuestion())
    navigate('/')
  } catch (error) {
    console.log(error)
  }
}


export const deleteAnswer = (anserdata) => async (dispatch) => {
  const { id, answerId, noOfAnswer } = anserdata;
  try {
    await api.deleteAnswer(id, answerId, noOfAnswer)
    dispatch(fetchAllQuestion())
  } catch (error) {
    console.log(error)
  }
}


export const voteQuestion = (id, value, userId) => async (dispatch) => {
  try {
    api.voteQuestion(id, value, userId)
    dispatch(fetchAllQuestion())
  } catch (error) {
    console.log(error)
  }
}
