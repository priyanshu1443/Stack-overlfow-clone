import express from "express";
import auth from "../middlewares/auth.js";
import { postAnswerController, deleteAnswer } from "../controllers/Answers.js"

const router = express.Router()

router.patch('/post/:id', auth, postAnswerController)
router.patch('/delete/:id', auth, deleteAnswer)

export default router
