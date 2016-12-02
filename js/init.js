(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

//carrusel 
$(document).ready(function(){
     $('.carousel').carousel();
   });


// Mapas
var imagenes=new Array(
   'img/0B2.jpg',
   'img/6EF.jpg',
   'img/Paisaje-5.jpg'
  
);

/**
* Funcion para cambiar la imagen
*/
function rotarImagenes()
{
   // obtenemos un numero aleatorio entre 0 y la cantidad de imagenes que hay
   var index=Math.floor((Math.random()*imagenes.length));

   // cambiamos la imagen
   document.getElementById("imagen").src=imagenes[index];
}

/**
* Función que se ejecuta una vez cargada la página
*/
onload=function()
{
   // Cargamos una imagen aleatoria
   rotarImagenes();

   // Indicamos que cada 5 segundos cambie la imagen
   setInterval(rotarImagenes,5000);
}