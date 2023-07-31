// Variable para definir saldo del usario seleccionado en la nube del navegador
let balanceUser=Number(sessionStorage.getItem("balanceUser"));
// Definir saldo en pantalla
balance.innerHTML=balanceUser;
// Limite de saldo maximo
let balanceLimitAbove= 990;

// Alerta de transaccion exitosa : oculta

document.querySelector("#alertSuccess").style.display="none";

document.querySelector("#alertDanger").style.display="none";


// Utilizo el formulario y no el boton

let updateBalance= document.querySelector("#dataDeposit");

// Cuando se genere la accion "Submit" ejecutara la funcion

updateBalance.addEventListener("submit",UpBalance);


// Esta funcion se encarga de sumar el valor introducido por el usuario teniendo en cuenta un tope maximo.
// Mostrando una alerta al saldo que el usuario introdujo previamente



function UpBalance(a){

    a.preventDefault();


    let newMoney= Number(document.querySelector("#newMoney").value);


    balanceUser += newMoney;


    if(balanceUser>balanceLimitAbove){

        balanceUser-=newMoney;

        document.querySelector("#alertDanger").style.display="flex";

    }

    else{
        balance.innerHTML= balanceUser;

        sessionStorage.setItem("balanceUser",balanceUser)

        let joinedBalance= document.querySelector("#joinedBalance");

        joinedBalance.innerHTML= newMoney;

        document.querySelector("#alertSuccess").style.display="flex";

        setTimeout(function() {
            document.querySelector('#alertSuccess').style.display = 'none';
        }, 4000);
    }
}


// Redirecciona al usuario a el menu transaccional


const returnPage= document.querySelector("#returnPage");

returnPage.addEventListener("click",returnUserTransaction);

function returnUserTransaction(){
    window.location="userTransaction.html";
}




