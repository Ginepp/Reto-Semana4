import validator from './validator.js';

function showSecondScreen() {
    let hide = document.getElementById("first__screen")
    let show = document.getElementById("second__screen")
    hide.style.display = "none";
    show.style.display = "block";
}

function showFirstScreen() {
    let hide = document.getElementById("second__screen")
    let show = document.getElementById("first__screen")
    hide.style.display = "none"
    show.style.display = "block"
}

const btnBuy = document.getElementsByClassName('buy_button');
for (let i = 0; i < btnBuy.length; i++) {
    btnBuy[i].addEventListener('click', showSecondScreen);
}

let cardDigitNumber;
const btn = document.getElementById('btnValid');
btn.addEventListener('click', btnValid);
function btnValid(){

    cardDigitNumber= document.getElementById("numberCard").value;


 let digit1= validator.isValid(cardDigitNumber);
 let digit2= validator.maskify(cardDigitNumber);
 
 if (digit1) {
     document.getElementById("resultado").textContent="RESULTADO:"+"Tarjeta valida, Gracias por tu compra";
     document.getElementById("number").textContent= digit2;
     document.getElementById("numberCard").textContent= digit2;
 }
 else {
    document.getElementById("resultado").textContent="RESULTADO:"+"Tarjeta Invalida, no es posible realizar tu compra";
    document.getElementById("number").textContent= "";
    document.getElementById("numberCard").textContent= "";
}

}

const btnBack = document.getElementById("btnBack");
btnBack.addEventListener('click', showFirstScreen)
