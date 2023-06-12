
const cuentas = [
    { nombre: "Mali",password: 1234, saldo: 200 },
    { nombre: "Gera",password: 1000, saldo: 290 },
    { nombre: "Maui",password: 5678, saldo: 67 }
  ];


let buttonSubmit=document.querySelector("#enviodeform");




function validardatos(ar){
    ar.preventDefault();

    let userInput=String(document.querySelector("#exampleInputEmail1").value);

    let passwordInput=parseInt(document.querySelector("#exampleInputPassword1").value);
    
    let validateUser=false;

    for (let i of cuentas){
        if(i.nombre===userInput && i.password===passwordInput){
          
            validateUser=true;
            break;
        }
       
    }

    if(validateUser){
        console.log("funciona");
            window.location="UserAccount.html";
        }

    else{
        alert("El usuario o contraseña es incorrecto.");
    }
}

buttonSubmit.addEventListener("submit",validardatos)




