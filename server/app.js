const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')
const auth = require('./middleware/auth')

const authRouter = require('./routers/auth')
const listRouter = require('./routers/movie')

const port = process.env.PORT || 9000
const connectionURL = 'mongodb://127.0.0.1:27017/netflix'

mongoose.connect(connectionURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})

const app = express()

app.use(express.json())
app.use(cors())
app.use(authRouter)
app.use(listRouter)
// app.use(express.static(path.join(__dirname, '/../dist')))

app.get('*', auth, (req, res) => {
  res.sendFile(path.join(__dirname, '/../dist/index.html'))
})

app.listen(port, () => {
  console.log('Server is up on port', port)
})
