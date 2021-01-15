const express = require('express');
const Answer = require('../Domain/Domain_Services/Models/answerModel');
const DB = require('../Domain/Data/dbConnection');

module.exports = {

    createAnswer(req, res) {
        const NewAnswer = new Answer({
            Input: req.body.Input
        })
        NewAnswer.save((err, answer) => {
            if (err) {
                throw err
            } else {
                res.send('Reponse créée')
            }
        })
    },
    getAll(req, res) {
        Answer.find({}).then(result => {
            res.render('back', { responses: result })
        })
    },
    deleteAnswer(req, res) {

        Answer.findOne({ _id: req.params.id },(err,result)=>{
            if(err){
                res.redirect('/user/login')
            }
            if (result == null) {
                Answer.find({}).then(result => {
                    res.render('back', { responses: result })
                })
            }else{
                result.remove();
                Answer.find({}).then(result => {
                    res.render('back', { responses: result })
                })
            }
        })

    },
    getPdf(req, res) {
        Answer.findOne({ _id: req.params.id },(err,result)=>{
            if(err){
                res.send("Une erreur s'est produite, la page ne peut être chargée")
            }
            if (result != null) {
                res.render('pdf', {
                    result: result
                })
            }else{
                res.redirect("/user/login")
            }
        })

    },
    createAnswerVerif(req, res) {

        let ddn = req.body.Input.find(input => {
            return input.question == 'Date de naissance'
        })
        let name = req.body.Input.find(input => {
            return input.question == 'Nom-Prénom'
        })
        let firstVerif;
        let secondVerif;
        Answer.find({}).then(result => {
            for (const res of result) {
                firstVerif = res.Input.find(input => {
                    if (typeof input.response == "string") {
                        return input.response.toLowerCase() == name.response.toLowerCase()
                    }
                })
            }

            if (firstVerif != undefined) {
                for (const res of result) {
                    secondVerif =  res.Input.find(input => {
                        return input.response == ddn.response
                    })
                }

            }

            if(secondVerif == undefined){
                const NewAnswer = new Answer({
                    Input: req.body.Input
                })
                NewAnswer.save((err, answer) => {
                    if (err) {
                        throw err
                    } else {
                        res.send('Reponse créée')
                    }
                })
            }else{
                res.sendStatus(208)
            }
        })
    },
    redirect(req,res){
        res.redirect('/user/login')
    }
}