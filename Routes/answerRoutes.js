const express = require('express');
const { createAnswer, getAll, deleteAnswer, getPdf, getAlltest, createAnswerVerif,redirect } = require('../Controllers/answerController');
const router = express.Router();

router.route('/').post(createAnswer)
                 .get(redirect)



router.route('/:id').delete(deleteAnswer)
                    .get(getPdf)

router.route('/test').post(createAnswerVerif)
module.exports = router