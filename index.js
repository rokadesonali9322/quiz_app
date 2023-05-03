require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const conn = require('./db')

// port
const PORT = process.env.PORT || 5000
// cors
app.use(cors())
// bodyparse connected
app.use(bodyParser.urlencoded({ extended: 'false' }))
app.use(bodyParser.json())

// data base connecttion
conn.on('connected', (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('mongodb connected')
  }
})
// / Define routes for the API
app.get('/', (req, res) => {
  res.send('<h1>Welcome to home page</h1>')
})

app.use('/quizzes', require('./routes/quizzes'))

// start server
app.listen(PORT, () => {
  console.log('server is started', PORT)
})
