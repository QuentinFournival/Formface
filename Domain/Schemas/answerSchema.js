const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnswerSchema = new Schema ({
    Input : [{type: Object, required: true}]
})

module.exports = AnswerSchema;
