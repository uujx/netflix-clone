const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')
const auth = require('./middleware/auth')

const userRouter = require('./routers/user')
const listRouter = require('./routers/movie')

const port = process.env.PORT

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})

const app = express()

app.use(express.json())
app.use(cors())
app.use(userRouter)
app.use(listRouter)
// app.use(express.static(path.join(__dirname, '/../dist')))

app.get('*', auth, (req, res) => {
  res.sendFile(path.join(__dirname, '/../dist/index.html'))
})

app.listen(port, () => {
  console.log('Server is up on port', port)
})
