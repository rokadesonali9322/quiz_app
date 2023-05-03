const mongoose = require('mongoose')
const quizSchema = new mongoose.Schema({
  quenstion: {
    type: String,
    required: true,
  },
  options: {
    type: [String],
    requried: true,
  },
  rightAnswer: {
    type: Number,
    requried: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
})

const Quiz = mongoose.model('quizzes', quizSchema)

module.exports = Quiz
