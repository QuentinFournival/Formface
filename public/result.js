const questions = document.getElementsByClassName('questionJS')
const questionsArray = Array.from(questions)
const singleResponseQuestion = Array.from(document.querySelectorAll('.single'))
const validate = document.getElementById('sub')
const validateResp = document.getElementById('sube')

let requiredQuestionContent = []

function final(param, text) {
    const div = document.createElement("div");

    div.classList.add("contener-popUp")
    div.innerHTML = `

    <div id="bg" class="bg"></div>
    <div id="Pop" class="pop">
        <div class="contener-image">
            <img id="pic" src="/public/imgs/${param}.png" alt="">
        </div>
        <div class="text">
             <p>${text}</p>
        </div>
        <a id="acc" class=" btn btn-primary"> Merci ! </a>
     </div>
    `
    document.body.appendChild(div)
    let btn = document.querySelectorAll('#acc')
    let pop = document.querySelectorAll('#Pop')
    let bg = document.querySelectorAll('.bg')
    btn[btn.length - 1].addEventListener('click', () => {
        pop[pop.length - 1].style.display = "none";
        bg[bg.length - 1].style.display = "none";
    })
}

function popUp(question) {
    const div = document.createElement("div");

    div.classList.add("contener-popUp")
    div.innerHTML = `

    <div id="bg" class="bg"></div>
    <div id="Pop" class="pop">
        <div class="contener-image">
            <img id="pic" src="/public/imgs/att.png" alt="">
        </div>
        <div class="text">
             <p> Veuillez répondre à la question: ${question.getAttribute('name')}</p>
        </div>
        <a id="acc" class=" btn btn-primary"> Ok ! </a>
     </div>
    `
    document.body.appendChild(div)
    let btn = document.querySelectorAll('#acc')
    let pop = document.querySelectorAll('#Pop')
    let bg = document.querySelectorAll('.bg')
    btn[btn.length - 1].addEventListener('click', () => {
        pop[pop.length - 1].style.display = "none";
        bg[bg.length - 1].style.display = "none";
    })
}




questionsArray.forEach(question => {

    let required = question.getAttribute('data-require')
    if (required == "0") {
        question.classList.add('required')
    }
})
let requiredQuestion = Array.from(document.getElementsByClassName('required'))
requiredQuestion.forEach(element => {
    requiredQuestionContent.push(element.getAttribute('name'))
})

function checkUncheck(array, input) {
    const otherInput = array.filter(element => {
        if (element.getAttribute('name') != input.getAttribute('name')) {
            return element
        }
    })

    if (input.checked) {
        for(let i = 0;i<otherInput.length;i++){
             otherInput[i].checked = false
        }

    }
}

questionsArray.forEach(question => {
    const inputsArray = Array.from(question.getElementsByTagName('input'))
    console.log(inputsArray)
    if (inputsArray.length == 2) {
        inputsArray.forEach(input => {
            input.addEventListener('click', (e) => {
                checkUncheck(inputsArray, input)
            })
        })

    }

})

const menus = document.querySelectorAll('.menuD')
menus.forEach(element=>{
    const options = Array.from(element.getElementsByTagName('option'))
    options.forEach(option=>{

    })
})

function sendResponses() {
    let responsesValue = []
    let questionsContent = []
    for (const question of questionsArray) {

        const inputsArray = Array.from(question.getElementsByTagName('input'))
        if (question.getAttribute('name') && question.getAttribute('name').includes('Date de naissance')) {
            if (question.getElementsByTagName('input')[2] != undefined) {
                let response = {
                    question: question.getAttribute('name'),
                    response: question.getElementsByTagName('input')[2].value
                }
                if (responsesValue.length == 0 || questionsContent.includes(question.getAttribute('name')) == false) {
                    const filter = requiredQuestionContent.filter(element => {
                        if (element != question.getAttribute('name')) {
                            return element
                        }
                    })
                    requiredQuestionContent = filter

                    questionsContent.push(question.getAttribute('name'))
                    responsesValue.push(response)
                }
            } else {
                popUp(question);
                break
            }

        } else if (question.classList.contains('ouverteJS') && question.getAttribute('name').includes('Date de naissance') == false) {

            if (question.getElementsByTagName('input')[0].value != "") {
                let response = {
                    question: question.getAttribute('name'),
                    response: question.getElementsByTagName('input')[0].value
                }
                if (responsesValue.length == 0 || questionsContent.includes(question.getAttribute('name')) == false) {
                    const filter = requiredQuestionContent.filter(element => {
                        if (element != question.getAttribute('name')) {
                            return element
                        }
                    })
                    requiredQuestionContent = filter

                    responsesValue.push(response)
                    questionsContent.push(question.getAttribute('name'))
                }
            } else if (question.classList.contains('required')) {
                popUp(question);
                break
            }

        }else if(question.classList.contains("wrapperMenu")){
            const menus= Array.from(question.querySelector('.menuD'))
            menus.forEach(element=>{
                if(element.selected){
                    let response = {
                        question: question.getAttribute('name'),
                        response: element.label
                    }
                    questionsContent.push(question.getAttribute('name'))
                    responsesValue.push(response)
                }

            })
        }else{
            let response = {}
            let inputChecked = []
            inputsArray.forEach(input => {
                if (input.checked) {

                    inputChecked.push(input.getAttribute('name'))
                }
            })

            if (inputChecked.length == 0) {

                if (question.classList.contains('required')) {
                    popUp(question);
                    break
                }
            } else {
                response = {
                    question: question.getAttribute('name'),
                    response: inputChecked
                }
                if (responsesValue.length == 0 || questionsContent.includes(question.getAttribute('name')) == false) {
                    const filter = requiredQuestionContent.filter(element => {
                        if (element != question.getAttribute('name')) {
                            return element
                        }
                    })
                    requiredQuestionContent = filter
                    responsesValue.push(response)
                    questionsContent.push(question.getAttribute('name'))
                }
            }

        }
    }

    if (requiredQuestionContent.length == 0) {

        const div = document.createElement("div");

        div.classList.add("contener-popUp")
        div.innerHTML = `

        <div id="bg" class="bg"></div>
        <div id="Pop" class="pop">
            <div class="contener-image">
                <img id="pic" src="/public/imgs/Vector.png" alt="">
            </div>
            <div class="text">
                 <p>Voulez vous valider ces réponses?</p>
            </div>
            <a id="refuse" class=" btn btn-primary"> Non </a>
            <a id="accepte" class=" btn btn-primary"> Oui </a>
         </div>
        `
        document.body.appendChild(div)
        let btn = document.querySelectorAll('#accepte')
        let btnStop = document.querySelectorAll('#refuse')
        let pop = document.querySelectorAll('#Pop')
        let bg = document.querySelectorAll('.bg')
        btn[btn.length - 1].addEventListener('click', () => {

            let responses = {
                Input: responsesValue
            }

            let responseJson = JSON.stringify(responses)

            let option = {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                body: responseJson
            }
            console.log(responseJson)
            fetch('/answer/test', option).then(res => {

                if (res.status == 200) {
                    final("Vector", "Vos réponse ont bien été enregistrées, merci d'avoir rempli ce questionnaire. Vous allez être redirrigé vers la page d'accueil")
                    setTimeout(() => {
                        window.location.href = "/"
                    }, 5000)
                } else if (res.status == 208) {
                    final("att", "Une réponse à vôtre nom existe déjà dans nos registres, inutile de recommencer le questionnaire. Si des nouvelles réponses sont nécéssaires, contactez votre interlocuteur Face pour qu'il supprime les précédentes.")
                } else {
                    final("err", "Une erreur est survenue, veuillez réessayer plus tard. Si l'erreur persiste veuillez contacter votre interlocuteur Face")
                }

            })
        })

        setTimeout(() => {
            pop[pop.length - 1].style.display = "none";
            bg[bg.length - 1].style.display = "none";
        }, 5000)

        btnStop[btnStop.length - 1].addEventListener('click', () => {
            pop[pop.length - 1].style.display = "none";
            bg[bg.length - 1].style.display = "none";
        })
    }else{

        for(let questionR of requiredQuestionContent){
            requiredQuestion.forEach(element=>{
                if(element.getAttribute('Name')== questionR){
                    element.querySelector('input').style.border= "2px solid red"
                    element.querySelector('input').style.padding="10 px"

                }
            })

        }
    }

}
validate.addEventListener('click', (e) => {

    sendResponses()
})
validateResp.addEventListener('click', (e) => {

    sendResponses()
})




