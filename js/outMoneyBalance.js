

let userBalanceShared = Number(sessionStorage.getItem("saldo"));

let minimumBalance= 10;

console.log(userBalanceShared)

balanceUser.innerHTML= userBalanceShared;

let addAmountMoney= document.querySelector("#addAmountMoney");


addAmountMoney.addEventListener("submit",retiredBalance);


function retiredBalance(a){
    a.preventDefault();

    let valueToDraw= Number(document.querySelector("#outMoney").value);

    console.log(valueToDraw)
    
    userBalanceShared-= valueToDraw;

    console.log(userBalanceShared)

    if(userBalanceShared<minimumBalance){


        userBalanceShared+=valueToDraw;

        alert("no puedes retirar todo tu dinero, somos un banco, nosotros no perdemos.")
    }

    else{

        balanceUser.innerHTML= userBalanceShared;
        sessionStorage.setItem("saldo",userBalanceShared)
    }

}

const returnPage= document.querySelector("#returnPage");

returnPage.addEventListener("click",returnUserAccountPage);

function returnUserAccountPage(){
    window.location="UserAccount.html";
}