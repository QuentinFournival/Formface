const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema ({
    Type : { type: String, enum: ['Ouverte', 'Fermée'], required: true},
    SecondaryType:{type:String, enum:['Select']},
    Require: {type:Boolean},
    SingleResponse:{type:Boolean},
    InputNumber : { type: Number, required: true},
    Content : { type: String, required: true},
    InputContent : [{ type: String, required: true}],
    Section : {type:String,required: true },
    Dropdown: {type:Number,required:true},
    DropdownValue: {type:Number}
})

module.exports= QuestionSchema;