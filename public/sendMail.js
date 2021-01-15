

  document.getElementById('sendMail').addEventListener('click',async(e)=>{
      const option = {
          method:"POST",
          headers:{
            'Content-type': 'application/json; charset=UTF-8'
          },
          body: JSON.stringify({Email: document.getElementById('Email').value})
      }
     const req = await fetch('/user/envoiFormulaire',option)
    
  })
