document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {

    });
  });


// const btn = Array.from(document.querySelectorAll('.supp'));
// btn.forEach(element => {
//     element.addEventListener('click', (prevent) =>{
//         prevent.preventDefault()
//     })
// })


const tableaux = document.querySelector('#un');
const formulaire = document.querySelector('#deux');
const tabUn = document.querySelector('#test1');
const tabDeux = document.querySelector('#test2');

// formulaire.addEventListener('click', () =>{
//     tableaux.classList.remove('actives');
//     formulaire.classList.add('actives');
//     tabUn.style.display ="none";
//     tabDeux.style.display ="block";

// });

tableaux.addEventListener('click', () => {
    formulaire.classList.remove('actives');
    tableaux.classList.add('actives');
    tabDeux.style.display ="none";
    tabUn.style.display ="flex";
});





