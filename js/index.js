window.addEventListener('load', function () {
    console.log('el contenido ha cargado');
    
    var imagenes = [];

    imagenes[0] = './img/img2.jpg'
    imagenes[1] = './img/img3.jpg'
    imagenes[2] = './img/img4.jpg'

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
    
});