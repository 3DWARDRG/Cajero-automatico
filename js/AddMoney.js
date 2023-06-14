
let shareBalance=sessionStorage.getItem("saldo");

balanceUser.innerHTML=shareBalance;


let converseNuM=Number(shareBalance);

let balanceLimitAbove= 990;



let updateBalance= document.querySelector("#enviarprueba");



let newMoney= Number(document.querySelector("#newMoney").value);

console.log(newMoney)

updateBalance.addEventListener("submit",UpBalance);

function UpBalance(){

    converseNuM += newMoney;

    console.log(converseNuM)

    if(shareBalance>balanceLimitAbove){

        console.log("Funciona no puedes colocar tanto saldo");
    }
}