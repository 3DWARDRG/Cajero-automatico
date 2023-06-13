
// No enfatize mucho en las cuentas mas alla de colocarles un password, me centre mas en funcion y diseño.

const cuentas = [
    { nombre: "Mali",password: 1234, saldo: 200 },
    { nombre: "Joss",password: 1000, saldo: 290 },
    { nombre: "Jenny",password: 5678, saldo: 67 }
  ];


  let pruebaSaldo;

let buttonSubmit=document.querySelector("#enviodeform");


// Utilize otro metodo para validar las credenciales intentanod aprender nuevos conceptos.




buttonSubmit.addEventListener("submit",validardatos);














function validardatos(ar){
    ar.preventDefault();

    let userInput=String(document.querySelector("#exampleInputEmail1").value);

    let passwordInput=parseInt(document.querySelector("#exampleInputPassword1").value);
    
    let validateUser=false;

    for (let i of cuentas){
        if(i.nombre===userInput && i.password===passwordInput){
          
            validateUser=true;
            let a=i.saldo;
            sessionStorage.setItem("saldo",a);
            break;
        }
       
    }

    if(validateUser){
        console.log(pruebaSaldo);
        window.location="userAccount.html";
        }

    else{
        alert("El usuario o contraseña es incorrecto.");
    }
}

