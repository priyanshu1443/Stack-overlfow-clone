import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import userRoutes from "./routes/users.js"
import questionRoutes from "./routes/questions.js"
import answerRouters from "./routes/answers.js"


const app = express()
dotenv.config()

app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))

// const corsOptions = {
//   origin: 'http://localhost:3000', // Replace with the actual frontend origin
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   allowedHeaders: 'Content-Type,Authorization', // Specify the headers you want to allow
//   credentials: true,
// };
app.use(cors())


app.get("/", (req, res) => {
  res.send("This is a stack overflow clone api")
})

app.use("/user", userRoutes)
app.use('/questions', questionRoutes)
app.use("/answer", answerRouters)

const PORT = process.env.PORT

const dburl = process.env.CONNECTION_URL

mongoose.connect(dburl, { useNewUrlParser: true })
  .then(() => app.listen(PORT, () => { console.log(`Server running on port ${PORT}`) }))
  .catch((err) => console.log(err.message))

