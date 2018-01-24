$(document).ready(function () {
  setTimeout(function () {
    var mostrar= document.getElementById("fondoNegro");
    var mostrarInicio = document.getElementById("inicio");
    mostrar.classList.remove("show");
    mostrar.classList.add("hide");
    mostrarInicio.classList.remove("hide");
    mostrarInicio.classList.add("show");
  },3000);
});



/*$(document).ready(function () {
  $('.dropdown-button').dropdown('open');
  $('.dropdown-button').dropdown('close');*/



   /*$(".button-collapse").sideNav();
   $(".dropdown-button").dropdown();
 });*/
