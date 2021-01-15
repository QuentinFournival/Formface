const next = document.querySelector('#next');
const contener = document.querySelector('.contener-questions');
const back = document.querySelector('.back')
const submit = document.querySelector('#sub');
const cont = document.querySelectorAll('.contener-box');
const inputName = document.querySelectorAll('.input-field');
const inputArray = Array.from(inputName);

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {

    });
  });



const drop = Array.from(document.querySelectorAll('.drop'));
    drop.forEach(field =>{
    const yes = field.querySelector('.yes');
    const body = field.querySelector('.drop-body');
    yes.addEventListener('change', () =>{
        if(yes.checked){
            body.style.maxHeight = "inherit"
        }else{
            body.style.maxHeight = 0
        }
    })

    })

inputArray.forEach(input => {
    const date = input.getElementsByTagName('input');
    const labels = input.getElementsByTagName('label');

    if (labels[0].innerText == "Date de naissance") {
        date[0].classList.add('datepicker');
    }
})

cont.forEach(contener => {
    const label = contener.querySelectorAll('.boxLabel');
    if (label.length == 2) {
        label.forEach(element => {
            element.style.width = 50 + "%";
        })
    } else {
        label.forEach(element => {
            element.style.width = 100 / 2 + "%";
        })
    }


})


back.style.display = "none";




function slide(valeur,pas,début){
    let i = 0;
    function progressBarr(){
         let numberOfSlides = ((((document.querySelector('.contener-main').scrollWidth)+pas)/pas).toFixed(0))
         let numberOfSlidesB= Number(numberOfSlides) +1;

        for(let i = 1;i<9;i++){
           const newDiv= document.createElement('div')
           newDiv.classList.add('toggle');
           newDiv.innerHTML=`<p>${i+1}</p>`
           document.querySelector('.contener-progress').appendChild(newDiv)
           if(i<(8)){
               const newBar = document.createElement('div')
               newBar.classList.add(`barre-${i+1}`)
               newBar.classList.add('toggle');
               document.querySelector('.contener-progress').appendChild(newBar)
               newBar.style.height = 15 +"px";
               newBar.style.width = 60 + "px";
               newBar.style.paddingTop = 2+"px";
               newBar.style.paddingBottom = 2+"px";
               newBar.style.paddingRight = 15+"px";
               newBar.style.paddingLeft = 15+"px";
               newBar.style.borderRadius = 0;
               newBar.style.position = "absolute";
               newBar.style.top = 33 +"px";
               newBar.style.left = 37+(90*i) +"px";
           }
        }
    }
    progressBarr();
    let nodeList = document.querySelectorAll('.toggle');
    const tableau = Array.from(nodeList);
    function progress() {
        tableau.forEach(element => {
            if (tableau.indexOf(element) <= i) {
                element.classList.add('on');
            } else {
                element.classList.remove('on');
            }
        })
    }
contener.style.left = valeur + "px"

back.addEventListener('click', () => {

    valeur += pas;
    contener.style.left = valeur + "px";
    i = i - 2;
    progress();
    sub();
    if (valeur >= début) {
        back.style.display = "none";
    }

})
next.addEventListener('click', () => {
    valeur += -pas;
    contener.style.left = valeur + "px";
    i = i + 2;
    progress();
    sub();
    if (valeur <= début) {
        back.style.display = "block";

    }

})
function sub() {
    if (i >= tableau.length - 1) {
        next.classList.add('none');
        submit.classList.remove('none')

    } else {
        next.classList.remove('none');
        submit.classList.add('none')
    }
}
}
slide(940,1715,940)
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.datepicker');
    M.Datepicker.init(elems, {
        showClearBtn: true,
        yearRange: [1950,2021],
       minDate: new Date("Jan", 01, 1950),
        i18n: {
            months: [
                'Janvier',
                'Fevrier',
                'Mars',
                'Avril',
                'Mai',
                'Juin',
                'Juillet',
                'Aout',
                'Septembre',
                'Octobre',
                'Novembre',
                'Decembre'
            ],
            monthsShort: [
                'Jan',
                'Fev',
                'Mar',
                'Avr',
                'Mai',
                'Juin',
                'Juil',
                'Aout',
                'Sept',
                'Oct',
                'Nov',
                'Dec'
            ],
            weekdays: [

                'Lundi',
                'Mardi',
                'Mercredi',
                'Jeudi',
                'Vendredi',
                'Samedi',
                'Dimanche'
            ],
            weekdaysAbbrev: ['L', 'M', 'M', 'J', 'V', 'S', 'D'],
            weekdaysShort: [
                'Lun',
                'Mar',
                'Mer',
                'Jeu',
                'Ven',
                'Sam',
                'Dim'
            ]
        }


    });
});



document.addEventListener('DOMContentLoaded', function() {
    var box = document.querySelectorAll('.modal');
    M.Modal.init(box, {});
  });




