"use strict";

var express = require('express');

var Question = require('../Domain/Domain_Services/Models/questionModel');

var DB = require('../Domain/Data/dbConnection');

module.exports = {
  createQuestion: function createQuestion(req, res) {
    var NewQuestion = new Question({
      Type: req.body.Type,
      InputNumber: req.body.InputNumber,
      Content: req.body.Content,
      InputContent: req.body.InputContent,
      Section: req.body.Section,
      Dropdown: req.body.Dropdown,
      DropdownValue: req.body.DropdownValue
    });
    NewQuestion.save(function (err, question) {
      if (err) {
        console.log(err);
      } else {
        res.send('Question créée');
      }
    });
  },
  deleteQuestion: function deleteQuestion(req, res) {
    var Id = req.params.id;
    Question.findByIdAndRemove(Id).then(function (question) {
      res.send('Question suprimée');
    });
  },
  getAllQuestions: function getAllQuestions(req, res) {
    Question.find({}, function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.render('Index', {
          questions: result
        });
      }
    });
  },
  acc: function acc(req, res) {
    res.render("accueil");
  }
};