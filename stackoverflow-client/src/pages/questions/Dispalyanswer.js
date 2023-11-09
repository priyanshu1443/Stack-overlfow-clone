import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import Avatar from '../../components/avatar/Avatar'
import { deleteAnswer } from "../../actions/question"

function Dispalyanswer({ question }) {
  const location = useLocation()
  const user = useSelector((state) => state.currentUserReducer)
  const dispatch = useDispatch()

  const url = 'http://localhost:3000'
  const { id } = useParams()

  const handleShare = () => {
    navigator.clipboard.writeText(url + location.pathname)
    alert('Copied user : ' + url + location.pathname)
  }

  const handleDelete = (answerId) => {
    const noOfAnswer = question.noOfAnswer[0] - 1
    dispatch(deleteAnswer({ id, answerId, noOfAnswer }))
  }

  return question.answer.map((ans) => {
    return (
      <div className='display-ans' key={ans._id}>
        <p>{ans.answerBody}</p>
        <div className="question-actions-user">
          <div>
            <button type='button' onClick={handleShare}>Share</button>
            {
              user?.data?.result?._id === ans.userId && (
                <button type="button" onClick={() => handleDelete(ans._id)}>Delete</button>
              )
            }
          </div>
          <div>
            <p>Answer {ans.answeredOn}</p>
            <Link to={`/User/${ans.userId}`} className="user-link" style={{ color: '#0086d8' }}>
              <Avatar backgroundColor="green" px="8px" py="5px" >{ans.userAnswerd[0].toUpperCase()}</Avatar>
              <div>
                {ans.userAnswerd}
              </div>
            </Link>
          </div>
        </div>
      </div>
    )
  })
}

export default Dispalyanswer
