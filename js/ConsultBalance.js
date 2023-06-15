// Decidi buscar metodos para mostrar el saldo real del arreglo que coincida con el usuario

let balanceUser=sessionStorage.getItem("balanceUser");

console.log(balanceUser);

balance.innerHTML= balanceUser;




// Codigo que redirecciona al usuario la menu de transacciones.

const returnPage= document.querySelector("#returnPage");

returnPage.addEventListener("click",redirectionUserAccount);

function redirectionUserAccount(){
    window.location="userTransaction.html";
}