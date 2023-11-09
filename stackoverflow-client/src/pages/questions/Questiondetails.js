import React, { useState } from 'react'
import './questions.css'
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'

import upvote from "../../assets/sort-up.svg"
import downvote from "../../assets/sort-down.svg"
import Avatar from "../../components/avatar/Avatar"
import Dispalyanswer from './Dispalyanswer'
import { deleteQuestion, postAnswer, voteQuestion } from "../../actions/question"

const Questiondetails = () => {
  const [answer, setanswer] = useState("")
  const { id } = useParams()

  const user = useSelector((state) => state.currentUserReducer)
  const QuestionList = useSelector((state) => state.questionsReducer)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()

  const url = 'http://localhost:3000'

  const handlePostAns = (e, answerLength) => {
    e.preventDefault()
    if (user === null) {
      alert("login or Signup to answer a question")
      navigate('/Auth')
    } else {
      if (answer === "") {
        alert('Enter an answer before Submitting ')
      } else {
        dispatch(postAnswer({ id, noOfAnswer: answerLength + 1, answerBody: answer, userAnswerd: user.data.result.name, userId: user.data.result._id }))
        setanswer('')
      }
    }
  }

  const handleShare = () => {
    navigator.clipboard.writeText(url + location.pathname)
    alert('Copied user : ' + url + location.pathname)
  }

  const handleDelete = (id) => {
    dispatch(deleteQuestion(id, navigate))
  }

  const handleUpVote = () => {
    dispatch(voteQuestion(id, 'upVote', user.data.result._id))
  }

  const handleDownVote = () => {
    dispatch(voteQuestion(id, 'downVote', user.data.result._id))
  }

  return (
    <div className='question-details-page'>
      {
        QuestionList.data === null ?
          <h1>Loading....</h1> :
          QuestionList.data.filter((question) => question._id === id).map((question) => {
            return (
              <div key={question._id}>
                <section className="question-details-container">
                  <h1>{question.questionTitle}</h1>
                  <div className='question-details-container-2'>
                    <div className="question-votes">
                      <img src={upvote} alt="" width={"18px"} onClick={() => handleUpVote()} />
                      <p>{question.upVote.length - question.downVote.length}</p>
                      <img src={downvote} alt="" width={"18px"} onClick={() => handleDownVote()} />
                    </div>
                    <div style={{ width: "100%" }}>
                      <p className='question-body'>{question.questionBody}</p>
                      <div className='question-details-tags'>
                        {question.questionTags.map((tag) => <p key={tag}>{tag}</p>)}
                      </div>
                      <div className="question-actions-user">
                        <div>
                          <button type="button" onClick={handleShare}>Share</button>
                          {
                            user?.data?.result?._id === question.userId && (
                              <button type="button" onClick={() => handleDelete(question._id)}>Delete</button>
                            )
                          }
                        </div>
                        <div>
                          <p>asked {moment(question.askedOn).fromNow()}</p>
                          <Link to={`/User/${question.userId}`} className="user-link" style={{ color: '#0086d8' }}>
                            <Avatar backgroundColor="orange" px="8px" py="5px" >{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                            <div>
                              {question.userPosted}
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {
                  question.noOfAnswers !== 0 && (
                    <section>
                      <h3>{question.noOfAnswer} Answers</h3>
                      <Dispalyanswer key={question._id} question={question} />
                    </section>
                  )
                }
                <section className="post-ans-container">
                  <h3>Your Answer</h3>
                  <form onSubmit={(e) => { handlePostAns(e, question.answer.length) }}>
                    <textarea name="" id="" cols="30" rows="10" value={answer} onChange={(e) => setanswer(e.target.value)}></textarea>
                    <input type="submit" value="Post Your Answer" className='post-ans-btn' />
                  </form>
                  <p>
                    Browse other Question tagged
                    {
                      question.questionTags.map((tag) => {
                        return (
                          <Link key={tag} to='/Tags' className='ans-tags'> {tag} </Link>
                        )
                      })
                    }
                    or
                    <Link to='/AskQuestion' style={{ textDecoration: "none", color: "#008dff" }}> Ask your own question</Link>
                    .
                  </p>
                </section>
              </div >
            )
          })
      }
    </div >
  )
}

export default Questiondetails
