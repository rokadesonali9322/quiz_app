const express = require('express')
const QuizController = require('../Controller/quizController')

const router = express.Router()

// save new quiz
router.post('/', QuizController.createQuiz)

// retrive the active quiz
router.get('/active', QuizController.getActiveQuiz)

//retrive the result of quiz
router.get('/:id/result', QuizController.getQuizResult)

// get  update the quiz

QuizController.updateQuizStatus()

// get all the quiz
router.get('/all', QuizController.getAllQuizzes)

module.exports = router
