import mongoose from "mongoose"
import Question from "../models/Question.js";

export const postAnswerController = async (req, res) => {
  const { id: _id } = req.params;
  const { noOfAnswer, answerBody, userAnswerd, userId } = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send('question unavilable...')
  }
  updateNoOfQuestion(_id, noOfAnswer)
  try {
    const updatedQuestion = await Question.findByIdAndUpdate(
      _id,
      {
        $addToSet: {
          'answer': [{
            answerBody,
            userAnswerd,
            userId
          }]
        }
      },
      {
        new: true
      }
    )
    res.status(200).json([updatedQuestion])
  } catch (error) {
    res.status(400).json(error)
  }
}

const updateNoOfQuestion = async (_id, noOfAnswer) => {
  try {
    await Question.findByIdAndUpdate(_id, {
      $set: {
        'noOfAnswer': noOfAnswer
      }
    })
  } catch (error) {
    console.log(error)
  }
}

export const deleteAnswer = async (req, res) => {
  const { id: _id } = req.params
  const { answerId, noOfAnswer } = req.body
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send('Question unavilable...')
  }
  if (!mongoose.Types.ObjectId.isValid(answerId)) {
    return res.status(404).send('Answer unavilable...')
  }
  updateNoOfQuestion(_id, noOfAnswer)
  try {
    await Question.updateOne(
      {
        _id
      },
      {
        $pull: {
          'answer': {
            _id: answerId
          }
        }
      }
    )
    res.status(200).json({ message: "Successfully deleted ..." })
  } catch (error) {
    res.status(405).json(error)
  }
}
