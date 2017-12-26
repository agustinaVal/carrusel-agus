$(document).ready(function(){
  $('.fotos').hide(); // escondo todas las fotos

  /*
  *muestra la primera foto
  */
  $('.fotos:first').show();

  /*
  * al primer círculo le doy el color rosado
  *
  */
  $('.fa-circle:first').css({'color': '#FF7FB6'});

  /*
  * cuando al círculo se le haga click ejecutará la función next
  *
  */
  $('.fa-circle').click(next);


  function next(){
    
    var circuloP = $(this).index() + 1;
    console.log(circuloP);
    /*
    * escondo todas las fotos para que la animación funcione
    */
    $('.fotos').hide();
    /*
    * enlazo circulo donde se clikeo con las foto siguiente
    *
    */
    $('#img' + circuloP).fadeIn(400);
    /*
    * cambio color del circulo cuando va cambiando de pagina
    */
    $('.fa-circle').css({'color': '#FFF'});
    $(this).css({'color': '#7F3F76FF'});
  }
})
