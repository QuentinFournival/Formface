



document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {

    });
  })

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
        <a id="acc" class=" btn btn-danger"> Oups... </a>
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

document.getElementById('sendMail').addEventListener('click',async (e)=>{

    const body = {
        Email: document.getElementById('EmailForgot').value
    }
    const option = {
        method:"POST",
        headers:{
            'Content-type': 'application/json; charset=UTF-8'
        },
        body:JSON.stringify(body)
    }
    const res = await fetch('/user/forgot',option)
     if(res.status == 401){
       final("err","Aucune adresse mail correspondante n'a été trouvée")
     }
})