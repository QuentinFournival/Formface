"use strict";

var questions = document.getElementsByClassName('questionJS');
var questionsArray = Array.from(questions);
var validate = document.getElementById('sub');
var validateResp = document.getElementById('sube');
var requiredQuestionContent = [];

function _final(param, text) {
  var div = document.createElement("div");
  div.classList.add("contener-popUp");
  div.innerHTML = "\n\n    <div id=\"bg\" class=\"bg\"></div>\n    <div id=\"Pop\" class=\"pop\">\n        <div class=\"contener-image\">\n            <img id=\"pic\" src=\"/public/imgs/".concat(param, ".png\" alt=\"\">\n        </div>\n        <div class=\"text\">\n             <p>").concat(text, "</p>\n        </div>\n        <a id=\"acc\" class=\" btn btn-primary\"> Merci ! </a>\n     </div>\n    ");
  document.body.appendChild(div);
  var btn = document.querySelectorAll('#acc');
  var pop = document.querySelectorAll('#Pop');
  var bg = document.querySelectorAll('.bg');
  btn[btn.length - 1].addEventListener('click', function () {
    pop[pop.length - 1].style.display = "none";
    bg[bg.length - 1].style.display = "none";
  });
}

function popUp(question) {
  var div = document.createElement("div");
  div.classList.add("contener-popUp");
  div.innerHTML = "\n\n    <div id=\"bg\" class=\"bg\"></div>\n    <div id=\"Pop\" class=\"pop\">\n        <div class=\"contener-image\">\n            <img id=\"pic\" src=\"/public/imgs/att.png\" alt=\"\">\n        </div>\n        <div class=\"text\">\n             <p> Veuillez r\xE9pondre \xE0 la question: ".concat(question.getAttribute('name'), "</p>\n        </div>\n        <a id=\"acc\" class=\" btn btn-primary\"> Ok ! </a>\n     </div>\n    ");
  document.body.appendChild(div);
  var btn = document.querySelectorAll('#acc');
  var pop = document.querySelectorAll('#Pop');
  var bg = document.querySelectorAll('.bg');
  btn[btn.length - 1].addEventListener('click', function () {
    pop[pop.length - 1].style.display = "none";
    bg[bg.length - 1].style.display = "none";
  });
}

questionsArray.forEach(function (question) {
  var drop = question.getAttribute('data-require');

  if (drop == "0") {
    question.classList.add('required');
  }
});
var requiredQuestion = Array.from(document.getElementsByClassName('required'));
requiredQuestion.forEach(function (element) {
  requiredQuestionContent.push(element.getAttribute('name'));
});

function checkUncheck(array, input) {
  var otherInput = array.filter(function (element) {
    if (element.getAttribute('name') != input.getAttribute('name')) {
      return element;
    }
  });

  if (input.checked) {
    otherInput[0].checked = false;
  }
}

questionsArray.forEach(function (question) {
  var inputsArray = Array.from(question.getElementsByTagName('input'));

  if (inputsArray.length == 2) {
    inputsArray.forEach(function (input) {
      input.addEventListener('click', function (e) {
        checkUncheck(inputsArray, input);
      });
    });
  }
});

function sendResponses() {
  var responsesValue = [];
  var questionsContent = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    var _loop = function _loop() {
      var question = _step.value;
      var inputsArray = Array.from(question.getElementsByTagName('input'));

      if (question.getAttribute('name').includes('Date de naissance')) {
        if (question.getElementsByTagName('input')[2] != undefined) {
          var response = {
            question: question.getAttribute('name'),
            response: question.getElementsByTagName('input')[2].value
          };

          if (responsesValue.length == 0 || questionsContent.includes(question.getAttribute('name')) == false) {
            var filter = requiredQuestionContent.filter(function (element) {
              if (element != question.getAttribute('name')) {
                return element;
              }
            });
            requiredQuestionContent = filter;
            questionsContent.push(question.getAttribute('name'));
            responsesValue.push(response);
          }
        } else {
          popUp(question);
          return "break";
        }
      } else if (question.classList.contains('ouverteJS') && question.getAttribute('name').includes('Date de naissance') == false) {
        if (question.getElementsByTagName('input')[0].value != "") {
          var _response = {
            question: question.getAttribute('name'),
            response: question.getElementsByTagName('input')[0].value
          };

          if (responsesValue.length == 0 || questionsContent.includes(question.getAttribute('name')) == false) {
            var _filter = requiredQuestionContent.filter(function (element) {
              if (element != question.getAttribute('name')) {
                return element;
              }
            });

            requiredQuestionContent = _filter;
            responsesValue.push(_response);
            questionsContent.push(question.getAttribute('name'));
          }
        } else if (question.classList.contains('required')) {
          popUp(question);
          return "break";
        }
      } else {
        var _response2 = {};
        var inputChecked = [];
        inputsArray.forEach(function (input) {
          if (input.checked) {
            inputChecked.push(input.getAttribute('name'));
          }
        });

        if (inputChecked.length == 0) {
          if (question.classList.contains('required')) {
            popUp(question);
            return "break";
          }
        } else {
          _response2 = {
            question: question.getAttribute('name'),
            response: inputChecked
          };

          if (responsesValue.length == 0 || questionsContent.includes(question.getAttribute('name')) == false) {
            var _filter2 = requiredQuestionContent.filter(function (element) {
              if (element != question.getAttribute('name')) {
                return element;
              }
            });

            requiredQuestionContent = _filter2;
            responsesValue.push(_response2);
            questionsContent.push(question.getAttribute('name'));
          }
        }
      }
    };

    for (var _iterator = questionsArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _ret = _loop();

      if (_ret === "break") break;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  if (requiredQuestionContent.length == 0) {
    var div = document.createElement("div");
    div.classList.add("contener-popUp");
    div.innerHTML = "\n\n        <div id=\"bg\" class=\"bg\"></div>\n        <div id=\"Pop\" class=\"pop\">\n            <div class=\"contener-image\">\n                <img id=\"pic\" src=\"/public/imgs/Vector.png\" alt=\"\">\n            </div>\n            <div class=\"text\">\n                 <p>Voulez vous valider ces r\xE9ponses?</p>\n            </div>\n            <a id=\"refuse\" class=\" btn btn-primary\"> Non </a>\n            <a id=\"accepte\" class=\" btn btn-primary\"> Oui </a>\n         </div>\n        ";
    document.body.appendChild(div);
    var btn = document.querySelectorAll('#accepte');
    var btnStop = document.querySelectorAll('#refuse');
    var pop = document.querySelectorAll('#Pop');
    var bg = document.querySelectorAll('.bg');
    btn[btn.length - 1].addEventListener('click', function () {
      var responses = {
        Input: responsesValue
      };
      var responseJson = JSON.stringify(responses);
      var option = {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        },
        body: responseJson
      };
      fetch('http://localhost:3000/answer/test', option).then(function (res) {
        if (res.status == 200) {
          _final("Vector", "Vos réponse ont bien été enregistrées, merci d'avoir rempli ce questionnaire. Vous allez être redirrigé vers la page d'accueil");

          setTimeout(function () {
            window.location.href = "/";
          }, 5000);
        } else if (res.status == 208) {
          _final("att", "Une réponse à vôtre nom existe déjà dans nos registres, inutile de recommencer le questionnaire. Si des nouvelles réponses sont nécéssaires, contactez votre interlocuteur Face pour qu'il supprime les précédentes.");
        } else {
          _final("err", "Une erreur est survenue, veuillez réessayer plus tard. Si l'erreur persiste veuillez contacter votre interlocuteur Face");
        }
      });
    });
    setTimeout(function () {
      pop[pop.length - 1].style.display = "none";
      bg[bg.length - 1].style.display = "none";
    }, 5000);
    btnStop[btnStop.length - 1].addEventListener('click', function () {
      pop[pop.length - 1].style.display = "none";
      bg[bg.length - 1].style.display = "none";
    });
  }
}

validate.addEventListener('click', function (e) {
  sendResponses();
});
validateResp.addEventListener('click', function (e) {
  sendResponses();
});