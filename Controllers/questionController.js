const express = require('express');
const Question = require('../Domain/Domain_Services/Models/questionModel');
const DB = require('../Domain/Data/dbConnection');

module.exports = {

    createQuestion(req, res) {
        const NewQuestion = new Question ({
            Type: req.body.Type,
            SecondaryType:req.body.SecondaryType,
            InputNumber: req.body.InputNumber,
            Require:req.body.Require,
            SingleResponse:req.body.SingleResponse,
            Content: req.body.Content,
            InputContent: req.body.InputContent,
            Section: req.body.Section,
            Dropdown: req.body.Dropdown,
            DropdownValue: req.body.DropdownValue
         })
         NewQuestion.save((err, question) => {
            if(err){
                console.log(err)
            }else{
                res.send('Question créée')
            }})
    },

    deleteQuestion(req, res) {
        const Id = req.params.id
        Question.findByIdAndRemove(Id).then((question) => {
           res.send('Question suprimée')
        })
    },
    getAllQuestions(req,res){
        Question.find({},(err,result)=>{
            if(err){
                res.send(err)
            }else{
                res.render('Index', {
                    questions:result
                })
            }
        })
    },

    acc(req, res){
        res.render("accueil")
    }


}
