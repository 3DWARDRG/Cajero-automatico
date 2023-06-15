
let shareBalance=sessionStorage.getItem("saldo");

balanceUser.innerHTML=shareBalance;


let converseNuM=Number(shareBalance);

let balanceLimitAbove= 990;

document.querySelector("#alertSuccess").style.display="none";


let updateBalance= document.querySelector("#enviarprueba");



updateBalance.addEventListener("submit",UpBalance);






function UpBalance(a){

    a.preventDefault();


    let newMoney= Number(document.querySelector("#newMoney").value);

    console.log(newMoney)

    converseNuM += newMoney;

    console.log(converseNuM)

    if(converseNuM>balanceLimitAbove){

       alert("No puedes colocar tanto saldo");
        converseNuM-=newMoney;
        console.log(converseNuM)
    }

    else{
        balanceUser.innerHTML= converseNuM;

        sessionStorage.setItem("saldo",converseNuM)

        document.querySelector("#alertSuccess").style.display="flex";

        setTimeout(function() {
            document.querySelector('#alertSuccess').style.display = 'none';
        }, 4000);


        console.log("funciona")
    }
}



const returnPage= document.querySelector("#returnPage");

returnPage.addEventListener("click",returnUserAccountPage);

function returnUserAccountPage(){
    window.location="UserAccount.html";
}




