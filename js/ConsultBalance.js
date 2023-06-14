// Decidi buscar metodos para mostrar el saldo real del arreglo que coincida con el usuario

let compartirSaldo=sessionStorage.getItem("saldo");

console.log(compartirSaldo);

balanceUser.innerHTML= compartirSaldo;






const returnPage= document.querySelector("#returnPage");

returnPage.addEventListener("click",redirectionUserAccount);

function redirectionUserAccount(){
    window.location="userAccount.html";
}