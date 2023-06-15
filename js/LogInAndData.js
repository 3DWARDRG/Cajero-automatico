
// No enfatize mucho en las cuentas mas alla de colocarles un password, me centre mas en funcion y diseño.

const accounts = [
    { nombre: "Mali",password: 1234, saldo: 200 },
    { nombre: "Joss",password: 1000, saldo: 290 },
    { nombre: "Jesua",password: 5678, saldo: 67 }
  ];



// Traigo del DOM al formulario

let dataLogIn=document.querySelector("#dataLogIn");


// Utilize otro metodo para validar las credenciales intentanod aprender nuevos conceptos.


// Utilizo el formulario para utilizar la accion de enviar y ejecutar la funcion.

dataLogIn.addEventListener("submit",validateData);


//Convertir alerta a display:none

document.querySelector("#alertIncorrect").style.display="none";



// Funcion que consiste en validar las credenciales del usuario y subir su saldo a la memoria temporal del navegador para utilizarlo mas tarde.


// Al cerrar se restablecen los valores alterados a los valores originales.

function validateData(a){

    a.preventDefault();

    let userId=String(document.querySelector("#userId").value);

    let passwordOfUser=parseInt(document.querySelector("#passwordOfUser").value);
    
    let outBucle=false;

    for (let i of accounts){

        // Condicional: Valida si los datos introducidos son validos.

        if(i.nombre===userId && i.password===passwordOfUser){
          
            outBucle=true;
            let selectUserBalance=i.saldo;
            sessionStorage.setItem("balanceUser",selectUserBalance);
            break;
        }
       
    }

    if(outBucle){
        window.location="userTransaction.html";
        }

    else{
        document.querySelector("#alertIncorrect").style.display="flex";
    }
}

