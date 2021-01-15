"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems, {});
});
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, {});
});

function _final(param, text) {
  var div = document.createElement("div");
  div.classList.add("contener-popUp");
  div.innerHTML = "\n\n    <div id=\"bg\" class=\"bg\"></div>\n    <div id=\"Pop\" class=\"pop\">\n        <div class=\"contener-image\">\n            <img id=\"pic\" src=\"/public/imgs/".concat(param, ".png\" alt=\"\">\n        </div>\n        <div class=\"text\">\n             <p>").concat(text, "</p>\n        </div>\n        <a id=\"acc\" class=\" btn btn-danger\"> Oups... </a>\n     </div>\n    ");
  document.body.appendChild(div);
  var btn = document.querySelectorAll('#acc');
  var pop = document.querySelectorAll('#Pop');
  var bg = document.querySelectorAll('.bg');
  btn[btn.length - 1].addEventListener('click', function () {
    pop[pop.length - 1].style.display = "none";
    bg[bg.length - 1].style.display = "none";
  });
}

document.getElementById('sendMail').addEventListener('click', function _callee(e) {
  var body, option, res;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          body = {
            Email: document.getElementById('EmailForgot').value
          };
          option = {
            method: "POST",
            headers: {
              'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(body)
          };
          _context.next = 4;
          return regeneratorRuntime.awrap(fetch('/user/forgot', option));

        case 4:
          res = _context.sent;

          if (res.status == 401) {
            _final("err", "Aucune adresse mail correspondante n'a été trouvée");
          }

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
});