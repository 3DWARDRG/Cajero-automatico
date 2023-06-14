
// Redirecciona a el usuario a su saldo.

const consultBalance= document.querySelector("#consult-balance");

consultBalance.addEventListener("click",redirectionConsultBalance);

function redirectionConsultBalance(){
    window.location="userBalance.html";
}


// Redirecciona a el usuario para ingresar un monto

const addMoney= document.querySelector("#addMoney");

addMoney.addEventListener("click",redirectionAddMoney);

function redirectionAddMoney(){
    window.location="userDeposit.html";
}