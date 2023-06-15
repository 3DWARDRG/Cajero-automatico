// Variable para definir saldo del usario seleccionado en la nube del navegador

let userBalanceShared = Number(sessionStorage.getItem("balanceUser"));

// Limite de tope minimo establecido
let minimumBalance= 10;


// Mostrar saldo en pantalla

balance.innerHTML= userBalanceShared;

// Alerta Transaccion no exitosa
document.querySelector("#alertDanger").style.display="none";


//Alerta Transaccion exitosa
document.querySelector("#alertSuccess").style.display="none";

// Utilizo el formulario y no el boton

let addAmountMoney= document.querySelector("#addAmountMoney");

// Cuando se genere la accion "Submit" ejecutara la funcion

addAmountMoney.addEventListener("submit",retiredBalance);

// Esta funcion se encarga de restar el valor introducido por el usuario teniendo en cuenta un tope minimo.
// Muestra una alerta al saldo que el usuario introdujo previamente si es valido o no.


function retiredBalance(a){
    a.preventDefault();

    let valueToDraw= Number(document.querySelector("#outMoney").value);
    
    userBalanceShared-= valueToDraw;

    if(userBalanceShared<minimumBalance){


        userBalanceShared+=valueToDraw;

        document.querySelector("#alertDanger").style.display="flex";

    }

    else{

        balance.innerHTML= userBalanceShared;

        sessionStorage.setItem("balanceUser",userBalanceShared)

        document.querySelector("#alertSuccess").style.display="flex";

        let joinedBalance= document.querySelector("#joinedBalance");

        joinedBalance.innerHTML= valueToDraw;

        setTimeout(function() {
            document.querySelector('#alertSuccess').style.display = 'none';
        }, 4000);
    }

}

// Redirecciona al usuario a el menu transaccional

const returnPage= document.querySelector("#returnPage");

returnPage.addEventListener("click",returnUserTransaction);

function returnUserTransaction(){
    window.location="UserTransaction.html";
}