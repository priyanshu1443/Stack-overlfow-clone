import React from 'react'
import './homemainbar.css'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import Questions from './Questions'
import { } from 'react-router-dom';

function Homemainbar() {
  // const QuestionList = [
  //   {
  //     _id: 1,
  //     upVotes: 6,
  //     downVotes: 5,
  //     noOfAnswers: 2,
  //     QuestionTitle: "What is a Function",
  //     QuestionBody: "It means to be",
  //     QuestionTags: ["js", "k", "python"],
  //     userPosted: "jhon",
  //     userID: 1,
  //     askedOn: "jan 1",
  //     answer: [
  //       {
  //         answerBody: "Answer",
  //         userAnswered: "Kumar",
  //         answeredOn: "Jan 2",
  //         userId: 3
  //       }
  //     ]
  //   },
  //   {
  //     _id: 2,
  //     upVotes: 5,
  //     downVotes: 3,
  //     noOfAnswers: 2,
  //     QuestionTitle: "What is a Function",
  //     QuestionBody: "It means to be",
  //     QuestionTags: ["js", "k", "python"],
  //     userPosted: "jhon",
  //     userID: 2,
  //     askedOn: "jan 1",
  //     answer: [
  //       {
  //         answerBody: "Answer",
  //         userAnswered: "Kumar",
  //         answeredOn: "Jan 2",
  //         userId: 1
  //       }
  //     ]
  //   },
  //   {
  //     _id: 3,
  //     upVotes: 5,
  //     downVotes: 3,
  //     noOfAnswers: 2,
  //     QuestionTitle: "What is a Function",
  //     QuestionBody: "It means to be",
  //     QuestionTags: ["js", "k", "python"],
  //     userPosted: "jhon",
  //     userID: 3,
  //     askedOn: "jan 1",
  //     answer: [
  //       {
  //         answerBody: "Answer",
  //         userAnswered: "Kumar",
  //         answeredOn: "Jan 2",
  //         userId: 2
  //       }
  //     ]
  //   },
  // ]


  const location = useLocation()
  const navigate = useNavigate()
  const user = 1;

  const QuestionList = useSelector(state => state.questionsReducer)


  const checkAuth = () => {
    if (user === null) {
      alert("Login or signup to ask a question");
      navigate('/auth')
    }
    else {
      navigate('/AskQuestion')
    }
  }

  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>}
        <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
      </div>
      <div>
        {
          QuestionList.data === null ?
            <h1>Loading...</h1> :
            <>
              <p>{QuestionList.data.length} questions</p>
              {QuestionList.data.reverse().map((question) => <Questions Question={question} key={question._id} />)}
            </>
        }
      </div>
    </div>
  )
}

export default Homemainbar
