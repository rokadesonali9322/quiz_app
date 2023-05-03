const Quiz = require('../model/quiz.js')
// save new quiz
exports.createQuiz = async (req, res) => {
  try {
    const quiz = new Quiz(req.body)
    quiz.status = 'active'
    await quiz.save()
    res.status(201).send(quiz)
  } catch (error) {
    res.status(400).send(error)
  }
}

// retrive the active quiz
exports.getActiveQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findOne({ status: 'active' })
    if (!quiz) {
      throw new Error('No active quiz found')
    }
    res.send(quiz)
  } catch (error) {
    res.status(404).send({ error: error.message })
  }
}

// //retrive the result of quiz

exports.getQuizResult = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id)
    if (!quiz) {
      return res.status(404).send('Quiz not found')
    }
    const now = new Date()
    if (quiz.endDate.getTime() + 5 * 60 * 1000 > now.getTime()) {
      return res.status(400).send('Quiz result not available yet')
    }
    res.send(`<h1>The correct answer was option ${quiz.rightAnswer}</h1>`)
  } catch (error) {
    res.status(500).send(error)
  }
}

// get and update quiz status
exports.updateQuizStatus = async () => {
  try {
    const now = new Date()
    await Quiz.updateMany(
      {
        status: 'active',
        start_time: { $lte: now },
        end_time: { $gt: now },
      },
      {
        $set: { status: 'completed' },
      },
    )
  } catch (error) {
    console.error(error)
  }
}

// // get all the quiz
exports.getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find({})
    res.send(quizzes)
  } catch (error) {
    res.status(500).send(error)
  }
}
