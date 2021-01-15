const express = require('express');
const {deleteQuestion, createQuestion,getAllQuestions} = require('../Controllers/questionController');
const router = express.Router();

router.route('/delete/:id').delete(deleteQuestion)

router.route('/getAll').get(getAllQuestions)

router.route('/createQ').post(createQuestion)

module.exports= router;