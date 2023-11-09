import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema({
  questionTitle: {
    type: String,
    required: "Question must have a title"
  },
  questionBody: {
    type: String,
    required: "Question must have a body"
  },
  questionTags: {
    type: [String],
    require: "Question must have tags"
  },
  noOfAnswer: {
    type: [String],
    default: 0
  },
  upVote: {
    type: [String],
    default: []
  },
  downVote: {
    type: [String],
    default: []
  },
  userPosted: {
    type: String,
    required: "Question must have a author"
  },
  userId: {
    type: String
  },
  askedOn: {
    type: Date,
    default: Date.now,
  },
  answer: [{
    answerBody: String,
    userAnswerd: String,
    userId: String,
    answerdOn: {
      type: Date,
      default: Date.now
    }
  }]
})

export default mongoose.model("Question", QuestionSchema)
