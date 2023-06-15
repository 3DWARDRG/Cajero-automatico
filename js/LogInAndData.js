
// No enfatize mucho en las cuentas mas alla de colocarles un password, me centre mas en funcion y diseño.

const accounts = [
    { nombre: "Mali",password: 1234, saldo: 200 },
    { nombre: "Joss",password: 1000, saldo: 290 },
    { nombre: "Jenny",password: 5678, saldo: 67 }
  ];



// Traigo del DOM al formulario

let dataLogIn=document.querySelector("#dataLogIn");


// Utilize otro metodo para validar las credenciales intentanod aprender nuevos conceptos.


// Utilizo el formulario para utilizar la accion de enviar y ejecutar la funcion.

dataLogIn.addEventListener("submit",validateData);




// Funcion que consiste en validar las credenciales del usuario y subir su saldo a la memoria temporal del navegador para utilizarlo mas tarde.


// Al cerrar se restablecen los valores alterados a los valores originales.

function validateData(a){

    a.preventDefault();

    let userInput=String(document.querySelector("#userId").value);

    let passwordInput=parseInt(document.querySelector("#passwordOfUser").value);
    
    let outBucle=false;

    for (let i of accounts){
        if(i.nombre===userInput && i.password===passwordInput){
          
            outBucle=true;
            let selectUserBalance=i.saldo;
            sessionStorage.setItem("BalanceUser",selectUserBalance);
            break;
        }
       
    }

    if(outBucle){
        window.location="userAccount.html";
        }

    else{
        alert("El usuario o contraseña es incorrecto.");
    }
}

