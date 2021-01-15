const mongoose = require('mongoose');
const AnswerSchema = require('../../Schemas/answerSchema');

const AnswerModel = mongoose.model('AnswerModel', AnswerSchema, 'ANSWER_COLLECTION');
module.exports = AnswerModel;