import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

function Questions({ Question }) {
  return (
    <div className='display-questions-container'>
      <div className="display-votes-ans">
        <p>{Question.upVote.length - Question.downVote.length}</p>
        <p>Votes</p>
      </div>
      <div className="display-votes-ans">
        <p>{Question.noOfAnswer}</p>
        <p>Answer</p>
      </div>
      <div className='display-question-details'>
        <Link to={`/Questions/${Question._id}`} className='question-title-link'> {Question.questionTitle}</Link>
        <div className='display-tags-time'>
          <div className="display-tags">
            {Question.questionTags.map((tag) => <p key={tag}>{tag}</p>)}
          </div>
          <p className='display-time'>
            asked {moment(Question.askedOn).fromNow() + " " + Question.userPosted}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Questions
