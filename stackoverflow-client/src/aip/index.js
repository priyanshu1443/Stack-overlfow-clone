import axios from "axios";

const API = axios.create({ baseURL: 'https://stack-overflow-server-p7ef.onrender.com' })

API.interceptors.request.use((req) => {
  if (localStorage.getItem('Profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).data.token}`
  }
  return req
})

export const logIn = (authData) => API.post('/user/login', authData)
export const signUp = (authData) => API.post('/user/signup', authData)

export const postQuestion = (questionData) => API.post('/questions/Ask', questionData)
export const getAllQuestion = () => API.get('/questions/get')
export const deleteQuestion = (id) => API.delete(`/questions/delete/${id}`)
export const voteQuestion = (id, value, userId) => API.patch(`questions/vote/${id}`, { value, userId })

export const postAnswer = (id, noOfAnswer, answerBody, userAnswerd, userId) => API.patch(`/answer/post/${id}`, { noOfAnswer, answerBody, userAnswerd, userId })
export const deleteAnswer = (id, answerId, noOfAnswer) => API.patch(`/answer/delete/${id}`, { answerId, noOfAnswer })

export const fetchAllUsers = () => API.get('/user/getAllUsers')
export const updateProfile = (id, updateData) => API.patch(`/user/update/${id}`, updateData)
