/**
        emailjs.send("SERVICE ID", "TEMPLATE NAME", {
          to_name: "USERNAME",
          from_name: "FROM NAME",
          message: "MESSAGE",
        });
       **/
       
      
   
    
   

    

   
   
   
   
   
   
    function validar() {
      let namee = document.querySelector(".usuari");
      let email = document.querySelector(".correu");
      let btn = document.querySelector(".enviar");
      btn.addEventListener("click", (e) => {
        
        e.preventDefault();
     let name = localStorage.getItem('nomPerson');
     let correu= localStorage.getItem('correuPerson')

        
        console.log('Nom2;'+name);
        console.log('Nom2;'+correu);
        if (name == namee.value && email.value==correu) {
            success();
            
        }  
        
        else{
         error();
        }
      });
    }
    validar();

    


    function error() {
      Swal.fire({
        icon: "error",
        title: "Ostres...",
        text: "usuari o correu incorrectes!",
      });
    }
    
    

 

    function success() {
      Swal.fire({
        icon: "success",
        title: "Perfecte!...",
        text: "has iniciat sessio!",
      });
    }
    


