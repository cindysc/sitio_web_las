/* Initialize Swiper */
$(document).ready(function(){
    /* slider */
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

});
/*
$ ( function () {
   ' use strict ' ;
   var options = {
    prefetch :  verdadero ,
    cacheLength :  2 ,
    onStart : {
      duración :  250 , // Duración de nuestra animación
      render :  function ( $ container ) {
         // Agrega tu animación CSS invirtiendo class
        $ container . addClass ( ' is-exiting ' );

        // Reinicia tu animación
        smoothState . restartCSSAnimations ();
      }
    }
    onReady : {
      duración :  0 ,
       render :  function ( $ container , $ newContent ) {
         // Elimina tu animación CSS invirtiendo class
        $ container . removeClass ( ' is-exiting ' );

        // Inyectar el nuevo contenido
        $ contenedor . html ($ newContent);

      }
    }
  }
  smoothState =  $ ( ' #main ' ). smoothState (opciones). datos ( ' smoothState ' );
});
*/
