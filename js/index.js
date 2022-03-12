unction showSecondScreen() {
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

const btn = document.getElementById('btnValid');
btn.addEventListener('click', () => {

alert('pronto se desbloqueara esta función');

});

const btnBack = document.getElementById("btnBack");
btnBack.addEventListener('click', showFirstScreen)

window.addEventListener('load', function () {
   console.log('contenido ha cargado');
    
  var imagenes = [];

   imagenes[0] = '../img/img2.jpg'
    imagenes[1] = '../img/img3.jpg'
   imagenes[2] = '../img/img4.jpg'

  var indiceImagenes = 0;
   var tiempo = 1000;

   function cambiarImagenes() {

      document.slider.src = imagenes[indiceImagenes];

       if (indiceImagenes < 2){
         indiceImagenes++;
      } else {
            indiceImagenes = 0;
     }
  }

setInterval(cambiarImagenes, tiempo);
    
