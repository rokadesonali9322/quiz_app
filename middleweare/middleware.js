const express = require('express')
// middle weare

const router = express.Router()

router.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
