const mongoose = require('mongoose');
const QuestionSchema = require('../../Schemas/questionSchema');

const QuestionModel = mongoose.model('QuestionModel', QuestionSchema, 'QUESTION_COLLECTION');
module.exports = QuestionModel;